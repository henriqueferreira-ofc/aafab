import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockArticles } from '../data';
import { Calendar, User, Share2, Printer, Tag } from 'lucide-react';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Matéria não encontrada</h2>
        <Link to="/" className="text-fab-blue underline mt-4">Voltar ao início</Link>
      </div>
    );
  }

  // Simple paragraph parser for the demo content
  const contentParagraphs = article.content.split('\n\n').map((para, index) => {
    if (para.startsWith('###')) {
        return <h3 key={index} className="text-2xl font-serif font-bold text-fab-dark mt-8 mb-4">{para.replace('### ', '')}</h3>
    }
    return <p key={index} className="mb-4 text-gray-800 leading-relaxed text-lg">{para}</p>
  });

  return (
    <article className="bg-white">
      {/* Header of the Article */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <Link to={`/categoria/${article.category.toLowerCase().replace(/ /g, '-')}`} className="inline-block bg-fab-blue text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 rounded-sm hover:bg-fab-dark transition-colors">
            {article.category}
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
            {article.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-gray-200 pt-6">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                 <User size={20} />
               </div>
               <div>
                 <p className="text-sm font-bold text-gray-900">{article.author.name}</p>
                 <p className="text-xs text-gray-500 uppercase">{article.author.role}</p>
               </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
               <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(article.publishDate).toLocaleDateString()}</span>
               <span className="hidden md:inline">|</span>
               <span className="italic">Leitura: 4 min</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              <figure className="mb-8">
                <img src={article.imageUrl} alt={article.title} className="w-full h-auto rounded-sm shadow-sm" />
                {article.imageCaption && (
                  <figcaption className="text-sm text-gray-500 mt-2 italic border-l-2 border-fab-gold pl-3">
                    {article.imageCaption}
                  </figcaption>
                )}
              </figure>

              <div className="font-sans text-gray-800">
                 {contentParagraphs}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag size={16} className="text-fab-gold" />
                  {article.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 text-xs rounded-full uppercase hover:bg-gray-200 cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 bg-gray-50 p-6 rounded-sm border-l-4 border-gray-300 text-sm text-gray-600">
                 <strong>Nota da Redação:</strong> Este conteúdo é de caráter informativo e institucional. As opiniões expressas em artigos assinados não refletem necessariamente a visão oficial da AAFAB, mas visam fomentar o debate democrático e qualificado sobre temas de interesse nacional.
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
               {/* Share Tools */}
               <div className="bg-white border border-gray-100 shadow-sm p-6 rounded-sm">
                  <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Compartilhar</h3>
                  <div className="flex gap-2">
                     <button className="flex-1 bg-blue-600 text-white py-2 rounded-sm text-sm font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                       Facebook
                     </button>
                     <button className="flex-1 bg-sky-500 text-white py-2 rounded-sm text-sm font-bold hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
                       Twitter
                     </button>
                     <button className="p-2 border border-gray-200 rounded-sm hover:bg-gray-50 text-gray-600">
                       <Share2 size={18} />
                     </button>
                  </div>
               </div>

               {/* Related or Latest */}
               <div>
                  <h3 className="font-bold text-fab-dark border-b-2 border-fab-gold pb-2 mb-4 uppercase text-sm">
                    Leia Também
                  </h3>
                  <div className="flex flex-col gap-4">
                     {mockArticles.filter(a => a.id !== article.id).slice(0, 3).map(rel => (
                       <Link to={`/artigo/${rel.id}`} key={rel.id} className="group">
                         <div className="flex gap-3">
                           <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                             <img src={rel.imageUrl} className="w-full h-full object-cover" alt="" />
                           </div>
                           <div>
                             <span className="text-[10px] uppercase font-bold text-fab-blue">{rel.category}</span>
                             <h4 className="font-serif font-bold text-sm leading-snug group-hover:text-fab-gold transition-colors mt-1">
                               {rel.title}
                             </h4>
                           </div>
                         </div>
                       </Link>
                     ))}
                  </div>
               </div>

               {/* Institutional Ad */}
               <div className="bg-fab-dark text-white p-6 text-center rounded-sm">
                  <h4 className="font-serif font-bold text-lg mb-2">Apoie a AAFAB</h4>
                  <p className="text-sm text-gray-300 mb-4">Sua associação fortalece nossa representatividade e garante a continuidade de nossas ações.</p>
                  <button className="bg-fab-gold text-fab-blue font-bold px-4 py-2 text-sm rounded-sm hover:bg-white transition-colors w-full">
                    Quero me associar
                  </button>
               </div>
            </div>
        </div>
      </div>
    </article>
  );
};

export default ArticlePage;