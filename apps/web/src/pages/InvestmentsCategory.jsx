import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';

const InvestmentsCategory = () => {
  const articles = [
    {
      id: 1,
      slug: '10-dicas-para-comecar-a-investir-jovem',
      title: '10 Dicas para Começar a Investir Jovem',
      summary: 'Descubra as melhores estratégias para iniciar sua jornada de investimentos ainda jovem e garantir um futuro financeiro sólido.',
      image: 'https://images.unsplash.com/photo-1620266757065-5814239881fd',
      readTime: '8 min',
      category: 'Investimentos',
      date: '2026-01-05'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Investimentos - Inicia Seu Capital</title>
        <meta name="description" content="Aprenda tudo sobre investimentos e como fazer seu dinheiro trabalhar para você." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-5xl font-bold mb-4">Investimentos</h1>
              <p className="text-xl">Aprenda a fazer seu dinheiro trabalhar para você</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
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

export default InvestmentsCategory;