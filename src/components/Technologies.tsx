import { useState, useEffect } from "react";
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
                className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
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

        {/* Your Stack */}
        <div className="h-fit rounded-xl border border-gray-200 bg-white p-4 lg:col-span-1">
          <h2 className="text-lg font-bold">Your Stack</h2>

          

          {stack.length === 0 ? (
            <>
              <p className="mt-4 text-sm text-gray-500">
                Add technologies to build your stack.
              </p>
              <span className="mt-2 block rounded-lg border border-gray-200 p-3">
                Your stack is empty.
              </span>
            </>
          ) : (
            <>
              <div className="mt-4 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-8 w-8"
                      />

                      <div>
                        <p className="text-sm font-semibold">
                          {technology.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove from Stack */}
                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <p className="mt-1 text-xs text-gray-400">
            {stack.length} Technology Selected
          </p>
              </div>

              {/* Remove All */}
              <button
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm text-red-500"
              >
                Remove All
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Technologies;
