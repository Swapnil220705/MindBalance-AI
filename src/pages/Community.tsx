import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, MessageCircle, Calendar, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const communityPosts = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "SM",
    emotion: "anxious",
    message: "Feeling anxious about work presentation tomorrow",
    responses: 12,
    hearts: 24,
    time: "2h ago",
  },
  {
    id: 2,
    author: "James K.",
    avatar: "JK",
    emotion: "calm",
    message: "5 days streak of meditation! Feeling more centered",
    responses: 8,
    hearts: 45,
    time: "4h ago",
  },
  {
    id: 3,
    author: "Nina P.",
    avatar: "NP",
    emotion: "energized",
    message: "Just finished a great therapy session. Progress feels real!",
    responses: 15,
    hearts: 67,
    time: "6h ago",
  },
];

const counselors = [
  {
    name: "Dr. Meera Patel",
    specialty: "Anxiety & Stress",
    available: true,
    rating: 4.9,
  },
  {
    name: "Dr. James Wilson",
    specialty: "Depression & Mood",
    available: false,
    rating: 4.8,
  },
  {
    name: "Dr. Sarah Chen",
    specialty: "Cognitive Behavioral",
    available: true,
    rating: 4.9,
  },
];

const Community = () => {
  const getEmotionBadge = (emotion: string) => {
    const badges = {
      anxious: "bg-mood-anxious text-white",
      calm: "bg-mood-calm text-secondary",
      energized: "bg-mood-energized text-white",
    };
    return badges[emotion as keyof typeof badges] || "bg-mood-neutral";
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 tracking-tight flex items-center gap-3">
            <Users className="h-10 w-10 text-primary" />
            Community & <span className="text-primary">Support</span>
          </h1>
          <p className="text-foreground/60 text-lg">
            Connect, share, and support each other on your wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wellness Feed */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="glass-card p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Wellness Feed</h3>
                <Button className="bg-gradient-primary text-white">
                  Share Progress
                </Button>
              </div>

              <div className="space-y-4">
                {communityPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-all"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {post.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{post.author}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getEmotionBadge(post.emotion)}`}>
                            {post.emotion}
                          </span>
                          <span className="text-xs text-foreground/50 ml-auto">{post.time}</span>
                        </div>
                        <p className="text-sm text-foreground/80 mb-3">{post.message}</p>
                        <div className="flex items-center gap-4 text-sm text-foreground/60">
                          <button className="flex items-center gap-1 hover:text-status-error transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{post.hearts}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-primary transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.responses}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground/70">
                  <strong className="text-primary">Community Guidelines:</strong> All posts are AI-moderated for safety. Be kind, supportive, and respectful.
                </p>
              </div>
            </Card>
          </div>

          {/* Counselor Connect */}
          <div className="space-y-4">
            <Card className="glass-card p-6 animate-fade-in">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Video className="h-6 w-6 text-secondary" />
                Counselor Connect
              </h3>

              <div className="space-y-3 mb-6">
                {counselors.map((counselor, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-border bg-card"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{counselor.name}</h4>
                        <p className="text-xs text-foreground/60">{counselor.specialty}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold data-text">{counselor.rating}</span>
                        <span className="text-xs text-foreground/60">⭐</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        counselor.available 
                          ? "bg-secondary/20 text-secondary" 
                          : "bg-foreground/10 text-foreground/60"
                      }`}>
                        {counselor.available ? "Available now" : "Offline"}
                      </span>
                      <Button 
                        size="sm" 
                        variant={counselor.available ? "default" : "outline"}
                        className={counselor.available ? "bg-gradient-primary text-white h-7" : "h-7"}
                      >
                        {counselor.available ? "Start Chat" : "Book"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-secondary text-white">
                <Calendar className="h-4 w-4 mr-2" />
                View All Counselors
              </Button>
            </Card>

            {/* Support Resources */}
            <Card className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Crisis Support</h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-status-error/10 rounded-lg border border-status-error/30">
                  <p className="font-semibold text-status-error mb-1">Emergency</p>
                  <p className="text-foreground/70">Call 988 - Suicide & Crisis Lifeline</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                  <p className="font-semibold text-primary mb-1">Crisis Text Line</p>
                  <p className="text-foreground/70">Text "HELLO" to 741741</p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/30">
                  <p className="font-semibold text-secondary mb-1">24/7 Support</p>
                  <p className="text-foreground/70">Access self-help resources anytime</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
