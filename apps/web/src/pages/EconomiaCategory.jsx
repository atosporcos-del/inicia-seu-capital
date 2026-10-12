import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Search } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory } from '@/data/articles';

const EconomiaCategory = () => {
  const articles = getArticlesByCategory('Economia');

  return (
    <>
      <Helmet>
        <title>Economia - Inicia Seu Capital</title>
        <meta name="description" content="Análises econômicas, notícias sobre inflação, PIB e tendências de mercado para 2026." />
        <meta name="keywords" content="economia, inflação, PIB, mercado, brasil" />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-5xl font-bold mb-4">Economia</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Entenda como as movimentações do mercado e as decisões políticas impactam o seu bolso e seus investimentos.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>
            
            {articles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">Nenhum artigo encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default EconomiaCategory;