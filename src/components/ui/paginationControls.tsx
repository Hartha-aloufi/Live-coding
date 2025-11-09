// components/common/PaginationControls.tsx

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  page: number;
  limit?: number;
  total: number;
  onPageChange: (page: number) => void;
};

export default function PaginationControls({
  page,
  total,
  limit = 10,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => page > 1 && onPageChange(page - 1)}
          />
        </PaginationItem>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          if (pageNumber > 5 && pageNumber !== totalPages) {
            return null;
          }

          return (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={page === pageNumber}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Ellipsis */}
        {totalPages > 5 && <PaginationEllipsis />}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => page < totalPages && onPageChange(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
