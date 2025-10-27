import { useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { storyActs } from "./data/storyActs";

const totalActs = storyActs.length;

export default function ThreeActStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAct = storyActs[activeIndex];

  const palette = useMemo(
    () => ({
      "--background-gradient": activeAct.palette.background,
      "--accent": activeAct.palette.accent,
      "--accent-soft": activeAct.palette.accentSoft,
      "--surface": activeAct.palette.surface,
      "--outline": activeAct.palette.outline,
      "--text-muted": activeAct.palette.textMuted,
    }),
    [activeAct]
  );

  const goTo = useCallback((index) => {
    if (index < 0 || index >= totalActs) return;
    setActiveIndex(index);
  }, []);

  return (
    <div className="acts-root" style={palette}>
      <div className="acts-parallax" aria-hidden />
      <div className="acts-backdrop" aria-hidden />
      <div className="acts-shell">
        <header className="acts-header">
          <span className="acts-header__eyebrow">Relato en tres actos · 11 de septiembre</span>
          <h1>Una ciudad que habla con luces</h1>
          <p>
            Este relato acompaña las primeras horas tras los atentados, desde el desconcierto
            inicial hasta la vigilia nocturna. Navega cada acto y descubre cómo la gente hiló
            instrucciones, rescates y memoria compartida.
          </p>
        </header>

        <nav className="acts-timeline" aria-label="Navegación de actos">
          <button
            type="button"
            className="timeline-arrow"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Acto anterior"
          >
            ←
          </button>
          <div className="timeline-track">
            {storyActs.map((act, index) => (
              <button
                key={act.id}
                type="button"
                className="timeline-stop"
                data-active={index === activeIndex}
                onClick={() => goTo(index)}
                aria-current={index === activeIndex}
              >
                <span className="timeline-stop__label">{act.label}</span>
                <span className="timeline-stop__year">{act.timeframe}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="timeline-arrow"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === totalActs - 1}
            aria-label="Acto siguiente"
          >
            →
          </button>
        </nav>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeAct.id}
            className="act-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="act-panel__visuals">
              <figure className="act-figure act-figure--main">
                <img src={activeAct.visuals.main} alt="Escena representativa" loading="lazy" />
              </figure>
              <figure className="act-figure act-figure--thumb">
                <img src={activeAct.visuals.thumb} alt="Detalle documental" loading="lazy" />
              </figure>
            </div>
            <div className="act-panel__content">
              <span className="act-panel__eyebrow">
                {activeAct.label} · {activeAct.timeframe}
              </span>
              <h2>{activeAct.title}</h2>
              <p className="act-panel__lead">{activeAct.lead}</p>
              <p className="act-panel__body">{activeAct.body}</p>
              <div className="act-panel__highlights">
                {activeAct.highlights.map((item) => (
                  <div key={item.title} className="highlight-callout">
                    <span>{item.title}</span>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </div>
  );
}
