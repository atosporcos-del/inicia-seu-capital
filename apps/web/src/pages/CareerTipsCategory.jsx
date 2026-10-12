import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory } from '@/data/articles';

const CareerTipsCategory = () => {
  const articles = getArticlesByCategory('Carreira');

  return (
    <>
      <Helmet>
        <title>Dicas de Carreira - Inicia Seu Capital</title>
        <meta name="description" content="Orientações profissionais para impulsionar sua carreira, conseguir promoções e aumentar sua renda." />
        <meta name="keywords" content="carreira, emprego, currículo, promoção, networking" />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        <section className="bg-gradient-to-r from-[#6b21a8] to-[#9333ea] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-5xl font-bold mb-4">Dicas de Carreira</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Estratégias para acelerar seu crescimento profissional e conquistar as melhores oportunidades do mercado.
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
          </div>
        </section>
      </div>
    </>
  );
};

export default CareerTipsCategory;