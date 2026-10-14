"use client";

import { useEffect, useRef, useState } from "react";
import { VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 1.2);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Warm ambient frequencies: subtle chord
      const freqs = [185.0, 277.18, 369.99, 554.37];
      const oscs: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        const filter = ctx.createBiquadFilter();

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(550, ctx.currentTime);

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        if (panner) {
          panner.pan.setValueAtTime((idx - 1.5) * 0.4, ctx.currentTime);
          osc.connect(filter);
          filter.connect(panner);
          panner.connect(masterGain);
        } else {
          osc.connect(filter);
          filter.connect(masterGain);
        }

        osc.start();
        oscs.push(osc);
      });

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const stopAudio = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        oscillatorsRef.current = [];
        if (audioCtxRef.current) {
          audioCtxRef.current.close();
          audioCtxRef.current = null;
        }
        setIsPlaying(false);
      }, 600);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#101C2C]/15 bg-[#E9EDF2] hover:bg-[#101C2C] hover:text-white text-xs font-mono tracking-wider text-[#101C2C] transition-all duration-300 active:scale-95 shadow-sm"
      aria-label="Toggle Sound"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#526D9B] rounded-full animate-bar-1" />
            <span className="w-0.5 bg-[#101C2C] rounded-full animate-bar-2" />
            <span className="w-0.5 bg-[#526D9B] rounded-full animate-bar-3" />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-semibold">SOUND ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-60" />
          <span className="text-[10px] uppercase tracking-widest opacity-70">SOUND OFF</span>
        </>
      )}
    </button>
  );
}
