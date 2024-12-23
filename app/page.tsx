import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { ProgressCard } from "@/components/progress-card/progress-card";
import { SearchBar } from "@/components/leads/search-bar";
import { LeadsTable } from "@/components/leads/leads-table";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-48 border-r bg-background">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <ProgressCard />
          <LeadsTable />
        </main>
      </div>
    </div>
  );
}