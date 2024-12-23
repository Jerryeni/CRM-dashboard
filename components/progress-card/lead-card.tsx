"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface LeadCardProps {
  name: string;
  title: string;
  title2: string;
  company: string;
  avatar: string;
  description: string;
  tags: string[];
  onClick?: () => void;
}

export function LeadCard({ name, title, title2, company, avatar, description, tags, onClick }: LeadCardProps) {
  return (
    <Card
      className="p-3 bg-white rounded-xl shadow-sm border border-[#e5e7eb] hover:border-blue-200 cursor-pointer transition-all duration-200"
      onClick={onClick}
    >
      <div className="flex flex-col items-start justify-between gap-1 overflow-auto">
        <div className="flex gap-2 items-center">
          <img src={avatar} alt={name} className="w-6 h-6 rounded-full object-cover shrink-0" />
          <div className="flex flex-col">
            <h3 className="font-medium text-gray-900 text-xs">{name}</h3>
            <p className="text-xs text-gray-500 truncate">{title} • {company}</p>
          </div>
        </div>
        <div className="min-w-0 bg-gray-100 rounded-lg p-3 my-2">
          <p className="text-[15px] text-balck  leading-relaxed">{title2}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
          
        </div>
        <div className="flex items-center flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
      </div>
    </Card>
  );
}