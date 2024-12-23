"use client";

import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface AgentSkillLinkProps {
  onOpen: () => void;
}

export function AgentSkillLink({ onOpen }: AgentSkillLinkProps) {
  const pathname = usePathname();
  
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start",
        pathname === "/agent-skill" ? "bg-accent" : "transparent"
      )}
      onClick={onOpen}
    >
      <Brain className="mr-2 h-4 w-4" />
      <span>Agent Skill</span>
    </Button>
  );
}