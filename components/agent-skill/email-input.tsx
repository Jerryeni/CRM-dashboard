"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function EmailInput() {
  const [email, setEmail] = useState("purchasing@contoso.com");

  return (
    <div className="flex gap-2 items-start">
      <div className="flex-1 relative">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-8 pr-8 h-10"
        />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 rounded bg-purple-100 flex items-center justify-center">
          <span className="text-xs font-medium text-purple-600">P</span>
        </div>
        {email && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 p-0"
            onClick={() => setEmail("")}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700">
        Allow access
      </Button>
    </div>
  );
}