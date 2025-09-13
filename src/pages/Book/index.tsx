import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Book() {
    const { bookId } = useParams();
    const { t } = useTranslation();

    return <div>
        {t('book.hello')} {bookId}
    </div>
}