import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Crown, Calendar, FileText, Shield } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const President = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const presidentInfo = {
    title: "Presidenti i Republikës së Shqipërisë",
    mandate: "5 vjet",
    election: "Zgjidhet nga Kuvendi me shumicë 3/5 të anëtarëve",
    mainDuties: [
      "Përfaqëson unitetin e popullit shqiptar",
      "Emëron Kryeministrin",
      "Nënshkruan dhe promulgon ligjet",
      "Udhëheq Këshillin e Sigurisë Kombëtare"
    ]
  };

  const simulatePresidentResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("emërim") || message.includes("kryeministër")) {
      return "Presidenti emëron Kryeministrin pas konsultimeve me forcat politike që kanë fituar të drejtën të formojnë shumicën parlamentare. Kryeministri i propozuar duhet të marrë votëbesimin e Kuvendit brenda 60 ditëve.";
    }
    
    if (message.includes("zgjidh") || message.includes("mandat")) {
      return "Presidenti zgjidhet nga Kuvendi për një mandat 5-vjeçar me të drejtë rizgjedhje vetëm një herë. Për t'u zgjedhur, kandidati duhet të marrë 3/5 e votave të të gjithë anëtarëve të Kuvendit në tre raundet e para, ose shumicën absolute në raundin e katërt dhe të pestë.";
    }

    if (message.includes("kompetenca") || message.includes("përgjegjësi")) {
      return "Presidenti ka kompetenca të rëndësishme kushtetuese: emëron dhe shkarkon Kryeministrin, nënshkruan dekretet, promulgon ligjet, emëron ambasadorë, jep dekorata dhe tituj nderi, ushtron të drejtën e faljes, dhe udhëheq Këshillin e Sigurisë Kombëtare.";
    }

    return "Presidenti i Republikës së Shqipërisë është shef i shtetit dhe përfaqëson unitetin e popullit shqiptar. Ai ka një rol të rëndësishëm në sistemin kushtetues të vendit. A dëshironi të dini më shumë për ndonjë aspekt specifik të institucionit presidencial?";
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
      const response = simulatePresidentResponse(messageText);
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
                  <Crown className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">{presidentInfo.title}</h2>
                  <p className="text-muted-foreground">Kreu i Shtetit Shqiptar</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Mandati</p>
                    <p className="text-sm text-muted-foreground">{presidentInfo.mandate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Zgjedhja</p>
                    <p className="text-sm text-muted-foreground">Nga Kuvendi</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Detyrat Kryesore</h3>
                </div>
                <ul className="space-y-2">
                  {presidentInfo.mainDuties.map((duty, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <p className="text-center text-muted-foreground max-w-lg">
              Bëni një pyetje rreth institucionit të Presidentit të Republikës së Shqipërisë, 
              kompetencave të tij kushtetuese, ose procesit të zgjedhjes.
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

export default President;
