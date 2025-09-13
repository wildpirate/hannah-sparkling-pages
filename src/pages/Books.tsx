import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

// Books data will be loaded from translations

const books = [
  {
    id: 1,
    "title": "Przygoda w Magicznym Ogrodzie",
    "description": "Dołącz do Luny, gdy odkrywa tajemny ogród wypełniony mówiącymi kwiatami i magicznymi stworzeniami, które potrzebują jej pomocy, aby uratować swój dom przed Królem Cieni.",
    "readTime": "45 min czytania",
    "chapters": 8,
    "status": "complete"
  },
  {
    id: 2,
    "title": "Księżniczka z Kryształowego Zamku",
    "description": "Podążaj za Księżniczką Arią w jej poszukiwaniach zaginionego Kryształu Światła i przywróć pokój w jej królestwie z pomocą jej odważnego przyjaciela smoka, Ember.",
    "readTime": "35 min czytania",
    "chapters": 6,
    "status": "complete"
  },
  {
    id: 3,
    "title": "Przyjaciele z Zaklętego Lasu",
    "description": "Gdy Maya gubi się w zaklętym lesie, spotyka niesamowitych przyjaciół zwierząt, którzy uczą ją o przyjaźni, odwadze i wierze w siebie.",
    "readTime": "W trakcie",
    "chapters": 4,
    "status": "writing"
  }
]
export default function Books() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BookOpen className="h-8 w-8 text-primary gentle-float" />
          <h1 className="text-4xl lg:text-5xl font-fredoka font-bold sparkle-text">
            {t('books.title')}
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('books.subtitle')}
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
    ${book.status === 'complete'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-orange-100 text-orange-700 border border-orange-200'
                    }`}
                >
                  {t(`books.status.${book.status}`)}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-current text-primary" />
                  <span>{book.chapters} {t('books.chapters')}</span>
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
                  {book.status === 'Complete' ? t('books.readNow') : t('books.preview')}
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
            {t('books.placeholder.title')}
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('books.placeholder.description')}
          </p>
          <div className="text-sm text-muted-foreground">
            <em>{t('books.placeholder.note')}</em>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}