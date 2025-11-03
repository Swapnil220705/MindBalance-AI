import { Card } from "@/components/ui/card";

const emotions = [
  { name: "Joy", color: "hsl(158 73% 85%)", position: "top-0 left-1/2 -translate-x-1/2" },
  { name: "Trust", color: "hsl(211 96% 68%)", position: "top-1/4 right-0" },
  { name: "Fear", color: "hsl(43 96% 56%)", position: "bottom-1/4 right-0" },
  { name: "Surprise", color: "hsl(158 64% 52%)", position: "bottom-0 left-1/2 -translate-x-1/2" },
  { name: "Sadness", color: "hsl(0 84% 60%)", position: "bottom-1/4 left-0" },
  { name: "Disgust", color: "hsl(220 13% 91%)", position: "top-1/4 left-0" },
];

const EmotionalWheel = () => {
  return (
    <Card className="glass-card p-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1">Emotional State</h3>
        <p className="text-sm text-foreground/60">Your current emotional landscape</p>
      </div>

      <div className="relative aspect-square max-w-md mx-auto">
        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-calm flex items-center justify-center shadow-lg pulse-glow">
              <div className="text-center">
                <p className="text-4xl mb-1">😌</p>
                <p className="text-sm font-semibold text-white">Calm</p>
              </div>
            </div>
            <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md -z-10"></div>
          </div>
        </div>

        {/* Emotion Nodes */}
        {emotions.map((emotion, index) => (
          <div
            key={emotion.name}
            className={`absolute ${emotion.position} w-20 h-20 -translate-y-1/2 group cursor-pointer`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-sm font-medium transition-all hover:scale-110 hover:shadow-lg"
              style={{ backgroundColor: emotion.color }}
            >
              {emotion.name}
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="bg-card border border-border rounded-lg p-3 shadow-lg text-xs whitespace-nowrap">
                <p className="font-semibold mb-1">{emotion.name}</p>
                <p className="text-foreground/60">Click for details</p>
              </div>
            </div>
          </div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full -z-10" style={{ opacity: 0.1 }}>
          <circle cx="50%" cy="50%" r="45%" fill="none" stroke="hsl(239 84% 67%)" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="hsl(158 64% 52%)" strokeWidth="1" />
        </svg>
      </div>

      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm">
          <span className="font-semibold text-primary">AI Analysis:</span> Your mood today aligns with mild calmness (confidence: 78%). Emotional balance is stable.
        </p>
      </div>
    </Card>
  );
};

export default EmotionalWheel;
