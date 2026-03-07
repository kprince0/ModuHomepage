import { NextResponse } from 'next/server';

export async function GET() {
  // 정상 작동을 위해 프로젝트 최상단에 .env.local 파일을 만들고 다음 변수들을 추가해야 합니다:
  // GOOGLE_PLACE_ID=사장님의_가게_PLACE_ID (https://developers.google.com/maps/documentation/places/web-service/place-id 에서 찾을 수 있습니다)
  // GOOGLE_PLACES_API_KEY=발급받은_API_KEY
  const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJs5z-3xFC6IgRhC0kFfMyz20'; // 임시 ID입니다. 실제 Modu Ramen의 Place ID로 교체해 주세요.
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: 'Google Places API Key가 없습니다. .env.local 파일에 GOOGLE_PLACES_API_KEY를 설정해 주세요.' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`,
      { next: { revalidate: 86400 } } // 쿼터 제한 초과 및 과금을 방지하기 위해 24시간 동안 캐시(저장)합니다.
    );
    const data = await response.json();

    if (data.result && data.result.reviews) {
      // 5성급 리뷰만 필터링한 후 최신순으로 정렬하여 상위 3개를 가져옵니다.
      const fiveStarReviews = data.result.reviews
        .filter((review: any) => review.rating === 5)
        .sort((a: any, b: any) => b.time - a.time)
        .slice(0, 3)
        .map((review: any, index: number) => ({
          id: index + 1,
          name: review.author_name,
          platform: "Google Review",
          text: review.text,
          rating: review.rating,
          url: review.author_url || "https://www.google.com/maps/place/Modu+Ramen/@30.21855,-81.55465,15z"
        }));

      return NextResponse.json({ reviews: fiveStarReviews });
    }

    return NextResponse.json({ reviews: [] });
  } catch (error) {
    console.error("구글 리뷰를 가져오는 중 오류 발생:", error);
    return NextResponse.json({ error: '리뷰를 가져오는 데 실패했습니다.' }, { status: 500 });
  }
}
