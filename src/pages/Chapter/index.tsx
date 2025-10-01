import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import books from "../../books"

export default function Chapter() {
    const navigate = useNavigate();
    const { bookId, chapterId } = useParams();

    const book = books[bookId]
    const chapter = book.chapters[chapterId]
    const Content = chapter.Component


    return (
        <div className="p-4">
            <Button size="sm"
                // className="fairy-float"
                variant="outline"
                onClick={() => navigate(`/books/${bookId}`)}
                className="flex items-center gap-2 mb-6 fairy-float hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 border-gray-300 text-gray-700"
            >
                <ArrowLeft className="w-4 h-4" />
                Wróć do Spisu treści
            </Button>

            <Content />
        </div >

    )
}