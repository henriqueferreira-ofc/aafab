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
      <section className="bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Main Featured Article */}
            <div className="lg:col-span-8 group cursor-pointer">
              <Link to={`/artigo/${featuredArticle.id}`}>
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-fab-gold/90 backdrop-blur-sm text-fab-blue text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Destaque do Dia
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3 text-sm text-slate-500">
                    <CategoryBadge category={featuredArticle.category} />
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1.5 text-slate-400"><Clock size={14} /> {new Date(featuredArticle.publishDate).toLocaleDateString()}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-fab-dark mb-4 leading-tight tracking-tight group-hover:text-fab-blue transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-xl text-slate-600 font-light leading-relaxed mb-6 max-w-3xl">
                    {featuredArticle.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-fab-blue font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                    Ler matéria completa <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </div>

            {/* Sidebar / Top Stories List */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:pl-8 border-l border-slate-100">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-800 uppercase tracking-wider text-sm">
                  Últimas Notícias
                </h3>
                <Link to="/categoria/politica-brasileira" className="text-xs font-medium text-fab-blue hover:text-fab-gold transition-colors">Ver todas</Link>
              </div>

              <div className="flex flex-col gap-6">
                {latestArticles.map(article => (
                  <article key={article.id} className="group cursor-pointer">
                    <Link to={`/artigo/${article.id}`} className="flex gap-5 items-start">
                      <div className="w-28 h-20 flex-shrink-0 bg-slate-200 overflow-hidden rounded-lg shadow-sm">
                        <img src={article.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                      </div>
                      <div className="flex flex-col py-0.5">
                        <span className="text-[10px] text-fab-gold font-bold uppercase mb-1 tracking-wider">{article.category}</span>
                        <h4 className="font-serif font-bold text-sm leading-snug text-slate-800 group-hover:text-fab-blue transition-colors line-clamp-2 mb-2">
                          {article.title}
                        </h4>
                        <span className="text-xs text-slate-400 font-medium">{new Date(article.publishDate).toLocaleDateString()}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Institutional Box */}
              <div className="mt-2 bg-gradient-to-br from-fab-blue to-slate-900 p-8 rounded-2xl text-white relative overflow-hidden shadow-xl group cursor-pointer hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 opacity-[0.08] transform translate-x-1/4 -translate-y-1/4">
                  <ShieldCheck size={180} />
                </div>
                <div className="relative z-10">
                  <h4 className="font-serif font-bold text-2xl mb-3">Área do Associado</h4>
                  <p className="text-sm text-blue-100/80 mb-6 leading-relaxed">Acesse boletins exclusivos, prestação de contas e benefícios da AAFAB.</p>
                  <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-3 text-sm rounded-lg hover:bg-white hover:text-fab-blue transition-all">
                    Acessar Portal
                  </button>
                </div>
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
              <Link to={`/artigo/${article.id}`} key={`grid-${idx}`} className="bg-white rounded-xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group border border-slate-100/50">
                <div className="h-56 overflow-hidden relative">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-fab-blue text-[10px] font-bold px-3 py-1 uppercase tracking-wide rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-xl mb-3 text-slate-800 group-hover:text-fab-blue transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {article.subtitle}
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200"></div> {/* Placeholder avatar */}
                      <span className="text-xs text-slate-500 font-medium">{article.author.name}</span>
                    </div>
                    <ArrowRight size={16} className="text-fab-gold transform group-hover:translate-x-1 transition-transform" />
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