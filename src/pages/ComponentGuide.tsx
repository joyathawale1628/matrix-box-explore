import { useState } from "react";
import { Search, Zap, Eye, Thermometer, Volume2, Lightbulb, Gauge, Filter, BookOpen, Code, Play, AlertTriangle, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
      description: "Detects obstacles using infrared light. Perfect for creating smart robots and automatic systems.",
      difficulty: "Beginner",
      connectionPins: ["VCC", "GND", "OUT"],
      projects: [
        {
          title: "Obstacle Avoidance Robot",
          description: "Build a robot that automatically steers around obstacles",
          difficulty: "Beginner"
        },
        {
          title: "Automatic Door System", 
          description: "Create a door that opens when someone approaches",
          difficulty: "Intermediate"
        }
      ],
      steps: [
        {
          title: "Preparation",
          description: "Gather your MatrixBox board, IR sensor, and jumper wires. Ensure your workspace is clean and well-lit.",
          tips: ["Double-check component orientation", "Keep wires organized"],
          warning: null
        },
        {
          title: "Wiring Connection",
          description: "Connect the IR sensor to your MatrixBox board following the pin diagram.",
          tips: ["VCC to 5V", "GND to Ground", "OUT to Digital Pin 2"],
          warning: "Never connect VCC directly to GND - this will damage your sensor!"
        },
        {
          title: "Code Upload",
          description: "Upload the provided Arduino code to test sensor functionality.",
          tips: ["Open Serial Monitor to see readings", "Test with different objects"],
          warning: null
        },
        {
          title: "Testing & Calibration",
          description: "Test the sensor with various objects at different distances.",
          tips: ["Normal detection range: 2-30cm", "Works best with solid objects"],
          warning: "Avoid pointing directly at bright lights"
        }
      ],
      codeSnippet: `// IR Sensor Basic Code
int irPin = 2;
int ledPin = 13;

void setup() {
  pinMode(irPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int sensorValue = digitalRead(irPin);
  if (sensorValue == LOW) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Obstacle detected!");
  } else {
    digitalWrite(ledPin, LOW);
    Serial.println("Path clear");
  }
  delay(100);
}`,
      videoId: "XXXXX"
    },
    {
      id: "temperature-sensor",
      name: "Temperature Sensor",
      category: "Sensor", 
      icon: Thermometer,
      description: "Measures ambient temperature accurately. Essential for weather monitoring and climate control projects.",
      difficulty: "Beginner",
      connectionPins: ["VCC", "GND", "DATA"],
      projects: [
        {
          title: "Weather Station",
          description: "Monitor temperature and display readings on LCD",
          difficulty: "Intermediate"
        },
        {
          title: "Smart Thermostat",
          description: "Automatically control heating based on temperature",
          difficulty: "Advanced"
        }
      ],
      steps: [
        {
          title: "Component Check",
          description: "Verify you have the DS18B20 temperature sensor and required resistor.",
          tips: ["Check sensor model number", "4.7kΩ pull-up resistor needed"],
          warning: null
        },
        {
          title: "Wiring Setup",
          description: "Connect sensor with pull-up resistor configuration.",
          tips: ["Red wire to 5V", "Black wire to GND", "Yellow wire to Digital Pin 3"],
          warning: "Always use pull-up resistor - sensor won't work without it!"
        },
        {
          title: "Library Installation",
          description: "Install OneWire and DallasTemperature libraries in Arduino IDE.",
          tips: ["Tools → Manage Libraries", "Search for 'DallasTemperature'"],
          warning: null
        },
        {
          title: "Code and Testing",
          description: "Upload code and monitor temperature readings in Serial Monitor.",
          tips: ["Readings in Celsius", "Normal room temp: 20-25°C"],
          warning: "Don't expose sensor to extreme temperatures during testing"
        }
      ],
      codeSnippet: `// Temperature Sensor Code
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 3
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float temp = sensors.getTempCByIndex(0);
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println("°C");
  delay(1000);
}`,
      videoId: "YYYYY"
    }
  ];

  const categories = ["All", "Sensor", "Output"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const currentComponent = components.find(comp => comp.id === selectedComponent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              MatrixBox Component Guide
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Master every MatrixBox component with comprehensive guides, interactive diagrams, and hands-on tutorials. 
            <span className="text-primary font-semibold"> Perfect for beginners and experts alike.</span>
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Step-by-step guides</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="h-4 w-4 text-blue-500" />
              <span>Video tutorials</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-purple-500" />
              <span>Code examples</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Enhanced Sidebar */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              {/* Search with enhanced styling */}
              <Card className="shadow-lg border-primary/10">
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search components..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Category Filter */}
              <Card className="shadow-lg border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Filter className="h-4 w-4" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                    {categories.map(category => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer justify-center py-2 px-3 transition-all hover:scale-105"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Component List */}
              <Card className="shadow-lg border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Components ({filteredComponents.length})</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {filteredComponents.map(component => {
                      const IconComponent = component.icon;
                      return (
                        <button
                          key={component.id}
                          onClick={() => setSelectedComponent(component.id)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center gap-3 group ${
                            selectedComponent === component.id
                              ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                              : "hover:bg-muted/80 hover:shadow-sm border border-transparent hover:border-primary/10"
                          }`}
                        >
                          <div className={`p-2 rounded-md ${
                            selectedComponent === component.id 
                              ? "bg-primary-foreground/20" 
                              : "bg-primary/10 group-hover:bg-primary/20"
                          }`}>
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{component.name}</div>
                            <div className="text-xs opacity-70 flex items-center gap-2 mt-1">
                              <span>{component.category}</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs ${getDifficultyColor(component.difficulty)}`}>
                                {component.difficulty}
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Main Content */}
          <div className="col-span-12 lg:col-span-9">
            {currentComponent && (
              <div className="space-y-8">
                {/* Enhanced Component Header */}
                <Card className="shadow-xl border-primary/20 bg-gradient-to-r from-card to-card/80">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <currentComponent.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl mb-2">{currentComponent.name}</CardTitle>
                          <CardDescription className="text-lg leading-relaxed">
                            {currentComponent.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right space-y-3">
                        <Badge 
                          variant="outline" 
                          className={`${getDifficultyColor(currentComponent.difficulty)} border-0 font-semibold px-3 py-1`}
                        >
                          {currentComponent.difficulty}
                        </Badge>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <div className="text-sm font-medium text-muted-foreground mb-1">Connection Pins</div>
                          <div className="text-sm font-mono">
                            {currentComponent.connectionPins?.join(" • ")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Enhanced What You Can Build */}
                <Card className="shadow-lg border-primary/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                        <Zap className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      What You Can Build
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentComponent.projects.map((project, index) => (
                        <div key={index} className="group relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg transform transition-transform group-hover:scale-105"></div>
                          <div className="relative p-6 bg-card border border-primary/10 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <div className="flex justify-between items-start mb-3">
                              <h4 className="font-semibold text-lg text-primary">{project.title}</h4>
                              <Badge 
                                variant="secondary" 
                                className={`${getDifficultyColor(project.difficulty)} border-0 text-xs`}
                              >
                                {project.difficulty}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {project.description}
                            </p>
                            <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              <Play className="h-3 w-3 mr-2" />
                              Try This Project
                            </Button>
                          </div>
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
                    <div className="space-y-6">
                      {currentComponent.steps?.map((step, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                              <p className="text-muted-foreground mb-3">{step.description}</p>
                              
                              {step.tips && step.tips.length > 0 && (
                                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-md mb-3">
                                  <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-1">💡 Tips:</h5>
                                  <ul className="text-sm text-blue-800 dark:text-blue-200 list-disc list-inside">
                                    {step.tips.map((tip, tipIndex) => (
                                      <li key={tipIndex}>{tip}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              
                              {step.warning && (
                                <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded-md border border-red-200 dark:border-red-800">
                                  <h5 className="font-medium text-red-900 dark:text-red-100 mb-1">⚠️ Warning:</h5>
                                  <p className="text-sm text-red-800 dark:text-red-200">{step.warning}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Circuit Diagram Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Circuit Diagram</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Circuit Diagram */}
                      <div>
                        <h4 className="font-semibold mb-3">Wiring Diagram</h4>
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                          <div className="text-center text-muted-foreground">
                            <Gauge className="h-12 w-12 mx-auto mb-2" />
                            <p className="font-medium">{currentComponent.name} Wiring</p>
                            <p className="text-sm">Circuit diagram will be added here</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pin Configuration */}
                      <div>
                        <h4 className="font-semibold mb-3">Pin Configuration</h4>
                        <div className="space-y-2">
                          {currentComponent.connectionPins?.map((pin, index) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                              <span className="font-medium">{pin}</span>
                              <span className="text-sm text-muted-foreground">
                                {pin === "VCC" ? "5V Power" : pin === "GND" ? "Ground" : "Signal Pin"}
                              </span>
                            </div>
                          ))}
                        </div>
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

                {/* Code Example */}
                {currentComponent.codeSnippet && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Arduino Code Example</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                        <pre className="text-sm">
                          <code>{currentComponent.codeSnippet}</code>
                        </pre>
                      </div>
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-md">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          💡 <strong>How to use:</strong> Copy this code into your Arduino IDE, upload to your MatrixBox, and open the Serial Monitor to see the results.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentGuide;