"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
    "/projects/dcs/21.jpg",
    "/projects/dcs/13.jpg",
    "/projects/dcs/14.jpg",
    "/projects/dcs/16.jpg",
    "/projects/dcs/17.jpg",
    "/projects/dcs/18.jpg",
    "/projects/dcs/19.jpg",
    "/projects/dcs/20.jpg",
    "/projects/dcs/12.jpg",
];

function ImageSlider({ images }: { images: string[] }) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrent((i) => (i + 1) % images.length);

    return (
        <div className="relative w-full max-w-5xl mx-auto my-10">
            <div className="relative overflow-hidden rounded-lg bg-gray-50 aspect-video flex items-center justify-center border border-border">
                <Image
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    fill
                    className="object-contain transition-opacity duration-300"
                    priority
                />
            </div>

            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-border rounded-full p-2 shadow-sm transition"
                aria-label="Previous"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-border rounded-full p-2 shadow-sm transition"
                aria-label="Next"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="flex justify-center gap-2 mt-5">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all ${i === current ? "bg-ink w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function ExperiencePage() {
    const techStack = [
        "Next.js",
        "Golang",
        "Gin Framework",
        "PostgreSQL",
        "RESTful API",
        "Swagger",
        "Docker",
        "Git",
    ];

    return (
        <div className="min-h-screen  pb-12 lg:pt-10">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12  lg:gap-2 flex flex-col ">
                <div className="mt-3">
                    <h4 className="font-bold text-3xl">Software Developer Intern</h4>
                    <p className="text-gray-700 text-lg">@Datapro Computer Systems Co., Ltd. | Bangkok, Thailand </p>
                    <p className="text-gray-500 text-lg">April – June 2025 · 3 months </p>
                </div>

                <div className="">
                    <ImageSlider images={images} />
                </div>
                <div className="max-w-2lg mx-auto flex flex-col gap-7 shawdow-sm">

                    <div>
                        <h4 className="font-medium text-base lg:text-lg">Overview</h4>
                        <p className="text-gray-700 text-xs lg:text-base"> Transform ระบบประกันภัย TPA จากสถาปัตยกรรม Legacy สู่ Modern Full-Stack Platform</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="font-medium text-base lg:text-lg">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1 ">
                            {techStack.map((item, i) => (
                                <div key={i} className="bg-gray-200 text-white px-3 py-2    rounded-md flex items-center whitespace-nowrap">
                                    <p className="text-xs lg:text-base text-black">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium text-base lg:text-lg">Responsibilities</h4>
                        <div className=" border-t border-border">
                            {[
                                {
                                    "num": "01",
                                    "title": "Incident Submodule Development",
                                    "desc": "พัฒนาและดูแลระบบ Full-Stack Internal Web Application (Submodule Incident) ให้กับ BlueVenture Group ด้วย Next.js, Golang (Gin) และ MS SQL Server เพื่อสนับสนุนงานหลักด้าน TPA และธุรกิจประกันภัย"
                                },
                                {
                                    "num": "02",
                                    "title": "API Documentation & Testing",
                                    "desc": "ออกแบบและวางระบบ Data Validation ทั้งฝั่ง Frontend และ Backend เพื่อลดความผิดพลาดของข้อมูล พร้อมทั้งจัดทำ API Documentation ด้วย Swagger ช่วยให้การเชื่อมต่อระหว่างบริการต่าง ๆ มีประสิทธิภาพ"
                                },
                                {
                                    "num": "03",
                                    "title": "Internal Team Workshop",
                                    "desc": "ร่วมทำงานในทีมแบบ Agile/Scrum เพื่อส่งมอบฟีเจอร์ต่าง ๆ เข้าร่วมการวางแผนสปรินต์ ประชุมอัปเดตงานประจำวัน รีวิวโค้ด รวมถึงจัด Workshop ภายในทีมเกี่ยวกับหลักการทำงานของ Gin Framework, การออกแบบ RESTful APIs และการใช้งาน Validator V10"
                                },
                                {
                                    num: "04",
                                    title: "Internal Team Workshop",
                                    desc: "Workshop ภายในทีมเกี่ยวกับหลักการทำงานของ Gin Framework การออกแบบ RESTful APIs และการใช้งาน Validator V10",
                                },
                            ].map((item) => (
                                <div
                                    key={item.num}
                                    className="grid grid-cols-12 gap-6 py-6 border-b border-border group hover:bg-chip/50 transition-colors px-4 -mx-4 rounded-lg"
                                >
                                    <div className="col-span-12 md:col-span-2">
                                        <span className="text-2xl font-light text-[#00D4B4] font-mono">{item.num}</span>
                                    </div>
                                    <div className="col-span-12 md:col-span-10">
                                        <h4 className="font-bold text-ink mb-2 text-lg">{item.title}</h4>
                                        <p className="text-sm lg:text-base text-muted leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}