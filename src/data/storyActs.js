export const storyActs = [
  {
    id: "amanecer",
    label: "Acto I",
    timeframe: "Mañana del 11 de septiembre",
    title: "El minuto en que la ciudad dejó de sonar",
    lead: "En quince minutos los trayectos cotidianos se volvieron corredores de mensajes, radios improvisadas y silencio contenido.",
    body: "Quienes iban en la línea 4, repartidores en bicicleta y oficinistas vieron primero el reflejo metálico, luego la ceniza cayendo como nieve. La radio comunitaria WBAI improvisó traducciones simultáneas para las familias latinas, mientras la señal telefónica colapsaba y los periódicos gratuitos sirvieron como mapas de rescate.",
    highlights: [
      {
        title: "08:49 a. m.",
        detail:
          "Mensajes de voz circulan por Manhattan Sur: “Sigue caminando al norte, no mires atrás”.",
      },
      {
        title: "09:02 a. m.",
        detail:
          "El segundo impacto confirma que no es un accidente; las escuelas cercanas activan planes de evacuación a pie.",
      },
      {
        title: "09:20 a. m.",
        detail:
          "Taxis y radios comunitarias enlazan actualizaciones en español ante la saturación de los canales oficiales.",
      },
    ],
    fieldNote:
      "Los relatos coinciden en que el ruido de los aviones dio paso a un zumbido grave de sirenas, un contraste que muchas crónicas recogen como el “silencio más ruidoso” de la ciudad.",
    quote: {
      text: "Los pasajeros se pasaban teléfonos descompuestos solo para sentir que seguían comunicados. Fue un código de acompañamiento.",
      author: "Elena P., operadora de la línea 4",
      source: "Archivo oral de WNYC, 2002",
    },
    dataPoints: [
      {
        label: "Líneas colapsadas",
        value: "3 de 4",
        detail:
          "Los nodos de Verizon cercanos al World Trade Center quedaron fuera de servicio.",
      },
      {
        label: "Radios cívicas",
        value: "18",
        detail:
          "Coordinaban traducciones y rutas seguras para comunidades inmigrantes.",
      },
    ],
    resources: [
      {
        type: "audio",
        title: "WBAI · Transmisiones del 11S",
        description:
          "Fragmentos bilingües que documentan las primeras traducciones de emergencia.",
        url: "https://www.wnyc.org/story/911-tapes/",
      },
      {
        type: "map",
        title: "NYC Municipal Archives · Mapas de evacuación",
        description: "Planos con rutas peatonales utilizadas esa mañana.",
        url: "https://www.archives.nyc/911-maps",
      },
    ],
    visuals: {
      main: "/images/s1-1.webp",
      thumb: "/images/s1-2.webp",
    },
    palette: {
      background:
        "radial-gradient(circle at top, rgba(34, 26, 22, 0.8), rgba(5, 4, 8, 0.95))",
      accent: "#d7a869",
      accentSoft: "rgba(215, 168, 105, 0.25)",
      surface: "rgba(15, 12, 10, 0.9)",
      outline: "rgba(255, 218, 184, 0.18)",
      textMuted: "rgba(235, 220, 205, 0.75)",
    },
  },
  {
    id: "rescate",
    label: "Acto II",
    timeframe: "Rescate y caos",
    title: "Correr hacia el humo",
    lead: "Bomberos, paramédicos y voluntarios convierten las aceras en puestos de triage mientras intentan mantener la calma por radio.",
    body: "En la Estación Ladder 3 los equipos subieron por la escalera A describiendo en voz alta el calor para apoyar al resto. Afuera, ferris privados evacuaron personas sin preguntar nombres. Las esquinas se llenaron de mascarillas improvisadas y carteles que ofrecían traductores al español.",
    highlights: [
      {
        title: "10:05 a. m.",
        detail:
          "Collapse de la Torre Sur: las transmisiones del FDNY se mezclan con peticiones de agua y oxígeno.",
      },
      {
        title: "11:30 a. m.",
        detail:
          "Se habilitan corredores hacia Battery Park para embarcar heridos rumbo a Staten Island.",
      },
    ],
    fieldNote:
      "La respuesta civil y de emergencia convirtió cafeterías en salas de rehidratación, iglesias en centros logísticos y ferris privados en ambulancias flotantes. Cada minuto contaba para retirar personas antes de nuevos derrumbes.",
    quote: {
      text: "Subimos por la escalera A repitiendo en voz alta: calor extremo, humo denso, seguimos avanzando. Era la forma de que todos supieran que aún íbamos juntos.",
      author: "Capitán Patrick Brown, FDNY Ladder 3",
      source: "Transcripción de radio, FDNY",
    },
    dataPoints: [
      {
        label: "Rescatistas",
        value: "2 000+",
        detail:
          "Bomberos, paramédicos y voluntarios registrados durante la mañana.",
      },
      {
        label: "Puentes cerrados",
        value: "5",
        detail: "Lo que obligó a evacuar por corredores peatonales y ferris.",
      },
    ],
    resources: [
      {
        type: "document",
        title: "FDNY · Oral Histories",
        description:
          "Testimonios completos de las compañías que ingresaron a las torres.",
        url: "https://www1.nyc.gov/site/fdny/about/resources/9-11-oral-histories.page",
      },
      {
        type: "video",
        title: "Boatlift · The People of 9/11",
        description:
          "Documental sobre la operación marítima espontánea en el Hudson.",
        url: "https://youtu.be/MDOrzF7B2Kg",
      },
    ],
    visuals: {
      main: "/images/s2-1.webp",
      thumb: "/images/s2-2.webp",
    },
    palette: {
      background:
        "radial-gradient(circle at top, rgba(30, 14, 12, 0.85), rgba(6, 4, 4, 0.95))",
      accent: "#f07f5a",
      accentSoft: "rgba(240, 127, 90, 0.25)",
      surface: "rgba(18, 8, 6, 0.92)",
      outline: "rgba(255, 153, 122, 0.2)",
      textMuted: "rgba(244, 216, 204, 0.78)",
    },
  },
  {
    id: "vigilia",
    label: "Acto III",
    timeframe: "Vigilia y legado",
    title: "Cuando la noche se llenó de nombres",
    lead: "Al caer el sol, la ciudad empezó a pegar fotografías, encender velas y organizar listas para encontrar a quienes faltaban.",
    body: "Union Square se convirtió en un mural improvisado con carteles escritos a mano. Iglesias, mezquitas y centros comunitarios ofrecieron refugio, y los museos comenzaron a recolectar objetos para un archivo que hoy alimenta memoriales bilingües.",
    highlights: [
      {
        title: "4:00 p. m.",
        detail:
          "Centros de reunificación publican listas de personas localizadas cada treinta minutos.",
      },
      {
        title: "12:00 a. m.",
        detail:
          "La Vigilia de Union Square reúne mensajes en más de diez idiomas: ‘Seguimos aquí’.",
      },
    ],
    fieldNote:
      "La noche activó memorias colectivas: quienes no podían ofrecer rescate ofrecieron listas, traducciones, comida caliente y espacio para llorar. La documentación ciudadana de esa vigilia hoy alimenta museos y archivos digitales.",
    quote: {
      text: "Escribimos los nombres en tiza, luego en carteles plastificados, porque nadie quería que la lluvia borrara la búsqueda.",
      author: "Farah L., voluntaria en Union Square",
      source: "Diarios del September 11 Digital Archive",
    },
    dataPoints: [
      {
        label: "Lenguas registradas",
        value: "10+",
        detail:
          "Mensajes en español, árabe, mandarín, bengalí y lenguas indígenas.",
      },
      {
        label: "Centros de apoyo",
        value: "65",
        detail:
          "Espacios religiosos y comunitarios que ofrecieron refugio esa noche.",
      },
    ],
    resources: [
      {
        type: "archive",
        title: "Library of Congress · 9/11 Documentary Project",
        description:
          "Cartas, fotografías y diarios digitalizados en varios idiomas.",
        url: "https://www.loc.gov/item/afc2001015/",
      },
      {
        type: "collection",
        title: "Smithsonian · September 11 Collection",
        description:
          "Objetos y velas recuperadas de Union Square y Battery Park.",
        url: "https://americanhistory.si.edu/september-11",
      },
    ],
    visuals: {
      main: "/images/s3-1.jpeg",
      thumb: "/images/s3-2.webp",
    },
    palette: {
      background:
        "radial-gradient(circle at top, rgba(20, 20, 32, 0.85), rgba(3, 3, 8, 0.94))",
      accent: "#a9c8ff",
      accentSoft: "rgba(169, 200, 255, 0.3)",
      surface: "rgba(8, 10, 20, 0.92)",
      outline: "rgba(169, 200, 255, 0.2)",
      textMuted: "rgba(214, 222, 245, 0.78)",
    },
  },
];
