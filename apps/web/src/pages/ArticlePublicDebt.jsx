import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, BarChart3, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const ArticlePublicDebt = () => {
  const articleData = {
    title: "Dívida Pública: O que o 'déficit do governo' tem a ver com seu financiamento e seus investimentos",
    description: "Saiba como o déficit público afeta seus empréstimos, investimentos e a inflação — e por que acompanhar a dívida é cuidar da economia.",
    author: "Seu Site",
    date: "2026-01-25",
    readTime: "7 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/divida-publica-deficit-governo-financas-pessoais",
    images: [
      "https://images.unsplash.com/photo-1666206499838-3fcff057cc69", // Image 1
      "https://images.unsplash.com/photo-1666206499838-3fcff057cc69"  // Image 2 (Requested same URL)
    ]
  };

  // Fetch related articles (excluding current)
  const relatedArticles = getArticlesByCategory('Economia')
    .filter(a => a.slug !== "divida-publica-deficit-governo-financas-pessoais")
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Dívida Pública: Entenda o Déficit e o Impacto no Seu Bolso</title>
        <meta name="description" content={articleData.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dívida Pública: O que o Déficit do Governo Tem a Ver com Você" />
        <meta property="og:description" content="Descubra, de forma simples, como a dívida pública afeta seus empréstimos, investimentos e o custo de vida." />
        <meta property="og:image" content={articleData.images[0]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        <meta name="keywords" content="dívida pública, déficit fiscal, tesouro direto, inflação, taxa de juros, economia brasileira, contas públicas" />
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
            alt="Notas de real e gráficos de dívida pública representando o Tesouro Nacional."
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
                  <span className="text-gray-900 truncate max-w-[200px]">Dívida Pública...</span>
                </div>

                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">Dívida Pública: O que o 'déficit do governo' tem a ver com seu financiamento e seus investimentos</h1>
                  
                  <p className="italic text-lg text-gray-600 mb-8">
                    Sempre que você liga o jornal, ouve falar de "rombo nas contas públicas", "superávit primário" ou "teto de gastos". Parece uma conversa chata de economista em Brasília, certo? Errado. O tamanho da dívida pública define se você vai conseguir financiar sua casa, quanto vai pagar no cartão de crédito e se o seu salário vai valer alguma coisa no mês que vem.
                  </p>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Que É a Dívida Pública e Por Que Ela Existe</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Imagine que você quer reformar sua casa, mas não tem todo o dinheiro na conta. Você vai ao banco e pega um empréstimo, comprometendo-se a pagar no futuro com juros.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Com o governo, é parecido. O Estado arrecada dinheiro através de impostos, mas muitas vezes gasta mais do que arrecada para financiar saúde, educação, segurança e infraestrutura. Quando essa conta não fecha (o famoso <strong>déficit</strong>), o governo precisa pedir dinheiro emprestado para cobrir o rombo e continuar funcionando.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900">Nota Importante:</p>
                      <p className="text-blue-800 text-sm">
                        Ter dívida não é, por si só, algo ruim. A maioria dos países do mundo opera com dívida. O problema surge quando a dívida cresce descontroladamente em relação ao que o país produz (PIB), gerando desconfiança de que ela não será paga.
                      </p>
                    </div>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1666206499838-3fcff057cc69" 
                      alt="Notas de real e gráficos de dívida pública representando o Tesouro Nacional." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      A dívida pública financia o funcionamento do governo e impacta o bolso do cidadão.
                    </figcaption>
                  </figure>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Como o Governo 'Pede Emprestado'</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O governo não vai ao banco pedir empréstimo como eu e você. Ele emite <strong>Títulos Públicos</strong> através do Tesouro Nacional. Funciona assim:
                    </p>
                    <ol className="list-decimal pl-5 space-y-4 mb-6 text-gray-700">
                      <li><strong>Emissão:</strong> O governo cria papéis (títulos) dizendo: "Quem me emprestar R$ 1.000,00 hoje, recebe R$ 1.000,00 + juros daqui a 5 anos".</li>
                      <li><strong>Venda:</strong> Grandes bancos, fundos de investimento e pessoas físicas (via Tesouro Direto) compram esses papéis.</li>
                      <li><strong>Captação:</strong> O dinheiro entra no caixa do governo para pagar despesas imediatas.</li>
                      <li><strong>Pagamento:</strong> No futuro, o governo devolve o dinheiro com juros aos investidores.</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed">
                      Basicamente, quando você investe no <strong>Tesouro Selic</strong> ou <strong>Tesouro IPCA+</strong>, você está financiando a dívida pública brasileira e lucrando com os juros que o governo paga.
                    </p>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1666206499838-3fcff057cc69" 
                      alt="Conceito visual mostrando a circulação da dívida pública entre governo e investidores." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      A dívida pública é como um cartão de crédito coletivo que precisa de controle.
                    </figcaption>
                  </figure>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Por Que Você Deve Se Importar</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Aqui está a conexão direta com o seu bolso. A saúde da dívida pública é o termômetro do risco do país.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-600" />
                      1. Juros Altos (Selic)
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Se o governo deve muito e gasta mal, os investidores sentem medo de levar um calote. Para convencer alguém a emprestar dinheiro para um mau pagador, é preciso oferecer juros muito altos.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      <strong>Consequência:</strong> A taxa Selic sobe. Isso encarece o financiamento do seu apartamento, os juros do cartão de crédito e o empréstimo para empresas (gerando desemprego).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                      2. Inflação
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Se o governo não conseguir quem lhe empreste dinheiro, ele pode ser tentado a "imprimir dinheiro" para pagar as contas. Mais dinheiro circulando sem aumento de produtos gera inflação.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      <strong>Consequência:</strong> Seu dinheiro vale menos no supermercado. O preço da carne, do arroz e da gasolina dispara.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                      3. Impostos
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Para pagar uma dívida crescente, o governo precisa de mais receita.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Consequência:</strong> Aumento de carga tributária ou criação de novos impostos, sobrando menos salário líquido para você no fim do mês.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      A dívida pública não é apenas um número em um gráfico; é a estrutura sobre a qual toda a economia se apoia. Um país com contas em ordem consegue juros baixos, atrai investimentos e gera empregos.
                    </p>
                    
                    <p className="mb-4 text-gray-700 font-medium">Como se proteger?</p>
                    <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                      <li><strong>Diversifique:</strong> Não tenha todo o seu patrimônio atrelado ao risco Brasil.</li>
                      <li><strong>Aproveite os Juros:</strong> Se a dívida faz os juros subirem, invista em Renda Fixa para proteger seu capital.</li>
                      <li><strong>Monitore:</strong> Acompanhe as notícias fiscais. Elas são o melhor indicador antecipado de crises.</li>
                    </ul>

                    <p className="font-bold text-gray-900 mb-6 text-lg">
                      Entender a dívida pública é o primeiro passo para não ser pego de surpresa quando a economia mudar de direção.
                    </p>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Palavras-chave
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "dívida pública",
                        "déficit fiscal",
                        "tesouro direto",
                        "inflação",
                        "taxa de juros",
                        "economia brasileira",
                        "contas públicas"
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Domine a Economia</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba análises descomplicadas sobre o que afeta seu dinheiro diretamente no e-mail.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Tópicos Populares</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Inflação', 'Selic', 'PIB', 'Dólar', 'Investimentos'].map(topic => (
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

export default ArticlePublicDebt;