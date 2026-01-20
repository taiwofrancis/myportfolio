"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Vote, School } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/ui/project-card";

// Projects updated to reflect your latest work.
const projects: ProjectData[] = [
    {
        id: "abr-marketfi",
        title: "Market Data MarketFi Platform",
        description: "A data-driven Market data platform designed to monitor price differences across multiple exchanges and identify profitable trading opportunities in real time.",
        status: "In Development",
        tags: ["React", "VPS", "RESTFUL API", "Docker", "GitHub"],
        icon: Bot,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        image: "/abri.png",
        liveHref: "https://abri.marketfi.io/",
        githubHref: "https://github.com/taiwofrancis/arbi-dashboard"
    },
    {
        id: "marketfi-presale",
        title: "MarketFi Presale Website",
        description:
            "A responsive crypto presale website designed to present token information, manage presale stages, and guide users through a secure contribution process.",
        status: "Live",
        tags: ["Next.js", "React", "Tailwind CSS", "CMS"],
        icon: School,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
        liveHref: "https://presale.marketfi.io/",
        githubHref: "#",
        image: "/MARKETFI.png",
    },
    {
        id: "zeetechgadgets",
        title: "Zeetech Gadgets Store",
        description: "An e-commerce platform for selling mobile phones, accessories, and consumer electronics, with inventory management and order processing features.",
        status: "Conceptual Project",
        tags: ["Api", "Wordpress", "Elementor Pro", "Stripe Integration"],
        icon: Vote,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
        image: "/zeetech.png",
        liveHref: "https://zeetechgadgets.com/", // No live demo yet
        githubHref: "#" // Disabled: concept/no repo
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        My Featured Projects{" "}
                        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            
                        </span> */}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A showcase of my software engineering work, from concept to deployment.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Updated Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/projects">
                            View All Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}