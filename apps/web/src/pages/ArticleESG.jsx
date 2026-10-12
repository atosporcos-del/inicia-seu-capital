import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';

const ArticleESG = () => {
  const articleData = {
    title: "O Que é ESG e Por Que Ele Está Mudando a Economia",
    description: "Entenda como o ESG está transformando a economia e por que empresas sustentáveis são o futuro dos investimentos.",
    author: "Diego Apolinário",
    date: "2026-01-25",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/o-que-e-esg-e-por-que-ele-esta-mudando-a-economia",
    image: "https://images.unsplash.com/photo-1506092198436-9c26f62f0df9"
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>{articleData.title} - Inicia Seu Capital</title>
        <meta name="description" content={articleData.description} />
        <meta property="og:title" content="ESG: A Revolução que Está Redefinindo a Economia" />
        <meta property="og:description" content="Descubra como os critérios ESG estão moldando o futuro das empresas e dos investimentos sustentáveis." />
        <meta property="og:image" content={articleData.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        <link rel="canonical" href={articleData.url} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": articleData.title,
            "description": articleData.description,
            "image": [
              articleData.image,
              "https://images.unsplash.com/photo-1693730333248-6e0f79b705f2"
            ],
            "author": {
              "@type": "Person",
              "name": articleData.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Horizons Brasil",
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
            src={articleData.image} 
            alt="Empresas modernas conectadas por energia verde, simbolizando sustentabilidade."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
            <div className="max-w-4xl mx-auto text-white">
              <CategoryBadge category={articleData.category} className="mb-4" />
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{articleData.title}</h1>
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
                <Link to="/blog" className="inline-flex items-center gap-2 text-[#0066CC] hover:text-[#0052a3] mb-8 font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para todos os artigos
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#0066CC]">
                  <p className="italic text-lg text-gray-600 border-l-4 border-[#0066CC] pl-4 mb-8">
                    Você provavelmente já ouviu falar em ESG. A sigla está em todos os lugares: relatórios de empresas, notícias de mercado financeiro e até em propagandas de TV. Mas afinal, o que isso significa na prática? Mais importante: por que investidores e consumidores estão usando essas três letras para decidir onde colocar seu dinheiro?
                  </p>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1506092198436-9c26f62f0df9" 
                      alt="Empresas modernas conectadas por energia verde, simbolizando sustentabilidade." 
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                    <figcaption className="text-center text-sm text-gray-500 mt-2">O ESG conecta lucro e responsabilidade ambiental.</figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2>O Novo 'Teste de Saúde' das Empresas</h2>
                    <h3>O que significam as letras?</h3>
                    <p>ESG vem do inglês <em>Environmental, Social and Governance</em> (Ambiental, Social e Governança). Em resumo, é um conjunto de critérios que mede se uma empresa é saudável, ética e sustentável no longo prazo.</p>
                    <ul className="space-y-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-md">E (Environmental)</span>
                        <span><strong>Ambiental:</strong> Como a empresa impacta a natureza? Ela polui? Usa energia limpa? Cuida dos resíduos que produz?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-md">S (Social)</span>
                        <span><strong>Social:</strong> Como a empresa trata as pessoas? Seus funcionários são valorizados? Ela respeita a diversidade e contribui para a comunidade onde atua?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-gray-100 text-gray-800 font-bold px-3 py-1 rounded-md">G (Governance)</span>
                        <span><strong>Governança:</strong> A gestão é transparente? Existe combate à corrupção? Os acionistas são respeitados e as contas são claras?</span>
                      </li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2>O Preço Alto de Ignorar a Sustentabilidade</h2>
                    <p>Antigamente, sustentabilidade era vista como "filantropia". Hoje, é vista como <strong>gestão de risco</strong>. Empresas que ignoram o ESG enfrentam três perigos mortais:</p>
                    <div className="grid md:grid-cols-3 gap-6 my-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-bold text-red-800 mb-2">1. Risco Físico</h4>
                        <p className="text-sm">Negócios dependentes de recursos naturais (água, solo) podem colapsar com mudanças climáticas.</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-bold text-orange-800 mb-2">2. Risco Regulatório</h4>
                        <p className="text-sm">Governos estão criando leis mais rígidas. Quem polui vai pagar multas pesadas ou perder licenças.</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-bold text-yellow-800 mb-2">3. Risco de Reputação</h4>
                        <p className="text-sm">Um escândalo ambiental ou de trabalho escravo pode destruir a marca de uma empresa em dias.</p>
                      </div>
                    </div>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2>Para Onde Está Indo o Dinheiro? A Resposta é Verde</h2>
                    <p>Grandes fundos de investimento globais já avisaram: não colocarão dinheiro em empresas que não tenham metas claras de ESG. O capital está migrando.</p>
                    
                    <figure className="my-8">
                      <img 
                        src="https://images.unsplash.com/photo-1693730333248-6e0f79b705f2" 
                        alt="Investidores analisando dados de energia limpa e sustentabilidade." 
                        className="w-full h-auto rounded-xl shadow-lg"
                      />
                      <figcaption className="text-center text-sm text-gray-500 mt-2">O capital global está migrando para empresas sustentáveis.</figcaption>
                    </figure>

                    <p>Setores que estão crescendo com essa onda:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Energia Renovável:</strong> Solar, eólica e hidrogênio verde.</li>
                      <li><strong>Agronegócio Sustentável:</strong> Produção de alimentos com baixa emissão de carbono.</li>
                      <li><strong>Construção Verde:</strong> Prédios eficientes e materiais ecológicos.</li>
                      <li><strong>Tecnologia Limpa (Cleantech):</strong> Softwares e hardwares que ajudam a reduzir desperdícios.</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2>Conclusão — ESG Não é Tendência, é Transição</h2>
                    <p>Estamos vivendo uma mudança estrutural no capitalismo. O lucro a qualquer custo ficou no passado.</p>
                    
                    <h3>Impacto na Sociedade</h3>
                    <ul className="space-y-2 list-none pl-0 mt-4">
                      <li>✅ <strong>Consumidores:</strong> Preferem marcas com propósito.</li>
                      <li>✅ <strong>Profissionais:</strong> Querem trabalhar em empresas éticas.</li>
                      <li>✅ <strong>Investidores:</strong> Buscam segurança e retorno sustentável.</li>
                    </ul>

                    <p className="font-bold text-xl mt-8 text-[#0066CC]">
                      No fim, ser sustentável é ser economicamente inteligente. A economia verde já começou — e o mercado está escolhendo os vencedores.
                    </p>
                  </motion.section>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-500 uppercase mb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Palavras-chave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["ESG", "Economia Verde", "Investimentos Sustentáveis", "Governança Corporativa", "Sustentabilidade", "Mercado Financeiro"].map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <SocialShareButtons title={articleData.title} />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Gostou deste artigo?</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba nossos melhores conteúdos sobre ESG e economia diretamente no seu e-mail.</p>
                  <NewsletterForm />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4">Mais sobre Economia</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/blog/economia" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#0066CC] transition-colors">
                      <span className="font-medium">Economia Geral</span>
                      <TrendingUp className="w-4 h-4 opacity-50" />
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

export default ArticleESG;