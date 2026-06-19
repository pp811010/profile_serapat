import Link from "next/link";
import Image from "next/image";
const techs = [
    "Next.js", "Go", "SQL Server"
];
export default function Experience() {
    return (
        <section id="experience" className="bg-[#0A1326] border-t-1 border-[#6D82A2]  lg:py-10 px-6 lg:pb-8 lg:pt-20 ">
            <div className="max-w-6xl mx-auto pt-20 lg:pt-0 ">
                <div className="flex flex-col lg:items-center gap-4 mb-6">
                    <h2 className="font-medium text-4xl lg:text-5xl  text-white"> Work Experience</h2>
                    <p className="text-[#7289A6]  text-lg lg:text-xl mb-6">A collection of work experiences throughout my professional journey.</p>
                </div>
                <Link href={"/experience"} >
                    <div className="w-full lg:h-[550px] bg-[#0A1326] border-1 border-[#0F1B3B]  grid grid-cols-1 lg:grid-cols-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="lg:col-span-2  h-full flex">
                            <div className="flex flex-col items-start justify-center p-10 ">
                                <h3 className="text-xl lg:text-2xl font-medium text-[#F4F4F6] mb-1">
                                    Software Developer Intern
                                </h3>
                                <p className="text-gray-600 text-md lg:text-xl mb-3">Datapro Computer Systems Co., Ltd</p>
                                <ul className="text-gray-600 text-sm mb-8">

                                    <li className="flex  items-start gap-2 text-base leading-relaxed">

                                        <span className="text-accent text-xl mt-0.5 ">●</span>
                                        Transform ระบบประกันภัย TPA จากสถาปัตยกรรม Legacy สู่ Modern Full-Stack Next.js และ Golang (Gin Framework)
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-1 ml-4">
                                    {techs.map((tech, index) => (
                                        <span key={index} className="text-white bg-gray-800 text-sm px-2 py-1 rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 h-full rounded-tr-xl rounded-br-xl bg-gradient-to-br from-[#1ec198] via-[#00d4ef] to-[#2563eb] p-10 flex items-center justify-center">
                            <Image
                                src="/internship_hero2.jpg"
                                alt=""
                                width={800}
                                height={600}
                                className="max-w-full h-auto rounded-xl shadow-2xl"
                            ></Image>
                        </div>

                    </div>
                </Link>
            </div>
        </section>
    );
}