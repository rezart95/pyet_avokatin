import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="border-t border-border bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-sm p-4">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Shkruani pyetjen tuaj për Kushtetutën e Shqipërisë..."
          disabled={disabled}
          className={cn(
            "flex-1 input-constitutional",
            "placeholder:text-muted-foreground/70"
          )}
        />
        <Button 
          type="submit" 
          disabled={!message.trim() || disabled}
          className={cn(
            "bg-gradient-patriotic hover:shadow-patriotic",
            "hover-patriotic transition-all duration-300"
          )}
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Përpunohet nga inteligjenca artificiale • Verifikoni informacionin me burime zyrtare
      </p>
    </div>
  );
};
