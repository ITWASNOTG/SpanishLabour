import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, Loader2, Info } from 'lucide-react';
import { calculateVacationDays } from '../utils/calculations';
import { trackEvent } from '../utils/analytics';
import DateInput from './DateInput';
import ResultCard from './ResultCard';
import Tooltip from './Tooltip';

export default function Calculator() {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [totalDays, setTotalDays] = useState<string>('22');
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    setDefaultEndDate();
  }, []);

  const setDefaultEndDate = () => {
    const currentYear = new Date().getFullYear();
    const defaultEndDate = `${currentYear}-12-31`;
    setEndDate(defaultEndDate);
  };

  const handleEndDateChange = (value: string) => {
    if (value === '') {
      setDefaultEndDate();
    } else {
      setEndDate(value);
    }
  };

  const handleCalculate = () => {
    if (startDate && endDate && totalDays) {
      setIsCalculating(true);
      setTimeout(() => {
        const days = calculateVacationDays(startDate, endDate, Number(totalDays));
        setResult(days);
        setIsCalculating(false);
        
        // Track calculation event
        trackEvent(
          'calculate_vacation',
          'calculator',
          'Vacation days calculation',
          days
        );
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm backdrop-filter">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg">
            <CalculatorIcon className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Calcula tus días</h2>
        </div>

        <div className="space-y-6">
          <DateInput
            label="Fecha de incorporación"
            value={startDate}
            onChange={setStartDate}
            max={endDate}
          />

          <div className="relative">
            <DateInput
              label="Fecha de finalización"
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate}
            />
            <Tooltip content="Por defecto se usa el 31 de diciembre del año actual">
              <Info className="h-4 w-4 text-gray-400 absolute right-3 top-9 cursor-help" />
            </Tooltip>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Días de vacaciones anuales
              </label>
              <Tooltip content="En España son 30 días naturales o 22 laborables por ley">
                <Info className="h-4 w-4 text-gray-400 cursor-help" />
              </Tooltip>
            </div>
            <div className="relative">
              <input
                type="number"
                value={totalDays}
                onChange={(e) => setTotalDays(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                min="1"
                step="0.5"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                días
              </span>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={isCalculating || !startDate || !endDate || !totalDays}
            className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
          >
            {isCalculating ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Calculando...
              </>
            ) : (
              'Calcular días'
            )}
          </button>

          {result !== null && <ResultCard days={result} />}
        </div>
      </div>
    </div>
  );
}