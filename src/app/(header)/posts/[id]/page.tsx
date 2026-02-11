import CustsomImage from "@/components/CustomImage/CustomImage";
import { postsData } from "@/data/posts";
import { getCustomMetadata } from "@/lib/metadata";
import { Metadata } from "next";
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

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  // Next.js 15부터 params는 Promise입니다.
  const { id } = await params;
  const post = postsData.find((p) => p.id === Number(id));

  if (!post) {
    return {}; // 포스트가 없으면 빈 메타데이터 반환 (페이지에서 404 처리됨)
  }

  // HTML 태그 제거 및 길이 제한 (Description용)
  const plainText = post.content.replace(/<[^>]*>?/gm, '');
  const description = plainText.length > 140 
    ? plainText.substring(0, 140) + "..." 
    : plainText;

  // 헬퍼 함수를 사용해 메타데이터 생성
  return getCustomMetadata({
    title: post.title,
    description: description,
    path: `/posts/${id}`, // canonical 및 og:url에 사용될 경로
  });
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
          <CustsomImage text={post.title} />
          <div 
            className="prose prose-slate max-w-none prose-lg prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl text-black"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          <CustsomImage text={'읽어주셔서 감사합니다'} />
        </div>
        
      </article>
    </div>
  );
}

export default PostPage;