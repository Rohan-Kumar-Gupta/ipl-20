"use client";

import useSWR from "swr";
import { fetcher } from "@/app/utils/fetcher";
import MatchCard from "@/app/components/MatchCard";
import PointsTable from "@/app/components/PointsTable";
import ScheduleTable from "@/app/components/ScheduleTable";
import { Match, TeamStanding, ScheduleEntry } from "@/app/types";

export default function Home() {
  const { data, error } = useSWR("/api/scrape", fetcher);

  if (error)
    return <div className="p-4 text-red-600">Failed to load data.</div>;
  if (!data) return <div className="p-4">Loading...</div>;

  const match: Match = data.matches[0];
  const table: TeamStanding[] = data.pointsTable;
  const schedule: ScheduleEntry[] = data.schedule;

  return (
    <main className="p-4 max-w-4xl mx-auto space-y-6">
     
      <h1 className="text-3xl font-bold text-center text-purple-700">
        🏏 IPL T20 Dashboard
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Live/Upcoming Match</h2>
        <MatchCard match={match} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-2">Points Table</h2>
        <PointsTable table={table} />
      </section>

      <section>
        <ScheduleTable schedule={schedule} />
      </section>
    </main>
  );
}
