import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-serif font-bold text-gray-200">404</h1>
      <h2 className="text-3xl font-bold text-fab-dark mt-4 mb-4">Página não encontrada</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        O conteúdo que você está procurando pode ter sido removido ou o link está incorreto.
      </p>
      <Link to="/" className="bg-fab-blue text-white px-6 py-3 rounded-sm font-bold hover:bg-fab-dark transition-colors">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;