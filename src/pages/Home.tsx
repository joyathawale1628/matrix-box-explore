import { ArrowRight, Zap, Users, Award, ChevronDown, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import YouTubeVideo from "@/components/YouTubeVideo";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-hero min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                The <span className="text-green-600">Matrix</span> <span className="text-white">Box</span>
              </h1>
              <p className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
                Unleashing Innovation
              </p>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Empowering students and educators with hands-on learning experiences through cutting-edge educational technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link to="/product">Explore The Matrix Box</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link to="/why-it-matters">Learn Why It Matters</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About The Matrix Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are pioneers in educational technology, dedicated to bridging the gap between theoretical knowledge and practical application. Our mission is to inspire the next generation of innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Cutting-edge technology designed to spark creativity and innovation in every student.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Building a community of learners, educators, and innovators working together.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering exceptional educational experiences and outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Matrix Box Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Meet The Matrix Box
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Matrix Box is more than just an educational kit—it's a gateway to endless possibilities.
                Packed with Arduino microcontrollers, sensors, jumper wires, and components, it provides
                students with everything they need to bring their ideas to life.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From building simple circuits to creating complex IoT projects, The Matrix Box empowers
                learners to explore, experiment, and innovate in ways that traditional textbooks simply cannot.
              </p>
              <Button
                asChild
                size="lg"
                className="gradient-primary text-white shadow-glow hover:scale-105 transition-all"
              >
                <Link to="/product">
                  Discover What's Inside <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="gradient-card rounded-2xl p-8 shadow-card">
              <div className="bg-primary/5 rounded-xl p-12 text-center">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-2xl font-bold text-primary mb-2">The Matrix Box</h3>
                <p className="text-muted-foreground">Your gateway to hands-on learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Play className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Video Tutorials
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch these comprehensive guides to get started with The Matrix Box and unlock its full potential in your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <YouTubeVideo
              videoId="XXXXX"
              title="Introduction to Matrix Box"
              className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300"
            />
            <YouTubeVideo
              videoId="YYYYY"
              title="Matrix Box Setup Guide"
              className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300"
            />
            <YouTubeVideo
              videoId="ZZZZZ"
              title="Using Matrix Box Components"
              className="gradient-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of educators and students who are already experiencing the power of hands-on learning with The Matrix Box.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button
  asChild
  size="lg"
  className="border-white hover:bg-white/10"
>
  <Link to="/why-it-matters" className="text-white">
    Learn More
  </Link>
</Button>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
