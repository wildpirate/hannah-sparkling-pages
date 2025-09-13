import { meta } from "./meta"
import cover from "./cover.png"

export default function NaszyjnikCzterechZywiolow() {
    const handleChapterClick = (chapterId: number) => {
        // TODO: Implement navigation to chapter
        console.log(`Navigate to chapter ${chapterId}`)
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Book Cover */}
            <div className="flex justify-center mb-8">
                <img
                    src={cover}
                    alt={meta.title}
                    className="w-64 h-80 object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Book Title */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                {meta.title}
            </h1>

            {/* Book Description */}
            <div className="mb-8">
                <p className="text-lg text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
                    {meta.description}
                </p>
                <div className="flex justify-center mt-4 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {meta.readTime}
                    </span>
                </div>
            </div>

            {/* Chapters List */}
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Spis treści
                </h2>
                <div className="space-y-3">
                    {meta.chaptersList.map((chapter) => (
                        <button
                            key={chapter.id}
                            onClick={() => handleChapterClick(chapter.id)}
                            className="fairy-float w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-gray-800 font-medium">
                                    {chapter.title}
                                </span>
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}