export default function BackgroundDots() {
  const dots = [
    { size: 4, color: "#1a73e8", left: "10%", top: "20%", delay: "0s" },
    { size: 6, color: "#d93025", left: "20%", top: "60%", delay: "2s" },
    { size: 3, color: "#f9ab00", left: "35%", top: "40%", delay: "4s" },
    { size: 5, color: "#188038", left: "50%", top: "80%", delay: "6s" },
    { size: 4, color: "#9334e6", left: "65%", top: "30%", delay: "8s" },
    { size: 3, color: "#1a73e8", left: "80%", top: "70%", delay: "10s" },
    { size: 5, color: "#d93025", left: "15%", top: "85%", delay: "12s" },
    { size: 4, color: "#f9ab00", left: "45%", top: "15%", delay: "14s" },
    { size: 6, color: "#188038", left: "70%", top: "50%", delay: "16s" },
    { size: 3, color: "#9334e6", left: "90%", top: "90%", delay: "18s" },
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden" 
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            left: dot.left,
            top: dot.top,
            borderRadius: "50%",
            opacity: 0.6,
            animation: `float 20s infinite ease-in-out`,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}