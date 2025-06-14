import { TeamStanding } from '@/app/types';

export default function PointsTable({ table }: { table: TeamStanding[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Team</th>
            <th>Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>
        </thead>
        <tbody>
          {table.map((team) => (
            <tr key={team.team} className="border-t text-center">
              <td className="p-2 text-left font-medium">{team.team}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
              <td>{team.netRunRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
