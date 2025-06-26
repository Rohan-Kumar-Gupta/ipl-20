import { notFound } from "next/navigation";

const statsData = {
  batting: "Detailed batting stats and top scorers.",
  bowling: "Bowling figures and best performers.",
  teams: "Team-wise performance and rankings.",
  records: "All-time and recent records in matches.",
};

export default function StatsPage({ params }: { params: { slug: string } }) {
  const content = statsData[params.slug as keyof typeof statsData];

  if (!content) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize">{params.slug.replace("-", " ")}</h1>
      <p className="mt-4">{content}</p>
    </div>
  );
}
