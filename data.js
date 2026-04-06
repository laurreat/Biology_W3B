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
                <p>Las plantas son los únicos seres vivos que pueden fabricar su comida usando agua, aire y luz solar (un proceso llamado <strong>Fotosíntesis</strong>).</p>
                <ul>
                    <li>Nos dan el oxígeno que respiramos.</li>
                    <li>Son la base de la alimentación de todos los animales.</li>
                    <li>Absorben el exceso de calor del planeta.</li>
                </ul>
            `
        },
        {
            id: 'hongos',
            title: 'Reino Fungi',
            description: 'Los recicladores de la naturaleza. Sin ellos, el bosque estaría lleno de basura!',
            image: 'https://images.unsplash.com/photo-1504221507732-5246c045949b?q=80&w=600',
            category: 'Seres Vivos',
            details: `
                <p>Los hongos parecen plantas pero no lo son, porque no hacen fotosíntesis. Ellos se alimentan descomponiendo hojas muertas, troncos y restos de animales.</p>
                <div class="info-stat"><strong>Importante:</strong> ¡Gracias a ellos, el suelo siempre tiene nutrientes para que crezcan nuevas plantas!</div>
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
                <p>Imagina una fila donde cada uno depende del anterior:</p>
                <ol>
                    <li><strong>Productores:</strong> Pasto (Sol + Agua).</li>
                    <li><strong>Consumidores 1:</strong> Grillo (Come pasto).</li>
                    <li><strong>Consumidores 2:</strong> Rana (Come grillo).</li>
                    <li><strong>Consumidores 3:</strong> Serpiente (Come rana).</li>
                    <li><strong>Descomponedores:</strong> Gusanos y Hongos (Reciclan lo que queda).</li>
                </ol>
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
