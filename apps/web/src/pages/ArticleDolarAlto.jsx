import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, DollarSign, ShoppingCart, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const ArticleDolarAlto = () => {
  const articleData = {
    title: "Dólar Alto: Aumenta o Pão, a Gasolina e o Seu Salário? Entenda o Jogo",
    description: "Descubra como o dólar alto afeta o preço do pão, da gasolina e até o seu salário — e quem ganha ou perde com isso.",
    author: "Seu Site",
    date: "2026-01-25",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigo/dolar-alto-precos-salario-economia",
    images: [
      "https://images.unsplash.com/photo-1622156522422-ab9355add7a1", // Image 1
      "https://images.unsplash.com/photo-1674027392842-29f8354e236c"  // Image 2
    ]
  };

  // Fetch related articles (excluding current)
  const relatedArticles = getArticlesByCategory('Economia')
    .filter(a => a.slug !== "dolar-alto-precos-salario-economia")
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Dólar Alto: Como Ele Aumenta o Pão, a Gasolina e o Seu Salário</title>
        <meta name="description" content={articleData.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dólar Alto: Entenda Como Ele Afeta Seu Bolso" />
        <meta property="og:description" content="O dólar influencia tudo: o pão, a gasolina, o salário e os empregos. Entenda por que ele sobe e o que isso muda na sua vida." />
        <meta property="og:image" content={articleData.images[0]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        <link rel="canonical" href={articleData.url} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Dólar Alto: Aumenta o Pão, a Gasolina e o Seu Salário? Entenda o Jogo",
            "description": articleData.description,
            "image": articleData.images,
            "author": {
              "@type": "Person",
              "name": articleData.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Seu Site",
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
            alt="Notas de dólar e real sobre gráfico de câmbio."
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
                  <span className="text-gray-900 truncate max-w-[200px]">Dólar Alto...</span>
                </div>

                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">Dólar Alto: Aumenta o Pão, a Gasolina e o Seu Salário? Entenda o Jogo</h1>
                  
                  <p className="italic text-lg text-gray-600 mb-8">
                    Você acorda, toma seu café e vai trabalhar. Parece um dia normal, mas enquanto você dormia, o dólar subiu. O que isso muda na sua vida? Spoiler: quase tudo, do pãozinho da padaria ao valor real do seu salário no final do mês.
                  </p>

                  <hr className="my-8 border-gray-200" />

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1622156522422-ab9355add7a1" 
                      alt="Notas de dólar e real sobre gráfico de câmbio." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      A cotação do dólar afeta diretamente o preço de produtos e serviços no Brasil.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Dólar e o Termômetro</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      O câmbio (preço do dólar em reais) é como um termômetro da economia. Quando o dólar sobe, geralmente significa que os investidores estão com medo (aversão ao risco) ou que a economia americana está pagando juros melhores que a nossa.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Para o brasileiro comum, porém, o dólar não é apenas um número na TV. Ele é um <strong>preço fundamental</strong> que define o custo de vida. Isso acontece porque o Brasil, apesar de ser um gigante agrícola, importa muitos insumos básicos.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Efeito Dominó</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Quando o dólar dispara, ocorre um efeito cascata imediato:
                    </p>
                    <ul className="list-disc pl-5 space-y-3 mb-6 text-gray-700">
                      <li><strong>Importação mais cara:</strong> Máquinas, fertilizantes e peças eletrônicas compradas lá fora ficam mais caras em reais.</li>
                      <li><strong>Repasse de custo:</strong> A indústria e o comércio não absorvem esse prejuízo sozinhos; eles repassam para o preço final do produto.</li>
                      <li><strong>Inflação:</strong> Com produtos mais caros, o seu dinheiro compra menos coisas. Isso é inflação gerada pelo câmbio.</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Exemplos que Doem no Bolso</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-orange-600" />
                      1. O Pão Francês
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O Brasil não produz todo o trigo que consome; importamos grande parte da Argentina e da América do Norte. O trigo é cotado em dólar. Dólar sobe, a farinha sobe, o pãozinho fica mais caro.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      2. A Gasolina
                    </h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      A política de preços da Petrobras considera o mercado internacional. O petróleo é negociado em dólar. Mesmo que o petróleo lá fora não suba, se o real desvalorizar frente ao dólar, a gasolina na bomba aqui no Brasil tende a aumentar.
                    </p>

                    <figure className="my-8">
                      <img 
                        src="https://images.unsplash.com/photo-1674027392842-29f8354e236c" 
                        alt="Ilustração mostrando o impacto do dólar alto nos preços de consumo." 
                        className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                      />
                      <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                        Do pão à gasolina, o dólar caro pesa no orçamento doméstico.
                      </figcaption>
                    </figure>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3. Eletrônicos e Serviços</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Celulares, computadores e até a assinatura de alguns serviços de streaming podem sofrer reajustes baseados na moeda americana.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Outro Lado da Moeda</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Nem todo mundo chora com o dólar alto. Os <strong>exportadores</strong> (agronegócio, mineradoras, indústria de celulose) ganham mais. Eles vendem seus produtos em dólar e convertem para reais, obtendo uma receita maior.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Isso é bom para a balança comercial do país e gera empregos nesses setores específicos, mas para o consumidor urbano, o impacto negativo costuma ser mais perceptível no curto prazo.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">E o Meu Salário?</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Aqui está o problema silencioso: <strong>seu salário é em reais</strong>. Se o custo de vida sobe por causa do dólar e seu salário não é reajustado na mesma proporção, você ficou, na prática, mais pobre.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                      <p className="font-semibold text-yellow-900 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Atenção ao Poder de Compra:
                      </p>
                      <p className="text-yellow-800 text-sm">
                        O dólar alto corrói o poder de compra. R$ 100,00 hoje compram menos do que compravam antes da alta da moeda americana.
                      </p>
                    </div>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O dólar alto não é apenas uma notícia de jornal; é um fator que altera a dinâmica da sua despensa e do seu tanque de combustível. Embora beneficie exportadores, para a maioria da população, ele exige um ajuste no orçamento.
                    </p>
                    <p className="font-bold text-gray-900 mb-6 text-lg">
                      Entender essa dinâmica ajuda você a antecipar aumentos de preços e a planejar melhor suas finanças em tempos de volatilidade cambial.
                    </p>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Palavras-chave
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "dólar alto",
                        "câmbio",
                        "inflação",
                        "poder de compra",
                        "economia doméstica",
                        "preço da gasolina",
                        "exportação"
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Domine o Mercado</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba análises diárias sobre o dólar e seus investimentos diretamente no seu e-mail.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Tópicos Populares</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Dólar', 'Inflação', 'Commodities', 'Salário', 'Investimentos'].map(topic => (
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

export default ArticleDolarAlto;