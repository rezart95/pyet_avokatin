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
