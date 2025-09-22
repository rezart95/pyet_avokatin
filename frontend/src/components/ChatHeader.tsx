import { AlbanianEagle } from "./AlbanianEagle";

export const ChatHeader = () => {
  return (
    <div className="flex items-center justify-center py-6 px-4 border-b border-border bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-sm">
      <div className="flex items-center space-x-4">
        <AlbanianEagle className="w-12 h-12" animate />
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Kushtetuta e Shqipërisë
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Asistenti juaj për pyetje kushtetuese
          </p>
        </div>
        <AlbanianEagle className="w-12 h-12" animate />
      </div>
    </div>
  );
};
