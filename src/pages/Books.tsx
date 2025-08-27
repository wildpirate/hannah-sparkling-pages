import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star } from "lucide-react";

const books = [
  {
    id: 1,
    title: "The Magic Garden Adventure",
    description: "Join Luna as she discovers a secret garden filled with talking flowers and magical creatures who need her help to save their home from the Shadow King.",
    readTime: "45 min read",
    chapters: 8,
    status: "Complete"
  },
  {
    id: 2,
    title: "Princess of the Crystal Castle",
    description: "Follow Princess Aria on her quest to find the lost Crystal of Light and restore peace to her kingdom with the help of her brave dragon friend, Ember.",
    readTime: "35 min read",
    chapters: 6,
    status: "Complete"
  },
  {
    id: 3,
    title: "The Enchanted Forest Friends",
    description: "When Maya gets lost in an enchanted forest, she meets amazing animal friends who teach her about friendship, courage, and believing in herself.",
    readTime: "In progress",
    chapters: 4,
    status: "Writing"
  }
];

export default function Books() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-primary gentle-float" />
          <h1 className="text-4xl lg:text-5xl font-fredoka font-bold sparkle-text">
            My Books
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Here are my full-length stories filled with adventure, magic, and wonderful characters.
          Each book is a complete journey waiting for you to explore!
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Card key={book.id} className="fairy-float group hover:scale-105 transition-all duration-300">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-semibold
    ${book.status === 'Complete'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}
                >
                  {book.status}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-current text-primary" />
                  <span>{book.chapters} chapters</span>
                </div>
              </div>
              <CardTitle className="text-xl font-fredoka transition-colors">
                {book.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {book.description}
              </p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{book.readTime}</span>
                </div>
                <Button size="sm" className="fairy-float">
                  {book.status === 'Complete' ? 'Read Now' : 'Preview'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Placeholder Content */}
      <Card className="bg-muted/50 border-dashed border-2">
        <CardContent className="p-12 text-center space-y-4">
          <BookOpen className="h-16 w-16 text-muted-foreground mx-auto" />
          <h3 className="text-2xl font-fredoka font-semibold text-muted-foreground">
            More Books Coming Soon!
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            I'm always working on new stories and adventures. Check back soon for more magical tales!
          </p>
          <div className="text-sm text-muted-foreground">
            <em>Here will be the book chapters and story content</em>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}