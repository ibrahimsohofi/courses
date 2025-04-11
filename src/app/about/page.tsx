import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us - EduLearn",
  description: "Learn about EduLearn's mission, vision, and the team behind the platform",
};

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO & Founder",
      bio: "John has over 15 years of experience in education technology. He founded EduLearn with a mission to make quality education accessible to everyone.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Chief Learning Officer",
      bio: "Sarah is passionate about creating effective learning experiences. With a PhD in Education, she oversees our curriculum development and teaching strategies.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "CTO",
      bio: "Michael brings 10+ years of tech leadership experience. He ensures our platform delivers a seamless learning experience with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduLearn</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mb-8">
          We're on a mission to transform online education by making high-quality courses accessible to everyone, everywhere.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-lg">
            <p>
              EduLearn was founded in 2020 with a simple yet powerful vision: to create a world where anyone, anywhere can transform their life through learning.
            </p>
            <p>
              We believe that education is the most powerful force for change in the world. By connecting students to the best instructors, we're helping individuals reach their goals and pursue their dreams.
            </p>
            <p>
              Today, EduLearn serves millions of students globally, offering courses in everything from programming and data science to business, design, and personal development.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
            alt="Team collaborating"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="bg-secondary/50 rounded-lg p-12 mb-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-xl max-w-3xl mx-auto">
          To provide transformative learning experiences that are accessible, affordable, and empower our students to achieve their personal and professional goals.
        </p>
      </div>

      {/* Our Team Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate educators, technologists, and lifelong learners who make EduLearn possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-card rounded-lg overflow-hidden border">
              <div className="aspect-[3/2] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary mb-4">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
        <div className="bg-background p-6 rounded-lg border">
          <div className="text-4xl font-bold mb-2 text-primary">2.5M+</div>
          <div>Students Worldwide</div>
        </div>
        <div className="bg-background p-6 rounded-lg border">
          <div className="text-4xl font-bold mb-2 text-primary">5,000+</div>
          <div>Courses Available</div>
        </div>
        <div className="bg-background p-6 rounded-lg border">
          <div className="text-4xl font-bold mb-2 text-primary">300+</div>
          <div>Expert Instructors</div>
        </div>
        <div className="bg-background p-6 rounded-lg border">
          <div className="text-4xl font-bold mb-2 text-primary">150+</div>
          <div>Countries Reached</div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Start your learning journey today and unlock your potential with thousands of courses taught by expert instructors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/courses">
            <Button size="lg">
              Explore Courses
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline" size="lg">
              Sign Up for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
