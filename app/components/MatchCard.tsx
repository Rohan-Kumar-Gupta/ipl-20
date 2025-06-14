import { Match } from '@/app/types';

export default function MatchCard({ match }: { match: Match }) {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-2">
        {match.teamA} vs {match.teamB}
      </h2>
      <p className="text-gray-700">
        {match.time} • {match.venue}
      </p>
      <span
        className={`text-sm font-medium ${
          match.status === "live" ? "text-red-500" : "text-blue-600"
        }`}
      >
        {match.status.toUpperCase()}
      </span>
    </div>
  );
}
