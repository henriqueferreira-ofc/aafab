import React from 'react';
import { Link } from 'react-router-dom';
import { mockArticles } from '../data';
import { Article, Category } from '../types';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredArticle = mockArticles.find(a => a.isFeatured) || mockArticles[0];
  const latestArticles = mockArticles.filter(a => a.id !== featuredArticle.id);

  // Helper component for badges
  const CategoryBadge = ({ category }: { category: Category }) => {
    let colorClass = 'bg-blue-100 text-blue-800';
    if (category === Category.COMUNICADO) colorClass = 'bg-red-100 text-red-800';
    if (category === Category.AAFAB) colorClass = 'bg-fab-gold/20 text-yellow-800';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-medium uppercase tracking-wider ${colorClass}`}>
        {category}
      </span>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Main Featured Article */}
            <div className="lg:col-span-8 group cursor-pointer">
              <Link to={`/artigo/${featuredArticle.id}`}>
                <div className="relative aspect-video overflow-hidden rounded-sm mb-4 shadow-sm">
                  <img 
                    src={featuredArticle.imageUrl} 
                    alt={featuredArticle.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-fab-gold text-fab-blue text-xs font-bold px-2 py-1 uppercase tracking-wider mb-2 inline-block">
                      Destaque
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <CategoryBadge category={featuredArticle.category} />
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {new Date(featuredArticle.publishDate).toLocaleDateString()}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-fab-dark mb-3 leading-tight group-hover:text-fab-blue transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-4">
                    {featuredArticle.subtitle}
                  </p>
                  <span className="text-fab-blue font-bold text-sm uppercase tracking-wide flex items-center gap-1">
                    Ler matéria completa <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </div>

            {/* Sidebar / Top Stories List */}
            <div className="lg:col-span-4 flex flex-col gap-6 border-l border-gray-100 lg:pl-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-fab-dark uppercase tracking-wider text-sm border-b-2 border-fab-gold pb-1">
                  Últimas Notícias
                </h3>
                <Link to="/categoria/politica-brasileira" className="text-xs text-fab-blue hover:underline">Ver todas</Link>
              </div>

              {latestArticles.map(article => (
                <article key={article.id} className="group">
                  <Link to={`/artigo/${article.id}`} className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-200 overflow-hidden rounded-sm">
                       <img src={article.imageUrl} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" alt="" />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <span className="text-xs text-fab-gold font-bold uppercase">{article.category}</span>
                      <h4 className="font-serif font-bold text-sm leading-snug text-gray-800 group-hover:text-fab-blue transition-colors">
                        {article.title}
                      </h4>
                      <span className="text-xs text-gray-400">{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                  </Link>
                </article>
              ))}

              {/* Institutional Box */}
              <div className="mt-4 bg-fab-blue p-6 rounded-sm text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                  <ShieldCheck size={120} />
                </div>
                <h4 className="font-serif font-bold text-xl mb-2 relative z-10">Área do Associado</h4>
                <p className="text-sm text-blue-100 mb-4 relative z-10">Acesse boletins exclusivos, prestação de contas e benefícios da AAFAB.</p>
                <button className="w-full bg-white text-fab-blue font-bold py-2 text-sm rounded-sm hover:bg-fab-gold transition-colors relative z-10">
                  Acessar Portal
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Editorials Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold text-fab-dark flex items-center gap-2">
              <span className="w-2 h-8 bg-fab-gold block rounded-sm"></span>
              Análises & Editorias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* Creating "Fake" editorial cards by reusing articles with different context visual */}
             {mockArticles.slice(0, 3).map((article, idx) => (
               <Link to={`/artigo/${article.id}`} key={`grid-${idx}`} className="bg-white border border-gray-100 shadow-sm rounded-sm hover:shadow-md transition-shadow flex flex-col h-full">
                 <div className="h-48 overflow-hidden relative">
                   <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-0 left-0 bg-fab-blue/90 text-white text-xs px-3 py-1 font-bold uppercase rounded-br-sm">
                     {article.category}
                   </div>
                 </div>
                 <div className="p-6 flex flex-col flex-grow">
                   <h3 className="font-serif font-bold text-lg mb-2 text-fab-dark hover:text-fab-blue transition-colors">
                     {article.title}
                   </h3>
                   <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                     {article.subtitle}
                   </p>
                   <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                     <span className="text-xs text-gray-500 font-medium uppercase">{article.author.name}</span>
                     <ArrowRight size={14} className="text-fab-gold" />
                   </div>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-fab-dark text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl mb-4">Informação com credibilidade e responsabilidade</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Receba análises estratégicas sobre defesa, geopolítica e notícias da AAFAB diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Digite seu melhor e-mail" 
              className="px-4 py-3 text-fab-dark rounded-sm w-full focus:ring-2 focus:ring-fab-gold outline-none"
            />
            <button className="bg-fab-gold text-fab-blue font-bold px-8 py-3 rounded-sm hover:bg-white transition-colors uppercase tracking-wider whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-500">Respeitamos sua privacidade. Cancele a qualquer momento.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;