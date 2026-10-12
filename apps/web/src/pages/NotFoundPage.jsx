import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Página não encontrada - Inicia Seu Capital</title>
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-[#0066CC] mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Voltar para Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;