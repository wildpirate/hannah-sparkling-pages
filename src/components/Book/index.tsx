import { useParams } from "react-router-dom";
import books from "../../books";
import Title from "./Title";
import Dialog from "./Dialog";
import Content from "./Content";
import Paragraph from "./Paragraph";
import Page from "./Page";

function renderContent(content: { type: string; text: string }[]) {
  return content.map((block, i) =>
    block.type === "dialog" ? (
      <Dialog key={i}>{block.text}</Dialog>
    ) : (
      <Paragraph key={i}>{block.text}</Paragraph>
    ),
  );
}

export default function Book() {
  const { bookId, chapterId } = useParams();
  const chapter = books[bookId]["chapters"][parseInt(chapterId)]["chapter"];
  const { title, content } = chapter;
  const contentNodes = renderContent(content);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Page left>
        <Title>{title}</Title>
        <Content>{contentNodes}</Content>
      </Page>
      <Page right>
        <Content>{contentNodes}</Content>
      </Page>
    </div>
  );
}
