import React from 'react';
import { PartyPopper } from 'lucide-react';

interface ResultCardProps {
  days: number;
}

export default function ResultCard({ days }: ResultCardProps) {
  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl text-white transform transition-all duration-300 hover:scale-102 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <PartyPopper className="h-6 w-6" />
        <h3 className="text-xl font-semibold">¡Resultado!</h3>
      </div>
      <p className="text-4xl font-bold mb-2">
        {days.toFixed(2)} días
      </p>
      <p className="text-blue-50 text-sm">
        Este es el número de días de vacaciones que te corresponden
      </p>
      {days > 0 && (
        <div className="mt-4 pt-4 border-t border-white/20 text-sm text-blue-50">
          Recuerda consultar con RRHH para confirmar el cálculo
        </div>
      )}
    </div>
  );
}