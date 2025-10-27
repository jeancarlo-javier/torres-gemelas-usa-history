import { motion } from "framer-motion";

export default function TemperaturePanel({
  states,
  activeIndex,
  onSelect,
  stopRefs,
  handleStopKey,
  progressWidth,
  cursorLeft,
  tabIds,
  contentIds,
}) {
  const projectInfo = [
    { label: "Autor", value: "Jeancarlo Javier Quintana Centeno" },
    { label: "Profesor", value: "Diego Sarmiento Delgado" },
    { label: "Curso", value: "US HISTORY SINCE 1877" },
  ];

  return (
    <aside className="temperature-panel">
      <div className="temperature-panel__header">
        <span className="temperature-panel__eyebrow">Línea del Tiempo</span>
        <div>
          <h1 className="temperature-panel__title">Termómetro</h1>
          <p className="temperature-panel__subtitle">
            Cambia de fase para ver cómo evoluciona la tensión y la diplomacia
            durante la Guerra Fría.
          </p>
        </div>
      </div>
      <nav
        className="temperature-nav"
        role="tablist"
        aria-label="Temperatura diplomática"
      >
        <div className="temperature-nav__track" aria-hidden>
          <motion.span
            className="temperature-nav__progress"
            initial={false}
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
          <motion.span
            className="temperature-nav__cursor"
            initial={false}
            animate={{ left: `${cursorLeft}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            aria-hidden
          />
        </div>
        <ul className="temperature-nav__list">
          {states.map((state, index) => (
            <li key={state.id} role="presentation">
              <button
                id={tabIds[index]}
                type="button"
                ref={(element) => {
                  stopRefs.current[index] = element;
                }}
                className="temperature-stop"
                data-active={index === activeIndex}
                onClick={() => onSelect(index)}
                onKeyDown={(event) => handleStopKey(event, index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls={contentIds[index]}
                tabIndex={index === activeIndex ? 0 : -1}
              >
                {index === activeIndex && (
                  <motion.span
                    layoutId="navHighlight"
                    className="temperature-stop__active"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    aria-hidden
                  />
                )}
                <span className="temperature-stop__label">{state.label}</span>
                <span className="temperature-stop__timeframe">
                  {state.timeframe}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <footer className="temperature-panel__footer">
        <p>
          Usa las flechas ← → o toca una fase para revisar la evolución del
          clima político y sus aprendizajes.
        </p>
        <section className="temperature-meta" aria-label="Datos del proyecto">
          {projectInfo.map((item) => (
            <div key={item.label} className="temperature-meta__item">
              <span className="temperature-meta__label">{item.label}</span>
              <span className="temperature-meta__value">{item.value}</span>
            </div>
          ))}
        </section>
      </footer>
    </aside>
  );
}
