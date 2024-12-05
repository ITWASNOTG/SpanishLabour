import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "¿Cómo se han hecho los cálculos?",
      answer: `En la sección anterior, hemos mencionado cómo nuestra calculadora de vacaciones no disfrutadas utiliza una fórmula matemática sencilla para determinar el número de días de vacaciones que te corresponden.

Es importante destacar que nuestra fórmula solo tiene en cuenta los días laborables de vacaciones que te da tu empresa, es decir, aquellos días que se consideran como trabajados y, por tanto, se tienen en cuenta para el cálculo de días de vacaciones que te corresponden. Esto significa que no se tienen en cuenta los días naturales, sino solo aquellos días que efectivamente has trabajado durante el año.

Para calcular el número de días de vacaciones laborales que nos corresponden, basta con dividir el número de días que nos da nuestra empresa (en este caso, 22 días laborales) por el número de meses del año.

Por ejemplo, si hemos trabajado 5 meses, nos corresponden 9 días de vacaciones (5 meses x 1,8 días por mes). En caso de obtener un resultado decimal, suele redondearse hacia abajo si es inferior a 4 y hacia arriba si es superior. Además, en caso de finiquito se pagan las vacaciones no disfrutadas.

Para el cálculo de vacaciones que te corresponden, nuestra fórmula utiliza la siguiente ecuación:
Número de días de vacaciones a disfrutar = 22 días laborales / 12 meses

Como puedes ver, esta fórmula tiene en cuenta dos factores principales: el número de días laborables al año y el número de meses que llevas trabajando en tu empresa. A partir de estos datos, la fórmula determina cuántos días de vacaciones te corresponden.

Es importante tener en cuenta que esta fórmula solo se aplica a trabajadores con contrato a tiempo completo. Si tienes un contrato de jornada parcial o estás en una situación de ERTE o reducción de jornada, el número de días de vacaciones que te corresponden puede variar y es necesario utilizar una fórmula ligeramente distinta para hacer el cálculo de vacaciones.`
    },
    {
      question: "¿Cuántos días de vacaciones corresponden por ley en España?",
      answer: "En España, por ley corresponden 30 días naturales o 22 días laborables de vacaciones al año. Este es el mínimo legal, aunque algunos convenios colectivos pueden establecer condiciones más favorables."
    },
    {
      question: "¿Cómo se calculan las vacaciones si no he trabajado el año completo?",
      answer: "Se calcula de forma proporcional al tiempo trabajado. Por ejemplo, si has trabajado 6 meses, te corresponderá la mitad de las vacaciones anuales. La fórmula tiene en cuenta los días exactos trabajados para un cálculo preciso."
    },
    {
      question: "¿Se pueden acumular las vacaciones de un año para otro?",
      answer: "Por regla general, las vacaciones deben disfrutarse dentro del año natural. Sin embargo, algunos convenios colectivos pueden establecer excepciones. Es importante consultar tu convenio específico y acordarlo con la empresa."
    },
    {
      question: "¿Los días festivos cuentan como vacaciones?",
      answer: "No, los días festivos oficiales no cuentan como días de vacaciones cuando se calculan los días laborables. Si durante tu periodo de vacaciones hay un festivo, este no se contabiliza como día de vacaciones."
    },
    {
      question: "¿Qué pasa si me pongo enfermo durante las vacaciones?",
      answer: "Si te pones enfermo durante las vacaciones, estos días no se cuentan como vacaciones siempre que presentes la baja médica correspondiente. Podrás disfrutar de estos días en otro momento, incluso fuera del año natural."
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg">
            <HelpCircle className="h-6 w-6 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Preguntas Frecuentes</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group" {...(index === 0 ? { open: true } : {})}>
              <summary className="flex items-center justify-between cursor-pointer list-none p-4 rounded-lg hover:bg-gray-50">
                <h3 className="text-lg font-medium text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform group-open:rotate-180 flex-shrink-0" />
              </summary>
              <div className="mt-4 px-4 text-gray-600 leading-relaxed">
                {faq.answer.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}