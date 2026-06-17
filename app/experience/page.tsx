"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const images = [
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
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname]);

    const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrent((i) => (i + 1) % images.length);

    return (
        <div className="relative w-full max-w-4xl mx-auto my-10">

            <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-video flex items-center justify-center border border-gray-200">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-sm transition"
                aria-label="Previous"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

          
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-sm transition"
                aria-label="Next"
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="flex justify-center gap-2 mt-4">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 rounded-full transition-all ${
                            i === current ? "bg-gray-900 w-6" : "bg-gray-300 w-2"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function ExperiencePage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8 sm:py-16">
 
                <header className="pb-8 border-b border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                                Work Experience
                            </p>
                            <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 tracking-tight">
                                Software Developer Intern
                            </h1>
                            <h2 className="text-xl sm:text-2xl font-normal text-gray-700 mt-1">
                                Datapro Computer Systems Co., Ltd.
                            </h2>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="relative w-32 h-32 bg-white border border-gray-200 rounded-lg p-3">
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

                    <div className="flex flex-wrap gap-6 mt-6">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>April – June 2002 · 3 months</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Bangkok, Thailand</span>
                        </div>
                    </div>
                </header>

                {/* Image Slider */}
                <ImageSlider images={images} />

                {/* Description */}
                <section className="mb-10">
                    <h3 className="text-lg font-medium text-gray-900 uppercase  mb-3">
                        Overview
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700">
                        Transform ระบบประกันภัย TPA จากสถาปัตยกรรม Legacy สู่ Modern Full-Stack Platform
                        ด้วย Next.js และ Golang (Gin Framework) เพื่อยกระดับประสิทธิภาพ ความเสถียร
                        และความสามารถในการรองรับการขยายตัวของระบบในระดับองค์กร รองรับเทคโนโลยีใหม่ๆ
                    </p>
                </section>

                <section>
                    <h3 className="text-lg font-medium text-gray-900 uppercase  mb-4">
                        Responsibilities
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                            <span className="text-gray-400 mt-2">•</span>
                            <span>
                                พัฒนา Submodule Incident สำหรับจัดการข้อมูลเหตุการณ์การเคลมประกัน
                                การรักษาพยาบาล และข้อมูลที่เกี่ยวข้อง โดยรับผิดชอบทั้งส่วน Frontend และ Backend
                            </span>
                        </li>
                      
                        <li className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                            <span className="text-gray-400 mt-2">•</span>
                            <span>
                                จัดทำ API Documentation ด้วย Swagger พร้อมทดสอบและปรับปรุง RESTful APIs
                                ให้รองรับ CRUD และตรวจสอบข้อมูล (Validation) อย่างถูกต้อง
                            </span>
                        </li>
                        <li className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                            <span className="text-gray-400 mt-2">•</span>
                            <span>
                                Workshop ภายในทีมเกี่ยวกับหลักการทำงานของ Gin Framework
                                การออกแบบ RESTful APIs และการใช้งาน Validator V10
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}