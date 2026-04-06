const BIOLOGY_DATA = {
    humano: [
        {
            id: 'celula',
            title: 'La Célula: Unidad de Vida',
            description: '¡Todo lo vivo empieza aquí! Descubre la ciudad microscópica que eres tú.',
            image: './assets/cell_diagram_art_1775510649430.png',
            category: 'Citología',
            details: `
                <p>La célula es la unidad más pequeña que cumple todas las funciones de un ser vivo. Imagínala como una <strong>ciudad minúscula</strong> con muros, fábricas y un centro de control. ¡Tú estás hecho de billones de ellas!</p>
                
                <div class="bio-image-container">
                    <img src="./assets/cell_diagram_art_1775510649430.png" alt="Célula Eucariota" class="bio-image-placeholder">
                    <p class="image-caption">Partes clave: El núcleo (centro de control), mitocondrias (centrales de energía) y ribosomas (fábricas de proteínas).</p>
                </div>

                <h3>Tipos de Células que debes conocer:</h3>
                <ul>
                    <li><strong>Procariotas:</strong> Son las más sencillas y pequeñas. <strong>No tienen núcleo</strong>, su ADN está suelto en el citoplasma. Ejemplo: las bacterias. Fueron las primeras formas de vida en la Tierra.</li>
                    <li><strong>Eucariotas:</strong> Son más grandes y complejas. <strong>Tienen un núcleo</strong> que protege el ADN. Ejemplo: las células de los animales, las plantas y los hongos.</li>
                </ul>

                <h3>Partes principales de la célula:</h3>
                <ul>
                    <li><strong>Membrana plasmática:</strong> Es como la "puerta" de la célula. Controla qué sustancias entran y cuáles salen.</li>
                    <li><strong>Núcleo:</strong> Es el "cerebro". Contiene el ADN y dirige todas las actividades de la célula.</li>
                    <li><strong>Citoplasma:</strong> Es el líquido gelatinoso que llena la célula. Aquí flotan los orgánulos.</li>
                    <li><strong>Mitocondrias:</strong> Son las "centrales de energía". Producen la energía que la célula necesita para funcionar, usando el oxígeno y los alimentos.</li>
                    <li><strong>Ribosomas:</strong> Son las "fábricas". Fabrican proteínas, que son materiales importantes para construir y reparar tu cuerpo.</li>
                </ul>

                <div class="info-stat">¡El cuerpo humano tiene aproximadamente 37 billones de células! Eso es 37.000.000.000.000.</div>
            `
        },
        {
            id: 'organelos',
            title: 'Orgánulos Celulares',
            description: 'Los "organitos" que hacen funcionar la célula.',
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600',
            category: 'Citología',
            details: `
                <p>Los <strong>orgánulos</strong> (que significa "organitos") son estructuras dentro de la célula, cada una con un trabajo especial. Son como los órganos de tu cuerpo, pero a escala microscópica.</p>

                <h3>Orgánulos principales:</h3>
                <ul>
                    <li><strong>Mitocondria:</strong> Produce energía. Hace la <strong>respiración celular</strong>: toma los nutrientes y el oxígeno y los convierte en energía.</li>
                    <li><strong>Cloroplasto (solo en células vegetales):</strong> Hace la <strong>fotosíntesis</strong>. Usa la luz del sol para fabricar alimento. Por eso las plantas son verdes y producen oxígeno.</li>
                    <li><strong>Núcleo:</strong> Guarda y protege el ADN. Es el jefe que controla todo lo que pasa en la célula.</li>
                    <li><strong>Retículo Endoplasmático Rugoso:</strong> Tiene ribosomas pegados. Su trabajo es fabricar proteínas.</li>
                    <li><strong>Retículo Endoplasmático Liso:</strong> Fabrica grasas (lípidos) y ayuda a eliminar sustancias tóxicas.</li>
                    <li><strong>Aparato de Golgi:</strong> Empaqueta y envía las proteínas y grasas a donde las necesite la célula o el cuerpo.</li>
                    <li><strong>Vacuolas:</strong> Son como "bolsas de almacenamiento". Guardan agua, alimentos y desechos. En las plantas hay una vacuola gigante que las mantiene firmes.</li>
                    <li><strong>Lisosomas:</strong> Son el "centro de reciclaje". Digieren materiales viejos o dañados para que la célula pueda reutilizarlos.</li>
                </ul>

                <h3>¿Qué diferencia a una célula animal de una vegetal?</h3>
                <ul>
                    <li>La célula vegetal tiene <strong>pared celular</strong> (un muro rígido), <strong>cloroplastos</strong> y una <strong>gran vacuola central</strong>.</li>
                    <li>La célula animal no tiene pared celular ni cloroplastos, y sus vacuolas son pequeñas.</li>
                </ul>

                <div class="bio-image-container">
                    <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600" alt="Orgánulos Celulares" class="bio-image-placeholder">
                    <p class="image-caption">Cada orgánulo tiene un trabajo vital. ¡Todos trabajan en equipo!</p>
                </div>
            `
        },
        {
            id: 'division-celular',
            title: 'División Celular',
            description: 'Cómo las células se multiplican para que crezcas y te repares.',
            image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600',
            category: 'Citología',
            details: `
                <p>Las células se dividen para tres razones principales: <strong>crecer</strong>, <strong>reparar tejidos dañados</strong> (como cuando te haces una herida) y <strong>reproducirse</strong>.</p>

                <h3>Mitosis: Células idénticas</h3>
                <p>La mitosis produce <strong>2 células hijas idénticas</strong> a la célula madre. Ocurre en las células de tu cuerpo (células somáticas) para que crezcas y repares tejidos.</p>
                <p><strong>Fases de la mitosis:</strong></p>
                <ol>
                    <li><strong>Profase:</strong> El ADN se enrolla y forma los cromosomas (se hacen visibles). La membrana del núcleo desaparece.</li>
                    <li><strong>Metafase:</strong> Los cromosomas se alinean en el centro de la célula, como soldados en fila.</li>
                    <li><strong>Anafase:</strong> Los cromosomas se separan y se mueven hacia los extremos opuestos de la célula.</li>
                    <li><strong>Telofase:</strong> Se forman dos nuevos núcleos y la célula se parte en dos (esto se llama citocinesis).</li>
                </ol>

                <h4>Meiosis: Células para reproducirse</h4>
                <p>La meiosis produce <strong>4 células con la mitad de cromosomas</strong>. Solo ocurre en las células reproductivas (óvulos en la mujer y espermatozoides en el hombre). Es esencial para la reproducción sexual.</p>

                <div class="info-stat">¡Tu cuerpo produce aproximadamente 300 mil millones de células nuevas cada día!</div>
            `
        },
        {
            id: 'corazon',
            title: 'Sistema Circulatorio',
            description: '¡El motor de tu cuerpo! Lleva oxígeno y alimento a todos tus órganos.',
            image: './assets/human_systems_blueprint_1775510695717.png',
            category: 'Anatomía',
            details: `
                <p>El sistema circulatorio es como una red de tuberías y bombas que recorre todo tu cuerpo. Su trabajo es llevar <strong>oxígeno</strong> y <strong>nutrientes</strong> a cada célula, y recoger los desechos.</p>
                
                <div class="bio-image-container">
                    <img src="./assets/human_systems_blueprint_1775510695717.png" alt="Sistema Circulatorio" class="bio-image-placeholder">
                    <p class="image-caption">Las arterias (rojas) llevan sangre con oxígeno. Las venas (azules) traen sangre con dióxido de carbono.</p>
                </div>

                <h3>Componentes principales:</h3>
                <ul>
                    <li><strong>El Corazón:</strong> Es un músculo del tamaño de tu puño. Bombea sangre sin parar. Late unas 100.000 veces al día. Tiene 4 cámaras: 2 aurículas (arriba) y 2 ventrículos (abajo).</li>
                    <li><strong>Arterias:</strong> Llevan sangre rica en oxígeno <strong>desde</strong> el corazón hacia todo el cuerpo. La más grande se llama <strong>aorta</strong>.</li>
                    <li><strong>Venas:</strong> Traen la sangre con desechos (dióxido de carbono) <strong>de vuelta</strong> al corazón.</li>
                    <li><strong>Capilares:</strong> Son vasos sanguíneos muy delgados, como cabellos. Conectan arterias con venas y es donde ocurre el intercambio de oxígeno y nutrientes con las células.</li>
                </ul>

                <h3>La Sangre:</h3>
                <ul>
                    <li><strong>Glóbulos rojos (eritrocitos):</strong> Son los "camiones de reparto". Llevan oxígeno a todo el cuerpo. Son rojos por la <strong>hemoglobina</strong>.</li>
                    <li><strong>Glóbulos blancos (leucocitos):</strong> Son los "soldados". Te defienden de gérmenes e infecciones.</li>
                    <li><strong>Plaquetas:</strong> Son los "reparadores". Cuando te haces una herida, forman coágulos para detener el sangrado.</li>
                    <li><strong>Plasma:</strong> Es la parte líquida de la sangre. Transporta todo lo demás.</li>
                </ul>

                <div class="info-stat">¡Tu corazón bombea unos 7.500 litros de sangre al día! Eso equivale a llenar una piscina pequeña.</div>
            `
        },
        {
            id: 'digestivo',
            title: 'Sistema Digestivo',
            description: 'Cómo tu cuerpo convierte la comida en energía para estudiar y jugar.',
            image: './assets/cuerpos_human/digestivo.png',
            category: 'Nutrición',
            details: `
                <p>El sistema digestivo transforma los alimentos que comes en nutrientes que tu cuerpo puede usar para tener energía, crecer y repararse.</p>

                <h3>El recorrido de la comida:</h3>
                <ol>
                    <li><strong>Boca:</strong> Los dientes trituran la comida y la saliva la humedece. Aquí empieza la digestión con enzimas.</li>
                    <li><strong>Esófago:</strong> Es un tubo que lleva la comida desde la boca hasta el estómago. Tiene movimientos llamados <strong>peristálticos</strong> (como olas).</li>
                    <li><strong>Estómago:</strong> Es como una licuadora. Mezcla la comida con jugos gástricos (ácidos) que la deshacen. Convierte los alimentos en una papilla llamada <strong>quimo</strong>.</li>
                    <li><strong>Intestino delgado:</strong> Mide unos 7 metros enrollado. Aquí se absorben los nutrientes y pasan a la sangre. Tiene tres partes: duodeno, yeyuno e íleon.</li>
                    <li><strong>Intestino grueso:</strong> Absorbe el agua y las sales minerales. Lo que sobra se convierte en heces.</li>
                    <li><strong>Ano:</strong> Por aquí se eliminan los desechos del cuerpo.</li>
                </ol>

                <h3>Órganos que ayudan (glándulas anexas):</h3>
                <ul>
                    <li><strong>Hígado:</strong> Produce la <strong>bilis</strong>, que ayuda a digerir las grasas. También limpia la sangre.</li>
                    <li><strong>Páncreas:</strong> Produce jugos que ayudan a digerir carbohidratos, proteínas y grasas.</li>
                    <li><strong>Vesícula biliar:</strong> Guarda la bilis que produce el hígado.</li>
                </ul>

                <div class="info-stat">¡El intestino delgado mide hasta 7 metros! Si lo estiraras, sería más largo que un bus de Transmilenio.</div>
            `
        },
        {
            id: 'respiratorio',
            title: 'Sistema Respiratorio',
            description: 'Cómo tu cuerpo toma el oxígeno del aire que respiras.',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600',
            category: 'Anatomía',
            details: `
                <p>El sistema respiratorio se encarga de tomar <strong>oxígeno</strong> del aire y expulsar <strong>dióxido de carbono</strong>, un desecho que tu cuerpo produce.</p>

                <h3>El camino del aire:</h3>
                <ol>
                    <li><strong>Nariz y boca:</strong> El aire entra y se calienta. La nariz lo filtra con pelositos (cilios) y moco.</li>
                    <li><strong>Faringe y laringe:</strong> El aire pasa por la garganta. En la laringe están las cuerdas vocales, que te permiten hablar.</li>
                    <li><strong>Tráquea:</strong> Es un tubo que lleva el aire hacia los pulmones.</li>
                    <li><strong>Bronquios:</strong> La tráquea se divide en dos bronquios, uno para cada pulmón.</li>
                    <li><strong>Bronquiolos:</strong> Los bronquios se ramifican en tubos cada vez más pequeños.</li>
                    <li><strong>Alvéolos:</strong> Son bolsitas diminutas al final de los bronquiolos. Aquí el oxígeno pasa a la sangre y el dióxido de carbono sale de ella.</li>
                </ol>

                <h3>Los Pulmones:</h3>
                <p>Son dos órganos esponjosos protegidos por las costillas. El pulmón derecho es más grande (tiene 3 lóbulos) y el izquierdo es más pequeño (tiene 2) para dejar espacio al corazón.</p>

                <h3>¿Cómo respiramos?</h3>
                <ul>
                    <li><strong>Inspiración:</strong> El <strong>diafragma</strong> (un músculo debajo de los pulmones) baja y los pulmones se llenan de aire.</li>
                    <li><strong>Espiración:</strong> El diafragma sube y los pulmones expulsan el aire con dióxido de carbono.</li>
                </ul>

                <div class="info-stat">¡Respiras aproximadamente 20.000 veces al día! En tus pulmones hay unos 300 millones de alvéolos.</div>
            `
        },
        {
            id: 'nervioso',
            title: 'Sistema Nervioso',
            description: 'El centro de control de tu cuerpo: cerebro, nervios y sentidos.',
            image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600',
            category: 'Anatomía',
            details: `
                <p>El sistema nervioso es el <strong>centro de control</strong> de tu cuerpo. Te permite pensar, sentir, moverte y reaccionar ante lo que sucede a tu alrededor.</p>

                <h3>Partes del sistema nervioso:</h3>
                
                <h4>1. Sistema Nervioso Central (SNC):</h4>
                <ul>
                    <li><strong>Cerebro:</strong> Es el órgano más importante. Piensa, recuerda, siente emociones y controla todo el cuerpo. Tiene dos mitades (hemisferios).</li>
                    <li><strong>Cerebelo:</strong> Coordina el equilibrio y los movimientos. Gracias a él puedes caminar sin caerte.</li>
                    <li><strong>Tronco encefálico:</strong> Controla funciones automáticas como respirar y el latido del corazón.</li>
                    <li><strong>Médula espinal:</strong> Es un cordón que va desde el cerebro por toda la espalda. Envía mensajes entre el cerebro y el resto del cuerpo.</li>
                </ul>

                <h4>2. Sistema Nervioso Periférico:</h4>
                <p>Son los <strong>nervios</strong> que recorren todo tu cuerpo. Llevan mensajes desde el cerebro hasta los músculos y órganos, y traen información desde los sentidos de vuelta al cerebro.</p>

                <h3>Las Neuronas:</h3>
                <p>Son las células del sistema nervioso. Transmiten señales eléctricas a gran velocidad. Tienen tres partes:</p>
                <ul>
                    <li><strong>Cuerpo celular:</strong> La parte principal con el núcleo.</li>
                    <li><strong>Dendritas:</strong> Ramitas que reciben mensajes de otras neuronas.</li>
                    <li><strong>Axón:</strong> Un cable largo que envía mensajes a otras neuronas o músculos.</li>
                </ul>

                <h3>Los 5 Sentidos:</h3>
                <ul>
                    <li><strong>Vista:</strong> Los ojos captan la luz.</li>
                    <li><strong>Oído:</strong> Los oídos captan los sonidos y ayudan al equilibrio.</li>
                    <li><strong>Olfato:</strong> La nariz detecta olores.</li>
                    <li><strong>Gusto:</strong> La lengua detecta sabores (dulce, salado, ácido, amargo).</li>
                    <li><strong>Tacto:</strong> La piel siente presión, temperatura y dolor.</li>
                </ul>

                <div class="info-stat">¡Tu cerebro tiene unos 86 mil millones de neuronas! Cada una puede conectarse con miles de otras.</div>
            `
        }
    ],
    seresvivos: [
        {
            id: 'reinos',
            title: 'Los 5 Reinos de la Vida',
            description: '¡La gran familia del planeta! Desde bacterias hasta ballenas jorobadas.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
            category: 'Taxonomía',
            details: `
                <p>Los científicos agrupan a todos los seres vivos en <strong>5 reinos</strong> según cómo son, cómo se alimentan y cómo se reproducen.</p>

                <h3>Reino Mónera (Bacterias):</h3>
                <p>Son organismos <strong>microscópicos de una sola célula</strong> (unicelulares) sin núcleo definido (procariotas). Viven en todas partes: en el suelo, en el agua, en tu piel y hasta en tu intestino.</p>
                <ul>
                    <li><strong>Ejemplos:</strong> Bacterias como el <em>Lactobacillus</em> (que ayuda a hacer yogur) y las cianobacterias (que producen oxígeno).</li>
                    <li>Algunas causan enfermedades, pero muchas son beneficiosas.</li>
                </ul>

                <h3>Reino Protista:</h3>
                <p>Son organismos <strong>unicelulares o pluricelulares simples</strong> con núcleo verdadero (eucariotas). La mayoría viven en el agua.</p>
                <ul>
                    <li><strong>Ejemplos:</strong> Las <strong>amebas</strong> y los <strong>paramecios</strong> que se ven al microscopio en el agua de los charcos. Las <strong>algas</strong> que ves en los ríos y lagunas.</li>
                </ul>

                <h3>Reino Fungi (Hongos):</h3>
                <p>No son plantas ni animales. <strong>No fabrican su propio alimento</strong>, se alimentan de materia orgánica en descomposición.</p>
                <ul>
                    <li><strong>Ejemplos:</strong> Las setas, los champiñones, el moho del pan y las levaduras (que se usan para hacer pan).</li>
                    <li>Son muy importantes porque <strong>reciclan nutrientes</strong> en la naturaleza.</li>
                </ul>

                <h3>Reino Plantae (Plantas):</h3>
                <p>Son organismos pluricelulares que <strong>fabrican su propio alimento</strong> mediante la fotosíntesis, usando la luz del sol.</p>
                <ul>
                    <li><strong>Ejemplos colombianos:</strong> La palma de cera (árbol nacional), los frailejones del páramo, el ceibo de la Amazonía, las orquídeas y los helechos.</li>
                    <li>Producen el oxígeno que respiramos.</li>
                </ul>

                <h3>Reino Animalia (Animales):</h3>
                <p>Son organismos pluricelulares que <strong>no fabrican su propio alimento</strong>. Se alimentan de otros seres vivos.</p>
                <ul>
                    <li><strong>Ejemplos colombianos:</strong> El cóndor de los Andes, el jaguar, el delfín rosado del Amazonas, la rana dorada, la guacamaya y la anaconda.</li>
                    <li>Se dividen en <strong>vertebrados</strong> (con columna vertebral) e <strong>invertebrados</strong> (sin columna vertebral).</li>
                </ul>

                <div class="info-stat">¡Colombia es el segundo país más biodiverso del mundo! Tenemos más de 56.000 especies de plantas y 3.000 especies de peces de agua dulce.</div>

                <div class="bio-image-container">
                    <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600" alt="Biodiversidad" class="bio-image-placeholder">
                    <p class="image-caption">La vida en el planeta es increíblemente diversa. ¡Colombia es uno de los países con más especies!</p>
                </div>
            `
        },
        {
            id: 'invertebrados',
            title: 'Animales Invertebrados',
            description: 'Los más numerosos del planeta: insectos, arañas, moluscos y más.',
            image: 'https://images.unsplash.com/photo-1504190367302-3f195aa57850?q=80&w=600',
            category: 'Zoología',
            details: `
                <p>Los invertebrados son animales <strong>sin columna vertebral</strong>. Son el grupo más numeroso del planeta: ¡el 95% de todas las especies animales son invertebrados!</p>

                <h3>Principales grupos:</h3>

                <h4>Artrópodos (los más numerosos):</h4>
                <ul>
                    <li><strong>Insectos:</strong> 6 patas, cuerpo en 3 partes y generalmente alas. Ejemplos: mariposas, hormigas, escarabajos, abejas. Colombia tiene más de 3.000 especies de mariposas.</li>
                    <li><strong>Arácnidos:</strong> 8 patas. Ejemplos: arañas, escorpiones y garrapatas.</li>
                    <li><strong>Crustáceos:</strong> Viven principalmente en el agua. Ejemplos: cangrejos, camarones, langostas.</li>
                    <li><strong>Miriápodos:</strong> Muchas patas. Ejemplos: ciempiés y milpiés.</li>
                </ul>

                <h4>Moluscos:</h4>
                <p>Cuerpo blando, muchos con concha. Ejemplos: caracoles, ostras, pulpos y calamares.</p>

                <h4>Anélidos:</h4>
                <p>Gusanos con cuerpo segmentado (en anillos). Ejemplo: la lombriz de tierra, que es muy importante para el suelo.</p>

                <h4>Equinodermos:</h4>
                <p>Viven en el mar y tienen simetría radial (como una estrella). Ejemplos: estrellas de mar y erizos de mar.</p>

                <h4>Cnidarios:</h4>
                <p>Animales acuáticos con tentáculos urticantes. Ejemplos: medusas, corales y anémonas.</p>

                <div class="info-stat">¡Hay más de un millón de especies de insectos conocidas! Los escarabajos son el grupo más grande: 1 de cada 4 animales en la Tierra es un escarabajo.</div>
            `
        },
        {
            id: 'funciones-vitales',
            title: 'Funciones Vitales de los Seres Vivos',
            description: 'Todo ser vivo nace, se alimenta, se relaciona y se reproduce.',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600',
            category: 'Biología General',
            details: `
                <p>Todos los seres vivos, desde una bacteria hasta una ballena jorobada, realizan las mismas <strong>funciones vitales</strong>. Estas son las actividades que los distinguen de los objetos no vivos.</p>

                <h3>1. Función de Nutrición:</h3>
                <p>Los seres vivos necesitan alimentarse para obtener energía y materiales para crecer.</p>
                <ul>
                    <li><strong>Autótrofos:</strong> Fabrican su propio alimento usando la luz del sol (fotosíntesis). Ejemplo: las plantas, las algas y algunas bacterias.</li>
                    <li><strong>Heterótrofos:</strong> Se alimentan de otros seres vivos. Ejemplo: los animales, los hongos y muchos microorganismos.</li>
                </ul>

                <h3>2. Función de Relación:</h3>
                <p>Los seres vivos detectan cambios en su entorno y responden a ellos.</p>
                <ul>
                    <li>Las plantas giran hacia la luz (fototropismo).</li>
                    <li>Los animales huyen del peligro o buscan comida.</li>
                    <li>Las bacterias se mueven hacia donde hay alimento.</li>
                </ul>

                <h3>3. Función de Reproducción:</h3>
                <p>Los seres vivos producen nuevos individuos parecidos a ellos para que la especie continúe.</p>
                <ul>
                    <li><strong>Asexual:</strong> Un solo individuo produce hijos idénticos a sí mismo. Ejemplo: las bacterias se dividen en dos.</li>
                    <li><strong>Sexual:</strong> Se necesitan dos individuos (macho y hembra). Los hijos son parecidos pero no idénticos a los padres. Ejemplo: los humanos, los perros, las aves.</li>
                </ul>

                <div class="info-stat">¡Los seres vivos también crecen, se desarrollan y eventualmente mueren! Este ciclo se llama ciclo de vida.</div>
            `
        }
    ],
    ecologia: [
        {
            id: 'red',
            title: 'Cadenas y Redes Alimenticias',
            description: 'Nadie sobrevive solo. Descubre cómo fluye la energía en la naturaleza.',
            image: './assets/food_web_ecosystem_1775510710541.png',
            category: 'Ecología',
            details: `
                <p>En la naturaleza, todos los seres vivos están conectados por la alimentación. La <strong>energía del Sol</strong> viaja de un ser vivo a otro a través de las cadenas alimenticias.</p>
                
                <div class="bio-image-container">
                    <img src="./assets/food_web_ecosystem_1775510710541.png" alt="Red Alimenticia" class="bio-image-placeholder">
                    <p class="image-caption">La energía fluye: Sol → Productores → Consumidores → Descomponedores.</p>
                </div>

                <h3>Niveles de la cadena alimenticia:</h3>

                <h4>1. Productores (Plantas y algas):</h4>
                <p>Fabrican su propio alimento mediante la <strong>fotosíntesis</strong>. Son la base de toda cadena alimenticia.</p>
                <p><strong>Ejemplos en Colombia:</strong> Los pastos de los Llanos Orientales, los árboles de la selva amazónica, los frailejones del Páramo de Sumapaz, las algas del mar Caribe.</p>

                <h4>2. Consumidores:</h4>
                <p>No pueden fabricar su alimento, así que comen a otros seres vivos.</p>
                <ul>
                    <li><strong>Consumidores primarios (herbívoros):</strong> Comen plantas. Ejemplos: el chigüiro, el venado, las orugas, los conejos.</li>
                    <li><strong>Consumidores secundarios (carnívoros):</strong> Comen a los herbívoros. Ejemplos: el jaguar, la anaconda, el águila harpía.</li>
                    <li><strong>Consumidores terciarios (superdepredadores):</strong> Están en la cima. Ejemplos: el jaguar, el cóndor de los Andes, el tiburón.</li>
                    <li><strong>Omnívoros:</strong> Comen plantas y animales. Ejemplos: los osos de anteojos, los cerdos, los seres humanos.</li>
                </ul>

                <h4>3. Descomponedores:</h4>
                <p>Descomponen los restos de seres vivos muertos y devuelven los nutrientes al suelo. Sin ellos, el planeta estaría lleno de basura.</p>
                <p><strong>Ejemplos:</strong> Hongos, bacterias y lombrices de tierra.</p>

                <h3>¿Qué es una red alimenticia?</h3>
                <p>En la realidad, no hay una sola cadena sino muchas entrelazadas formando una <strong>red</strong>. Un mismo animal puede ser presa de varios depredadores y alimentarse de varias cosas. Si una especie desaparece, afecta a muchas otras.</p>

                <div class="info-stat">¡Solo el 10% de la energía pasa de un nivel al siguiente! Por eso hay más plantas que herbívoros, y más herbívoros que carnívoros.</div>
            `
        },
        {
            id: 'ecosistemas',
            title: 'Ecosistemas de Colombia',
            description: 'Desde los páramos hasta la Amazonía: conoce nuestros ecosistemas.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600',
            category: 'Ecología',
            details: `
                <p>Un <strong>ecosistema</strong> es el conjunto de seres vivos (factores bióticos) y el ambiente donde viven (factores abióticos como el agua, el suelo, el clima y la luz), que interactúan entre sí.</p>

                <h3>Principales ecosistemas de Colombia:</h3>

                <h4>Bosque Tropical Amazónico:</h4>
                <p>Cubierto de árboles gigantes, con una biodiversidad increíble. Aquí viven jaguares, delfines rosados, guacamayas y miles de insectos.</p>

                <h4>Páramo:</h4>
                <p>Ecosistema de alta montaña, frío y húmedo. Los <strong>frailejones</strong> son sus plantas más representativas. Son las "fábricas de agua" de Colombia: de aquí nacen muchos ríos.</p>

                <h4>Bosque Seco Tropical:</h4>
                <p>Tiene una época seca muy marcada. Los árboles pierden sus hojas en verano. Se encuentra en zonas como el Valle del Cauca y la costa Caribe.</p>

                <h4>Manglar:</h4>
                <p>Bosques que crecen en la costa donde el agua dulce se mezcla con el agua salada. Son el hogar de cangrejos, peces y aves. Se encuentran en el Pacífico y el Caribe colombiano.</p>

                <h4>Sabana (Llanos Orientales):</h4>
                <p>Grandes extensiones de pastos con algunos árboles. Aquí viven chigüiros, venados, garzas y el oso hormiguero.</p>

                <h4>Arrecifes de coral:</h4>
                <p>En las islas del Caribe (como San Andrés y Rosario). Son estructuras formadas por pequeños animales llamados pólipos. Albergan miles de especies de peces.</p>

                <div class="info-stat">¡Colombia tiene más de 1.900 especies de aves! Es el país número 1 del mundo en variedad de aves. También es primero en anfibios y segundo en plantas.</div>
            `
        },
        {
            id: 'ciclos',
            title: 'Ciclos de la Materia',
            description: 'El agua, el carbono y el nitrógeno nunca se pierden, siempre se reciclan.',
            image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600',
            category: 'Ecología',
            details: `
                <p>En la naturaleza, la materia <strong>no se crea ni se destruye, se transforma</strong>. Los elementos químicos como el agua, el carbono y el nitrógeno viajan constantemente entre los seres vivos y el ambiente.</p>

                <h3>El Ciclo del Agua:</h3>
                <ol>
                    <li><strong>Evaporación:</strong> El sol calienta el agua de ríos, lagos y mares, y se convierte en vapor que sube al cielo.</li>
                    <li><strong>Condensación:</strong> El vapor se enfría y forma las nubes.</li>
                    <li><strong>Precipitación:</strong> Cuando las nubes están llenas, cae el agua como lluvia.</li>
                    <li><strong>Infiltración:</strong> El agua se filtra en el suelo y alimenta los ríos subterráneos.</li>
                    <li><strong>Transpiración:</strong> Las plantas también liberan vapor de agua por sus hojas.</li>
                </ol>

                <h3>El Ciclo del Carbono:</h3>
                <p>El carbono está en todos los seres vivos y en el aire (como CO₂).</p>
                <ul>
                    <li>Las plantas toman CO₂ del aire para hacer fotosíntesis.</li>
                    <li>Los animales comen plantas y obtienen carbono.</li>
                    <li>Tanto plantas como animales liberan CO₂ al respirar.</li>
                    <li>Los descomponedores liberan carbono cuando descomponen seres muertos.</li>
                </ul>

                <h3>El Ciclo del Nitrógeno:</h3>
                <p>El nitrógeno es esencial para formar proteínas y ADN.</p>
                <ul>
                    <li>Las bacterias del suelo "fijan" el nitrógeno del aire y lo convierten en una forma que las plantas pueden usar.</li>
                    <li>Las plantas absorben nitrógeno del suelo.</li>
                    <li>Los animales obtienen nitrógeno al comer plantas u otros animales.</li>
                    <li>Cuando los seres vivos mueren, los descomponedores devuelven el nitrógeno al suelo.</li>
                </ul>

                <div class="info-stat">¡El agua que bebes hoy es la misma que bebieron los dinosaurios! El agua de la Tierra se recicla una y otra vez a través del ciclo del agua.</div>
            `
        }
    ],
    animales: [
        {
            id: 'vertebrados',
            title: 'Animales Vertebrados',
            description: '¡Los que tienen columna vertebral! Mamíferos, aves, reptiles, anfibios y peces.',
            image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=800',
            category: 'Zoología',
            details: `
                <p>Los vertebrados son animales que tienen <strong>columna vertebral</strong> (un esqueleto interno). Se dividen en 5 grandes grupos:</p>

                <h3>1. Mamíferos:</h3>
                <ul>
                    <li>Tienen <strong>pelo</strong> y alimentan a sus crías con <strong>leche</strong>.</li>
                    <li>Respiran por pulmones y son de sangre caliente.</li>
                    <li><strong>Ejemplos colombianos:</strong> El jaguar, el oso de anteojos, el delfín rosado, el chigüiro (el roedor más grande del mundo), la ballena jorobada que llega al Pacífico colombiano.</li>
                </ul>

                <h3>2. Aves:</h3>
                <ul>
                    <li>Tienen <strong>plumas</strong> y <strong>alas</strong>. La mayoría vuela, pero no todas (como el pingüino).</li>
                    <li>Ponen huevos con cáscara dura y son de sangre caliente.</li>
                    <li><strong>Ejemplos colombianos:</strong> El cóndor de los Andes (nuestro ave nacional), el águila harpía, la guacamaya, el tucán, el colibrí.</li>
                </ul>

                <h3>3. Reptiles:</h3>
                <ul>
                    <li>Tienen <strong>escamas</strong> y son de sangre fría (su temperatura depende del ambiente).</li>
                    <li>Respiran por pulmones y ponen huevos.</li>
                    <li><strong>Ejemplos colombianos:</strong> La anaconda verde (la serpiente más pesada del mundo), el caimán aguja, la iguana verde, la tortuga Carey.</li>
                </ul>

                <h3>4. Anfibios:</h3>
                <ul>
                    <li>Viven <strong>en el agua cuando son pequeños</strong> (renacuajos) y <strong>en tierra cuando son adultos</strong>.</li>
                    <li>Tienen piel húmeda y son de sangre fría.</li>
                    <li><strong>Ejemplos colombianos:</strong> La rana dorada (en peligro de extinción), las ranas de cristal, el sapo común. ¡Colombia es el país con más especies de ranas del mundo!</li>
                </ul>

                <h3>5. Peces:</h3>
                <ul>
                    <li>Viven en el agua, respiran por <strong>branquias</strong> y tienen <strong>aletas</strong>.</li>
                    <li><strong>Ejemplos colombianos:</strong> El pez globo del Amazonas, el pirarucú (uno de los peces de agua dulce más grandes), los peces de arrecife en San Andrés.</li>
                </ul>

                <div class="info-stat">¡Colombia tiene más de 3.000 especies de peces de agua dulce! Es el primer país del mundo en este grupo.</div>
            `
        },
        {
            id: 'invertebrados-animales',
            title: 'Animales Invertebrados',
            description: 'Sin columna vertebral pero son los más exitosos del planeta.',
            image: 'https://images.unsplash.com/photo-1504190367302-3f195aa57850?q=80&w=600',
            category: 'Zoología',
            details: `
                <p>Los invertebrados son animales <strong>sin columna vertebral</strong>. Son el grupo más numeroso: ¡el 95% de todas las especies animales!</p>

                <h3>Artrópodos:</h3>
                <ul>
                    <li><strong>Insectos:</strong> 6 patas y cuerpo en 3 partes. Mariposas, hormigas, escarabajos, abejas. Colombia tiene más de 3.000 especies de mariposas.</li>
                    <li><strong>Arácnidos:</strong> 8 patas. Arañas, escorpiones y garrapatas.</li>
                    <li><strong>Crustáceos:</strong> Cangrejos, camarones, langostas.</li>
                    <li><strong>Miriápodos:</strong> Ciempiés y milpiés.</li>
                </ul>

                <h3>Moluscos:</h3>
                <p>Cuerpo blando, muchos con concha. Caracoles, ostras, pulpos y calamares.</p>

                <h3>Anélidos:</h3>
                <p>Gusanos segmentados. La lombriz de tierra es fundamental para la calidad del suelo.</p>

                <h3>Equinodermos:</h3>
                <p>Estrellas de mar y erizos. Viven en el mar.</p>

                <h3>Cnidarios:</h3>
                <p>Medusas, corales y anémonas. Los corales forman arrecifes en el Caribe colombiano.</p>

                <div class="info-stat">¡1 de cada 4 animales en la Tierra es un escarabajo! Los invertebrados son esenciales: polinizan plantas, descomponen materia y son alimento de otros animales.</div>
            `
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
                <p>El <strong>ADN (Ácido Desoxirribonucleico)</strong> es la molécula que contiene toda la información que te hace ser como eres. Es como un manual de instrucciones que determina el color de tus ojos, tu tipo de cabello y muchas otras características.</p>
                
                <div class="bio-image-container">
                    <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=600" alt="Estructura del ADN" class="bio-image-placeholder">
                    <p class="image-caption">La doble hélice del ADN: dos cadenas enrolladas como una escalera de caracol.</p>
                </div>

                <h3>¿Cómo es el ADN?</h3>
                <ul>
                    <li><strong>Doble hélice:</strong> Imagina una escalera de caracol. Eso es el ADN: dos cadenas enrolladas.</li>
                    <li><strong>Nucleótidos:</strong> Son los "peldaños" de la escalera. Cada uno tiene una base nitrogenada: <strong>A</strong>denina (A), <strong>T</strong>imina (T), <strong>C</strong>itosina (C) o <strong>G</strong>uanina (G).</li>
                    <li><strong>Regla de apareamiento:</strong> A siempre se une con T, y C siempre se une con G. ¡Así de simple!</li>
                </ul>

                <h3>¿Dónde está el ADN?</h3>
                <p>El ADN está guardado en el <strong>núcleo</strong> de cada una de tus células, enrollado en estructuras llamadas <strong>cromosomas</strong>.</p>
                <ul>
                    <li>Los humanos tenemos <strong>46 cromosomas</strong> (23 pares).</li>
                    <li>23 los heredaste de tu mamá y 23 de tu papá.</li>
                    <li>Un par son los <strong>cromosomas sexuales</strong>: XX en mujeres, XY en hombres.</li>
                </ul>

                <h3>¿Qué es un gen?</h3>
                <p>Un <strong>gen</strong> es un pedacito de ADN que tiene las instrucciones para una característica específica. Por ejemplo, hay genes que determinan el color de tus ojos o si puedes enrollar la lengua en forma de tubo.</p>
                <p>Los humanos tenemos aproximadamente <strong>20.000 genes</strong>.</p>

                <div class="info-stat">¡Si estiraras el ADN de una sola de tus células, mediría 2 metros! Y tienes billones de células.</div>
            `
        },
        {
            id: 'herencia',
            title: '¿Por qué te pareces a tus padres?',
            description: 'Descubre cómo se heredan las características de una generación a otra.',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600',
            category: 'Herencia',
            details: `
                <p><strong>Gregor Mendel</strong> (1822-1884) fue un monje que descubrió cómo se pasan las características de padres a hijos. Lo hizo cruzando plantas de guisante (arvejas) y observando cómo se heredaban cosas como el color de la flor o la forma de la semilla.</p>
                
                <h3>Conceptos que debes conocer:</h3>
                <ul>
                    <li><strong>Gen:</strong> Es la unidad de herencia. Un "pedacito de ADN" que determina una característica.</li>
                    <li><strong>Alelo:</strong> Es cada "versión" de un gen. Por ejemplo, el gen del color de ojos tiene un alelo para ojos marrones y otro para ojos azules.</li>
                    <li><strong>Genotipo:</strong> Es la combinación de alelos que tienes "por dentro" (ejemplo: AA, Aa, aa).</li>
                    <li><strong>Fenotipo:</strong> Es lo que se ve "por fuera" (ojos marrones, pelo liso, etc.).</li>
                </ul>

                <h3>Dominante y Recesivo:</h3>
                <ul>
                    <li><strong>Alelo dominante (se escribe en MAYÚSCULA):</strong> Es el que "gana" y se muestra. Por ejemplo, el alelo de ojos marrones (A) domina sobre el de ojos azules (a).</li>
                    <li><strong>Alelo recesivo (se escribe en minúscula):</strong> Solo se muestra si no hay uno dominante. Necesitas tener dos alelos recesivos (aa) para tener ojos azules.</li>
                </ul>

                <h3>Ejemplo práctico:</h3>
                <p>Si un papá tiene alelos <strong>AA</strong> (ojos marrones) y una mamá tiene <strong>aa</strong> (ojos azules):</p>
                <ul>
                    <li>Todos los hijos serán <strong>Aa</strong> (ojos marrones, porque el alelo A domina).</li>
                    <li>Pero llevan el alelo de ojos azules "escondido" y podrían tener nietos con ojos azules.</li>
                </ul>

                <div class="bio-image-container">
                    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600" alt="Herencia" class="bio-image-placeholder">
                    <p class="image-caption">El cuadro de Punnett ayuda a predecir las combinaciones posibles de herencia.</p>
                </div>

                <div class="info-stat">¡El color de ojos no depende de un solo gen! En realidad hay varios genes involucrados, pero el modelo de Mendel es una buena forma de empezar a entender la herencia.</div>
            `
        },
        {
            id: 'cromosomas',
            title: 'Cromosomas: Los Paquetes del ADN',
            description: 'Cómo se organiza toda tu información genética en 23 pares.',
            image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=600',
            category: 'Genética',
            details: `
                <p>Los <strong>cromosomas</strong> son estructuras en forma de X que contienen el ADN enrollado y compacto. Imagina que el ADN es un hilo muy largo y los cromosomas son como carretes donde se enrolla.</p>
                
                <h3>Los cromosomas humanos:</h3>
                <ul>
                    <li>Los humanos tenemos <strong>46 cromosomas</strong> organizados en <strong>23 pares</strong>.</li>
                    <li>23 vienen de tu mamá (óvulo) y 23 de tu papá (espermatozoide).</li>
                </ul>

                <h3>Tipos de cromosomas:</h3>
                <ul>
                    <li><strong>Autosomas (22 pares):</strong> Determinan la mayoría de tus características: color de ojos, tipo de cabello, estatura, etc.</li>
                    <li><strong>Cromosomas sexuales (1 par):</strong> Determinan si eres hombre o mujer. Las mujeres tienen <strong>XX</strong> y los hombres tienen <strong>XY</strong>.</li>
                </ul>

                <h3>¿Qué pasa cuando algo sale mal?</h3>
                <p>A veces ocurren cambios en los cromosomas o genes llamados <strong>mutaciones</strong>:</p>
                <ul>
                    <li>Algunas mutaciones no causan ningún problema.</li>
                    <li>Otras pueden causar enfermedades genéticas, como el síndrome de Down (cuando hay un cromosoma 21 extra).</li>
                    <li>Algunas pocas pueden ser beneficiosas y ayudar a la evolución de las especies.</li>
                </ul>

                <div class="info-stat">¡El Proyecto Genoma Humano (2003) logró leer todo el ADN humano! Participaron científicos de todo el mundo durante 13 años.</div>
            `
        }
    ]
};
