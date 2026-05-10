"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = async () => {
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
            background:
              "linear-gradient(135deg, #9f1239 0%, #be123c 30%, #e11d48 60%, #fb7185 100%)",
          }}
        >
          {/* Animated ring */}
          <div className="relative flex items-center justify-center mb-8">
            <div
              className="absolute w-32 h-32 rounded-full bg-white/20 animate-ripple"
            />
            <div
              className="absolute w-32 h-32 rounded-full bg-white/10 animate-ripple"
              style={{ animationDelay: "0.9s" }}
            />
            <div className="relative w-24 h-24 rounded-full bg-white/25 flex items-center justify-center backdrop-blur-sm">
              <span className="text-5xl animate-float-heart">💐</span>
            </div>
          </div>

          <p
            className="font-dancing text-white text-4xl mb-3 animate-fade-in"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            Para ti, Mamá Evelyn
          </p>
          <p className="font-nunito text-white/80 text-base mb-10 animate-fade-in">
            Toca para comenzar
          </p>

          <div className="flex flex-col items-center gap-2 animate-fade-in-up-delay-1">
            <div className="w-px h-8 bg-white/40" />
            <span className="text-white/60 text-sm font-nunito">❤️ Día de las Madres ❤️</span>
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
