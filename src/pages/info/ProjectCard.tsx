import { useState } from "react";

type ProjectImage = {
    src: string;
    alt: string;
};

type ProjectCardProps = {
    images: ProjectImage[];
    title: string;
    description?: string;
};

export default function ProjectCard({ images, title, description }: ProjectCardProps) {
    const safeImages = images.length > 0 ? images : [{ src: "/icons/pixel.png", alt: "Project preview" }];
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => {
        setActiveIndex((current) => (current === 0 ? safeImages.length - 1 : current - 1));
    };

    const goNext = () => {
        setActiveIndex((current) => (current === safeImages.length - 1 ? 0 : current + 1));
    };

    return(
        <div className="mt-2 mb-4 flex w-full flex-col rounded-xl border-2 border-gray-700 p-3">
            <div className="relative w-full overflow-hidden rounded-lg border-2 border-gray-700 bg-[#e0fbfc]">
                <img
                    src={safeImages[activeIndex].src}
                    alt={safeImages[activeIndex].alt}
                    className="h-52 w-full object-center"
                />

                {safeImages.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md border border-gray-700 bg-amber-100 px-2 py-1 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-700 hover:text-amber-100"
                            aria-label="Previous image"
                        >
                            {"<"}
                        </button>

                        <button
                            type="button"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-gray-700 bg-amber-100 px-2 py-1 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-700 hover:text-amber-100"
                            aria-label="Next image"
                        >
                           {">"}
                        </button>
                    </>
                )}
            </div>

            {safeImages.length > 1 && (
                <div className="mt-2 flex items-center justify-center gap-2">
                    {safeImages.map((image, index) => (
                        <button
                            type="button"
                            key={`${image.src}-${index}`}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2.5 w-2.5 rounded-full border border-gray-700 ${
                                index === activeIndex ? "bg-gray-700" : "bg-amber-100"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            <h3 className="mt-3 text-center font-serif text-base font-extrabold text-gray-700">
                {title}
            </h3>

            {description && (
                <p className="mt-1 text-center text-sm text-gray-700">
                    {description}
                </p>
            )}
        </div>
    )
}