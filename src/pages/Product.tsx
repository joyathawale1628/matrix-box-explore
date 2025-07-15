import { CheckCircle, Cpu, Zap, Cable, Wrench, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Product = () => {
  const components = [
    {
      icon: Cpu,
      name: "Arduino Microcontroller",
      description: "The brain of your projects - programmable microcontroller for endless possibilities",
      capabilities: ["Program custom behaviors", "Control sensors and actuators", "Interface with other devices"]
    },
    {
      icon: Zap,
      name: "Sensors & Modules",
      description: "Various sensors for temperature, light, motion, sound and more",
      capabilities: ["Environmental monitoring", "Interactive responses", "Data collection and analysis"]
    },
    {
      icon: Cable,
      name: "Jumper Wires & Cables",
      description: "High-quality connecting wires for building circuits",
      capabilities: ["Easy prototyping", "Flexible connections", "Reliable signal transmission"]
    },
    {
      icon: Wrench,
      name: "Electronic Components",
      description: "LEDs, resistors, capacitors, buttons, and other essential components",
      capabilities: ["Build basic circuits", "Create user interfaces", "Power management"]
    },
    {
      icon: Lightbulb,
      name: "Project Materials",
      description: "Breadboards, mounting hardware, and project guides",
      capabilities: ["Structured learning", "Step-by-step guidance", "Professional presentation"]
    }
  ];

  const projects = [
    "Smart Home Automation System",
    "Weather Monitoring Station",
    "Motion-Activated Security System",
    "Interactive LED Display",
    "Temperature-Controlled Fan",
    "Sound-Reactive Light Show",
    "Distance Measuring Device",
    "Automated Plant Watering System"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Inside The Matrix Box
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive collection of components that make hands-on learning possible
          </p>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">What's Inside</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each Matrix Box contains carefully selected components designed to provide comprehensive learning experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {components.map((component, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <component.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{component.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{component.description}</p>
                  <div className="space-y-2">
                    {component.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Possibilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Endless Project Possibilities
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Matrix Box doesn't just provide components—it opens doors to countless project opportunities. 
                Students can start with simple circuits and progress to complex, real-world applications.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {projects.map((project, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{project}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="gradient-primary text-white shadow-glow hover:scale-105 transition-all">
                <Link to="/why-it-matters">
                  See The Impact <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="gradient-card shadow-card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Beginner Friendly</h3>
                <p className="text-muted-foreground">
                  Clear documentation and step-by-step guides make it easy for anyone to get started, 
                  regardless of their technical background.
                </p>
              </Card>

              <Card className="gradient-card shadow-card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Scalable Learning</h3>
                <p className="text-muted-foreground">
                  From simple LED circuits to IoT projects, the components grow with the student's 
                  skills and ambitions.
                </p>
              </Card>

              <Card className="gradient-card shadow-card p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Real-World Applications</h3>
                <p className="text-muted-foreground">
                  Projects mirror actual industry applications, giving students practical experience 
                  with relevant technologies.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Your Matrix Box?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey into hands-on learning and innovation today.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Product;