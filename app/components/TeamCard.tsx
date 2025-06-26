"use client";

import { useState } from "react";
import Image from "next/image";

type Team = {
  name: string;
  logo: string;
  colors: { bg: string; text: string };
  trophies?: number[];
};

const TeamCard = ({ team }: { team: Team }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105  w-full max-w-[240px] max-h-[240px] ${team.colors.bg}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-40 flex items-center justify-center p-4">
        <Image
          src={team.logo}
          alt={team.name}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div
        className={`text-center py-4 text-lg font-semibold ${team.colors.text}`}
      >
        {team.name}
      </div>
      {hovered && (
        <div className="absolute inset-0 bg-black/70 bg-opacity-80 flex flex-col items-center justify-center text-white text-center px-2 transition-opacity">
          {team.trophies && team.trophies.length > 0 ? (
            <>
              <div className="text-xl font-bold mb-2">🏆 Titles Won</div>
              <div className="flex space-x-2">
                {team.trophies.map((year) => (
                  <div key={year}>{year}</div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-xl font-semibold">No Titles Yet</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamCard;
