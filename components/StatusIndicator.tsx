import React from 'react';
import { BragStatus } from '../types';

interface StatusIndicatorProps {
  status: BragStatus;
}

const statusColorMap: { [key in BragStatus]: string } = {
  [BragStatus.Good]: 'bg-fortinet-green',
  [BragStatus.NeedsAttention]: 'bg-fortinet-yellow',
  [BragStatus.Bad]: 'bg-fortinet-red',
  [BragStatus.Info]: 'bg-fortinet-blue',
};

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const colorClass = statusColorMap[status] || 'bg-fortinet-grey';
  return (
    <span className={`w-3 h-3 rounded-full flex-shrink-0 ${colorClass}`} title={status}></span>
  );
};

export default StatusIndicator;
