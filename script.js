// Variables globales para Three.js
let scene, camera, renderer, controls;
const R = 5; // Radio de la Tierra

// Inicialización de la escena, cámara y renderizador
function initEarth() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 15);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("earth-container").appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  window.addEventListener("resize", onWindowResize, false);
}

// Creación de la Tierra con textura e iluminación
function createEarth() {
  const textureLoader = new THREE.TextureLoader();
  const earthTexture = textureLoader.load("earth/textures/earth.jpg"); // Verifica la ruta

  const geometry = new THREE.SphereGeometry(R, 64, 64);
  const material = new THREE.MeshPhongMaterial({ map: earthTexture });
  const earthMesh = new THREE.Mesh(geometry, material);
  // Deshabilitamos el raycasting en la malla de la Tierra para evitar interferencias
  earthMesh.raycast = function () {};
  scene.add(earthMesh);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);
}

// Carga y visualización de fronteras (regiones) desde el archivo externo countries.geojson
function loadCountries() {
  fetch("earth/countries.geojson")
    .then((response) => response.json())
    .then((data) => {
      data.features.forEach((region) => {
        if (region.geometry.type === "Polygon") {
          // Procesamos polígonos
          const coords = region.geometry.coordinates[0];
          const points = [];
          coords.forEach(([lon, lat]) => {
            // Conversión de coordenadas geográficas a 3D sobre la superficie de la esfera
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lon + 180) * (Math.PI / 180);
            const x = -(R + 0.02) * Math.sin(phi) * Math.cos(theta);
            const y = (R + 0.02) * Math.cos(phi);
            const z = (R + 0.02) * Math.sin(phi) * Math.sin(theta);
            points.push(new THREE.Vector3(x, y, z));
          });
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
          const borderLine = new THREE.LineLoop(geometry, material);
          // Se guardan las propiedades del objeto (nombre, ciudades, ecosistemas, fauna y flora)
          borderLine.userData = region.properties;
          scene.add(borderLine);
        } else if (region.geometry.type === "Point") {
          // Procesamos puntos con un estilo mejorado (Marcadores premium)
          const [lon, lat] = region.geometry.coordinates;
          const phi = (90 - lat) * (Math.PI / 180);
          const theta = (lon + 180) * (Math.PI / 180);
          const x = -(R + 0.15) * Math.sin(phi) * Math.cos(theta);
          const y = (R + 0.15) * Math.cos(phi);
          const z = (R + 0.15) * Math.sin(phi) * Math.sin(theta);
          
          // Grupo para el marcador (punto central + aura pulsante)
          const markerGroup = new THREE.Group();
          markerGroup.position.set(x, y, z);
          
          // Punto central (Brillante)
          const coreGeo = new THREE.SphereGeometry(0.12, 24, 24);
          const coreMat = new THREE.MeshBasicMaterial({ color: 0x10b981 }); // Verde Esmeralda
          const core = new THREE.Mesh(coreGeo, coreMat);
          markerGroup.add(core);

          // Aura pulsante (Anillo o esfera traslúcida)
          const auraGeo = new THREE.SphereGeometry(0.2, 24, 24);
          const auraMat = new THREE.MeshBasicMaterial({ 
              color: 0x10b981, 
              transparent: true, 
              opacity: 0.4 
          });
          const aura = new THREE.Mesh(auraGeo, auraMat);
          markerGroup.add(aura);

          // Animación de pulso personalizada
          markerGroup.userData = { 
              ...region.properties,
              originalScale: 1,
              pulseSpeed: 0.05 + Math.random() * 0.05
          };
          
          // Agregamos el marcador a la escena
          scene.add(markerGroup);
          
          // Guardamos referencia para animar en el loop
          if (!window.globeMarkers) window.globeMarkers = [];
          window.globeMarkers.push(markerGroup);
        }
      });
    })
    .catch((error) =>
      console.error("Error al cargar countries.geojson:", error)
    );
}

// Configuración del raycaster para detectar clics en las fronteras
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onDocumentMouseClick(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children, true);

  // Se recorre la lista de intersecciones y se muestra la información del primer objeto que tenga datos (userData)
  for (let i = 0; i < intersects.length; i++) {
    const obj = intersects[i].object;
    if (obj.userData && obj.userData.nombre) {
      showCountryInfo(obj.userData);
      break;
    }
  }
}

// Muestra la información del objeto (región) en el panel lateral y agrega el botón "Ver más" para redirigir
function showCountryInfo(data) {
    const panel = document.getElementById("country-info-panel");
    const countryNameEl = document.getElementById("country-name");
    const ecosystemsEl = document.getElementById("ecosystems");

    panel.style.display = 'block';
    panel.classList.add('active'); // CSS hook if needed
    
    countryNameEl.textContent = data.nombre;
    ecosystemsEl.innerHTML = `
        <div class="info-stat"><strong>Ciudades</strong> ${data.ciudades ? data.ciudades.join(", ") : "N/A"}</div>
        <div class="info-stat"><strong>Ecosistemas</strong> ${data.ecosistemas ? data.ecosistemas.join(", ") : "N/A"}</div>
        <div class="info-stat"><strong>Fauna</strong> ${data.fauna ? data.fauna.join(", ") : "N/A"}</div>
        <div class="info-stat"><strong>Flora</strong> ${data.flora ? data.flora.join(", ") : "N/A"}</div>
        
        <button id="more-info-btn" class="btn btn-primary" style="margin-top:20px; width:100%; border-radius: 12px; font-size: 0.8rem; padding: 10px;">
            <i class="fas fa-external-link-alt"></i> Ver más detalles
        </button>
    `;

    document.getElementById("more-info-btn").addEventListener("click", () => {
        // Normalización: quitar "Región ", convertir a minúsculas y quitar acentos
        const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const regionKey = normalize(data.nombre.replace("Región ", "")).toLowerCase();
        window.location.href = `infoEarth.html?region=${encodeURIComponent(regionKey)}`;
    });
}

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    
    // Animar marcadores (Pulso)
    if (window.globeMarkers) {
        const time = Date.now() * 0.002;
        window.globeMarkers.forEach(marker => {
            const pulse = 1 + Math.sin(time + marker.userData.pulseSpeed * 100) * 0.15;
            marker.scale.set(pulse, pulse, pulse);
            // Rotación ligera para un efecto dinámico
            marker.rotation.y += 0.01;
        });
    }

    controls.update();
    renderer.render(scene, camera);
}

// Actualización del renderizado al cambiar el tamaño de la ventana
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Inicialización de todo al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  initEarth();
  createEarth();
  loadCountries();
  animate();
  document.addEventListener("click", onDocumentMouseClick, false);
});
