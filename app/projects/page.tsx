import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Chatdio AI Chatbot Generator Platform (Senior Project)",
    description: "Chatdio แพลตฟอร์มสร้างเเละจัดการ chatbot รูปแบบ Agentic Retrieval-Augmented Generation ",
    techs: ["Next.js","FastAPI","Agno Framework","PostgreSQL","pgvector","AWS S3","Tailwind CSS","Cohere Reranker","Embedded Model"],
    image: "/projects/chatdio/Home.jpg",
    role: "Full-Stack Dev",
    date: "Jan 2025",
    category: "Development"
  },
  {
    id: 2,
    title: "Filmfolio Movie Recommendation Platform",
    description: "พัฒนา FilmFolio แพลตฟอร์มที่ช่วยให้ผู้ใช้งานค้นพบภาพยนตร์ที่น่าสนใจผ่านข้อมูล รีวิว และคะแนนจากชุมชนผู้ชมในที่เดียว",
    techs: ["React","Node.js","Express.js","MongoDB Atlas","AWS EC2","AWS S3","AWS VPC","Elastic Load Balancer (ELB)"],
    image: "/projects/filmfolio/hero.jpg",
    role: "Frontend Developer",
    date: "Dec 2024",
    category: "Development"
  },
  {
    id: 3,
    title: "Cryptocurrency Trading Simulator Platform",
    description: "BitX เป็นแพลตฟอร์มจำลองการซื้อขาย Cryptocurrency",
    techs: ["Next.js","Tailwind CSS","Shadcn","Prisma.io","Supabase","Clerk","CoinGecko API","Stripe API"],
    image: "/projects/bitx/hero.png",
    role: "Full-Stack Dev",
    date: "Nov 2024",
    category: "Product"
  },
  {
    id: 4,
    title: "MuMood Review Your Vibe, Discover Your Sound",
    description: "MuMood แพลตฟอร์ม Community แลกเปลี่ยนความคิดเห็นเกี่ยวกับเพลงได้อย่างเต้มที่",
    techs: ["Flutter","Dart","FastAPI","Python","PostgreSQL","SQLAlchemy","Pydantic","Spotify API","Deezer API"],
    image: "/projects/mumood/hero.jpg",
    role: "Full-Stack Dev",
    date: "Oct 2024",
    category: "Development"
  },
  {
    id: 5,
    title: "Expert Connect",
    description: "Expert Connect เป็นแพลตฟอร์มที่เชื่อมโยงผู้ถามกับผู้เชี่ยวชาญ",
    techs: ["Next.js","Go","PostgreSQL","AWS ECS Fargate","AWS RDS","AWS S3","AWS ALB","AWS WAF","GitHub Actions"],
    image: "/projects/expert-connect/hero.jpg",
    role: "Full-Stack Dev",
    date: "Sep 2024",
    category: "Development"
  },
  {
    id: 6,
    title: "Sport Management System",
    description: "ระบบบริหารจัดการสนามกีฬาและอุปกรณ์ภายในมหาวิทยาลัย",
    techs: ["HTML","Tailwind CSS","JavaScript","Django","PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop",
    role: "Full-Stack Dev",
    date: "Aug 2024",
    category: "Product"
  },
  {
    id: 7,
    title: "Omakase Resturan Management System",
    description: "ระบบจัดการร้านอาหาร Omakase ครอบคลุมการจองโต๊ะ การสั่งอาหาร และการบริหารภายในร้าน",
    techs: ["HTML","CSS","JavaScript","Tailwind CSS","Bootstrap 5","Chart.js","PHP","SQLite"],
    image: "/projects/omakase/hero.jpg",
    role: "Full-Stack Dev",
    date: "Jul 2024",
    category: "Development"
  },
  {
    id: 8,
    title: "Su Clothes - Clothing Store Management System",
    description: "Desktop Application สำหรับจัดการร้านค้าเสื้อผ้า ประยุกต์ใช้หลักการ OOP",
    techs: ["Java","Object-Oriented Programming (OOP)","Java Swing"],
    image: "/projects/suclothes/hero.jpg",
    role: "Java Developer",
    date: "Jun 2024",
    category: "Design"
  },
];

export default function ProjectsPage() {
    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col ">
            <div className="max-w-[1400px] mx-auto flex flex-col flex-1 w-full mt-10">

                <div className=" px-8 lg:px-14 flex-shrink-0  lg:mb-14 text-center flex items-center justify-center gap-2">
                    <h1 className="text-3xl font-medium ">Projects </h1>
                    <h1 className="text-xs font-bold px-5 py-1 rounded-xl bg-[#FF5A36] text-white">{projectsData.length} works</h1>
                </div>
                
                <div className="flex flex-col items-start md:grid md:grid-cols-2 lg:grid-cols-4  flex-1 gap-6 pb-6 ">
                    {projectsData.map((item, i) => (
                        <Link key={i} href={`/projects/${item.id}`} className="cursor-pointer bg-white min-w-[30%]  p-6 rounded-lg border-1 border-gray-100 hover:border-gray-300 transition-colors group">
                            <div>
                        
                            {/* Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-[2px] h-[25px] bg-black group-hover:bg-gray-400 transition-colors"></div>
                                <h1 className="text-lg font-medium text-black">{item.title}</h1>
                            </div>

                            {/* Image */}
                            <div className="mb-6 rounded-lg overflow-hidden">
                                <Image 
                                    src={item.image} 
                                    alt={item.title}
                                    width={500} 
                                    height={300} 
                                    className="w-full h-60 object-contain group-hover:scale-105 transition-transform duration-500"  
                                />
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2">
                                {item.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.techs.map((tech, idx) => (
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
                                    <span className="text-xs text-gray-600">{item.role}</span>
                                </div>
                                <span className="text-xs text-gray-400">{item.date}</span>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}