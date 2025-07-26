import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "matrixtechnologies541@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9371447027, +91 7058538816",
      description: "Mon-Fri, 9AM-6PM "
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Orange City Kamptee Road Nagpur Maharashtra 441001, India",
      description: "Schedule a visit to our office"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to bring The Matrix Box to your classroom? We're here to help you get started.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="gradient-card shadow-card hover:shadow-glow transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">School/Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Bulk order inquiry, Demo request"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us about your needs, questions, or how we can help..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary text-white shadow-glow hover:scale-105 transition-all">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-primary">Response Time</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• General inquiries: Same day response</li>
                    <li>• Bulk orders: Within 24 hours</li>
                    <li>• Technical support: Within 2 hours</li>
                    <li>• Demo requests: Within 48 hours</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-primary">Who We Serve</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The Matrix Box is designed for a wide range of educational environments:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• K-12 Schools and Districts</li>
                    <li>• Universities and Colleges</li>
                    <li>• STEM Programs and Camps</li>
                    <li>• Maker Spaces and Libraries</li>
                    <li>• Homeschool Communities</li>
                    <li>• Corporate Training Programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">What's included in The Matrix Box?</h4>
                      <p className="text-sm text-muted-foreground">
                        Each box includes Arduino microcontroller, various sensors, jumper wires, electronic components, and comprehensive project guides.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Do you offer bulk pricing?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! We offer significant discounts for schools and organizations ordering multiple units.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Is training provided?</h4>
                      <p className="text-sm text-muted-foreground">
                        We offer comprehensive teacher training programs and ongoing support to ensure successful implementation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of educators who are already using The Matrix Box to inspire the next generation of innovators.
          </p>
          <p className="text-lg text-white/80">
            Contact us today to schedule a demo or discuss your specific needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;