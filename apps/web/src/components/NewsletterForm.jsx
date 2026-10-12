import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NewsletterForm = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossas novidades em breve.",
      });
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "flex flex-col sm:flex-row gap-4"}>
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900 ${compact ? 'w-full' : 'flex-grow'}`}
      />
      <button type="submit" className={`btn-secondary flex items-center justify-center gap-2 ${compact ? 'w-full' : ''}`}>
        <Send className="w-4 h-4" />
        Inscrever-se
      </button>
    </form>
  );
};

export default NewsletterForm;