import PaginationControls from "@/components/ui/paginationControls";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useSearchParams } from "react-router";
import { usePosts } from "./usePosts";

const Question1: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError } = usePosts({ page, limit: 10 });

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts</p>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-extrablack mb-6">Posts Table</h2>

        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Posts</h1>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Body</TableHead>
                <TableHead>User</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {data?.posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.id}</TableCell>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell className="text-muted-foreground max-w-[500px] truncate">
                    {post.body}
                  </TableCell>
                  <TableCell>{post.userId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <PaginationControls
            page={page}
            limit={10}
            total={data?.total ?? 0}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Question1;
