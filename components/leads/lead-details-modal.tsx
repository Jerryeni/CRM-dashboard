"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, X, ThumbsUp, ThumbsDown } from "lucide-react";

interface LeadDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lead: {
    id?: any;
    name: string;
    title: string;
    company: string;
    description: string;
    topic: string;
    status: string;
    createdOn: string;
    decisionMaker: boolean;
    intent: string;
    dealValue: string;
  };
}

export function LeadDetailsModal({ isOpen, onClose, lead }: LeadDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600">📋</span>
              </div>
              <h2 className="text-xl font-semibold">Engage with {lead.name}</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-12 w-12" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{lead.name}</h3>
                <Badge variant="secondary">LinkedIn</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{lead.title}, {lead.company}</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-blue-600">{lead.description}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button size="sm" variant="default" className="bg-blue-600">
                  Approve and send
                </Button>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="sm" className="text-blue-600">
                Engage
              </Button>
              <Button variant="ghost" size="sm">
                Research
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Why I picked this lead</h4>
              <ul className="space-y-2 text-sm">
                <li>• Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.</li>
                <li>• Multiple people at her company have reported 'slowness' during service requests.</li>
                <li>• Northwind Traders currently see $200M in revenue from their in-store coffee shops.</li>
              </ul>
            </div>

            <div className="flex gap-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <span className="text-sm font-medium">Decision maker</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">Yes</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-yellow-600">💰</span>
                  </div>
                  <span className="text-sm font-medium">Potential deal value</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">$1M</span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600">📈</span>
                  </div>
                  <span className="text-sm font-medium">Intent</span>
                </div>
                <span className="text-sm text-blue-600 font-medium">High</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">About Jane</h4>
              <p className="text-sm text-muted-foreground">
                Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops' offerings, ensuring consistent, high-quality service.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6" />
                <span className="text-sm text-muted-foreground">D365 Sales</span>
                <span className="text-xs bg-gray-100 rounded px-1">+2</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">AI-generated content may be incorrect</span>
                <Button variant="ghost" size="icon">
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}