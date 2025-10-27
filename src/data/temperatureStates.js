export const temperatureStates = [
  {
    id: "cold",
    label: "Frío",
    heroTitle: "Cautela Helada",
    timeframe: "1947 – 1949",
    summary:
      "El enfrentamiento arranca con alianzas defensivas y un lenguaje de sospecha. Europa queda dividida y cada bloque blinda su influencia.",
    delta:
      "EE.UU. y la URSS institucionalizan la contención y definen zonas de influencia con alianzas de defensa colectiva.",
    signal: {
      status: "DEFCON 3",
      tension: 82,
      diplomacy: 18,
      summary:
        "La cooperación es mínima; los canales se usan para mensajes duros y demostraciones de fuerza.",
    },
    keyMoves: [
      {
        id: "truman-doctrine",
        tag: "Doctrina",
        title: "Doctrina Truman",
        description:
          "Compromiso estadounidense de contener el comunismo con ayuda económica y militar.",
      },
      {
        id: "marshall-plan",
        tag: "Economía",
        title: "Plan Marshall",
        description:
          "Reconstrucción de Europa occidental para fortalecer democracias y frenar avances soviéticos.",
      },
      {
        id: "berlin-airlift",
        tag: "Crisis",
        title: "Bloqueo de Berlín",
        description:
          "El puente aéreo mantiene viva a Berlín occidental y prueba la determinación aliada.",
      },
    ],
    context: [
      {
        heading: "Cartelera propagandística",
        detail:
          "Narrativas nacionales presentan al bloque rival como amenaza existencial y justifican gastos militares.",
      },
      {
        heading: "Efecto social",
        detail:
          "La opinión pública acepta sacrificios económicos en nombre de la seguridad y la reconstrucción.",
      },
    ],
    quote: {
      text: "Debemos apoyar a los pueblos libres que resisten intentos de subyugación.",
      author: "Harry S. Truman, 1947",
    },
    opinion:
      "Muestra cómo el miedo inicial cerró casi por completo la puerta a un diálogo real entre bloques.",
    colors: {
      background:
        "linear-gradient(170deg, #050d1c 0%, #0a1b32 45%, #041022 100%)",
      backdrop:
        "radial-gradient(circle at 20% 30%, rgba(104, 191, 255, 0.25), transparent 60%), radial-gradient(circle at 78% 72%, rgba(41, 120, 208, 0.18), transparent 67%)",
      accent: "#5ac8ff",
      accentSoft: "rgba(90, 200, 255, 0.24)",
      surface: "rgba(6, 22, 42, 0.78)",
      surfaceStrong: "rgba(4, 18, 34, 0.92)",
      outline: "rgba(132, 210, 255, 0.28)",
      textMuted: "rgba(210, 226, 242, 0.76)",
      track: "rgba(58, 122, 182, 0.6)",
    },
  },
  {
    id: "brink",
    label: "Tenso",
    heroTitle: "En el Borde",
    timeframe: "1950 – 1962",
    summary:
      "La competencia se militariza: guerras proxy, carreras tecnológicas y misiles apuntando a capitales rivales.",
    delta:
      "Los conflictos indirectos y la paridad nuclear fuerzan protocolos de crisis en tiempo real.",
    signal: {
      status: "DEFCON 2",
      tension: 92,
      diplomacy: 8,
      summary:
        "El brinkmanship domina; cualquier error de cálculo puede escalar a catástrofe.",
    },
    keyMoves: [
      {
        id: "korean-war",
        tag: "Proxy",
        title: "Guerra de Corea",
        description:
          "Primer choque armado entre aliados de ambos bloques con costos humanos masivos.",
      },
      {
        id: "h-bomb-sputnik",
        tag: "Tecnología",
        title: "Bomba H y Sputnik",
        description:
          "Armas termonucleares y satélites muestran la carrera por la supremacía global.",
      },
      {
        id: "cuban-missiles",
        tag: "Crisis",
        title: "Misiles en Cuba",
        description:
          "Trece días que llevan al mundo al borde de la guerra nuclear y terminan con concesiones discretas.",
      },
    ],
    context: [
      {
        heading: "Alianzas rivales",
        detail:
          "OTAN y Pacto de Varsovia formalizan compromisos de defensa mutua e incrementan despliegues.",
      },
      {
        heading: "Vida cotidiana",
        detail:
          "Búnkeres domésticos, propaganda y espionaje alimentan la psicosis colectiva.",
      },
    ],
    quote: {
      text: "Nunca hemos estado tan cerca de la destrucción mutua.",
      author: "John F. Kennedy, 1962",
    },
    opinion:
      "Esta etapa obligó a evitar errores a toda costa y mostró que la diplomacia debe actuar incluso bajo tensión extrema.",
    colors: {
      background:
        "linear-gradient(170deg, #130716 0%, #1d1030 42%, #120321 100%)",
      backdrop:
        "radial-gradient(circle at 28% 24%, rgba(255, 105, 155, 0.22), transparent 63%), radial-gradient(circle at 70% 80%, rgba(112, 54, 255, 0.28), transparent 66%)",
      accent: "#ff6ea8",
      accentSoft: "rgba(255, 110, 168, 0.22)",
      surface: "rgba(30, 10, 42, 0.76)",
      surfaceStrong: "rgba(18, 6, 32, 0.9)",
      outline: "rgba(255, 129, 189, 0.26)",
      textMuted: "rgba(244, 213, 243, 0.72)",
      track: "rgba(196, 92, 194, 0.55)",
    },
  },
  {
    id: "detente",
    label: "Templado",
    heroTitle: "Señales de Deshielo",
    timeframe: "1963 – 1972",
    summary:
      "La distensión abre canales de diálogo sin abandonar la competencia geopolítica.",
    delta:
      "Se firman límites a las pruebas nucleares y se establecen líneas de comunicación directa.",
    signal: {
      status: "DEFCON 4",
      tension: 58,
      diplomacy: 42,
      summary:
        "Existen acuerdos parciales que amortiguan futuras crisis y permiten cooperación puntual.",
    },
    keyMoves: [
      {
        id: "test-ban",
        tag: "Tratado",
        title: "Limited Test Ban Treaty",
        description:
          "Prohíbe pruebas nucleares atmosféricas y submarinas, reduciendo contaminación radiactiva.",
      },
      {
        id: "hotline",
        tag: "Comunicación",
        title: "Línea directa Washington–Moscú",
        description:
          "Mensajería segura para gestionar emergencias sin escaladas accidentales.",
      },
      {
        id: "nixon-china",
        tag: "Diplomacia",
        title: "Apertura EE.UU.–China",
        description:
          "Nixon y Zhou Enlai redefinen el equilibrio global y presionan a Moscú a negociar.",
      },
    ],
    context: [
      {
        heading: "Cooperación técnica",
        detail:
          "El proyecto Apollo-Soyuz y acuerdos científicos simbolizan la posibilidad de colaboración.",
      },
      {
        heading: "Clamor social",
        detail:
          "Movimientos antibélicos y por los derechos civiles presionan por limitar el armamentismo.",
      },
    ],
    quote: {
      text: "Necesitamos competir sin destruirnos; esa es la verdadera victoria.",
      author: "Leonid Brézhnev, 1971",
    },
    opinion:
      "La distensión probó que hablar y ceder poco a poco sí puede bajar el riesgo de guerra.",
    colors: {
      background:
        "linear-gradient(170deg, #041f24 0%, #09353f 44%, #012126 100%)",
      backdrop:
        "radial-gradient(circle at 24% 22%, rgba(86, 230, 214, 0.26), transparent 58%), radial-gradient(circle at 74% 72%, rgba(52, 162, 212, 0.24), transparent 62%)",
      accent: "#4fe4cf",
      accentSoft: "rgba(79, 228, 207, 0.24)",
      surface: "rgba(10, 42, 48, 0.74)",
      surfaceStrong: "rgba(6, 30, 36, 0.9)",
      outline: "rgba(132, 238, 219, 0.24)",
      textMuted: "rgba(197, 234, 227, 0.74)",
      track: "rgba(72, 198, 188, 0.5)",
    },
  },
  {
    id: "warm",
    label: "Cálido",
    heroTitle: "Negociaciones en Marcha",
    timeframe: "1973 – 1985",
    summary:
      "La distensión rinde frutos tangibles, aunque eventos puntuales recuerdan lo frágil del equilibrio.",
    delta:
      "Tratados de control de armas, foros multilaterales y debates sobre derechos humanos se vuelven habituales.",
    signal: {
      status: "DEFCON 4",
      tension: 48,
      diplomacy: 52,
      summary:
        "La balanza se acerca al equilibrio, pero los retrocesos pueden deshacer los avances.",
    },
    keyMoves: [
      {
        id: "salt",
        tag: "Control",
        title: "Acuerdos SALT",
        description:
          "Limitan sistemas de lanzamiento estratégicos y abren mecanismos de verificación.",
      },
      {
        id: "helsinki",
        tag: "Derechos",
        title: "Acta Final de Helsinki",
        description:
          "Introducen compromisos sobre fronteras y libertades básicas en ambos bloques.",
      },
      {
        id: "afghanistan",
        tag: "Alerta",
        title: "Invasión soviética de Afganistán",
        description:
          "Reaviva la tensión y muestra los límites de la distensión frente a intereses estratégicos.",
      },
    ],
    context: [
      {
        heading: "Economía global",
        detail:
          "Crisis energéticas y recesiones fuerzan a cooperar para estabilizar mercados.",
      },
      {
        heading: "Sociedad civil",
        detail:
          "ONG y movimientos disidentes ganan visibilidad y condicionan agendas diplomáticas.",
      },
    ],
    quote: {
      text: "La distensión es un proceso; requiere vigilancia y voluntad.",
      author: "Gerald Ford, 1975",
    },
    opinion:
      "Aquí se entiende que cada avance diplomático necesitó vigilancia constante para no perderse frente a nuevos choques.",
    colors: {
      background:
        "linear-gradient(170deg, #211203 0%, #3b1e08 38%, #2a1204 100%)",
      backdrop:
        "radial-gradient(circle at 24% 20%, rgba(255, 171, 88, 0.28), transparent 60%), radial-gradient(circle at 76% 74%, rgba(255, 99, 71, 0.24), transparent 65%)",
      accent: "#ffb36b",
      accentSoft: "rgba(255, 179, 107, 0.24)",
      surface: "rgba(42, 20, 6, 0.78)",
      surfaceStrong: "rgba(32, 14, 3, 0.92)",
      outline: "rgba(255, 183, 120, 0.26)",
      textMuted: "rgba(255, 220, 195, 0.74)",
      track: "rgba(255, 166, 102, 0.56)",
    },
  },
  {
    id: "hot",
    label: "Luminoso",
    heroTitle: "Apertura Irreversible",
    timeframe: "1986 – 1991",
    summary:
      "Reformas soviéticas, presión económica y diplomacia activa desactivan la confrontación estructural.",
    delta:
      "Los acuerdos de desarme profundo y la transparencia política erosionan el miedo mutuo.",
    signal: {
      status: "DEFCON 5",
      tension: 28,
      diplomacy: 72,
      summary:
        "Predomina la negociación; la cooperación pública marca el ritmo de la transición.",
    },
    keyMoves: [
      {
        id: "inf-treaty",
        tag: "Cumbre",
        title: "Tratado INF",
        description:
          "Reagan y Gorbachov eliminan misiles de alcance intermedio desplegados en Europa.",
      },
      {
        id: "glasnost-perestroika",
        tag: "Reforma",
        title: "Glasnost y Perestroika",
        description:
          "Apertura política y reestructuración económica dentro de la Unión Soviética.",
      },
      {
        id: "berlin-collapse",
        tag: "Transición",
        title: "Caída del Muro y disolución soviética",
        description:
          "Europa del Este se abre y el sistema soviético se disuelve, cerrando la Guerra Fría.",
      },
    ],
    context: [
      {
        heading: "Integración europea",
        detail:
          "Se prepara el terreno para Maastricht y una Unión Europea más cohesionada.",
      },
      {
        heading: "Información abierta",
        detail:
          "Medios independientes y foros ciudadanos participan en la toma de decisiones.",
      },
    ],
    quote: {
      text: "La seguridad es indivisible; nadie puede sentirse seguro a expensas de otros.",
      author: "Mijaíl Gorbachov, 1987",
    },
    opinion:
      "El final llegó cuando la gente y la economía ya no soportaron el costo de la rivalidad y empujaron a cooperar.",
    colors: {
      background:
        "linear-gradient(170deg, #0b1a07 0%, #1f3912 40%, #041808 100%)",
      backdrop:
        "radial-gradient(circle at 30% 18%, rgba(152, 255, 160, 0.26), transparent 60%), radial-gradient(circle at 70% 78%, rgba(255, 241, 141, 0.28), transparent 62%)",
      accent: "#9bff91",
      accentSoft: "rgba(155, 255, 145, 0.22)",
      surface: "rgba(16, 48, 22, 0.76)",
      surfaceStrong: "rgba(10, 34, 15, 0.92)",
      outline: "rgba(162, 255, 170, 0.26)",
      textMuted: "rgba(207, 240, 210, 0.72)",
      track: "rgba(164, 255, 158, 0.52)",
    },
  },
];
