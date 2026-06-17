export interface Project {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  duration: string;
  role: string;
  col: number;
  status: string;
  liveUrl: string;
  repoUrl: string;
  description: string[];
  responsibilities: string[];
  highlights: string[];
  techStack: string[];
  screenshots: { title: string; description: string; image: string }[];
  features: {
    category: string;
    badge: string;
    icon: string;
    title: string;
    description: string;
  }[];
  actors: { emoji: string; role: string; description: string }[];
  platform?: "web" | "mobile";
  heroImage: string;
  screenshotCount: number;
  postedAt?: string;
  dateRange?: string;
}

export const projectsData: Record<string, Project> = {
  // 1. Chatdio
  "chatdio": {
    id: "1",
    title: "Chatdio (Senior Project)",
    subtitle: "AI Chatbot Generator Platform",
    author: "Serapat Ratanapachai",
    duration: "6 เดือน",
    role: "Full Stack Developer",
    status: "Completed",
    col: 2,
    liveUrl: "#",
    repoUrl: "https://github.com/siroratN/Chatdio.git",
    description: [
      "ในปัจจุบัน องค์กรและบริษัทหลายแห่งมีความต้องการที่จะมีระบบ Chatbot เป็นของตนเอง เพื่อเข้ามาช่วยแบ่งเบาภาระในเรื่องการตอบคำถามลูกค้า (Customer Support) หรือช่วยให้บุคลากรภายในองค์กรสามารถสืบค้นข้อเท็จจริงและเข้าถึงข้อมูลภายในองค์กรได้อย่างสะดวกรวดเร็ว อย่างไรก็ตาม แชทบอททั่วไปในท้องตลาดมักมีข้อจำกัดอย่างมากในการเข้าถึงข้อมูลที่เป็นความลับหรือข้อมูลเฉพาะทางภายในองค์กร อีกทั้งกระบวนการพัฒนาและติดตั้งระบบ AI ในลักษณะนี้ยังมีโครงสร้างที่ซับซ้อน ต้องใช้ทั้งงบราคาสูงและผู้เชี่ยวชาญเฉพาะทาง ทำให้องค์กรส่วนใหญ่เข้าไม่ถึงเทคโนโลยีนี้",
      "จากปัญหาดังกล่าว จึงเกิดเป็น Chatdio แพลตฟอร์มในรูปแบบ Agentic Retrieval-Augmented Generation (Agentic RAG) ที่พัฒนาขึ้นเพื่อทลายขีดจำกัดเดิม ๆ โดยเปิดโอกาสให้ผู้ใช้งานและองค์กรต่าง ๆ สามารถสร้างแชทบอท AI เฉพาะทางขึ้นมาใช้งานได้ด้วยตนเองอย่างง่ายดาย (No-Code/Low-Code AI Creation) โดยสามารถนำเข้าข้อมูลดิบของตนเองเพื่อใช้เป็นคลังความรู้ (Knowledge Base) หลักในการอ้างอิงและตอบคำถามได้อย่างแม่นยำและปลอดภัย",
    ],
    responsibilities: [
      "พัฒนา web application รวมถึง UI และ UX",
      "เชื่อมต่อ PostgreSQL และออกแบบและพัฒนา RESTful API ผ่าน FastAPI เพื่อสื่อสารระหว่าง Web Service และ AI Service",
      "พัฒนา PostgreSQL Agent รวมถึงการ Testing และปรับปรุงความถูกต้องของการตอบคำถามด้วย Text-to-SQL",
      "ประเมินประสิทธิภาพระบบด้วย Benchmark และ LLM as a Judge",
    ],
    highlights: [
      "Agentic RAG Engine พร้อม Reasoning Mode",
      "รองรับ Document, PostgreSQL, API Agent",
      "ระบบ Human Corrections ปรับปรุงความถูกต้อง",
      "รองรับหลาย LLM: GPT-4.1-mini, Gemini 2.5 Flash, DeepSeek V3.2",
      "Embed ผ่าน iframe หรือ Shared Link ได้ง่าย",
      "คะแนนความพึงพอใจผู้ใช้ 4.2-4.5 จาก 5",
    ],
    techStack: [
      "Next.js",
      "FastAPI",
      "Agno Framework",
      "PostgreSQL",
      "pgvector",
      "AWS S3",
      "Tailwind CSS",
      "Cohere Reranker",
      "Embedded Model",
    ],
    screenshots: [
      {
        title: "หน้าสร้างแชทบอท",
        description: "UI สำหรับกำหนดค่าแชทบอทแบบ No-Code",
        image: "/Projects/chatdio/Home.jpg",
      },
      {
        title: "หน้าแสดงเเชทบอททั้งหมด",
        description: "รองรับ PDF, DOCX, CSV, JSON และ OCR",
        image: "/Projects/chatdio/myChatbot2.jpg",
      },
      {
        title: "หน้า Test & Preview ",
        description: "แก้ไขคำตอบผิดพลาดเพื่อยกระดับความถูกต้อง",
        image: "/Projects/chatdio/Chat.jpg",
      },
      {
        title: "หน้า Custom Appearance Chatbot",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท",
        image: "/Projects/chatdio/apprea.jpg",
      },
      {
        title: "หน้า Dashborad ดูภาพรวมการทำงาน/ประวัติการสนทนาทั้งหมดของ Chatbot",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท",
        image: "/Projects/chatdio/Dashboard.jpg",
      },
      {
        title: "ส่วนของการดู Seesion ของ Chat",
        description: "ดูประวัติการสนทนาและแก้ไขคำตอบ",
        image: "/Projects/chatdio/chatSession.jpg",
      },
      {
        title: "ส่วนของการ Edit Answer Incorrect (History)",
        description: "ดูประวัติการสนทนาและแก้ไขคำตอบ",
        image: "/Projects/chatdio/editanswer.jpg",
      },
      {
        title: "ส่วนการเเสดงคำตอบที่ถูกเเก้ไขทั้งหมด (Human Correction)",
        description: "ดูประวัติการสนทนาและแก้ไขคำตอบ",
        image: "/Projects/chatdio/humuncorrection.jpg",
      },
      {
        title: "หน้า Custom Personality (1)",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท",
        image: "/Projects/chatdio/setting_general.jpg",
      },
      {
        title: "หน้า Custom Personality (2)",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (2)",
        image: "/Projects/chatdio/setting_general_2.jpg",
      },
      {
        title: "หน้า Custom Personality (3)",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (3)",
        image: "/Projects/chatdio/setting_general_3.jpg",
      },
      {
        title: "หน้า Custom Knowledge Base ทั้ง 3 Agent",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (3)",
        image: "/Projects/chatdio/knowlegth.jpg",
      },
      {
        title: "หน้า Deployment Web URL/Iframw",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (3)",
        image: "/Projects/chatdio/deployment.jpg",
      },
      {
        title: "หน้า Web URL Chatbot",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (3)",
        image: "/Projects/chatdio/weburl.jpg",
      },
      {
        title: "หน้า Implement Iframe เข้ากับ web application (1)",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (3)",
        image: "/Projects/chatdio/ifame_unactive.jpg",
      },
      {
        title: "หน้า Implement Iframe เข้ากับ web application (2)",
        description: "ปรับแต่งรูปลักษณ์ของแชทบอท (3)",
        image: "/Projects/chatdio/iframe_active.jpg",
      },
    ],
    features: [
      {
        category: "ฟีเจอร์หลัก",
        badge: "RAG",
        icon: "engine",
        title: "Agentic RAG Engine",
        description:
          "ระบบดึงข้อมูลและสร้างคำตอบอัจฉริยะ รองรับทั้ง Fast Mode (RAG) และ Reasoning Mode (Agentic RAG) พร้อม Reranker (Cohere)",
      },
      {
        category: "Data Sources",
        badge: "Multi-Agent",
        icon: "backend",
        title: "3 ประเภท Agent",
        description:
          "Document Agent (PDF, DOCX, TXT, CSV), PostgreSQL Agent (Text-to-SQL), และ API Agent (REST API ภายนอก) รองรับ OCR และ Reasoning",
      },
      {
        category: "Customization",
        badge: "No-Code",
        icon: "ui",
        title: "ปรับแต่งได้หลากหลาย",
        description:
          "เลือก LLM Model, กำหนด Personality, ปรับแต่ง UI (โทนสี, โลโก้) อัปโหลดไฟล์แล้วสร้างได้เลยโดยไม่ต้องเขียนโค้ด",
      },
      {
        category: "Quality",
        badge: "Human-in-loop",
        icon: "security",
        title: "Human Corrections",
        description:
          "ผู้สร้างสามารถตรวจสอบประวัติและแก้ไขคำตอบที่ผิดพลาด เพื่อยกระดับความถูกต้องของระบบให้ตอบคำถามครั้งต่อไปได้อย่างแม่นยำ",
      },
    ],
    actors: [
      {
        emoji: "🧑‍💼",
        role: "Bot Creator",
        description: "สร้างและจัดการแชทบอท",
      },
      {
        emoji: "💬",
        role: "End User",
        description: "สนทนากับแชทบอทผ่าน Web URL หรือ Iframe",
      },
    ],
    heroImage: "/projects/chatdio/Home.jpg",
    postedAt: "มิ.ย. 2025",
    screenshotCount: 20,
  },

  // 2. Filmfolio
  "filmfolio": {
    id: "2",
    title: "FilmFolio",
    subtitle: "เว็บแอปพลิเคชันสำหรับผู้ที่ชื่นชอบภาพยนตร์",
    author: "Serapat Ratanapachai",
    duration: "-",
    role: "Frontend Developer",
    col: 2,
    status: "Completed",
    liveUrl: "#",
    repoUrl: "https://github.com/DefinitelyNotJay/FilmFolio.git",
    description: [
      "ในปัจจุบันอุตสาหกรรมภาพยนตร์มีการขยายตัวอย่างรวดเร็ว และมีภาพยนตร์ออกฉายในแต่ละปีจำนวนมาก ทำให้การตัดสินใจเลือกดูภาพยนตร์สักเรื่องต้องพิจารณาหลายด้านเพื่อให้คุ้มค่า แต่ข้อมูลเกี่ยวกับภาพยนตร์และการรีวิวภาพยนตร์นั้นมักกระจัดกระจายและหาได้ยาก",
      "FilmFolio จึงเป็นเว็บแอปพลิเคชันที่พัฒนาขึ้นเพื่อรวบรวมข้อมูลเกี่ยวกับภาพยนตร์ การรับชมรีวิว และการเขียนรีวิวไว้ในที่เดียว เพื่อช่วยให้ผู้ใช้สามารถตัดสินใจก่อนชมภาพยนตร์ ค้นหาและอ่านความคิดเห็นได้อย่างสะดวกรวดเร็ว รวมถึงสามารถแสดงความคิดเห็นและให้คะแนนของตัวเองต่อภาพยนตร์เรื่องนั้นๆ ได้",
    ],
    responsibilities: [
      "ออกเเบบ UX/UI ในส่วนของ Movie Lover",
      "พัฒนาในส่วนของหน้า Home, Movie Detail",
    ],
    highlights: [
      "ระบบรีวิวและให้คะแนนภาพยนตร์ พร้อมประวัติการให้คะแนน",
      "ระบบค้นหาภาพยนตร์ตามประเภท (Genre)",
      "Dashboard สำหรับ Admin เพื่อจัดการข้อมูลหนัง ผู้ใช้ และดูสถิติต่างๆ",
      "ออกแบบสถาปัตยกรรมบน AWS (VPC, EC2, ELB, S3) เพื่อความยืดหยุ่นและปลอดภัย",
      "ใช้ MongoDB Atlas สำหรับฐานข้อมูล NoSQL ที่รองรับการขยายตัวและสำรองข้อมูลอัตโนมัติ",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "AWS EC2",
      "AWS S3",
      "AWS VPC",
      "Elastic Load Balancer (ELB)",
    ],
    screenshots: [
      {
        title: "หน้า Home ของลูกค้า",
        description: "หน้าแสดงรายการภาพยนตร์สำหรับผู้ใช้ทั่วไป",
        image: "/projects/filmfolio/Home.jpg",
      },
      {
        title: "หน้ารายละเอียดของหนัง",
        description: "หน้าแสดงข้อมูลภาพยนตร์และส่วนของการแสดงความคิดเห็น/ให้คะแนน",
        image: "/Projects/filmfolio/detail.jpg",
      },
      {
        title: "หน้าประวัติการให้คะแนน/รีวิว",
        description: "หน้าแสดงประวัติการให้คะแนนและรีวิวของผู้ใช้",
        image: "/Projects/filmfolio/review.jpg",
      },
      {
        title: "หน้า Admin จัดการภาพยนตร์",
        description: "หน้าสำหรับ Admin เพิ่ม แก้ไข และลบข้อมูลภาพยนตร์",
        image: "/Projects/filmfolio/all.jpg",
      },
      {
        title: "หน้า Admin จัดการรายละเอียดของหนัง",
        description: "หน้าสำหรับ Admin เพิ่ม แก้ไข และลบข้อมูลภาพยนตร์",
        image: "/Projects/filmfolio/crud.jpg",
      },
      {
        title: "หน้า Admin จัดการผู้ใช้",
        description: "หน้าสำหรับ Admin จัดการข้อมูลผู้ใช้ในระบบ",
        image: "/Projects/filmfolio/user.jpg",
      },
      {
        title: "หน้า Admin Dashboard",
        description: "หน้าแสดงข้อมูลหรือสถิติต่างๆ ในระบบ",
        image: "/Projects/filmfolio/result.jpg",
      },
    ],
    features: [
      {
        category: "User Feature",
        badge: "Review",
        icon: "star",
        title: "ระบบรีวิวและให้คะแนน",
        description:
          "ผู้ใช้สามารถเขียนรีวิว ให้คะแนน และดูลีวิวของคนอื่นๆ เพื่อประกอบการตัดสินใจก่อนชมภาพยนตร์",
      },
      {
        category: "User Feature",
        badge: "Search",
        icon: "search",
        title: "ค้นหาภาพยนตร์",
        description:
          "ระบบค้นหาภาพยนตร์ตามประเภท (Genre) เพื่อให้ผู้ใช้ค้นหาหนังที่สนใจได้อย่างรวดเร็ว",
      },
      {
        category: "Admin Feature",
        badge: "Management",
        icon: "cog",
        title: "จัดการข้อมูลและผู้ใช้",
        description:
          "ผู้ดูแลระบบสามารถเพิ่ม แก้ไข ลบข้อมูลภาพยนตร์ รวมถึงจัดการความคิดเห็นและข้อมูลผู้ใช้ในระบบได้",
      },
      {
        category: "Infrastructure",
        badge: "AWS",
        icon: "cloud",
        title: "AWS Cloud Architecture",
        description:
          "ระบบถูกออกแบบให้ทำงานบน AWS (VPC, EC2, ELB, S3) และใช้ MongoDB Atlas เพื่อความเสถียร ปลอดภัย และรองรับการขยายตัว",
      },
    ],
    actors: [
      {
        emoji: "🎬",
        role: "Movie Lover",
        description: "ดูข้อมูลหนัง, ค้นหาตาม Genre, เขียนรีวิว และให้คะแนนภาพยนตร์",
      },
      {
        emoji: "🛠️",
        role: "Admin",
        description: "จัดการข้อมูลภาพยนตร์, จัดการผู้ใช้, และดูสถิติต่างๆ ของระบบผ่าน Dashboard",
      },
    ],
    heroImage: "/projects/filmfolio/hero.jpg",
    postedAt: "-",
    screenshotCount: 20,
  },

  // 3. BitX
  "bitx": {
    id: "3",
    title: "Bitx Cryptocurrency Paper Trading Platform",
    subtitle: "แพลตฟอร์มจำลองการซื้อขายเหรียญคริปโต",
    author: "Serapat Ratanapachai",
    duration: "1 ปี",
    role: "Full Stack Developer",
    col: 2,
    status: "Completed",
    liveUrl: "#",
    repoUrl: "#",
    description: [
      "BitX เป็นแพลตฟอร์มจำลองการซื้อขายเหรียญคริปโต (Cryptocurrency) ที่ช่วยให้ผู้ใช้สามารถฝึกฝนการลงทุนในสินทรัพย์ดิจิทัลได้โดยไม่ต้องใช้เงินจริง",
      "ระบบถูกออกแบบมาเพื่อให้ผู้ใช้เข้าใจกลไกของตลาดคริปโต และการวิเคราะห์ราคา โดยให้พอร์ตเริ่มต้นของแต่ละ user 100,000 บาท เพื่อทดลองเทรดแบบไร้ความเสี่ยง",
    ],
    responsibilities: [
      "พัฒนาส่วนของ Home, พอร์ตการลงทุน, รายการโปรด และประวัติการซื้อขาย",
      "เชื่อมต่อ CoinGecko API เพื่อดึงข้อมูลราคาและตลาดคริปโตแบบเรียลไทม์",
      "พัฒนาระบบ Authentication และจัดการผู้ใช้ด้วย Clerk API",
      "จัดการ Logic คำนวณกำไร-ขาดทุนของพอร์ตโฟลิโอ",
    ],
    highlights: [
      "ระบบติดตามราคาคริปโตแบบเรียลไทม์ผ่าน CoinGecko API",
      "User Authentication ผ่าน Google Account ด้วย Clerk",
      "ระบบพอร์ตการลงทุน แสดงกำไร-ขาดทุนอย่างละเอียด",
      "ระบบ Favorite ติดตามเหรียญที่สนใจ",
      "ระบบเติมเงินจำลองผ่าน Stripe API",
      "ระบบดูประวัติรายการซื้อ-ขาย",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Prisma.io",
      "Supabase",
      "Clerk",
      "CoinGecko API",
      "Stripe API",
    ],
    screenshots: [
      {
        title: "หน้าแรก",
        description: "แสดงข้อมูลตลาดคริปโตแบบเรียลไทม์",
        image: "/projects/bitx/home.jpg",
      },
      {
        title: "หน้าเเสดง crypto ทั้งหมด",
        description: "แสดงข้อมูลตลาดคริปโตแบบเรียลไทม์",
        image: "/projects/bitx/allasset2.jpg",
      },
      {
        title: "หน้าซื้อเหรียญ",
        description: "ระบบจำลองการซื้อเหรียญ",
        image: "/projects/bitx/buy.jpg",
      },
      {
        title: "หน้าขายเหรียญ",
        description: "ระบบจำลองการซื้อเหรียญ",
        image: "/projects/bitx/sell.jpg",
      },
      {
        title: "หน้าพอร์ตการลงทุน",
        description: "แสดงกำไร-ขาดทุนของพอร์ตทั้งหมด",
        image: "/projects/bitx/portfolio2.jpg",
      },
      {
        title: "หน้ารายการโปรด",
        description: "ระบบจำลองการซื้อเหรียญ",
        image: "/projects/bitx/myfav2.jpg",
      },
      {
        title: "หน้าเเสดงประวัติการซื้อขาย",
        description: "ระบบจำลองการซื้อเหรียญ",
        image: "/projects/bitx/tran.jpg",
      },
      {
        title: "หน้าเติมเงิน",
        description: "ระบบเติมเงินผ่าน Stripe",
        image: "/projects/bitx/addCoin.jpg",
      },
      {
        title: "หน้าเติมเงิน Stripe",
        description: "ระบบจำลองการซื้อเหรียญ",
        image: "/projects/bitx/strip.jpg",
      },
    ],
    features: [
      {
        category: "ฟีเจอร์หลัก",
        badge: "Real-time",
        icon: "chart",
        title: "ติดตามราคาเรียลไทม์",
        description: "ดึงข้อมูลราคาและมูลค่าตลาดจาก CoinGecko API แบบเรียลไทม์",
      },
      {
        category: "Portfolio",
        badge: "Simulation",
        icon: "wallet",
        title: "พอร์ตจำลอง 100,000 บาท",
        description: "ระบบพอร์ตการลงทุนเริ่มต้น 100,000 บาท คำนวณกำไร-ขาดทุนอย่างละเอียด",
      },
      {
        category: "Authentication",
        badge: "Secure",
        icon: "lock",
        title: "Login ด้วย Google",
        description: "จัดการผู้ใช้และยืนยันตัวตนผ่าน Clerk API อย่างปลอดภัย",
      },
      {
        category: "Payment",
        badge: "Stripe",
        icon: "credit-card",
        title: "ระบบเติมเงินจำลอง",
        description: "จำลองการเติมเงินเข้าพอร์ตผ่าน Stripe API",
      },
    ],
    actors: [
      {
        emoji: "📈",
        role: "Trader",
        description:
          "ผู้ใช้ที่สนใจเรียนรู้การลงทุนในคริปโต สามารถทดลองซื้อขายและวิเคราะห์พอร์ตได้โดยไม่ต้องเสี่ยงเงินจริง",
      },
    ],
    heroImage: "/projects/bitx/hero.png",
    screenshotCount: 10,
  },

  // 4. MuMood
  "mumood": {
    id: "4",
    title: "MuMood",
    platform: "mobile",
    subtitle: "Review Your Vibe, Discover Your Sound - แพลตฟอร์มรีวิวและค้นพบเพลง",
    author: "Serapat Ratanapachai",
    duration: "-",
    dateRange: "2025",
    role: "Full Stack Mobile Developer",
    col: 2,
    status: "Completed",
    liveUrl: "#",
    repoUrl: "https://github.com/pp811010/MuMood-musicReview.git",
    description: [
      "ในปัจจุบันยังไม่มีแพลตฟอร์มที่รองรับการรีวิวเพลงอย่างครบถ้วนและน่าเชื่อถือ ผู้ใช้ส่วนใหญ่ขาดพื้นที่ในการแลกเปลี่ยนความคิดเห็นเกี่ยวกับเพลงอย่างจริงจัง รวมถึงคนทำเพลงก็ไม่มีช่องทางรับ Feedback ที่ชัดเจนจากผู้ฟัง",
      "MuMood จึงเป็นแพลตฟอร์มรีวิวเพลงที่พัฒนาขึ้นเพื่อแก้ปัญหานี้ โดยเชื่อมต่อกับ Spotify และ Deezer API เพื่อให้ผู้ใช้สามารถฟังเพลง Demo 30 วินาที และให้คะแนนแยกตามด้าน Beat, Lyric และ Mood ผ่าน Slider Bar พร้อมระบบ Smart Search และ Admin Panel สำหรับจัดการเพลงแบบ Custom",
    ],
    responsibilities: [
      "พัฒนาฟีเจอร์ในการเเสดงผลเพลง เเละการรีวิวเพลงทั้งหมด ในฝั่งของ music lover",
      "ออกแบบเเละพัฒนา Backend เเละ ฐานข้อมูลทั้งหมด",
      "เชื่อมต่อฐานข้อมูลกับ SQLAlchemy ORM",
      "เชื่อมต่อ Spotify API สำหรับดึงข้อมูลเพลงและ Deezer API สำหรับ Demo เพลง 30 วินาที",
      "สร้างระบบ Authentication (Login/Register)",
    ],
    highlights: [
      "ระบบรีวิวเพลงแยกตาม Beat, Lyric, Mood ด้วย Slider Bar",
      "เชื่อมต่อ Spotify API และ Deezer API สำหรับ Demo เพลง 30 วินาที",
      "ระบบ Favorite และ History การรีวิว",
      "Admin Panel สร้าง/แก้ไข/ลบเพลง Custom พร้อม Smart Search",
      "Dynamic Validation และ Auto-fill ข้อมูลเพลง",
      "ระบบ Authentication พร้อมเลือก Favorite Genres",
      "Mood Color แสดงสี Dominant Color ตามอารมณ์เพลง",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "Spotify API",
      "Deezer API",
    ],
    screenshots: [
      {
        title: "หน้า Login",
        description: "ระบบสมัครสมาชิกพร้อมเลือก Favorite Genres",
        image: "/Projects/mumood/login.jpg",
      },
      {
        title: "หน้า Register",
        description: "ระบบสมัครสมาชิกพร้อมเลือก Favorite Genres",
        image: "/Projects/mumood/register.jpg",
      },
      {
        title: "หน้า Home",
        description: "แสดงเพลง Trending และระบบค้นหา",
        image: "/Projects/mumood/home.jpg",
      },
      {
        title: "หน้า Song Detail (1)",
        description: "รีวิว Beat/Lyric/Mood พร้อม Demo 30 วินาที",
        image: "/Projects/mumood/detail.jpg",
      },
      {
        title: "หน้า Song Detail (2)",
        description: "รีวิว Beat/Lyric/Mood พร้อม Demo 30 วินาที",
        image: "/Projects/mumood/detail2.jpg",
      },
      {
        title: "หน้า Favorite Songs",
        description: "รายการเพลงที่บันทึกไว้",
        image: "/Projects/mumood/favorite.jpg",
      },
      {
        title: "หน้า History",
        description: "ประวัติการรีวิวทั้งหมด",
        image: "/Projects/mumood/history.jpg",
      },
      {
        title: "หน้า Profile User",
        description: "ประวัติการรีวิวทั้งหมด",
        image: "/Projects/mumood/profile.jpg",
      },
      {
        title: "หน้า Home Admin",
        description: "จัดการเพลงทั้งหมด (All/Spotify/Custom)",
        image: "/Projects/mumood/crud1.jpg",
      },
      {
        title: "หน้า Home Admin",
        description: "จัดการเพลงทั้งหมด (All/Spotify/Custom)",
        image: "/Projects/mumood/custom_list.jpg",
      },
      {
        title: "หน้า Edit song",
        description: "สร้างเพลง Custom พร้อม Smart Suggestion",
        image: "/Projects/mumood/crud2.jpg",
      },
      {
        title: "หน้า Edit song",
        description: "สร้างเพลง Custom พร้อม Smart Suggestion",
        image: "/Projects/mumood/editing.jpg",
      },
    ],
    features: [
      {
        category: "User Feature",
        badge: "Review",
        icon: "star",
        title: "รีวิวเพลงแยกด้าน",
        description: "ให้คะแนนเพลงแยกตาม Beat, Lyric และ Mood ด้วย Slider Bar พร้อมแสดงความคิดเห็น",
      },
      {
        category: "Integration",
        badge: "API",
        icon: "engine",
        title: "Spotify & Deezer API",
        description: "ดึงข้อมูลเพลงจาก Spotify และ Demo เพลง 30 วินาทีจาก Deezer API แบบเรียลไทม์",
      },
      {
        category: "User Feature",
        badge: "Library",
        icon: "ui",
        title: "Favorite & History",
        description: "บันทึกเพลงที่ชอบเข้า Personal Library และดูประวัติการรีวิวทั้งหมด",
      },
      {
        category: "Admin Feature",
        badge: "Custom",
        icon: "backend",
        title: "จัดการเพลง Custom",
        description: "Admin สร้าง/แก้ไข/ลบเพลง Custom พร้อม Smart Search, Auto-fill และ Dynamic Validation",
      },
    ],
    actors: [
      {
        emoji: "🎵",
        role: "Music Lover",
        description: "ผู้ใช้ที่ต้องการมาเเลกเปลี่ยนความคิดเห็นเกี่ยวกับเพลง",
      },
      {
        emoji: "🛠️",
        role: "Admin",
        description: "จัดการเพลงทั้งหมดในระบบ",
      },
    ],
    heroImage: "/Projects/mumood/hero.jpg",
    postedAt: "2025",
    screenshotCount: 20,
  },

  // 5. Expert Connect
  "expert-connect": {
    id: "5",
    title: "Expert Connect",
    subtitle: "แพลตฟอร์มออนไลน์เชื่อมต่อผู้ถามกับผู้เชี่ยวชาญ พร้อมระบบ Escrow Payment",
    author: "Serapat Ratanapachai",
    duration: "-",
    role: "Full Stack Developer",
    col: 2,
    status: "Completed",
    liveUrl: "#",
    repoUrl: "#",
    platform: "web",
    description: [
      "Expert Connect เป็นแพลตฟอร์มออนไลน์ที่ให้ผู้ใช้โพสต์คำถามหรือปัญหาพร้อมงบประมาณ แล้วเปิดให้ผู้เชี่ยวชาญที่ผ่านการยืนยันตัวตนเข้ามาทำงานและแก้ไขปัญหา โดยระบบจะทำหน้าที่เป็นคนกลางที่ถือเงินไว้จนกว่างานจะเสร็จเพื่อความปลอดภัยของทั้งสองฝ่าย",
      "ระบบถูกออกแบบมาเพื่อแก้ปัญหาการหาผู้เชี่ยวชาญที่เชื่อถือได้ และสร้างความมั่นใจให้ผู้ถามว่าเงินจะปลอดภัยจนกว่าจะได้รับคำตอบหรืองานที่ถูกต้อง พร้อมระบบรีวิวและให้คะแนนเพื่อรักษามาตรฐานของผู้เชี่ยวชาญในระบบ",
    ],
    responsibilities: [
      "พัฒนาฟีเจอร์การเเสดงรายละเอียดงาน expert",
      "พัฒนาฟีเจอร์การส่งมอบงานของ expert",
      "พัฒนา Backend ในฝั่งของ expert",
    ],
    highlights: [
      "ระบบ Escrow Payment ถือเงินกลางจนกว่างานจะเสร็จ",
      "Cloud Architecture แบบ Multi-AZ บน AWS (ECS, RDS, ALB, WAF)",
      "CI/CD Pipeline อัตโนมัติผ่าน GitHub Actions",
      "ระบบยืนยันตัวตนผู้เชี่ยวชาญ (Expert Verification)",
      "ระบบรีวิวและให้คะแนนเพื่อรักษามาตรฐาน",
      "จัดการ Secrets และ Config ผ่าน AWS Secrets Manager",
    ],
    techStack: [
      "Next.js",
      "Golang",
      "PostgreSQL",
      "AWS ECS Fargate",
      "AWS RDS",
      "AWS S3",
      "AWS ALB",
      "AWS WAF",
      "GitHub Actions",
    ],
    screenshots: [
      {
        title: "หน้า Home Stater Asker ",
        description: "",
        image: "/Projects/expert-connect/home-asker.jpg",
      },
      {
        title: "หน้า Home Asker",
        description: "",
        image: "/Projects/expert-connect/home-after-created.jpg",
      },
      {
        title: "หน้า Create Question Asker",
        description: "",
        image: "/Projects/expert-connect/create-question.jpg",
      },
      {
        title: "หน้า Question Detail Asker",
        description: "",
        image: "/Projects/expert-connect/create-successfully.jpg",
      },
      {
        title: "หน้า Review Expert ของ Asker",
        description: "แสดงฟีเจอร์ของ Asker (ผู้ถาม) และ Expert (ผู้เชี่ยวชาญ)",
        image: "/Projects/expert-connect/review2.jpg",
      },
      {
        title: "หน้า Review Expert ของ Asker",
        description: "แสดงฟีเจอร์ของ Asker (ผู้ถาม) และ Expert (ผู้เชี่ยวชาญ)",
        image: "/Projects/expert-connect/review-succesful.jpg",
      },
      {
        title: "หน้า Profile Asker",
        description: "Next.js (Frontend), Golang (Backend), PostgreSQL (Database)",
        image: "/Projects/expert-connect/profile-asker2.jpg",
      },
      {
        title: "หน้า Home Expert",
        description: "แสดงฟีเจอร์ของ Asker (ผู้ถาม) และ Expert (ผู้เชี่ยวชาญ)",
        image: "/Projects/expert-connect/home-expert4.jpg",
      },
      {
        title: "หน้า Detail Question/รับงาน Expert",
        description: "Next.js (Frontend), Golang (Backend), PostgreSQL (Database)",
        image: "/Projects/expert-connect/choose-expert.jpg",
      },
      {
        title: "หน้า Detail Question เเสดงสถานะ กำลังดำเนินการ",
        description: "Next.js (Frontend), Golang (Backend), PostgreSQL (Database)",
        image: "/Projects/expert-connect/work-expert.jpg",
      },
      {
        title: "หน้า ส่งมอบงาน Expert",
        description: "Next.js (Frontend), Golang (Backend), PostgreSQL (Database)",
        image: "/Projects/expert-connect/done-expert.jpg",
      },
      {
        title: "หน้า Profile Expert",
        description: "Next.js (Frontend), Golang (Backend), PostgreSQL (Database)",
        image: "/Projects/expert-connect/profile-expert.jpg",
      },
    ],
    features: [
      {
        category: "Asker Feature",
        badge: "Question",
        icon: "ui",
        title: "โพสต์คำถามและกำหนดงบ",
        description: "ผู้ถามสามารถสร้างคำถาม เลือกหมวดหมู่ กำหนดงบประมาณ และชำระเงินผ่านระบบ Escrow",
      },
      {
        category: "Expert Feature",
        badge: "Job",
        icon: "backend",
        title: "รับงานและส่งหลักฐาน",
        description: "ผู้เชี่ยวชาญที่ผ่านการยืนยันตัวตนสามารถรับงาน แก้ปัญหา และอัปโหลดไฟล์หลักฐานผ่าน S3",
      },
      {
        category: "Cloud Architecture",
        badge: "AWS",
        icon: "engine",
        title: "AWS Cloud Native",
        description: "ระบบทำงานบน ECS Fargate, RDS, S3 และ ALB พร้อม WAF ป้องกัน SQLi/XSS และ Rate Limit",
      },
      {
        category: "DevOps",
        badge: "CI/CD",
        icon: "security",
        title: "Automated CI/CD",
        description: "Pipeline อัตโนมัติผ่าน GitHub Actions Build Docker Image และ Deploy ไปยัง ECS Fargate",
      },
    ],
    actors: [
      {
        emoji: "🙋‍♂️",
        role: "Asker (ผู้ถาม)",
        description: "โพสต์คำถาม กำหนดงบประมาณ ชำระเงิน และรีวิว/ให้คะแนนผู้เชี่ยวชาญหลังจบงาน",
      },
      {
        emoji: "‍💻",
        role: "Expert (ผู้เชี่ยวชาญ)",
        description: "ยืนยันตัวตน รับงาน แก้ปัญหา ส่งหลักฐานผ่านระบบ และรับเงินเมื่องานเสร็จสิ้น",
      },
    ],
    heroImage: "/projects/expert-connect/hero2.jpg",
    screenshotCount: 21,
  },

  // 6. Sport Management System
  "sport-management": {
    id: "6",
    title: "Sport Management System",
    subtitle: "ระบบจัดการการจองสนามและดูแลรักษาสถานที่กีฬาในมหาวิทยาลัย",
    author: "Serapat Ratanapachai",
    duration: "-",
    role: "Full Stack Developer",
    col: 2,
    status: "Completed",
    liveUrl: "#",
    repoUrl: "https://github.com/pp811010/SportActivityBooking.git",
    platform: "web",
    description: [
      "ในมหาวิทยาลัยมักมีสนามกีฬาและอุปกรณ์จำนวนมาก การจัดการการจองสนาม การติดตามสถานะอุปกรณ์ และการมอบหมายหน้าที่ให้เจ้าหน้าที่ดูแลแต่ละจุดมักทำแบบ Manual ซึ่งอาจทำให้เกิดความซ้ำซ้อน การจองชนกัน หรือการแจ้งซ่อมที่ล่าช้า",
      "Sport Management System จึงเป็น Concept Project ที่พัฒนาขึ้นเพื่อแก้ปัญหาเหล่านี้ โดยเป็นระบบ Web Application ที่รองรับการจองสนามแบบ Time Slot (จำกัดเวลาไม่เกิน 2 ชั่วโมงต่อครั้ง) ระบบรายงานปัญหาสนาม/อุปกรณ์ชำรุด และระบบจัดการหลังบ้านที่แบ่งสิทธิ์การเข้าถึงอย่างชัดเจนตามบทบาทของผู้ใช้งาน",
    ],
    responsibilities: [
      "พัฒนาฟีเจอร์ในฝั่งของ ผู้ใช้งานสนาม (User), ผู้จัดการสนาม (Manager) การจองสนาม ทั้งหมด",
      "ออกแบบและ Implement ระบบ Role-Based Access Control (RBAC) เพื่อจำกัดสิทธิ์และซ่อนเมนูตามบทบาท",
      "หัฒนา Logic การจองสนามแบบ Time Slot พร้อมตรวจสอบเงื่อนไขจำกัดเวลาไม่เกิน 2 ชั่วโมง",
      "พัฒนาระบบ CRUD สำหรับจัดการข้อมูลสนาม ประเภทกีฬา",
      "ออกเเบบฐานข้อมูลเเละความสัมพันธ์ระหว่างตารางของระบบ",
    ],
    highlights: [
      "ระบบจองสนามแบบ Time Slot (จำกัดครั้งละไม่เกิน 2 ชั่วโมง)",
      "ระบบรายงานปัญหาสนามและอุปกรณ์ชำรุดเพื่อส่งซ่อม",
      "Role-Based Access Control (RBAC) ซ่อน Tab/เมนูตามสิทธิ์",
      "ระบบมอบหมายผู้ดูแลสนาม (Field Caretaker Assignment)",
      "Dashboard สำหรับผู้จัดการเพื่อดูรายงานปัญหาทั้งหมด",
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "Django", "PostgreSQL"],
    screenshots: [],
    features: [
      {
        category: "User Feature",
        badge: "Booking",
        icon: "calendar",
        title: "จองสนามและแจ้งซ่อม",
        description:
          "ผู้ใช้งานสามารถเลือกวันที่และเวลาเพื่อจองสนาม (สูงสุด 2 ชม./ครั้ง) และรายงานปัญหาสนามหรืออุปกรณ์ชำรุดได้",
      },
      {
        category: "Caretaker Feature",
        badge: "Maintenance",
        icon: "wrench",
        title: "ดูแลสนามที่ได้รับมอบหมาย",
        description:
          "ผู้ดูแลสนามสามารถดูเฉพาะสนามที่ตัวเองรับผิดชอบ และตรวจสอบรายการแจ้งซ่อมของสนามนั้นๆ ได้",
      },
      {
        category: "Manager Feature",
        badge: "Admin",
        icon: "cog",
        title: "จัดการระบบหลังบ้าน",
        description:
          "ผู้จัดการสามารถเพิ่ม/แก้ไข/ลบ สนามและประเภทกีฬา, มอบหมายผู้ดูแลสนาม, และดูรายงานปัญหาทั้งหมดในระบบ",
      },
      {
        category: "Security",
        badge: "RBAC",
        icon: "security",
        title: "ระบบสิทธิ์การเข้าถึง",
        description: "ใช้ Role-Based Access Control ในการจำกัดสิทธิ์การเข้าถึงข้อมูล",
      },
    ],
    actors: [
      {
        emoji: "‍♂️",
        role: "ผู้ใช้งานสนาม (User)",
        description:
          "จองสนามแบบ Time Slot (จำกัดครั้งละไม่เกิน 2 ชม.) และรายงานปัญหาสนาม/อุปกรณ์ชำรุดเพื่อส่งซ่อม",
      },
      {
        emoji: "🛠️",
        role: "ผู้ดูแลสนาม (Caretaker)",
        description:
          "ดูสนามที่ได้รับมอบหมาย และตรวจสอบรายการแจ้งซ่อมเฉพาะในสนามที่ตัวเองรับผิดชอบ",
      },
      {
        emoji: "📊",
        role: "ผู้จัดการสนาม (Manager)",
        description:
          "เพิ่ม/แก้ไข/ลบ สนามและประเภทกีฬา, มอบหมายผู้ดูแลสนาม, และดูรายงานปัญหาทั้งหมดในระบบ",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    screenshotCount: 0,
  },

  // 7. Omakase Gangnam
  "omakase-gangnam": {
    id: "7",
    title: "Omakase Gangnam",
    subtitle: "ระบบจัดการและจองร้านอาหาร Omakase แบบครบวงจร",
    author: "Serapat Ratanapachai",
    duration: "6 เดือน",
    role: "Full Stack Developer",
    col: 2,
    status: "Completed",
    liveUrl: "#",
    repoUrl: "",
    description: [
      "ในยุคปัจจุบันที่ความรวดเร็วและความสะดวกสบายเป็นสิ่งสำคัญ การให้บริการที่ทันเวลาและทำให้ลูกค้าสามารถเข้าถึงและทานอาหารได้อย่างสะดวกสบายจึงมีความสำคัญอย่างยิ่ง โปรเจกต์เว็บระบบการจัดการร้านอาหาร OMAKASE GANGNAM จึงถูกพัฒนาขึ้นเพื่อตอบสนองต่อความต้องการนี้อย่างมีประสิทธิภาพ",
      "ระบบครอบคลุมการทำงานทั้งฝั่งลูกค้าที่สามารถจองโต๊ะ เลือกห้อง และเลือกเมนูอาหาร (Course) ล่วงหน้าได้จากทุกที่ทุกเวลา รวมถึงมีระบบเฉพาะสำหรับเชฟ พนักงานต้อนรับ และผู้จัดการ เพื่อจัดการออเดอร์ ตรวจสอบสถานะ และดูรายงานรายได้แบบเรียลไทม์",
    ],
    responsibilities: [
      "วิเคราะห์และรวบรวมความต้องการของระบบ ออกแบบกระบวนการทำงาน (System Workflow) รวมถึงจัดทำ Use Case Diagram และ ERD",
      "ออกเเบบ UX/UI จองที่นั่ง เลือกห้อง และเลือกเมนูอาหารแบบ Course สำหรับลูกค้า",
      "พัฒนาฟีเจอร์ จองที่นั่ง เลือกห้อง และเลือกเมนูอาหารแบบ Course สำหรับลูกค้า",
    ],
    highlights: [
      "ระบบจองโต๊ะและเลือกห้องล่วงหน้าแบบออนไลน์",
      "ระบบเลือกเมนูอาหารแบบ Course (8 เมนู) พร้อมตรวจสอบเงื่อนไข",
      "ระบบจัดการออเดอร์สำหรับเชฟแบบเรียลไทม์",
      "หน้า Check-in และชำระเงินสำหรับพนักงานต้อนรับ",
      "Dashboard แสดงรายได้รายวันและกราฟสถิติสำหรับผู้จัดการ",
      "ระบบจัดการเมนูและข้อมูลลูกค้าแบบครบวงจร",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "Chart.js",
      "Font Awesome",
      "PHP",
      "SQLite",
    ],
    screenshots: [
      {
        title: "หน้า Login/Register",
        description: "หน้าแสดงรายการภาพยนตร์สำหรับผู้ใช้ทั่วไป",
        image: "/Projects/omakase/login.jpg",
      },
      {
        title: "หน้า Home",
        description: "หน้าแนะนำร้านอาหารและข้อมูลทั่วไป",
        image: "/Projects/omakase/oma_home.jpg",
      },
      {
        title: "หน้าวันที่จอง",
        description: "ระบบเลือกห้อง เลือกวัน และจองโต๊ะ",
        image: "/Projects/omakase/selectCalendar.jpg",
      },
      {
        title: "หน้าเลือกห้อง",
        description: "ระบบเลือก Course และเมนูอาหาร 8 เมนู",
        image: "/Projects/omakase/select_room.jpg",
      },
      {
        title: "หน้าเลือกที่นั่ง",
        description: "ระบบเลือก Course และเมนูอาหาร 8 เมนู",
        image: "/Projects/omakase/select_seat.jpg",
      },
      {
        title: "หน้าเลือกคอร์ส",
        description: "ระบบเลือก Course และเมนูอาหาร 8 เมนู",
        image: "/Projects/omakase/select_course2.jpg",
      },
      {
        title: "หน้าเลือกเมนู",
        description: "ระบบเลือก Course และเมนูอาหาร 8 เมนู",
        image: "/Projects/omakase/select_menu2.jpg",
      },
      {
        title: "หน้ายืนยันการจอง",
        description: "สรุปรายละเอียดการจองที่นั่งและเมนู",
        image: "/Projects/omakase/confirm.jpg",
      },
      {
        title: "หน้าการจองสำเร็จ",
        description: "สรุปรายละเอียดการจองที่นั่งและเมนู",
        image: "/Projects/omakase/alert.jpg",
      },
      {
        title: "หน้า Dashboard ผู้จัดการ",
        description: "แสดงรายการเมนูที่ต้องทำและอัพเดทสถานะ",
        image: "/Projects/omakase/manage.jpg",
      },
      {
        title: "หน้า จัดการเมนูในคอร์ส ของผู้จัดการ",
        description: "แสดงรายการเมนูที่ต้องทำและอัพเดทสถานะ",
        image: "/Projects/omakase/manage_menu.jpg",
      },
      {
        title: "หน้า CRUD เมนู ของผู้จัดการ",
        description: "แสดงรายการเมนูที่ต้องทำและอัพเดทสถานะ",
        image: "/Projects/omakase/crud.jpg",
      },
      {
        title: "หน้า User Account ในระบบของผู้จัดการ",
        description: "แสดงรายการเมนูที่ต้องทำและอัพเดทสถานะ",
        image: "/Projects/omakase/user.jpg",
      },
      {
        title: "หน้าพนักงานต้อนรับ booking ทั้งหมด",
        description: "ระบบ Check-in และชำระเงิน",
        image: "/Projects/omakase/booking_re.jpg",
      },
      {
        title: "หน้าพนักงานต้อนรับ Check-in ของวันนั้น",
        description: "ระบบ Check-in และชำระเงิน",
        image: "/Projects/omakase/checkin.jpg",
      },
      {
        title: "หน้าพนักงานต้อนรับ Check-out ของวันนั้น",
        description: "ระบบ Check-in และชำระเงิน",
        image: "/Projects/omakase/checkout.jpg",
      },
      {
        title: "หน้าจัดการเมนูที่ต้องทำของเชฟ",
        description: "ระบบเพิ่ม แก้ไข และลบเมนูอาหาร",
        image: "/Projects/omakase/chef.jpg",
      },
    ],
    features: [
      {
        category: "Customer",
        badge: "Booking",
        icon: "calendar",
        title: "ระบบจองโต๊ะและเลือกเมนู",
        description:
          "ลูกค้าสามารถเลือกห้อง เลือกวันจอง และเลือกเมนูอาหารแบบ Course (8 เมนู) ล่วงหน้าได้อย่างง่ายดาย",
      },
      {
        category: "Chef",
        badge: "Order Management",
        icon: "chef-hat",
        title: "ระบบจัดการออเดอร์สำหรับเชฟ",
        description:
          "เชฟสามารถดูรายการเมนูที่ต้องทำของแต่ละห้องแบบเรียลไทม์ และอัพเดทสถานะของออเดอร์ได้ทันที",
      },
      {
        category: "Receptionist",
        badge: "Check-in",
        icon: "bell-concierge",
        title: "ระบบต้อนรับและชำระเงิน",
        description:
          "พนักงานต้อนรับสามารถตรวจสอบรายละเอียดการจอง ทำการ Check-in และดำเนินการชำระเงินของลูกค้าได้",
      },
      {
        category: "Manager",
        badge: "Dashboard",
        icon: "chart-line",
        title: "Dashboard และจัดการข้อมูล",
        description:
          "ผู้จัดการสามารถดูรายได้รายวันผ่านกราฟสถิติ และจัดการข้อมูลเมนู รวมถึงข้อมูลลูกค้าได้แบบครบวงจร",
      },
    ],
    actors: [
      {
        emoji: "🧑‍🍳",
        role: "Chef",
        description: "ดูรายการเมนูที่ต้องทำของแต่ละห้องแบบเรียลไทม์ และอัพเดทสถานะของออเดอร์",
      },
      {
        emoji: "🛎️",
        role: "Receptionist",
        description: "ตรวจสอบรายละเอียดการจอง, ทำการ Check-in และดำเนินการชำระเงินของลูกค้า",
      },
      {
        emoji: "📊",
        role: "Manager",
        description: "ดู Dashboard รายได้รายวัน, จัดการเมนูอาหาร และจัดการข้อมูลลูกค้า",
      },
      {
        emoji: "🍽️",
        role: "Customer",
        description: "จองโต๊ะ, เลือกห้อง, เลือกเมนูอาหารแบบ Course (8 เมนู) ล่วงหน้า",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    screenshotCount: 20,
  },
};

export function getProjectById(id: string): Project | undefined {
  console.log("funxiton", id)
  return Object.values(projectsData).find((project) => project.id == id);
}