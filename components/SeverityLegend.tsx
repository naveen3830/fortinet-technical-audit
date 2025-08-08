import React from 'react';

const scoreMeanings = [
  { score: 'A', meaning: 'World class', color: 'bg-fortinet-green text-white' },
  { score: 'B', meaning: 'Good, can be improved', color: 'bg-fortinet-blue text-white' },
  { score: 'C', meaning: 'Below par, needs attention', color: 'bg-fortinet-yellow text-fortinet-extra-dark-grey' },
  { score: 'D', meaning: 'Rank bad', color: 'bg-fortinet-red text-white' },
];

const severityLevels = [
  { level: 'High', color: 'bg-fortinet-red text-white' },
  { level: 'Medium', color: 'bg-fortinet-yellow text-slate-800' },
  { level: 'Low', color: 'bg-fortinet-green text-white' },
];

const SeverityLegend: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200">
      <h3 className="text-xl font-semibold text-fortinet-red mb-4">Scoring Guide</h3>
      
      <div className="mb-6">
        <h4 className="font-semibold text-slate-700 mb-3">Overall Score</h4>
        <div className="space-y-2 text-sm">
          {scoreMeanings.map(({ score, meaning, color }) => (
            <div key={score} className="flex items-center gap-3">
              <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${color}`}>
                {score}
              </span>
              <span className="text-slate-600">{meaning}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-slate-700 mb-3">Severity</h4>
        <div className="space-y-2 text-sm">
          {severityLevels.map(({ level, color }) => (
            <div key={level} className={`w-full h-8 rounded px-3 flex items-center font-medium ${color}`}>
                {level}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeverityLegend;