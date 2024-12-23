"use client";

import { cn } from "@/lib/utils";
import {
  Home,
  Clock,
  Bookmark,
  Briefcase,
  BarChart2,
  Calendar,
  Users,
  Contact2,
  Target,
  FileText,
  ShoppingCart,
  FileSpreadsheet,
  Package,
  BookOpen,
  Mail,
  Send,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AgentSkillLink } from "./sidebar/agent-skill-link";
import { AgentSkillModal } from "./agent-skill/agent-skill-modal";

const sidebarItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Clock, label: "Recent", href: "/coming-soon" },
  { icon: Bookmark, label: "Pinned", href: "/coming-soon" },
  {
    label: "My work",
    items: [
      { icon: Briefcase, label: "Sales accelerator", href: "/coming-soon" },
      { icon: BarChart2, label: "Dashboards", href: "/coming-soon" },
      { icon: Calendar, label: "Activities", href: "/coming-soon" },
    ]
  },
  {
    label: "Customers",
    items: [
      { icon: Users, label: "Accounts", href: "/coming-soon" },
      { icon: Contact2, label: "Contacts", href: "/coming-soon" },
    ]
  },
  {
    label: "Sales",
    items: [
      { icon: Target, label: "Leads", href: "/", active: true },
      { icon: FileText, label: "Opportunities", href: "/coming-soon" },
      { icon: Users, label: "Competitors", href: "/coming-soon" },
    ]
  },
  {
    label: "Collateral",
    items: [
      { icon: ShoppingCart, label: "Quotes", href: "/coming-soon" },
      { icon: FileSpreadsheet, label: "Orders", href: "/coming-soon" },
      { icon: FileText, label: "Invoices", href: "/coming-soon" },
      { icon: Package, label: "Products", href: "/coming-soon" },
      { icon: BookOpen, label: "Sales Literature", href: "/coming-soon" },
    ]
  },
  {
    label: "Marketing",
    items: [
      { icon: Mail, label: "Marketing lists", href: "/coming-soon" },
      { icon: Send, label: "Quick Campaigns", href: "/coming-soon" },
    ]
  },
  {
    label: "Performance",
    items: [
      { icon: TrendingUp, label: "Sales", href: "/coming-soon" },
    ]
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isAgentSkillOpen, setIsAgentSkillOpen] = useState(false);

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">

            {sidebarItems.map((section, i) => (
              <div key={i} className="mb-4">
                {section.label && !section.href && (
                  <h2 className="mb-2 px-4 text-sm font-semibold tracking-tight text-muted-foreground">
                    {section.label}
                  </h2>
                )}
                {section.href ? (
                  <Link
                    href={section.href}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      pathname === section.href ? "bg-accent" : "transparent"
                    )}
                  >
                    <section.icon className="mr-2 h-4 w-4" />
                    <span>{section.label}</span>
                  </Link>
                ) : (
                  section.items?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                        (pathname === item.href || item.active) ? "bg-accent" : "transparent"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  ))
                )}
              </div>
            ))}

            <AgentSkillLink onOpen={() => setIsAgentSkillOpen(true)} />

          </div>
        </div>
      </div>

      <AgentSkillModal
        isOpen={isAgentSkillOpen}
        onClose={() => setIsAgentSkillOpen(false)}
      />
    </div>
  );
}