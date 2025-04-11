import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Metadata } from "next";

// Mock data
const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn modern web development from scratch with HTML, CSS, JavaScript, React and Node.js",
    longDescription: "This comprehensive web development bootcamp takes you from absolute beginner to advanced developer. You'll learn the fundamentals of HTML, CSS, and JavaScript before diving into modern frameworks like React.",
    price: 99.99,
    instructor: "John Smith",
    level: "Beginner",
    category: "Programming",
    rating: 4.8,
    students: 15240,
    image: "/images/courses/web-development.jpg",
    duration: "40 hours",
    totalLectures: 325,
    lastUpdated: "November 2023",
    language: "English",
    features: [
      "Lifetime Access",
      "Mobile & TV Access",
      "Certificate of Completion",
      "Coding Exercises",
      "Downloadable Resources",
    ],
    curriculum: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lectures: [
          { id: 1, title: "Course Overview", duration: "5:30", preview: true },
          { id: 2, title: "How the Web Works", duration: "12:45", preview: false },
        ]
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        lectures: [
          { id: 3, title: "HTML Document Structure", duration: "14:10", preview: true },
          { id: 4, title: "Working with Text Elements", duration: "15:35", preview: false },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Master Python for data analysis, machine learning, and data visualization",
    longDescription: "This comprehensive Python course is designed to take you from beginner to professional in the field of data science. You'll learn Python fundamentals before diving into powerful libraries like NumPy, Pandas, and Matplotlib.",
    price: 89.99,
    instructor: "Sarah Johnson",
    level: "Intermediate",
    category: "Data Science",
    rating: 4.7,
    students: 12350,
    image: "/images/courses/python-data-science.jpg",
    duration: "35 hours",
    totalLectures: 280,
    lastUpdated: "December 2023",
    language: "English",
    features: [
      "Lifetime Access",
      "Mobile & TV Access",
      "Certificate of Completion",
      "Coding Exercises",
      "Downloadable Resources",
    ],
    curriculum: [
      {
        id: 1,
        title: "Introduction to Python",
        lectures: [
          { id: 1, title: "Course Overview", duration: "6:15", preview: true },
          { id: 2, title: "Setting Up Your Python Environment", duration: "14:30", preview: false },
        ]
      },
      {
        id: 2,
        title: "Python Fundamentals",
        lectures: [
          { id: 3, title: "Control Flow: Conditionals and Loops", duration: "22:10", preview: true },
          { id: 4, title: "Functions and Modules", duration: "18:35", preview: false },
        ]
      }
    ]
  }
];

type Props = {
  params: { id: string }
}

export function generateStaticParams() {
  return courses.map(course => ({
    id: course.id.toString()
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const courseId = Number.parseInt(params.id);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return {
      title: "Course Not Found - EduLearn",
      description: "The requested course could not be found"
    };
  }

  return {
    title: `${course.title} - EduLearn`,
    description: course.description
  };
}

export default function CourseDetailPage({ params }: Props) {
  const courseId = Number.parseInt(params.id);
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Course Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <Badge variant="secondary">{course.category}</Badge>
              <Badge variant="outline">{course.level}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
            <p className="text-xl text-muted-foreground">{course.description}</p>

            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-medium">{course.rating}</span>
              </div>
              <div className="text-muted-foreground">•</div>
              <div className="text-muted-foreground">{course.students.toLocaleString()} students</div>
            </div>

            <div className="flex items-center mt-2">
              <span className="text-muted-foreground mr-1">Created by</span>
              <span className="font-medium">{course.instructor}</span>
            </div>

            <div className="flex flex-wrap items-center space-x-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="mr-2">🕒</span> Last updated: {course.lastUpdated}
              </div>
              <div className="flex items-center">
                <span className="mr-2">🌐</span> {course.language}
              </div>
              <div className="flex items-center">
                <span className="mr-2">📚</span> {course.totalLectures} lectures
              </div>
              <div className="flex items-center">
                <span className="mr-2">⏱️</span> {course.duration} total
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="sticky top-20">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="text-3xl font-bold mb-4">${course.price}</div>
                <Button className="w-full mb-2">Add to Cart</Button>
                <Button variant="outline" className="w-full">Buy Now</Button>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">This course includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">🎬</span> {course.duration} on-demand video
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📝</span> {course.totalLectures} lectures
                  </li>
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="mr-2">✅</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="curriculum">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="py-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Course Content</h2>
                <div className="text-sm text-muted-foreground">
                  {course.curriculum.reduce((acc, section) => acc + section.lectures.length, 0)} lectures • {course.duration} total
                </div>
              </div>

              <Accordion type="single" collapsible className="border rounded-lg divide-y">
                {course.curriculum.map((section) => (
                  <AccordionItem key={section.id} value={`section-${section.id}`} className="px-0">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline">
                      <div className="flex flex-col items-start">
                        <div className="font-semibold">{section.title}</div>
                        <div className="text-sm text-muted-foreground">{section.lectures.length} lectures</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-0 pb-2">
                      <ul className="divide-y">
                        {section.lectures.map((lecture) => (
                          <li key={lecture.id} className="px-4 py-3 flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="mr-3">📚</span>
                              <span>{lecture.title}</span>
                              {lecture.preview && (
                                <Badge variant="outline" className="ml-2">Preview</Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{lecture.duration}</div>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="overview" className="py-6">
              <h2 className="text-2xl font-bold mb-6">About This Course</h2>
              <p className="mb-6 text-lg">{course.longDescription}</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">What you'll learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">✅</span>
                    <span>Build websites and web applications from scratch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">✅</span>
                    <span>Master frontend development with HTML, CSS, and JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">✅</span>
                    <span>Create responsive layouts with modern CSS techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">✅</span>
                    <span>Develop interactive applications with React.js</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="py-6">
              <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
              <div className="flex items-start space-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                  {course.instructor.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{course.instructor}</h3>
                  <p className="text-muted-foreground mb-4">{course.category} Instructor</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{course.rating} Instructor Rating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-1">👨‍👩‍👧‍👦</span>
                      <span>{course.students.toLocaleString()} Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
