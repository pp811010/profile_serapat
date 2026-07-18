import Image from "next/image";
import Link from "next/link";

interface Project {
    id: number | string;
    title: string;
    image: string;
    description: string;
    techs: string[];
    role: string;
    date: string;
}

export default function Card({ project}: { project: Project;}) {
    return (
        <Link
            href={`/projects/${project.id}`}
            className="cursor-pointer bg-white min-w-[30%] p-6 rounded-lg border-1 border-gray-100 hover:border-gray-300 transition-colors group"
        >
            <div>
                {/* Title */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-[2px] h-[25px] bg-black group-hover:bg-gray-400 transition-colors"></div>
                    <h1 className="text-lg font-medium text-black">{project.title}</h1>
                </div>

                {/* Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {project.techs.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer - Role & Date */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-xs text-gray-600">{project.role}</span>
                    </div>
                    <span className="text-xs text-gray-400">{project.date}</span>
                </div>
            </div>
        </Link>
    );
}