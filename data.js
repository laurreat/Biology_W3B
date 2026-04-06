const BIOLOGY_DATA = {
    humano: [
        {
            id: 'celula',
            title: 'La Célula: Unidad de Vida',
            description: '¡Todo lo vivo empieza aquí! Descubre la ciudad microscópica que eres tú.',
            image: './assets/cell_diagram_art_1775510649430.png',
            category: 'Citología',
            details: `
                <p>La célula es la unidad más pequeña de vida. Imagínala como una <strong>ciudad minúscula</strong> con fábricas, muros y centros de control.</p>
                
                <div class="bio-image-container">
                    <img src="./assets/cell_diagram_art_1775510649430.png" alt="Célula Eucariota" class="bio-image-placeholder">
                    <p class="image-caption">Partes clave: El núcleo (centros de control), mitocondrias (centrales eléctricas) y ribosomas (fábricas de proteínas).</p>
                </div>

                <h3>Tipos de Células que debes conocer:</h3>
                <ul>
                    <li><strong>Procariotas:</strong> Células simples sin núcleo (como las bacterias).</li>
                    <li><strong>Eucariotas:</strong> Células complejas con núcleo (como las tuyas y las de las plantas).</li>
                </ul>
            `
        },
        {
            id: 'corazon',
            title: 'Sistema Circulatorio',
            description: '¡El motor de vida! Transporta oxígeno y nutrientes a todo el cuerpo.',
            image: './assets/human_systems_blueprint_1775510695717.png',
            category: 'Anatomía',
            details: `
                <p>Tu corazón bombea sangre sin parar. Esta sangre lleva "comida" (nutrientes) y "aire" (oxígeno) a cada parte de ti.</p>
                
                <div class="bio-image-container">
                    <img src="./assets/human_systems_blueprint_1775510695717.png" alt="Sistema Circulatorio" class="bio-image-placeholder">
                    <p class="image-caption">Las arterias (rojas) llevan oxígeno, las venas (azules) traen dióxido de carbono de vuelta.</p>
                </div>

                <h3>Lo que un niño de 6to debe saber:</h3>
                <p>1. El corazón tiene 4 cámaras (aurículas y ventrículos).</p>
                <p>2. Los glóbulos rojos son los camiones que transportan el oxígeno.</p>
                <p>3. Los glóbulos blancos son tus soldados contra las enfermedades.</p>
            `
        },
        {
            id: 'digestivo',
            title: 'Sistema Digestivo',
            description: 'Cómo tu cuerpo convierte una hamburguesa en energía para jugar.',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800',
            category: 'Nutrición',
            details: `
                <p>La digestión empieza en la boca y termina cuando tu cuerpo absorbe lo bueno y desecha lo que no necesita.</p>
                <div class="info-stat">¡El intestino delgado de un adulto puede medir hasta 7 metros si lo estiramos!</div>
            `
        }
    ],
    seresvivos: [
        {
            id: 'reinos',
            title: 'Los 5 Reinos de la Vida',
            description: '¡La gran familia del planeta! Desde bacterias hasta ballenas.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
            category: 'Taxonomía',
            details: `
                <p>Los científicos dividen la vida en 5 grandes grupos:</p>
                <ol>
                    <li><strong>Mónera:</strong> Bacterias diminutas.</li>
                    <li><strong>Protista:</strong> Microorganismos de agua.</li>
                    <li><strong>Fungi:</strong> Hongos y setas.</li>
                    <li><strong>Plantae:</strong> Todas las plantas.</li>
                    <li><strong>Animalia:</strong> ¡Nosotros y los animales!</li>
                </ol>
            `
        }
    ],
    ecologia: [
        {
            id: 'red',
            title: 'Redes Tróficas',
            description: 'Nadie sobrevive solo. Descubre cómo fluye la energía en el bosque.',
            image: './assets/food_web_ecosystem_1775510710541.png',
            category: 'Ecología',
            details: `
                <p>En el ecosistema, cada animal y planta está conectado por hilos invisibles de energía. Si falta uno, todo el sistema puede cambiar.</p>
                
                <div class="bio-image-container">
                    <img src="./assets/food_web_ecosystem_1775510710541.png" alt="Red Alimenticia" class="bio-image-placeholder">
                    <p class="image-caption">Energía que nace del Sol -> Productores -> Consumidores -> Descomponedores.</p>
                </div>
            `
        }
    ],
    animales: [
        {
            id: 'vertebrados',
            title: 'Animales Vertebrados',
            description: '¡Los que tienen columna vertebral! Mamíferos, aves y más.',
            image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=800',
            category: 'Zoología',
            details: `<p>Se dividen en 5 grupos: Mamíferos, Aves, Reptiles, Anfibios y Peces.</p>`
        }
    ],
    genetica: [
        {
            id: 'adn',
            title: '¿Qué es el ADN?',
            description: '¡Tus planos de construcción! El libro secreto que dice cómo eres.',
            image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600',
            category: 'Genética',
            details: `
                <p>El ADN es el código que heredas de tus padres. Es como un manual de instrucciones gigante que dice de qué color son tus ojos y qué tan alto serás.</p>
                <div class="bio-image-container">
                    <img src="#" alt="Estructura del ADN" class="bio-image-placeholder">
                    <p class="image-caption">Sugerencia: Una doble hélice brillante con nucleótidos de colores.</p>
                </div>
            `
        },
        {
            id: 'mendel',
            title: 'Leyes de la Herencia',
            description: '¿Por qué te pareces a tus abuelos?',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600',
            category: 'Herencia',
            details: `
                <p>Gregor Mendel, el padre de la genética, descubrió cómo se pasan las características de una generación a otra usando plantas de guisante.</p>
            `
        }
    ]
};
