import React from 'react';

interface Props {
  text?: string;
}

export const CinematicMarquee: React.FC<Props> = ({
  text = "SHASHANK VISHWAKARMA • ASSOCIATE SOFTWARE ENGINEER • FRONTEND DEVELOPER • GOOGLE ANTIGRAVITY AI WORKFLOWS • NEXT.JS 14 • THREE.JS 3D WEB"
}) => {
  return (
    <div className="w-full overflow-hidden bg-slate-950/80 border-y border-cyan-500/20 py-3 my-8 relative z-10 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="text-sm font-mono tracking-widest text-cyan-400 font-bold uppercase mx-4">
          {text}
        </span>
        <span className="text-sm font-mono tracking-widest text-purple-400 font-bold uppercase mx-4">
          {text}
        </span>
        <span className="text-sm font-mono tracking-widest text-emerald-400 font-bold uppercase mx-4">
          {text}
        </span>
        <span className="text-sm font-mono tracking-widest text-pink-400 font-bold uppercase mx-4">
          {text}
        </span>
      </div>
    </div>
  );
};
