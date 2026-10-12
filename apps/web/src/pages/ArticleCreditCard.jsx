import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, CreditCard, ShieldCheck, AlertTriangle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';

const ArticleCreditCard = () => {
  const articleData = {
    title: "Cartão de Crédito: Como Usar Como Ferramenta e Não Como uma Dívida Sem Fim",
    metaTitle: "Cartão de Crédito: Use Como Aliado, Não Como Inimigo",
    description: "Descubra como usar o cartão de crédito a seu favor, evitar dívidas e aproveitar benefícios com segurança. Controle seu cartão antes que ele te controle.",
    author: "Seu Nome ou Nome do Site",
    date: "2026-01-26",
    readTime: "5 min",
    category: "Finanças",
    url: "https://iniciaseucapital.com.br/artigo/cartao-de-credito-como-usar-sem-se-endividar",
    images: [
      "https://images.unsplash.com/photo-1614330315526-166f2d71e544", // Hero
      "https://images.unsplash.com/photo-1677100700824-e8302ffcc1e6"  // Mid-article
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
        <meta name="keywords" content="como usar o cartão de crédito, controle financeiro, fatura do cartão, dívida do cartão, benefícios do cartão, planejamento financeiro" />
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
            "description": "Aprenda estratégias simples para usar o cartão de crédito a seu favor, ganhar benefícios e evitar dívidas. Domine o cartão antes que ele te domine.",
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
            alt="Cartão de crédito sendo usado com consciência financeira."
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
                    Para muitos brasileiros, o cartão de crédito é o grande vilão do orçamento. Mas a verdade é que, se usado com inteligência, ele pode ser uma das ferramentas mais poderosas para organizar suas finanças, acumular benefícios e até viajar de graça.
                  </p>

                  <p className="mb-8 text-gray-700 leading-relaxed">
                    O problema nunca é o plástico em si, mas o comportamento de quem o utiliza. Em 2026, com juros ainda relevantes e facilidades digitais, saber manejar seu limite é uma competência básica de sobrevivência financeira. Vamos transformar esse suposto "inimigo" no seu maior aliado financeiro?
                  </p>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      1. Entenda: Limite Não é Renda Extra
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Este é o erro número um. Se você ganha R$ 5.000 e tem um limite de R$ 10.000, você <strong>não</strong> tem R$ 15.000 para gastar. Você continua tendo apenas R$ 5.000.
                    </p>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      O cartão é apenas um meio de pagamento, um facilitador de fluxo de caixa que permite que você pague depois por algo que comprou hoje. Tratar o limite como uma extensão do salário é o caminho mais rápido para o endividamento.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                      <p className="font-bold text-yellow-900 flex items-center gap-2"><AlertTriangle className="w-5 h-5"/> Dica Prática:</p>
                      <p className="text-yellow-800">
                        Ajuste seu limite no aplicativo do banco para um valor compatível com sua renda mensal (ex: 50% ou 70% do seu salário), mesmo que o banco ofereça mais. Isso cria uma trava de segurança psicológica.
                      </p>
                    </div>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-[#0066CC]" />
                      2. Centralize para Controlar
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Ter cinco cartões diferentes "para emergências" ou "para aproveitar datas de vencimento" geralmente causa mais confusão do que ajuda. A estratégia vencedora é a <strong>centralização</strong>.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Visão Única:</strong> Ao concentrar gastos em um único cartão, você sabe exatamente quanto já gastou no mês apenas abrindo um aplicativo.</li>
                      <li><strong>Acúmulo de Pontos:</strong> Pontos espalhados em vários programas demoram a atingir o mínimo para resgate. Centralizando, você acumula milhas mais rápido.</li>
                      <li><strong>Isenção de Anuidade:</strong> Gastando mais em um único cartão, fica mais fácil negociar anuidade grátis com o banco.</li>
                    </ul>
                  </motion.section>

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1677100700824-e8302ffcc1e6" 
                      alt="Pessoa controlando gastos e evitando dívidas no cartão de crédito." 
                      className="w-full max-w-[800px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      Com disciplina e controle, o cartão deixa de ser um vilão.
                    </figcaption>
                  </figure>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      3. A Regra de Ouro: Pague Sempre o Total
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      O crédito rotativo (pagar o mínimo ou parcelar a fatura) tem os juros mais altos do mercado no Brasil. Entrar nessa modalidade é ver sua dívida dobrar em questão de meses.
                    </p>
                    <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Por que parcelar a fatura é perigoso?</h3>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Quando você parcela uma fatura, você compromete o orçamento dos meses seguintes. Se você já não conseguiu pagar o total este mês, como pagará as despesas do mês que vem <em>mais</em> a parcela da dívida antiga? É uma bola de neve matemática.
                    </p>
                    <p className="text-gray-700 font-medium">
                      Se não tiver dinheiro para pagar a fatura total, é financeiramente mais inteligente pegar um empréstimo pessoal (com juros menores) para quitar o cartão à vista do que pagar o mínimo do cartão.
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-green-600" />
                      4. Use os Benefícios "Escondidos"
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      Seu cartão provavelmente oferece benefícios que você nunca usou. As bandeiras (Visa, Mastercard, Elo) oferecem seguros gratuitos que podem economizar muito dinheiro:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 bg-gray-50 p-6 rounded-lg">
                      <li><strong>Proteção de Preço:</strong> Se você comprar um produto e achar mais barato em até 30 dias, o cartão devolve a diferença.</li>
                      <li><strong>Seguro Viagem:</strong> Passagens compradas com o cartão dão direito a seguro médico internacional gratuito.</li>
                      <li><strong>Garantia Estendida:</strong> O cartão pode dobrar a garantia de fábrica de eletrodomésticos e eletrônicos.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Verifique no site da bandeira do seu cartão quais benefícios estão ativos para sua categoria (Gold, Platinum, Black/Infinite).
                    </p>
                  </motion.section>

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O cartão de crédito não precisa ser cortado com tesoura nem congelado num bloco de gelo. Ele exige maturidade. Usado corretamente, ele oferece até 40 dias para pagar, milhas para viajar e seguros gratuitos.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      O segredo é simples, mas exige disciplina: <strong>gaste apenas o que você pode pagar quando a fatura chegar</strong>. Se você seguir essa única regra, o cartão de crédito será sempre seu melhor funcionário, trabalhando de graça para você.
                    </p>
                  </motion.section>

                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {[
                        "cartão de crédito",
                        "educação financeira",
                        "dívidas",
                        "milhas e pontos",
                        "orçamento pessoal"
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Domine Suas Finanças</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba dicas exclusivas para sair das dívidas e investir melhor.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Ferramentas Úteis</h3>
                  <div className="space-y-4">
                     <Link to="/ferramentas" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block font-medium text-gray-900">Calculadora de Juros</span>
                          <span className="text-xs text-gray-500">Veja o impacto dos juros compostos</span>
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

export default ArticleCreditCard;