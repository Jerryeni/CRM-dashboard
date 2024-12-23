"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  BarChart2,
  Plus,
  RefreshCw,
  Users,
  Trash2,
  MoreHorizontal,
  Filter,
  Columns,
} from "lucide-react";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold">My open leads</h1>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-8">
            <BarChart2 className="h-4 w-4 mr-2" />
            Show chart
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Focused view
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <Plus className="h-4 w-4 mr-2" />
            New
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <Users className="h-4 w-4 mr-2" />
            Collaborate
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
          <div className="h-4 w-px bg-gray-200 mx-2" />
          <Button variant="ghost" size="sm" className="h-8">
            <Filter className="h-4 w-4 mr-2" />
            Edit filters
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <Columns className="h-4 w-4 mr-2" />
            Edit columns
          </Button>
          <Button variant="ghost" size="sm" className="h-8">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Smart data
          </Button>
        </div>
      </div>
    </div>
  );
}