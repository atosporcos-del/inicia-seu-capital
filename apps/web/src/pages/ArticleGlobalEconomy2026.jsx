import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';

const ArticleGlobalEconomy2026 = () => {
  const articleData = {
    title: "2026: O Ano em que o Mundo Bate à Porta do Brasil. Você Está Preparado?",
    description: "A economia global em 2026 será um jogo de risco e oportunidade. Veja como decisões globais podem afetar seu emprego, investimentos e consumo.",
    author: "Seu Nome ou Nome do Site",
    date: "2026-01-25",
    readTime: "6 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/economia-global-2026-brasil-riscos-oportunidades",
    images: [
      "https://images.unsplash.com/photo-1575064650962-a3d1a34a8c3e",
      "https://images.unsplash.com/photo-1674027392842-29f8354e236c"
    ]
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>2026: O Mundo Bate à Porta do Brasil</title>
        <meta name="description" content={articleData.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content="2026: O Ano em que o Mundo Bate à Porta do Brasil" />
        <meta property="og:description" content="Descubra os riscos e oportunidades que o cenário global de 2026 traz para o Brasil — e como eles podem afetar seu bolso e sua carreira." />
        <meta property="og:image" content={articleData.images[0]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        <meta name="keywords" content="economia global 2026, riscos geopolíticos, commodities, transição energética, exportações brasileiras, crise global, investimentos internacionais" />
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
            alt="Conexões globais, mapa mundial iluminado e gráficos de mercado financeiro internacional."
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
                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">2026: O Ano em que o Mundo Bate à Porta do Brasil. Você Está Preparado?</h1>
                  
                  <p className="italic text-lg text-gray-600 mb-8">
                    Nenhum país é uma ilha, e o Brasil de 2026 sente isso na pele. Do preço da gasolina ao valor da soja, o que acontece lá fora define o que sobra na sua carteira. Entenda os riscos (e as chances de ouro) desse cenário global.
                  </p>

                  <hr className="my-8 border-gray-200" />

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1575064650962-a3d1a34a8c3e" 
                      alt="Conexões globais, mapa mundial iluminado e gráficos de mercado financeiro internacional." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      As fronteiras econômicas estão cada vez mais invisíveis: um choque na Ásia balança o supermercado no Brasil.
                    </figcaption>
                  </figure>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Um Mundo em Transformação Acelerada</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Em 2026, a economia global não está apenas crescendo ou encolhendo; ela está <strong>mudando de forma</strong>. A velha ordem industrial está dando lugar definitivo a uma economia digital e verde, e essa transição não é suave. Ela gera atritos, guerras comerciais e volatilidade.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Para o Brasil, historicamente um exportador de matérias-primas, esse momento é crucial. O mundo ainda precisa do que temos (alimentos, minérios, energia), mas as regras do jogo mudaram. Quem não entender essas novas dinâmicas corre o risco de ficar para trás — seja um país, uma empresa ou você, investidor individual.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Os Riscos que Vêm de Fora</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O cenário externo não é um mar de rosas. Existem nuvens carregadas no horizonte que podem trazer tempestades para a economia brasileira.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">1. A Desaceleração dos Gigantes</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      China e Estados Unidos, os maiores parceiros comerciais do Brasil, enfrentam seus próprios desafios. Se a China crescer menos, ela compra menos minério e soja do Brasil.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Impacto Direto:</strong> Menor entrada de dólares no Brasil, o que pode desvalorizar o Real e aumentar a inflação interna.</li>
                      <li><strong>No seu bolso:</strong> Produtos importados e combustíveis podem ficar mais caros se o dólar disparar.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2. Conflitos Geopolíticos</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Tensões no Oriente Médio ou na Europa não são apenas manchetes de jornal; elas afetam o preço do petróleo e dos fertilizantes. Um barril de petróleo mais caro significa gasolina mais cara na bomba e frete mais alto, encarecendo tudo o que você compra no supermercado.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3. Juros Altos nos Países Ricos</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Enquanto os EUA e a Europa mantiverem juros elevados para controlar suas próprias inflações, o dinheiro tende a sair de países emergentes como o Brasil e ir para lá (onde é considerado mais seguro). Isso obriga o Banco Central brasileiro a manter nossa Selic alta para evitar uma fuga de capitais, o que encarece o crédito para você aqui.
                    </p>

                    <figure className="my-8">
                      <img 
                        src="https://images.unsplash.com/photo-1674027392842-29f8354e236c" 
                        alt="Porto de contêineres movimentado simbolizando comércio exterior e exportações." 
                        className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                      />
                      <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                        Exportações continuam sendo o motor, mas o destino e o tipo de produto estão mudando.
                      </figcaption>
                    </figure>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">As Oportunidades de Ouro para o Brasil</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Mas nem tudo é pessimismo. Pelo contrário, o Brasil tem cartas na manga que poucos países possuem em 2026.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">A Potência Verde</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O mundo está desesperado por energia limpa e sustentabilidade. O Brasil já tem uma das matrizes energéticas mais limpas do planeta.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Investimentos:</strong> Bilhões de dólares em fundos internacionais procuram lugares "verdes" para investir. O Brasil é o destino natural.</li>
                      <li><strong>Carreira:</strong> Setores ligados a ESG, energia renovável e créditos de carbono vão explodir de contratar.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Segurança Alimentar</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      A população mundial continua crescendo e precisa comer. O agronegócio brasileiro, cada vez mais tecnológico, é fundamental para o mundo. Isso garante que, mesmo em crises, o setor continue trazendo riqueza para o interior do país.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Nearshoring (Trazer a produção para perto)</h3>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Muitas empresas globais querem depender menos da Ásia e produzir mais perto dos grandes mercados consumidores do Ocidente. O Brasil pode se beneficiar recebendo fábricas e centros de distribuição que antes iriam para o outro lado do mundo.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão — Como se Posicionar?</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O ano de 2026 será volátil. O sobe e desce das bolsas mundiais vai continuar testando os nervos dos investidores.
                    </p>
                    
                    <p className="mb-4 text-gray-700 font-medium">Seu plano de ação deve incluir:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                      <li><strong>Diversificação Internacional:</strong> Não deixe todo o seu dinheiro dependendo apenas da economia brasileira. Ter parte dos investimentos atrelada ao dólar ou a índices globais (via ETFs ou BDRs) é uma proteção inteligente.</li>
                      <li><strong>Fique de olho no Câmbio:</strong> Se você planeja viajar ou tem custos em dólar, aproveite janelas de baixa para comprar a moeda aos poucos.</li>
                      <li><strong>Carreira Global:</strong> Aprender inglês e habilidades digitais nunca foi tão valioso. O trabalho remoto permite que você more no Brasil e ganhe em moeda forte.</li>
                    </ul>

                    <p className="font-bold text-gray-900 mb-6 text-lg">
                      O mundo está batendo à nossa porta. Podemos abrir e aproveitar as oportunidades ou ignorar e sofrer os impactos. A escolha de se preparar é sua.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <div className="mt-10 pt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Palavras-chave
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "economia global 2026",
                        "riscos geopolíticos",
                        "commodities",
                        "transição energética",
                        "exportações brasileiras",
                        "crise global",
                        "investimentos internacionais"
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
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Gostou da análise?</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba insights semanais sobre como a economia global impacta o Brasil e seu bolso.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Mais sobre Economia</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/blog/economia" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#0066CC] transition-colors group">
                      <span className="font-medium">Economia Geral</span>
                      <Globe className="w-4 h-4 text-gray-400 group-hover:text-[#0066CC]" />
                    </Link>
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

export default ArticleGlobalEconomy2026;