    import {ChevronLeft, ChevronRight, Quote } from "lucide-react";
    import { useState } from "react";

    const testimonials = [
        {
            Quote:"Emmanuel is passionate on his works with the highest level of commitment to his job. He has a very positive and optimistic relationship with teammates, both as Senior Quality Assurance and Scrum Master, making sure the team is working based on Agile principles - achieving KPIs and maintaining high velocity. Emmanuel has become a very valuable asset to the team ensuring high quality throughout to the business both non-functional requirements and process automation. He's one of the 2 pillars of ProV's development team on automated testing",
            author:"Ajit Nair",
            role: "CEO, ProV.",
        },
        {
            Quote:"Emmanuel has become a very valuable asset to the team ensuring high quality throughout to the business both non-functional requirements and process automation. He's one of the 2 pillars of ProV's development team on automated testing. I am pleased to nominate Emmanuel for the Q2 award. I have known and worked with him for more than 4 years and have always found him dependable, efficient and unfailingly punctual. Also, his willingness to take on difficult projects in VISMA and SYNLAB have been outstanding",
            author:"Mark Andrew Many",
            role: "Project Manager, ProV.",
        },
    ];

    export const Testimonials = () => {
        const [activeIdx, setActiveIDX] = useState(0);

        const next = () => {
            setActiveIDX((previous) => (previous + 1) % testimonials.length);
        };

        const previous = () => {
            setActiveIDX((previous) => (previous - 1 + testimonials.length) % testimonials.length);
        };

        return (
            <section id="testimonials" className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary-foreground txt-sm font-medium tracking-wider uppercase animate-fade-in">
                            What People Say
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 annimate-fade-in animation-delay-100 text-secondary-foreground">
                            Kind Words from{" "}
                            <span className="font-serif italic font-normal text-white">Amazing people</span>
                        </h2>
                    </div>

                    {/* Testimonial */}
                    <div className="max-4xl mx-auto">
                        <div className="relative">
                            {/* Main card */}
                            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 relative">

                                {/* FIXED QUOTE ICON */}
                                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                    <Quote className="w-6 h-6 text-primary-foreground" />
                                </div>

                                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-8">
                                    "{testimonials[activeIdx].Quote}"
                                </blockquote>

                                <div >
                                    <div className="font-semibold">{testimonials[activeIdx].author}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justofy-center gap-4 mt-8">
                        <button
                            className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                            onClick={previous}
                        >
                            <ChevronLeft />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIDX(idx)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        idx === activeIdx
                                            ? "w-8 bg-primary"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </section>
        );
    };
