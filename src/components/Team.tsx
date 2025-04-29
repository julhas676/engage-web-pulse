
import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    position: "Founder & CEO",
    bio: "With 15+ years in digital marketing, Alex leads our team with strategic vision and innovation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    twitter: "#",
    linkedin: "#",
    email: "alex@digimarkpro.com",
  },
  {
    id: 2,
    name: "Jamie Reynolds",
    position: "SEO Specialist",
    bio: "Jamie creates cutting-edge SEO strategies that help our clients rank higher and gain more visibility.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    twitter: "#",
    linkedin: "#",
    email: "jamie@digimarkpro.com",
  },
  {
    id: 3,
    name: "Taylor Wilson",
    position: "Content Director",
    bio: "Taylor leads our content team, crafting compelling stories that engage audiences and drive conversions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    twitter: "#",
    linkedin: "#",
    email: "taylor@digimarkpro.com",
  },
  {
    id: 4,
    name: "Jordan Smith",
    position: "PPC Manager",
    bio: "Jordan optimizes paid campaigns across Google, Facebook, and LinkedIn to maximize ROI for our clients.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    twitter: "#",
    linkedin: "#",
    email: "jordan@digimarkpro.com",
  },
];

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.reveal');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="team" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Our team of digital marketing experts is passionate about helping businesses
            succeed online with innovative strategies and proven results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id}
              className="border-gray-100 overflow-hidden reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-marketing-600 mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.twitter}
                    className="text-gray-600 hover:text-marketing-600 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-marketing-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-marketing-600 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
