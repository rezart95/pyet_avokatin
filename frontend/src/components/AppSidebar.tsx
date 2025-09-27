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
    <Sidebar className="border-r border-primary/20" collapsible="offcanvas">
      <SidebarHeader className="p-4 md:p-6 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <AlbanianEagle className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
          <div className="flex flex-col min-w-0">
            <h2 className="font-bold text-sm md:text-base text-primary truncate">Kushtetuta</h2>
            <p className="text-xs md:text-sm text-muted-foreground truncate">e Shqipërisë</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 md:px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold px-3 py-2 text-xs md:text-sm">
            Seksionet Kushtetuese
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    isActive={activeSection === item.id}
                    className="group/item w-full min-h-[3rem] md:min-h-[3.5rem] p-2 md:p-3 hover:bg-primary/10 hover:text-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground rounded-lg transition-all duration-200 text-left"
                    size="lg"
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col items-start gap-0.5 md:gap-1 min-w-0 flex-1">
                      <span className="font-medium text-xs md:text-sm leading-tight text-left w-full">
                        {item.title}
                      </span>
                      <span className="text-[10px] md:text-xs text-muted-foreground group-hover/item:text-primary/70 group-data-[active=true]/item:text-primary-foreground/70 leading-tight text-left w-full overflow-hidden text-ellipsis">
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

      <SidebarFooter className="p-4 border-t border-primary/20 mt-auto">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground px-2">
            <User className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">Profili i Përdoruesit</span>
          </div>
          
          {!showLogin ? (
            <Button
              onClick={() => setShowLogin(true)}
              variant="outline"
              size="sm"
              className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              <LogIn className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">Identifikohu</span>
            </Button>
          ) : (
            <div className="space-y-2">
              <p className="text-xs text-center text-muted-foreground leading-relaxed px-2">
                Për të aktivizuar funksionalitetin e identifikimit, duhet të lidhesh me Supabase
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
