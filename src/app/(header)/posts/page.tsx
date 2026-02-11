import { postsData } from "@/data/posts";
import { getCustomMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = getCustomMetadata({
  title: "롤 매치업 분석 포스트",
  description: "직접 플레이하며 분석한 170여 명의 챔피언 상성 분석 글 목록입니다.",
  path: "/posts",
});

const PostsPage = () => {

  const getPreview = (content: string) => {
    // 1. 태그 제거
    const plainText = content.replace(/<[^>]*>?/gm, '');
    
    // 2. 50자 자르고 '...' 붙이기
    return plainText.length > 60 
      ? plainText.substring(0, 60) + "..." 
      : plainText;
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto h-full">
      <div className="max-w-5xl mx-auto">
        
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            포스트 목록
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            직접 게임을 해보며 느낀 것과 개인적으로 분석한 매치업 구도 분석 글 목록입니다.
          </p>
        </div>

        {/* 포스트 그리드 */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {postsData.sort((a, b) => b.id - a.id).map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Link href={`/posts/${post.id}`}>
                <div className="p-6 flex flex-col h-full">
                  {/* 제목 */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  {/* 미리보기 내용 */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed grow">
                    {getPreview(post.content)}
                  </p>
                  
                  {/* 하단 정보 (날짜 등) */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <time className="text-xs font-medium text-gray-400">
                      {post.date.toLocaleDateString()}
                    </time>
                    <span className="text-xs font-semibold text-blue-600 group-hover:underline">
                      더 읽기 →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostsPage;