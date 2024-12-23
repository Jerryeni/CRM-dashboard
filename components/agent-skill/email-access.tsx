"use client";

import { Mail } from "lucide-react";
import { EmailInput } from "./email-input";

export function EmailAccess() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Mail className="h-5 w-5 text-blue-600" />
        <h3 className="text-base font-medium">Enable email access</h3>
      </div>
      <p className="text-sm text-muted-foreground">
        Allow the agent to access email inboxes to read mail from known vendors
      </p>
      <EmailInput />
    </div>
  );
}