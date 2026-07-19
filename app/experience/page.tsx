import ImageCarousel from "@/components/ui/ImageCarousel";

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

const slides = images.map((image, i) => ({ title: `Screenshot ${i + 1}`, image }));

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
        <div className="bg-chip border border-border rounded-2xl p-5">
            <div
                className="relative w-full overflow-hidden rounded-lg border border-border"
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
                className="inline-block mt-3 text-xs text-muted hover:text-ink transition-colors underline underline-offset-2"
            >
                {linkLabel}
            </a>
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
            desc: "ออกแบบและพัฒนาระบบตรวจสอบความถูกต้องของข้อมูล (Data Validation) ทั้งฝั่ง Frontend และ Backend เพื่อลดข้อผิดพลาดในการกรอกข้อมูลและเพิ่มความน่าเชื่อถือของระบบโดยรวม",
        },
        {
            num: "03",
            title: "API Documentation",
            desc: "จัดทำเอกสาร API สำหรับ RESTful APIs ด้วย Swagger ช่วยให้การทดสอบ endpoint ทำได้ง่ายขึ้น พร้อมเชื่อมต่อกับ Frontend",
        },
        {
            num: "04",
            title: "Internal Team Workshop",
            desc: "จัดทำ Workshop ภายในทีมเพื่อสร้างความเข้าใจพื้นฐานด้านเทคนิคให้กับทีม BA, SA และ Tester โดยอธิบายหลักการทำงานของ Gin Framework แนวคิดการออกแบบ RESTful API และการใช้งาน Validator V10 ช่วยให้ทีมที่ไม่ได้เขียนโค้ดโดยตรงเข้าใจภาพรวมการทำงานของระบบได้ดีขึ้น",
            note: "ดูสไลด์ประกอบ Workshop ได้ในส่วน Presentations ด้านล่าง",
        },
        {
            num: "05",
            title: "Team Collaboration",
            desc: "ร่วมทำงานในทีม Cross-functional แบบ Agile/Scrum เพื่อส่งมอบฟีเจอร์ Full-Stack ที่ช่วยปรับปรุงกระบวนการทำงานภายใน",
        },
    ];

    return (
        <main className="p-6 md:p-10 lg:p-14 min-h-screen bg-white text-ink font-sans antialiased relative z-10">
            <div className="max-w-4xl mx-auto">


                <div className="mb-8">
                    <ImageCarousel slides={slides} />
                </div>


                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center shrink-0">
                            <span className="text-white font-bold text-sm">DCS</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-ink">Software Developer Intern</h1>
                            <p className="text-sm text-muted">Datapro Computer Systems Co., Ltd. · Bangkok, Thailand</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6 text-xs">
                        <span className="bg-chip border border-border text-ink font-medium px-3 py-1.5 rounded-lg">
                            April – June 2025
                        </span>
                        <span className="bg-chip border border-border text-ink font-medium px-3 py-1.5 rounded-lg">
                            3 months
                        </span>
                        <span className="bg-chip border border-border text-ink font-medium px-3 py-1.5 rounded-lg">
                            💻 Internship
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {techStack.map((item, i) => (
                            <span
                                key={i}
                                className="inline-block bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="mb-10">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">Overview</h2>
                    <p className="text-sm text-muted leading-relaxed">
                        Transform Web Application จากสถาปัตยกรรม Legacy สู่ Modern Full-Stack Platform ให้กับ BlueVenture Group PCL บริษัท TPA และประกันภัย
                    </p>
                </div>


                <div className="mb-10">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Responsibilities</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {responsibilities.map((item) => (
                            <div
                                key={item.num}
                                className="bg-chip border border-border rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-xs font-semibold text-accent font-mono mt-0.5 shrink-0">
                                        {item.num}
                                    </span>
                                    <div>
                                        <h3 className="text-sm font-bold text-ink mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                                        {"note" in item && item.note && (
                                            <p className="text-xs text-muted italic mt-2">{item.note}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mb-4">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Presentations</h2>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-ink">Internal Team Workshop Slide</p>
                            <CanvaEmbed
                                src="https://www.canva.com/design/DAGlGRbUH3c/oSNWDzyoDNznYd_5749D5A/view?embed"
                                title="Internal Team Workshop Presentation"
                                linkHref="https://www.canva.com/design/DAGlGRbUH3c/oSNWDzyoDNznYd_5749D5A/view?utm_content=DAGlGRbUH3c&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                                linkLabel="Black Red Movie Apps Presentation Template โดย ศิรพัชร รัตนพาไชย"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-ink">Internship Report Presentation</p>
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
        </main>
    );
}