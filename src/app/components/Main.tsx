'use client';
import Image from 'next/image';

export default function Main() {
  const newsData = {
    trending: [
      { id: 1, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 2, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 3, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 4, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
    ],
    business: [
      { id: 4, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 5, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 6, headline: "Business News 3", date: "December 4, 2024" },
      { id: 7, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 8, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 9, headline: "Business News 3", date: "December 4, 2024" },
    ],
    latest: [
      { id: 7, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 8, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 9, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      { id: 10, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
    ],
    other: {
      general: [
        { id: 9, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
        { id: 10, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
        { id: 11, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
        { id: 12, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      ],
      international: [
        { id: 11, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
        { id: 12, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
        { id: 13, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
        { id: 14, headline: "Three key Bills to tackle financial crimes set for 2024", date: "December 4, 2024" },
      ],
    },
  };

  return (
    <main className="bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Trending News</h2>
            <div className="space-y-4">
              {newsData.trending.map((news) => (
                <div key={news.id} className="flex items-start space-x-4 bg-customGray p-2 rounded-md">
                  <Image
                    src="/news.jpg"
                    alt={news.headline}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-base font-bold">{news.headline}</h3>
                    <p className="text-sm text-gray-600">On: {news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Business News */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Business News</h2>
            <div className="space-y-4">
              {newsData.business.map((news) => (
                <div key={news.id} className="flex items-start space-x-4 bg-customGray p-2 rounded-md">
                  <Image
                    src="/news.jpg"
                    alt={news.headline}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{news.headline}</h3>
                    <p className="text-sm text-gray-600">On: {news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Latest News & Other News */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Latest News</h2>
            <div className="space-y-4">
              {newsData.latest.map((news) => (
                <div key={news.id} className="flex items-start space-x-4 bg-customGray p-2 rounded-md">
                  <Image
                    src="/news.jpg"
                    alt={news.headline}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{news.headline}</h3>
                    <p className="text-sm text-gray-600">On: {news.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">Other News</h2>
            <div className="space-y-4">
              {newsData.other.general.map((news) => (
                <div key={news.id} className="flex items-start space-x-4 bg-customGray p-2 rounded-md">
                  <Image
                    src="/news.jpg"
                    alt={news.headline}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{news.headline}</h3>
                    <p className="text-sm text-gray-600">On: {news.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-blue-500 mt-4">International News</h3>
            <div className="space-y-4">
              {newsData.other.international.map((news) => (
                <div key={news.id} className="flex items-start space-x-4 bg-customGray p-2 rounded-md">
                  <Image
                    src="/news.jpg"
                    alt={news.headline}
                    width={96}
                    height={96}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{news.headline}</h3>
                    <p className="text-sm text-gray-600">On: {news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
