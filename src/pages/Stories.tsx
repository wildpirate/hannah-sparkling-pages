import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool, Clock, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

// Stories data will be loaded from translations


const moodColors = {
  Inspiring: "bg-secondary-glow/20 text-secondary-foreground",
  Funny: "bg-accent/30 text-accent-foreground",
  Dreamy: "bg-primary-glow/20",
  Adventurous: "bg-destructive/20 text-destructive",
  Magical: "bg-primary-glow/30",
  Mysterious: "bg-muted/50 text-muted-foreground"
};

export default function Stories() {
  const { t } = useTranslation();
  const stories = t('stories.list', { returnObjects: true }) as any[];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <PenTool className="h-8 w-8 text-primary gentle-float" />
          <h1 className="text-4xl lg:text-5xl font-fredoka font-bold sparkle-text">
            {t('stories.title')}
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('stories.subtitle')}
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Card key={story.id} className="fairy-float group hover:scale-105 transition-all duration-300">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${moodColors[story.mood as keyof typeof moodColors]}`}>
                  {t(`stories.mood.${story.mood.toLowerCase()}`)}
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
                {t('stories.readStory')}
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
            {t('stories.featured.title')}
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold">"{t('stories.featured.storyTitle')}"</h3>
            <p className="text-lg opacity-90">
              {t('stories.featured.description')}
            </p>
            <Button size="lg" variant="secondary" className="font-medium">
              {t('stories.featured.button')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Placeholder Content */}
      <Card className="bg-muted/50 border-dashed border-2">
        <CardContent className="p-12 text-center space-y-4">
          <PenTool className="h-16 w-16 text-muted-foreground mx-auto" />
          <h3 className="text-2xl font-fredoka font-semibold text-muted-foreground">
            {t('stories.placeholder.title')}
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            {t('stories.placeholder.description')}
          </p>
          <div className="text-sm text-muted-foreground">
            <em>{t('stories.placeholder.note')}</em>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}