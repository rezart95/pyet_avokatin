import { cn } from "@/lib/utils";
import albanianEagle from "@/assets/albanian-eagle.png";

interface AlbanianEagleProps {
  className?: string;
  animate?: boolean;
}

export const AlbanianEagle = ({ className, animate = false }: AlbanianEagleProps) => {
  return (
    <div className={cn(
      "flex items-center justify-center",
      animate && "animate-eagle-soar",
      className
    )}>
      <img 
        src={albanianEagle} 
        alt="Shqiponja dykrenare - Albanian Double-Headed Eagle"
        className="w-full h-full object-contain filter drop-shadow-lg"
      />
    </div>
  );
};
