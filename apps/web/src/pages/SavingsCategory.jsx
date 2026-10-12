import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PiggyBank } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';

const SavingsCategory = () => {
  const articles = [
    {
      id: 4,
      slug: 'economizar-dinheiro-renda-baixa',
      title: 'Economizar Dinheiro com Renda Baixa: Guia Prático para 2026',
      summary: 'Descubra estratégias realistas e acionáveis para fazer seu dinheiro render mais, focando em organização, renda extra e economia inteligente.',
      image: 'https://images.unsplash.com/photo-1616077168639-f770d830e3d1',
      readTime: '8 min',
      category: 'Economia',
      date: '2026-01-19'
    },
    {
      id: 2,
      slug: 'como-economizar-no-fim-do-mes',
      title: 'Como Economizar no Fim do Mês',
      summary: 'Aprenda técnicas práticas e eficazes para reduzir gastos e construir uma reserva financeira sustentável.',
      image: 'https://images.unsplash.com/photo-1632849508137-3ef430962c8e',
      readTime: '6 min',
      category: 'Economia',
      date: '2026-01-08'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Economia - Inicia Seu Capital</title>
        <meta name="description" content="Dicas práticas para economizar dinheiro e construir reservas financeiras." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <PiggyBank className="w-16 h-16 mx-auto mb-4" />
              <h1 className="text-5xl font-bold mb-4">Economia</h1>
              <p className="text-xl">Aprenda a economizar e construir suas reservas</p>
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

export default SavingsCategory;