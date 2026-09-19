import Nav from "./components/Nav"
import Banner from "./components/Banner"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ProjectType = {
  id?: number;
  name: string;
  description?: string;
  icon: string;
  github?: string;
  live?: string;
};

const projectFetch = async (): Promise<ProjectType[]> => {
  const res = await fetch("/data.json");
  const data: ProjectType[] = await res.json();
  return data;
};

function App() {
  const projectPromise = projectFetch();

  return (
    <>
       <Nav/>
       <Banner/>
       <Technologies/>
       <Suspense fallback={<h2>Loading projects...</h2>}>
        <Projects projectPromise={projectPromise}/>
       </Suspense>
       <ToastContainer />
       

      
    </>
  )
}

export default App
