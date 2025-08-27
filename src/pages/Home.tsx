import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Pen, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-books.jpg";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/30 via-secondary-glow/20 to-accent-glow/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-fredoka font-bold leading-tight">
                Welcome to my{" "}
                <span className="sparkle-text">magical</span> world of stories!
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-nunito leading-relaxed">
                Hi! I'm Zuzia, and I love creating amazing adventures and tales that will take you to wonderful places. 
                Come explore my collection of books and short stories!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="fairy-float font-medium">
                  <Link to="/books">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read My Books
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="fairy-float font-medium">
                  <Link to="/stories">
                    <Pen className="mr-2 h-5 w-5" />
                    Short Stories
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Magical books and stories"
                className="rounded-2xl shadow-2xl fairy-glow"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-glow/30 rounded-full gentle-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary-glow/30 rounded-full gentle-float" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold mb-4">
            What you'll find here
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into a world of imagination where every page brings new adventures and characters to life!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="fairy-float group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-fredoka font-semibold">Full Books</h3>
              <p className="text-muted-foreground">
                Complete stories with amazing characters and exciting plots that will keep you reading until the end!
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/books">Explore Books</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="fairy-float group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-secondary-glow/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Pen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-fredoka font-semibold">Short Stories</h3>
              <p className="text-muted-foreground">
                Quick adventures and magical tales perfect for when you want a delightful story in just a few minutes!
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/stories">Read Stories</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="fairy-float group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-accent-glow/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-fredoka font-semibold">About Me</h3>
              <p className="text-muted-foreground">
                Learn more about me, my love for writing, and what inspires me to create these magical stories!
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/about">Meet Zuzia</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <Card className="magic-gradient fairy-glow">
          <CardContent className="p-8 lg:p-12 text-center text-white space-y-6">
            <Star className="h-12 w-12 mx-auto gentle-float" />
            <h2 className="text-3xl lg:text-4xl font-fredoka font-bold">
              Ready for an adventure?
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              Start your journey through my stories today and discover the magic that awaits in every chapter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link to="/books">Start Reading</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-medium">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}