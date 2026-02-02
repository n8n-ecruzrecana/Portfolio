const experiences=[
    {
        Period:"Feb 2016 - Dec 31, 2025",
        role:"Sr. QA Analyst",
        Company:"SYNLAB-ProV",
        Description:"Assisting and guiding the team to ensure system application is working as expected and specified - Jira board, Test Plan, Test Case.",
        Technologies:["JIRA", "Mantis", "Testrail", "Zephyr"],
        Current: true,
    },
    {
        Period:"Aug 2012 - Sept 2015",
        role:"Sr. QA Analyst",
        Company:"ADB Robinson",
        Description:"Verify all related documentation to ensure that new modified application system are implemented, deployed in the environment in compliance with policies & conformed the user’s requirements.",
        Technologies:["JIRA", "Mantis", "Testrail", "Zephyr"],
        Current: false,
    },

    {
        Period:"Feb 20, 2012 - July 2012",
        role:"Sr. QA Analyst",
        Company:"Bootsoft Phil",
        Description:"Work closely and coordinate the project’s requirement and status with Onshore and Offshore staff. and support, overseeing and analyzing affecting service quality (Use case and Automation scripts).",
        Technologies:["JIRA", "Mantis", "Testrail", "Zephyr", "Selenium"],
        Current: false,
    },

    {
        Period:"June 01, 2010 - Jan 27 2012",
        role:"Software QA Lead",
        Company:"Globe Telecom",
        Description:"Lead QA on SDLC with test lifecycle & test methodologies, and problem solving techniques. and Create SQL queries to validate the data in back-end using Teradata DBMS.",
        Technologies:["JIRA", "Mantis", "Testrail", "Zephyr", "DBMS"],
        Current: false,
    },

    {
        Period:"Sept 2008 - May 6 2010",
        role:"Developer",
        Company:"GXS Phil.Inc",
        Description: "Production support – service operation & transition processes like Problem Mngt., IncidentManagement, Change Management, Release & deployment Management.",
        Technologies:["JAVA", "HTML", "MYSQL" ],
        Current: false,
    },

     {
        Period:"Sept 21 2005 - March 18 2007",
        role:"Application Developer",
        Company:"Chiyoda Philippines Corp",
        Description:"Providing reports and updates to onshore proj. manager regarding the progress of the application (The number of issues fixed, problems encounter, business functions and scheduled deliverable)",
        Technologies:["JAVA", "JSP", "MYSQL", "J2EE" ],
        Current: false,
    },

    
]


export const Experience = () => {
    return <section 
    id="experience" 
    className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left 1/4 w-96 h-96 bg-primary/5 rounbded-full blur-3xl -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span 
                className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                     Carrer Journey</span>
                <h2
                 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay- 100 text-secondary-foreground">
                    Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
                    </h2>

                    <p 
                    className="text-muted-foreground animate-fade-in animation-delay-200">
                        A timeline of my professional growth, from curious beginner to senior QA Analyst leading teams and building products at scale.

                    </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgb(32,178,166,0.8)] "/>
                {/* Exp items */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) =>(
                        <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                          style={{animationDelay: `${(idx + 1) *150}ms`}}  >
                            {/* timedot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                            {exp.Current && (<span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)}
                            </div>
                            {/* content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16" }`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
                                    <span className="text-sm text-primary font-medium">{exp.Period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                    <p className="text-muted-foreground">{exp.Company}</p>
                                    <p className="text-sm text-muted-foreground mt-4 ">{exp.Description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 == 0 ? "md:justify-end" : ""}`}>{exp.Technologies.map ((tech, techIdx) =>(
                                        <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </section>;
};