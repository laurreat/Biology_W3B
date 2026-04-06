/**
 * Biology Web - Centralized Data Store
 * Improved for 6th Grade Students (Biology & Ecosystems focus)
 */

const BIOLOGY_DATA = {
    humano: [
        {
            id: 'general',
            title: 'Cuerpo Humano',
            description: 'El cuerpo es como una máquina maravillosa hecha de billones de células que trabajan en equipo.',
            image: 'assets/cuerp_human/cuerp_human.png',
            category: 'Anatomía',
            details: `
                <div class="info-stat"><strong>¿Sabías qué?</strong> El cuerpo de un niño tiene unos 300 huesos, pero al crecer algunos se unen y terminamos con 206!</div>
                <p>Nuestro cuerpo se divide en tres partes principales: Cabeza, Tronco y Extremidades. Adentro tenemos órganos vitales como el corazón (la bomba de sangre) y los pulmones (nuestra fábrica de oxígeno).</p>
                <img src="assets/cuerp_human/cuerp_human.png" alt="Cuerpo Humano" style="max-width:200px; margin:20px auto; display:block;">
            `,
            questions: [
                { q: '¿Qué parte del cuerpo humano protege el cerebro?', options: ['Costilla', 'Cráneo', 'Pelvis'], correct: 1 }
            ]
        },
        {
            id: 'digestivo',
            title: 'Sistema Digestivo',
            description: 'Es el encargado de sacar la energía de los alimentos para que puedas jugar y estudiar.',
            image: 'assets/cuerp_human/digestivo.png',
            category: 'Nutrición',
            details: `
                <p>Cuando comes, tu comida hace un viaje increíble:</p>
                <ul>
                    <li><strong>Boca:</strong> Trituras la comida y se mezcla con saliva.</li>
                    <li><strong>Esófago:</strong> Un tubo que baja la comida al estómago.</li>
                    <li><strong>Estómago:</strong> Como una licuadora que deshace todo con jugos gástricos.</li>
                    <li><strong>Intestinos:</strong> Sacan lo bueno (nutrientes) y lo que no sirve se va!</li>
                </ul>
                <img src="assets/cuerp_human/digestivo.png" alt="Sistema Digestivo" style="max-width:300px; margin:20px auto; display:block;">
            `,
            questions: [
                { q: '¿Dónde empieza la digestión?', options: ['Estómago', 'Boca', 'Hígado'], correct: 1 }
            ]
        }
    ],
    animals: [
        {
            id: 'vertebrados',
            title: 'Los Vertebrados',
            description: 'Tienen un esqueleto interno con columna vertebral, como tú y tu perro!',
            image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600',
            category: 'Clasificación',
            details: `
                <p>Se dividen en 5 grupos mágicos:</p>
                <ol>
                    <li><strong>Mamíferos:</strong> Tienen pelos y toman leche al nacer (como los humanos y ballenas).</li>
                    <li><strong>Aves:</strong> Tienen plumas y ponen huevos.</li>
                    <li><strong>Reptiles:</strong> Escamas y sangre fría (como iguanas).</li>
                    <li><strong>Anfibios:</strong> Viven en agua y tierra (como ranas).</li>
                    <li><strong>Peces:</strong> Respiran bajo el agua por branquias.</li>
                </ol>
                <div class="bio-image-container">
                    <img src="#" alt="Grupos de Vertebrados" class="bio-image-placeholder">
                    <p class="image-caption">Imagen sugerida: Collage mostrando un mamífero, ave, reptil, anfibio y pez.</p>
                </div>
            `
        },
        {
            id: 'invertebrados',
            title: 'Los Invertebrados',
            description: 'No tienen huesos! Son los más numerosos del planeta.',
            image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=600',
            category: 'Diversidad',
            details: `
                <p>Aunque no tengan huesos, muchos tienen conchas o esqueletos externos:</p>
                <ul>
                    <li><strong>Insectos:</strong> Tienen 6 patas y antenas (hormigas, mariposas).</li>
                    <li><strong>Arácnidos:</strong> Tienen 8 patas (arañas).</li>
                    <li><strong>Moluscos:</strong> Tienen cuerpo blando (caracoles, pulpos).</li>
                </ul>
                <div class="bio-image-container">
                    <img src="#" alt="Diversidad de Invertebrados" class="bio-image-placeholder">
                    <p class="image-caption">Imagen sugerida: Ilustración de insectos, arácnidos y moluscos.</p>
                </div>
            `
        }
    ],
    seresvivos: [
        {
            id: 'plantas',
            title: 'Reino Plantae',
            description: '¡Las constructoras del aire! Fabrican su propio alimento con ayuda del Sol.',
            image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600',
            category: 'Seres Vivos',
            details: `
                <p>Las plantas son los seres más importantes de la biosfera. Sin ellas, no tendríamos comida ni oxígeno para respirar. Utilizan un proceso increíble llamado <strong>Fotosíntesis</strong> para convertir la luz del sol en energía química.</p>
                
                <div class="bio-image-container">
                    <img src="#" alt="Dibujo de la Fotosíntesis" class="bio-image-placeholder">
                    <p class="image-caption">Imagen sugerida: Una planta recibiendo luz solar, capturando CO2 y soltando O2.</p>
                </div>

                <h3>¿Cómo se alimentan?</h3>
                <p>A diferencia de nosotros, ellas no tienen que "ir a la tienda". Usan sus raíces para absorber agua y minerales del suelo, y sus hojas para atrapar luz del sol y aire (CO2). ¡Al final producen azúcar (glucosa) que es su comida!</p>
                
                <h3>Tipos de Plantas:</h3>
                <ul>
                    <li>Con flores (Angiospermas).</li>
                    <li>Sin flores (Gimnospermas).</li>
                    <li>Cactus para el desierto y musgos para lugares húmedos.</li>
                </ul>
            `
        },
        {
            id: 'hongos',
            title: 'Reino Fungi',
            description: 'Los recicladores de la naturaleza. ¡Viven en los troncos, el suelo y hasta en el pan!',
            image: 'https://images.unsplash.com/photo-1504221507732-5246c045949b?q=80&w=600',
            category: 'Seres Vivos',
            details: `
                <p>Los hongos son seres fascinantes que no son ni animales ni plantas. Son los grandes recicladores encargados de descomponer la materia orgánica muerta para devolver los nutrientes a la madre tierra.</p>
                
                <div class="bio-image-container">
                    <img src="#" alt="Hongos Descomponedores" class="bio-image-placeholder">
                    <p class="image-caption">Imagen sugerida: Diferentes tipos de hongos (champiñones, líquenes, mohos).</p>
                </div>

                <h3>¿Por qué son importantes?</h3>
                <p>Sin ellos, los bosques estarían llenos de árboles caídos y hojas que nunca desaparecen. También los usamos para hacer medicinas como la <strong>Penicilina</strong> que salva muchas vidas.</p>
            `
        },
        {
            id: 'bacterias',
            title: 'Mundo Microscópico',
            description: 'Seres tan pequeños que no los ves, ¡pero están en todas partes!',
            image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=600',
            category: 'Microbiología',
            details: `
                <p>Existen bacterias buenas (como las que ayudan a hacer yogurt o las que viven en tu panza para ayudarte a digerir) y algunas que causan enfermedades.</p>
                <div class="bio-image-container">
                    <img src="#" alt="Bacterias bajo microscopio" class="bio-image-placeholder">
                    <p class="image-caption">Imagen sugerida: Micrografía de bacterias de diferentes formas (cocos, bacilos).</p>
                </div>
            `
        }
    ],
    ecologia: [
        {
            id: 'cadena',
            title: 'Cadena Alimenticia',
            description: '¿Quién se come a quién? El viaje de la energía en la naturaleza.',
            image: 'https://images.unsplash.com/photo-1547363404-58a43586cd17?q=80&w=800',
            category: 'Ecología',
            details: `
                <p>En la naturaleza existe un equilibrio perfecto donde cada ser vivo juega un rol crucial. La cadena alimenticia (o trófica) es el proceso de transferencia de energía alimenticia a través de una serie de organismos.</p>
                
                <div class="bio-image-container">
                    <img src="#" alt="Pirámide Alimenticia" class="bio-image-placeholder">
                    <p class="image-caption">Imagen sugerida: Pirámide con plantas abajo, grillos en medio y águilas arriba.</p>
                </div>

                <h3>Los 4 Niveles Principales:</h3>
                <p>1. <strong>Productores:</strong> Plantas que usan luz solar.</p>
                <p>2. <strong>Consumidores Primarios:</strong> Animales herbívoros que comen plantas (vacas, conejos).</p>
                <p>3. <strong>Consumidores Secundarios:</strong> Animales carnívoros que comen herbívoros (lobos, leones).</p>
                <p>4. <strong>Descomponedores:</strong> Hongos y bacterias que cierran el ciclo.</p>
            `
        },
        {
            id: 'ciclos',
            title: 'Ciclos de la Vida',
            description: 'Cómo el agua y los químicos viajan por todo el planeta.',
            image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=600',
            category: 'Biogeoquímicos',
            details: `
                <p>Todo en la Tierra se recicla. El agua que bebes hoy pudo haber sido la misma que bebió un dinosaurio hace millones de años!</p>
                <p>Estudiamos los ciclos del <strong>Agua, Carbono y Nitrógeno</strong> para entender cómo la Tierra se mantiene saludable.</p>
            `
        }
    ]
};
