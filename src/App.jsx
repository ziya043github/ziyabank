import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import CreditCalculator from './components/CreditCalculator';
import ExchangeRates from './components/ExchangeRates';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <BentoGrid />
            <ExchangeRates />
            <CreditCalculator />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
