import { useState } from "react";
import { Button } from "@/Components/Button";
import { ArrowRight, Briefcase, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";

const skills = [
  "Manual Testing","Automated Testing","Zapier","n8n","TestRail","Jira",
  "Selenium","Postman","Mantis","OATS","HTML","CSS","JavaScript","JSP",
  "MYSQL","PostgreSQL","Java","Oracle DB",
];

const certifications = [
  {
    title: "Certificate of Appreciation",
    image: "/Project/Certificate-appre.jpg",
    description: "Awarded for outstanding performance and dedication in Quality Assurance at ProV.",
  },
  {
    title: "ISTQB Foundation Level",
    image: "/Project/Certificate.jpg",
    description: "Proficient in Selenium automation for web applications.",
  },
];

export const Hero = () => {
  const [showCertifications, setShowCertifications] = useState(false);
  const [selectedCert, setSelectedCert] = useState(certifications[0]);
  const [certFade, setCertFade] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const [dots] = useState(() =>
    [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 20}s`,
    }))
  );

  const handleClose = () => {
    setShowCertifications(false);
    setClosing(false);
    setLightboxOpen(false);
  };

  const handleCertClick = (cert) => {
    setCertFade(true);
    setTimeout(() => {
      setSelectedCert(cert);
      setCertFade(false);
    }, 150);
  };

  const handleLightboxClose = () => {
    setClosing(true);
    setTimeout(() => {
      setLightboxOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/Hero-bg.jpg" alt="Background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Contents (blur when modal/lightbox) */}
      <div className={`container mx-auto px-6 pt-32 pb-20 relative z-10 transition-all duration-500 ${showCertifications || lightboxOpen ? "blur-sm" : ""}`}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Senior QA Analyst - AI Automation
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="text-primary glow-text">QA</span> ensures it{" "}
                <span className="font-serif italic font-normal text-white">works</span>
                <br />
                <span className="text-primary glow-text">AI Automation</span> makes it{" "}
                <span className="font-serif italic font-normal text-white">work without you</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I’m Emmanuel Recaña, a Senior QA Analyst focused on ensuring software quality, reliability, and performance.
                I also specialize in AI Automation, helping businesses improve efficiency through intelligent, AI-driven testing solutions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                classname="glow-border border border-primary flex items-center gap-2"
                onClick={() => setShowCertifications(true)}
              >
                Certifications <ArrowRight className="w-5 h-5" />
              </Button>

              <a href="/Project/Emmanuel-Recaña-CV.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/emmanuel-recana-696531263/" },
                { icon: Github, href: "https://github.com/elfstrike" },
                { icon: Briefcase, href: "https://v2.onlinejobs.ph/jobseekers/info/4537090" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.png"
                  alt="Emmanuel Recaña"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-400/50"/>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-xs text-muted-foreground">Years Exp Senior QA Analyst.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Certifications Modal */}
      {showCertifications && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className={`relative w-full max-w-7xl h-[90vh] bg-black/50 backdrop-blur-xl rounded-3xl p-6 flex flex-col md:flex-row gap-6 glow-border-glow
              transform transition-all duration-300 ease-in-out opacity-0 scale-95 animate-fade-in`}
            style={{ animationFillMode: "forwards" }}
          >
            {/* Left - List */}
            <div className="flex flex-col gap-4 md:w-1/3 overflow-y-auto max-h-full">
              {certifications.map((cert, idx) => (
                <Button
                  key={idx}
                  onClick={() => handleCertClick(cert)}
                  size="default"
                  classname={`text-left w-full ${selectedCert.title === cert.title ? "border border-primary bg-primary/10" : ""}`}
                >
                  {cert.title}
                </Button>
              ))}
            </div>

            {/* Right - Details */}
            <div className={`md:w-2/3 flex flex-col items-center text-center md:text-left transition-opacity duration-300 ${certFade ? "opacity-0" : "opacity-100"}`}>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain rounded-xl mb-4 cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              />
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{selectedCert.title}</h3>
              <p className="text-muted-foreground">{selectedCert.description}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary text-2xl transition-opacity duration-300 animate-fade-in"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className={`fixed inset-0 z-60 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out transition-all duration-300 ${closing ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          onClick={handleLightboxClose}
        >
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl transition-transform duration-300 scale-100 hover:scale-110"
          />
        </div>
      )}

      {/* Glow Border CSS */}
      <style jsx>{`
        @keyframes glow-border-animation {
          0%, 100% { box-shadow: 0 0 20px #20B2A6, 0 0 40px #20B2A6 inset; }
          50% { box-shadow: 0 0 40px #20B2A6, 0 0 60px #20B2A6 inset; }
        }
        .glow-border-glow {
          border: 2px solid #20B2A6;
          animation: glow-border-animation 2s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
