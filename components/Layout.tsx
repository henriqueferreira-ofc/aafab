import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Mail, Search } from 'lucide-react';
import { navigation } from '../data';

const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to determine if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-fab-dark">
      {/* Top Bar - Utility & Social */}
      <div className="bg-fab-blue text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden sm:flex gap-4">
            <span>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="text-gray-400">|</span>
            <Link to="/categoria/comunicado-oficial" className="hover:text-fab-gold transition-colors">Comunicados Oficiais</Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-gray-300">Siga-nos:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-fab-gold"><Facebook size={16} /></a>
              <a href="#" className="hover:text-fab-gold"><Twitter size={16} /></a>
              <a href="#" className="hover:text-fab-gold"><Instagram size={16} /></a>
            </div>
            <button className="bg-fab-gold text-fab-blue font-bold px-3 py-1 rounded-sm ml-4 hover:bg-white transition-colors text-xs uppercase tracking-wider">
              Associe-se
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 group">
                <img 
                  src="https://www.aafab.org.br/wp-content/uploads/2019/07/logo-aafab-1.png" 
                  alt="Logo AAFAB" 
                  className="h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-2xl text-fab-blue leading-none tracking-tight group-hover:text-fab-blue/80">AAFAB</span>
                  <span className="text-[0.6rem] uppercase tracking-widest text-gray-500 font-medium hidden sm:block">Amigos da Força Aérea Brasileira</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    isActive(item.href) ? 'text-fab-blue border-b-2 border-fab-gold pb-1' : 'text-gray-600 hover:text-fab-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dropdown simplified for demo */}
              <div className="relative group">
                <button className="flex items-center text-sm font-medium uppercase tracking-wide text-gray-600 hover:text-fab-blue">
                  Mais <ChevronDown size={14} className="ml-1" />
                </button>
                <div className="absolute right-0 w-48 bg-white shadow-lg rounded-sm border border-gray-100 hidden group-hover:block py-2 animate-fade-in">
                  {navigation.categories.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-fab-gray hover:text-fab-blue"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <button className="text-gray-400 hover:text-fab-blue">
                <Search size={20} />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-fab-blue p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 z-50 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-fab-blue hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2 pt-2">
                <span className="px-3 text-xs font-semibold text-gray-400 uppercase">Categorias</span>
                {navigation.categories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-fab-blue hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-fab-blue text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* Column 1: Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-1 rounded-full w-12 h-12 flex items-center justify-center">
                  <img 
                    src="https://www.aafab.org.br/wp-content/uploads/2019/07/logo-aafab-1.png" 
                    alt="Logo AAFAB" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-serif font-bold text-xl">AAFAB</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Promovendo a união, preservando a história e discutindo o futuro da defesa nacional com responsabilidade e ética.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-fab-gold font-bold uppercase tracking-wider text-sm mb-4">Institucional</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/categoria/institucional-aafab" className="hover:text-white">Sobre a AAFAB</Link></li>
                <li><a href="#" className="hover:text-white">Diretoria Executiva</a></li>
                <li><a href="#" className="hover:text-white">Estatuto Social</a></li>
                <li><a href="#" className="hover:text-white">Transparência</a></li>
                <li><a href="#" className="hover:text-white">Associe-se</a></li>
              </ul>
            </div>

            {/* Column 3: Editorials */}
            <div>
              <h3 className="text-fab-gold font-bold uppercase tracking-wider text-sm mb-4">Editorias</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/categoria/politica-brasileira" className="hover:text-white">Política Nacional</Link></li>
                <li><Link to="/categoria/defesa-nacional" className="hover:text-white">Defesa e Segurança</Link></li>
                <li><Link to="/categoria/politica-internacional" className="hover:text-white">Geopolítica</Link></li>
                <li><Link to="/categoria/forca-aerea-brasileira" className="hover:text-white">História da FAB</Link></li>
              </ul>
            </div>

             {/* Column 4: Contact/Newsletter */}
             <div>
              <h3 className="text-fab-gold font-bold uppercase tracking-wider text-sm mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li className="flex items-center gap-2"><Mail size={16} /> contato@aafab.org.br</li>
                <li>Brasília - DF</li>
              </ul>
              
              <h3 className="text-fab-gold font-bold uppercase tracking-wider text-sm mb-2">Newsletter</h3>
              <div className="flex">
                <input type="email" placeholder="Seu e-mail" className="bg-blue-900 text-white px-3 py-2 text-sm w-full focus:outline-none border border-blue-800" />
                <button className="bg-fab-gold text-fab-blue px-3 font-bold hover:bg-white transition-colors">OK</button>
              </div>
            </div>

          </div>
          
          <div className="border-t border-blue-900 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} AAFAB. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <a href="#" className="hover:text-white">Política Editorial</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;