export interface Lead {
  id: string;
  name: string;
  topic: string;
  status: string;
  createdOn: string;
  title: string;
  company: string;
  description: string;
  decisionMaker: boolean;
  dealValue: string;
  intent: 'Low' | 'Medium' | 'High';
}

export type ViewMode = 'list' | 'chart';