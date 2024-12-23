"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Plus,
  RefreshCcw,
  Users,
  Trash2,
  MoreHorizontal,
  Filter,
  Columns,
} from "lucide-react";

export function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-semibold">My open leads</h1>
        <Button variant="ghost" size="icon">
          <BarChart2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <RefreshCcw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
        <Button variant="ghost" size="sm">
          <Users className="h-4 w-4 mr-2" />
          Collaborate
        </Button>
        <Button variant="ghost" size="sm">
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Edit filters
        </Button>
        <Button variant="ghost" size="sm">
          <Columns className="h-4 w-4 mr-2" />
          Edit columns
        </Button>
        <Button variant="default" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          New
        </Button>
      </div>
    </div>
  );
}