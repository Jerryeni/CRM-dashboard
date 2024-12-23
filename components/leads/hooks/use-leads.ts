"use client";

import { useState, useMemo } from 'react';
import { Lead, ViewMode } from '../types';
import { mockLeads } from '../data/mock-leads';

export function useLeads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filteredLeads = useMemo(() => {
    if (!searchQuery) return mockLeads;
    
    const query = searchQuery.toLowerCase();
    return mockLeads.filter(lead => 
      lead.name.toLowerCase().includes(query) ||
      lead.topic.toLowerCase().includes(query) ||
      lead.company.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return {
    leads: filteredLeads,
    searchQuery,
    setSearchQuery,
    viewMode,
    setViewMode,
    selectedLead,
    setSelectedLead
  };
}