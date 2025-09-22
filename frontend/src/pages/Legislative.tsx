import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Users, FileText, Gavel, Vote } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Legislative = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const legislativeInfo = {
    name: "Kuvendi i Shqipërisë",
    members: "140 deputetë",
    term: "4 vjet",
    functions: [
      "Miratimi i ligjeve",
      "Kontrolli i qeverisë",
      "Miratimi i buxhetit",
      "Zgjedhja e Presidentit"
    ]
  };

  const simulateLegislativeResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("deputet") || message.includes("anëtar")) {
      return "Kuvendi i Shqipërisë përbëhet nga 140 deputetë që zgjidhen për një mandat 4-vjeçar me votim të fshehtë, të drejtpërdrejtë dhe proporcional. Deputetët përfaqësojnë popullin dhe jo qarqet nga të cilat janë zgjedhur.";
    }
    
    if (message.includes("ligj") || message.includes("miratim")) {
      return "Kuvendi ka kompetencën ekskluzive për miratimin e ligjeve. Projekligjet mund të propozohen nga deputetët, qeveria, ose 20,000 qytetarë. Ligjet miratohen me shumicë absolute të anëtarëve të pranishëm, por jo më pak se 1/3 e të gjithë anëtarëve.";
    }

    if (message.includes("kontroll") || message.includes("qeveri")) {
      return "Kuvendi ushtron kontrollin parlamentar ndaj qeverisë përmes interpelancave, pyetjeve parlamentare, hetimeve parlamentare dhe mocionit të mosbesimit. Qeveria është e detyruar të raportojë rregullisht para Kuvendit.";
    }

    if (message.includes("buxhet") || message.includes("ekonomi")) {
      return "Kuvendi miraton buxhetin e shtetit, ligjet për tatimet dhe financat publike. Asnjë shpenzim publik nuk mund të bëhet pa miratimin e Kuvendit. Kontrollon gjithashtu borxhin publik dhe politikat ekonomike.";
    }

    if (message.includes("komisione") || message.includes("komitet")) {
      return "Kuvendi punon përmes komisioneve të përhershme dhe të përkohshme. Komisionet shqyrtojnë projektligjet, ushtrojnë kontrollin parlamentar dhe zhvillojnë aktivitete të specializuara në fushat përkatëse.";
    }

    return "Kuvendi i Shqipërisë është organi më i lartë ligjvënës i vendit dhe përfaqësues i popullit shqiptar. Ai ka kompetenca të rëndësishme kushtetuese në fushën ligjvënëse, kontrolluese dhe zgjedhore. A dëshironi të dini më shumë për ndonjë aspekt specifik të punës së Kuvendit?";
  };

  const handleSendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const response = simulateLegislativeResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-subtle">
      <ChatHeader />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {messages.length === 0 ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center space-y-6">
            <Card className="p-6 max-w-2xl w-full border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">{legislativeInfo.name}</h2>
                  <p className="text-muted-foreground">Pushteti Ligjvënës</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Vote className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Anëtarët</p>
                    <p className="text-sm text-muted-foreground">{legislativeInfo.members}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Mandati</p>
                    <p className="text-sm text-muted-foreground">{legislativeInfo.term}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Funksionet Kryesore</h3>
                </div>
                <ul className="space-y-2">
                  {legislativeInfo.functions.map((func, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 bg-primary/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-primary">Parimet e Punës</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transparenca dhe publikimi i seancave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Përfaqësimi proporcional i popullit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Bashkëpunimi me institucionet e tjera</span>
                  </li>
                </ul>
              </div>
            </Card>

            <p className="text-center text-muted-foreground max-w-lg">
              Bëni një pyetje rreth Kuvendit të Shqipërisë, procesit ligjvënës, 
              kontrollit parlamentar, ose funksioneve të tjera të pushtetit legjislativ.
            </p>
          </div>
        ) : (
          <ScrollArea className="flex-1 px-4 py-6">
            <div className="max-w-4xl mx-auto">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="bg-card border border-border rounded-lg rounded-bl-sm px-4 py-3 max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        )}
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default Legislative;
