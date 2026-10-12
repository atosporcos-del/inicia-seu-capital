import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react';

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(10);
  const [time, setTime] = useState(5);
  const [frequency, setFrequency] = useState(12);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time, frequency]);

  const calculateInterest = () => {
    const r = rate / 100;
    const n = frequency;
    const t = time;
    const finalAmount = principal * Math.pow((1 + r / n), n * t);
    const interest = finalAmount - principal;

    setResult({
      finalAmount: finalAmount.toFixed(2),
      totalInterest: interest.toFixed(2)
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
        Calculadora de Juros Compostos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <DollarSign className="w-5 h-5 text-[#0066CC]" />
              Valor Inicial (R$)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 mb-2 font-medium">
              <Percent className="w-5 h-5 text-[#0066CC]" />
              Taxa de Juros Anual (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
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
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Frequência de Composição
            </label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            >
              <option value={1}>Anual</option>
              <option value={2}>Semestral</option>
              <option value={4}>Trimestral</option>
              <option value={12}>Mensal</option>
              <option value={365}>Diária</option>
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Resultado</h3>
          
          {result && (
            <div className="space-y-6">
              <div>
                <p className="text-white/80 mb-2">Montante Final</p>
                <p className="text-4xl font-bold">
                  R$ {Number(result.finalAmount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>

              <div>
                <p className="text-white/80 mb-2">Juros Totais</p>
                <p className="text-3xl font-bold text-[#7FFF00]">
                  R$ {Number(result.totalInterest).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="flex justify-between mb-2">
                  <span>Investimento Inicial</span>
                  <span className="font-semibold">R$ {principal.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rendimento</span>
                  <span className="font-semibold">{((result.totalInterest / principal) * 100).toFixed(2)}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InterestCalculator;