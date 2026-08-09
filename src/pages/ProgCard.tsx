import { useState } from "react";
import ReactLogo2 from "/icons/pixel.png";
import BarCode from "./Barcode";

export default function ProgCard(){

    const [isFlipped, setIsFlipped] = useState(false);

    return(
        <div className="flex-1 flex items-center justify-center">

          <div 
            className="w-170 h-100 bg-[#293241] rounded-xl flex flex-col border-[3px] border-black cursor-pointer relative"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s ease-in-out',
            }}
            onClick={() => setIsFlipped(!isFlipped)}>
                
              <div className="w-full px-4 py-3 flex items-center justify-center text-[#ee6c4d] h-24 border-b-2 border-black bg-[#232933]" style={{ backfaceVisibility: 'hidden' }}>
                  <span className="font-bold tracking-widest text-3xl">PROGRAMMER CARD</span>
              </div>

            <div className="flex-1 flex items-center justify-center px-4 py-6" style={{ backfaceVisibility: 'hidden' }}>
                <div className="flex items-center space-x-4">

                    <img
                        src= { ReactLogo2 }
                        alt="Profile image"
                        className="h-50 w-50 rounded-4xl border-2 border-black cursor-pointer"
                    />

                    <div className="flex flex-col text-[#ee6c4d]">
                        <h2 className="text-5xl font-serif my-1">Hello! I am</h2>
                        <h2 className="text-5xl font-extrabold font-serif text-amber-50 my-1">Geric Concon</h2>
                        <h2 className="text-2xl font-serif my-1">A <span className="underline decoration-2 underline-offset-4">Junior</span> Programmer</h2>
                    </div>
                </div>
            </div>



            <div 
              className="absolute inset-0 w-170 h-100 bg-[#293241] rounded-xl flex flex-col border-[3px] border-black p-6"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}>
              
              <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-center text-[#ee6c4d] h-24 border-b-2 border-black bg-[#232933]" style={{ backfaceVisibility: 'hidden' }}>
              </div>

              <div className="flex-1 flex items-start justify-start text-[#ee6c4d] text-left mt-24">
                <div>
                    <h2 className="text-2xl font-bold font-serif my-1">Address: <span className="font-normal">Porac, Pampanga, Philippines</span></h2>
                    <h2 className="text-2xl font-bold font-serif my-1">Birth Date: <span className="font-normal">November 20, 2002</span></h2>
                    <h2 className="text-2xl font-bold font-serif my-1">Languages: <span className="font-normal">English, Tagalog and Kapampangan</span></h2>
                    <h2 className="text-2xl font-bold font-serif my-1">Email: <span className="font-normal">concongeric@gmail.com</span></h2>
                    <h2 className="text-2xl font-bold font-serif my-1">Phone: <span className="font-normal">+63 935 914 2574</span></h2>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center " style={{ backfaceVisibility: 'hidden' }}>
                <BarCode />
              </div>
            </div>

          </div>

        </div>
    )
}
