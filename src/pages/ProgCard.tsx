import { useState } from "react";
import ReactLogo2 from "/icons/pixel.png";
import BarCode from "./Barcode";

export default function ProgCard(){

    const [isFlipped, setIsFlipped] = useState(false);

    return(
        <div className="flex-1 flex items-center justify-center">

          <div 
            className="relative flex h-80 aspect-auto w-[min(42.5rem,calc(100vw-2rem))] max-w-full cursor-pointer flex-col rounded-xl border-[3px] border-black bg-[#293241] sm:h-auto sm:aspect-[1.7]"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s ease-in-out',
            }}
            onClick={() => setIsFlipped(!isFlipped)}>
                
                <div className="flex h-16 w-full items-center justify-center border-b-2 border-black bg-[#232933] px-3 py-2 text-[#ee6c4d] sm:h-24 sm:px-4 sm:py-3" style={{ backfaceVisibility: 'hidden' }}>
                  <span className="text-center text-lg font-bold tracking-widest sm:text-3xl">PROGRAMMER CARD</span>
              </div>

              <div className="flex flex-1 items-center justify-center overflow-hidden px-3 py-4 sm:px-4 sm:py-6" style={{ backfaceVisibility: 'hidden' }}>
                <div className="flex min-w-0 flex-col items-center gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">

                    <img
                        src= { ReactLogo2 }
                        alt="Profile image"
                    className="h-28 w-28 shrink-0 rounded-4xl border-2 border-black sm:h-50 sm:w-50"
                    />

                  <div className="flex min-w-0 flex-col text-[#ee6c4d]">
                    <h2 className="my-1 text-2xl font-serif sm:text-5xl">Hello! I am</h2>
                    <h2 className="my-1 text-2xl font-extrabold font-serif text-amber-50 sm:text-5xl">Geric Concon</h2>
                    <h2 className="my-1 text-base font-serif sm:text-2xl">A <span className="underline decoration-2 underline-offset-4">Junior</span> Programmer</h2>
                    </div>
                </div>
            </div>



            <div 
              className="absolute inset-0 flex h-full w-full flex-col rounded-xl border-[3px] border-black bg-[#293241] p-3 sm:p-6"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}>
              
              <div className="absolute left-0 right-0 top-0 flex h-16 items-center justify-center border-b-2 border-black bg-[#232933] px-3 py-2 text-[#ee6c4d] sm:h-24 sm:px-4 sm:py-3" style={{ backfaceVisibility: 'hidden' }}>
              </div>

              <div className="mt-16 flex flex-1 items-start justify-start overflow-y-auto text-left text-sm text-[#ee6c4d] sm:mt-24 sm:text-2xl">
                <div>
                    <h2 className="my-1 text-base font-bold font-serif sm:text-2xl">Address: <span className="font-normal">Porac, Pampanga, Philippines</span></h2>
                    <h2 className="my-1 text-base font-bold font-serif sm:text-2xl">Birth Date: <span className="font-normal">November 20, 2002</span></h2>
                    <h2 className="my-1 text-base font-bold font-serif sm:text-2xl">Languages: <span className="font-normal">English, Tagalog and Kapampangan</span></h2>
                    <h2 className="my-1 text-base font-bold font-serif sm:text-2xl">Email: <span className="font-normal">concongeric@gmail.com</span></h2>
                    <h2 className="my-1 text-base font-bold font-serif sm:text-2xl">Phone: <span className="font-normal">+63 935 914 2574</span></h2>
                </div>
              </div>

              
              <div className="absolute bottom-0 left-0 right-0 flex h-12 items-end justify-center sm:h-16" style={{ backfaceVisibility: 'hidden' }}>
                <BarCode />
              </div>
            </div>

          </div>

        </div>
    )
}
