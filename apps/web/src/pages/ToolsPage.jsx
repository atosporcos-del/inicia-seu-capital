import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, FileSpreadsheet, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InterestCalculator from '@/components/tools/InterestCalculator';
import InvestmentSimulator from '@/components/tools/InvestmentSimulator';
import BudgetSpreadsheet from '@/components/tools/BudgetSpreadsheet';

const ToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>Ferramentas Financeiras - Inicia Seu Capital</title>
        <meta name="description" content="Calculadoras e ferramentas gratuitas para ajudar você a gerenciar suas finanças pessoais." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Hero Section */}
        <section 
          className="relative py-16 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1651129521731-6f6ea5ea0caa)' }}
        >
          <div className="gradient-overlay" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white max-w-3xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-4">Ferramentas Financeiras</h1>
              <p className="text-xl">Calculadoras e recursos gratuitos para facilitar sua gestão financeira</p>
            </motion.div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="juros" className="w-full" id="juros">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white p-2 rounded-xl shadow-lg">
                <TabsTrigger value="juros" className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculadora de Juros
                </TabsTrigger>
                <TabsTrigger value="investimentos" className="flex items-center gap-2" id="investimentos">
                  <TrendingUp className="w-5 h-5" />
                  Simulador de Investimentos
                </TabsTrigger>
                <TabsTrigger value="orcamento" className="flex items-center gap-2" id="orcamento">
                  <FileSpreadsheet className="w-5 h-5" />
                  Planilha de Orçamento
                </TabsTrigger>
              </TabsList>

              <TabsContent value="juros">
                <InterestCalculator />
              </TabsContent>

              <TabsContent value="investimentos">
                <InvestmentSimulator />
              </TabsContent>

              <TabsContent value="orcamento">
                <BudgetSpreadsheet />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;