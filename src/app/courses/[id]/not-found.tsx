import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CourseNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6">Course Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        The course you're looking for doesn't exist or may have been removed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/courses">
          <Button size="lg">Browse All Courses</Button>
        </Link>
        <Link href="/">
          <Button variant="outline" size="lg">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
