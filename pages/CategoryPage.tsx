import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockArticles, navigation } from '../data';
import { Category } from '../types';
import { ArrowRight } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Determine category name based on simple slug matching (in real app, use IDs or proper slug mapping)
  // This is a naive implementation for the demo
  let categoryName = '';
  const allCategories = Object.values(Category);
  
  // Find category that loosely matches slug
  const matchedCategory = allCategories.find(c => 
    c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-') === slug?.toLowerCase()
  );

  // If slug is "politica-brasileira", matched might be undefined depending on how strict we are, 
  // so let's check navigation structure for a more robust demo
  const navItem = [...navigation.main, ...navigation.categories].find(n => n.href.includes(slug || ''));
  
  const displayTitle = matchedCategory || (navItem ? navItem.name : 'Categoria');

  // Filter articles
  // Note: For demo purposes, if "politica-brasileira" is clicked, we look for POLITICA_BR enum
  // In a real app, this logic is handled by backend or robust id mapping.
  const filteredArticles = mockArticles.filter(a => {
      if (!slug) return true;
      const catSlug = a.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-');
      // Allow partial match for demo
      return catSlug.includes(slug) || slug.includes(catSlug);
  });
  
  // Fallback: if list is empty (because of strict slug matching in demo), just show all for visual purposes
  // but logically correct it should be empty. I will keep it empty to show "No articles" if no match.
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 border-b border-gray-200 pb-4">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Arquivo</p>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-fab-dark">{displayTitle}</h1>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-9">
             {filteredArticles.length > 0 ? (
               <div className="flex flex-col gap-8">
                 {filteredArticles.map(article => (
                   <article key={article.id} className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 group hover:shadow-md transition-shadow">
                      <div className="w-full md:w-1/3 aspect-video md:aspect-auto overflow-hidden rounded-sm bg-gray-200 relative">
                        <img src={article.imageUrl} alt={article.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                         <div className="flex items-center gap-2 mb-2">
                           <span className="text-xs font-bold text-fab-blue uppercase">{article.category}</span>
                           <span className="text-gray-300 text-xs">•</span>
                           <span className="text-xs text-gray-500">{new Date(article.publishDate).toLocaleDateString()}</span>
                         </div>
                         <Link to={`/artigo/${article.id}`}>
                           <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-fab-gold transition-colors">
                             {article.title}
                           </h2>
                         </Link>
                         <p className="text-gray-600 mb-4 text-sm line-clamp-2 md:line-clamp-3">
                           {article.subtitle}
                         </p>
                         <div className="mt-auto">
                           <Link to={`/artigo/${article.id}`} className="text-sm font-bold text-fab-dark flex items-center gap-1 hover:text-fab-blue">
                             Ler mais <ArrowRight size={14} />
                           </Link>
                         </div>
                      </div>
                   </article>
                 ))}
               </div>
             ) : (
               <div className="text-center py-20 bg-white rounded-sm border border-gray-200">
                 <p className="text-gray-500 text-lg">Nenhuma notícia encontrada nesta categoria.</p>
                 <Link to="/" className="text-fab-blue font-bold mt-4 inline-block hover:underline">Voltar para a Home</Link>
               </div>
             )}
          </div>

          {/* Simple Sidebar */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 sticky top-24">
               <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Categorias Populares</h3>
               <ul className="space-y-2 text-sm text-gray-600">
                 <li><Link to="/categoria/politica-brasileira" className="hover:text-fab-blue block py-1 border-b border-gray-50">Política Brasileira</Link></li>
                 <li><Link to="/categoria/defesa-nacional" className="hover:text-fab-blue block py-1 border-b border-gray-50">Defesa Nacional</Link></li>
                 <li><Link to="/categoria/forca-aerea-brasileira" className="hover:text-fab-blue block py-1 border-b border-gray-50">FAB</Link></li>
                 <li><Link to="/categoria/comunicado-oficial" className="hover:text-fab-blue block py-1 border-b border-gray-50">Comunicados</Link></li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CategoryPage;