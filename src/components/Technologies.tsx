import { useState, useEffect } from "react";
import Sidebar from "./SideBar";
import { toast } from "react-toastify";

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
   Flexible: "border-cyan-200 bg-cyan-100 text-cyan-600",
  Combo: "border-orange-200 bg-orange-100 text-orange-600",
  Ubiquitous: "border-indigo-200 bg-indigo-100 text-indigo-600",
  Modern: "border-violet-200 bg-violet-100 text-violet-600",
  Robust: "border-red-200 bg-red-100 text-red-600",
  Classic: "border-gray-200 bg-gray-100 text-gray-600",
  Containers: "border-sky-200 bg-sky-100 text-sky-600",
  Orchestration: "border-teal-200 bg-teal-100 text-teal-600",
  Essential: "border-amber-200 bg-amber-100 text-amber-600",
  Collaborative: "border-rose-200 bg-rose-100 text-rose-600",
};

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      return data;
    };

    const loadData = async () => {
      try {
        const data = await fetchData();
        setTechnologies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  // Add function
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning("Already added!");
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success("Technology added!");
  };
  // Remove function
  const handleRemoveFromStack = (id: number) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    toast.info("Technology removed!");
  };
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <>
      {/* Heading */}
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Pick one technology per category to build your ideal stack
        </p>
      </section>

      {/* Main Layout */}
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-4">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {loading ? (
            <p>Loading technologies...</p>
          ) : (
            technologies.map((technology) => (
              <div
                key={technology.id}
                className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:bg-pink-50 hover:-translate-y-0.5"
              >
                {/* Badge */}
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs ${
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
                <p className="mt-2 text-sm leading-5 text-gray-500">
                  {technology.description}
                </p>

                {/* Bottom Info */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs text-gray-500">
                  <span>{technology.category}</span>

                  <span>{technology.difficulty}</span>

                  <span>⭐ {technology.rating}</span>
                </div>

                {/* Add Button */}
                <button
                  onClick={() => handleAddToStack(technology)}
                  disabled={stack.some((item) => item.id === technology.id)}
                  className={`mt-4 w-full rounded-lg py-2 text-sm text-white ${
                    stack.some((item) => item.id === technology.id)
                      ? "cursor-not-allowed bg-gray-500"
                      : "bg-gray-900"
                  }`}
                >
                  {stack.some((item) => item.id === technology.id)
                    ? "✓ Added to Stack"
                    : "Add to Stack"}
                </button>
              </div>
            ))
          )}
        </div>
{/* Sidebar */}
<Sidebar
  stack={stack}
  handleRemoveFromStack={handleRemoveFromStack}
  handleRemoveAll={handleRemoveAll}
/>
      </div>
    </>
  );
};

export default Technologies;
