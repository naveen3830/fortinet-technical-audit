import React from 'react';

interface HeaderProps {
  title: string;
  source: string;
  overallScore: string;
}

const scoreColorMap: { [key: string]: string } = {
    'A': 'bg-fortinet-green text-white',
    'B': 'bg-fortinet-blue text-white',
    'C': 'bg-fortinet-yellow text-fortinet-extra-dark-grey',
    'D': 'bg-fortinet-red text-white',
};

const Header: React.FC<HeaderProps> = ({ title, source, overallScore }) => {
  const scoreClasses = scoreColorMap[overallScore] || 'bg-fortinet-grey text-white';

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-slate-200">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">{title}</h1>
        <p className="text-slate-500 mt-1">Source: {source}</p>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
         <span className="text-slate-600 font-medium">Overall Score</span>
         <span className={`flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold ${scoreClasses}`}>
            {overallScore}
         </span>
      </div>
    </header>
  );
};

export default Header;