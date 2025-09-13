import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Pen, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-books.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/30 via-secondary-glow/20 to-accent-glow/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-fredoka font-bold leading-tight">

                <Trans i18nKey='home.hero.title'>
                  Witaj w moim <span className='sparkle-text'>magicznym</span> świecie opowieści!
                </Trans>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground font-nunito leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="fairy-float font-medium">
                  <Link to="/books">
                    <BookOpen className="mr-2 h-5 w-5" />
                    {t('home.hero.readBooks')}
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="fairy-float font-medium">
                  <Link to="/stories">
                    <Pen className="mr-2 h-5 w-5" />
                    {t('home.hero.shortStories')}
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
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary-glow/30 rounded-full gentle-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-fredoka font-bold mb-4">
            {t('home.features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('home.features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="fairy-float group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-fredoka font-semibold">{t('home.features.fullBooks.title')}</h3>
              <p className="text-muted-foreground">
                {t('home.features.fullBooks.description')}
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/books">{t('home.features.fullBooks.button')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="fairy-float group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-secondary-glow/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Pen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-fredoka font-semibold">{t('home.features.shortStories.title')}</h3>
              <p className="text-muted-foreground">
                {t('home.features.shortStories.description')}
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/stories">{t('home.features.shortStories.button')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="fairy-float group">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-accent-glow/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-fredoka font-semibold">{t('home.features.about.title')}</h3>
              <p className="text-muted-foreground">
                {t('home.features.about.description')}
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/about">{t('home.features.about.button')}</Link>
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
              {t('home.cta.title')}
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <Link to="/books">{t('home.cta.startReading')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-medium">
                <Link to="/about">{t('home.cta.learnMore')}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}