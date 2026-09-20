import { use, type ComponentProps } from "react";

type projectType = ComponentProps<typeof AvailableStack>["projects"][number];

interface ProjectProps{
    projectPromise: Promise<projectType[]>;
}

const Projects = ({projectPromise}:ProjectProps) => {
    const projects=use(projectPromise);

    return (
        <div className="container mx-auto">
        <div className="flex justify-between gap-4 mb-2">
        <h2 className="font-bold text-xl">Available Stacks</h2>
        <div>
        <button className="btn btn-soft btn-success">Available</button>
        <button className="btn">Selected</button>
        </div>
        </div>
            <AvailableStack projects={projects}/>
        </div>
    );
};

export default Projects;