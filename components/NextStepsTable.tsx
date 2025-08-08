
import React from 'react';
import { NextStepItem } from '../types';

interface NextStepsTableProps {
  steps: NextStepItem[];
}

const NextStepsTable: React.FC<NextStepsTableProps> = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full table-fixed text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-500 uppercase bg-slate-100">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-1/2">Task</th>
                        <th scope="col" className="px-6 py-3"># of Pages</th>
                        <th scope="col" className="px-6 py-3">Timeline</th>
                        <th scope="col" className="px-6 py-3">Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {steps.map((step) => (
                        <tr key={step.id} className="border-t border-slate-200 hover:bg-slate-50 transition-colors duration-150">
                            <td className="px-6 py-4 font-medium text-slate-900 break-words">{step.task}</td>
                            <td className="px-6 py-4">{step.pages}</td>
                            <td className="px-6 py-4">{step.timeline}</td>
                            <td className="px-6 py-4">{step.owner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default NextStepsTable;