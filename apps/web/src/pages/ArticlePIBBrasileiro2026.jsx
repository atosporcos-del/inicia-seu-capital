import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, BarChart, ShoppingBag, Sprout, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const ArticlePIBBrasileiro2026 = () => {
  const articleData = {
    title: "PIB Brasileiro: A Economia Vai Crescer em 2026? Entenda os Motores e os Freios",
    description: "O que o PIB tem a ver com sua vida? Descubra se o crescimento da economia em 2026 vai gerar empregos, aumentar salários e reduzir preços.",
    author: "Seu Nome ou Nome do Site",
    date: "2026-01-25",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/pib-brasileiro-economia-2026-motores-e-freios",
    images: [
      "https://images.unsplash.com/photo-1575064650962-a3d1a34a8c3e", // Image 1 (Hero)
      "https://images.unsplash.com/photo-1655128868981-886edd447d21"  // Image 2 (Middle)
    ]
  };

  // Fetch related articles (excluding current)
  const relatedArticles = getArticlesByCategory('Economia')
    .filter(a => a.slug !== "pib-brasileiro-economia-2026-motores-e-freios")
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>PIB Brasileiro 2026: Motores e Freios da Economia</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="PIB brasileiro, crescimento econômico, economia 2026, agronegócio, indústria, serviços, energia renovável, inflação, juros" />
        
        {/* Open Graph */}
        <meta property="og:title" content="PIB Brasileiro 2026: Entenda o Crescimento e os Desafios" />
        <meta property="og:description" content="Saiba o que está impulsionando e o que está travando o crescimento do Brasil em 2026 — e como isso impacta empregos e salários." />
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
            alt="Mapa do Brasil com gráficos econômicos representando o crescimento do PIB."
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
                  <span className="text-gray-900 truncate max-w-[200px]">PIB Brasileiro 2026...</span>
                </div>

                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">PIB Brasileiro: A Economia Vai Crescer em 2026? Entenda os Motores e os Freios</h1>
                  
                  <p className="italic text-lg text-gray-600 mb-8">
                    Quando o Jornal Nacional anuncia que o "PIB subiu" ou "caiu", isso parece algo distante da sua conta bancária. Mas a verdade é crua: o PIB é o termômetro que define se o seu chefe vai te dar um aumento, se o seu vizinho vai conseguir emprego ou se o preço da carne vai estabilizar.
                  </p>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1575064650962-a3d1a34a8c3e" 
                      alt="Mapa do Brasil com gráficos econômicos representando o crescimento do PIB." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      O PIB é o retrato da produção de riqueza e das oportunidades do país.
                    </figcaption>
                  </figure>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que É o PIB e Por Que Ele Importa</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      O <strong>Produto Interno Bruto (PIB)</strong> é a soma de todos os bens e serviços finais produzidos no país. Pense nele como o "faturamento" do Brasil. Se o PIB cresce, significa que empresas estão produzindo mais, vendendo mais e, consequentemente, contratando mais.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Em 2026, o Brasil enfrenta um cenário de transição. Não estamos em recessão profunda, mas também não vivemos um "milagre econômico". Estamos caminhando sobre uma linha tênue.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que Está Puxando (e Segurando) o Crescimento</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <Sprout className="w-5 h-5 text-green-600" />
                      1. O Motor: Agronegócio e Energia Verde
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O campo continua salvando a lavoura. A safra recorde de 2025/2026 e a alta demanda global por alimentos mantêm o dinheiro entrando. Além disso, o Brasil se tornou um canteiro de obras para a transição energética (eólica, solar e hidrogênio verde), atraindo bilhões em investimentos estrangeiros.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      2. O Freio: Juros e Dívida
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Para controlar a inflação, o Banco Central manteve a taxa Selic em patamares restritivos por um bom tempo. Juro alto é veneno para o consumo: fica caro financiar carro, casa e geladeira. Isso esfria o comércio e a indústria.
                    </p>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1655128868981-886edd447d21" 
                      alt="Setores do agronegócio, indústria, serviços e tecnologia impulsionando o PIB." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      Os diferentes setores da economia movem juntos o crescimento do PIB.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 — O Ano da Estabilização ou da Surpresa?</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Analistas do mercado (Boletim Focus) apontam para um crescimento moderado. O que isso significa para você?
                    </p>
                    <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
                      <li><strong>Emprego:</strong> O desemprego deve cair lentamente, mas a maioria das vagas será no setor de serviços (restaurantes, turismo, tecnologia) e menos na indústria pesada.</li>
                      <li><strong>Salário:</strong> Com a inflação controlada, o ganho real (acima da inflação) do salário mínimo e dos dissídios tende a aparecer, aumentando levemente o poder de compra.</li>
                      <li><strong>Investimentos:</strong> A Bolsa de Valores (B3) costuma antecipar a melhora do PIB. Se o cenário externo ajudar (EUA baixando juros), podemos ver um fluxo de capital estrangeiro entrando no Brasil.</li>
                    </ul>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O PIB de 2026 não será explosivo, mas promete ser resiliente. Para quem investe ou planeja a carreira, o segredo é olhar para onde o dinheiro está indo: agronegócio, tecnologia e sustentabilidade.
                    </p>
                    <p className="font-bold text-gray-900 mb-6 text-lg">
                      Torcer pelo PIB é torcer pelo coletivo. Quando o bolo cresce, a chance de você pegar uma fatia maior aumenta consideravelmente.
                    </p>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Palavras-chave
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "PIB brasileiro",
                        "crescimento econômico",
                        "economia 2026",
                        "agronegócio",
                        "indústria",
                        "serviços",
                        "energia renovável"
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Economia no seu E-mail</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba as projeções do PIB e dicas de investimento antes de todo mundo.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Tópicos Populares</h3>
                  <div className="flex flex-wrap gap-2">
                    {['PIB', 'Inflação', 'Selic', 'Dólar', 'Agronegócio'].map(topic => (
                      <span key={topic} className="bg-gray-50 text-gray-600 px-3 py-1 rounded-md text-sm border border-gray-100">
                        {topic}
                      </span>
                    ))}
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

export default ArticlePIBBrasileiro2026;