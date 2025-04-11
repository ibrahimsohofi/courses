import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "All Courses - EduLearn",
  description: "Browse through our collection of high-quality online courses",
};

export default function CoursesPage() {
  const allCourses = [
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
    {
      id: 5,
      title: "JavaScript Algorithms and Data Structures",
      description: "Master common algorithms and data structures with JavaScript and improve your problem-solving skills",
      price: 94.99,
      instructor: "David Wang",
      level: "Intermediate",
      category: "Programming",
      rating: 4.8,
      students: 9450,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500"
    },
    {
      id: 6,
      title: "Modern React with Redux",
      description: "Build powerful, fast, user-friendly and reactive web apps with React and Redux",
      price: 89.99,
      instructor: "Jessica Martinez",
      level: "Intermediate",
      category: "Programming",
      rating: 4.9,
      students: 11280,
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=500"
    },
    {
      id: 7,
      title: "Advanced Excel for Business Analytics",
      description: "Learn advanced Excel functions, formulas, and data analysis techniques for business intelligence",
      price: 69.99,
      instructor: "Robert Johnson",
      level: "Advanced",
      category: "Business",
      rating: 4.7,
      students: 7890,
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=500"
    },
    {
      id: 8,
      title: "Photography Masterclass",
      description: "Learn photography techniques, composition, lighting, and photo editing with professional photographers",
      price: 79.99,
      instructor: "Lisa Williams",
      level: "All Levels",
      category: "Photography",
      rating: 4.8,
      students: 5640,
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=500"
    },
  ];

  const categories = [
    { id: 1, name: "All Categories", count: allCourses.length },
    { id: 2, name: "Programming", count: 3 },
    { id: 3, name: "Business", count: 1 },
    { id: 4, name: "Design", count: 1 },
    { id: 5, name: "Marketing", count: 1 },
    { id: 6, name: "Data Science", count: 1 },
    { id: 7, name: "Photography", count: 1 },
  ];

  const levels = [
    { id: 1, name: "All Levels" },
    { id: 2, name: "Beginner" },
    { id: 3, name: "Intermediate" },
    { id: 4, name: "Advanced" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-2 mb-10">
        <h1 className="text-4xl font-bold">All Courses</h1>
        <p className="text-xl text-muted-foreground">
          Browse through our collection of high-quality online courses
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar / Filters */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Search</h3>
            <div className="relative">
              <Input placeholder="Search courses..." />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <Button variant="ghost" className="justify-start px-2 py-1 h-auto w-full text-left">
                    {category.name}
                  </Button>
                  <Badge variant="secondary">{category.count}</Badge>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3">Level</h3>
            <div className="space-y-1">
              {levels.map((level) => (
                <div key={level.id} className="flex items-center">
                  <Button variant="ghost" className="justify-start px-2 py-1 h-auto text-left">
                    {level.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-3">Price Range</h3>
            <div className="space-y-1">
              <Button variant="ghost" className="justify-start px-2 py-1 h-auto w-full text-left">
                All Prices
              </Button>
              <Button variant="ghost" className="justify-start px-2 py-1 h-auto w-full text-left">
                Free
              </Button>
              <Button variant="ghost" className="justify-start px-2 py-1 h-auto w-full text-left">
                Paid
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">Showing {allCourses.length} results</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Tabs defaultValue="popular">
                <TabsList>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="newest">Newest</TabsTrigger>
                  <TabsTrigger value="price-low">Price: Low to High</TabsTrigger>
                  <TabsTrigger value="price-high">Price: High to Low</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allCourses.map((course) => (
              <Card key={course.id} className="course-card overflow-hidden flex flex-col">
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
                <CardFooter className="p-4 flex justify-between items-center border-t mt-auto">
                  <div className="font-bold text-lg">${course.price}</div>
                  <Link href={`/courses/${course.id}`}>
                    <Button>View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
