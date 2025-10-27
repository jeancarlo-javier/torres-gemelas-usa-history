export const storyActs = [
  {
    id: "amanecer",
    label: "Acto I",
    timeframe: "Mañana del 11 de septiembre",
    title: "El minuto en que la ciudad dejó de sonar",
    lead: "En menos de quince minutos, las rutas cotidianas se convirtieron en corredores de mensajes y silencios.",
    body: "Personas en el metro, repartidores y oficinistas registraron el destello, los papeles incendiados y la incertidumbre de no saber qué edificio estaba ardiendo. La radio comunitaria WBAI improvisó traducciones para las familias latinas mientras la señal telefónica colapsaba.",
    highlights: [
      {
        title: "08:49 a. m.",
        detail:
          "Mensajes de voz circulan por Manhattan Sur: ‘Sigue caminando al norte, no mires atrás’.",
      },
      {
        title: "09:02 a. m.",
        detail:
          "El segundo impacto confirma que no es un accidente; las escuelas cercanas activan planes de evacuación a pie.",
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
    visuals: {
      main: "/images/s2-1.jpeg",
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
