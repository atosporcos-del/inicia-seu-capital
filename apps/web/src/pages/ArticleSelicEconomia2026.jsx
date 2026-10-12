import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, DollarSign, Percent, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const ArticleSelicEconomia2026 = () => {
  const articleData = {
    title: "Selic em 2026: Seu Financiamento e Seus Investimentos Dependem Desta Taxa",
    description: "A Selic define o custo do crédito e o rendimento da poupança. Entenda como a taxa básica influencia seus financiamentos e investimentos.",
    author: "Seu Site",
    date: "2026-01-26",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/selic-2026-investimentos-financiamentos",
    images: [
      "https://images.unsplash.com/photo-1666206499838-3fcff057cc69", // Image 1 (Hero)
      "https://images.unsplash.com/photo-1656049471577-1c10b7359c7d"  // Image 2 (Middle)
    ]
  };

  // Fetch related articles (excluding current)
  const relatedArticles = getArticlesByCategory('Economia')
    .filter(a => a.slug !== "selic-2026-investimentos-financiamentos")
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Selic em 2026: Como Ela Afeta Seu Dinheiro e Investimentos</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="Selic 2026, taxa Selic, juros, Banco Central, investimentos, financiamento, crédito, renda fixa" />
        <link rel="canonical" href={articleData.url} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Selic em 2026: O Termômetro das Suas Decisões Financeiras" />
        <meta property="og:description" content="Saiba como a Selic influencia o custo do crédito e o rendimento dos investimentos — e o que esperar em 2026." />
        <meta property="og:image" content={articleData.images[0]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleData.title,
            "description": articleData.description,
            "image": articleData.images,
            "author": {
              "@type": "Person",
              "name": articleData.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Inicia Seu Capital",
              "logo": {
                "@type": "ImageObject",
                "url": "https://iniciaseucapital.com.br/logo.png"
              }
            },
            "datePublished": articleData.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": articleData.url
            }
          })}
        </script>
      </Helmet>

      <article className="min-h-screen bg-[#F5F5F5]">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <img 
            src={articleData.images[0]} 
            alt="Notas de real e gráfico representando a variação da taxa Selic."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
            <div className="max-w-4xl mx-auto text-white">
              <CategoryBadge category={articleData.category} className="mb-4" />
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight shadow-sm">{articleData.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-200 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(articleData.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{articleData.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{articleData.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 md:p-10"
                initial="initial"
                animate="animate"
                variants={fadeIn}
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  
                  <p className="italic text-lg text-gray-600 mb-8 border-l-4 border-[#0066CC] pl-4">
                    A Selic não é apenas um número no noticiário; ela é o maestro invisível que rege o custo do seu cartão de crédito, o rendimento da sua reserva de emergência e a facilidade (ou dificuldade) de comprar sua casa própria. Em 2026, entender a Selic é questão de sobrevivência financeira.
                  </p>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que é a Taxa Selic e Por Que Ela Importa?</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      A Selic é a taxa básica de juros da economia brasileira. Ela é definida pelo Banco Central a cada 45 dias com um objetivo principal: controlar a inflação. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Funciona como uma torneira:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
                      <li><strong>Quando a inflação sobe:</strong> O BC fecha a torneira (aumenta a Selic) para encarecer o crédito, reduzir o consumo e segurar os preços.</li>
                      <li><strong>Quando a economia esfria:</strong> O BC abre a torneira (baixa a Selic) para estimular o consumo e os investimentos.</li>
                    </ul>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1666206499838-3fcff057cc69" 
                      alt="Notas de real e gráfico representando a variação da taxa Selic." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      A Selic define o custo do dinheiro na economia brasileira.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cenário 2026: Onde Estamos?</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Em 2026, o cenário econômico exige cautela. O Banco Central tem mantido uma postura vigilante. Isso significa que não devemos esperar quedas bruscas na taxa de juros a curto prazo, a menos que a inflação mostre sinais consistentes de recuo.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                      <p className="font-semibold text-yellow-900 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Ponto de Atenção:
                      </p>
                      <p className="text-yellow-800 text-sm">
                        Juros altos por mais tempo significam que tomar dinheiro emprestado continuará caro, mas deixar dinheiro parado no banco (investido) renderá mais.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Impacto nos Financiamentos (Carro, Casa)</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Se você planeja comprar um imóvel ou trocar de carro em 2026, a Selic é sua inimiga número um. Como ela baliza os juros bancários, uma taxa elevada encarece diretamente o CET (Custo Efetivo Total) dos financiamentos.
                    </p>
                    <p className="text-gray-700 leading-relaxed font-bold">
                      Exemplo prático:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Num financiamento imobiliário de R$ 300 mil, uma diferença de apenas 1% ou 2% na taxa de juros ao ano pode representar mais de R$ 50 mil pagos a mais no final do contrato.
                    </p>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1656049471577-1c10b7359c7d" 
                      alt="Balança representando o equilíbrio entre crédito e investimento conforme a Selic." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      A Selic afeta tanto o custo do crédito quanto o rendimento dos investimentos.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Impacto nos Investimentos (Renda Fixa, Poupança)</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Aqui o jogo vira. Para quem poupa, a Selic alta é uma excelente notícia.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Tesouro Selic e CDBs
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Estes investimentos acompanham a taxa básica. Se a Selic está em 10% ou 11% ao ano, seu dinheiro no Tesouro Selic rende praticamente isso, com baixíssimo risco. É o paraíso dos investidores conservadores.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                      A Poupança Vale a Pena?
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Cuidado! Se a Selic estiver acima de 8,5% ao ano, a poupança rende fixos 0,5% ao mês + TR. Isso geralmente perde feio para CDBs que pagam 100% do CDI. Em 2026, deixar dinheiro na poupança é, quase certamente, deixar de ganhar dinheiro.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão: Como se Posicionar?</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O ano de 2026 não é para amadores ou aventureiros. Com a Selic em patamares que exigem atenção, a melhor estratégia é:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
                      <li><strong>Evite dívidas novas:</strong> Juros altos punem o devedor.</li>
                      <li><strong>Aproveite a Renda Fixa:</strong> Garanta rentabilidade segura enquanto a taxa estiver alta.</li>
                      <li><strong>Negocie:</strong> Se tiver dívidas antigas, tente renegociar. Os bancos sabem que a inadimplência sobe com a Selic e podem oferecer descontos.</li>
                    </ul>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Palavras-chave
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "Selic 2026",
                        "taxa Selic",
                        "juros",
                        "Banco Central",
                        "investimentos",
                        "financiamento"
                      ].map((keyword, index) => (
                        <li key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-default">
                          {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <SocialShareButtons title={articleData.title} />
                </div>
              </motion.div>

              {/* Related Articles Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Leia também em Economia</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Resumo Econômico</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba as atualizações da taxa Selic e dicas de investimento assim que o COPOM decidir.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Indicadores Hoje</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Selic Meta</span>
                        <span className="font-bold text-blue-600">10,75%</span>
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">CDI (Investimentos)</span>
                        <span className="font-bold text-green-600">10,65%</span>
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Poupança (a.a.)</span>
                        <span className="font-bold text-orange-500">6,17% + TR</span>
                     </div>
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

export default ArticleSelicEconomia2026;