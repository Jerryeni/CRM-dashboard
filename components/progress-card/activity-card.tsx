"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Card } from "../ui/card";

interface ActivityCardProps {
  title: string;
  company: string;
  amount: string;
  avatar: string;
  daysToClose: string;
  action: string;
}

export function ActivityCard({
  title,
  company,
  amount,
  daysToClose,
  action,
  avatar
}: ActivityCardProps) {
  return (
    <Card
    className="p-3 bg-white rounded-xl shadow-sm border border-[#e5e7eb] hover:border-blue-200 cursor-pointer transition-all duration-200"
    
  >
    <div className="flex flex-col items-start justify-between gap-1 overflow-auto">
      <div className="flex gap-2 items-center">
        {/* <img src={avatar} alt={avatar} className="w-6 h-6 rounded-full object-cover shrink-0" /> */}
        <p>{avatar}</p>
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900 text-xs ">{company}</h3>
          <p className="text-[10px] text-gray-500 truncate">{title} • {amount}. {daysToClose} </p>
        </div>
      </div>
      <div className="min-w-0 bg-gray-100 rounded-lg p-1">
        <p className="text-xs text-gray-600 leading-relaxed">{action}</p>
      </div>
     
    </div>
  </Card>
  );
}