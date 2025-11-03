import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Heart } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, ReferenceLine } from "recharts";

const data = [
  { value: 7.2 },
  { value: 7.0 },
  { value: 6.8 },
  { value: 6.5 },
  { value: 5.2 }, // Sharp drop
  { value: 5.0 },
  { value: 4.8 }, // Anomaly zone
];

interface CrisisIndicatorProps {
  severity?: "none" | "low" | "medium" | "high";
}

const CrisisIndicator = ({ severity = "medium" }: CrisisIndicatorProps) => {
  if (severity === "none") {
    return (
      <Card className="glass-card p-6 border-l-4 border-l-secondary animate-fade-in">
        <div className="flex items-center gap-3">
          <Heart className="h-8 w-8 text-secondary" />
          <div>
            <h3 className="font-bold text-lg">All Systems Stable</h3>
            <p className="text-sm text-foreground/60">Your mental wellness indicators are healthy</p>
          </div>
        </div>
      </Card>
    );
  }

  const getSeverityConfig = () => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-status-error/10",
          border: "border-l-status-error",
          text: "text-status-error",
          icon: "text-status-error",
        };
      case "medium":
        return {
          bg: "bg-mood-anxious/10",
          border: "border-l-mood-anxious",
          text: "text-mood-anxious",
          icon: "text-mood-anxious",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-l-primary",
          text: "text-primary",
          icon: "text-primary",
        };
    }
  };

  const config = getSeverityConfig();

  return (
    <Card className={`glass-card p-6 border-l-4 ${config.border} ${config.bg} animate-fade-in`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-card ${config.icon}`}>
          <AlertTriangle className="h-8 w-8" />
        </div>
        
        <div className="flex-1">
          <h3 className={`font-bold text-lg mb-1 ${config.text}`}>
            Attention: Emotional Pattern Change Detected
          </h3>
          <p className="text-sm text-foreground/70 mb-4">
            We've detected a sharp emotional drop (&gt;30%) over the last 48 hours. This is unusual for your baseline.
          </p>

          {/* Mini Chart */}
          <div className="mb-4">
            <ResponsiveContainer width="100%" height={80}>
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(0 84% 60%)"
                  strokeWidth={2}
                  dot={false}
                />
                <ReferenceLine
                  y={6.0}
                  stroke="hsl(220 13% 91%)"
                  strokeDasharray="3 3"
                  label={{ value: "Baseline", position: "right", fill: "hsl(220 9% 46%)", fontSize: 12 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-foreground/60 mt-1">Last 7 days trend with anomaly highlighted</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-primary text-white shadow-glow">
              <Phone className="h-4 w-4 mr-2" />
              Contact Counselor
            </Button>
            <Button variant="outline">
              Open Self-Help Tools
            </Button>
          </div>

          <div className="mt-4 p-3 bg-card rounded-lg border border-border">
            <p className="text-xs text-foreground/70">
              <strong className={config.text}>Crisis Support Available 24/7:</strong> If you're experiencing a mental health emergency, call 988 (Suicide & Crisis Lifeline) or text "HELLO" to 741741 (Crisis Text Line).
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CrisisIndicator;
