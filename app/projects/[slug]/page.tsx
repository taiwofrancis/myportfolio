import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Users,
  Lightbulb,
  Cog,
  Star,
  MapPin,
} from "lucide-react";
import { AnimatedBackground } from "@/components/3d/animated-background";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

type GalleryItem = {
  type: "image" | "gradient";
  title: string;
  src?: string;
  gradient?: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  status: string;
  timeline: string;
  year: string;
  client: string;

  team?: string;
  rating?: number;
  reviews?: number;
  location?: string;

  image?: string | null;
  imageGradient?: string | null;

  liveUrl?: string;
  githubUrl?: string;
  freelancerUrl?: string;
  isFreelance?: boolean;

  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  gallery?: GalleryItem[];
  technologies?: Record<string, string[]>;
};

const projects: Record<string, Project> = {
  "abr-marketfi": {
    title: "Market Data MarketFi Platform",
    description:
      "A data-driven Market data platform designed to monitor price differences across multiple exchanges and identify profitable trading opportunities in real time.",
    imageGradient: "from-blue-500 to-blue-600",

    tags: ["React", "Django", "OpenAI API", "JWT", "Docker", "AWS"],
    category: "Full-Stack",
    status: "Completed",
    timeline: "3 months",
    year: "2024",
    client: "Freelance Project",
    team: "Solo Developer",
    isFreelance: true,
    freelancerUrl: "#",
    rating: 5,
    reviews: 10,
    location: "Remote",

    liveUrl: "https://abri.marketfi.io",
    githubUrl: "https://github.com/taiwofrancis/arbi-dashboard",

    overview:
      "This project helps monitor pricing differences across exchanges and highlights profitable opportunities in real-time.",
    challenge:
      "The main challenge was handling multiple data sources, keeping updates fast, and ensuring the dashboard remains responsive.",
    solution:
      "I built a clean full-stack pipeline for pulling exchange data, normalizing it, and presenting arbitrage opportunities with clear UI and metrics.",
    results: [
      "Improved market monitoring speed",
      "Clear visual arbitrage comparison",
      "Live-ready dashboard for real-time decisions",
    ],
    gallery: [
      {
        type: "gradient",
        title: "Dashboard View",
        gradient: "from-blue-500 to-indigo-700",
      },
      {
        type: "gradient",
        title: "Analytics View",
        gradient: "from-sky-500 to-cyan-700",
      },
    ],
    technologies: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Django", "REST API"],
      DevOps: ["Docker", "AWS"],
    },
  },

  "marketfi-presale": {
    title: "MarketFi Presale Website",
    description:
      "A responsive crypto presale website designed to present token information, manage presale stages, and guide users through a secure contribution process.",
    image: "/MARKETFI.png",
    imageGradient: null,

    tags: ["React.js", "Tailwind CSS", "Solidity", "Web3.js"],
    category: "Full-Stack",
    status: "Live",
    timeline: "2 months",
    year: "2025",
    client: "Freelance Project",
    team: "Solo Developer",
    isFreelance: true,
    rating: 5,
    reviews: 7,
    location: "Brazil",

    liveUrl: "#",

    overview:
      "A presale landing website designed to showcase token information and guide investors through contribution steps.",
    challenge:
      "Ensuring responsiveness, clarity, and clean user flow while keeping the design modern and crypto-friendly.",
    solution:
      "Built a responsive UI with Tailwind and integrated presale stage content, token details and user-friendly layout.",
    results: ["Clean UX", "Responsive design", "Investor-friendly presentation"],
    gallery: [{ type: "image", title: "Presale UI", src: "/MARKETFI.png" }],
    technologies: {
      Frontend: ["React.js", "Tailwind CSS"],
      Web3: ["Solidity", "Web3.js"],
    },
  },

  zeetechgadgets: {
    title: "Zeetech Gadgets Store",
    description:
      "An e-commerce platform for selling mobile phones, accessories, and consumer electronics, with inventory management and order processing features.",
    image: null,
    imageGradient: "from-green-500 to-emerald-600",

    tags: ["Api", "Wordpress", "Elementor Pro", "Stripe Integration"],
    category: "Distributed Systems",
    status: "Live",
    timeline: "1 month",
    year: "2024",
    client: "Freelance Project",
    team: "Solo Developer",
    isFreelance: true,
    freelancerUrl: "#",
    rating: 5,
    reviews: 5,
    location: "Remote",

    liveUrl: "https://zeetechgadgets.com/",

    overview:
      "An e-commerce storefront built for consumer electronics sales with a clean product browsing experience.",
    challenge:
      "Ensuring fast product pages, stable checkout, and clean inventory presentation for users.",
    solution:
      "Developed and configured the store experience, optimized product display and integrated payment workflow.",
    results: ["Live store launch", "Stripe integration", "Mobile-friendly pages"],
    gallery: [
      {
        type: "gradient",
        title: "Storefront",
        gradient: "from-green-500 to-emerald-800",
      },
      {
        type: "gradient",
        title: "Product Listings",
        gradient: "from-lime-500 to-green-700",
      },
    ],
    technologies: {
      Platform: ["WordPress", "Elementor Pro"],
      Payments: ["Stripe"],
      Integration: ["API"],
    },
  },

  qht: {
    title: "Quantum Health WebApp",
    description:
      "A modern, responsive website built to present Quantum Health Tech’s digital health solutions, research focus, and technology-driven approach to healthcare innovation.",
    image: null,
    imageGradient: "from-red-500 to-rose-600",

    tags: ["Web3", "Solidity", "Python", "Machine Learning", "BERT", "NLP"],
    category: "Full-Stack",
    status: "Completed",
    timeline: "1 month",
    year: "2024",
    client: "Freelance Project",
    team: "Solo Developer",
    isFreelance: true,
    freelancerUrl: "#",
    rating: 5,
    reviews: 6,
    location: "Remote USA",

    liveUrl: "https://qhtoken.com/",
    githubUrl: "#",

    overview:
      "A digital health landing webapp built to communicate Quantum Health’s research-driven solutions.",
    challenge:
      "Balancing clarity, trust, and professional presentation for a health-tech focused platform.",
    solution:
      "Built a responsive layout, structured key sections clearly, and optimized pages for smooth navigation.",
    results: ["Improved clarity and structure", "Responsive UI", "Professional presentation"],
    gallery: [
      {
        type: "gradient",
        title: "Landing View",
        gradient: "from-red-500 to-rose-700",
      },
      {
        type: "gradient",
        title: "Services Overview",
        gradient: "from-orange-500 to-red-700",
      },
    ],
    technologies: {
      Frontend: ["React", "Tailwind CSS"],
      Research: ["Machine Learning", "NLP", "BERT"],
      Web3: ["Solidity"],
    },
  },
};

/* ✅ REQUIRED for output: "export" */
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Taiwo Francis - Software Engineer`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const renderImage = (item: GalleryItem, index: number) => {
    if (item.type === "image" && item.src) {
      return (
        <Image
          key={index}
          src={item.src}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      );
    }

    return (
      <div
        key={index}
        className={`w-full h-48 bg-gradient-to-br ${item.gradient ?? "from-zinc-700 to-zinc-900"
          } flex items-center justify-center hover:scale-105 transition-transform duration-300 rounded-lg`}
      >
        <div className="text-white text-center p-4">
          <h4 className="font-semibold text-sm">{item.title}</h4>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 pt-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{project.category}</Badge>
                  {project.isFreelance && (
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      Freelance Project
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium">Year</p>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium">Timeline</p>
                    <p className="text-sm text-muted-foreground">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="w-5 h-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium">Team</p>
                    <p className="text-sm text-muted-foreground">
                      {project.team ?? "Solo"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Star className="w-5 h-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium">Rating</p>
                    <p className="text-sm text-muted-foreground">
                      {project.rating ?? 5}/5 ({project.reviews ?? 0} reviews)
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {project.location ?? "Remote"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {project.liveUrl && (
                  <Button asChild>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Project
                    </Link>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg mb-12">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-[400px] lg:h-[500px] bg-gradient-to-br ${project.imageGradient ?? "from-zinc-700 to-zinc-900"
                      } flex items-center justify-center`}
                  >
                    <div className="text-white text-center p-8">
                      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                      <p className="text-lg opacity-90">{project.category}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                  {/* Overview */}
                  <div>
                    <div className="flex items-center mb-6">
                      <Lightbulb className="w-6 h-6 text-primary mr-3" />
                      <h2 className="text-2xl font-bold">Project Overview</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.overview ?? "Project details coming soon."}
                    </p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge ?? "Project details coming soon."}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {project.solution ?? "Project details coming soon."}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
                    <ul className="space-y-2">
                      {(project.results ?? []).map((result, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Gallery */}
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {(project.gallery ?? []).map((item, index) =>
                        renderImage(item, index)
                      )}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Project Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Cog className="w-5 h-5 mr-2" />
                        Project Info
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Client</p>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium mb-1">Duration</p>
                        <p className="text-sm text-muted-foreground">{project.timeline}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium mb-1">Team Size</p>
                        <p className="text-sm text-muted-foreground">
                          {project.team ?? "Solo"}
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium mb-1">Rating</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(project.rating ?? 5)
                                    ? "text-yellow-500 fill-current"
                                    : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({project.reviews ?? 0})
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Technologies */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Technologies Used</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(project.technologies ?? {}).map(
                        ([category, techs]) => (
                          <div key={category}>
                            <p className="text-sm font-medium mb-2">{category}</p>
                            <div className="flex flex-wrap gap-1">
                              {techs.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </CardContent>
                  </Card>

                  {/* Links */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {project.liveUrl && (
                        <Button asChild className="w-full">
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Project
                          </Link>
                        </Button>
                      )}

                      {project.githubUrl && (
                        <Button variant="outline" asChild className="w-full">
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </CardContent>
                  </Card>

                  {/* Freelancer Link */}
                  {project.isFreelance && project.freelancerUrl && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Freelancer Profile</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          This project was completed through Fiverr.com. View the full project details and client feedback.
                        </p>
                        <Button asChild className="w-full">
                          <Link
                            href={project.freelancerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View on Freelancer
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in Similar Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help you build innovative solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
