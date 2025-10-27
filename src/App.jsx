import { useState, useMemo, useRef, useCallback, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import { temperatureStates } from "./data/temperatureStates";
import TemperaturePanel from "./components/TemperaturePanel";
import StateCard from "./components/StateCard";

const totalStates = temperatureStates.length;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function DiplomaticTemperatureControl() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stopRefs = useRef([]);
  const navIdBase = useId();
  const topRef = useRef(null);

  const activeState = temperatureStates[activeIndex];

  const dynamicPalette = useMemo(
    () => ({
      "--background-gradient": activeState.colors.background,
      "--background-overlay": activeState.colors.backdrop,
      "--accent": activeState.colors.accent,
      "--accent-soft": activeState.colors.accentSoft,
      "--surface": activeState.colors.surface,
      "--surface-strong": activeState.colors.surfaceStrong,
      "--outline": activeState.colors.outline,
      "--text-muted": activeState.colors.textMuted,
      "--track": activeState.colors.track,
    }),
    [activeState]
  );

  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleSelect = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const handleStopKey = useCallback((event, index) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const next = clamp(index + 1, 0, totalStates - 1);
      if (next !== index) {
        setActiveIndex(next);
        stopRefs.current[next]?.focus({ preventScroll: true });
      }
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const next = clamp(index - 1, 0, totalStates - 1);
      if (next !== index) {
        setActiveIndex(next);
        stopRefs.current[next]?.focus({ preventScroll: true });
      }
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      stopRefs.current[0]?.focus({ preventScroll: true });
    } else if (event.key === "End") {
      event.preventDefault();
      const last = totalStates - 1;
      setActiveIndex(last);
      stopRefs.current[last]?.focus({ preventScroll: true });
    }
  }, []);

  const handleCardNavigate = useCallback(
    (index) => {
      const nextIndex = clamp(index, 0, totalStates - 1);
      if (nextIndex === activeIndex) {
        scrollToTop();
        return;
      }
      setActiveIndex(nextIndex);
      stopRefs.current[nextIndex]?.focus({ preventScroll: true });
      scrollToTop();
    },
    [activeIndex, scrollToTop]
  );

  const progressFraction =
    totalStates > 1 ? activeIndex / (totalStates - 1) : 0;
  const rawProgress = progressFraction * 100;
  const progressWidth =
    totalStates === 1 ? 100 : clamp(rawProgress, 1.5, 100);
  const cursorLeft =
    totalStates === 1 ? 50 : clamp(rawProgress, 1.5, 98.5);
  const tabIds = useMemo(
    () =>
      temperatureStates.map(
        (state) => `${navIdBase}-tab-${state.id}`
      ),
    [navIdBase]
  );
  const contentIds = useMemo(
    () =>
      temperatureStates.map(
        (state) => `${navIdBase}-panel-${state.id}`
      ),
    [navIdBase]
  );

  return (
    <div ref={topRef} className="diplomatic-root" style={dynamicPalette}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeState.id}
          aria-hidden
          className="diplomatic-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </AnimatePresence>
      <div className="diplomatic-noise" aria-hidden />
      <div className="diplomatic-surface">
        <TemperaturePanel
          states={temperatureStates}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          stopRefs={stopRefs}
          handleStopKey={handleStopKey}
          progressWidth={progressWidth}
          cursorLeft={cursorLeft}
          tabIds={tabIds}
          contentIds={contentIds}
        />
        <main className="diplomatic-content">
          <AnimatePresence mode="wait">
            <StateCard
              key={activeState.id}
              state={activeState}
              contentId={contentIds[activeIndex]}
              tabId={tabIds[activeIndex]}
              onPrev={
                activeIndex > 0
                  ? () => handleCardNavigate(activeIndex - 1)
                  : undefined
              }
              onNext={
                activeIndex < totalStates - 1
                  ? () => handleCardNavigate(activeIndex + 1)
                  : undefined
              }
              hasPrev={activeIndex > 0}
              hasNext={activeIndex < totalStates - 1}
            />
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
