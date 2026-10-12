import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, Calendar, User, ArrowLeft, Tag, TrendingUp } from 'lucide-react';
import NewsletterForm from '@/components/NewsletterForm';
import SocialShareButtons from '@/components/SocialShareButtons';
import CategoryBadge from '@/components/CategoryBadge';
import ArticleCard from '@/components/ArticleCard';
import { getArticleBySlug, articles } from '@/data/articles';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Artigo não encontrado</h2>
          <p className="text-gray-600 mb-6">O artigo que você procura não existe ou foi removido.</p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  // Find related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Extract article data for meta tags, falling back to defaults if specific SEO fields aren't present
  const metaTitle = article.metaTitle || `${article.title} - Inicia Seu Capital`;
  const metaDescription = article.metaDescription || article.description;
  const ogTitle = article.ogTitle || article.title;
  const ogDescription = article.ogDescription || article.description;
  const ogImage = article.image;
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Extract second image if available in content for schema (simple extraction for demo)
  // In a real app, this might be more robust.
  const schemaImages = [article.image];
  if (article.slug === 'crises-economicas-brasil-2-licoes-proteger-dinheiro') {
     schemaImages.push('https://images.unsplash.com/photo-1677100700824-e8302ffcc1e6');
  }
  if (article.slug === 'inovacao-e-mercado-tecnologia-novas-oportunidades') {
     schemaImages.push('https://images.unsplash.com/photo-1684395165684-1210bdc81d96');
  }

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={article.keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="author" content={article.author} />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": metaDescription,
            "image": schemaImages,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Inicia Seu Capital",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iniciaseucapital.com.br/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            },
            "datePublished": article.date,
            "dateModified": article.date
          })}
        </script>
      </Helmet>

      <article className="min-h-screen bg-[#F5F5F5]">
        {/* Article Header Image */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
            <div className="max-w-4xl mx-auto text-white">
              <CategoryBadge category={article.category} className="mb-4" />
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-200 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm p-6 md:p-10"
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div 
                  className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC] prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-[#0066CC] prose-blockquote:pl-4 prose-blockquote:italic"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Keywords/Tags Footer */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Tópicos Relacionados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.split(',').map((keyword, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                        {keyword.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <SocialShareButtons title={article.title} />
                </div>
              </motion.div>

              {/* Related Articles Mobile/Desktop below content */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#0066CC] pl-3">Você também pode gostar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map(related => (
                    <ArticleCard key={related.id} article={related} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter Box */}
                <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Gostou deste artigo?</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba nossos melhores conteúdos sobre {article.category} diretamente no seu e-mail.</p>
                  <NewsletterForm />
                </div>
                
                {/* Quick Categories */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4">Navegue por Categoria</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/blog/economia" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#0066CC] transition-colors">
                      <span className="font-medium">Economia</span>
                      <TrendingUp className="w-4 h-4 opacity-50" />
                    </Link>
                    <Link to="/blog/financas" className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors">
                      <span className="font-medium">Finanças</span>
                      <Clock className="w-4 h-4 opacity-50" />
                    </Link>
                    <Link to="/blog/carreira" className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors">
                      <span className="font-medium">Carreira</span>
                      <User className="w-4 h-4 opacity-50" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleDetail;