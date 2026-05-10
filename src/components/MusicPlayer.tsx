"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = async () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.7;
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      // autoplay blocked — still dismiss overlay
    }
    setHasStarted(true);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/mama.mp3" loop preload="auto" />

      {/* Splash screen — tap to start music */}
      {!hasStarted && (
        <div
          onClick={handleStart}
          role="button"
          aria-label="Toca para comenzar"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,10,30,0.72), rgba(159,18,57,0.80)), url('/images/caratula.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Animated ring */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute w-32 h-32 rounded-full bg-white/20 animate-ripple" />
            <div
              className="absolute w-32 h-32 rounded-full bg-white/10 animate-ripple"
              style={{ animationDelay: "0.9s" }}
            />
            <div className="relative w-24 h-24 rounded-full bg-white/25 flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl animate-float-heart">💐</span>
            </div>
          </div>

          <p
            className="font-dancing text-white animate-fade-in mb-1"
            style={{
              fontSize: "clamp(1.6rem, 8vw, 2.8rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            De Derek, para ti
          </p>

          <p
            className="font-nunito text-white/70 text-sm mb-6 animate-fade-in px-6 text-center"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
          >
            ❤️ Día de las Madres ❤️
          </p>

          {/* Volume tip */}
          <div
            className="font-nunito text-white/80 text-sm mb-8 px-8 py-3 rounded-full animate-fade-in text-center"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            🔊 Sube el volumen para disfrutarlo al máximo
          </div>

          <div
            className="font-nunito font-semibold text-white px-8 py-3 rounded-full animate-fade-in-up-delay-1"
            style={{ background: "rgba(255,255,255,0.22)", fontSize: "1rem" }}
          >
            Toca para comenzar
          </div>
        </div>
      )}

      {/* Floating music button */}
      {hasStarted && (
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          className="fixed bottom-6 right-5 z-40 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl transition-transform active:scale-90"
          style={{
            background: "linear-gradient(135deg, #be123c, #f43f5e)",
            color: "white",
          }}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      )}
    </>
  );
}
