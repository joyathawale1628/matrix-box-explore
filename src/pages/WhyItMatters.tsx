import { Brain, Target, Rocket, Users, TrendingUp, Heart, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhyItMatters = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Critical Thinking Development",
      description: "Hands-on projects challenge students to solve real problems, developing analytical and logical thinking skills that extend far beyond technology."
    },
    {
      icon: Target,
      title: "Practical Application",
      description: "Bridge the gap between theory and practice. Students see immediate results from their learning, making abstract concepts tangible and understandable."
    },
    {
      icon: Rocket,
      title: "Innovation & Creativity",
      description: "Open-ended projects encourage creative thinking and innovation, allowing students to explore their ideas and bring them to life."
    },
    {
      icon: Users,
      title: "Collaboration Skills",
      description: "Group projects foster teamwork, communication, and collaborative problem-solving—essential skills for the modern workplace."
    },
    {
      icon: TrendingUp,
      title: "Future-Ready Skills",
      description: "Exposure to programming, electronics, and system design prepares students for careers in growing STEM fields."
    },
    {
      icon: Heart,
      title: "Confidence Building",
      description: "Successfully completing projects builds confidence and encourages students to tackle more complex challenges."
    }
  ];

  const testimonials = [
    {
      quote: "The Matrix Box transformed how my students approach learning. They went from passive listeners to active creators.",
      author: "Sarah Johnson",
      role: "High School Physics Teacher"
    },
    {
      quote: "I never thought I could build something that actually works. The Matrix Box made me believe in myself.",
      author: "Marcus Chen",
      role: "11th Grade Student"
    },
    {
      quote: "Our engineering program saw a 40% increase in student engagement after introducing The Matrix Box.",
      author: "Dr. Robert Williams",
      role: "University Engineering Professor"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Hands-On Learning Matters
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            In a world driven by technology and innovation, practical experience isn't just valuable—it's essential for preparing students for the future.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">The Challenge in Education</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Traditional education often focuses on theoretical knowledge without providing opportunities for practical application. 
                Students memorize formulas and concepts but struggle to apply them in real-world scenarios.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                This gap between theory and practice leaves students unprepared for the demands of modern careers and fails to 
                ignite their passion for learning and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">The Power of Hands-On Learning</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Matrix Box addresses these challenges by providing immersive, practical learning experiences that benefit students in multiple ways
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">The Impact Speaks for Itself</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">87%</div>
              <p className="text-muted-foreground">of students show improved problem-solving skills</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">higher engagement in STEM subjects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">of educators report increased student enthusiasm</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">75%</div>
              <p className="text-muted-foreground">improvement in technical concept retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">What Educators & Students Say</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Future Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Preparing for Tomorrow's World
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The jobs of tomorrow will require creativity, critical thinking, and hands-on problem-solving skills. 
                Traditional education alone isn't enough to prepare students for this reality.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Matrix Box bridges this gap by providing real-world experience with the tools and technologies 
                that are shaping our future. Students don't just learn about innovation—they become innovators.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every project completed, every circuit built, and every problem solved builds the foundation for 
                a lifetime of learning and innovation.
              </p>
              
              <Button asChild size="lg" className="gradient-primary text-white shadow-glow hover:scale-105 transition-all">
                <Link to="/contact">
                  Start the Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="gradient-card shadow-card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">21st Century Skills</h3>
                <p className="text-muted-foreground">
                  Develop critical thinking, creativity, collaboration, and communication skills essential for success in any field.
                </p>
              </Card>

              <Card className="gradient-card shadow-card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Technology Literacy</h3>
                <p className="text-muted-foreground">
                  Gain hands-on experience with programming, electronics, and digital systems that power our modern world.
                </p>
              </Card>

              <Card className="gradient-card shadow-card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Innovation Mindset</h3>
                <p className="text-muted-foreground">
                  Cultivate an entrepreneurial spirit and the confidence to tackle complex challenges with creative solutions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of the Educational Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join educators and students worldwide who are transforming learning through hands-on experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/contact">Get Your Matrix Box</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/product">Explore Components</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyItMatters;