import React from 'react';

const CategoryBadge = ({ category, className = '' }) => {
  const styles = {
    'Investimentos': 'bg-blue-100 text-blue-800 border-blue-200',
    'Economia': 'bg-blue-100 text-blue-800 border-blue-200',
    'Finanças': 'bg-green-100 text-green-800 border-green-200',
    'Carreira': 'bg-purple-100 text-purple-800 border-purple-200'
  };

  const defaultStyle = 'bg-gray-100 text-gray-800 border-gray-200';

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${styles[category] || defaultStyle} ${className}`}>
      {category}
    </span>
  );
};

export default CategoryBadge;