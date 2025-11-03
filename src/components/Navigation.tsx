import { Link, useLocation } from "react-router-dom";
import { Brain, LayoutDashboard, TrendingUp, Sparkles, Users, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/insights", label: "Insights", icon: TrendingUp },
    { to: "/stimuli", label: "Stimuli", icon: Sparkles },
    { to: "/community", label: "Community", icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Brain className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:bg-primary/30 transition-all" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              MindBalance <span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    isActive(link.to)
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary text-white shadow-glow hover:opacity-90">
              Daily Check-In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                    isActive(link.to)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:bg-accent/50"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
            <Button className="w-full bg-gradient-primary text-white shadow-glow mt-4">
              Daily Check-In
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
