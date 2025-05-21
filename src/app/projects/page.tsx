import Navbar from "../_components/navbar/navbar";


export default function Projects() {
  return (
    <>
      <Navbar></Navbar>
      <section className="bg-gray-950 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-500 mb-10">
            My Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-400 mb-2">Project 1</h2>
              <p className="text-gray-300 mb-4">Description of project 1.</p>
              <a href="#" className="text-indigo-500 hover:underline">View Project</a>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-indigo-400 mb-2">Project 2</h2>
              <p className="text-gray-300 mb-4">Description of project 2.</p>
              <a href="#" className="text-indigo-500 hover:underline">View Project</a>
            </div>
            {/* Project 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">Project 3</h2>
                <p className="text-gray-300 mb-4">Description of project 3.</p>
                <a href="#" className="text-indigo-500 hover:underline">View Project</a>
            </div>
            {/* Project 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-indigo-400 mb-2">Project 4</h2>
                <p className="text-gray-300 mb-4">Description of project 4.</p>
                <a href="#" className="text-indigo-500 hover:underline">View Project</a>
            </div>
            {/* Add more projects as needed */}
            </div>
        </div>
        </section>
    </>
    );
}
