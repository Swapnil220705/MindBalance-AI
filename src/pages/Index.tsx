import Navigation from "@/components/Navigation";
import StatCard from "@/components/StatCard";
import MoodTrendChart from "@/components/MoodTrendChart";
import EmotionalWheel from "@/components/EmotionalWheel";
import AIInsightCard from "@/components/AIInsightCard";
import StimuliCard from "@/components/StimuliCard";
import CrisisIndicator from "@/components/CrisisIndicator";
import { Smile, Activity, Moon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
            Good morning, <span className="text-primary">Aarav</span> 👋
          </h1>
          <p className="text-foreground/60 text-lg">
            Here's your mental wellness snapshot for today
          </p>
        </div>

        {/* Emotional Health Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Emotional Health Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Mood Index"
              value="7.8"
              subtitle="Current Mental Well-being"
              icon={Smile}
              trend="up"
              trendValue="5% vs yesterday"
              variant="calm"
            />
            <StatCard
              title="Stress Level"
              value="Moderate"
              subtitle="24h Stress Trend"
              icon={Activity}
              trend="neutral"
              variant="anxious"
            />
            <StatCard
              title="Sleep Quality"
              value="82%"
              subtitle="Based on wearable data"
              icon={Moon}
              trend="up"
              trendValue="8% improvement"
              variant="energized"
            />
          </div>
        </section>

        {/* Mood Trends & Emotional Wheel */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MoodTrendChart />
            <EmotionalWheel />
          </div>
        </section>

        {/* AI Insights */}
        <section className="mb-8">
          <AIInsightCard />
        </section>

        {/* Daily Stimuli Feed */}
        <section className="mb-8">
          <StimuliCard />
        </section>

        {/* Crisis Indicators */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 tracking-tight">Wellness Check</h2>
          <CrisisIndicator severity="medium" />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
          <p className="mb-2">
            <strong className="text-foreground">MindBalance AI</strong> — Your personal mental wellness companion
          </p>
          <p>Data encrypted end-to-end • HIPAA compliant • Privacy first</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
