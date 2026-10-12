import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleQuickContact = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Links Institucionais */}
          <div>
            <span className="text-lg font-bold mb-4 block text-[#7FFF00] font-['Montserrat']">
              Links Institucionais
            </span>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-[#7FFF00] transition-colors">Sobre Nós</Link>
              <Link to="/" className="hover:text-[#7FFF00] transition-colors">Política de Privacidade</Link>
              <Link to="/" className="hover:text-[#7FFF00] transition-colors">Termos de Uso</Link>
              <Link to="/contato" className="hover:text-[#7FFF00] transition-colors">Trabalhe Conosco</Link>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <span className="text-lg font-bold mb-4 block text-[#7FFF00] font-['Montserrat']">
              Categorias
            </span>
            <div className="flex flex-col gap-2">
              <Link to="/investimentos" className="hover:text-[#7FFF00] transition-colors">Investimentos</Link>
              <Link to="/economia" className="hover:text-[#7FFF00] transition-colors">Economia</Link>
              <Link to="/carreira" className="hover:text-[#7FFF00] transition-colors">Dicas de Carreira</Link>
              <Link to="/ferramentas" className="hover:text-[#7FFF00] transition-colors">Ferramentas</Link>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <span className="text-lg font-bold mb-4 block text-[#7FFF00] font-['Montserrat']">
              Redes Sociais
            </span>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-[#7FFF00] transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#7FFF00] transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#7FFF00] transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Formulário de Contato Rápido */}
          <div>
            <span className="text-lg font-bold mb-4 block text-[#7FFF00] font-['Montserrat']">
              Contato Rápido
            </span>
            <form onSubmit={handleQuickContact} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7FFF00]"
                required
              />
              <button type="submit" className="btn-secondary flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Inicia Seu Capital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;