import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, ArrowRight } from 'lucide-react';

const CreditCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [months, setMonths] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const { t } = useLanguage();
  
  const interestRate = 0.14;

  useEffect(() => {
    const totalInterest = amount * (interestRate * (months / 12));
    const totalAmount = amount + totalInterest;
    const payment = totalAmount / months;
    setMonthlyPayment(payment.toFixed(2));
  }, [amount, months]);

  return (
    <section className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <Calculator size={16} className="text-ziya-red" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Smart Calculator</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{t('calculator.title')}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('calculator.description')}
            </p>
            
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-xl backdrop-blur-lg">
              {/* Amount Slider */}
              <div className="mb-10">
                <div className="flex justify-between mb-4">
                  <label className="text-gray-700 dark:text-gray-200 font-medium">{t('calculator.amount')}</label>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ziya-red to-ziya-accent">{amount} ₼</span>
                </div>
                <input 
                  type="range" 
                  min="300" 
                  max="30000" 
                  step="100" 
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-ziya-red hover:accent-red-700 transition-all"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
                  <span>300 ₼</span>
                  <span>30 000 ₼</span>
                </div>
              </div>

              {/* Duration Slider */}
              <div className="mb-10">
                <div className="flex justify-between mb-4">
                  <label className="text-gray-700 dark:text-gray-200 font-medium">{t('calculator.duration')}</label>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ziya-red to-ziya-accent">{months} ay</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="48" 
                  step="1" 
                  value={months}
                  onChange={(e) => setMonths(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full appearance-none cursor-pointer accent-ziya-red hover:accent-red-700 transition-all"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
                  <span>3 ay</span>
                  <span>48 ay</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('calculator.monthly')}</p>
                    <p className="text-4xl font-bold text-gray-900 dark:text-white">{monthlyPayment} ₼</p>
                  </div>
                  <button className="w-full md:w-auto bg-ziya-red text-white font-medium py-4 px-8 rounded-xl hover:bg-red-900 transition-all shadow-lg hover:shadow-ziya-red/30 flex items-center justify-center gap-2">
                    {t('calculator.order')}
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative hidden lg:block perspective-1000">
            {/* Abstract visual */}
             <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl transform rotate-y-[-12deg] hover:rotate-y-0 transition-transform duration-700 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-ziya-blue/90 to-black/90 dark:from-gray-900 dark:to-black z-10"></div>
                
                {/* Decorative circles */}
                <div className="absolute top-20 right-20 w-64 h-64 bg-ziya-accent/20 rounded-full blur-3xl z-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-ziya-red/20 rounded-full blur-3xl z-20 animate-pulse delay-700"></div>

                <div className="absolute inset-0 z-30 flex flex-col justify-center items-center text-center p-12">
                  <h3 className="text-4xl font-bold text-white mb-6 leading-tight">{t('calculator.visual_title')}</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-md">{t('calculator.visual_desc')}</p>
                  
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">14%</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Annual Rate</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                      <div className="text-2xl font-bold text-white mb-1">0%</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Commission</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCalculator;
