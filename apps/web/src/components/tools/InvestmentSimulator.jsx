import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Calendar, PiggyBank } from 'lucide-react';

const InvestmentSimulator = () => {
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(10);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateInvestment();
  }, [initialInvestment, monthlyContribution, annualReturn, years]);

  const calculateInvestment = () => {
    const monthlyRate = annualReturn / 100 / 12;
    const months = years * 12;
    
    let futureValue = initialInvestment;
    let totalContributions = initialInvestment;
    
    for (let i = 0; i < months; i++) {
      futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
      totalContributions += monthlyContribution;
    }
    
    const earnings = futureValue - totalContributions;

    setResult({
      futureValue: futureValue.toFixed(2),
      totalContributions: totalContributions.toFixed(2),
      earnings: earnings.toFixed(2)
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-8"
    >
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
        <TrendingUp className="w-8 h-8 text-[#0066CC]" />
        Simulador de Investimentos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <DollarSign className="w-5 h-5 text-[#0066CC]" />
              Investimento Inicial (R$)
            </label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <PiggyBank className="w-5 h-5 text-[#0066CC]" />
              Aporte Mensal (R$)
            </label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <TrendingUp className="w-5 h-5 text-[#0066CC]" />
              Rentabilidade Anual Esperada (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <Calendar className="w-5 h-5 text-[#0066CC]" />
              Período (anos)
            </label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Projeção</h3>
          
          {result && (
            <div className="space-y-6">
              <div>
                <p className="text-white/80 mb-2">Valor Futuro Projetado</p>
                <p className="text-4xl font-bold">
                  R$ {Number(result.futureValue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/20">
                <div className="flex justify-between">
                  <span className="text-white/80">Total Investido</span>
                  <span className="font-semibold">
                    R$ {Number(result.totalContributions).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/80">Rendimento</span>
                  <span className="font-semibold text-[#7FFF00]">
                    R$ {Number(result.earnings).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/80">Rentabilidade Total</span>
                  <span className="font-semibold">
                    {((result.earnings / result.totalContributions) * 100).toFixed(2)}%
                  </span>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mt-6">
                <p className="text-sm text-white/80 mb-2">Distribuição</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Aportes</span>
                      <span>{((result.totalContributions / result.futureValue) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white"
                        style={{ width: `${(result.totalContributions / result.futureValue) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Rendimentos</span>
                      <span>{((result.earnings / result.futureValue) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#7FFF00]"
                        style={{ width: `${(result.earnings / result.futureValue) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentSimulator;