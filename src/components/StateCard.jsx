import { motion } from "framer-motion";
import SignalBars from "./SignalBars";

export default function StateCard({
  state,
  contentId,
  tabId,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) {
  const signalHeadingId = `${contentId}-signal`;
  const handlePrev = hasPrev ? onPrev : undefined;
  const handleNext = hasNext ? onNext : undefined;

  return (
    <motion.article
      id={contentId}
      role="tabpanel"
      aria-labelledby={tabId}
      className="state-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <header className="state-hero">
        <div className="state-hero__meta">
          <span className="state-hero__badge">{state.label}</span>
          <span className="state-hero__timeframe">{state.timeframe}</span>
        </div>
        <h2 className="state-hero__title">{state.heroTitle}</h2>
        <p className="state-hero__summary">{state.summary}</p>
      </header>

      <section className="state-delta" aria-labelledby={`${contentId}-delta`}>
        <h3 id={`${contentId}-delta`} className="section-title">
          ¿Qué cambió?
        </h3>
        <p>{state.delta}</p>
      </section>

      <SignalBars signal={state.signal} headingId={signalHeadingId} />

      <section
        className="state-highlights"
        aria-labelledby={`${contentId}-highlights`}
      >
        <div className="section-heading">
          <h3 id={`${contentId}-highlights`} className="section-title">
            Movimientos clave
          </h3>
          <p>Eventos que definen el clima diplomático de la fase.</p>
        </div>
        <div className="highlight-grid">
          {state.keyMoves.map((move, index) => (
            <motion.div
              key={move.id}
              className="highlight-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="highlight-card__tag">{move.tag}</span>
              <h4>{move.title}</h4>
              <p>{move.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="state-context"
        aria-labelledby={`${contentId}-context`}
      >
        <div className="section-heading">
          <h3 id={`${contentId}-context`} className="section-title">
            Contexto y aprendizajes
          </h3>
          <p>
            Cómo esta temperatura impacta en la sociedad y la toma de
            decisiones.
          </p>
        </div>
        <div className="context-grid">
          {state.context.map((entry) => (
            <div key={entry.heading} className="context-card">
              <h4>{entry.heading}</h4>
              <p>{entry.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <blockquote className="state-quote" aria-labelledby={`${contentId}-quote`}>
        <p>“{state.quote.text}”</p>
        <cite id={`${contentId}-quote`}>{state.quote.author}</cite>
      </blockquote>
      <section
        className="state-opinion"
        aria-labelledby={`${contentId}-opinion`}
      >
        <h3 id={`${contentId}-opinion`} className="section-title">
          Opinión
        </h3>
        <p>{state.opinion}</p>
      </section>
      <nav className="state-nav" aria-label="Navegación de estados">
        <NavigationButton
          direction="back"
          label="Anterior"
          disabled={!hasPrev}
          onNavigate={handlePrev}
        />
        <NavigationButton
          direction="forward"
          label="Siguiente"
          disabled={!hasNext}
          onNavigate={handleNext}
        />
      </nav>
    </motion.article>
  );
}

function NavigationButton({
  direction,
  label,
  disabled,
  onNavigate,
}) {
  const handleClick = () => {
    if (disabled) return;
    onNavigate?.();
  };

  return (
    <button
      type="button"
      className="state-nav__button"
      data-direction={direction}
      onClick={handleClick}
      disabled={disabled}
      aria-label={
        direction === "back"
          ? "Ir al estado anterior"
          : "Ir al estado siguiente"
      }
    >
      {direction === "back" ? "←" : "→"} {label}
    </button>
  );
}
