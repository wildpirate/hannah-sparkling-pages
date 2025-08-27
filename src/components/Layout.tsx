import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Book, Home, PenTool, Heart, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Books", href: "/books", icon: Book },
  { name: "Stories", href: "/stories", icon: PenTool },
  { name: "About me", href: "/about", icon: Heart },
];

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary gentle-float" />
              <h1 className="text-2xl lg:text-3xl font-fredoka font-bold sparkle-text">
                Zuzia's Books
              </h1>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground font-medium">Young Author</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-card fairy-float border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full pt-20 lg:pt-6">
            <nav className="flex-1 px-6 py-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 fairy-float
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }
                    `}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
            
            {/* Decorative element */}
            <div className="px-6 py-4">
              <div className="bg-gradient-to-r from-primary-glow/20 to-secondary-glow/20 rounded-lg p-4 text-center">
                <Sparkles className="h-8 w-8 text-primary mx-auto mb-2 gentle-float" />
                <p className="text-xs text-muted-foreground font-medium">
                  "Every story is a new adventure!"
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-0">
          <div className="min-h-screen">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>© 2025 Zuzia – All rights reserved</span>
            <Sparkles className="h-4 w-4 text-primary" />
          </div>
        </div>
      </footer>
    </div>
  );
}