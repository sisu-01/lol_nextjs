import Image from "next/image";
import Link from "next/link";

const GuidePage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
      <h1 className="text-3xl font-bold mb-8 text-white">도전! 롤든벨 완벽 가이드</h1>
      <Image src="/logo.svg" width={700} height={100} className="h-50 m-auto pb-5" alt="도전! 롤든벨" />
      {/* 섹션 1: 게임 소개 및 플레이 방법 */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-blue-600">🎮 도전! 롤든벨 플레이 방법</h2>
        <div className="space-y-4">
          <p>
            <strong>도전! 롤든벨</strong>은 리그 오브 레전드(League of Legends)의 방대한 데이터를 바탕으로 두 챔피언 간의 상대적인 승률을 맞히는 심리 및 데이터 추론 퀴즈 게임입니다.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>양자택일 퀴즈:</strong> 화면에 무작위로 등장하는 두 명의 챔피언 중, 실제 통계상 승률이 더 높은 챔피언을 클릭하세요.</li>
            <li><strong>목숨 시스템:</strong> 모든 플레이어에게는 총 <strong>3개의 하트(목숨)</strong>가 주어집니다. 틀릴 때마다 하트가 하나씩 차감됩니다.</li>
            <li><strong>게임 오버:</strong> 하트를 모두 소진하면 게임이 종료되며, 현재까지 맞힌 정답 개수가 최종 점수로 기록됩니다.</li>
            <li><strong>최신 데이터 반영:</strong> 퀴즈에 사용되는 데이터는 정기적으로 업데이트되는 랭크 게임 통계를 기반으로 합니다.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-purple-600">📊 데이터 산출 방식 및 신뢰도</h2>
        <div className="space-y-4 text-sm md:text-base">
          <p>도전! 롤든벨은 단순히 승률 한 가지만 보지 않습니다. 구글 봇과 유저들에게 투명한 정보를 제공하기 위해 다음과 같은 <strong>Riot API 매트릭스</strong>를 종합적으로 분석합니다.</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li><strong>라인전 킬 확률 (Solo Kill Rate):</strong> 정글러의 개입 없이 순수하게 1대1 상황에서 상대를 제압할 확률을 반영합니다.</li>
            <li><strong>15분 기준 골드 차이 (GD@15):</strong> 초반 라인전 주도권을 누가 쥐고 있는지를 나타내는 핵심 지표입니다.</li>
            <li><strong>승리 기여도 (Win Rate vs Matchup):</strong> 특정 챔피언을 상대했을 때의 상대적 승률 변동폭을 계산하여 단순 승률의 오류를 보정합니다.</li>
            <li><strong>표표본 오차 범위 제한:</strong> 판수가 너무 적은(0.5% 미만 픽률) 챔피언 매치업은 데이터 오염을 방지하기 위해 퀴즈셋에서 제외하거나 가중치를 낮게 설정합니다.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-indigo-600">🔍 티어별 승률 데이터의 차이와 해석</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>도전! 롤든벨</strong>이 분석의 기준을 <strong>'에메랄드 티어 이상'</strong>으로 고집하는 데에는 통계학적인 이유가 있습니다. 리그 오브 레전드(LoL)는 숙련도에 따라 챔피언의 성능이 완전히 다르게 발현되기 때문입니다.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2 text-blue-900">저티어 구간의 특징</h3>
              <p className="text-sm">아이언부터 골드까지의 구간은 챔피언의 구조적 상성보다는 <strong>개인의 컨트롤 실수</strong>나 <strong>피지컬 차이</strong>에 의해 승패가 결정되는 경향이 짙습니다. 따라서 순수 상성 데이터를 도출하기에는 변수가 너무 많습니다.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold mb-2 text-green-900">고티어 구간의 특징</h3>
              <p className="text-sm">에메랄드에서 챌린저에 이르는 구간의 유저들은 각 챔피언의 메커니즘을 한계치까지 활용합니다. 이로 인해 <strong>챔피언 간의 상성(Counter-pick)</strong>이 승률에 직접적으로 투영되며, 통계적 유의미함을 갖게 됩니다.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold mb-2 text-purple-900">지표의 일관성 확보</h3>
              <p className="text-sm">상위 티어 데이터는 라이엇 게임즈의 <strong>패치 노트 변화</strong>에 가장 기민하게 반응합니다. 저희는 이 데이터를 실시간으로 추적하여 유행을 넘어선 '실제 성능' 수치를 퀴즈의 정답으로 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 2: 고득점 공략법 */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-green-600">🏆 고득점을 위한 전략적 팁</h2>
        <div className="space-y-4">
          <p>단순한 운이 아닌, 협곡의 생태계를 이해하면 더 높은 점수를 얻을 수 있습니다.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-md bg-gray-50">
              <h3 className="font-bold mb-2">1. 메타의 흐름 파악</h3>
              <p className="text-sm">현재 패치 버전에서 강력한 성능을 발휘하는 &apos;1티어 챔피언&apos;들을 기억하세요. 승률은 보통 패치 노트에 따라 크게 요동칩니다.</p>
            </div>
            <div className="border p-4 rounded-md bg-gray-50">
              <h3 className="font-bold mb-2">2. 상성 관계 이해</h3>
              <p className="text-sm">단순 승률 외에도 특정 직군(예: 암살자 vs 탱커) 간의 기본적인 상성을 고려하는 것이 정답 확률을 높이는 비결입니다.</p>
            </div>
            <div className="border p-4 rounded-md bg-gray-50">
              <h3 className="font-bold mb-2">3. 난이도와 승률의 관계</h3>
              <p className="text-sm">조작 난이도가 매우 높은 챔피언은 숙련도에 따라 승률이 낮게 집계되는 경우가 많습니다. 대중적인 챔피언의 승률을 눈여겨보세요.</p>
            </div>
            <div className="border p-4 rounded-md bg-gray-50">
              <h3 className="font-bold mb-2">4. 표본 데이터의 함정</h3>
              <p className="text-sm">픽률이 낮은 장인 위주의 챔피언은 의외로 전체 승률이 높게 나타날 수 있습니다. 통계의 이면을 예측해 보세요.</p>
            </div>
            <div className="border p-4 rounded-md bg-gray-50">
              <h3 className="font-bold mb-2">5. 최신 밸런스 동향 파악</h3>
              <p className="text-sm">라이엇 게임즈의 패치에 따라서 챔피언들의 밸런스는 변화합니다. <Link href={'/news'} className="font-black text-blue-500">News</Link>에서 최신 패치노트를 확인하고 득점왕을 노리세요.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-orange-600">💡 유형별 상성 학습 가이드</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">1. 전사(Bruiser) vs 탱커(Tank)</h3>
            <p className="text-gray-700">전통적으로 전사 클래스는 지속 교전 능력이 뛰어나 탱커를 압도하는 경향이 있습니다. 하지만 탱커가 '가시 갑옷'이나 '태양불꽃 방패' 등 핵심 방어 아이템을 갖춘 시점부터는 승률 그래프가 역전되기도 합니다. 퀴즈에서 이 둘이 붙는다면, 현재 메타에서 '몰락한 왕의 검' 같은 안티 탱커 아이템의 효율을 고려해 보세요.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">2. 암살자(Assassin) vs 마법사(Mage)</h3>
            <p className="text-gray-700">마법사는 원거리에서 견제 능력이 뛰어나지만, 암살자의 폭발적인 대미지에는 취약합니다. 통계적으로 에메랄드 이상의 상위 티어에서는 마법사가 거리 조절을 통해 승률을 방어하는 경우가 많지만, 대중적인 매치업에서는 암살자의 승률이 소폭 높게 나타나는 경향이 있습니다.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">3. 원거리 딜러(ADC) 간의 상성</h3>
            <p className="text-gray-700">원거리 딜러는 사거리 차이가 승패를 결정짓습니다. 사거리가 긴 케이틀린이나 애쉬는 초반 주도권을 잡기 유리하지만, 후반 한타 기여도에서는 베인이나 카이사 같은 하이퍼 캐리형 챔피언에게 밀릴 수 있습니다. 퀴즈의 정답 기준은 '최종 승리'이므로 후반 밸류를 고려하는 것이 팁입니다.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-red-600">⚔️ 리그 오브 레전드의 3대 상성 결정 요소</h2>
        <div className="space-y-6 text-gray-700">
          <p>퀴즈에서 높은 연승 기록을 세우기 위해서는 단순히 이름만 아는 것을 넘어, 협곡을 지배하는 <strong>3가지 핵심 메커니즘</strong>을 이해해야 합니다.</p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">1. 유지력(Sustain) vs 포킹(Poking)</h3>
              <p className="text-sm md:text-base">원거리에서 스킬을 난사해 체력을 갉아먹는 <strong>포킹 챔피언(예: 제라스, 이즈리얼)</strong>은 뛰어난 회복 능력이나 보호막을 가진 <strong>유지력 기반 챔피언(예: 소라카, 소나)</strong>에게 취약합니다. 중장기전으로 갈수록 포킹의 가치는 낮아지고 유지력이 승률을 견인하게 됩니다.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">2. 하드 CC기(군중 제어)의 억제력</h3>
              <p className="text-sm md:text-base">기동성이 뛰어난 암살자나 브루저들은 강력한 <strong>확정 CC기(예: 말자하의 황천의 손아귀, 레오나의 흑점 폭발)</strong> 앞에서 무력해집니다. 통계상으로도 진입형 챔피언들은 수비적 CC기를 보유한 조합을 상대로 현저히 낮은 승률을 기록하고 있습니다.</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg text-gray-900">3. 성장 곡선(Scaling)과 시간대별 승률</h3>
              <p className="text-sm md:text-base">소위 '유통기한'이라 불리는 <strong>초반 강력한 챔피언(예: 엘리스, 판테온)</strong>과 후반에 압도적인 <strong>왕귀형 챔피언(예: 케일, 카사딘)</strong>의 대결에서는 현재 메타의 평균 게임 시간이 정답을 가르는 기준이 됩니다. 도전! 롤든벨은 현재 메타의 평균 경기 시간을 고려하여 가장 확률 높은 쪽을 정답으로 도출합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 3: 주의사항 */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-red-500">📌 주의사항</h2>
        <p className="text-sm text-gray-600">
          본 게임의 승률 데이터는 특정 티어 및 기간을 기준으로 산출되었으므로, 실제 실시간 게임 내 수치와는 미세한 차이가 있을 수 있습니다. 데이터는 주기적인 업데이트를 통해 최신화됩니다.
        </p>
      </section>

      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-8">
        <p className="text-blue-700 font-bold">
          💡 더 깊이 있는 분석이 궁금하신가요?
        </p>
        <p className="text-sm text-blue-600 mt-1">
          현재 26.03 패치 메타 분석과 라인별 1티어 챔피언 공략은 <Link href="/news" className="underline font-black">실시간 뉴스 페이지</Link>에서 상세히 다루고 있습니다.
        </p>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 pb-10">
        <p>Last updated: 2026. 02. 03</p>
      </div>
    </div>
  );
}

export default GuidePage;