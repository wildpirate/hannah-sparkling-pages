import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool, Clock, Sparkles } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "The Little Star That Couldn't Shine",
    description: "A heartwarming tale about Stella, a little star who thought she wasn't bright enough, until she discovered that even the smallest light can make a big difference.",
    readTime: "5 min read",
    mood: "Inspiring"
  },
  {
    id: 2,
    title: "The Cookie That Came to Life",
    description: "When Grandma's special recipe goes wrong, a gingerbread cookie comes to life and embarks on a sweet adventure through the kitchen.",
    readTime: "3 min read",
    mood: "Funny"
  },
  {
    id: 3,
    title: "The Rainbow Bridge to Dreamland",
    description: "Follow Mia as she crosses a magical rainbow bridge every night to visit the land of dreams and help other children have wonderful sleep.",
    readTime: "7 min read",
    mood: "Dreamy"
  },
  {
    id: 4,
    title: "The Dragon Who Was Afraid of Fire",
    description: "Meet Puff, a young dragon who is scared of his own fire breath, and how he learns to overcome his fears with the help of his forest friends.",
    readTime: "6 min read",
    mood: "Adventurous"
  },
  {
    id: 5,
    title: "The Magic Paintbrush",
    description: "When Lily finds a mysterious paintbrush in her art box, everything she paints comes to life, leading to colorful chaos and wonderful discoveries.",
    readTime: "4 min read",
    mood: "Magical"
  },
  {
    id: 6,
    title: "The Singing Seashells",
    description: "On a beach adventure, Emma discovers that the seashells aren't just making ocean sounds – they're singing ancient songs of the sea!",
    readTime: "5 min read",
    mood: "Mysterious"
  }
];


const moodColors = {
  Inspiring: "bg-secondary-glow/20 text-secondary-foreground",
  Funny: "bg-accent/30 text-accent-foreground",
  Dreamy: "bg-primary-glow/20",
  Adventurous: "bg-destructive/20 text-destructive",
  Magical: "bg-primary-glow/30",
  Mysterious: "bg-muted/50 text-muted-foreground"
};

export default function Stories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <PenTool className="h-8 w-8 text-primary gentle-float" />
          <h1 className="text-4xl lg:text-5xl font-fredoka font-bold sparkle-text">
            Short Stories
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Perfect little adventures for when you want a quick dose of magic! Each story is a complete tale
          that you can enjoy in just a few minutes.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Card key={story.id} className="fairy-float group hover:scale-105 transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${moodColors[story.mood as keyof typeof moodColors]}`}>
                  {story.mood}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{story.readTime}</span>
                </div>
              </div>
              <CardTitle className="text-lg font-fredoka text-primary transition-colors">
                {story.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {story.description}
              </p>

              <Button size="sm" className="w-full fairy-float">
                <Sparkles className="mr-2 h-4 w-4" />
                Read Story
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Story */}
      <Card className="magic-gradient fairy-glow">
        <CardContent className="p-8 lg:p-12 text-center text-white space-y-6">
          <Sparkles className="h-12 w-12 mx-auto gentle-float" />
          <h2 className="text-3xl font-fredoka font-bold">
            Story of the Week
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold">"The Little Star That Couldn't Shine"</h3>
            <p className="text-lg opacity-90">
              This week's featured story reminds us that everyone has their own special light to share with the world,
              no matter how small they might feel.
            </p>
            <Button size="lg" variant="secondary" className="font-medium">
              Read Featured Story
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder Content */}
      <Card className="bg-muted/50 border-dashed border-2">
        <CardContent className="p-12 text-center space-y-4">
          <PenTool className="h-16 w-16 text-muted-foreground mx-auto" />
          <h3 className="text-2xl font-fredoka font-semibold text-muted-foreground">
            Story Content Coming Soon!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm working hard on bringing these magical tales to life. Each story will have its full content here soon!
          </p>
          <div className="text-sm text-muted-foreground">
            <em>Here will be the story content for each tale</em>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}