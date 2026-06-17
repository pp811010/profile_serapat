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
                        className={`h-1.5 rounded-full transition-all ${
                            i === current ? "bg-ink w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
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
        "React",
        "TypeScript",
        "Golang",
        "Gin Framework",
        "PostgreSQL",
        "RESTful API",
        "Swagger",
        "Docker",
        "Git",
    ];

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

               

                {/* ===== Header ===== */}
                <header className="pb-8 border-b border-border mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                        <div className="flex-1">
                            <p className="text-xs font-semibold text-black uppercase tracking-widest mb-3">
                                Work Experience
                            </p>
                            <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-2">
                                Software Developer Intern
                            </h1>
                            <h2 className="text-xl sm:text-2xl font-medium text-muted mt-2">
                                Datapro Computer Systems Co., Ltd.
                            </h2>

                            <div className="flex flex-wrap gap-5 mt-6">
                                <div className="flex items-center gap-2 text-sm text-muted">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>April – June 2002 · 3 months</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Bangkok, Thailand</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <div className="relative w-32 h-32 bg-white border border-border rounded-lg p-4">
                                <Image
                                    src="https://services.superresume.com/Image/?img=https://static.jobtopgun.com/company_image/3/4616/logo_com_job/j4616.gif&w=291&h=132"
                                    alt="Datapro Computer Systems Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* ===== Image Slider ===== */}
                <ImageSlider images={images} />

                {/* ===== Overview & Tech Stack ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Overview */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-md bg-ink flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-ink">Overview</h3>
                        </div>
                        <p className="text-base leading-relaxed text-muted pl-11">
                            Transform ระบบประกันภัย TPA จากสถาปัตยกรรม Legacy สู่ Modern Full-Stack Platform
                            ด้วย <span className="font-semibold text-ink">Next.js</span> และ <span className="font-semibold text-ink">Golang (Gin Framework)</span> เพื่อยกระดับประสิทธิภาพ ความเสถียร
                            และความสามารถในการรองรับการขยายตัวของระบบในระดับองค์กร รองรับเทคโนโลยีใหม่ๆ
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-md bg-ink flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-ink">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-11">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="inline-block bg-chip border border-border text-ink text-xs font-medium px-3 py-1.5 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ===== Responsibilities ===== */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-md bg-ink flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-ink">Key Responsibilities</h3>
                    </div>

                    <div className="space-y-0 border-t border-border">
                        {[
                            {
                                num: "01",
                                title: "Incident Submodule Development",
                                desc: "พัฒนา Submodule Incident สำหรับจัดการข้อมูลเหตุการณ์การเคลมประกัน การรักษาพยาบาล และข้อมูลที่เกี่ยวข้อง โดยรับผิดชอบทั้งส่วน Frontend และ Backend",
                            },
                            {
                                num: "02",
                                title: "API Documentation & Testing",
                                desc: "จัดทำ API Documentation ด้วย Swagger พร้อมทดสอบและปรับปรุง RESTful APIs ให้รองรับ CRUD และการทำ validation data",
                            },
                            {
                                num: "03",
                                title: "Internal Team Workshop",
                                desc: "Workshop ภายในทีมเกี่ยวกับหลักการทำงานของ Gin Framework การออกแบบ RESTful APIs และการใช้งาน Validator V10",
                            },
                        ].map((item) => (
                            <div
                                key={item.num}
                                className="grid grid-cols-12 gap-6 py-6 border-b border-border group hover:bg-chip/50 transition-colors px-4 -mx-4 rounded-lg"
                            >
                                <div className="col-span-12 md:col-span-2">
                                    <span className="text-2xl font-light text-accent font-mono">{item.num}</span>
                                </div>
                                <div className="col-span-12 md:col-span-10">
                                    <h4 className="font-bold text-ink mb-2 text-base">{item.title}</h4>
                                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}