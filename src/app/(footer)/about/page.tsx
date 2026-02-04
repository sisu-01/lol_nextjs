export const metadata = {
  title: 'About Us | 도전! 롤든벨',
  description: 'Learn League of Legends matchups and game knowledge through fun quizzes. Join the Challenger path with LoLDenBell!',
}

const AboutPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-6 text-white">About Us</h1>

      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-blue-50">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
            Master the Summoner&apos;s Rift
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 mb-4">
            도전! 롤든벨
          </h2>
          <p className="text-lg text-gray-500 italic">
            &quot;The most enjoyable shortcut to the Summoner&apos;s Rift.&quot;
          </p>
        </div>

        {/* Our Mission */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
            <span className="mr-2">🎯</span> Our Mission
          </h3>
          <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="leading-8 text-gray-700">
              League of Legends is a game of deep strategy, but the learning curve can be steep for new players. 
              <strong> &apos;도전! 롤든벨 (LoLDenBell)&apos;</strong> was created to lower this barrier. 
              Instead of long lecture videos, we provide an interactive environment where you can naturally master 
              champion matchups and game flow through fun, engaging quizzes.
            </p>
            <p className="mt-4 leading-8 text-gray-700 font-medium">
              복잡한 강의 대신 퀴즈를 통해 즐겁게 상성을 익히고, 뉴비부터 숙련자까지 모두가 즐길 수 있는 학습 환경을 지향합니다.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
            <span className="mr-2">⚡</span> What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">Champion Matchups</h4>
              <p className="text-sm text-gray-600">챔피언 간의 상성 지식을 퀴즈로 풀며 실전 감각을 익힙니다.</p>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">Competitive Fun</h4>
              <p className="text-sm text-gray-600">자신의 점수를 확인하고 롤 지식의 한계에 도전하세요.</p>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">Instant Access</h4>
              <p className="text-sm text-gray-600">설치 없이 브라우저에서 즉시 모바일과 PC로 즐길 수 있습니다.</p>
            </div>
            <div className="p-5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              <h4 className="font-bold text-blue-600 mb-2">Always Free</h4>
              <p className="text-sm text-gray-600">모든 교육용 퀴즈는 무료이며 사용자의 성장을 최우선으로 합니다.</p>
            </div>
          </div>
        </section>

        {/* Developer Note */}
        <section className="pt-6 border-t border-gray-100">
          <h3 className="text-xl font-bold mb-3 text-gray-900">The Developer</h3>
          <p className="text-gray-600">
            This site is operated by an independent developer who loves League of Legends. 
            I am committed to providing constant updates to reflect the latest meta. 
            더 많은 소환사분들이 게임의 진정한 재미를 느낄 수 있도록 끊임없이 업데이트하겠습니다.
          </p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400 text-sm tracking-wide">
          © 2026 도전! 롤든벨 (LoLDenBell). All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;