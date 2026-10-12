import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BudgetSpreadsheet = () => {
  const [income, setIncome] = useState([{ id: 1, description: 'Salário', amount: 5000 }]);
  const [fixedExpenses, setFixedExpenses] = useState([
    { id: 1, description: 'Aluguel', amount: 1500 },
    { id: 2, description: 'Internet', amount: 100 }
  ]);
  const [variableExpenses, setVariableExpenses] = useState([
    { id: 1, description: 'Alimentação', amount: 800 }
  ]);
  const [savings, setSavings] = useState([{ id: 1, description: 'Reserva de Emergência', amount: 500 }]);
  const { toast } = useToast();

  const addItem = (category) => {
    const newItem = { id: Date.now(), description: '', amount: 0 };
    switch (category) {
      case 'income':
        setIncome([...income, newItem]);
        break;
      case 'fixed':
        setFixedExpenses([...fixedExpenses, newItem]);
        break;
      case 'variable':
        setVariableExpenses([...variableExpenses, newItem]);
        break;
      case 'savings':
        setSavings([...savings, newItem]);
        break;
    }
  };

  const removeItem = (category, id) => {
    switch (category) {
      case 'income':
        setIncome(income.filter(item => item.id !== id));
        break;
      case 'fixed':
        setFixedExpenses(fixedExpenses.filter(item => item.id !== id));
        break;
      case 'variable':
        setVariableExpenses(variableExpenses.filter(item => item.id !== id));
        break;
      case 'savings':
        setSavings(savings.filter(item => item.id !== id));
        break;
    }
  };

  const updateItem = (category, id, field, value) => {
    const updateArray = (arr) => arr.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );

    switch (category) {
      case 'income':
        setIncome(updateArray(income));
        break;
      case 'fixed':
        setFixedExpenses(updateArray(fixedExpenses));
        break;
      case 'variable':
        setVariableExpenses(updateArray(variableExpenses));
        break;
      case 'savings':
        setSavings(updateArray(savings));
        break;
    }
  };

  const totalIncome = income.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalFixed = fixedExpenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalVariable = variableExpenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalSavings = savings.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalExpenses = totalFixed + totalVariable + totalSavings;
  const balance = totalIncome - totalExpenses;

  const handleDownloadCSV = () => {
    try {
      // Calculate percentages safely
      const getPercent = (val) => totalIncome > 0 ? ((val / totalIncome) * 100).toFixed(1) + '%' : '0.0%';

      const percentFixed = getPercent(totalFixed);
      const percentVariable = getPercent(totalVariable);
      const percentSavings = getPercent(totalSavings);

      // Helper to format currency
      const formatCurrency = (val) => `R$ ${val.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
      
      // Helper to escape CSV fields (wrap in quotes to handle commas)
      const safeStr = (val) => `"${val}"`;

      // Build CSV rows based on the requested structure: Descrição, Valor, Percentual
      const rows = [
        ['Descrição', 'Valor', 'Percentual'], // Header
        ['Total de Receitas', safeStr(formatCurrency(totalIncome)), ''],
        ['Despesas Fixas', safeStr(formatCurrency(totalFixed)), safeStr(percentFixed)],
        ['Despesas Variáveis', safeStr(formatCurrency(totalVariable)), safeStr(percentVariable)],
        ['Poupança/Investimentos', safeStr(formatCurrency(totalSavings)), safeStr(percentSavings)],
        ['Total de Despesas', safeStr(formatCurrency(totalExpenses)), ''],
        ['Saldo', safeStr(formatCurrency(balance)), '']
      ];

      // Join rows with newlines and columns with commas
      // Add BOM \uFEFF so Excel opens it with correct encoding
      const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
        + rows.map(e => e.join(",")).join("\n");

      // Trigger download
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      
      const dateStr = new Date().toISOString().split('T')[0];
      link.setAttribute("download", `orcamento_${dateStr}.csv`);
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Download Concluído",
        description: "O arquivo CSV do seu orçamento foi baixado com sucesso!",
      });
    } catch (error) {
      console.error("Error generating CSV:", error);
      toast({
        variant: "destructive",
        title: "Erro no Download",
        description: "Não foi possível gerar o arquivo CSV. Tente novamente.",
      });
    }
  };

  const CategorySection = ({ title, items, category, color }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
        <button
          onClick={() => addItem(category)}
          className="flex items-center gap-2 px-3 py-1 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052a3] transition-colors"
        >
          <Plus className="w-4 h-4" />
          Adicionar
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex gap-2">
            <input
              type="text"
              value={item.description}
              onChange={(e) => updateItem(category, item.id, 'description', e.target.value)}
              placeholder="Descrição"
              className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
            <input
              type="number"
              value={item.amount}
              onChange={(e) => updateItem(category, item.id, 'amount', e.target.value)}
              placeholder="Valor"
              className="w-32 px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
            />
            <button
              onClick={() => removeItem(category, item.id)}
              className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          Planilha de Orçamento
        </h2>
        <button
          onClick={handleDownloadCSV}
          className="btn-secondary flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Baixar CSV
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <CategorySection
            title="Receitas"
            items={income}
            category="income"
            color="text-green-600"
          />

          <CategorySection
            title="Despesas Fixas"
            items={fixedExpenses}
            category="fixed"
            color="text-red-600"
          />

          <CategorySection
            title="Despesas Variáveis"
            items={variableExpenses}
            category="variable"
            color="text-orange-600"
          />

          <CategorySection
            title="Poupança/Investimentos"
            items={savings}
            category="savings"
            color="text-blue-600"
          />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#0066CC] to-[#0052a3] rounded-xl p-6 text-white sticky top-24">
            <h3 className="text-2xl font-bold mb-6">Resumo</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between pb-3 border-b border-white/20">
                <span>Total de Receitas</span>
                <span className="font-bold text-green-300">
                  R$ {totalIncome.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Despesas Fixas</span>
                  <span>R$ {totalFixed.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Despesas Variáveis</span>
                  <span>R$ {totalVariable.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Poupança/Investimentos</span>
                  <span>R$ {totalSavings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>

              <div className="flex justify-between pb-3 border-b border-white/20">
                <span>Total de Despesas</span>
                <span className="font-bold text-red-300">
                  R$ {totalExpenses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className={`flex justify-between text-lg font-bold pt-3 ${balance >= 0 ? 'text-[#7FFF00]' : 'text-red-300'}`}>
                <span>Saldo</span>
                <span>
                  R$ {balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {totalIncome > 0 && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/80 mb-3">Distribuição de Despesas</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Fixas</span>
                      <span>{((totalFixed / totalIncome) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-400"
                        style={{ width: `${(totalFixed / totalIncome) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Variáveis</span>
                      <span>{((totalVariable / totalIncome) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-orange-400"
                        style={{ width: `${(totalVariable / totalIncome) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Poupança</span>
                      <span>{((totalSavings / totalIncome) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#7FFF00]"
                        style={{ width: `${(totalSavings / totalIncome) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BudgetSpreadsheet;