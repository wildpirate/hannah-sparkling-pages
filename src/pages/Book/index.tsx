
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import contents from "../../books/content";
import NotFound from "../NotFound";

export default function Book() {
    const { bookId } = useParams();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const Content = contents[bookId];

    if (!Content) return <NotFound />

    return (
        <div className="p-4">
            <Button size="sm"
                // className="fairy-float"
                variant="outline"
                onClick={() => navigate("/books")}
                className="flex items-center gap-2 mb-6 fairy-float hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 border-gray-300 text-gray-700"
            >
                <ArrowLeft className="w-4 h-4" />
                Wróć do książek
            </Button>

            <Content />
        </div >
    )
}