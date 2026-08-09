import Information from "./pages/Information";
import ProgCard from "./pages/ProgCard"
import { Routes, Route, Link } from 'react-router-dom';

export default function App(){
  return(
    <div className="min-h-screen flex items-center justify-center">

      <div className="w-250 h-180 flex flex-col rounded-xl border-4 border-[#3d5a80] bg-[#98c1d9] shadow-md">

        <nav className="w-full px-4 py-3 bg-[#3d5a80] text-amber-50 rounded-t-sm">

          <div className="flex items-center justify-between">
            <span className="font-bold">Portfolio</span>
            <div className="space-x-3">
              <Link to="/"
                className="inline-block transition-transform duration-150 hover:scale-105 hover:text-amber-50 hover:[-webkit-text-stroke:0.35px_currentColor]">
                Card
              </Link>


              <Link to="/more"
                className="inline-block transition-transform duration-150 hover:scale-105 hover:text-amber-50 hover:[-webkit-text-stroke:0.35px_currentColor]">
                More Info
              </Link>



            </div>
          </div>
        </nav>



        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <Routes>
            <Route path="/" element={<ProgCard />} />
            <Route path="/more" element={<Information />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}
