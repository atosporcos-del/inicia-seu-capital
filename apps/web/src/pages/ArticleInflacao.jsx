import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, Shield, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';
import { getArticlesByCategory } from '@/data/articles';
import ArticleCard from '@/components/ArticleCard';

const ArticleInflacao = () => {
  const articleData = {
    title: "Inflação: 4 Estratégias Práticas Para Seu Dinheiro Não Perder Valor",
    description: "Veja como se proteger da inflação e fazer seu dinheiro render mais. Tesouro IPCA+, FIIs e hábitos inteligentes para não perder poder de compra.",
    author: "Seu Site",
    date: "2026-01-26",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/estrategias-proteger-dinheiro-inflacao-2026",
    images: [
      "https://images.unsplash.com/photo-1677100700824-e8302ffcc1e6", // Hero
      "https://images.unsplash.com/photo-1638913971789-667874197280"  // Middle
    ]
  };

  // Fetch related articles (excluding current)
  const relatedArticles = getArticlesByCategory('Economia')
    .filter(a => a.slug !== "estrategias-proteger-dinheiro-inflacao-2026")
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Inflação: 4 Estratégias Para Proteger Seu Dinheiro</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="proteger dinheiro da inflação, IPCA+, investimentos reais, Tesouro Direto, FIIs" />
        <link rel="canonical" href={articleData.url} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Inflação: 4 Estratégias Práticas Para Seu Dinheiro Não Perder Valor" />
        <meta property="og:description" content="A inflação corrói o poder de compra. Aprenda como investir em títulos, imóveis e educação financeira para manter seu patrimônio protegido." />
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
            alt="Notas e moedas de real perdendo valor com o tempo, simbolizando a inflação."
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
                  
                  <p className="lead text-xl text-gray-600 mb-8">
                    Você já sentiu que o seu carrinho de supermercado está cada vez mais vazio, mesmo gastando o mesmo valor? Isso não é impressão sua. É a <strong>inflação</strong> agindo silenciosamente sobre o seu patrimônio.
                  </p>

                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Em 2026, com a economia global passando por ajustes e o cenário doméstico exigindo cautela, proteger o poder de compra não é mais uma opção para investidores sofisticados—é uma necessidade para qualquer brasileiro que queira manter sua qualidade de vida. Mas como fazer isso na prática?
                  </p>
                  
                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Abaixo, detalhamos 4 estratégias fundamentais para blindar seu dinheiro contra esse inimigo invisível.
                  </p>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      1. Conheça o Inimigo
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Antes de agir, é preciso entender. A inflação é o aumento generalizado dos preços. No Brasil, medimos isso principalmente pelo <strong>IPCA</strong>.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Imagine que você guardou R$ 100,00 debaixo do colchão hoje. Se a inflação for de 5% ao ano, daqui a 12 meses, esses mesmos R$ 100,00 comprarão o equivalente a R$ 95,00 de hoje. Parece pouco? Em 10 anos, seu dinheiro terá perdido quase 40% do valor.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                      <p className="font-bold text-red-900">A Regra de Ouro:</p>
                      <p className="text-red-800 italic">
                        "Se o seu dinheiro está rendendo menos que a inflação, você não está ganhando dinheiro. Você está perdendo dinheiro devagar."
                      </p>
                    </div>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-[#0066CC]" />
                      2. Renda Fixa Protetora (Tesouro IPCA+)
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Esta é a ferramenta mais direta e acessível para o pequeno investidor. O governo federal oferece títulos chamados <strong>Tesouro IPCA+</strong>.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      A mágica deste investimento é sua fórmula de rentabilidade:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 bg-gray-50 p-6 rounded-lg">
                      <li><strong>Parte Pós-fixada:</strong> A variação da inflação (IPCA). Se a inflação disparar para 10%, seu título rende esses 10%.</li>
                      <li><strong>Parte Prefixada:</strong> Uma taxa fixa de juros reais (ex: 6% ao ano).</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Isso garante que, aconteça o que acontecer com os preços no supermercado, seu dinheiro sempre manterá o poder de compra e ainda terá um ganho real acima disso.
                    </p>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1638913971789-667874197280" 
                      alt="Escudo dourado protegendo dinheiro da inflação." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      Investimentos indexados à inflação protegem o valor real do seu dinheiro.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      3. Ativos Reais (Imóveis e FIIs)
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Ativos reais são bens tangíveis que tendem a se valorizar junto com a economia. Imóveis são o exemplo clássico. Quando os preços de materiais de construção e mão de obra sobem (inflação), o preço dos imóveis novos também sobe, puxando os usados.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Além disso, os contratos de aluguel são reajustados anualmente por índices de inflação (geralmente IGP-M ou IPCA).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Não tem dinheiro para comprar um imóvel? Os <strong>Fundos Imobiliários (FIIs)</strong> permitem investir em grandes empreendimentos com menos de R$ 10,00 ou R$ 100,00, recebendo "aluguéis" (dividendos) mensais isentos de Imposto de Renda.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                      4. Ações Defensivas
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      No mercado de ações, existem empresas que conseguem repassar a inflação para seus clientes sem perder vendas. Geralmente são empresas de setores essenciais, como:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Energia Elétrica:</strong> As tarifas são reajustadas por contrato com base na inflação.</li>
                      <li><strong>Saneamento:</strong> Ninguém deixa de usar água porque a conta subiu.</li>
                      <li><strong>Seguradoras:</strong> Os prêmios (preços) dos seguros acompanham a valorização dos bens (carros, casas).</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Ter parte da carteira nessas empresas ajuda a criar um fluxo de dividendos que tende a acompanhar o custo de vida no longo prazo.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      A pior estratégia em tempos de inflação é a paralisia. Deixar o dinheiro parado na conta corrente ou "investido" na Poupança (que historicamente perde para a inflação em muitos períodos) é aceitar ficar mais pobre a cada dia.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Comece pelo básico: garanta que sua Reserva de Emergência esteja em um CDB de liquidez diária que renda 100% do CDI e comece a aportar parte do seu patrimônio de longo prazo no Tesouro IPCA+. Seu "eu do futuro" agradecerá.
                    </p>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "proteger dinheiro da inflação",
                        "IPCA+",
                        "investimentos reais",
                        "educação financeira"
                      ].map((tag, index) => (
                        <li key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-default">
                          {tag}
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Proteja seu Capital</h3>
                  <p className="text-gray-600 mb-4 text-sm">Inscreva-se para receber alertas sobre a inflação e oportunidades no Tesouro Direto.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Índices de Inflação (Dez/2025 - Jan/2026)</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">IPCA (12 meses)</span>
                        <span className="font-bold text-red-600">4,26%</span> {/* Updated */}
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">IGP-M (12 meses)</span>
                        <span className="font-bold text-orange-600">-0,91%</span> {/* Updated */}
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">INPC (12 meses)</span>
                        <span className="font-bold text-blue-600">4,26%</span> {/* Updated */}
                     </div>
                     <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-600 text-sm">Meta de Inflação</span>
                        <span className="font-bold text-green-600">3,00%</span>
                     </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    *Dados de referência: IPCA e INPC acumulado fechado em dezembro de 2025. IGP-M acumulado disponível até janeiro de 2026. Meta de inflação definida pelo CMN para 2025 e 2026.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleInflacao;