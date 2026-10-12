import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#0066CC] border-t-transparent"></div>
    </div>
  );
};

export default LoadingSpinner;