import { AlbanianEagle } from "./AlbanianEagle";
import { Button } from "@/components/ui/button";

interface WelcomeMessageProps {
  onQuestionSelect: (question: string) => void;
}

export const WelcomeMessage = ({ onQuestionSelect }: WelcomeMessageProps) => {
  const sampleQuestions = [
    "Cilat janë të drejtat themelore të njeriut sipas Kushtetutës?",
    "Si funksionon sistemi i drejtësisë në Shqipëri?",
    "Cilat janë detyrat e Presidentit të Republikës?",
    "Si zgjedhet Kryeministri dhe Këshilli i Ministrave?",
  ];

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <AlbanianEagle className="w-20 h-20 mx-auto mb-6" animate />
        
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Mirë se vini në Asistentin Kushtetues
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Unë jam këtu për t'ju ndihmuar me pyetjet tuaja rreth Kushtetutës së Republikës së Shqipërisë. 
          Mund të pyesni për të drejtat, detyrat, institucionet dhe proceset kushtetuese.
        </p>

        <div className="grid gap-3 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Pyetje të shpeshta:
          </h3>
          {sampleQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              className="text-left justify-start hover-patriotic p-4 h-auto"
              onClick={() => onQuestionSelect(question)}
            >
              <span className="text-sm leading-relaxed">{question}</span>
            </Button>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="mb-2">🇦🇱 <strong>Kushtetuta e Republikës së Shqipërisë</strong></p>
          <p>Miratuar më 28 nëntor 1998</p>
        </div>
      </div>
    </div>
  );
};
