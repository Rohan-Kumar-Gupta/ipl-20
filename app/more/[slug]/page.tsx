import { notFound } from "next/navigation";

const moreData = {
  photos: "Gallery of memorable match photos and player moments.",
  venues: "Details and histories of all cricket venues.",
  about: "About the league, mission, and organizers.",
  sponsors: "List of sponsors and partners supporting the tournament.",
};

export default function MorePage({ params }: { params: { slug: string } }) {
  const content = moreData[params.slug as keyof typeof moreData];

  if (!content) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize">{params.slug.replace("-", " ")}</h1>
      <p className="mt-4">{content}</p>
    </div>
  );
}

