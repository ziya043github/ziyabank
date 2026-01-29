import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const data = [
  { name: 'Mon', USD: 1.70, EUR: 1.82 },
  { name: 'Tue', USD: 1.70, EUR: 1.83 },
  { name: 'Wed', USD: 1.71, EUR: 1.81 },
  { name: 'Thu', USD: 1.69, EUR: 1.84 },
  { name: 'Fri', USD: 1.70, EUR: 1.85 },
  { name: 'Sat', USD: 1.70, EUR: 1.85 },
  { name: 'Sun', USD: 1.70, EUR: 1.85 },
];

const ExchangeRates = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white dark:bg-ziya-dark transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/3 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t('rates.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time exchange rates visualization. Track market trends accurately.
            </p>
            
            <div className="space-y-4">
              {[
                { currency: 'USD', buy: '1.6950', sell: '1.7025', change: '+0.05%' },
                { currency: 'EUR', buy: '1.8120', sell: '1.8560', change: '-0.12%' },
                { currency: 'RUB', buy: '0.0185', sell: '0.0195', change: '+1.2%' },
              ].map((rate, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-ziya-red/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center font-bold text-gray-700 dark:text-white shadow-sm">
                      {rate.currency}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{rate.currency}/AZN</div>
                      <div className={`text-xs ${rate.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {rate.change}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Buy: <span className="text-gray-900 dark:text-white font-medium">{rate.buy}</span></div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Sell: <span className="text-gray-900 dark:text-white font-medium">{rate.sell}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[400px] p-6 bg-white dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUSD" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B0000" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B0000" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEUR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00008B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00008B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" domain={['auto', 'auto']} />
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="USD" stroke="#8B0000" fillOpacity={1} fill="url(#colorUSD)" strokeWidth={3} />
                <Area type="monotone" dataKey="EUR" stroke="#00008B" fillOpacity={1} fill="url(#colorEUR)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
