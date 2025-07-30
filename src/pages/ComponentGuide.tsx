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
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <currentComponent.icon className="h-8 w-8 text-primary" />
                        <div>
                          <CardTitle className="text-2xl">{currentComponent.name}</CardTitle>
                          <CardDescription className="text-lg mt-1">
                            {currentComponent.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">
                          {currentComponent.difficulty}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          Pins: {currentComponent.connectionPins?.join(", ")}
                        </div>
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
                        <div key={index} className="p-4 bg-muted rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{project.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {project.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {project.description}
                          </p>
                          <Button variant="outline" size="sm">
                            Try This Project
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