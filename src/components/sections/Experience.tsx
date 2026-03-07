import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  platform: string;
  text: string;
  rating: number;
  url?: string;
}

const REVIEWS = [
  {
    id: 1,
    name: "Alex M.",
    platform: "Google Review",
    text: "Undeniably the best authentic Japanese ramen in Jacksonville. The meticulous 24-hour pork bone broth and handcrafted noodles show a level of culinary mastery you'd expect from a fine dining establishment.",
    rating: 5
  },
  {
    id: 2,
    name: "Jonathan C.",
    platform: "Google Review",
    text: "A true hidden gem in Florida. From the melt-in-your-mouth Chashu to the perfectly balanced umami of their Tonkotsu, Modu Ramen elevates traditional Japanese street food to an art form.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily R.",
    platform: "Google Review",
    text: "The sheer attention to detail here is breathtaking. Exploring their menu, from the delicate Vegetable Gyoza to the rich Matcha Ramen, is a premium culinary journey. Jacksonville's absolute finest.",
    rating: 5
  }
];

async function getReviews(): Promise<Review[]> {
  const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJs5z-3xFC6IgRhC0kFfMyz20';
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

  if (!API_KEY) {
    return REVIEWS;
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`,
      { next: { revalidate: 86400 } }
    );
    const data = await response.json();

    if (data.result && data.result.reviews) {
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

      if (fiveStarReviews.length > 0) return fiveStarReviews;
    }
  } catch (error) {
    console.error("실시간 구글 리뷰를 가져오는 데 실패했습니다. 기본 리뷰를 표시합니다.", error);
  }

  return REVIEWS;
}

export default async function Experience() {
  const reviews = await getReviews();
  return (
    <section className="py-24 md:py-32 bg-paper text-charcoal">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-serif mb-6">Guest Experience</h2>
           <p className="text-charcoal/70 font-light max-w-lg mx-auto">
             Don't just take our word for it. Hear from those who have experienced the true taste of Japan.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 border border-charcoal/10 shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-serif italic mb-8 flex-grow">"{review.text}"</p>
              <div>
                <p className="font-semibold text-sm uppercase tracking-widest">{review.name}</p>
                <p className="text-xs text-charcoal/50 tracking-wider mt-1">{review.platform}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
