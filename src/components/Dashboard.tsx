import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  BarChart3, 
  ArrowUpRight,
  CheckCircle,
  Calendar,
  Zap
} from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, icon, trend, color }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 hover:shadow-xl transition-shadow duration-300 border-gray-700" style={{ borderLeftColor: color }}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-300 mb-1">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
        {trend && (
          <p className="text-sm text-green-400 flex items-center mt-1">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            {trend}
          </p>
        )}
      </div>
      <div className="p-3 rounded-full bg-gray-700">
        <div style={{ color }}>{icon}</div>
      </div>
    </div>
  </div>
);

interface ComparisonBarProps {
  label: string;
  before: number;
  after: number;
  unit: string;
  growth: string;
}

const ComparisonBar: React.FC<ComparisonBarProps> = ({ label, before, after, unit, growth }) => {
  const maxValue = Math.max(before, after);
  const beforeWidth = Math.max((before / maxValue) * 100, 8); // Minimum 8% width for visibility
  const afterWidth = (after / maxValue) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-200">{label}</h4>
        <span className="text-sm font-bold text-green-400">+{growth}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="w-16 text-xs text-gray-400">Antes:</span>
          <div className="flex-1 bg-gray-700 rounded-full h-6 mx-2">
            <div 
              className="bg-red-500 h-6 rounded-full flex items-center justify-end pr-2 min-w-0"
              style={{ width: `${beforeWidth}%` }}
            >
              <span className="text-xs text-white font-medium text-right truncate">
                {unit}{before.toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="w-16 text-xs text-gray-400">Depois:</span>
          <div className="flex-1 bg-gray-700 rounded-full h-6 mx-2">
            <div 
              className="bg-aned-primary h-6 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${afterWidth}%` }}
            >
              <span className="text-xs text-white font-medium">{unit}{after.toLocaleString('pt-BR')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [selectedProjection, setSelectedProjection] = useState(20);

  const projectionData = [
    { increase: 10, investment: 36469.43, revenue: 522217.37, clients: 1000 },
    { increase: 20, investment: 39784.84, revenue: 602983.93, clients: 1091 },
    { increase: 30, investment: 43100.24, revenue: 683750.49, clients: 1182 },
    { increase: 40, investment: 46415.64, revenue: 764517.05, clients: 1273 },
    { increase: 50, investment: 49731.05, revenue: 845283.61, clients: 1364 }
  ];

  const recommendations = [
    "Manter o funil ativo com base nos dados de impacto",
    "Escalar investimento progressivamente (10–20% ao mês)",
    "Otimizar criativos com baixa taxa de cliques",
    "Realizar mais eventos presenciais da ANED",
    "Consolidar estratégias de retenção e LTV para clientes já adquiridos"
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-aned-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/271666268_2104745779690965_462428904661818731_n.png" 
                alt="ANED Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-3xl font-bold text-white">Resultados e Projeções ANED</h1>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-aned-lighter opacity-80">Período de análise</p>
              <p className="font-semibold text-white flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-aned-accent" />
                18 meses
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Seção 1 - KPIs Principais */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-aned-accent" />
            Visão Geral da Gestão Atual
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <KPICard
              title="Faturamento Bruto"
              value="R$ 474.735,13"
              icon={<DollarSign className="w-6 h-6" />}
              color="#0A593C"
            />
            <KPICard
              title="Faturamento Líquido"
              value="R$ 441.450,80"
              icon={<DollarSign className="w-6 h-6" />}
              color="#014023"
            />
            <KPICard
              title="Total de Vendas"
              value="1.060"
              icon={<BarChart3 className="w-6 h-6" />}
              color="#F2A20C"
            />
            <KPICard
              title="Novos Clientes"
              value="909"
              icon={<Users className="w-6 h-6" />}
              color="#F2C36B"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <KPICard
              title="ROAS"
              value="14,32"
              icon={<Target className="w-6 h-6" />}
              color="#0A593C"
            />
            <KPICard
              title="ROI"
              value="1.231,69%"
              icon={<TrendingUp className="w-6 h-6" />}
              color="#014023"
            />
            <KPICard
              title="CAC"
              value="R$ 36,47"
              icon={<Users className="w-6 h-6" />}
              color="#F2A20C"
            />
            <KPICard
              title="Ticket Médio"
              value="R$ 409,35"
              icon={<DollarSign className="w-6 h-6" />}
              color="#7dd3fc"
            />
            <KPICard
              title="Clientes/Dia"
              value="1,66"
              icon={<Calendar className="w-6 h-6" />}
              color="#F2C36B"
            />
          </div>

          <div className="mt-6 bg-gray-800 border-l-4 border-aned-accent p-4 rounded-r-lg">
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-aned-accent mr-2" />
              <p className="text-gray-200 font-medium">
                Cada real investido retornou R$14,32 em vendas, com CAC de apenas R$36,47 — cerca de 9% do ticket médio.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 2 - Comparativo */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-aned-accent" />
            Antes da nossa equipe vs. Com a nossa equipe
          </h2>
          
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <ComparisonBar
              label="Faturamento Bruto"
              before={41376.38}
              after={474735.13}
              unit="R$ "
              growth="1.047%"
            />
            <ComparisonBar
              label="Faturamento Líquido"
              before={40576.54}
              after={441450.80}
              unit="R$ "
              growth="987%"
            />
            <ComparisonBar
              label="Total de Vendas"
              before={105}
              after={1060}
              unit=""
              growth="909%"
            />
            <ComparisonBar
              label="Novos Clientes"
              before={93}
              after={909}
              unit=""
              growth="877%"
            />
            <ComparisonBar
              label="Novos Clientes por Dia"
              before={0.17}
              after={1.66}
              unit=""
              growth="876%"
            />
            
            <div className="mt-6 bg-green-900 border-l-4 border-green-400 p-4 rounded-r-lg">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                <p className="text-gray-200 font-medium">
                  Em todos os indicadores-chave, nossa equipe trouxe crescimento superior a 9x.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3 - Eficiência Financeira */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2 text-aned-accent" />
            ROI, ROAS e CAC: Eficiência Financeira
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-aned-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aned-primary mb-2">ROAS</h3>
              <p className="text-3xl font-bold text-aned-accent">14,32</p>
              <p className="text-sm text-gray-400 mt-2">Para cada R$1 real investido em anúncio, houve um retorno de R$14,32</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-aned-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aned-primary mb-2">ROI</h3>
              <p className="text-3xl font-bold text-aned-accent">1.231,69%</p>
              <p className="text-sm text-gray-400 mt-2">Retorno sobre o investimento</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-aned-primary" />
              </div>
              <h3 className="text-lg font-semibold text-aned-primary mb-2">CAC</h3>
              <p className="text-3xl font-bold text-aned-accent">R$ 36,47</p>
              <p className="text-sm text-gray-400 mt-2">Custo de aquisição de novos clientes</p>
            </div>
          </div>

          <div className="mt-6 bg-gray-800 border-l-4 border-aned-accent p-4 rounded-r-lg">
            <div className="flex items-center">
              <Target className="w-5 h-5 text-aned-accent mr-2" />
              <p className="text-gray-200 font-medium">
                Os resultados da nossa gestão foram excelentes, com retorno líquido 12x maior que o investimento.
              </p>
            </div>
          </div>
        </section>

        {/* Seção 4 - Evolução de Clientes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-aned-accent" />
            Evolução de Novos Clientes por Dia
          </h2>
          
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Antes da nossa equipe</h3>
                <div className="w-32 h-32 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-red-400">0,17</span>
                </div>
                <p className="text-gray-400">clientes por dia</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Com a nossa equipe</h3>
                <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-aned-accent">1,66</span>
                </div>
                <p className="text-gray-400">clientes por dia</p>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-900 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex items-center">
                <ArrowUpRight className="w-5 h-5 text-yellow-400 mr-2" />
                <p className="text-gray-200 font-medium text-lg">
                  A aquisição diária de clientes aumentou em mais de 876%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5 - Projeções */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-aned-accent" />
            Projeções com Escala de Investimento
          </h2>
          
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Selecione o aumento de investimento:
              </label>
              <div className="flex flex-wrap gap-2">
                {projectionData.map((item) => (
                  <button
                    key={item.increase}
                    onClick={() => setSelectedProjection(item.increase)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedProjection === item.increase
                        ? 'bg-aned-primary text-white'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                    }`}
                  >
                    +{item.increase}%
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {projectionData
                .filter(item => item.increase === selectedProjection)
                .map((item) => (
                  <React.Fragment key={item.increase}>
                    <div className="text-center p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-gray-200 mb-2">Investimento</h4>
                      <p className="text-2xl font-bold text-aned-accent">
                        R$ {item.investment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-900 rounded-lg">
                      <h4 className="font-semibold text-gray-200 mb-2">Faturamento Estimado</h4>
                      <p className="text-2xl font-bold text-green-400">
                        R$ {item.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-gray-200 mb-2">Novos Clientes</h4>
                      <p className="text-2xl font-bold text-aned-accent">
                        {item.clients.toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="px-4 py-3 text-left font-semibold text-gray-200">Aumento</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-200">Investimento</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-200">Faturamento Estimado</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-200">Novos Clientes</th>
                  </tr>
                </thead>
                <tbody>
                  {projectionData.map((item, index) => (
                    <tr 
                      key={item.increase} 
                      className={`border-t border-gray-700 ${selectedProjection === item.increase ? 'bg-gray-700' : ''}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-200">+{item.increase}%</td>
                      <td className="px-4 py-3 text-gray-300">R$ {item.investment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                      <td className="px-4 py-3 text-gray-300">R$ {item.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                      <td className="px-4 py-3 text-gray-300">{item.clients.toLocaleString('pt-BR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-gray-700 border-l-4 border-aned-accent p-4 rounded-r-lg">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-aned-accent mr-2" />
                <p className="text-gray-200 font-medium">
                  Ao escalar investimento de forma gradual, a ANED pode alcançar quase R$850 mil em faturamento mantendo eficiência de retorno.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 6 - Conclusão */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-aned-accent" />
            Conclusão Estratégica e Próximos Passos
          </h2>
          
          <div className="bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-200 mb-4">Recomendações Estratégicas</h3>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-aned-primary to-aned-secondary rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Conclusão</h3>
                <p className="text-lg leading-relaxed">
                  A gestão de tráfego gerou um salto de mais de 1.000% em vendas. 
                  Escalar agora, com responsabilidade e rastreio, é o caminho natural para dobrar os resultados.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;