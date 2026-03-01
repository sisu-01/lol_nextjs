import { PlacementInfo } from "@/types/adsense";

export const h5AdsenseDebug = (placementInfo: PlacementInfo) => {
  console.log("--- Ad Placement Info ---");
  console.log(`Type: ${placementInfo.breakType}`);
  console.log(`Name: ${placementInfo.breakName}`);
  console.log(`Format: ${placementInfo.breakFormat}`);
  const status = placementInfo.breakStatus;
  if (status === 'notReady')        console.log("[Status: notReady] Ad Placement API가 초기화되지 않았습니다.");
  else if (status === 'timeout')    console.log("[Status: timeout] API 응답 시간 초과로 게재위치가 취소되었습니다.");
  else if (status === 'invalid')    console.log("[Status: invalid] 게재위치가 유효하지 않아 무시되었습니다. (중복 프리롤 등)");
  else if (status === 'error')      console.log("[Status: error] 콜백 함수 실행 중 자바스크립트 오류가 발생했습니다.");
  else if (status === 'noAdPreloaded') console.log("[Status: noAdPreloaded] 미리 로드된 광고가 없어 게재를 건너뜁니다.");
  else if (status === 'frequencyCapped') console.log("[Status: frequencyCapped] 광고 게재 빈도 제한이 적용되었습니다.");
  else if (status === 'ignored')    console.log("[Status: ignored] 사용자가 리워드 광고 보기를 선택하지 않았습니다.");
  else if (status === 'other')      console.log("[Status: other] 기타 이유(화면 회전 등)로 광고가 게재되지 않았습니다.");
  else if (status === 'dismissed')  console.log("[Status: dismissed] 사용자가 광고 시청 완료 전 창을 닫았습니다.");
  else if (status === 'viewed')     console.log("[Status: viewed] 사용자가 광고를 끝까지 시청했습니다.");
  else                              console.log(`[Status: ${status}] 알 수 없는 상태값이 반환되었습니다.`);
}