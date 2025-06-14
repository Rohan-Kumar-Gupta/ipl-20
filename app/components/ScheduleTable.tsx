import { ScheduleEntry } from '@/app/types';

export default function ScheduleTable({ schedule }: { schedule: ScheduleEntry[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Match Schedule</h3>
      <ul className="divide-y divide-gray-200">
        {schedule.map((item, i) => (
          <li key={i} className="py-2 flex justify-between">
            <span>{item.date}</span>
            <span>{item.match}</span>
            <span className="text-gray-500">{item.venue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
