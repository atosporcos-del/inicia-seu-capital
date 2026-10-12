import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useToast } from '@/components/ui/use-toast';
import NewsletterForm from '@/components/NewsletterForm';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pelo contato. Responderemos em breve.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - Inicia Seu Capital</title>
        <meta name="description" content="Entre em contato conosco. Estamos aqui para ajudar você em sua jornada financeira." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0066CC] to-[#0052a3] py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-xl">Estamos aqui para ajudar você</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="card p-8"
              >
                <h2 className="text-3xl font-bold mb-6">Envie sua Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] text-gray-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC] resize-none text-gray-900"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="card p-8">
                  <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#0066CC] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <p className="text-gray-600">contato@iniciaseucapital.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#0066CC] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Telefone</h3>
                        <p className="text-gray-600">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#0066CC] mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Localização</h3>
                        <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                         className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center hover:bg-[#0052a3] transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                         className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center hover:bg-[#0052a3] transition-colors">
                        <FaInstagram className="w-6 h-6" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                         className="w-12 h-12 bg-[#0066CC] text-white rounded-full flex items-center justify-center hover:bg-[#0052a3] transition-colors">
                        <FaTwitter className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="card p-8">
                  <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
                  <p className="text-gray-600 mb-6">
                    Inscreva-se para receber conteúdo exclusivo
                  </p>
                  <NewsletterForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;