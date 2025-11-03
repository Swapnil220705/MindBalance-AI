import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  variant?: "calm" | "anxious" | "depressed" | "energized" | "neutral";
  className?: string;
}

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  variant = "neutral",
  className = "",
}: StatCardProps) => {
  const getBorderColor = () => {
    switch (variant) {
      case "calm":
        return "border-l-4 border-l-mood-calm";
      case "anxious":
        return "border-l-4 border-l-mood-anxious";
      case "depressed":
        return "border-l-4 border-l-mood-depressed";
      case "energized":
        return "border-l-4 border-l-mood-energized";
      default:
        return "border-l-4 border-l-primary";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "calm":
        return "text-secondary";
      case "anxious":
        return "text-mood-anxious";
      case "depressed":
        return "text-mood-depressed";
      case "energized":
        return "text-mood-energized";
      default:
        return "text-primary";
    }
  };

  const getTrendColor = () => {
    if (trend === "up") return "text-status-success";
    if (trend === "down") return "text-status-error";
    return "text-foreground/60";
  };

  return (
    <Card className={`glass-card p-6 hover:shadow-lg transition-all animate-fade-in ${getBorderColor()} ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="label-text text-foreground/65 mb-2">{title}</p>
          <div className="flex items-baseline gap-2 mb-1">
            <h3 className="text-4xl font-bold data-text animate-counter">{value}</h3>
            {trendValue && (
              <span className={`text-sm font-medium ${getTrendColor()}`}>
                {trend === "up" && "↑"} {trend === "down" && "↓"} {trendValue}
              </span>
            )}
          </div>
          {subtitle && <p className="text-sm text-foreground/60 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg bg-accent/10 ${getIconColor()}`}>
          <Icon className="h-8 w-8" />
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
