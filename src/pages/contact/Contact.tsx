import Github from "/svg/github-icon.svg";
import LinkedIn from "/svg/linkedin-icon.svg";
import Gmail from "/svg/gmail-icon.svg";

export default function Contact() {
    return(
        <>
        <div className="mt-2 flex min-h-0 flex-1 flex-col items-center overflow-y-auto overflow-x-hidden p-3 sm:p-4">

            <h2 className="pb-4 font-serif text-3xl font-extrabold text-black sm:text-5xl">Let's talk!</h2>

            <div className="mb-4 flex w-full flex-col items-center gap-2 rounded-lg border-2 border-black bg-amber-100 p-2 sm:flex-row">
                <div className="flex shrink-0 justify-center">
                    <img src={Github} alt="Github Icon" className="h-16 w-16 sm:h-28 sm:w-28 lg:h-40 lg:w-40" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="p-2">
                     <h2 className="font-extrabold font-serif text-black ">Personal: </h2>
                     <a href="" className="break-all text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://github.com/2022310033
                     </a>
                    </div>

                    <div className="p-2">
                    <h2 className="font-extrabold font-serif text-black ">Internship: </h2>
                     <a href="" className="break-all text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://github.com/2022310033
                     </a>
                     </div>
                </div>
            </div>

            <div className="mb-4 flex w-full flex-col items-center gap-2 rounded-lg border-2 border-black bg-amber-100 p-2 sm:flex-row">
                <div className="flex shrink-0 justify-center">
                    <img src={LinkedIn} alt="LinkedIn Icon" className="h-16 w-16 sm:h-28 sm:w-28 lg:h-40 lg:w-40" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="p-2">
                     <h2 className="font-extrabold font-serif text-black ">Personal: </h2>
                     <a href="" className="break-all text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://www.linkedin.com/in/gericconcon
                     </a>
                    </div>
                </div>
            </div>
 
            <div className="mb-4 flex w-full flex-col items-center gap-2 rounded-lg border-2 border-black bg-amber-100 p-2 sm:flex-row">
                <div className="flex shrink-0 justify-center">
                    <img src={Gmail} alt="Gmail Icon" className="h-16 w-16 sm:h-28 sm:w-28 lg:h-40 lg:w-40" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="p-2">
                     <h2 className="font-extrabold font-serif text-black ">Personal: </h2>
                     <a href="" className="break-all text-black hover:underline" target="_blank" rel="noopener noreferrer">
                         https://www.gmail.com/in/gericconcon
                     </a>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}