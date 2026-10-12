import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Calendar } from 'lucide-react';
import CategoryBadge from '@/components/CategoryBadge';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/artigos/${article.slug}`} className="card group overflow-hidden flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute top-4 left-4">
           <CategoryBadge category={article.category} />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Calendar className="w-3 h-3" />
          <span>{article.date}</span>
        </div>
        
        <h3 className="text-xl font-bold text-[#333333] mb-3 line-clamp-2 group-hover:text-[#0066CC] transition-colors">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
          <span className="flex items-center text-[#0066CC] font-semibold text-sm group-hover:translate-x-1 transition-transform">
            Ler Mais <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;