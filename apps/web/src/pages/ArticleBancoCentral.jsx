import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryBadge from '@/components/CategoryBadge';
import SocialShareButtons from '@/components/SocialShareButtons';
import NewsletterForm from '@/components/NewsletterForm';

const ArticleBancoCentral = () => {
  const articleData = {
    title: "Banco Central: O que o BC tem a ver com seu salário, seu empréstimo e sua compra online?",
    description: "Descubra como a taxa Selic, o PIX e a fiscalização dos bancos influenciam seu bolso, seu crédito e suas compras do dia a dia.",
    author: "Seu Nome ou Nome do Site",
    date: "2026-01-25",
    readTime: "5 min",
    category: "Economia",
    url: "https://iniciaseucapital.com.br/artigos/banco-central-economia-selic-pix-drex",
    images: [
      "https://images.unsplash.com/photo-1666206499838-3fcff057cc69",
      "https://images.unsplash.com/photo-1613442368680-a30262ad8b3b"
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
        <title>Banco Central: Como o BC Afeta Sua Vida Financeira</title>
        <meta name="description" content={articleData.description} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Banco Central: O que o BC tem a ver com seu salário e suas compras" />
        <meta property="og:description" content="Entenda de forma simples como o Banco Central afeta sua vida — do PIX à taxa Selic e aos empréstimos." />
        <meta property="og:image" content={articleData.images[0]} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleData.url} />
        <meta name="keywords" content="Banco Central, taxa Selic, PIX, Drex, sistema financeiro, crédito bancário, inflação, regulação bancária" />
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
            alt="Notas de real com o logotipo do Banco Central e gráficos financeiros."
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
                  
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">Banco Central: O que o BC tem a ver com seu salário, seu empréstimo e sua compra online?</h1>
                  
                  <p className="italic text-lg text-gray-600 mb-8">
                    Você ouve falar dele no jornal quase todo dia. "O Banco Central decidiu...", "O COPOM aumentou a taxa...", mas você sabe como essas manchetes afetam a sua conta bancária na prática? Não é apenas sobre economia macro; é sobre o preço do pão e o juro do seu cartão.
                  </p>

                  <hr className="my-8 border-gray-200" />

                  <figure className="my-8">
                    <img 
                      src="https://images.unsplash.com/photo-1666206499838-3fcff057cc69" 
                      alt="Notas de real com o logotipo do Banco Central e gráficos financeiros." 
                      className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                    />
                    <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                      As decisões do Banco Central influenciam diretamente a economia do dia a dia.
                    </figcaption>
                  </figure>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Guardião do Real — Por que o BC importa no seu dia a dia</h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                      O Banco Central do Brasil (BCB) é frequentemente chamado de "banco dos bancos", mas sua função principal é ser o guardião da moeda. Sua missão número um é garantir que o dinheiro no seu bolso mantenha o poder de compra. Quando a inflação sobe, é o BC que entra em campo para frear o aumento dos preços, usando ferramentas complexas para desaquecer a economia de forma controlada.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Além disso, o BC garante que o sistema financeiro não quebre. Imagine se você fosse ao caixa eletrônico e não conseguisse sacar seu dinheiro porque o banco "fechou"? O Banco Central monitora a saúde das instituições financeiras para evitar exatamente esse tipo de caos, garantindo estabilidade para que a economia possa funcionar sem interrupções.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">A Regulação dos Bancos — A Proteção que Você Nem Vê</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Muitas vezes reclamamos das taxas bancárias, mas esquecemos da segurança que existe por trás das operações. O BC atua nos bastidores estabelecendo regras rígidas que protegem o consumidor de riscos excessivos tomados pelas instituições financeiras.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">O Compulsório — A Poupança Forçada dos Bancos</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Você sabia que o banco não pode emprestar todo o dinheiro que você deposita lá? O Banco Central exige que uma parte significativa desses depósitos seja guardada em uma conta no próprio BC. Isso se chama "depósito compulsório".
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Essa regra serve para duas coisas: controlar a quantidade de dinheiro circulando na economia (ajudando na inflação) e garantir que, em momentos de pânico ou crise, os bancos tenham uma reserva de liquidez imediata para honrar os saques dos clientes.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">A Fiscalização — O 'Detetive' do Sistema</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O BC monitora constantemente se os bancos estão seguindo as regras de capital mínimo e de atendimento ao cliente. Se uma instituição financeira começa a apresentar sinais de má gestão, o BC pode intervir, decretar falência ou liquidar a instituição para proteger o mercado.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Além disso, o BC gerencia o Fundo Garantidor de Créditos (FGC), mecanismo que assegura que, se um banco quebrar, quem tem até R$ 250 mil investidos receba seu dinheiro de volta. É uma camada de segurança vital para o pequeno investidor.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">O Impacto Direto no Seu Bolso</h2>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Engana-se quem pensa que o Banco Central é apenas um órgão burocrático. Suas ferramentas tecnológicas e de política monetária mudam a forma como você paga contas e planeja seu futuro.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">A Selic e Seu Bolso</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      A Taxa Selic é a "taxa mãe" da economia. Definida a cada 45 dias pelo COPOM (comitê do BC), ela baliza todas as outras taxas de juros do país.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Quando a Selic sobe:</strong> O crédito fica caro. Financiamentos de imóveis, empréstimos pessoais e o rotativo do cartão disparam. É ruim para quem deve, mas bom para quem investe em Renda Fixa.</li>
                      <li><strong>Quando a Selic cai:</strong> O consumo é estimulado. Fica mais barato parcelar compras e financiar bens, aquecendo o comércio e a geração de empregos.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">O PIX Que Você Adora</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O PIX, lançado em 2020, foi uma revolução criada, implementada e gerida pelo Banco Central. Ele eliminou os custos de TED e DOC para pessoas físicas e permitiu transações em tempo real, 24 horas por dia, 7 dias por semana.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Antes do PIX, transferir dinheiro no fim de semana era impossível. Hoje, a economia não para. Essa agilidade reduziu custos operacionais para empresas e democratizou o acesso a pagamentos digitais para milhões de brasileiros.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">O Futuro do Dinheiro — O Drex (Real Digital)</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      O próximo grande passo do BC é o Drex. Não é uma criptomoeda como o Bitcoin, mas sim a versão digital oficial do Real. Ele permitirá o uso de contratos inteligentes (smart contracts) para automatizar negócios.
                    </p>
                    <p className="mb-6 text-gray-700 leading-relaxed">
                      Imagine comprar um carro usado e a transferência da propriedade e do dinheiro acontecerem simultaneamente e de forma automática, sem cartório e sem risco de golpe. É isso que o Drex promete viabilizar nos próximos anos.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">A Taxa de Câmbio e Seu Consumo</h3>
                    <p className="mb-3 text-gray-700 leading-relaxed">
                      Embora o Brasil tenha um regime de câmbio flutuante (o mercado define o preço do dólar), o BC atua pontualmente fazendo leilões de moeda (swaps cambiais) para evitar oscilações bruscas que gerem pânico.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Um dólar estável é essencial para controlar o preço do pão (que usa trigo importado) e da gasolina. Portanto, as reservas internacionais geridas pelo BC funcionam como um seguro contra crises externas.
                    </p>
                  </motion.section>

                  <hr className="my-8 border-gray-200" />

                  <motion.section variants={fadeIn} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão — O BC é Seu Aliado Financeiro (Invisível)</h2>
                    <p className="mb-8 text-gray-700 leading-relaxed">
                      O Banco Central não é um inimigo que quer aumentar os juros para atrapalhar sua vida. É uma instituição técnica que trabalha para equilibrar a balança delicada entre crescimento e inflação.
                    </p>

                    <figure className="my-8">
                      <img 
                        src="https://images.unsplash.com/photo-1613442368680-a30262ad8b3b" 
                        alt="Conceito visual mostrando ferramentas do Banco Central: PIX, Selic, câmbio e Drex." 
                        className="w-full max-w-[1200px] h-auto rounded-xl shadow-lg mx-auto"
                      />
                      <figcaption className="text-center text-sm text-[#666] mt-2 italic">
                        Do PIX ao Drex: o BC no centro da sua vida financeira.
                      </figcaption>
                    </figure>

                    <p className="mb-4 text-gray-700 font-medium">Alguns exemplos práticos:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                      <li><strong>Investidor:</strong> Acompanha a Selic para saber se aloca em Renda Fixa ou Bolsa.</li>
                      <li><strong>Consumidor:</strong> Usa o PIX diariamente e depende da meta de inflação para manter o poder de compra.</li>
                      <li><strong>Empreendedor:</strong> Depende da regulação de crédito para conseguir capital de giro mais barato.</li>
                    </ul>

                    <p className="font-bold text-gray-900 mb-6 text-lg">
                      Entender o Banco Central é entender as regras do jogo do dinheiro. Quanto mais atento você estiver aos sinais que ele emite, melhores serão suas decisões financeiras.
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
                        "Banco Central",
                        "taxa Selic",
                        "PIX",
                        "Drex",
                        "sistema financeiro",
                        "crédito bancário",
                        "inflação",
                        "regulação bancária"
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
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Gostou deste artigo?</h3>
                  <p className="text-gray-600 mb-4 text-sm">Receba nossos melhores conteúdos sobre economia e finanças diretamente no seu e-mail.</p>
                  <NewsletterForm compact={true} />
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 text-gray-900">Mais sobre Economia</h3>
                  <div className="flex flex-col gap-2">
                    <Link to="/blog/economia" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#0066CC] transition-colors group">
                      <span className="font-medium">Economia Geral</span>
                      <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-[#0066CC]" />
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

export default ArticleBancoCentral;