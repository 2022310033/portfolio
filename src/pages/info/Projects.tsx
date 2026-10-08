import ProjectCard from "./ProjectCard";

import Att_1 from "/projects/attendance_tracker/at_1.png";
import Att_2 from "/projects/attendance_tracker/at_2.png";
import Att_3 from "/projects/attendance_tracker/at_3.png";
import Att_4 from "/projects/attendance_tracker/at_4.png";
import Att_5 from "/projects/attendance_tracker/at_5.png";

import J1 from "/projects/jira/j1.png";
import J2 from "/projects/jira/j2.png";
import J3 from "/projects/jira/j3.png";
import J4 from "/projects/jira/j4.png";
import J5 from "/projects/jira/j5.png";

import Q1 from "/projects/quiz_app/q1.png";
import Q2 from "/projects/quiz_app/q2.png";
import Q3 from "/projects/quiz_app/q3.png";
import Q4 from "/projects/quiz_app/q4.png";

import T1 from "/projects/thesis/t1.png";
import T2 from "/projects/thesis/t2.png";
import T3 from "/projects/thesis/t3.png";
import T4 from "/projects/thesis/t4.png";
import T5 from "/projects/thesis/t5.png";

export default function Projects() {

    const languages = ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C++", "Java", "ReactJS", "Laravel", "Tailwind and Bootstrap"];
    
    const projects = [
        {
            images: [
                { src: T1, alt: "Thesis project sign-in screen" },
                { src: T2, alt: "Thesis project OCR review and application confirmation screen" },
                { src: T3, alt: "Thesis project eligible students ranking screen" },
                { src: T4, alt: "Thesis project grade management screen" },
                { src: T5, alt: "Thesis project class management screen" },
            ],
            title: "Thesis Project",
            description: "A web-based student and class management system featuring grade tracking, OCR-assisted application review, student rankings, and class management.",
        },
        {
            images: [
                { src: Att_1, alt: "Attendance tracker image 1" },
                { src: Att_2, alt: "Attendance tracker image 2" },
                { src: Att_3, alt: "Attendance tracker image 3" },
                { src: Att_4, alt: "Attendance tracker image 4" },
                { src: Att_5, alt: "Attendance tracker image 5" },
            ],
            title: "Attendance Tracker",
            description: "Attendance tracker is a web application written in Laravel. It is one of my outputs during internship, it automates attendance via QR code attendance generation which can be scanned by students for attendance. It also has data reports for tracking a specific students record."
        },
        {
            images: [
                { src: J1, alt: "Jira image 1" },
                { src: J2, alt: "Jira image 2" },
                { src: J3, alt: "Jira image 3" },
                { src: J4, alt: "Jira image 4" },
                { src: J5, alt: "Jira image 5" },
                
            ],
            title: "Task Tracker",
            description: "This is also a requirement project during my internship. It is written in ReactJS (front-end) and Laravel/Lumen(back-end). It is a task delegation web app where you can add clients and client projects. These projects can be delegated with created teams and indiviuals. Inside the projects live the task delegation which can be done via drag and drop.",
        },

        {
            images: [
                { src: Q1, alt: "Quiz app image 1" },
                { src: Q2, alt: "Quiz app image 2" },
                { src: Q3, alt: "Quiz app image 3" },
                { src: Q4, alt: "Quiz app image 4" },
            ],
            title: "Quiz App",
            description: "A web app written in ReactJS with Google Firebase backend. It has a pdf upload to input quiz, take the quiz, and track results. It also has a feed tab to view the questions and answers in a social media format."
        },

        
    ];

    const scrollbarStyle = [
        "[scrollbar-width:thin]",
        "[&::-webkit-scrollbar]:w-1.5",
        "[&::-webkit-scrollbar-track]:rounded-full",
        "[&::-webkit-scrollbar-track]:bg-transparent",
        "[&::-webkit-scrollbar-thumb]:rounded-full",
        "[&::-webkit-scrollbar-thumb]:bg-gray-400",
        "hover:[&::-webkit-scrollbar-thumb]:bg-gray-600",
    ].join(" ");





    return(
    <>
<div className="mt-1 flex min-h-0 flex-1 flex-col items-center justify-start w-full p-3">


    <div className="flex shrink-0 flex-col justify-start w-full">

                <h2 className="font-extrabold font-serif text-gray-700 ">CODING PROFICIENCY</h2>
                
                <div className="mt-3 flex flex-wrap gap-2">
                    {languages.map((language) => (
                        <div
                            key={language}
                            className="rounded-lg border-2 border-gray-700 bg-amber-100 px-2 py-1.5 text-xs font-semibold text-gray-700 select-none transition-colors duration-150 hover:bg-gray-700 hover:text-amber-100 sm:px-4 sm:py-2 sm:text-sm">
                            {language}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="my-4 h-[0.100rem] w-[98%] bg-gray-700" />



            <div className={`flex min-h-0 flex-1 flex-col justify-start pr-2 w-full overflow-y-auto ${scrollbarStyle}`}>

                <h2 className="font-extrabold font-serif text-gray-700 ">PROJECTS</h2>

                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        images={project.images}
                        title={project.title}
                        description={project.description}
                    />
                ))}
                
            </div>

        </div>
    </>
    )
}