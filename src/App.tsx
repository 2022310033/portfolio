import Information from "./pages/Information";
import ProgCard from "./pages/ProgCard"
import { Routes, Route, Link } from 'react-router-dom';

export default function App(){
  return(
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden">

      <div className="flex h-dvh w-full flex-col bg-[#98c1d9] md:h-[min(100dvh,45rem)] md:w-[calc(100vw-2rem)] md:max-w-250 md:rounded-xl md:border-4 md:border-[#3d5a80] md:shadow-md">

        <nav className="w-full px-4 py-3 bg-[#3d5a80] text-amber-50 rounded-t-sm">

          <div className="flex items-center justify-between">
            <span className="font-bold">Portfolio</span>

            <div className="space-x-3">
              <Link to="/portfolio"
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



        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden">
          <Routes>
            <Route path="/portfolio" element={<ProgCard />} />
            <Route path="/more" element={<Information />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}
