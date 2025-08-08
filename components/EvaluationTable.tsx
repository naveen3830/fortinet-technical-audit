

import React from 'react';
import { EvaluationCategory, BragStatus } from '../types';
import StatusIndicator from './StatusIndicator';

interface EvaluationTableProps {
  category: EvaluationCategory;
}

const EvaluationTable: React.FC<EvaluationTableProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
      <h3 className="text-xl font-semibold text-slate-800 p-4 bg-slate-50 border-b border-slate-200">
        {category.category}
        {category.category === "Performance & Core Web Vitals" && (
          <span className="text-base font-normal text-slate-500 ml-2">(1000 pages)</span>
        )}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-slate-500 uppercase bg-slate-100">
            <tr>
              <th scope="col" className="px-6 py-3 w-2/5">Parameter</th>
              <th scope="col" className="px-6 py-3 w-2/5">Expected Outcome</th>
              <th scope="col" className="px-6 py-3 w-1/5">Status</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item, index) => (
              <tr key={index} className="border-t border-slate-200 hover:bg-slate-50 transition-colors duration-150">
                <td className="px-6 py-4 font-medium text-slate-900">{item.parameter}</td>
                <td className="px-6 py-4">{item.expectedOutcome}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <StatusIndicator status={item.brag} />
                    <span>{item.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EvaluationTable;