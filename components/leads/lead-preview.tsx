"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Lead } from "./types";

interface LeadPreviewProps {
  lead: Lead;
  children: React.ReactNode;
}

export function LeadPreview({ lead, children }: LeadPreviewProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <div className="flex justify-between">
            <h4 className="text-sm font-semibold">{lead.name}</h4>
            <span className="text-sm text-muted-foreground">{lead.dealValue}</span>
          </div>
          <p className="text-sm text-muted-foreground">{lead.title} • {lead.company}</p>
          <div className="flex gap-2 text-xs">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
              {lead.decisionMaker ? 'Decision Maker' : 'Influencer'}
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
              {lead.intent} Intent
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}