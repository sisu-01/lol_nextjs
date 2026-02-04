export const metadata = {
  title: 'Privacy Policy',
  description: 'We transparently guide you through our practices and your rights to protect your valuable personal information.',
}

const PrivacyPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
      
      {/* 1. Information Collection and Use */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">1. Information Collection and Use</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Cookies:</strong> Third party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.
          </p>
          <p>
            <strong>Log Data:</strong> Like many site operators, we collect information that your browser sends whenever you visit our site. This may include information such as your computer&apos;s Internet Protocol (IP) address, browser type, browser version, and the pages of our site that you visit.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
          </p>
        </div>
      </section>

      {/* 2. Personalized Advertising (Opt-out) */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">2. Personalized Advertising (Opt-out)</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Users may opt out of personalized advertising by visiting 
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline ml-1">
              Ads Settings
            </a>.
          </p>
          <p>
            Alternatively, you can direct users to opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting 
            <a href="http://www.aboutads.info" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline ml-1">
              www.aboutads.info
            </a>.
          </p>
        </div>
      </section>

      {/* 한국어 요약 안내 */}
      <section className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6 text-sm text-gray-700">
        <h2 className="text-lg font-bold mb-3 text-blue-900">한국어 요약 안내</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>본 사이트는 Google 및 제3자 광고 업체의 쿠키를 사용하여 광고를 게재합니다.</li>
          <li>방문 기록(쿠키 및 로그 데이터)을 분석하여 사용자에게 최적화된 맞춤형 광고를 제공합니다.</li>
          <li>귀하는 Google 광고 설정 페이지 또는 외부 사이트(aboutads.info)를 통해 맞춤형 광고 기능을 끌 수 있습니다.</li>
        </ul>
      </section>

      <div className="text-center text-gray-400 text-sm mt-10">
        <p>Last updated: 2026. 02. 03</p>
      </div>
    </div>
  );
}

export default PrivacyPage;