import { motion } from "framer-motion";

export default function SignalBars({ signal, headingId }) {
  const { tension, diplomacy, status, summary } = signal;

  return (
    <section className="state-signal" aria-labelledby={headingId}>
      <div className="signal-status">
        <span id={headingId} className="signal-status__eyebrow">
          Indicador estratégico
        </span>
        <strong className="signal-status__value">{status}</strong>
      </div>
      <div className="signal-bars">
        <SignalBar
          idSuffix="tension"
          label="Presión militar"
          value={tension}
          variant="tension"
          delay={0}
        />
        <SignalBar
          idSuffix="diplomacy"
          label="Apertura diplomática"
          value={diplomacy}
          variant="diplomacy"
          delay={0.1}
        />
      </div>
      <p className="signal-summary">{summary}</p>
    </section>
  );
}

function SignalBar({ idSuffix, label, value, variant, delay }) {
  const width = `${value}%`;

  return (
    <div className="signal-bar">
      <div className="signal-bar__label">
        {label}
        <span>{value}%</span>
      </div>
      <div className="signal-bar__track" role="presentation">
        <motion.div
          key={idSuffix}
          className={`signal-bar__fill signal-bar__fill--${variant}`}
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{ duration: 0.6, ease: "easeOut", delay }}
          aria-hidden
        />
      </div>
    </div>
  );
}
