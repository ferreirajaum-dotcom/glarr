
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 reveal-delay-1">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-[0.4em] mb-4">Contato B2B</h2>
            <h3 className="text-4xl font-bold text-blue-950 mb-8 font-montserrat">Inicie sua <br />parceria agora.</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <MapPin className="w-6 h-6 text-blue-700 mr-4 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-blue-900">Endereço</h4>
                  <p className="text-gray-500 font-sans">Rua das Indústrias, 450 - Centro<br />Jaraguá do Sul, SC - Brasil</p>
                </div>
              </div>
              <div className="flex items-start group">
                <Phone className="w-6 h-6 text-blue-700 mr-4 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-blue-900">Telefone / WhatsApp</h4>
                  <a 
                    href="https://wa.me/5547998880011" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 font-sans hover:text-blue-600 transition-colors"
                  >
                    +55 (47) 99888-0011
                  </a>
                </div>
              </div>
              <div className="flex items-start group">
                <Mail className="w-6 h-6 text-blue-700 mr-4 shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="font-bold text-blue-900">E-mail Comercial</h4>
                  <a 
                    href="mailto:contato@glar.com.br"
                    className="text-gray-500 font-sans hover:text-blue-600 transition-colors"
                  >
                    contato@glar.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 border border-gray-100 reveal-delay-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => {
              e.preventDefault();
              window.open("https://wa.me/5547998880011", "_blank");
            }}>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome"
                  className="bg-white border-b-2 border-gray-200 p-4 focus:border-blue-500 outline-none transition-all duration-300 font-sans"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Sua Empresa</label>
                <input 
                  type="text" 
                  placeholder="Nome da confecção"
                  className="bg-white border-b-2 border-gray-200 p-4 focus:border-blue-500 outline-none transition-all duration-300 font-sans"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-900">WhatsApp / Telefone</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000"
                  className="bg-white border-b-2 border-gray-200 p-4 focus:border-blue-500 outline-none transition-all duration-300 font-sans"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-900">E-mail</label>
                <input 
                  type="email" 
                  placeholder="contato@empresa.com.br"
                  className="bg-white border-b-2 border-gray-200 p-4 focus:border-blue-500 outline-none transition-all duration-300 font-sans"
                />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-900">Como podemos ajudar?</label>
                <textarea 
                  rows={4}
                  placeholder="Descreva suas necessidades têxteis"
                  className="bg-white border-b-2 border-gray-200 p-4 focus:border-blue-500 outline-none transition-all duration-300 font-sans resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white py-5 font-bold uppercase tracking-[0.3em] flex items-center justify-center transition-all group shadow-xl"
                >
                  <span className="group-hover:text-blue-300 transition-colors">Falar com um Consultor (WhatsApp)</span>
                  <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
