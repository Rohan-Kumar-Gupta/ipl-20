import { notFound } from "next/navigation";

const newsData = {
  latest: "This is the latest news content.",
  announcements: "These are announcements.",
  reports: "Here are the match reports.",
  players: "Player updates and profiles.",
};

export default function NewsPage({ params }: { params: { slug: string } }) {
  const content = newsData[params.slug as keyof typeof newsData];

  if (!content) return notFound();

  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold capitalize">{params.slug.replace("-", " ")}</h1>
      <p className="mt-4">{content}</p>
    </div>
  );
}
