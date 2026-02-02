import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";

const project = [
  {
    title: "AI Appointment Setter",
    description:"An AI-powered appointment scheduling system that automates the process of booking meetings and appointments using natural language processing and machine learning algorithms.",
    image: "/Project/Appointment.jpg",
    tags: ["n8n"],
    video: "/Project/Appointment.mp4",
  },
   {
    title: "Automated ASMR Short-Form Video Creation & Publishing",
    description:"End-to-end workflow that automatically generates ASMR reels and short videos—from AI prompt creation and video generation to format conversion and auto-uploading on Facebook and YouTube. 🎧📹",
    image: "/Project/AI.png",
    tags: ["n8n"],
    github: "#",
    video: "/Project/AI.mp4",
  },
  {
    title: "Automated Daily Weather + Inspiration Post",
    description:"This workflow fetches the latest daily weather update from AccuWeather, pairs it with an inspirational quote, and overlays both onto a visually appealing background image sourced online. The final image is automatically published to Facebook, delivering timely weather info with a daily dose of motivation—hands-free, every day. 🌤️✨",
    image: "/Project/VA.png",
    tags: ["n8n"],
    github: "#",
    video: "/Project/VA.mp4",
  },
  {
    title: "AI agent for Facebook Health Insurance Lead Assistant",
    description:"An AI-powered automation workflow that connects a Facebook Page to an AI Agent to handle lead and customer inquiries about various health insurance plans. Incoming messages are captured via webhook, filtered, enriched with relevant documents, and processed by the AI Agent with memory and model support, then automatically replied to in real time—ensuring fast, consistent, and accurate customer engagement.",
    image: "/Project/Health.png",
    tags: ["n8n"],
    github: "#",
    video: "/Project/Health.mp4",
  },

  {
    title: "AI Content Repurposing",
    description:"Automated Zapier workflow that detects new files in Google Drive, transcribes audio/video with AI by Zapier, generates blog posts, then loops and splits content into conditional Paths to publish tailored posts to Facebook Pages, LinkedIn, and Instagram for Business — all with filters and step-by-step logging for a streamlined repurposing pipeline.",
    image: "/Project/AI Content.jpg",
    tags: ["Zapier"],
    video: "#",
    github: "#",
  },
  {
    title: "Asana CRM Lead Enrichment",
    description:"Zapier-powered Asana CRM automation with multi-path workflows for lead management, follow-ups, onboarding, and post-sale communication.",
    image: "/Project/Asana.jpg",
    tags: ["Zapier"],
    github: "#",
    link: "#",
  },
  {
    title: "Currencny Converter for the Product Prices",
    description:"Built a Zapier automation that allows customers to order products (e.g., leather bags) from anywhere in the world and automatically converts the product price to the customer's local currency—then instantly sends a formatted sales notification to a Discord channel.",
    image: "/Project/Currency.jpg",
    tags: ["Zapier"],
    github: "#",
    link: "#",
  },
  {
    title: "Automated Leads Enrichments",
    description:"Design and implement an automated workflow that captures leads via webhook, enriches company data, scores and prioritizes leads, stores them in a Google sheet, notifies the sales team based on priority, and optionally generates personalized outreach emails using an AI model.",
    image: "/Project/Lead.jpg",
    tags: ["Zapier"],
    github: "#",
    link: "#",
  },

  

  
];

export const Projects = () => {
  const [openVideo, setOpenVideo] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleOpen = (video) => {
    setOpenVideo(video);
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 10);
  };

  const handleClose = () => {
    setIsClosing(true);
    setFadeIn(false);
    setTimeout(() => {
      setOpenVideo(null);
      setIsClosing(false);
    }, 500);
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that <span className="font-serif italic font-normal text-white"> Automate.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            This is the selection of my recent projects that showcase my expertise in AI automation using tools like Zapier and n8n to streamline workflows and improve operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {project.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {project.video ? (
                    <button
                      onClick={() => handleOpen(project.video)}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <a
                      href={project.link || "#"}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}

                  <a
                    href={project.github || "#"}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12 animate-fade-in animation-delay-500">
        <AnimatedBorderButton>
          View All Projects
          <ArrowUpRight className="w-5 h-5" />
        </AnimatedBorderButton>
      </div>

      {/* Video Modal with right description, responsive for mobile */}
      {openVideo && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/70 transition-opacity duration-500
            ${fadeIn && !isClosing ? "opacity-100" : "opacity-0"}
            ${isClosing ? "opacity-0" : ""}`}
        >
          <div
            className={`relative w-full max-w-6xl h-full max-h-[90vh] transition-transform duration-500
              ${fadeIn && !isClosing ? "scale-100" : "scale-90"}
              ${isClosing ? "scale-90" : ""}
              rounded-2xl border-4 border-primary/50 shadow-2xl shadow-primary/40 p-4 bg-black/80 flex flex-col md:flex-row gap-6`}
          >
            {/* Video */}
            <video
              src={openVideo}
              controls
              autoPlay
              className="w-full md:w-2/3 h-64 md:h-full rounded-xl object-contain border-2 border-white/20 shadow-lg shadow-black/50"
            />

            {/* Description & Tags */}
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center mt-4 md:mt-0">
              <div
                className={`bg-black/70 rounded-xl p-4 mb-4 transition-all duration-500
                  ${fadeIn && !isClosing ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {project.find((p) => p.video === openVideo)?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.find((p) => p.video === openVideo)?.description}
                </p>
              </div>

              {/* Animated Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {project
                  .find((p) => p.video === openVideo)
                  ?.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/50
                        transition-all duration-500
                        ${fadeIn && !isClosing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
