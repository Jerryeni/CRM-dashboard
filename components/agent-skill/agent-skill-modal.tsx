"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronUp } from "lucide-react";
import { EmailAccess } from "./email-access";
import { InventoryCheck } from "./inventory-check";

interface AgentSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AgentSkillModal({ isOpen, onClose }: AgentSkillModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-6 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <img src="/copilot-icon.png" alt="Copilot" className="w-full h-full" />
          </div>
          <h2 className="text-lg font-semibold">Agent skill</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <InventoryCheck />
        <EmailAccess />

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="secondary">Activate</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}