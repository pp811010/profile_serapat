import Link from "next/link";
import { getProjectById } from "@/data/projects";
import ImageCarousel from "@/components/ui/ImageCarousel";

// ========== Icon Components ==========
const icons: Record<string, React.ReactNode> = {
  engine: (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
    </svg>
  ),
  backend: (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
    </svg>
  ),
  ui: (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.332-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.493 1 1 0 111.838-.798c.233.5.507.977.82 1.428.36-.93.63-1.902.804-2.906H5a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895l-.99-1.981-.02-.036-2.99-5.983A1 1 0 0113 8z" clipRule="evenodd" />
    </svg>
  ),
  security: (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
};

// icons that appear in some project data but had no matching svg before —
// fall back to a generic dot so the badge still renders instead of showing nothing.
const fallbackIcon = (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="4" />
  </svg>
);

/// ========== Main Component ==========
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return (
      <main className="p-6 md:p-10 lg:p-14 min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ink mb-2">ไม่พบโปรเจกต์นี้</h1>
          <Link href="/#projects" className="text-accent hover:underline font-medium">
            ← กลับไปหน้า Projects
          </Link>
        </div>
      </main>
    );
  }

  const isMobile = project.platform === "mobile";
  const platformLabel = isMobile
    ? "📱 Mobile App"
    : project.platform === "web"
      ? "💻 Web Application"
      : "🖥️ Desktop Application";

  // Build slides for the carousel: prefer real screenshots, fall back to the hero image.
  const slides =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
          .slice(0, project.screenshotCount ?? project.screenshots.length)
          .map((s) => ({ title: s.title, image: s.image }))
      : [{ title: project.title, image: project.heroImage }];

  return (
    <main className="p-6 md:p-10 lg:p-14 min-h-screen bg-white text-ink font-sans antialiased relative z-10">
      <div className="max-w-4xl mx-auto">

        {/* ===== Media: video for the featured project, image carousel otherwise ===== */}
        {id === "1" ? (
          <div className="relative rounded-2xl overflow-hidden bg-chip border border-border aspect-video mb-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2oWmN6SObWg?si=ebHLvLMerkuyvntT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="mb-8">
            <ImageCarousel slides={slides} isMobile={isMobile} />
          </div>
        )}

        {/* ===== Header: title, role/status/platform, tech stack, repo link ===== */}
        <div className="mb-10">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-ink rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">CD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-ink">{project.title}</h1>
                <p className="text-sm text-muted">By {project.author}</p>
              </div>
            </div>

            {project.repoUrl && project.repoUrl !== "#" && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white border border-border text-ink text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-ink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6 text-xs">
            <span className="bg-chip border border-border text-ink font-medium px-3 py-1.5 rounded-lg">
              {project.role}
            </span>
            <span className="bg-chip border border-border text-ink font-medium px-3 py-1.5 rounded-lg">
              {project.status}
            </span>
            <span className="bg-chip border border-border text-ink font-medium px-3 py-1.5 rounded-lg">
              {platformLabel}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ===== About: what the project is and why it exists (short) ===== */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-3">เกี่ยวกับโปรเจกต์</h2>
          {project.description.slice(0, 2).map((para: string, index: number) => (
            <p key={index} className="text-sm text-muted leading-relaxed mb-3">
              {para}
            </p>
          ))}
        </div>

        {/* ===== Key features (replaces the old separate "highlights" bullet list) ===== */}
        {project.features && project.features.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index: number) => (
                <div
                  key={index}
                  className="bg-chip border border-border rounded-2xl p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted">{feature.category}</span>
                    <span className="inline-flex items-center gap-1.5 bg-white border border-border text-ink text-xs font-semibold px-2.5 py-1 rounded-lg">
                      {icons[feature.icon] ?? fallbackIcon}
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-ink mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== My responsibilities (what I personally did — relevant for hiring) ===== */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Responsibilities</h2>
            <ul className="space-y-2 text-sm text-muted">
              {project.responsibilities.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ===== Actors: who uses the system (kept short) ===== */}
        {project.actors && project.actors.length > 0 && (
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Actors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.actors.map((actor, index) => (
                <div
                  key={index}
                  className="bg-chip border border-border rounded-2xl p-5 flex items-start gap-3"
                >
                  <span className="text-2xl leading-none">{actor.emoji}</span>
                  <div>
                    <h3 className="text-sm font-bold text-ink mb-1">{actor.role}</h3>
                    <p className="text-xs text-muted leading-relaxed">{actor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}