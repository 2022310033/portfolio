import ReactLogo2 from "/icons/pixel.png";
import Mpes from "/icons/mpes.png";
import Acnts from "/icons/acnts.png";
import Acsci from "/icons/acsci.png";
import Pmsu from "/icons/pmsu.png";

export default function Personal() {
    return(
        <>
        <div className="mt-2 text-gray-700 p-4">
            <div className="flex items-center justify-start width-full">

                <img className="h-50 w-50 rounded-full border-gray-700 border-2" src={ReactLogo2} alt="Profile Image" />

                <div className="flex flex-col justify-start m-4">
                    <h2 className="text-5xl font-extrabold font-serif text-gray-700 my-1">Geric Concon</h2>
                    <span className="text-xl text-gray-600 text-center">Junior Developer</span>
                    <span className="text-xl text-gray-600 text-center">Former Web Developer Intern at Shore360</span>
                </div>
            </div>

        <div className="my-2 h-0.5 w-[98%] bg-gray-700" />

        <div className="flex items-center justify-center w-full">

            <div className="flex flex-col justify-start w-full max-h-72 overflow-y-auto">

                <h2 className="font-extrabold font-serif text-gray-700 ">EDUCATION</h2>
                
                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Mpes} alt="Mpes Logo" className="rounded-full h-35 w-35 m-2 pb-2" />

                    <h2 className="font-extrabold font-serif text-gray-700">Manibaug Paralaya Elementary School</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">Grade 1-6: Top 2 in Class</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated as Salutatorian</span>

                </div>

                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Acnts} alt="Acnts Logo" className="rounded-full h-35 w-35 m-2 pb-2" />

                    <h2 className="font-extrabold font-serif text-gray-700">Angeles City National Trade School</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">Grade 7-10: Consistently with High Honors</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated with High Honors</span>

                </div>
                
                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Acsci} alt="Acsci Logo" className="rounded-full h-35 w-35 m-2 pb-2" />

                    <h2 className="font-extrabold font-serif text-gray-700">Angeles City Science High School</h2>

                    <div className="my-2 h-0.5 w-[98%] bg-gray-700"/>

                    <span className="font-medium text-gray-700 text-center">Grade 11-12: Both year with High Honors</span>

                    <span className="mb-1 font-medium text-gray-700 text-center">Graduated with High Honors</span>

                </div>

                <div className="flex flex-col justify-center items-center h-auto w-full border-2 border-gray-700 rounded-xl mt-2 mb-4">

                    <img src={Pmsu} alt="Pmsu Logo" className="rounded-full h-35 w-35 m-2 pb-2" />

                    <h2 className="font-extrabold font-serif text-gray-700">Pampanga State University</h2>

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