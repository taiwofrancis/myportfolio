"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Verified, Clock, Briefcase } from "lucide-react";
import { color, motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Testimonials data now uses the real reviews you provided.
const testimonials = [
    {
        id: 1,
        name: "Javonnatallie",
        country: "🇺🇸 United States",
        avatar: "https://www.fiverr.com/bscmaster",
        rating: 5,
        quote: "Fast and understanding. So glad I reached out I was able to get my website designed. Thank you for your assistance!",
        project: "Wordpress Website Design",
        highlight: "$1,300 USD Project",
        color: "text-purple-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-purple-400/20",
    },
    {
        id: 2,
        name: "Caeldomiqie",
        country: "🇺🇸 United States",
        avatar: "",
        rating: 5,
        quote: "The man do magic with the website, make you feel comfortable, good Suggestions, your idea for your website is like your home and when he work it’s like he decorate it to perfection. I’m definitely using him again",
        project: "Firebase User Data Form",
        highlight: "Managing Director - K2 Projects",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
    {
        id: 3,
        name: "Cagidagi",
        country: "🇧🇷 Brazil",
        avatar: "", // Using a placeholder as avatar isn't in the HTML, add a real one if you have it.
        rating: 5,
        quote: "He is a pro in his area. Great service and quick delivery. Good work as always!",
        project: "PDF Data Extraction & Integrations",
        highlight: "Repeat Client",
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
];

// Stats updated to reflect accurate numbers from your resume.
const stats = [
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: Verified, value: "46+", label: "Client Reviews" },
    { icon: Briefcase, value: "100+", label: "Projects Done" },
    { icon: Clock, value: "100%", label: "On‑Time Delivery" },
];

export function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);

    // Ensure hash navigation works after lazy load
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash === '#testimonials' && sectionRef.current) {
            // slight timeout to ensure layout settled
            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    }, []);

    return (
        <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">

                        <h2 className="text-3xl lg:text-4xl font-bold">
                            What My Clients Say
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Real feedback from clients on <a
                                href="https://www.fiverr.com/bscmaster"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 font-semibold hover:underline"
                            >
                                Fiverr.com
                            </a> who achieved remarkable results.
                        </p>
                    </div>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: [0.215, 0.61, 0.355, 1],
                            }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 ${testimonial.borderColor}`}>
                                <CardHeader className="flex flex-row items-start gap-4 p-6">
                                    <Avatar className="w-14 h-14 border-2 border-primary/50">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold">{testimonial.name}</h3>
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{testimonial.country}</p>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                                    <div className="relative">
                                        <Quote className={`absolute -top-2 -left-2 w-8 h-8 ${testimonial.color} opacity-20`} />
                                        <p className="text-base italic leading-relaxed z-10">
                                            &quot;{testimonial.quote}&quot;
                                        </p>
                                    </div>
                                    <div className="mt-6">
                                        <Badge variant="secondary" className="font-mono text-xs uppercase tracking-wider">
                                            {testimonial.project}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    className="bg-card/50 border rounded-xl p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center gap-2">
                                <stat.icon className="w-10 h-10 text-primary" />
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div >

            {/* Background Elements */}
            < div className="absolute inset-0 -z-10 overflow-hidden" >
                <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
            </div >
        </section >
    );
}