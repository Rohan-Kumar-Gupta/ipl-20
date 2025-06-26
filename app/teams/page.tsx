import TeamCard from "../components/TeamCard";

const teams = [
  {
    name: "Chennai Super Kings",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    colors: {
      bg: "bg-yellow-400",
      text: "text-blue-900",
      body: "bg-yellow-500",
    },
    trophies: [2010, 2011, 2018, 2021, 2023],
  },
  {
    name: "Mumbai Indians",
    logo: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    colors: { bg: "bg-blue-500", text: "text-white", body: "bg-yellow-500" },
    trophies: [2013, 2015, 2017, 2019, 2020],
  },
  {
    name: "Royal Challengers Bengaluru",
    logo: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
    colors: {
      bg: "bg-gradient-to-b from-black to-red-700",
      text: "text-yellow-300",
      body: "bg-yellow-500",
    },
    trophies: [2025],
  },
  {
    name: "Kolkata Knight Riders",
    logo: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
    colors: {
      bg: "bg-purple-700",
      text: "text-yellow-300",
      body: "bg-yellow-500",
    },
    trophies: [2012, 2014],
  },
  {
    name: "Delhi Capitals",
    logo: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    colors: { bg: "bg-red-600", text: "text-white", body: "bg-yellow-500" },
    trophies: [],
  },
  {
    name: "Sunrisers Hyderabad",
    logo: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
    colors: { bg: "bg-orange-500", text: "text-white", body: "bg-yellow-500" },
    trophies: [2016],
  },
  {
    name: "Gujarat Titans",
    logo: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
    colors: { bg: "bg-blue-300", text: "text-black", body: "bg-yellow-500" },
    trophies: [2022],
  },
  {
    name: "Rajasthan Royals",
    logo: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
    colors: { bg: "bg-pink-400", text: "text-blue-900", body: "bg-yellow-500" },
    trophies: [2008],
  },
  {
    name: "Lucknow Super Giants",
    logo: "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
    colors: { bg: "bg-white", text: "text-blue-700", body: "bg-yellow-500" },
    trophies: [],
  },
  {
    name: "Punjab Kings",
    logo: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    colors: { bg: "bg-red-600", text: "text-white", body: "bg-yellow-500" },
    trophies: [],
  },
];

export default function TeamsPage() {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
        IPL Teams
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-4 px-20">
        {teams.map((team) => (
          <TeamCard key={team.name} team={team} />
        ))}
      </div>
    </div>
  );
}
