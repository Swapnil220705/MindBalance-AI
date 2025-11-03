import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Music, Wind, BookOpen, Heart, Brain, Play } from "lucide-react";

const stimuliCategories = [
  {
    id: "breathing",
    title: "Breathing Exercises",
    description: "Guided breathing patterns to reduce stress and anxiety",
    icon: Wind,
    color: "bg-mood-calm",
    exercises: [
      { name: "4-7-8 Pattern", duration: "4 min", confidence: 95 },
      { name: "Box Breathing", duration: "5 min", confidence: 88 },
      { name: "Alternate Nostril", duration: "6 min", confidence: 82 },
    ],
  },
  {
    id: "music",
    title: "Sound Therapy",
    description: "Curated music and sounds for emotional regulation",
    icon: Music,
    color: "bg-mood-energized",
    exercises: [
      { name: "Uplifting Piano", duration: "3 min", confidence: 87 },
      { name: "Nature Sounds", duration: "10 min", confidence: 91 },
      { name: "Binaural Beats", duration: "15 min", confidence: 79 },
    ],
  },
  {
    id: "cognitive",
    title: "Cognitive Reframing",
    description: "Exercises to shift perspective and thought patterns",
    icon: Brain,
    color: "bg-primary/20",
    exercises: [
      { name: "Thought Challenge", duration: "8 min", confidence: 84 },
      { name: "Positive Affirmations", duration: "5 min", confidence: 77 },
      { name: "Mindful Observation", duration: "7 min", confidence: 89 },
    ],
  },
  {
    id: "journaling",
    title: "Gratitude Journaling",
    description: "Structured prompts for emotional processing",
    icon: BookOpen,
    color: "bg-secondary/20",
    exercises: [
      { name: "Daily Gratitude", duration: "10 min", confidence: 92 },
      { name: "Achievement Reflection", duration: "8 min", confidence: 85 },
      { name: "Future Self Letter", duration: "15 min", confidence: 81 },
    ],
  },
];

const Stimuli = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight flex items-center gap-3">
            <Sparkles className="h-10 w-10 text-primary" />
            AI-Powered <span className="text-primary">Stimuli</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Personalized mental health interventions tailored to your needs
          </p>
        </div>

        {/* Adaptive Personalization Info */}
        <section className="mb-8">
          <Card className="glass-card p-6 bg-gradient-calm text-white animate-fade-in">
            <div className="flex items-start gap-4">
              <Heart className="h-12 w-12 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Adaptive Personalization Engine</h3>
                <p className="mb-4 opacity-90">
                  Our AI uses Large Language Models combined with emotion recognition and reinforcement learning to continuously adapt stimuli to your unique needs and preferences.
                </p>
                <div className="flex gap-3 text-sm">
                  <div className="bg-white/20 px-3 py-1 rounded-full">LLM-Powered</div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">Real-time Adaptation</div>
                  <div className="bg-white/20 px-3 py-1 rounded-full">87% Effectiveness</div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Stimuli Categories */}
        <section className="space-y-6">
          {stimuliCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id} 
                className="glass-card p-6 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${category.color} text-white`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-foreground/60">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.exercises.map((exercise, exerciseIndex) => (
                    <div
                      key={exerciseIndex}
                      className="p-4 rounded-lg border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all group"
                    >
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {exercise.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-foreground/60 mb-3">
                        <span>{exercise.duration}</span>
                        <span>•</span>
                        <span className="data-text">{exercise.confidence}% match</span>
                      </div>
                      <Button size="sm" className="w-full bg-gradient-primary text-white">
                        <Play className="h-3 w-3 mr-2" />
                        Start Exercise
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </section>

        {/* Progress Tracking */}
        <section className="mt-8">
          <Card className="glass-card p-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Your Progress This Week</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <p className="text-3xl font-bold data-text text-primary mb-1">12</p>
                <p className="text-sm text-foreground/60">Exercises Completed</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <p className="text-3xl font-bold data-text text-secondary mb-1">68%</p>
                <p className="text-sm text-foreground/60">Adherence Rate</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <p className="text-3xl font-bold data-text text-mood-energized mb-1">42</p>
                <p className="text-sm text-foreground/60">Total Minutes</p>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <p className="text-3xl font-bold data-text text-mood-calm mb-1">5</p>
                <p className="text-sm text-foreground/60">Day Streak</p>
              </div>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Stimuli;
