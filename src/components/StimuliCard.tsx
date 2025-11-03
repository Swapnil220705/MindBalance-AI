import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, BookOpen, Wind, Lightbulb, Play } from "lucide-react";

interface Stimulus {
  id: string;
  title: string;
  duration: string;
  category: "calm" | "focus" | "energy" | "sleep";
  confidence: number;
  icon: "music" | "journal" | "breathing" | "reflection";
}

const stimuli: Stimulus[] = [
  {
    id: "1",
    title: "Uplifting Piano Tones",
    duration: "3 min",
    category: "calm",
    confidence: 87,
    icon: "music",
  },
  {
    id: "2",
    title: "Reflection: 3 Things You Controlled Well",
    duration: "5 min",
    category: "focus",
    confidence: 92,
    icon: "reflection",
  },
  {
    id: "3",
    title: "Guided Breathing: 4-7-8 Pattern",
    duration: "4 min",
    category: "calm",
    confidence: 95,
    icon: "breathing",
  },
  {
    id: "4",
    title: "Gratitude Journaling",
    duration: "10 min",
    category: "energy",
    confidence: 78,
    icon: "journal",
  },
];

const StimuliCard = () => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "music":
        return <Music className="h-5 w-5" />;
      case "journal":
        return <BookOpen className="h-5 w-5" />;
      case "breathing":
        return <Wind className="h-5 w-5" />;
      case "reflection":
        return <Lightbulb className="h-5 w-5" />;
      default:
        return <Play className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "calm":
        return "bg-mood-calm text-secondary";
      case "focus":
        return "bg-mood-energized text-white";
      case "energy":
        return "bg-mood-anxious text-white";
      case "sleep":
        return "bg-primary/20 text-primary";
      default:
        return "bg-accent/20 text-accent";
    }
  };

  return (
    <Card className="glass-card p-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1">Daily Stimuli Feed</h3>
        <p className="text-sm text-foreground/60">AI-curated activities for your mental wellness</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stimuli.map((stimulus, index) => (
          <div
            key={stimulus.id}
            className="p-4 rounded-lg border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className={`p-3 rounded-lg ${getCategoryColor(stimulus.category)}`}>
                {getIcon(stimulus.icon)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {stimulus.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-foreground/60 mb-3">
                  <span>{stimulus.duration}</span>
                  <span>•</span>
                  <span className="capitalize">{stimulus.category}</span>
                  <span>•</span>
                  <span className="data-text">{stimulus.confidence}% match</span>
                </div>
                <Button size="sm" className="w-full bg-gradient-primary text-white h-8">
                  <Play className="h-3 w-3 mr-2" />
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-foreground/60">
          <span className="font-semibold text-primary">4 activities</span> tailored for you today
        </p>
        <Button variant="ghost" size="sm">
          View All →
        </Button>
      </div>
    </Card>
  );
};

export default StimuliCard;
