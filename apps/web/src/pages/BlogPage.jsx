import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import ArticleCard from '@/components/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm';
import { articles } from '@/data/articles';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Economia', 'Finanças', 'Carreira'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const recentArticles = articles.slice(0, 5); // Just 5 recent for sidebar

  return (
    <>
      <Helmet>
        <title>Blog - Inicia Seu Capital</title>
        <meta name="description" content="Artigos completos sobre economia, finanças pessoais e carreira para transformar sua vida financeira." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="bg-[#0066CC] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              Blog
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl opacity-90 max-w-2xl mx-auto"
            >
              Conhecimento é o melhor investimento. Explore nossos artigos e domine suas finanças.
            </motion.p>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#0066CC] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Articles Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ArticleCard article={article} />
                    </motion.div>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                    <p className="text-xl text-gray-500 mb-2">Nenhum artigo encontrado.</p>
                    <button 
                      onClick={() => {setSearchTerm(''); setSelectedCategory('Todos');}}
                      className="text-[#0066CC] hover:underline font-medium"
                    >
                      Limpar filtros
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 border-l-4 border-[#0066CC] pl-3">Destaques Recentes</h3>
                  <div className="space-y-4">
                    {recentArticles.map((article) => (
                      <Link 
                        key={article.id} 
                        to={`/artigos/${article.slug}`}
                        className="group block"
                      >
                        <h4 className="font-medium text-gray-800 group-hover:text-[#0066CC] transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-gray-500 mt-1 block">{article.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0066CC] to-[#004C99] p-6 rounded-xl shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Newsletter VIP</h3>
                  <p className="text-sm opacity-90 mb-4">Receba análises exclusivas e dicas semanais no seu e-mail.</p>
                  <NewsletterForm compact />
                </div>
              </aside>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;