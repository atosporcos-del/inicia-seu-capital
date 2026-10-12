import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calculator, TrendingUp, Download } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import ToolCard from '@/components/ToolCard';
import NewsletterForm from '@/components/NewsletterForm';
import { getFeaturedArticles } from '@/data/articles';

const HomePage = () => {
  const featuredArticles = getFeaturedArticles();

  const tools = [
    {
      icon: Calculator,
      title: 'Calculadora de Juros',
      description: 'Calcule juros compostos e simples de forma rápida e precisa.',
      link: '/ferramentas#juros'
    },
    {
      icon: TrendingUp,
      title: 'Simulador de Investimentos',
      description: 'Simule o crescimento dos seus investimentos ao longo do tempo.',
      link: '/ferramentas#investimentos'
    },
    {
      icon: BookOpen,
      title: 'Planilha de Orçamento',
      description: 'Organize suas finanças com nossa planilha interativa completa.',
      link: '/ferramentas#orcamento'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Inicia Seu Capital - Domine suas Finanças Pessoais</title>
        <meta name="description" content="Portal completo sobre educação financeira, economia e carreira. Aprenda a investir e poupar." />
      </Helmet>

      <div className="w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1578098576845-51e4ff4305d5)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="gradient-overlay z-10" />
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Domine suas <br />
              <span className="text-[#7FFF00]">Finanças Pessoais</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Aprenda a investir, economizar e construir um futuro financeiro sólido em 2026.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
                Comece Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="btn-secondary inline-flex items-center gap-2">
                <Download className="w-5 h-5" />
                Baixar eBook Grátis
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#333333] mb-4">Artigos em Destaque</h2>
              <p className="text-lg text-gray-600">Conteúdo selecionado para você começar com o pé direito.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
                Ver Todos os Artigos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tools Showcase Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-[#333333] mb-4">Ferramentas Práticas</h2>
              <p className="text-lg text-gray-600">Recursos para facilitar sua gestão financeira</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <ToolCard tool={tool} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-10">Explore por Tópicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link to="/blog/economia" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0066CC] transition-colors">
                  <TrendingUp className="w-8 h-8 text-[#0066CC] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Economia</h3>
                <p className="text-gray-600">Entenda o mercado e proteja seu dinheiro da inflação.</p>
              </Link>
              
              <Link to="/blog/financas" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#7FFF00] transition-colors">
                  <Calculator className="w-8 h-8 text-green-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Finanças Pessoais</h3>
                <p className="text-gray-600">Dicas para economizar, investir e sair das dívidas.</p>
              </Link>

              <Link to="/blog/carreira" className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <BookOpen className="w-8 h-8 text-purple-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Carreira</h3>
                <p className="text-gray-600">Cresça profissionalmente e aumente sua renda.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-[#0066CC] to-[#0052a3]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Receba Conteúdo Exclusivo</h2>
              <p className="text-lg text-white/90 mb-8">
                Inscreva-se em nossa newsletter e receba dicas, artigos e ferramentas direto no seu e-mail
              </p>
              <NewsletterForm />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;