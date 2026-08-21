import { useEffect, useRef, useState } from "react";
import projectsIcon from '/svg/folder.svg';
import personalIcon from '/svg/personal.svg';
import contactIcon from '/svg/contact.svg';
import Personal from "./info/Personal";
import Projects from "./info/Projects";

export default function Information() {

    const [open, setOpen] = useState("");
    const [position, setPosition] = useState({ x: 80, y: 80 });
    const [dragging, setDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    
    const parentRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        const frame = window.requestAnimationFrame(() => {
            const parent = parentRef.current;
            const modal = modalRef.current;

            if (!parent || !modal) return;

            const parentWidth = parent.clientWidth;
            const parentHeight = parent.clientHeight;
            const modalWidth = modal.offsetWidth;
            const modalHeight = modal.offsetHeight;

            setPosition({
                x: Math.max(20, (parentWidth - modalWidth) / 2),
                y: Math.max(20, (parentHeight - modalHeight) / 2),
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [open]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!dragging) return;
            setPosition({
                x: event.clientX - dragOffset.current.x,
                y: event.clientY - dragOffset.current.y,
            });
        };

        const handleMouseUp = () => {
            setDragging(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dragging]);




    return(

        <div ref={parentRef} className="relative flex-1 self-stretch w-full h-full flex items-center justify-center px-4 py-6 bg-[#98c1d9] gap-4">
            
            
            <div onClick={() => setOpen("Personal")} className="group flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-amber-50 transition-shadow duration-150 hover:shadow-2xl">
                <img src={personalIcon} alt="Personal Icon" className="h-16 w-16 transition-transform duration-150 group-hover:scale-110" />
                <span className="font-serif transition-transform duration-150 group-hover:scale-105 group-hover:font-bold">Personal</span>
            </div>

            <div onClick={() => setOpen("Projects")} className="group flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-amber-50 transition-shadow duration-150 hover:shadow-2xl">
                <img src={projectsIcon} alt="Projects Icon" className="h-16 w-16 transition-transform duration-150 group-hover:scale-110" />
                <span className="font-serif transition-transform duration-150 group-hover:scale-105 group-hover:font-bold">Projects</span>
            </div>


            <div onClick={() => setOpen("Contact")} className="group flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl bg-amber-50 transition-shadow duration-150 hover:shadow-2xl">
                <img src={contactIcon} alt="Contact Icon" className="h-16 w-16 transition-transform duration-150 group-hover:scale-110" />
                <span className="font-serif transition-transform duration-150 group-hover:scale-105 group-hover:font-bold">Contact</span>
            </div>








            {open && (
                <div
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={() => setOpen("")}>
                        
                    <div
                        ref={modalRef}
                        className="flex flex-col absolute w-150 rounded-xl bg-amber-50 shadow-2xl overflow-hidden"
                        style={{
                            left: position.x,
                            top: position.y,
                        }}
                        onClick={(e) => e.stopPropagation()}>

                        <div
                            className="flex h-8 cursor-move items-center rounded-t-xl bg-[#293241] px-4 font-bold text-white select-none"
                            onMouseDown={(event) => {
                                setDragging(true);
                                dragOffset.current = {
                                    x: event.clientX - position.x,
                                    y: event.clientY - position.y,
                                };}}>
                            {open}
                        </div>

                        {open === "Personal" && (
                            <Personal />
                        )}

                        {open === "Projects" && (
                            <Projects />   
                        )}

                        {open === "Contact" && (
                            <p className="mt-2 text-gray-700">
                                Contact information placeholder. Add your email, social links, or contact details here.
                            </p>
                        )}


                    </div>
                    
                </div>
            )}

        </div>
    )
}
