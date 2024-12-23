"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mb-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div>
            <Input 
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Sort, filter and search with Copilot"
              className="pl-10 w-[300px] bg-white border-muted"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          Search leads by name, topic, or company
        </TooltipContent>
      </Tooltip>
    </div>
  );
}