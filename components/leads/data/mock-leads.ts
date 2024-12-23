import { Lead } from '../types';

export const mockLeads: Lead[] = [
  {
    id: '1',
    name: "Winford Asher",
    topic: "Cafe A100 for commercial use",
    status: "New",
    createdOn: "4/02/2024 12:00 PM",
    title: "Sales Manager",
    company: "Asher Industries",
    description: "Interested in bulk purchase of Cafe A100 machines for commercial deployment.",
    decisionMaker: true,
    dealValue: "$280,000",
    intent: "High"
  },
  {
    id: '2',
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    status: "New",
    createdOn: "3/10/2024 9:30 AM",
    title: "COO",
    company: "Northwind Traders",
    description: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    decisionMaker: true,
    dealValue: "$1M",
    intent: "High"
  }
  // Add more mock leads here...
];