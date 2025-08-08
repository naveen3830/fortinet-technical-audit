import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  isLink?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon, isLink = false }) => {
  const cardClasses = "block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 h-full border border-slate-200";

  if (isLink) {
    return (
        <a href={`https://${value}`} target="_blank" rel="noopener noreferrer" 
           className={cardClasses}>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex-shrink-0 text-fortinet-blue">
                            {icon}
                        </div>
                        <p className="text-sm font-medium text-slate-500">{title}</p>
                    </div>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-slate-900 break-words">{value}</p>
            </div>
        </a>
    )
  }

  return (
    <div className={`${cardClasses} flex items-center gap-4`}>
        <div className="flex-shrink-0 text-fortinet-blue">
            {icon}
        </div>
        <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-500 truncate">{title}</p>
            <p className="text-xl sm:text-2xl font-bold text-slate-900 truncate">{value}</p>
        </div>
    </div>
  );
};

export default SummaryCard;