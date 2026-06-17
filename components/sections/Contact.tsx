export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gray-50 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-normal text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
         Looking for opportunities to learn, grow, and contribute.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* email  */}
          <a href="mailto:serapat.rata@gmail.com" className="btn-primary">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>serapat.rata@gmail.com</span>
          </a>

          {/* phone  */}
          <a href="tel:0902327959" className="btn-outline flex gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>090-232-7959</span>
          </a>
        </div>
      </div>
    </section>
  );
}