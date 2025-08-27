import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Sparkles, Star, Palette, Music } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-8 w-8 text-primary gentle-float" />
          <h1 className="text-4xl lg:text-5xl font-fredoka font-bold sparkle-text">
            About Me
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-muted-foreground">
          Hi there! Let me tell you a little bit about myself and my love for creating magical stories.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <Card className="fairy-float">
          <CardContent className="p-8 space-y-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-12 w-12 text-primary gentle-float" />
              </div>
              <h2 className="text-2xl font-fredoka font-bold mb-2">Hello! I'm Zuzia</h2>
              <p className="text-muted-foreground">9-year-old author and dreamer</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-center space-y-4">
              <p className="text-lg leading-relaxed">
                I'm a 9-year-old girl who absolutely <strong className="text-primary">loves</strong> creating stories! 
                Ever since I learned to write, I've been filling notebooks with tales of magic, adventure, and friendship.
              </p>
              <p className="text-lg leading-relaxed">
                My imagination is full of talking animals, brave princesses, magical gardens, and wonderful places 
                where anything is possible. I believe that every story has the power to make someone smile, 
                dream, or feel a little braver.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What I Love */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="fairy-float">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-fredoka font-semibold">My Writing</h3>
              </div>
              <p className="text-muted-foreground">
                I love writing about brave characters who go on amazing adventures. My stories usually have 
                happy endings because I think the world needs more joy and magic!
              </p>
            </CardContent>
          </Card>

          <Card className="fairy-float">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Palette className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-fredoka font-semibold">My Inspiration</h3>
              </div>
              <p className="text-muted-foreground">
                I get ideas from everywhere - my dreams, walks in the park, playing with my pets, 
                and reading other amazing books. Sometimes I write stories about my own adventures too!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <Card className="fairy-float">
          <CardContent className="p-8">
            <h3 className="text-2xl font-fredoka font-bold text-center mb-8">
              Fun Facts About Me
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Star className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Favorite Genre</h4>
                <p className="text-sm text-muted-foreground">Fantasy and magical adventures</p>
              </div>
              
              <div className="text-center space-y-2">
                <Music className="h-8 w-8 text-secondary mx-auto" />
                <h4 className="font-semibold">Writing Music</h4>
                <p className="text-sm text-muted-foreground">I love listening to fairy tale soundtracks</p>
              </div>
              
              <div className="text-center space-y-2">
                <Heart className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold">Favorite Characters</h4>
                <p className="text-sm text-muted-foreground">Brave princesses and talking animals</p>
              </div>
              
              <div className="text-center space-y-2">
                <BookOpen className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">Reading Time</h4>
                <p className="text-sm text-muted-foreground">Every day before bedtime</p>
              </div>
              
              <div className="text-center space-y-2">
                <Sparkles className="h-8 w-8 text-secondary mx-auto" />
                <h4 className="font-semibold">Dream Goal</h4>
                <p className="text-sm text-muted-foreground">To publish a real book someday!</p>
              </div>
              
              <div className="text-center space-y-2">
                <Palette className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold">Hobbies</h4>
                <p className="text-sm text-muted-foreground">Drawing characters from my stories</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Message to Readers */}
        <Card className="magic-gradient fairy-glow">
          <CardContent className="p-8 lg:p-12 text-center text-white space-y-6">
            <Heart className="h-12 w-12 mx-auto gentle-float" />
            <h2 className="text-3xl font-fredoka font-bold">
              A Message for You
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg opacity-90">
                Thank you for visiting my website and reading my stories! I hope they bring a little magic 
                and happiness to your day. Remember, you're never too young or too old to believe in magic 
                and follow your dreams.
              </p>
              <p className="text-lg opacity-90 font-medium">
                Keep reading, keep dreaming, and never stop believing in yourself! ✨
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-12 text-center space-y-4">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto" />
            <h3 className="text-2xl font-fredoka font-semibold text-muted-foreground">
              More About Me Coming Soon!
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm working on adding more photos, drawings of my characters, and stories about how I started writing!
            </p>
            <div className="text-sm text-muted-foreground">
              <em>Here will be more personal content and photos</em>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}