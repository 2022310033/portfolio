import Github from "/svg/github-icon.svg";
import LinkedIn from "/svg/linkedin-icon.svg";
import Gmail from "/svg/gmail-icon.svg";

export default function Contact() {
    return(
        <>
        <div className="flex h-150 flex-col items-center justify-start overflow-y-auto overflow-x-hidden p-4 mt-2">

            <h2 className="text-5xl font-extrabold font-serif text-black pb-4">Let's talk!</h2>

            <div className="flex flex-row p-2 gap-2 mb-4 w-full border-2 border-black rounded-lg bg-amber-100">
                <div className="flex justify-center">
                    <img src={Github} alt="Github Icon" className="h-40 w-40" />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="p-2">
                     <h2 className="font-extrabold font-serif text-black ">Personal: </h2>
                     <a href="" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://github.com/2022310033
                     </a>
                    </div>

                    <div className="p-2">
                    <h2 className="font-extrabold font-serif text-black ">Internship: </h2>
                     <a href="" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://github.com/2022310033
                     </a>
                     </div>
                </div>
            </div>

            <div className="flex flex-row p-2 gap-2 mb-4 w-full border-2 border-black rounded-lg bg-amber-100">
                <div className="flex justify-center">
                    <img src={LinkedIn} alt="LinkedIn Icon" className="h-40 w-40" />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="p-2">
                     <h2 className="font-extrabold font-serif text-black ">Personal: </h2>
                     <a href="" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://www.linkedin.com/in/gericconcon
                     </a>
                    </div>
                </div>
            </div>
 
            <div className="flex flex-row p-2 gap-2 mb-4 w-full border-2 border-black rounded-lg bg-amber-100">
                <div className="flex justify-center">
                    <img src={Gmail} alt="Gmail Icon" className="h-40 w-40" />
                </div>
                <div className="flex flex-1 flex-col justify-center">
                    <div className="p-2">
                     <h2 className="font-extrabold font-serif text-black ">Personal: </h2>
                     <a href="" className="text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://www.gmail.com/in/gericconcon
                     </a>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}