import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PiggyBank } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import { getArticlesByCategory } from '@/data/articles';

const FinancasCategory = () => {
  const articles = getArticlesByCategory('Finanças');

  return (
    <>
      <Helmet>
        <title>Finanças Pessoais - Inicia Seu Capital</title>
        <meta name="description" content="Dicas práticas para economizar, sair das dívidas e investir melhor seu dinheiro." />
        <meta name="keywords" content="finanças pessoais, economia doméstica, investimentos, dívidas" />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        <section className="bg-gradient-to-r from-[#7FFF00] to-[#66cc00] py-16 text-[#333333]">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <PiggyBank className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">Finanças Pessoais</h1>
              <p className="text-xl max-w-2xl mx-auto font-medium">
                O guia definitivo para organizar sua vida financeira, cortar gastos e multiplicar seu patrimônio.
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

export default FinancasCategory;