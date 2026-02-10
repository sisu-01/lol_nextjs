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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto h-full">
      <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-y-auto h-full">
        
        {/* 상단 헤더 영역: 네비게이션, 제목, 날짜 */}
        <header className="px-6 py-8 border-b border-gray-100 sm:px-10">
          {/* 목록으로 돌아가기 버튼 */}
          <div className="mb-6">
            <Link 
              href={'/posts'} 
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors group"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              목록으로
            </Link>
          </div>

          {/* 제목 */}
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight mb-4">
            {post.title}
          </h1>

          {/* 날짜 및 메타정보 */}
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time>{post.date.toLocaleDateString()}</time>
          </div>
        </header>

        {/* 본문 영역 */}
        <div className="px-6 py-8 sm:px-10">
          {/* prose: 기본 HTML 태그들에 스타일을 입혀주는 핵심 클래스 
            lg:prose-xl: 큰 화면에서는 글씨를 좀 더 크게
            prose-blue: 링크 등의 색상을 파란 계열로
          */}
          <div 
            className="prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl text-black"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
        
      </article>
    </div>
  );
}

export default PostPage;