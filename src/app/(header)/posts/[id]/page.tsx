import { postsData } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface PostProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    id: post.id.toString(),
  }));
}

const PostPage = ({ params }: PostProps) => {
  const { id } = use(params);
  const numericId = Number(id);
  
  const post = postsData.find((p) => p.id === numericId);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h5>
        <Link href={'/posts'}>목록으로</Link>
      </h5>
      <h1>
        {post.title}
      </h1>
      <time>
        {post.date.toLocaleDateString()}
      </time>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export default PostPage;