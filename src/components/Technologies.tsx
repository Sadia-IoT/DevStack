import { useState, useEffect } from "react";

type Technology = {
  id: number;
  name: string;
  icon: string;
  description: string;
  badge: string;
  category: string;
  difficulty: string;
  rating: number;
};

const badgeColors: Record<string, string> = {
  Popular: "bg-pink-100 text-pink-600",
  Versatile: "bg-blue-100 text-blue-600",
  Fast: "bg-green-100 text-green-600",
  Standard: "bg-purple-100 text-purple-600",
  "Top SQL": "bg-yellow-100 text-yellow-600",
};

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");

      const data = await res.json();

      return data;
    };

    const loadData = async () => {
      const data = await fetchData();
      setTechnologies(data);
      setLoading(false);

      console.log(data);
    };

    loadData();
  }, []);

  return (
    <>
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-4">
          Pick one technology per category to build your ideal stack
        </p>
      </section>

      <div className="container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <div
            key={technology.id}
            className="relative rounded-xl border border-gray-100 p-6"
          >
            {/* Badge */}
            <span
              className={`absolute right-4 top-4 rounded-full px-3 py-1 text-sm ${
                badgeColors[technology.badge]
              }`}
            >
              {technology.badge}
            </span>

            {/* Icon */}
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-12 w-12"
            />

            {/* Name */}
            <h3 className="mt-4 text-xl font-bold">{technology.name}</h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">{technology.description}</p>

            {/* Bottom Row */}
            <div className="mt-6 flex items-center justify-between pt-4 text-sm">
              <span>{technology.category}</span>

              <span>{technology.difficulty}</span>

              <span>⭐ {technology.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
