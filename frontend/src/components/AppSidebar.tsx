import { Crown, Scale, Users, BookOpen, User, LogIn } from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AlbanianEagle } from "./AlbanianEagle";
import { Button } from "@/components/ui/button";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  {
    title: "Kushtetuta Përgjithshme",
    icon: BookOpen,
    id: "general",
    description: "Pyetje të përgjithshme kushtetuese"
  },
  {
    title: "Presidenti i Republikës",
    icon: Crown,
    id: "president",
    description: "Rolet dhe përgjegjësitë e Presidentit"
  },
  {
    title: "Të Drejtat Themelore",
    icon: Scale,
    id: "rights",
    description: "Të drejtat e njeriut dhe liritë themelore"
  },
  {
    title: "Pushteti Legjislativ",
    icon: Users,
    id: "legislative",
    description: "Kuvendi dhe procesi ligjvënës"
  }
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Sidebar className="border-r border-primary/20">
      <SidebarHeader className="p-4 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <AlbanianEagle className="w-8 h-8" />
          <div className="flex flex-col">
            <h2 className="font-bold text-sm text-primary">Kushtetuta</h2>
            <p className="text-xs text-muted-foreground">e Shqipërisë</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            Seksionet Kushtetuese
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    className="group w-full hover:bg-primary/10 hover:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    <item.icon className="w-4 h-4" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-primary/70 group-data-[active=true]:text-primary-foreground/70">
                        {item.description}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-primary/20">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>Profili i Përdoruesit</span>
          </div>
          
          {!showLogin ? (
            <Button
              onClick={() => setShowLogin(true)}
              variant="outline"
              size="sm"
              className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Identifikohu
            </Button>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-center text-muted-foreground">
                Për të aktivizuar funksionalitetin e identifikimit, duhet të lidhesh me Supabase
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
