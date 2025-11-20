export default function AnimatedLogo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Outer pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-neon-cyan/30 animate-pulse"></div>

        {/* Middle rotating ring */}
        <div className="absolute inset-4 rounded-full border border-neon-blue/40" style={{
          animation: "spin 4s linear infinite",
          borderTop: "2px solid var(--color-neon-cyan)"
        }}></div>

        {/* Inner core with gradient glow */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-blue/20 blur-sm" style={{
          animation: "glow-pulse 2s ease-in-out infinite"
        }}></div>

        {/* Animated orbiting data points */}
        <div className="absolute w-32 h-32">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-neon-cyan"
              style={{
                animation: `orbit 8s linear infinite`,
                animationDelay: `${i * 2}s`,
                transformOrigin: "64px 64px",
              }}
            />
          ))}
        </div>

        {/* Center badge with tagline */}
        <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan/40 to-purple-500/30 border border-neon-cyan/60 flex items-center justify-center backdrop-blur-sm p-4">
          <span className="text-xs font-semibold text-neon-cyan text-center leading-tight">From raw data to real-world decisions</span>
        </div>

        <style>{`
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(48px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(48px) rotate(-360deg);
            }
          }
        `}</style>
      </div>

    </div>
  );
}
