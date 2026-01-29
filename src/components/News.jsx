import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const NewsCard = ({ image, date, title, description, readMoreText }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 group h-full flex flex-col">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-ziya-red flex items-center gap-1">
        <Calendar size={12} /> {date}
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-ziya-red transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
        {description}
      </p>
      <a href="#" className="inline-block text-ziya-red font-semibold hover:underline mt-auto">
        {readMoreText} &rarr;
      </a>
    </div>
  </div>
);

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "28 Yan 2026",
      title: t('news.item1_title'),
      description: t('news.item1_desc')
    },
    {
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "25 Yan 2026",
      title: t('news.item2_title'),
      description: t('news.item2_desc')
    },
    {
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "20 Yan 2026",
      title: t('news.item3_title'),
      description: t('news.item3_desc')
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('news.title')}</h2>
            <p className="text-gray-500">{t('news.subtitle')}</p>
          </div>
          <a href="#" className="hidden md:block text-ziya-red font-semibold hover:text-red-900">
            {t('news.view_all')}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} readMoreText={t('news.read_more')} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-ziya-red font-semibold hover:text-red-900">
            {t('news.view_all')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
