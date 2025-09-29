import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { ScrollArea } from "@/components/ui/scroll-area";
import President from "./President";
import Rights from "./Rights";
import Legislative from "./Legislative";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("general");

  const simulateResponse = (userMessage: string): string => {
    // Simulate constitutional responses based on keywords
    const message = userMessage.toLowerCase();
    
    if (message.includes("drejtë") || message.includes("të drejta")) {
      return "Kushtetuta e Shqipërisë garanton të drejtat themelore të njeriut në Kapitullin II. Këto përfshijnë të drejtën për jetë, lirinë personale, barazinë para ligjit, të drejtën e pronësisë, lirinë e fjalës dhe shprehjes, të drejtën për arsim, dhe shumë të drejta të tjera. Çdo person gëzon këto të drejta pa dallim race, feje, gjinie apo origjine sociale.";
    }
    
    if (message.includes("president") || message.includes("kryetar")) {
      return "Presidenti i Republikës së Shqipërisë zgjidhet nga Kuvendi për një mandat 5-vjeçar. Ai është shef i shtetit dhe përfaqëson unitetin e popullit shqiptar. Presidenti ka kompetenca të rëndësishme si emërimi i Kryeministrit, nënshkrimi i ligjeve, dhe udhëheqja e Këshillit të Sigurisë Kombëtare.";
    }
    
    if (message.includes("kryeministër") || message.includes("këshilli")) {
      return "Kryeministri emërohet nga Presidenti dhe miratohet nga Kuvendi. Ai drejton punën e Këshillit të Ministrave dhe është përgjegjës për zbatimin e politikave të qeverisë. Këshilli i Ministrave është organi më i lartë ekzekutiv i vendit dhe harton politikat e brendshme dhe të jashtme.";
    }

    if (message.includes("drejtësi") || message.includes("gjykata")) {
      return "Sistemi i drejtësisë në Shqipëri organizohet në tri nivele: gjykatat e shkallës së parë, gjykatat e apelit dhe Gjykata e Lartë. Gjykata Kushtetuese është organi më i lartë gjyqësor për çështjet kushtetuese. Gjyqtarët janë të pavarur dhe nënshtrohen vetëm Kushtetutës dhe ligjeve.";
    }

    // Default response
    return "Faleminderit për pyetjen tuaj. Kjo është një pyetje interesante rreth Kushtetutës së Shqipërisë. Për informacion më të detajuar dhe të saktë, ju rekomandoj të konsultoni tekstin e plotë të Kushtetutës së Republikës së Shqipërisë. A mund të specifikoni më shumë pyetjen tuaj?";
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

    // Simulate API delay
    setTimeout(() => {
      const response = simulateResponse(messageText);
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

  const renderContent = () => {
    switch (activeSection) {
      case "president":
        return <President />;
      case "rights":
        return <Rights />;
      case "legislative":
        return <Legislative />;
      default:
        return (
          <div className="flex flex-col h-screen bg-gradient-subtle">
            <div className="flex items-center justify-between border-b border-primary/20 p-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-xl font-bold text-primary">Kushtetuta e Shqipërisë</h1>
                  <p className="text-sm text-muted-foreground">Chatbot Kushtetues</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col overflow-hidden">
              {messages.length === 0 ? (
                <WelcomeMessage onQuestionSelect={handleSendMessage} />
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
    }
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <SidebarInset className="flex-1 overflow-hidden">
          {renderContent()}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
