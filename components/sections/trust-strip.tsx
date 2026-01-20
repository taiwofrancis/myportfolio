"use client";

import { Star, TrendingUp, Users, GraduationCap, Cloud, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

// Trust elements updated to reflect your new focus area
const trustElements = [
    {
        name: "Full-Stack Engineer With Proven Results",
        icon: Star,
        description:
            "Delivered 100+ full-stack, blockchain, AI, and cloud-powered solutions by combining clean architecture, scalable design, and real-world performance.",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "border-yellow-400/20",
    },
    {
        name: "Blockchain & Smart Contract Developer",
        icon: TrendingUp,
        description:
            "Built secure smart contracts, presale systems, staking platforms, launchpads, token dashboards, and multi-chain integrations across Ethereum, BSC, Polygon, and Solana.",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
    {
        name: "Cloud & DevOps Engineering",
        icon: Cloud,
        description:
            "Deploy applications using Docker, CI/CD pipelines, AWS, IBM Cloud, Vercel, and cloud-native tools to ensure reliable, fast, and scalable production deployments.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20",
    },
    {
        name: "AI, LLM & Automation Specialist",
        icon: BrainCircuit,
        description:
            "Develop AI-driven applications using LLMs, RAG pipelines, embeddings, automation tools, Selenium workflows, and intelligent retrieval systems for modern businesses.",
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
    {
        name: "Trusted by Global Clients",
        icon: Users,
        description:
            "Proven 5-star record across international clients by delivering dependable, high-quality engineering solutions tailored to real-world use cases.",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
    {
        name: "IBM Certified Software Engineer",
        icon: GraduationCap,
        description:
            "Certified IBM Full-Stack Developer with strong foundations in cloud computing, microservices, containerization, backend engineering, and modern development practices.",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
];

export function TrustStrip() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                <motion.div
                    className="text-center space-y-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="space-y-4">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Why Hire Me?{" "}

                        </motion.h2>

                        <motion.p
                            className="text-lg text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Driven by trust, quality, and results, I deliver real value through dependable engineering and smart problem-solving.
                        </motion.p>
                    </div>

                    {/* Trust Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustElements.map((element, index) => (
                            <motion.div
                                key={element.name}
                                className="relative group p-6 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-lg ${element.bgColor} border ${element.borderColor}`}
                                    >
                                        <element.icon
                                            className={`w-6 h-6 ${element.color}`}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {element.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {element.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}