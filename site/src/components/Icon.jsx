import {
  Lightbulb,
  Clock,
  Wrench,
  ShieldCheck,
  Fuel,
  MoveVertical,
  KeyRound,
  AlertTriangle,
  Cpu,
  Car,
  Calendar,
  Sparkles,
  ShoppingCart,
  BookOpen,
  BadgeCheck,
  Lock,
  Radio,
  MessageCircle,
  Mail,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

function InstagramIcon({ className, strokeWidth }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const map = {
  headlight: Lightbulb,
  clock: Clock,
  tools: Wrench,
  shield: ShieldCheck,
  fuel: Fuel,
  suspension: MoveVertical,
  key: KeyRound,
  alert: AlertTriangle,
  cpu: Cpu,
  car: Car,
  calendar: Calendar,
  spark: Sparkles,
  cart: ShoppingCart,
  book: BookOpen,
  badge: BadgeCheck,
  lock: Lock,
  radio: Radio,
  instagram: InstagramIcon,
  whatsapp: MessageCircle,
  mail: Mail,
  chevronDown: ChevronDown,
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  externalLink: ExternalLink,
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.75 }) {
  const Cmp = map[name] || Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
