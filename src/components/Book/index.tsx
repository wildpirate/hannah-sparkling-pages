import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import books from "../../books";
import Title from "./Title";
import Dialog from "./Dialog";
import Content from "./Content";
import Paragraph from "./Paragraph";
import Page from "./Page";
import { parsePaginatedContent } from "./utils";
import { Button } from "../ui/button";
function renderContent(
  content: { type: string; text?: string; img?: string }[] = [],
) {
  return content.map((block, i) => {
    switch (block.type) {
      case "title":
        return <Title key={i}>{block.text}</Title>;
      case "dialog":
        return <Dialog key={i}>{block.text}</Dialog>;
      case "ilustration":
        return (
          <div key={i} className="my-6 flex justify-center">
            <img
              src={block.img}
              alt=""
              className="max-w-full rounded-md shadow-md"
            />
          </div>
        );
      default:
        return <Paragraph key={i}>{block.text}</Paragraph>;
    }
  });
}

export default function Book() {
  const { bookId, chapterId } = useParams();
  const [openedPages, setOpenedPages] = useState<[number, number | null]>([
    1, 2,
  ]);

  const chapter = books[bookId]["chapters"][parseInt(chapterId)]["chapter"];
  const paginatedContent = parsePaginatedContent(chapter);

  const totalPages = Object.keys(paginatedContent).length;
  const canGoPrev = openedPages[0] > 1;
  const canGoNext = openedPages[0] < totalPages;

  const handleNextPageClick = () => {
    if (!canGoNext) return;

    setOpenedPages(([left, right]) => {
      const nextLeft = Math.min(left + 2, totalPages);
      const proposedRight = (right ?? left + 1) + 2;
      const nextRight = proposedRight > totalPages ? null : proposedRight;
      return [nextLeft, nextRight];
    });
  };

  const handlePrevPageClick = () => {
    if (!canGoPrev) return;

    setOpenedPages(([left, right]) => {
      const prevLeft = Math.max(left - 2, 1);
      const prevRight =
        prevLeft + 1 <= totalPages ? ((prevLeft + 1) as number) : null;
      return [prevLeft, prevRight];
    });
  };

  const content1 = renderContent(paginatedContent[openedPages[0]]);
  const content2 =
    openedPages[1] != null
      ? renderContent(paginatedContent[openedPages[1]])
      : null;

  return (
    <>
      <div className="flex justify-center mt-6">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 shadow-sm border border-gray-200 backdrop-blur">
          <Button
            size="sm"
            variant="outline"
            onClick={handlePrevPageClick}
            className="flex items-center gap-2 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Poprzednia strona</span>
          </Button>
          <span className="h-5 w-px bg-gray-200" />
          <Button
            size="sm"
            variant="outline"
            onClick={handleNextPageClick}
            className="flex items-center gap-2 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <span>Następna strona</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Page left page={openedPages[0]} onClick={handlePrevPageClick}>
          <Content>{content1}</Content>
        </Page>
        <Page right page={openedPages[1]} onClick={handleNextPageClick}>
          <Content>{content2}</Content>
        </Page>
      </div>
    </>
  );
}
