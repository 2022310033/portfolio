import { useEffect, useRef, useState } from "react";
import projectsIcon from '/svg/folder.svg';
import personalIcon from '/svg/personal.svg';
import contactIcon from '/svg/contact.svg';
import Personal from "./info/Personal";
import Projects from "./info/Projects";
import Contact from "./contact/Contact";

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
                x: Math.max(8, (parentWidth - modalWidth) / 2),
                y: Math.max(8, (parentHeight - modalHeight) / 2),
            });
        });

        return () => window.cancelAnimationFrame(frame);
    }, [open]);

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            if (!dragging) return;
            const parent = parentRef.current;
            const modal = modalRef.current;
            if (!parent || !modal) return;

            const bounds = parent.getBoundingClientRect();
            const maxX = Math.max(8, parent.clientWidth - modal.offsetWidth - 8);
            const maxY = Math.max(8, parent.clientHeight - modal.offsetHeight - 8);
            setPosition({
                x: Math.min(maxX, Math.max(8, event.clientX - bounds.left - dragOffset.current.x)),
                y: Math.min(maxY, Math.max(8, event.clientY - bounds.top - dragOffset.current.y)),
            });
        };

        const handleMouseUp = () => {
            setDragging(false);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handleMouseUp);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handleMouseUp);
        };
    }, [dragging]);




    return(

        <div ref={parentRef} className="relative flex min-h-0 flex-1 self-stretch w-full flex-nowrap items-center justify-center gap-2 overflow-y-auto bg-[#98c1d9] px-4 py-4 sm:gap-4 sm:py-6">
            
            
            <button type="button" onClick={() => setOpen("Personal")} className="group flex h-auto aspect-square w-[clamp(3.5rem,20vw,10rem)] shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl bg-amber-50 transition-shadow duration-150 hover:shadow-2xl sm:w-40">
                <img src={personalIcon} alt="" className="h-[clamp(1.75rem,9vw,4rem)] w-[clamp(1.75rem,9vw,4rem)] transition-transform duration-150 group-hover:scale-110 sm:h-16 sm:w-16" />
                <span className="font-serif transition-transform duration-150 group-hover:scale-105 group-hover:font-bold">Personal</span>
            </button>

            <button type="button" onClick={() => setOpen("Projects")} className="group flex h-auto aspect-square w-[clamp(3.5rem,20vw,10rem)] shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl bg-amber-50 transition-shadow duration-150 hover:shadow-2xl sm:w-40">
                <img src={projectsIcon} alt="" className="h-[clamp(1.75rem,9vw,4rem)] w-[clamp(1.75rem,9vw,4rem)] transition-transform duration-150 group-hover:scale-110 sm:h-16 sm:w-16" />
                <span className="font-serif transition-transform duration-150 group-hover:scale-105 group-hover:font-bold">Projects</span>
            </button>


            <button type="button" onClick={() => setOpen("Contact")} className="group flex h-auto aspect-square w-[clamp(3.5rem,20vw,10rem)] shrink-0 cursor-pointer flex-col items-center justify-center rounded-xl bg-amber-50 transition-shadow duration-150 hover:shadow-2xl sm:w-40">
                <img src={contactIcon} alt="" className="h-[clamp(1.75rem,9vw,4rem)] w-[clamp(1.75rem,9vw,4rem)] transition-transform duration-150 group-hover:scale-110 sm:h-16 sm:w-16" />
                <span className="font-serif transition-transform duration-150 group-hover:scale-105 group-hover:font-bold">Contact</span>
            </button>








            {open && (
                <div
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/40"
                    onClick={() => setOpen("")}>
                        
                    <div
                        ref={modalRef}
                        className="absolute flex h-[calc(100%-2.5rem)] max-h-[calc(100%-2.5rem)] w-[calc(100%-3rem)] max-w-150 flex-col overflow-hidden rounded-xl bg-amber-50 shadow-2xl"
                        style={{
                            left: position.x,
                            top: position.y,
                        }}
                        onClick={(e) => e.stopPropagation()}>

                        <div
                            className="flex h-8 shrink-0 cursor-move touch-none items-center rounded-t-xl bg-[#293241] px-4 font-bold text-white select-none"
                            onPointerDown={(event) => {
                                const bounds = parentRef.current?.getBoundingClientRect();
                                if (!bounds) return;
                                setDragging(true);
                                dragOffset.current = {
                                    x: event.clientX - bounds.left - position.x,
                                    y: event.clientY - bounds.top - position.y,
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
                            <Contact />
                        )}


                    </div>
                    
                </div>
            )}

        </div>
    )
}
