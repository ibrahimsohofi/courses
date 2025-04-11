import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
      image: "/images/courses/web-development.jpg"
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
      image: "/images/courses/python-data-science.jpg"
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
      image: "/images/courses/digital-marketing.jpg"
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
      image: "/images/courses/ux-ui-design.jpg"
    },
    {
      id: 5,
      title: "JavaScript Advanced Concepts",
      description: "Dive deep into advanced JavaScript features like closures, prototypes, and asynchronous patterns",
      price: 89.99,
      instructor: "David Wilson",
      level: "Advanced",
      category: "Programming",
      rating: 4.9,
      students: 7820,
      image: "/images/courses/javascript-advanced.jpg"
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps for iOS and Android with React Native",
      price: 94.99,
      instructor: "Jessica Lee",
      level: "Intermediate",
      category: "Programming",
      rating: 4.7,
      students: 5630,
      image: "/images/courses/react-native.jpg"
    },
    {
      id: 7,
      title: "Advanced Excel for Business Analysis",
      description: "Master Excel functions, pivot tables, macros, and data analysis for business insights",
      price: 59.99,
      instructor: "Robert Johnson",
      level: "Intermediate",
      category: "Business",
      rating: 4.8,
      students: 9240,
      image: "/images/courses/excel-business.jpg"
    },
    {
      id: 8,
      title: "Content Creation and Video Editing",
      description: "Learn to create engaging content and edit professional videos for social media",
      price: 69.99,
      instructor: "Maria Garcia",
      level: "Beginner",
      category: "Marketing",
      rating: 4.6,
      students: 4270,
      image: "/images/courses/content-creation.jpg"
    },
  ];

  const categories = [
    { id: 1, name: "All Categories" },
    { id: 2, name: "Programming" },
    { id: 3, name: "Business" },
    { id: 4, name: "Design" },
    { id: 5, name: "Marketing" },
    { id: 6, name: "Data Science" },
  ];

  const levels = [
    { id: 1, name: "All Levels" },
    { id: 2, name: "Beginner" },
    { id: 3, name: "Intermediate" },
    { id: 4, name: "Advanced" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">All Courses</h1>
        <p className="text-muted-foreground text-lg">Browse our extensive collection of courses to enhance your skills</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 bg-secondary/50 rounded-lg p-6">
        <div className="flex-1">
          <Input type="text" placeholder="Search courses..." className="w-full" />
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all-categories">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.name.toLowerCase().replace(/\s+/g, '-')}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all-levels">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((level) => (
                <SelectItem key={level.id} value={level.name.toLowerCase().replace(/\s+/g, '-')}>
                  {level.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allCourses.map((course) => (
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
    </div>
  );
}
