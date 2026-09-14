
const Technologies = () => {
    return (
       <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold">
            Explore the <h2 className="text-pink-500">Technologies</h2>
        </h2>
        <p className="mt-4">
            Pick one technology per category to build your ideal stack
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

        <div className="p-6 border rounded-lg text-center">
          <h3 className="font-bold text-xl">HTML</h3>
          <p className="mt-2">Structure</p>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="font-bold text-xl">CSS</h3>
          <p className="mt-2">Styling</p>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="font-bold text-xl">JavaScript</h3>
          <p className="mt-2">Programming</p>
        </div>

        <div className="p-6 border rounded-lg text-center">
          <h3 className="font-bold text-xl">React</h3>
          <p className="mt-2">Frontend</p>
        </div>

      </div>
       </section>
    );
};

export default Technologies;