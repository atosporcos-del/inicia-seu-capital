import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import ArticleDetail from '@/pages/ArticleDetail';
import ArticleESG from '@/pages/ArticleESG';
import ArticleBancoCentral from '@/pages/ArticleBancoCentral';
import ArticleGlobalEconomy2026 from '@/pages/ArticleGlobalEconomy2026';
import ArticlePIBBrasileiro2026 from '@/pages/ArticlePIBBrasileiro2026';
import ArticleSelicEconomia2026 from '@/pages/ArticleSelicEconomia2026';
import ArticleInflacao from '@/pages/ArticleInflacao';
import ArticleCreditCard from '@/pages/ArticleCreditCard';
import ArticleCareerPlanning from '@/pages/ArticleCareerPlanning';
import ToolsPage from '@/pages/ToolsPage';
import ContactPage from '@/pages/ContactPage';
import EconomiaCategory from '@/pages/EconomiaCategory';
import FinancasCategory from '@/pages/FinancasCategory';
import CareerTipsCategory from '@/pages/CareerTipsCategory';
import NotFoundPage from '@/pages/NotFoundPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* Category Pages */}
            <Route path="/blog/economia" element={<EconomiaCategory />} />
            <Route path="/blog/financas" element={<FinancasCategory />} />
            <Route path="/blog/carreira" element={<CareerTipsCategory />} />

            {/* Legacy/Direct Nav Links */}
            <Route path="/economia" element={<EconomiaCategory />} />
            <Route path="/investimentos" element={<EconomiaCategory />} />
            <Route path="/carreira" element={<CareerTipsCategory />} />
            
            {/* Specific Articles (Overrides default :slug route) */}
            <Route path="/artigos/o-que-e-esg-e-por-que-ele-esta-mudando-a-economia" element={<ArticleESG />} />
            <Route path="/artigos/banco-central-economia-selic-pix-drex" element={<ArticleBancoCentral />} />
            <Route path="/artigos/economia-global-2026-brasil-riscos-oportunidades" element={<ArticleGlobalEconomy2026 />} />
            <Route path="/artigos/pib-brasileiro-economia-2026-motores-e-freios" element={<ArticlePIBBrasileiro2026 />} />
            <Route path="/artigos/selic-2026-investimentos-financiamentos" element={<ArticleSelicEconomia2026 />} />
            <Route path="/artigos/estrategias-proteger-dinheiro-inflacao-2026" element={<ArticleInflacao />} />
            <Route path="/artigos/cartao-de-credito-como-usar-sem-se-endividar" element={<ArticleCreditCard />} />
            <Route path="/artigos/planejamento-de-carreira-mapa-para-crescer" element={<ArticleCareerPlanning />} />
            
            {/* Dynamic Articles Route */}
            <Route path="/artigos/:slug" element={<ArticleDetail />} />
            
            <Route path="/ferramentas" element={<ToolsPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </AnimatePresence>
      <Toaster />
    </Router>
  );
}

export default App;