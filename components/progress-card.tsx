"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function ProgressCard() {
  return (
    <Card className="p-6 mb-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-sm">👋</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Hi Mona, 68% of goal achieved and rest can be achieved by focusing on 20 top leads.
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Target: $45 million</div>
          <div className="text-sm font-medium">68% of target achieved</div>
        </div>
      </div>
      <Progress value={68} className="h-2" />
    </Card>
  );
}