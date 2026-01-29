import React from 'react';
import { ArrowRight, CreditCard, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-ziya-red/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-ziya-blue/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-ziya-accent/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-ziya-accent animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Future of Banking</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              {t('hero.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ziya-red to-ziya-accent">
                {t('hero.subtitle')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-ziya-red text-white rounded-full font-medium hover:bg-red-900 transition-all shadow-lg hover:shadow-ziya-red/30 flex items-center gap-2">
                {t('hero.cta')}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-white/20 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-white/10">
              {[
                { label: 'Users', value: '500K+' },
                { label: 'Transactions', value: '$2B+' },
                { label: 'Countries', value: '30+' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Card Visual */}
          <div className="relative perspective-1000 hidden md:block">
            <div className="relative z-10 transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500 preserve-3d">
              {/* Glass Card */}
              <div className="w-96 h-60 mx-auto bg-gradient-to-br from-gray-900/90 to-black/90 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-ziya-red/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <div className="flex justify-between items-start mb-12">
                  <div className="text-white font-bold text-2xl tracking-wider">ZIYA</div>
                  <CreditCard className="text-white/80" size={32} />
                </div>
                
                <div className="space-y-6">
                  <div className="text-white/60 text-lg tracking-[0.2em]">•••• •••• •••• 4289</div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/40 text-xs uppercase mb-1">Card Holder</div>
                      <div className="text-white font-medium tracking-wide">ZIYA NİYAZOGLU</div>
                    </div>
                    <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                       <div className="w-6 h-6 bg-yellow-400/80 rounded-full -mr-3 mix-blend-screen"></div>
                       <div className="w-6 h-6 bg-red-500/80 rounded-full mix-blend-screen"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-12 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-bounce delay-700">
                <Shield className="text-ziya-blue" size={24} />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl animate-bounce">
                <TrendingUp className="text-ziya-accent" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
