import Book from "@/components/Book";
import chapter1 from "./Chapters/chapter1.json";

export const meta = {
  id: "naszyjnik-czterech-zywiolow",
  title: "Naszyjnik czterech żwiołów",
  description: "Ksiąka o dziewczynce, która znalazła magiczny naszyjnik.",
  readTime: "1h 45 min czytania",
  chaptersCount: 6,
  status: "writing",
  chapters: {
    1: {
      id: 1,
      title: "Rozdział 1: Znaleziony naszyjnik",
      Component: Book,
      chapter: chapter1,
    },
    // 2: { "id": 2, "title": "Rozdział 2: Pierwsze spotkanie z magią" },
    // 3: { "id": 3, "title": "Rozdział 3: Podróż do krainy żywiołów" },
    // 4: { "id": 4, "title": "Rozdział 4: Spotkanie z opiekunami" },
    // 5: { "id": 5, "title": "Rozdział 5: Próba sił" },
    // 6: { "id": 6, "title": "Rozdział 6: Powrót do domu" }
  },
};
