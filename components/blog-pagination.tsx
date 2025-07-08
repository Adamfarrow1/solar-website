import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
    currentPage: number
    totalPages: number
    basePath?: string
}

export default function BlogPagination({ currentPage, totalPages, basePath = "/blog" }: BlogPaginationProps) {
    if (totalPages <= 1) return null

    const getPageUrl = (page: number) => {
        if (page === 1) return basePath
        return `${basePath}?page=${page}`
    }

    const renderPageNumbers = () => {
        const pages = []
        const showEllipsis = totalPages > 7

        if (!showEllipsis) {
            // Show all pages if 7 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <Link key={i} href={getPageUrl(i)}>
                        <Button
                            variant={currentPage === i ? "default" : "outline"}
                            size="sm"
                            className={currentPage === i ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50 hover:text-red-600"}
                        >
                            {i}
                        </Button>
                    </Link>,
                )
            }
        } else {
            // Show ellipsis for many pages
            pages.push(
                <Link key={1} href={getPageUrl(1)}>
                    <Button
                        variant={currentPage === 1 ? "default" : "outline"}
                        size="sm"
                        className={currentPage === 1 ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50 hover:text-red-600"}
                    >
                        1
                    </Button>
                </Link>,
            )

            if (currentPage > 3) {
                pages.push(
                    <span key="ellipsis1" className="px-2 text-gray-500">
                        ...
                    </span>,
                )
            }

            const start = Math.max(2, currentPage - 1)
            const end = Math.min(totalPages - 1, currentPage + 1)

            for (let i = start; i <= end; i++) {
                pages.push(
                    <Link key={i} href={getPageUrl(i)}>
                        <Button
                            variant={currentPage === i ? "default" : "outline"}
                            size="sm"
                            className={currentPage === i ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50 hover:text-red-600"}
                        >
                            {i}
                        </Button>
                    </Link>,
                )
            }

            if (currentPage < totalPages - 2) {
                pages.push(
                    <span key="ellipsis2" className="px-2 text-gray-500">
                        ...
                    </span>,
                )
            }

            if (totalPages > 1) {
                pages.push(
                    <Link key={totalPages} href={getPageUrl(totalPages)}>
                        <Button
                            variant={currentPage === totalPages ? "default" : "outline"}
                            size="sm"
                            className={
                                currentPage === totalPages ? "bg-red-600 hover:bg-red-700" : "hover:bg-red-50 hover:text-red-600"
                            }
                        >
                            {totalPages}
                        </Button>
                    </Link>,
                )
            }
        }

        return pages
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-12">
            {/* Previous Button */}
            {currentPage > 1 && (
                <Link href={getPageUrl(currentPage - 1)}>
                    <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-600 bg-transparent">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous
                    </Button>
                </Link>
            )}

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">{renderPageNumbers()}</div>

            {/* Next Button */}
            {currentPage < totalPages && (
                <Link href={getPageUrl(currentPage + 1)}>
                    <Button variant="outline" size="sm" className="hover:bg-red-50 hover:text-red-600 bg-transparent">
                        Next
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                </Link>
            )}
        </div>
    )
}
