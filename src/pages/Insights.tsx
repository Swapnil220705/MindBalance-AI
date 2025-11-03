import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, Target } from "lucide-react";

const correlationData = [
  { sleep: 7, screenTime: 2, stress: 3 },
  { sleep: 6, screenTime: 4, stress: 5 },
  { sleep: 8, screenTime: 1, stress: 2 },
  { sleep: 5, screenTime: 6, stress: 7 },
  { sleep: 7.5, screenTime: 2.5, stress: 3.5 },
  { sleep: 6.5, screenTime: 5, stress: 6 },
];

const triggerData = [
  { trigger: "Sleep Loss", impact: 38, color: "hsl(0 84% 60%)" },
  { trigger: "Overwork", impact: 32, color: "hsl(43 96% 56%)" },
  { trigger: "Loneliness", impact: 18, color: "hsl(239 84% 67%)" },
  { trigger: "Screen Time", impact: 8, color: "hsl(158 64% 52%)" },
  { trigger: "Diet", impact: 4, color: "hsl(220 13% 91%)" },
];

const improvementData = [
  { week: "W1", mood: 6.2, adherence: 45 },
  { week: "W2", mood: 6.8, adherence: 62 },
  { week: "W3", mood: 7.2, adherence: 78 },
  { week: "W4", mood: 7.8, adherence: 85 },
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
            Insights & <span className="text-primary">Analytics</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Deep dive into your behavioral patterns and correlations
          </p>
        </div>

        {/* Behavior Correlations */}
        <section className="mb-8">
          <Card className="glass-card p-6 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Behavior Correlations
              </h3>
              <p className="text-sm text-foreground/60">Understanding what impacts your mental state</p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91% / 0.3)" />
                <XAxis 
                  dataKey="sleep" 
                  name="Sleep Hours"
                  label={{ value: 'Sleep Hours', position: 'bottom', fill: 'hsl(220 9% 46%)' }}
                  stroke="hsl(220 9% 46%)"
                />
                <YAxis 
                  dataKey="stress" 
                  name="Stress Level"
                  label={{ value: 'Stress Level', angle: -90, position: 'left', fill: 'hsl(220 9% 46%)' }}
                  stroke="hsl(220 9% 46%)"
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'hsl(0 0% 100%)',
                    border: '1px solid hsl(220 13% 91%)',
                    borderRadius: '8px',
                  }}
                />
                <Scatter name="Correlation" data={correlationData} fill="hsl(239 84% 67%)" />
              </ScatterChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground/70">
                <span className="font-semibold text-primary">High correlation detected (r = 0.81):</span> Late-night screen use strongly correlates with increased anxiety levels the next day.
              </p>
            </div>
          </Card>
        </section>

        {/* Trigger Detection */}
        <section className="mb-8">
          <Card className="glass-card p-6 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1">Top Recurring Triggers</h3>
              <p className="text-sm text-foreground/60">What's affecting your mood the most</p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={triggerData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91% / 0.3)" />
                <XAxis type="number" stroke="hsl(220 9% 46%)" />
                <YAxis dataKey="trigger" type="category" stroke="hsl(220 9% 46%)" width={100} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(0 0% 100%)',
                    border: '1px solid hsl(220 13% 91%)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="impact" radius={[0, 8, 8, 0]}>
                  {triggerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-mood-anxious/10 rounded-lg border border-mood-anxious/30">
              <p className="text-sm">
                <span className="font-semibold text-mood-anxious">AI Insight:</span> Overwork contributes 38% of your mood dips. Consider setting stricter work-life boundaries.
              </p>
            </div>
          </Card>
        </section>

        {/* Improvement Over Time */}
        <section className="mb-8">
          <Card className="glass-card p-6 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                <Target className="h-6 w-6 text-secondary" />
                Improvement Tracking
              </h3>
              <p className="text-sm text-foreground/60">Your progress with interventions</p>
            </div>

            <div className="mb-4 p-4 bg-secondary/10 rounded-lg border border-secondary/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70 mb-1">Current Goal</p>
                  <p className="font-bold">Maintain score &gt;8 for 14 consecutive days</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold data-text text-secondary">9/14</p>
                  <p className="text-xs text-foreground/60">days completed</p>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={improvementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91% / 0.3)" />
                <XAxis dataKey="week" stroke="hsl(220 9% 46%)" />
                <YAxis stroke="hsl(220 9% 46%)" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(0 0% 100%)',
                    border: '1px solid hsl(220 13% 91%)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="mood" fill="hsl(239 84% 67%)" radius={[8, 8, 0, 0]} name="Mood Score" />
                <Bar dataKey="adherence" fill="hsl(158 64% 52%)" radius={[8, 8, 0, 0]} name="Adherence %" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Insights;
