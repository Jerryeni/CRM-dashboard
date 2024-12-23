"use client";

import { List, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ViewMode } from "./types";

interface ViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant={mode === 'list' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onChange('list')}
      >
        <List className="h-4 w-4 mr-2" />
        List
      </Button>
      <Button
        variant={mode === 'chart' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onChange('chart')}
      >
        <BarChart2 className="h-4 w-4 mr-2" />
        Chart
      </Button>
    </div>
  );
}