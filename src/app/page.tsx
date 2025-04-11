import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn modern web development from scratch with HTML, CSS, JavaScript, React and Node.js",
      price: 99.99,
      instructor: "John Smith",
      level: "Beginner",
      category: "Programming",
      rating: 4.8,
      students: 15240,
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500"
    },
    {
      id: 2,
      title: "Python for Data Science",
      description: "Master Python for data analysis, machine learning, and data visualization",
      price: 89.99,
      instructor: "Sarah Johnson",
      level: "Intermediate",
      category: "Data Science",
      rating: 4.7,
      students: 12350,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=500"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      description: "Learn SEO, social media marketing, email campaigns, and analytics to grow your business",
      price: 79.99,
      instructor: "Michael Brown",
      level: "All Levels",
      category: "Marketing",
      rating: 4.9,
      students: 8730,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=500"
    },
    {
      id: 4,
      title: "UX/UI Design Fundamentals",
      description: "Create stunning user interfaces and seamless experiences with modern design principles",
      price: 69.99,
      instructor: "Emily Chen",
      level: "Beginner",
      category: "Design",
      rating: 4.6,
      students: 6280,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=500"
    },
  ];

  const categories = [
    { id: 1, name: "Programming", icon: "💻", count: 240 },
    { id: 2, name: "Business", icon: "📈", count: 183 },
    { id: 3, name: "Design", icon: "🎨", count: 139 },
    { id: 4, name: "Marketing", icon: "📱", count: 112 },
    { id: 5, name: "Data Science", icon: "📊", count: 97 },
    { id: 6, name: "Personal Development", icon: "🧠", count: 84 },
    { id: 7, name: "Photography", icon: "📸", count: 65 },
    { id: 8, name: "Music", icon: "🎵", count: 52 },
  ];

  const testimonials = [
    {
      id: 1,
      text: "The courses on EduLearn transformed my career. I went from knowing nothing about programming to landing a job as a frontend developer in just 6 months.",
      name: "Alex Thompson",
      position: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
    },
    {
      id: 2,
      text: "The quality of instruction is outstanding. The platform is intuitive and the course materials are comprehensive. I've taken courses on other platforms, but EduLearn is by far the best.",
      name: "Miguel Rodriguez",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
    },
    {
      id: 3,
      text: "I was able to acquire new skills while working full-time thanks to the flexibility of EduLearn's platform. The mobile app makes learning on-the-go so convenient.",
      name: "Lisa Wang",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-6">
              <Badge className="w-fit" variant="outline">The Future of Learning</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Learn without limits
              </h1>
              <p className="text-xl text-muted-foreground">
                Start, switch, or advance your career with thousands of courses from expert instructors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Courses
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Join for Free
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="mr-2">✓</span> 2,500+ courses
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span> Expert instructors
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span> Lifetime access
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b"
                alt="Online learning"
                width={600}
                height={450}
                className="rounded-lg shadow-xl"
                priority
              />
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-500 h-4 w-4" />
                  <span className="font-medium">50K+ students currently online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Explore Top Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Browse through the most popular categories and find the perfect course to enhance your skills
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link href={`/categories/${category.name.toLowerCase()}`} key={category.id}>
                <div className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300 border">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} courses</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Handpicked courses by our team to get you started with in-demand skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="course-card overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="mb-2">
                      {course.category}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-1">By</span>
                    <span className="font-medium mr-2 text-foreground">{course.instructor}</span>
                    <span className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      {course.rating}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </CardContent>
                <CardFooter className="p-4 flex justify-between items-center border-t">
                  <div className="font-bold text-lg">${course.price}</div>
                  <Link href={`/courses/${course.id}`}>
                    <Button>View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2.5M+</div>
              <div className="text-primary-foreground/70">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-primary-foreground/70">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-primary-foreground/70">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15M+</div>
              <div className="text-primary-foreground/70">Course Enrollments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Hear from our students who have transformed their careers through our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border p-6">
                <CardContent className="p-0 mb-6">
                  <p className="italic">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="p-0 flex items-center space-x-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your learning journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already learning and growing with EduLearn
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button size="lg">
                Browse Courses
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Sign Up for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
