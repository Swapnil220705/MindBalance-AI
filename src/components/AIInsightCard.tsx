import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, AlertCircle } from "lucide-react";

interface Insight {
  text: string;
  priority: "high" | "medium" | "low";
  type: "recommendation" | "pattern" | "alert";
}

const insights: Insight[] = [
  {
    text: "Based on recent patterns, try a 10-minute guided breathing session.",
    priority: "high",
    type: "recommendation",
  },
  {
    text: "Detected rising stress in evenings — reduce caffeine after 5 PM.",
    priority: "medium",
    type: "pattern",
  },
  {
    text: "Mood dips every Wednesday — schedule light physical activity.",
    priority: "medium",
    type: "pattern",
  },
];

const AIInsightCard = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-status-error/10 text-status-error border-status-error/30";
      case "medium":
        return "bg-mood-anxious/10 text-mood-anxious border-mood-anxious/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "recommendation":
        return <Sparkles className="h-4 w-4" />;
      case "pattern":
        return <TrendingUp className="h-4 w-4" />;
      case "alert":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Sparkles className="h-4 w-4" />;
    }
  };

  return (
    <Card className="glass-card p-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Insights & Recommendations
        </h3>
        <p className="text-sm text-foreground/60">Personalized suggestions based on your patterns</p>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border bg-card hover:shadow-md transition-all"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getIcon(insight.type)}</div>
              <div className="flex-1">
                <p className="text-sm text-foreground/80 mb-3">{insight.text}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded-full border uppercase tracking-wide font-medium ${getPriorityColor(insight.priority)}`}>
                    {insight.priority} Priority
                  </span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default" className="bg-gradient-primary text-white text-xs h-7">
                      Try Now
                    </Button>
                    <Button size="sm" variant="ghost" className="text-xs h-7">
                      Learn Why
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-calm rounded-lg">
        <p className="text-sm font-medium text-white">
          💡 <strong>Tip:</strong> Acting on AI insights within 24 hours increases effectiveness by 40%
        </p>
      </div>
    </Card>
  );
};

export default AIInsightCard;
