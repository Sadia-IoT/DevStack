type Technology = {
  id: number;
  name: string;
  icon: string;
  category: string;
};
type SidebarProps = {
  stack: Technology[];
  handleRemoveFromStack: (id: number) => void;
  handleRemoveAll: () => void;
};
const Sidebar = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) => {
  return (
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
                    <p className="text-sm font-semibold">{technology.name}</p>

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
  );
};
export default Sidebar;
