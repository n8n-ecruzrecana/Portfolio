import { ClipboardCheck, Icon, Layout, Lightbulb, MessageCircle, Settings, Zap } from "lucide-react";

const highlights = [
  {
    Icon: Settings,
    Title: "Testing Software Applications",
    Description: "Expert in manual testing to ensure software quality and reliability."
  },
  {
    Icon: Zap,
    Title: "Ai Automation Tools",
    Description: "Implementing AI-driven test automation frameworks to enhance testing efficiency and accuracy."
  },
  {
    Icon: Lightbulb,
    Title: "Critical Thinking & Problem Solving",
    Description: "Skilled in analyzing complex systems and identifying potential issues before they impact end-users."
  },
  {
    Icon: ClipboardCheck,
    Title: "Test Rails & Case Development",
    Description: "Proficient in using JIRA for bug tracking and test management to streamline the testing process."
  },
  {
    Icon: Layout,
    Title: "JIRA & Bug Tracking",
    Description: "Proficient in using JIRA for bug tracking and test management to streamline the testing process."
  },
  {
    Icon: MessageCircle,
    Title: "Slacks and microsoft teams communication",
    Description: "Effective communication skills for collaborating with cross-functional teams and stakeholders."
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              QA defines quality,
              <span className="font-serif italic font-normal text-white">
                {" "}AI automation delivers it at scale.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Senior Software QA Analyst with extensive experience in manual and automation testing across enterprise,
                healthcare, banking, finance, and telecom systems. I have worked throughout the full software development lifecycle,
                collaborating with cross-functional and international teams to ensure high-quality, reliable, and compliant applications.
                Recently, I have expanded my expertise into AI automation using tools like Zapier and n8n to streamline workflows and
                improve operational efficiency.
              </p>

              <p>
                My specialization is in software quality assurance, with a strong focus on both manual and automated testing to ensure system reliability,
                performance, and compliance. I have extensive experience in test planning, test case creation, functional and regression testing, and defect management
                across enterprise and healthcare systems. I am skilled in automation testing using Selenium WebDriver with Java, API testing using Postman,
                and performance and load testing using Oracle Application Testing Suite. In addition to QA, I have solid knowledge of AI automation using tools such as
                Zapier and n8n, where I have created AI-driven automation solutions, including an AI appointment setter designed to streamline scheduling and improve
                operational efficiency. I am highly experienced in Agile and Waterfall methodologies and in using Jira, Confluence, Zephyr, and TestRail for test
                management and collaboration.
              </p>

              <p>
                My interests include exploring AI automation tools such as Zapier and n8n, building personal automation projects,
                and learning new testing frameworks and technologies. I enjoy problem-solving, optimizing workflows, and staying updated with the latest trends in
                software quality, automation, and emerging technologies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to ensure the delivery of high-quality, reliable, and user-centered software by combining strong quality assurance practices with
                intelligent automation. I aim to continuously improve testing processes, prevent defects early in the development lifecycle,
                and leverage AI-driven automation to optimize workflows, reduce manual effort, and add real business value. Through collaboration, continuous learning,
                and innovation, I strive to support teams in building scalable, efficient, and trustworthy systems.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
              style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.Description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
