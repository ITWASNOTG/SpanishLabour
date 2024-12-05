import React from 'react';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import SEOSchema from './components/SEOSchema';
import { Palmtree } from 'lucide-react';
import { useGoogleAnalytics } from './utils/analytics';

function App() {
  useGoogleAnalytics();

  return (
    <>
      <SEOSchema />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 p-3 rounded-full">
                <Palmtree className="h-12 w-12 text-emerald-600" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
              Calculadora de Vacaciones
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Calcula de forma precisa los días de vacaciones que te corresponden según tu tiempo en la empresa
            </p>
          </header>
          
          <Calculator />
          <FAQ />
          
          <footer className="text-center mt-16">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Calculadora de Vacaciones España
            </div>
            <div className="text-xs text-gray-400 mt-2">
              Herramienta informativa - Consulta siempre con RRHH o tu asesor laboral
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;