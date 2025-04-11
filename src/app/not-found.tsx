import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
        <Link href="/courses">
          <Button variant="outline" size="lg">Browse Courses</Button>
        </Link>
      </div>
    </div>
  );
}
