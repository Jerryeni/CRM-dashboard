"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InventoryCheck() {
  return (
    <div className="space-y-2 bg-card rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-medium">
          Check if on-hand inventory will allow all sales orders to ship without delay
        </h3>
        <Button variant="ghost" size="icon">
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        When <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">any vendor</span> sends 
        an email with changes to <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">confirmed purchase orders</span>, 
        check if the resulting <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">on-hand inventory</span> will 
        allow <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">all sales orders</span> to{" "}
        <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">ship without delay</span>. If so,{" "}
        <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded">update the purchase order</span> to 
        reflect the change.
      </p>
    </div>
  );
}