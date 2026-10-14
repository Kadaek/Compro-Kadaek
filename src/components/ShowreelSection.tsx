"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  return (
    <section id="showreel" className="w-full py-28 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8 pb-4 border-b border-[#101C2C]/10 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#526D9B] uppercase tracking-[0.2em] font-semibold">
            [ 01 — SHOWREEL ]
          </span>
          <span className="text-sm font-heading font-bold tracking-tight text-[#101C2C]">
            Kadaek Engineering Reel &apos;26
          </span>
        </div>
        <div className="text-xs font-mono text-[#526D9B] uppercase tracking-wider">
          Runtime: 01:24 • Digital Architecture
        </div>
      </div>

      {/* Video Container */}
      <div className="relative rounded-2xl overflow-hidden bg-[#101C2C] border border-[#101C2C]/10 aspect-video group shadow-xl">
        <video
          ref={videoRef}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
          loop
          muted={isMuted}
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-changing-numbers-41551-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Dark Navy Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#101C2C]/80 via-transparent to-[#101C2C]/30 opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Big Center Play Button (when paused) */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/95 text-[#101C2C] flex items-center justify-center hover:scale-105 hover:bg-[#101C2C] hover:text-white transition-all duration-300 shadow-2xl z-10"
            aria-label="Play Showreel"
          >
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </button>
        )}

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-3 bg-gradient-to-t from-[#101C2C]/95 via-[#101C2C]/60 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity">
          {/* Scrubber Progress Bar */}
          <div
            className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
            onClick={(e) => {
              if (!videoRef.current) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
            }}
          >
            <div
              className="h-full bg-[#526D9B] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-white">
            <div className="flex items-center gap-5">
              <button
                onClick={togglePlay}
                className="hover:text-[#526D9B] transition-colors flex items-center gap-1.5 font-semibold"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                className="hover:text-[#526D9B] transition-colors flex items-center gap-1.5 font-medium"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span>{isMuted ? "MUTED" : "AUDIO"}</span>
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-white/50 uppercase tracking-widest text-[10px]">
                Interactive Video Showcase
              </span>
              <button
                onClick={handleFullscreen}
                className="hover:text-[#526D9B] transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
