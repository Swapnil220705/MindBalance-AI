import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { day: "Mon", mood: 7.2, predicted: 7.0 },
  { day: "Tue", mood: 6.8, predicted: 7.1 },
  { day: "Wed", mood: 5.5, predicted: 6.5 },
  { day: "Thu", mood: 6.9, predicted: 6.8 },
  { day: "Fri", mood: 7.8, predicted: 7.5 },
  { day: "Sat", mood: 8.2, predicted: 8.0 },
  { day: "Sun", mood: 7.9, predicted: 7.8 },
];

const MoodTrendChart = () => {
  return (
    <Card className="glass-card p-6 animate-fade-in">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1">Mood & Behavior Trends</h3>
        <p className="text-sm text-foreground/60">Your emotional journey over the past week</p>
      </div>

      <div className="mb-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-foreground/70">Self-reported mood</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <span className="text-foreground/70">AI predicted trajectory</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(239 84% 67%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(239 84% 67%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91% / 0.3)" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(220 9% 46%)"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            domain={[0, 10]}
            stroke="hsl(220 9% 46%)"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(0 0% 100%)',
              border: '1px solid hsl(220 13% 91%)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="mood"
            stroke="hsl(239 84% 67%)"
            strokeWidth={3}
            fill="url(#moodGradient)"
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="hsl(158 64% 52%)"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: 'hsl(158 64% 52%)', r: 4 }}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 p-4 bg-accent/5 rounded-lg border border-border/50">
        <p className="text-sm text-foreground/70">
          <span className="font-semibold text-primary">AI Insight:</span> Your mood shows steady improvement with a notable dip on Wednesday. Consider scheduling lighter activities mid-week.
        </p>
      </div>
    </Card>
  );
};

export default MoodTrendChart;
