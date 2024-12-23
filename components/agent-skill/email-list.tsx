"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EmailList() {
  const [emailInput, setEmailInput] = useState("purchasing@contoso.com");

  const handleEmailChange = (value: string) => {
    setEmailInput(value);
  };

  const handleAllowAccess = () => {
    const emails = emailInput
      .split(",")
      .map(email => email.trim())
      .filter(email => email.length > 0);
    // Handle allowing access for all emails
    console.log("Allowing access for:", emails);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input 
          type="text"
          value={emailInput}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="Enter email addresses, separated by commas"
          className="pl-8"
        />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded bg-purple-100 flex items-center justify-center">
          <span className="text-xs text-purple-600">P</span>
        </div>
      </div>
      <Button 
        className="bg-blue-600 hover:bg-blue-700 w-full"
        onClick={handleAllowAccess}
      >
        Allow access
      </Button>
    </div>
  );
}