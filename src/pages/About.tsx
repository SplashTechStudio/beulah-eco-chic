import { useState } from "react";
import { ChevronDown, Users, Target, Heart, Building, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [ourClientsOpen, setOurClientsOpen] = useState(false);
  const [ourCoreOpen, setOurCoreOpen] = useState(false);

  const clients = [
    "European Union",
    "African Development Bank",
    "Federal Government of Nigeria",
    "State Governments",
    "Local Government Councils",
    "Nigeria Police Force",
    "Private Companies",
    "Ministries/Parastatals"
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "Pioneering sustainable technologies and cutting-edge solutions"
    },
    {
      title: "Quality",
      description: "Uncompromising standards in all our products and services"
    },
    {
      title: "Sustainability",
      description: "Committed to environmental responsibility and green solutions"
    },
    {
      title: "Excellence",
      description: "Delivering superior results that exceed expectations"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Beulah</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Leading innovation in sustainable interior solutions since our establishment
          </p>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('who-we-are')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Who We Are
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('our-clients')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Our Clients
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('our-core')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Our Core Values
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-16">
        <div className="container mx-auto px-4">
          <Collapsible open={whoWeAreOpen} onOpenChange={setWhoWeAreOpen}>
            <CollapsibleTrigger asChild>
              <Card className="card-gradient border-0 shadow-medium hover-lift cursor-pointer mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Who We Are</h2>
                    </div>
                    <ChevronDown className={`h-6 w-6 transition-transform ${whoWeAreOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-fade-in">
              <Card className="card-gradient border-0 shadow-medium mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg mb-6">
                      Beulah Technologies and Innovatives LTD has been a trusted name in innovative interior solutions, 
                      operating successfully for years and serving individuals and organizations who have enjoyed our 
                      exceptional services.
                    </p>
                    
                    <p className="mb-6">
                      Our company was formalized and came into full operations with a vision to revolutionize the interior 
                      decor industry through sustainable and innovative solutions. Since our incorporation, we have 
                      consistently met the increasing market demands for premium interior solutions, sustainable building 
                      materials, smart home technologies, eco-friendly equipment, and comprehensive design services.
                    </p>
                    
                    <p className="mb-6">
                      The wealth of experience and technical know-how of our management team has made us a team of 
                      uncommon professionals with a common aim and objective based on rendering competent and quality 
                      services to our esteemed clients.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
                        <p>Delivering quality sustainable interior solutions all the time, creating beautiful spaces that care for the planet.</p>
                      </div>
                      <div className="bg-accent/10 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3 text-accent">Our Vision</h3>
                        <p>To be the preferred sustainable interior solutions company of choice in Africa, recognized for innovation and environmental responsibility.</p>
                      </div>
                    </div>

                    <div className="bg-success/10 p-6 rounded-lg mt-6">
                      <h3 className="text-xl font-semibold mb-3 text-success">Our Objective</h3>
                      <p>
                        To provide broad-based sustainable interior solutions that are locally oriented, 
                        collaborating with competent partners where necessary to deliver innovative, 
                        eco-friendly products that put smiles on our customers' faces while providing 
                        exceptional value for money invested.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Our Clients Section */}
      <section id="our-clients" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Collapsible open={ourClientsOpen} onOpenChange={setOurClientsOpen}>
            <CollapsibleTrigger asChild>
              <Card className="card-gradient border-0 shadow-medium hover-lift cursor-pointer mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Building className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Our Clients</h2>
                    </div>
                    <ChevronDown className={`h-6 w-6 transition-transform ${ourClientsOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-fade-in">
              <Card className="card-gradient border-0 shadow-medium mb-8">
                <CardContent className="p-8">
                  <p className="text-lg mb-8">
                    Beulah Technologies and Innovatives LTD has built a reputable standing with our diverse client base. 
                    Our commitment to sustainable interior solutions and innovative technologies has earned us the trust 
                    of prestigious organizations across various sectors.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {clients.map((client, index) => (
                      <div key={index} className="bg-primary/10 p-4 rounded-lg text-center">
                        <span className="font-medium text-primary">{client}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground">
                    Our diverse clientele has exposed us to various types of projects, from residential renovations 
                    to large-scale commercial installations, all of which we have completed to the highest standards 
                    of quality and sustainability.
                  </p>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section id="our-core" className="py-16">
        <div className="container mx-auto px-4">
          <Collapsible open={ourCoreOpen} onOpenChange={setOurCoreOpen}>
            <CollapsibleTrigger asChild>
              <Card className="card-gradient border-0 shadow-medium hover-lift cursor-pointer mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Heart className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Our Core Values</h2>
                    </div>
                    <ChevronDown className={`h-6 w-6 transition-transform ${ourCoreOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <Card key={index} className="card-gradient border-0 shadow-medium hover-lift">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 hero-text">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space sustainably? Contact us today for consultation and quotes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="card-gradient border-0 shadow-medium hover-lift text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>+234 902 552 9623</p>
                  <p>+234 817 116 6611</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-0 shadow-medium hover-lift text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <p className="text-muted-foreground">beulah247solution@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-0 shadow-medium hover-lift text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-muted-foreground">
                  Warehouse 1, Korstin Muller Complex,<br />
                  Idu Industrial Area, Abuja, Nigeria
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;