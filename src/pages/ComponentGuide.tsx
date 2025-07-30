import { useState } from "react";
import { Search, Zap, Eye, Thermometer, Volume2, Lightbulb, Gauge } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import YouTubeVideo from "@/components/YouTubeVideo";

const ComponentGuide = () => {
  const [selectedComponent, setSelectedComponent] = useState("ir-sensor");
  const [searchTerm, setSearchTerm] = useState("");

  const components = [
    {
      id: "ir-sensor",
      name: "IR Sensor",
      category: "Sensor",
      icon: Eye,
      description: "Detects obstacles using infrared light",
      projects: ["Obstacle Avoidance Robot", "Automatic Door System"],
      videoId: "XXXXX"
    },
    {
      id: "temperature-sensor",
      name: "Temperature Sensor",
      category: "Sensor", 
      icon: Thermometer,
      description: "Measures ambient temperature",
      projects: ["Weather Station", "Smart Thermostat"],
      videoId: "YYYYY"
    },
    {
      id: "buzzer",
      name: "Buzzer",
      category: "Output",
      icon: Volume2,
      description: "Produces sound alerts and tones",
      projects: ["Alarm System", "Music Box"],
      videoId: "ZZZZZ"
    },
    {
      id: "led",
      name: "LED",
      category: "Output",
      icon: Lightbulb,
      description: "Light-emitting diode for visual indicators",
      projects: ["Traffic Light", "Status Indicator"],
      videoId: "AAAAA"
    },
    {
      id: "servo-motor",
      name: "Servo Motor",
      category: "Output",
      icon: Gauge,
      description: "Precise rotational movement control",
      projects: ["Robotic Arm", "Automatic Gate"],
      videoId: "BBBBB"
    }
  ];

  const categories = ["All", "Sensor", "Output"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentComponent = components.find(comp => comp.id === selectedComponent);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            MatrixBox Component Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to use every MatrixBox component with step-by-step guides, 
            circuit diagrams, and video tutorials. Perfect for beginners and experts alike.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="space-y-2">
                <h3 className="font-semibold">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Component List */}
              <div className="space-y-2">
                <h3 className="font-semibold">Components</h3>
                <div className="space-y-1">
                  {filteredComponents.map(component => {
                    const IconComponent = component.icon;
                    return (
                      <button
                        key={component.id}
                        onClick={() => setSelectedComponent(component.id)}
                        className={`w-full text-left p-3 rounded-md transition-colors flex items-center gap-3 ${
                          selectedComponent === component.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <IconComponent className="h-4 w-4" />
                        <div>
                          <div className="font-medium">{component.name}</div>
                          <div className="text-xs opacity-70">{component.category}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-9">
            {currentComponent && (
              <div className="space-y-8">
                {/* Component Header */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <currentComponent.icon className="h-8 w-8 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">{currentComponent.name}</CardTitle>
                        <CardDescription className="text-lg mt-1">
                          {currentComponent.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* What You Can Build */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      What You Can Build
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentComponent.projects.map((project, index) => (
                        <div key={index} className="p-4 bg-muted rounded-lg">
                          <h4 className="font-semibold">{project}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Learn how to build this project step by step
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Try This
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Step-by-Step Guide */}
                <Card>
                  <CardHeader>
                    <CardTitle>Step-by-Step Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Step 1: Preparation</h4>
                        <p>Gather your MatrixBox board and the {currentComponent.name} component. Make sure your workspace is clean and well-lit.</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Step 2: Wiring</h4>
                        <p>Connect the {currentComponent.name} to your MatrixBox board following the circuit diagram below.</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Step 3: Programming</h4>
                        <p>Upload the provided code to your MatrixBox and test the {currentComponent.name} functionality.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Circuit Diagram Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Circuit Diagram</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <Gauge className="h-12 w-12 mx-auto mb-2" />
                        <p>Circuit diagram for {currentComponent.name}</p>
                        <p className="text-sm">(Diagram will be added here)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Video Tutorial */}
                <Card>
                  <CardHeader>
                    <CardTitle>Video Tutorial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <YouTubeVideo
                      videoId={currentComponent.videoId}
                      title={`How to use ${currentComponent.name}`}
                    />
                    <p className="text-sm text-muted-foreground mt-4">
                      Watch this tutorial to see the {currentComponent.name} in action and learn practical tips for your projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentGuide;