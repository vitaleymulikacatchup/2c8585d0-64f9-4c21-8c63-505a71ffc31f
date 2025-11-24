"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Clock, Coffee, Droplet, Droplets, Flame, Globe, Leaf, Snowflake, Sparkles, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="medium"
      background="grid"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CafeBrew"
          navItems={[
            { name: "Menu", id: "features" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Reserve",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Premium Coffee Experience"
          description="Discover the finest specialty coffee crafted by expert baristas. Every cup tells a story of quality and passion."
          tag="Coffee Only"
          buttons={[
            { text: "Explore Menu", href: "features" },
            { text: "Visit Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973773619-6c1gzkpc.jpg",
              imageAlt: "Espresso machine with barista preparing coffee"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973774482-uko4rt4v.jpg",
              imageAlt: "Latte art in coffee cup"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973775158-a6ggeraq.jpg",
              imageAlt: "Coffee beans and pour over brewing"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973775887-7q5f8smv.jpg",
              imageAlt: "Warm coffee shop interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973776539-264c60z1.jpg",
              imageAlt: "Professional cappuccino beverage"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="CafeBrew is dedicated to bringing you the finest specialty coffee experience. We source beans from sustainable farms and roast them fresh daily for unmatched flavor and quality."
          metrics={[
            { icon: Coffee, label: "Coffee Varieties", value: "25+" },
            { icon: Award, label: "Years Experience", value: "12" },
            { icon: Users, label: "Regular Customers", value: "2K+" },
            { icon: Globe, label: "Coffee Origins", value: "15" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Our Coffee Craftsmanship"
          description="Experience the artistry of coffee making through our signature preparation methods"
          tag="Brewing Methods"
          features={[
            {
              id: "1",
              title: "Espresso Excellence",
              description: "Double-shot espresso pulled with precision using our Italian-made machines. Bold, intense, and perfectly balanced.",
              reverse: false,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973777041-j69msdxh.jpg",
                imageAlt: "Professional espresso machine"
              },
              items: [
                { icon: Zap, text: "30-second pull time" },
                { icon: Flame, text: "200°F optimal temperature" },
                { icon: Award, text: "Championship recipe" }
              ]
            },
            {
              id: "2",
              title: "Pour Over Perfection",
              description: "Slow-drip brewing method that extracts pure coffee flavor. A ritual of patience and craft for coffee purists.",
              reverse: true,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973777686-6y7js64f.jpg",
                imageAlt: "Pour over coffee brewing"
              },
              items: [
                { icon: Droplet, text: "Hand-poured precision" },
                { icon: Clock, text: "4 minute brew time" },
                { icon: Leaf, text: "Single origin beans" }
              ]
            },
            {
              id: "3",
              title: "Cold Brew Magic",
              description: "Smooth and refreshing cold brew steeped for 12 hours. Perfect for hot days or iced coffee lovers.",
              reverse: false,
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973778492-io3oxdjj.jpg",
                imageAlt: "Cold brew iced coffee"
              },
              items: [
                { icon: Snowflake, text: "12-hour steep" },
                { icon: Droplets, text: "Smooth and mellow" },
                { icon: Sparkles, text: "Zero bitterness" }
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Coffee Lovers Say"
          description="Real stories from people who appreciate exceptional coffee crafted with care and expertise."
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Coffee Enthusiast",
              company: "Local Coffee Roasters",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973779407-80tn8oez.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Chen",
              role: "Barista Professional",
              company: "Espresso Society",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973780306-25mjguzn.jpg",
              imageAlt: "James Chen portrait"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Daily Regular",
              company: "CafeBrew Fan",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973781036-v2c33dtf.jpg",
              imageAlt: "Emma Rodriguez portrait"
            },
            {
              id: "4",
              name: "Michael Park",
              role: "Coffee Critic",
              company: "Bean Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973781711-gj12he5c.jpg",
              imageAlt: "Michael Park portrait"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Morning Ritual",
              company: "Downtown Office",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973782532-em4laf6v.jpg",
              imageAlt: "Lisa Thompson portrait"
            },
            {
              id: "6",
              name: "David Nguyen",
              role: "Weekend Visitor",
              company: "Coffee Community",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973783254-ewascrhf.jpg",
              imageAlt: "David Nguyen portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready for Your Perfect Cup?"
          description="Reserve a table or send us a message. We'd love to serve you an exceptional coffee experience."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your coffee preferences or reservation details...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763973784125-sc39imt3.jpg"
          imageAlt="Cozy coffee shop interior"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CafeBrew"
          columns={[
            {
              items: [
                { label: "Hours", href: "#" },
                { label: "Mon-Fri: 6am - 8pm", href: "#" },
                { label: "Sat-Sun: 7am - 9pm", href: "#" }
              ]
            },
            {
              items: [
                { label: "Location", href: "#" },
                { label: "123 Coffee Street", href: "#" },
                { label: "Downtown District", href: "#" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "#" },
                { label: "(555) 123-4567", href: "#" },
                { label: "hello@cafebrew.com", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}