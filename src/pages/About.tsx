import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Sparkles, Star, Palette, Music } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";


export default function About() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-8 w-8 text-primary gentle-float" />
          <h1 className="text-4xl lg:text-5xl font-fredoka font-bold sparkle-text">
            {t('about.title')}
          </h1>
        </div>
        <p className="text-lg lg:text-xl text-muted-foreground">
          {t('about.subtitle')}
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
              <h2 className="text-2xl font-fredoka font-bold mb-2">{t('about.introduction.title')}</h2>
              <p className="text-muted-foreground">{t('about.introduction.subtitle')}</p>
            </div>

            <div className="prose prose-lg max-w-none text-center space-y-4">
              <p className="text-lg leading-relaxed">
                <Trans i18nKey={'about.introduction.description1'}>
                  Jestem 9-letnią dziewczynką, która absolutnie <strong className='text-primary'>uwielbia</strong> tworzyć historie! Od kiedy nauczyłam się pisać, wypełniam zeszyty opowieściami o magii, przygodach i przyjaźni.
                </Trans>
              </p>
              <p className="text-lg leading-relaxed">
                {t('about.introduction.description2')}
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
                <h3 className="text-xl font-fredoka font-semibold">{t('about.interests.writing.title')}</h3>
              </div>
              <p className="text-muted-foreground">
                {t('about.interests.writing.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="fairy-float">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Palette className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-fredoka font-semibold">{t('about.interests.inspiration.title')}</h3>
              </div>
              <p className="text-muted-foreground">
                {t('about.interests.inspiration.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fun Facts */}
        <Card className="fairy-float">
          <CardContent className="p-8">
            <h3 className="text-2xl font-fredoka font-bold text-center mb-8">
              {t('about.funFacts.title')}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <Star className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">{t('about.funFacts.favoriteGenre.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.funFacts.favoriteGenre.description')}</p>
              </div>

              <div className="text-center space-y-2">
                <Music className="h-8 w-8 text-secondary mx-auto" />
                <h4 className="font-semibold">{t('about.funFacts.writingMusic.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.funFacts.writingMusic.description')}</p>
              </div>

              <div className="text-center space-y-2">
                <Heart className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold">{t('about.funFacts.favoriteCharacters.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.funFacts.favoriteCharacters.description')}</p>
              </div>

              <div className="text-center space-y-2">
                <BookOpen className="h-8 w-8 text-primary mx-auto" />
                <h4 className="font-semibold">{t('about.funFacts.readingTime.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.funFacts.readingTime.description')}</p>
              </div>

              <div className="text-center space-y-2">
                <Sparkles className="h-8 w-8 text-secondary mx-auto" />
                <h4 className="font-semibold">{t('about.funFacts.dreamGoal.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.funFacts.dreamGoal.description')}</p>
              </div>

              <div className="text-center space-y-2">
                <Palette className="h-8 w-8 text-accent mx-auto" />
                <h4 className="font-semibold">{t('about.funFacts.hobbies.title')}</h4>
                <p className="text-sm text-muted-foreground">{t('about.funFacts.hobbies.description')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Message to Readers */}
        <Card className="magic-gradient fairy-glow">
          <CardContent className="p-8 lg:p-12 text-center text-white space-y-6">
            <Heart className="h-12 w-12 mx-auto gentle-float" />
            <h2 className="text-3xl font-fredoka font-bold">
              {t('about.message.title')}
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-lg opacity-90">
                {t('about.message.text1')}
              </p>
              <p className="text-lg opacity-90 font-medium">
                {t('about.message.text2')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder */}
        <Card className="bg-muted/50 border-dashed border-2">
          <CardContent className="p-12 text-center space-y-4">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto" />
            <h3 className="text-2xl font-fredoka font-semibold text-muted-foreground">
              {t('about.placeholder.title')}
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {t('about.placeholder.description')}
            </p>
            <div className="text-sm text-muted-foreground">
              <em>{t('about.placeholder.note')}</em>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}