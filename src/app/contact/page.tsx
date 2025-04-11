import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Contact Us - EduLearn",
  description: "Get in touch with the EduLearn team. We're here to help with any questions you might have about our courses, platform, or services.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      id: 1,
      icon: "📧",
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "support@edulearn.com",
    },
    {
      id: 2,
      icon: "📞",
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+1 (555) 123-4567",
    },
    {
      id: 3,
      icon: "🏢",
      title: "Office",
      description: "Come say hello at our office.",
      contact: "123 Market St, San Francisco, CA",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Have a question or need help? Get in touch with our team. We're here to help and answer any questions you might have.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Card key={method.id} className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4 flex justify-center">{method.icon}</div>
                <CardTitle>{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{method.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's talk!</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium">
                  First name
                </label>
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium">
                  Last name
                </label>
                <Input id="last-name" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" placeholder="your.email@example.com" type="email" />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone (optional)
              </label>
              <Input id="phone" placeholder="(555) 123-4567" type="tel" />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your inquiry..."
                rows={5}
              />
            </div>

            <Button className="w-full md:w-auto">Send Message</Button>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How do I enroll in a course?</h3>
                <p className="text-muted-foreground">
                  Browse our course catalog, select the course you're interested in, and click "Enroll" or "Buy Now" to register for the course.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and in some regions, we offer bank transfers or mobile payments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I get a refund if I'm not satisfied?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a 30-day money-back guarantee for most courses. Please see our refund policy for detailed information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How long do I have access to a course?</h3>
                <p className="text-muted-foreground">
                  Once enrolled, you have lifetime access to the course materials, allowing you to learn at your own pace.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer certificates of completion?</h3>
                <p className="text-muted-foreground">
                  Yes, upon successfully completing a course, you'll receive a certificate that you can share on your resume or social profiles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
