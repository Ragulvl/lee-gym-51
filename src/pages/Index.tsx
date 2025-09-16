import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Dumbbell, 
  Heart, 
  Users, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  Play,
  Calendar,
  Target
} from 'lucide-react';

// Import images
import logoImage from '@/assets/lee-gym-logo-new.png';
import heroImage from '@/assets/gym-main-floor.jpg';
import gymInteriorImage from '@/assets/gym-weight-area.jpg';
import trainer1Image from '@/assets/trainer-1.jpg';
import trainer2Image from '@/assets/trainer-2.jpg';
import trainer3Image from '@/assets/trainer-3.jpg';

// Import gallery images for fast loading
import gymSquatRacks from '@/assets/gym-squat-racks.jpg';
import gymFreeWeights from '@/assets/gym-free-weights.jpg';
import gymCardioArea from '@/assets/gym-cardio-area.jpg';
import gymStrengthTraining from '@/assets/gym-strength-training.jpg';

// Import components
import Map from '@/components/Map';


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Navigation scroll functionality
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Testimonial carousel
  const testimonials = [
    {
      name: "Priya Sharma",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=b6e3f4,c0aede,d1d4f9",
      text: "Lee Gym transformed my life! Lost 15 kgs and gained so much confidence. The trainers are amazing!",
      rating: 5
    },
    {
      name: "Arjun Patel",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=b6e3f4,c0aede,d1d4f9",
      text: "Best gym in Coimbatore! Modern equipment, clean facilities, and the staff really cares about your progress.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha&backgroundColor=b6e3f4,c0aede,d1d4f9",
      text: "The yoga classes here are incredible. Perfect balance of strength training and mindfulness.",
      rating: 5
    },
    {
      name: "Rohit Singh",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit&backgroundColor=b6e3f4,c0aede,d1d4f9",
      text: "Personal training sessions helped me reach goals I never thought possible. Highly recommend!",
      rating: 5
    }
  ];

  useEffect(() => {
    console.log('Testimonials data:', testimonials);
    console.log('Current testimonial index:', currentTestimonial);
    console.log('Current testimonial:', testimonials[currentTestimonial]);
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const services = [
    {
      icon: <Dumbbell className="w-12 h-12 text-primary" />,
      title: "Weight Training",
      description: "Build strength and muscle with our state-of-the-art equipment and expert guidance."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Cardio",
      description: "Improve your cardiovascular health with our modern cardio equipment and classes."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific fitness goals and needs."
    },
    {
      icon: <Play className="w-12 h-12 text-primary" />,
      title: "Group Classes",
      description: "Join our energetic group fitness classes and workout with like-minded people."
    }
  ];

  const trainers = [
    {
      name: "Charlee",
      image: trainer1Image,
      expertise: "All-Round Fitness Trainer",
      experience: "12 years",
      specialties: ["Weight Training", "Cardio", "Personal Training", "Nutrition"],
      social: {
        instagram: "#",
        facebook: "#"
      }
    }
  ];

  const pricingPlans = [
    {
      name: "Monthly",
      price: "₹2,999",
      period: "/month",
      features: [
        "Access to all equipment",
        "Group fitness classes",
        "Locker room access",
        "Free WiFi",
        "Basic fitness assessment"
      ],
      popular: false
    },
    {
      name: "Quarterly",
      price: "₹7,999",
      period: "/3 months",
      features: [
        "Everything in Monthly",
        "1 personal training session",
        "Nutrition consultation",
        "Guest passes (2/month)",
        "Priority class booking"
      ],
      popular: true
    },
    {
      name: "Yearly",
      price: "₹24,999",
      period: "/year",
      features: [
        "Everything in Quarterly",
        "4 personal training sessions",
        "Monthly body composition analysis",
        "Unlimited guest passes",
        "Exclusive member events",
        "Supplement discounts"
      ],
      popular: false
    }
  ];

  const schedule = [
    { 
      day: "Monday - Chest Day", 
      exercise1: "Bench Press", 
      exercise2: "Incline Press", 
      exercise3: "Chest Fly", 
      exercise4: "Push-ups", 
      exercise5: "Dips" 
    },
    { 
      day: "Tuesday - Biceps Day", 
      exercise1: "Barbell Curls", 
      exercise2: "Hammer Curls", 
      exercise3: "Preacher Curls", 
      exercise4: "Cable Curls", 
      exercise5: "Chin-ups" 
    },
    { 
      day: "Wednesday - Forearms Day", 
      exercise1: "Wrist Curls", 
      exercise2: "Reverse Curls", 
      exercise3: "Farmer's Walk", 
      exercise4: "Grip Squeeze", 
      exercise5: "Forearm Plank" 
    },
    { 
      day: "Thursday - Back Day", 
      exercise1: "Pull-ups", 
      exercise2: "Lat Pulldown", 
      exercise3: "Barbell Rows", 
      exercise4: "Deadlifts", 
      exercise5: "Face Pulls" 
    },
    { 
      day: "Friday - Shoulder Day", 
      exercise1: "Shoulder Press", 
      exercise2: "Lateral Raise", 
      exercise3: "Front Raise", 
      exercise4: "Rear Delt Fly", 
      exercise5: "Shrugs" 
    },
    { 
      day: "Saturday - Legs Day", 
      exercise1: "Squats", 
      exercise2: "Lunges", 
      exercise3: "Leg Press", 
      exercise4: "Calf Raises", 
      exercise5: "Leg Curls" 
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Lee Gym" className="h-12 w-12 object-contain" loading="eager" />
              <span className="text-xl font-black text-primary">LEE GYM</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Gallery', 'Trainers', 'Schedule', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors font-semibold"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-card border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['Home', 'About', 'Services', 'Gallery', 'Trainers', 'Schedule', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-semibold"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <img src={logoImage} alt="Lee Gym" className="h-28 w-28 mx-auto mb-6" loading="eager" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 glow-text">
            Transform Your Body at{" "}
            <span className="bg-gradient-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
              LEE GYM
            </span>
          </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Join our community of fitness enthusiasts and achieve your goals with professional trainers, modern equipment, and proven results.
            </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hero-button text-xl px-8 py-4 animate-pulse-glow"
          >
            Join Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-header">About Lee Gym</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <p className="text-lg mb-6 text-muted-foreground">
                For over a decade, Lee Gym has been the premier fitness destination in Coimbatore, 
                helping thousands transform their lives through fitness. Our state-of-the-art 
                facility combines cutting-edge equipment with expert guidance to deliver 
                unmatched results.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Whether you're a beginner starting your fitness journey or an experienced 
                athlete pushing your limits, our team of certified trainers will support 
                you every step of the way.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-black text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Members</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Expert Trainers</div>
                </div>
              </div>
            </div>
            <div className="slide-up">
              <img 
                src={gymInteriorImage} 
                alt="Modern gym interior featuring professional weight training equipment with red upholstery and gray-yellow color scheme"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-header">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className={`gym-card slide-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Gallery Section */}
      <section id="gallery" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-header">Explore Our Facility</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities featuring modern equipment, 
            spacious workout areas, and a clean, motivating environment.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src={gymInteriorImage} 
                  alt="Main weight training area with professional equipment and red upholstery"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    console.log('Gallery image failed to load:', gymInteriorImage);
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.border = '2px dashed #9ca3af';
                  }}
                  onLoad={() => {
                    console.log('Gallery image loaded successfully:', gymInteriorImage);
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Weight Training Area</h3>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="group overflow-hidden rounded-xl">
                <div className="relative">
                  <img 
                    src={gymSquatRacks} 
                    alt="Professional squat racks and power stations for strength training"
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      console.log('Squat racks image failed to load:', gymSquatRacks);
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                      e.currentTarget.style.border = '2px dashed #9ca3af';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-sm font-bold">Squat Racks</h3>
                  </div>
                </div>
              </div>
              
              <div className="group overflow-hidden rounded-xl">
                <div className="relative">
                  <img 
                    src={gymFreeWeights} 
                    alt="Comprehensive free weights section with dumbbells and plate weights"
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      console.log('Free weights image failed to load:', gymFreeWeights);
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                      e.currentTarget.style.border = '2px dashed #9ca3af';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-sm font-bold">Free Weights</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-xl">
              <div className="relative">
                <img 
                  src={gymCardioArea} 
                  alt="Cardio area with treadmills and modern cardiovascular equipment"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    console.log('Cardio area image failed to load:', gymCardioArea);
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.border = '2px dashed #9ca3af';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold">Cardio Zone</h3>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 group overflow-hidden rounded-xl">
              <div className="relative">
                <img 
                  src={gymStrengthTraining} 
                  alt="Strength training zone with specialized machines and olympic plates"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    console.log('Strength training image failed to load:', gymStrengthTraining);
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.border = '2px dashed #9ca3af';
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold">Strength Training Zone</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Visit Our Facility Today
            </Button>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-header">Meet Our Trainers</h2>
          <div className="flex justify-center">
            {trainers.map((trainer, index) => (
              <Card key={trainer.name} className={`gym-card text-center slide-up max-w-md`} style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{trainer.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {trainer.expertise}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {trainer.experience} of experience
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {trainer.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href={trainer.social.instagram} className="text-primary hover:text-primary/80">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href={trainer.social.facebook} className="text-primary hover:text-primary/80">
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-header">Weekly Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl overflow-hidden shadow-2xl">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="p-4 text-left font-bold">Training Day</th>
                  <th className="p-4 text-center font-bold">Exercise 1</th>
                  <th className="p-4 text-center font-bold">Exercise 2</th>
                  <th className="p-4 text-center font-bold">Exercise 3</th>
                  <th className="p-4 text-center font-bold">Exercise 4</th>
                  <th className="p-4 text-center font-bold">Exercise 5</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((day, index) => (
                  <tr key={day.day} className={index % 2 === 0 ? 'bg-muted/50' : 'bg-card'}>
                    <td className="p-4 font-semibold text-primary">{day.day}</td>
                    <td className="p-4 text-center">{day.exercise1}</td>
                    <td className="p-4 text-center">{day.exercise2}</td>
                    <td className="p-4 text-center">{day.exercise3}</td>
                    <td className="p-4 text-center">{day.exercise4}</td>
                    <td className="p-4 text-center">{day.exercise5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Download PDF Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-header">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`gym-card relative ${plan.popular ? 'border-primary border-2 scale-105' : ''} slide-up`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-black text-primary">
                    {plan.price}
                    <span className="text-lg text-muted-foreground font-normal">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToSection('contact')}
                  >
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-header">What Our Members Say</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="gym-card text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                   <img 
                     src={testimonials[currentTestimonial].image}
                     alt={testimonials[currentTestimonial].name}
                     className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-primary object-cover"
                     onError={(e) => {
                       console.log('Image failed to load:', testimonials[currentTestimonial].image);
                       e.currentTarget.style.display = 'none';
                     }}
                     onLoad={() => {
                       console.log('Image loaded successfully:', testimonials[currentTestimonial].image);
                     }}
                   />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-4 text-muted-foreground">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <p className="font-bold text-primary text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-header">Get In Touch</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <Card className="gym-card h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                  <CardDescription>
                    Ready to start your fitness journey? Contact us today!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input type="tel" placeholder="Your Mobile Number (+91)" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info and Map */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="gym-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Visit Our Gym</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Details */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Address</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Nikki Towers, Sri, Pappampatti Rd,<br />
                            Pallapalayam, Kannampalayam,<br />
                            Coimbatore, Tamil Nadu 641402
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Phone</p>
                          <p className="text-muted-foreground">+91 6238769097</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <p className="text-muted-foreground">info@leegym.in</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div className="w-full">
                        <p className="font-semibold mb-3">Hours</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Mon:</span>
                            <span className="text-muted-foreground font-medium">5:30 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Tue:</span>
                            <span className="text-muted-foreground font-medium">5:30 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Wed:</span>
                            <span className="text-muted-foreground font-medium">5:00 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Thu:</span>
                            <span className="text-muted-foreground font-medium">5:30 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Fri:</span>
                            <span className="text-muted-foreground font-medium">5:30 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sat:</span>
                            <span className="text-muted-foreground font-medium">5:30 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sun:</span>
                            <span className="text-red-500 font-medium">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Map */}
              <Map />
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoImage} alt="Lee Gym" className="h-8 w-8" />
                <span className="text-xl font-black text-primary">LEE GYM</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Transform your body and mind with professional fitness training and modern equipment.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Services', 'Trainers', 'Pricing'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Weight Training</li>
                <li>Cardio Workouts</li>
                <li>Yoga Classes</li>
                <li>Personal Training</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Lee Gym. All rights reserved. Transform your body, transform your life.</p>
          </div>
        </div>
      </footer>

      {/* Floating Join Button */}
      <button
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-40 pulse-glow"
      >
        <Dumbbell className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Index;