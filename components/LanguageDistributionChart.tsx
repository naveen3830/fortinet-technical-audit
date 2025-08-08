import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LanguageData } from '../types';

interface LanguageDistributionChartProps {
  data: LanguageData[];
}

const LanguageDistributionChart: React.FC<LanguageDistributionChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-slate-200 h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 5,
            right: 20,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" stroke="#6b7280" />
          <YAxis dataKey="name" type="category" stroke="#6b7280" tick={{ fontSize: 12 }} />
          <Tooltip 
            cursor={{fill: 'rgba(0, 0, 0, 0.05)'}}
            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#1f2937', borderRadius: '0.5rem' }}
          />
          <Legend wrapperStyle={{ color: '#475569' }}/>
          <Bar dataKey="pages" fill="#307fe2" name="Number of Pages"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageDistributionChart;