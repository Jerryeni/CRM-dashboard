"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LeadCard } from "./lead-card";
import { ActivityCard } from "./activity-card";
import { ChevronDown } from "lucide-react";

const leads = [
  {
    name: "Jane Reyes",
    title: "COO",
    title2: "Engage with Jane Reyes",
    company: "Northwind Traders",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    description: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    tags: ["Expand business", "High buying intent"]
  },
  {
    name: "Allan Munger",
    title: "Head of Real Estate Development",
    title2: "Prepare for meeting",
    company: "Contoso Coffee",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    description: "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
    tags: ["Upcoming meeting", "Due today"]
  }
];

export function ProgressCard() {
  return (
    <Card className="p-6 mb-6 hover:shadow-lg hover:border-2 hover:border-purple-400">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-sm">👋</span>
              </div>
              {/* Header Text */}
              <div className="flex flex-col">
                <h2 className="text-sm font-bold">
                  Hi Mona, <span className="text-blue-600">68%</span> of goal achieved and rest can be achieved by focusing
                  on 20 top leads.
                </h2>
              </div>
            </div>

            {/* Right Side */}
            <div className="text-right ">
              <div className="flex justify-between">
                <span className="text-[8px]  text-gray-500 mt-1">1 month until Q4 ends</span>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-[8px]">Target: $45 million</span>
                  <span className="text-[8px] text-blue-600">68% of target achieved</span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>


              {/* Progress Bar */}
              <div className="relative mt-2 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                {/* Won */}
                <div className="absolute h-2 bg-blue-400" style={{ width: "40%" }}></div>
                {/* Committed */}
                <div className="absolute h-2 bg-green-400" style={{ width: "20%", left: "40%" }}></div>
                {/* Best Case */}
                <div className="absolute h-2 bg-purple-400" style={{ width: "16%", left: "60%" }}></div>
                {/* Qualified */}
                <div className="absolute h-2 bg-orange-400" style={{ width: "8%", left: "76%" }}></div>
              </div>
              {/* Legend Section */}
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <span className="text-[8px]">Won $18m</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-[8px]">Committed $8m</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  <span className="text-[8px]">Best case $7m</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span className="text-[8px]">Qualified $3m</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <span className="text-[8px]">Leads $75m</span>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="flex flex-col gap-6 lg:flex-row w-full">
          <div className="flex flex-col w-[70%] gap-2">
            <p className="text-xs text-muted-foreground">
              Copilot has pinpointed 20 key leads that show strong purchase intent and are actively engaging. These leads need your focus.
            </p>
            {/* Lead Cards */}
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
              {leads.map((lead, index) => (
                <LeadCard key={index} {...lead} />
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[30%]">
            {/* Activities */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-xs">Other key activities</h3>
              </div>
              <div className="space-y-2">
                <ActivityCard
                  title="Woodland Bank"
                  company=" Cafe A100 for Woodland Bank"
                  amount="280,000"
                  daysToClose="8 days to close"
                  avatar="🏢"
                  action="Review draft and reply to Chris Naldo"
                />
                <ActivityCard
                  title="Fabrikam"
                  company="Partnership opportunity for Fabrikam "
                  amount="5,000,000"
                  avatar="💼"
                  daysToClose="12 days to close"
                  action="Prepare me for Fabrikam's key stakeholder meeting"
                />
              </div>
              <button className="text-sm text-blue-600 mt-4">Show all key activities</button>
            </div>
          </div>

        </div>







      </div>
    </Card>
  );
}