import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, BarChart2, Briefcase, AlertTriangle, Sprout, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const ArticlePIBBrasil2026 = () => {
  const articleData = {
    title: "PIB do Brasil: A Economia Vai Crescer ou Estagnar em 2026? Entenda os Setores-Chave",
    description: "O que o PIB tem a ver com seu emprego e salário? Entenda os setores que puxam a economia e os riscos para 2026.",
    author: "Seu Nome ou Nome do Site",
    date: "2026-01-25",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/pib-brasil-2026-setores-chave",
    images: [
      "https://images.unsplash.com/photo-1586448428670-33f1c28fce94", // Image 1 (Hero)
      "https://images.unsplash.com/photo-1655128868981-886edd447d21"  // Image 2 (Middle)
    ]
  };

  // Fetch related articles (excluding current)
  const relatedArticles = getArticlesByCategory('Economia')
    .filter(a => a.slug !== "pib-brasil-2026-setores-chave")
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>PIB do Brasil 2026: Crescimento ou Estagnação?</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="PIB Brasil 2026, economia brasileira, crescimento econômico, agronegócio, indústria, serviços, inflação" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PIB do Brasil: Vai Crescer ou Estagnar em 2026?" />
        <meta property="og:description" content="Análise clara dos motores (agronegócio, tech) e freios (indústria, juros) que vão moldar o PIB e seu bolso em 2026." />
        <meta property="og:image" content={articleData.images[0]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        <link rel="canonical" href={articleData.url} />
        
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
            alt="Mapa do Brasil com indicadores econômicos dos setores que movem o PIB."
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

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div 
                className="bg-white rounded-xl shadow-sm p-6 md:p-10"
                initial="initial"
                animate="animate"
                variants={fadeIn}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                  <Link to="/" className="hover:text-[#0066CC]">Home</Link>
                  <span>/</span>
                  <Link to="/blog" className="hover:text-[#0066CC]">Blog</Link>
                  <span>/</span>
                  <Link to="/blog/economia" className="hover:text-[#0066CC]">Economia</Link>
                  <span>/</span>
                  <span className="text-gray-900 truncate max-w-[200px]">PIB Brasil 2026...</span>
                </div>

                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">PIB do Brasil: A Economia Vai Crescer ou Estagnar em 2026? Entenda os Setores-Chave</h1>
                  
                  <p className="italic text-lg text-gray-600 mb-8">
                    Quando falamos de PIB, muitos imaginam gráficos complexos e engravatados na Faria Lima. Mas a realidade é muito mais próxima: o desempenho do PIB define se haverá vagas de emprego, se o seu salário terá aumento real ou se os preços no supermercado vão disparar. Em 2026, a economia brasileira caminha sobre uma linha tênue entre a expansão e a estagnação. Quem vai vencer essa queda de braço?
                  </p>

                  <hr className="my-8 border-gray-200" />

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1586448428670-33f1c28fce94" 
                      alt="Mapa do Brasil com indicadores econômicos dos setores que movem o PIB." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      Os setores que movem o PIB brasileiro em 2026.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Cenário Atual: Motores Ligados, Freio de Mão Puxado</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      O Produto Interno Bruto (PIB) é a soma de tudo que o Brasil produz. Se o PIB cresce, a riqueza do país aumenta. Para 2026, as projeções oscilam entre um crescimento moderado de 1,5% a 2,5%. Não é um "boom" econômico, mas também não é recessão.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      O grande desafio deste ano é o descompasso entre os setores. Enquanto alguns voam alto, outros lutam para sair do lugar. Entender essa dinâmica é crucial para planejar sua carreira e seus investimentos.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Os Setores que Estão Puxando a Carruagem</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <Sprout className="w-5 h-5 text-green-600" />
                      1. Agronegócio 4.0
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O campo continua sendo a âncora da economia brasileira. Em 2026, não é apenas a exportação de soja e carne que conta, mas a tecnologia embarcada. O "Agro Tech" tem gerado empregos qualificados no interior do país, impulsionando o setor de serviços nas cidades médias.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-blue-600" />
                      2. Tecnologia e Serviços Digitais
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O setor de serviços, que representa quase 70% do PIB, está sendo revitalizado pela transformação digital. Fintechs, saúde digital e educação a distância continuam crescendo acima da média nacional, criando oportunidades para profissionais qualificados.
                    </p>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1655128868981-886edd447d21" 
                      alt="Engrenagens representando os setores que impulsionam o PIB." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      A interação entre setores define a trajetória do PIB.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Os Freios e Riscos no Radar</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Nem tudo são flores. Existem travas importantes que impedem o Brasil de crescer num ritmo chinês (acima de 5%):
                    </p>
                    <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
                      <li><strong>Taxa de Juros (Selic):</strong> Embora em tendência de estabilização, os juros ainda altos encarecem o crédito. Isso afeta diretamente a construção civil e o consumo de bens duráveis (carros, eletrodomésticos).</li>
                      <li><strong>Endividamento das Famílias:</strong> Com o orçamento apertado, o brasileiro consome menos, o que segura o comércio varejista.</li>
                      <li><strong>Cenário Global:</strong> Uma possível desaceleração na China ou nos EUA pode reduzir a demanda por nossos produtos exportados.</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que Isso Muda na Sua Vida?</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Se o PIB cresce pouco, a disputa por vagas de emprego aumenta. As empresas ficam mais seletivas e os aumentos salariais tendem a repor apenas a inflação, sem ganhos reais expressivos.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Dica de Carreira:
                      </p>
                      <p className="text-blue-800 text-sm">
                        Em tempos de crescimento moderado, a estabilidade está nos setores que "puxam" o PIB. Migrar ou se especializar em áreas ligadas ao Agronegócio, Tecnologia ou Energia Renovável pode ser sua melhor estratégia defensiva.
                      </p>
                    </div>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O ano de 2026 será de ajustes. O Brasil não vai parar, mas também não vai disparar sem reformas estruturais. O crescimento virá de setores específicos, criando "ilhas de prosperidade" na economia.
                    </p>
                    <p className="font-bold text-gray-900 mb-6 text-lg">
                      Sua tarefa é identificar onde estão essas ilhas e posicionar suas finanças e sua carreira na direção do vento a favor.
                    </p>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Palavras-chave
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "PIB Brasil 2026",
                        "economia brasileira",
                        "agronegócio",
                        "setor de serviços",
                        "crescimento econômico",
                        "emprego"
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Resumo Econômico Semanal</h3>
                  <p className="text-gray-600 mb-4 text-sm">Não perca nenhum movimento do mercado. Receba nossa análise exclusiva toda segunda-feira.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Indicadores Chave</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">PIB (Proj. 2026)</span>
                        <span className="font-bold text-green-600">+2,1%</span>
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Inflação (IPCA)</span>
                        <span className="font-bold text-orange-500">3,9%</span>
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Selic (Meta)</span>
                        <span className="font-bold text-blue-600">9,5%</span>
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

export default ArticlePIBBrasil2026;