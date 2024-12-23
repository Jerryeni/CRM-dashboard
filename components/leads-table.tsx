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

const leads = [
  {
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "4/02/2024 12:00 PM",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    status: "New",
    createdOn: "3/30/2024 7:45 AM",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput on EspressoMaster",
    status: "New",
    createdOn: "3/28/2024 3:30 PM",
  },
  {
    name: "Jermaine Berrett",
    topic: "New roaster in distribution facility",
    status: "New",
    createdOn: "3/25/2024 11:05 AM",
  },
  {
    name: "Gerald Stephens",
    topic: "Concerns on current machines",
    status: "New",
    createdOn: "3/23/2024 4:50 PM",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    status: "New",
    createdOn: "3/21/2024 10:20 AM",
  },
  {
    name: "Rachel Michael",
    topic: "Addressing service concerns",
    status: "New",
    createdOn: "3/19/2024 1:15 PM",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    status: "New",
    createdOn: "3/17/2024 8:00 AM",
  },
  {
    name: "Lilly Pyles",
    topic: "Cafe A100 bulk rate",
    status: "New",
    createdOn: "3/13/2024 2:45 PM",
  },
  {
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdOn: "3/10/2024 9:30 AM",
  },
];

export function LeadsTable() {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Status reason</TableHead>
              <TableHead>Created on</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.name} className="hover:bg-muted/50 cursor-pointer">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>{lead.topic}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.createdOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}