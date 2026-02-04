export const metadata = {
  title: 'Terms of Service',
  description: 'These terms define the conditions of use and the rights and obligations between the site owner and our users.',
}

const TermsPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-6 text-white">Terms of Service</h1>

      {/* 1. Acceptance of Terms */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. 
          If you do not agree to these terms, please do not use our service.
        </p>
      </section>

      {/* 2. Use License & Intellectual Property */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">2. Use License & Intellectual Property</h2>
        <div className="text-gray-700">
          <p className="mb-3">
            Permission is granted to temporarily access the games and content on this website for personal, non-commercial transitory viewing only. 
            All content, including text, graphics, and code, is the intellectual property of the site owner unless otherwise stated.
          </p>
          <ul className="list-disc ml-5 space-y-2 font-medium">
            <li>You may not modify, copy, or distribute the materials.</li>
            <li>You may not use the materials for any commercial purpose.</li>
            <li>You may not attempt to decompile or reverse engineer any software contained on this website.</li>
            <li>You may not remove any copyright or other proprietary notations from the materials.</li>
          </ul>
        </div>
      </section>

      {/* 3. Service Limitations & Modifications */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">3. Service Limitations</h2>
        <p className="text-gray-700">
          We reserve the right to withdraw or amend our service, and any material we provide on the website, 
          in our sole discretion without notice. We will not be liable if for any reason all or any part of the website is unavailable at any time.
        </p>
      </section>

      {/* 4. Disclaimer */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">4. Disclaimer</h2>
        <p className="text-gray-700 italic">
          The materials on this website are provided on an &apos;as is&apos; basis. The owner makes no warranties, 
          expressed or implied, and hereby disclaims all other warranties including, without limitation, 
          implied warranties or conditions of merchantability or fitness for a particular purpose.
        </p>
      </section>

      {/* 한국어 요약 안내 */}
      <section className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6 text-sm text-gray-700">
        <h2 className="text-lg font-bold mb-3 text-gray-900 underline decoration-blue-500 decoration-2">한국어 요약 안내</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li><strong>이용 동의:</strong> 본 사이트를 이용함으로써 귀하는 본 약관에 동의하게 됩니다.</li>
          <li><strong>저작권:</strong> 제공되는 모든 게임과 콘텐츠의 저작권은 사이트 운영자에게 있으며, 무단 복제 및 상업적 이용을 금합니다.</li>
          <li><strong>서비스 변경:</strong> 운영자는 사전 고지 없이 서비스를 수정하거나 중단할 권리를 가집니다.</li>
          <li><strong>면책 조항:</strong> 서비스 이용 중 발생하는 데이터 손실이나 기술적 오류에 대해 운영자는 책임을 지지 않습니다.</li>
        </ul>
      </section>

      <div className="text-center text-gray-400 text-sm mt-10">
        <p>Last updated: 2026. 02. 03</p>
      </div>
    </div>
  );
}

export default TermsPage;