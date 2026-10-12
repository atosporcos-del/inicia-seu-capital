import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;
  
  return (
    <div className="card p-8 text-center">
      <div className="w-16 h-16 bg-[#0066CC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-[#0066CC]" />
      </div>
      <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
      <p className="text-gray-600 mb-6">{tool.description}</p>
      <Link to={tool.link} className="btn-primary inline-flex items-center gap-2">
        Usar Ferramenta
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default ToolCard;