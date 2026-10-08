import ReactLogo2 from "/icons/pixel.png";
import Mpes from "/icons/mpes.png";
import Acnts from "/icons/acnts.png";
import Acsci from "/icons/acsci.png";
import Pmsu from "/icons/pmsu.png";

export default function Personal() {
    return(
        <>
        <div className="mt-1 flex min-h-0 flex-1 flex-col p-3 text-gray-700 sm:p-4">
            <div className="flex shrink-0 items-center justify-start gap-3 pb-2 width-full md:justify-center md:gap-5">

                <img className="h-16 w-16 shrink-0 rounded-full border-gray-700 border-2 sm:h-24 sm:w-24 md:h-40 md:w-40" src={ReactLogo2} alt="Profile Image" />

                <div className="flex min-w-0 flex-col justify-start md:text-center">
                    <h2 className="my-0.5 wrap-break-word font-serif text-xl font-extrabold text-gray-700 sm:text-3xl md:text-5xl">Geric Concon</h2>
                    <span className="text-sm text-gray-600 sm:text-base md:text-xl">Junior Developer</span>
                    <span className="text-sm text-gray-600 sm:text-base md:text-xl">Former Web Developer Intern at Shore360</span>
                </div>
            </div>

        

        <div className="flex min-h-0 flex-1 items-center justify-center w-full">

            <div className="flex h-full min-h-0 w-full flex-col justify-start overflow-y-auto">

                <h2 className="font-extrabold font-serif text-gray-700 ">EDUCATION</h2>
                
                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Mpes} alt="Mpes Logo" className="m-2 h-28 w-28 rounded-full pb-2 sm:h-35 sm:w-35" />

                    <h2 className="px-2 text-center font-serif font-extrabold text-gray-700">Manibaug Paralaya Elementary School</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">Grade 1-6: Top 2 in Class</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated as Salutatorian</span>

                </div>

                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Acnts} alt="Acnts Logo" className="m-2 h-28 w-28 rounded-full pb-2 sm:h-35 sm:w-35" />

                    <h2 className="px-2 text-center font-serif font-extrabold text-gray-700">Angeles City National Trade School</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">Grade 7-10: Consistently with High Honors</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated with High Honors</span>

                </div>
                
                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Acsci} alt="Acsci Logo" className="m-2 h-28 w-28 rounded-full pb-2 sm:h-35 sm:w-35" />

                    <h2 className="px-2 text-center font-serif font-extrabold text-gray-700">Angeles City Science High School</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">Grade 11-12: Both year with High Honors</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated with High Honors</span>

                </div>

                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Pmsu} alt="Pmsu Logo" className="m-2 h-28 w-28 rounded-full pb-2 sm:h-35 sm:w-35" />

                    <h2 className="px-2 text-center font-serif font-extrabold text-gray-700">Pampanga State University</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">1st to 4th Year: Consistent Dean's and President's Lister</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated as Magna Cum Laude</span>

                </div>

            </div>

        </div>

















        </div>
        </>
    )
}