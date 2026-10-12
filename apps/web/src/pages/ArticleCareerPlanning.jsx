import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, Map, Target, Compass, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';

const ArticleCareerPlanning = () => {
  const articleData = {
    title: "Planejamento de Carreira: O Mapa Para Crescer Sem Perder o Rumo",
    metaTitle: "Planejamento de Carreira: O Mapa Para Crescer",
    description: "Sentindo-se estagnado? Veja como planejar sua carreira com metas SMART e um plano prático para crescer sem perder o rumo.",
    author: "Seu Site",
    date: "2026-01-26",
    readTime: "5 min",
    category: "Carreira", // Internal category key
    displayCategory: "Dicas de Carreira", // Display text
    url: "https://iniciaseucapital.com.br/artigo/planejamento-de-carreira-mapa-para-crescer",
    images: [
      "https://images.unsplash.com/photo-1674027392842-29f8354e236c", // Hero
      "https://images.unsplash.com/photo-1629624978902-bc7665d6cb0a"  // Mid-article
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
        <title>{articleData.metaTitle}</title>
        <meta name="description" content={articleData.description} />
        <meta name="keywords" content="planejamento de carreira, crescimento profissional, plano de carreira, metas SMART, desenvolvimento profissional, mercado de trabalho 2026" />
        <link rel="canonical" href={articleData.url} />
        
        {/* Open Graph */}
        <meta property="og:title" content={articleData.metaTitle} />
        <meta property="og:description" content={articleData.description} />
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
            alt="Profissional planejando o próximo passo da carreira diante de um mapa de metas."
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
                <Link to="/blog/carreira" className="inline-flex items-center gap-2 text-[#6b21a8] hover:text-[#581c87] mb-8 font-medium transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar para Dicas de Carreira
                </Link>

                <div className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#6b21a8]">
                  
                  <p className="lead text-xl text-gray-600 mb-8 italic border-l-4 border-[#6b21a8] pl-4">
                    Você sente que sua carreira está no piloto automático? Muitos profissionais passam anos apenas reagindo às oportunidades que surgem, sem nunca definir para onde realmente querem ir. Planejar a carreira não é apenas sobre ganhar mais, é sobre assumir o controle do seu destino profissional.
                  </p>

                  <p className="mb-8 text-gray-700 leading-relaxed">
                    Em um mercado de trabalho que muda na velocidade da luz — impulsionado por IA, trabalho remoto e novas dinâmicas econômicas — não ter um plano é o mesmo que caminhar em uma floresta densa sem bússola. Você pode até se movimentar, mas dificilmente chegará onde deseja.
                  </p>

                  <figure className="my-8">
                    <img 
                      src={articleData.images[0]} 
                      alt="Profissional planejando o próximo passo da carreira diante de um mapa de metas."
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      Planejar a carreira é o primeiro passo para crescer com propósito.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-6 h-6 text-[#6b21a8]" />
                      1. Autoconhecimento: O Ponto de Partida
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Antes de decidir para onde ir, você precisa saber onde está e quem você é. O erro mais comum é pular esta etapa e ir direto para "qual profissão paga mais?". Isso gera frustração e burnout.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Faça uma análise honesta respondendo a três perguntas fundamentais:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>O que eu faço bem naturalmente?</strong> (Suas habilidades inatas e técnicas).</li>
                      <li><strong>O que eu odeio fazer?</strong> (Tarefas que drenam sua energia).</li>
                      <li><strong>O que o mercado valoriza?</strong> (Onde suas habilidades encontram demanda real).</li>
                    </ul>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-6 h-6 text-[#6b21a8]" />
                      2. Defina Seu Destino: Onde Você Quer Chegar?
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      "Quero ter sucesso" não é uma meta. "Quero ser Diretor de Marketing em uma multinacional de tecnologia até 2028" é. A clareza é poder.
                    </p>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mb-6">
                      <h3 className="font-bold text-purple-900 mb-2">Use a Metodologia SMART:</h3>
                      <ul className="space-y-2 text-purple-800">
                        <li><strong>S</strong> (Específico): Cargo, salário ou empresa exata.</li>
                        <li><strong>M</strong> (Mensurável): Como saberá que chegou lá?</li>
                        <li><strong>A</strong> (Atingível): É realista com seu contexto atual?</li>
                        <li><strong>R</strong> (Relevante): Faz sentido para sua vida pessoal?</li>
                        <li><strong>T</strong> (Temporal): Qual a data limite?</li>
                      </ul>
                    </div>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Map className="w-6 h-6 text-[#6b21a8]" />
                      3. Construa o Caminho: O Plano de Ação
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Agora que você tem o ponto A (onde está) e o ponto B (onde quer ir), preencha a lacuna. Identifique o "Gap de Competência".
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Se você quer ser gerente, mas nunca liderou pessoas, seu plano precisa incluir:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Educação Formal:</strong> MBA ou cursos de liderança.</li>
                      <li><strong>Experiência Prática:</strong> Pedir para liderar um pequeno projeto ou treinar um estagiário.</li>
                      <li><strong>Mentoria:</strong> Encontrar alguém que já chegou lá para te orientar.</li>
                    </ul>
                    <p className="text-gray-700 font-medium">
                      Divida esse plano em etapas menores (trimestrais) para não se sentir sobrecarregado.
                    </p>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src={articleData.images[1]} 
                      alt="Bússola e trilha simbolizando o acompanhamento do plano de carreira." 
                      className="w-full max-w-[800px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      Um bom plano de carreira é guiado por revisões e metas claras.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Compass className="w-6 h-6 text-[#6b21a8]" />
                      4. A Bússola do Caminho: Monitoramento Constante
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Um plano de carreira não é um documento escrito em pedra; é um organismo vivo. O mercado muda, suas prioridades mudam.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Faça revisões semestrais do seu plano:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-700">
                      <li>Estou mais perto do meu objetivo do que há 6 meses?</li>
                      <li>As habilidades que estou aprendendo ainda são relevantes?</li>
                      <li>Meu objetivo final ainda me faz feliz?</li>
                    </ol>
                    <p className="text-gray-700 leading-relaxed">
                      Se a resposta for "não", não tenha medo de ajustar a rota (pivotar). Mudar de ideia faz parte do crescimento.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10 bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercício Prático</h2>
                    <p className="mb-4 text-gray-700">
                      Reserve 30 minutos hoje — não amanhã — para escrever em um papel:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>1 objetivo de carreira para daqui a 1 ano.</li>
                      <li>3 habilidades que você precisa aprender para chegar lá.</li>
                      <li>1 ação que você pode tomar <strong>esta semana</strong> para começar.</li>
                    </ul>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "planejamento de carreira",
                        "desenvolvimento profissional",
                        "metas profissionais",
                        "liderança",
                        "soft skills"
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
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Acelere Sua Carreira</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba estratégias semanais para crescer profissionalmente e aumentar sua renda.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Leia Também</h3>
                  <div className="space-y-4">
                     <Link to="/blog/carreira" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600 group-hover:bg-purple-200 transition-colors">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-medium text-gray-900">Guia de Habilidades 2026</span>
                          <span className="text-xs text-gray-500">O que o mercado busca</span>
                        </div>
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

export default ArticleCareerPlanning;