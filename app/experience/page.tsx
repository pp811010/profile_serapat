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

function CanvaEmbed({
    src,
    title,
    linkHref,
    linkLabel,
}: {
    src: string;
    title: string;
    linkHref: string;
    linkLabel: string;
}) {
    return (
        <div className="flex flex-col gap-2">
            <div
                className="relative w-full overflow-hidden rounded-md border border-gray-200 shadow-sm"
                style={{ paddingTop: "56.25%" }}
            >
                <iframe
                    loading="lazy"
                    title={title}
                    src={src}
                    allow="fullscreen"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full border-0"
                />
            </div>
            <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm text-gray-500 hover:text-gray-700 transition-colors underline underline-offset-2"
            >
                {linkLabel}
            </a>
        </div>
    );
}

function ImageSlider({ images }: { images: string[] }) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrent((i) => (i + 1) % images.length);

    return (
        <div className="relative w-full max-w-5xl mx-auto my-10">
            <div className="relative overflow-hidden rounded-md bg-gray-50 aspect-video flex items-center justify-center border border-gray-200">
                <Image
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-300 rounded-md p-2 shadow-sm transition-colors"
                aria-label="Previous"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-300 rounded-md p-2 shadow-sm transition-colors"
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
                        className={`h-1.5 rounded-full transition-all ${i === current ? "bg-gray-800 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
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
        "Go",
        "Gin Framework",
        "SQL Server",
        "MinIO",
        "RESTful API",
        "Swagger",
        "Docker",
        "Git",
    ];

    const responsibilities = [
        {
            num: "01",
            title: "Incident Submodule Development",
            desc: "พัฒนาระบบ Full-Stack Internal Web Application ให้กับ BlueVenture Group PCL. โดยรับผิดชอบ Submodule Incident แบบ Full-Stack (Frontend + Backend) จำนวน 1 Submodule และพัฒนาฝั่ง Backend เพิ่มเติมอีก 3 Submodule ด้วย Next.js, Go (Gin Framework), Microsoft SQL Server และ MinIO เพื่อสนับสนุน Workflow ของ TPA",
        },
        {
            num: "02",
            title: "Data Validation Design",
            desc: "ออกแบบและพัฒนาระบบตรวจสอบความถูกต้องของข้อมูล (Field-level Data Validation) ทั้งฝั่ง Frontend และ Backend เพื่อลดข้อผิดพลาดในการกรอกข้อมูลและเพิ่มความน่าเชื่อถือของระบบโดยรวม",
        },
        {
            num: "03",
            title: "API Documentation",
            desc: "จัดทำเอกสาร API สำหรับ RESTful APIs ด้วย Swagger ช่วยให้การทดสอบ endpoint ทำได้ง่ายขึ้น และช่วยให้การเชื่อมต่อระหว่างบริการต่าง ๆ เป็นไปอย่างราบรื่นมากขึ้น",
        },
        {
            num: "04",
            title: "Internal Team Workshop",
            desc: "จัดทำ Workshop ภายในทีมเพื่อสร้างความเข้าใจพื้นฐานด้านเทคนิคให้กับทีม BA, SA และ Tester โดยอธิบายหลักการทำงานของ Gin Framework แนวคิดการออกแบบ RESTful API และการใช้งาน Validator V10 ช่วยให้ทีมที่ไม่ได้เขียนโค้ดโดยตรงเข้าใจภาพรวมการทำงานของระบบได้ดีขึ้น และสื่อสารกับทีม Dev ได้อย่างมีประสิทธิภาพมากขึ้น",
            note: "ดูสไลด์ประกอบ Workshop ได้ในส่วน Presentations ด้านล่าง",
        },
        {
            num: "05",
            title: "Team Collaboration",
            desc: "ร่วมทำงานในทีม Cross-functional แบบ Agile/Scrum เพื่อส่งมอบฟีเจอร์ Full-Stack ที่ช่วยปรับปรุงกระบวนการทำงานภายใน โดยเข้าร่วมการวางแผนสปรินต์ ประชุมอัปเดตงานประจำวัน และรีวิวโค้ด",
        },
    ];

    return (
        <div className="min-h-screen bg-white pb-16 lg:pt-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-2">

                <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-semibold text-3xl text-gray-900 tracking-tight">
                        Software Developer Intern
                    </h4>
                    <p className="text-gray-600 text-lg mt-1">
                        Datapro Computer Systems Co., Ltd. &middot; Bangkok, Thailand
                    </p>
                    <p className="text-gray-500 text-base mt-0.5">
                        April – June 2025 &middot; 3 months
                    </p>
                </div>

                <ImageSlider images={images} />

                <div className="max-w-2xl mx-auto flex flex-col gap-10 w-full">

                    <div>
                        <h4 className="font-semibold text-base lg:text-lg text-gray-900 uppercase tracking-wide mb-2">
                            Overview
                        </h4>
                        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                            Transform Web Application จากสถาปัตยกรรม Legacy สู่ Modern Full-Stack Platform ให้กับ BlueVenture Group PCL บริษัท TPA และประกันภัย
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-base lg:text-lg text-gray-900 uppercase tracking-wide">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-md flex items-center whitespace-nowrap"
                                >
                                    <p className="text-xs lg:text-sm text-gray-800 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base lg:text-lg text-gray-900 uppercase tracking-wide mb-2">
                            Responsibilities
                        </h4>
                        <div className="border-t border-gray-200">
                            {responsibilities.map((item) => (
                                <div
                                    key={item.num}
                                    className="grid grid-cols-12 gap-4 py-6 border-b border-gray-200 px-1"
                                >
                                    <div className="col-span-12 md:col-span-1">
                                        <span className="text-base font-semibold text-gray-400 font-mono">
                                            {item.num}
                                        </span>
                                    </div>
                                    <div className="col-span-12 md:col-span-11">
                                        <h4 className="font-semibold text-gray-900 mb-1.5 text-base lg:text-lg">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        {"note" in item && item.note && (
                                            <p className="text-xs lg:text-sm text-gray-400 italic mt-2">
                                                {item.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="font-semibold text-base lg:text-lg text-gray-900 uppercase tracking-wide">
                            Presentations
                        </h4>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm lg:text-base font-medium text-gray-800">
                                Internal Team Workshop Slide
                            </p>
                            <CanvaEmbed
                                src="https://www.canva.com/design/DAGlGRbUH3c/oSNWDzyoDNznYd_5749D5A/view?embed"
                                title="Internal Team Workshop Presentation"
                                linkHref="https://www.canva.com/design/DAGlGRbUH3c/oSNWDzyoDNznYd_5749D5A/view?utm_content=DAGlGRbUH3c&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                                linkLabel="Black Red Movie Apps Presentation Template โดย ศิรพัชร รัตนพาไชย"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm lg:text-base font-medium text-gray-800">
                                Internship Report Presentation
                            </p>
                            <CanvaEmbed
                                src="https://www.canva.com/design/DAGpTfKkgjw/zcZYxrMvnY0ha7hT-uBfzA/view?embed"
                                title="Internship Report Presentation"
                                linkHref="https://www.canva.com/design/DAGpTfKkgjw/zcZYxrMvnY0ha7hT-uBfzA/view?utm_content=DAGpTfKkgjw&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                                linkLabel="Internship Report โดย ศิรพัชร รัตนพาไชย"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}