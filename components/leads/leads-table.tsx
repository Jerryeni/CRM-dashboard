"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { LeadDetailsModal } from "./lead-details-modal";
import { LeadPreview } from "./lead-preview";
import { useLeads } from "./hooks/use-leads";
import { SearchBar } from "./search-bar";
import { ViewToggle } from "./view-toggle";

export function LeadsTable() {
  const {
    leads,
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    selectedLead,
    setSelectedLead
  } = useLeads();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <ViewToggle mode={viewMode} onChange={setViewMode} />
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-semibold hover:bg-transparent">
                  Name <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-semibold hover:bg-transparent">
                  Topic <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-semibold hover:bg-transparent">
                  Status reason <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" className="p-0 font-semibold hover:bg-transparent">
                  Created on <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <LeadPreview key={lead.id} lead={lead}>
                <TableRow 
                  className="hover:bg-muted/50 cursor-pointer"
                  onClick={() => setSelectedLead(lead)}
                >
                  <TableCell className="w-12">
                    <Checkbox />
                  </TableCell>
                  <TableCell className="font-medium text-blue-600">{lead.name}</TableCell>
                  <TableCell>{lead.topic}</TableCell>
                  <TableCell>{lead.status}</TableCell>
                  <TableCell>{lead.createdOn}</TableCell>
                </TableRow>
              </LeadPreview>
            ))}
          </TableBody>
        </Table>
      </div>

      <LeadDetailsModal
        isOpen={!!selectedLead}
        onClose={() => setSelectedLead(null)}
        lead={selectedLead || {
          id: "",
          name: "",
          title: "",
          company: "",
          description: "",
          topic: "",
          status: "",
          createdOn: "",
          decisionMaker: false,
          dealValue: "",
          intent: "Low"
        }}
      />
    </>
  );
}