import { getCustomMetadata } from "@/lib/metadata";

export const metadata = getCustomMetadata({
  title: "문의하기",
  description: "도전! 롤든벨 서비스 이용 중 궁금한 점이나 제휴 문의가 있으신가요? 언제든 편하게 의견을 남겨주세요. 사용자의 피드백을 소중히 생각합니다.",
  path: "/contact",
});

const ContactPage = () => {
  const email = "tesv010615@gmail.com";

  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>

      <div className="bg-white p-10 rounded-2xl shadow-xl text-center border border-gray-100">
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full">
          <span className="text-4xl text-blue-600">✉️</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h2>
        <p className="mb-8 text-gray-600 max-w-md mx-auto">
          If you have any questions, suggestions, or bug reports regarding our games, 
          please feel free to contact us. We usually respond within <strong>24-48 hours</strong>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-gray-800 mb-1">🎮 Game Support</h4>
            <p className="text-sm text-gray-500">Bug reports and gameplay feedback</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-gray-800 mb-1">🤝 Business</h4>
            <p className="text-sm text-gray-500">Partnerships and advertising inquiries</p>
          </div>
        </div>

        <div className="inline-block w-full max-w-md bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-200 transition-transform hover:scale-[1.02]">
          <p className="text-blue-100 text-sm mb-2">Primary Email Address</p>
          <a 
            href={`mailto:${email}`}
            className="text-xl md:text-2xl font-mono font-bold text-white hover:underline break-all"
          >
            {email}
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-left">
          <h3 className="flex items-center font-bold text-gray-800 mb-3">
            <span className="w-1 h-5 bg-blue-500 rounded-full mr-2"></span>
            한국어 안내
          </h3>
          <p className="text-sm text-gray-600 leading-6">
            게임 이용 중 불편한 점, 버그 제보 또는 제안 사항이 있으시면 위 이메일 주소로 언제든지 연락 주시기 바랍니다. 
            보내주신 의견은 서비스 개선에 소중하게 활용되며, 확인 후 영업일 기준 2일 이내에 답변 드릴 수 있도록 노력하겠습니다.
          </p>
        </div>
      </div>

      <p className="text-center text-gray-400 text-xs mt-10 uppercase tracking-widest">
        Official Support Channel
      </p>
    </div>
  );
}

export default ContactPage;