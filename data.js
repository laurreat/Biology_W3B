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
    ecologia: [
        {
            id: 'cadena',
            title: 'La Red de la Vida',
            description: 'En la naturaleza, todos necesitamos de otros para sobrevivir.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
            category: 'Ecosistemas',
            details: `
                <p>Se llama Cadena Alimenticia al paso de energía de un ser a otro:</p>
                <ul>
                    <li><strong>Productores (Plantas):</strong> Producen comida con el sol.</li>
                    <li><strong>Consumidores Primarios:</strong> Comen plantas (grillos, vacas).</li>
                    <li><strong>Consumidores Secundarios:</strong> Comen a los primarios (pájaros, ranas).</li>
                    <li><strong>Descomponedores (Hongos):</strong> Limpian la naturaleza devolviendo nutrientes al suelo.</li>
                </ul>
            `
        }
    ]
};
