import { useParams } from "react-router-dom";
import books from "../../books";
import Title from "./Title";
import Dialog from "./Dialog";
import Content from "./Content";
import Paragraph from "./Paragraph";
import Page from "./Page";
import { parsePaginatedContent } from "./utils";
import { useState } from "react";

function renderContent(content: { type: string; text: string }[]) {
  return content.map((block, i) => {
    switch (block.type) {
      case "title":
        return <Title key={i}>{block.text}</Title>;
      case "dialog":
        return <Dialog key={i}>{block.text}</Dialog>;
      default:
        return <Paragraph key={i}>{block.text}</Paragraph>;
    }
  });
}

export default function Book() {
  const { bookId, chapterId } = useParams();
  const [openedPages, setOpenedPages] = useState([1, 2]);

  const chapter = books[bookId]["chapters"][parseInt(chapterId)]["chapter"];
  const paginatedContent = parsePaginatedContent(chapter["content"]);

  const handleNextPageClick = () => {
    setOpenedPages((prevState) => [prevState[0] + 2, prevState[1] + 2]);
  };

  const handlePrevPageClick = () => {
    setOpenedPages((prevState) => [prevState[0] - 2, prevState[1] - 2]);
  };

  const content1 = renderContent(paginatedContent[openedPages[0]]);
  const content2 = renderContent(paginatedContent[openedPages[1]]);

  return (
    <>
      <div>
        <button onClick={handlePrevPageClick}>prev</button>
        <button onClick={handleNextPageClick}>next</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Page left>
          <Content>{content1}</Content>
        </Page>
        <Page right>
          <Content>{content2}</Content>
        </Page>
      </div>
    </>
  );
}
