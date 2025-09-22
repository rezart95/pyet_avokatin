import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Scale, Heart, Home, BookOpen, MessageCircle } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Rights = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fundamentalRights = [
    {
      icon: Heart,
      title: "E Drejta për Jetë",
      description: "E drejta themelore e garantuar nga Kushtetuta"
    },
    {
      icon: MessageCircle,
      title: "Liria e Shprehjes",
      description: "E drejta për të shprehur mendime dhe ide"
    },
    {
      icon: Home,
      title: "E Drejta e Pronësisë",
      description: "Mbrojtja kushtetuese e pronës private"
    },
    {
      icon: BookOpen,
      title: "E Drejta për Arsim",
      description: "Aksesi në arsimin cilësor për të gjithë"
    }
  ];

  const simulateRightsResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("jetë") || message.includes("vdekj")) {
      return "E drejta për jetë është e drejta më themelore e njeriut dhe është e garantuar nga neni 17 i Kushtetutës. Kjo e drejtë nuk mund të preket dhe shteti ka detyrimin të mbrojë jetën e çdo personi. Dënimi me vdekje është i ndaluar në Shqipëri.";
    }
    
    if (message.includes("shprehj") || message.includes("mendim") || message.includes("fjalë")) {
      return "Liria e shprehjes dhe e mendimit është e garantuar nga neni 22 i Kushtetutës. Kjo përfshin të drejtën për të shprehur, përhapur dhe mbrojtur mendimet, si dhe të drejtën për informim. Censura parapake është e ndaluar.";
    }

    if (message.includes("pronë") || message.includes("privat")) {
      return "E drejta e pronësisë është e garantuar nga neni 41 i Kushtetutës. Prona private dhe publike janë të mbrojtura njëlloj nga ligji. Shpronësimi është i mundur vetëm për interes publik dhe me kompensim të drejtë.";
    }

    if (message.includes("arsim") || message.includes("shkollë")) {
      return "E drejta për arsim është e garantuar nga neni 57 i Kushtetutës. Arsimi fillor është i detyrueshëm dhe falas. Shteti siguron kushte të barabarta për të gjithë në të gjitha nivelet e arsimit.";
    }

    if (message.includes("barazi") || message.includes("diskriminim")) {
      return "Barazia para ligjit është e garantuar nga neni 18 i Kushtetutës. Askush nuk mund të diskriminohet për shkak të gjinisë, racës, fesë, etnisë, gjuhës, bindjes politike, religjioze apo filozofike, gjendjes ekonomike, arsimore ose sociale.";
    }

    return "Të drejtat themelore të njeriut janë të garantuara nga Kapitulli II i Kushtetutës së Shqipërisë. Këto të drejta janë të pacenueshme dhe të pandalueshme. A dëshironi të dini më shumë për ndonjë të drejtë specifike?";
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
      const response = simulateRightsResponse(messageText);
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
            <Card className="p-6 max-w-4xl w-full border-primary/20 bg-gradient-to-br from-card to-card/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">Të Drejtat Themelore</h2>
                  <p className="text-muted-foreground">Kapitulli II i Kushtetutës së Shqipërisë</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {fundamentalRights.map((right, index) => (
                  <Card key={index} className="p-4 border-primary/10 hover:border-primary/30 transition-colors hover-patriotic">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <right.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{right.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{right.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-primary">Parimet Themelore</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Të drejtat themelore janë të pacenueshme dhe të pandalueshme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Barazinë para ligjit pa asnjë lloj diskriminimi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mbrojtja gjyqësore e të drejtave kushtetuese</span>
                  </li>
                </ul>
              </div>
            </Card>

            <p className="text-center text-muted-foreground max-w-lg">
              Bëni një pyetje rreth të drejtave themelore të njeriut, lirive kushtetuese, 
              ose parimeve të barazisë dhe mbrojtjes së të drejtave.
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

export default Rights;
