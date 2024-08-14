import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-40 space-y-8">
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex items-center gap-7">
          <h1 className="text-7xl font-normal text-black">WELCOME</h1>
          <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-400 text-white text-6xl font-bold rounded-full shadow-md">
            To TVS HRMS
          </div>
        </div>
        <button className="text-purple-600 border-4 border-purple-600 rounded-full px-10 py-4 text-4xl font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white">
          Download Documents
        </button>
      </div>
    </div>
    </div>
  ) 
}
