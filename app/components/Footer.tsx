import Link from "next/link";

const footerLinks = [
  {
    title: "TEAM",
    links: [
      "Chennai Super Kings",
      "Delhi Capitals",
      "Gujarat Titans",
      "Kolkata Knight Riders",
      "Lucknow Super Giants",
      "Mumbai Indians",
      "Punjab Kings",
      "Rajasthan Royals",
      "Royal Challengers Bengaluru",
      "Sunrisers Hyderabad",
    ],
  },
  {
    title: "ABOUT",
    links: [
      "About Us",
      "Anti Corruption Code",
      "Anti Doping Rules",
      "TUE Application Form",
      "Anti Discrimination Code",
      "Clothing And Equipment Regulations",
      "Code Of Conduct For Players And Teams Officials",
      "News Access Regulations",
      "Image Use Terms",
    ],
  },
  {
    title: "GUIDELINES",
    links: [
      "IPL Code Of Conduct For Match Officials",
      "Brand And Protection Guidelines",
      "Governing Council",
      "Match Playing Conditions",
      "PMOA Minimum Standard",
      "Suspect Action Policy",
    ],
  },
  {
    title: "CONTACT",
    links: ["Contact Us", "Sponsorship", "Privacy Policy", "Terms & Conditions"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4 tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {section.links.map((linkText) => (
                <li key={linkText}>
                  <Link
                    href="#"
                    className="hover:underline hover:text-white transition"
                  >
                    {linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
