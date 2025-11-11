import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Shield, MapPin, Clock, Smartphone, Wrench, Car, Bike, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function JFTechLandingPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-900">JF Tech Rastreamento</h1>
          <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
            <a href="https://wa.me/5511948249533?text=Olá!%20Quero%20fazer%20um%20rastreamento%20com%20a%20JF%20Tech!">
              <Phone className="mr-2 h-4 w-4" /> Fale no WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold mb-4">Proteja seu veículo com a JF Tech Rastreamento Veicular</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Monitore em tempo real, bloqueie à distância e tenha suporte 24h para sua segurança e tranquilidade.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3" asChild>
            <a href="https://wa.me/5511948249533?text=Olá!%20Quero%20fazer%20um%20rastreamento%20com%20a%20JF%20Tech!">💬 Quero Rastrear Agora</a>
          </Button>
        </motion.div>
      </section>

      {/* Benefícios */}
      <section className="py-20 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Segurança e controle total nas suas mãos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Smartphone, title: "Bloqueio via aplicativo", desc: "Controle total do seu veículo onde estiver." },
            { icon: Clock, title: "Monitoramento 24h", desc: "Veja localização exata e trajeto percorrido." },
            { icon: MapPin, title: "Histórico de rotas", desc: "Acompanhe todos os percursos feitos." },
            { icon: Shield, title: "Suporte humano 24h", desc: "Atendimento rápido e eficiente sempre que precisar." },
            { icon: Car, title: "Carros e Motos", desc: "Compatível com todos os tipos de veículos." },
            { icon: Wrench, title: "Instalação rápida", desc: "Agendamento simples e instalação segura." }
          ].map((b, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6 flex flex-col items-center">
                <b.icon className="h-10 w-10 text-blue-700 mb-3" />
                <h4 className="text-lg font-semibold mb-2">{b.title}</h4>
                <p>{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Como Funciona */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-10">Simples, rápido e seguro</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", text: "Fale com a JF Tech pelo WhatsApp." },
            { step: "2", text: "Agendamos a instalação do rastreador." },
            { step: "3", text: "Você começa a monitorar em tempo real." }
          ].map((s, i) => (
            <div key={i} className="bg-white text-blue-900 rounded-2xl p-6 shadow-lg">
              <div className="text-5xl font-bold mb-3 text-green-500">{s.step}</div>
              <p className="text-lg font-medium">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3" asChild>
            <a href="https://wa.me/5511948249533?text=Olá!%20Quero%20fazer%20um%20rastreamento%20com%20a%20JF%20Tech!">🚀 Fale Agora com um Especialista</a>
          </Button>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Planos acessíveis para todos os perfis</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Car, title: "Carros", price: "R$49,90/mês", desc: "Rastreamento + App + Bloqueio remoto" },
            { icon: Bike, title: "Motos", price: "R$39,90/mês", desc: "Localização + Suporte 24h" },
            { icon: Truck, title: "Frotas", price: "Sob consulta", desc: "Gestão completa e relatórios personalizados" }
          ].map((p, i) => (
            <Card key={i} className="shadow-md border-t-4 border-green-500">
              <CardContent className="p-6 flex flex-col items-center">
                <p.icon className="h-10 w-10 text-blue-700 mb-3" />
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="text-green-600 font-bold text-lg mb-2">{p.price}</p>
                <p className="mb-4">{p.desc}</p>
                <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href="https://wa.me/5511948249533?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos%20da%20JF%20Tech!">Solicitar Cotação</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-100 py-20 text-center">
        <h3 className="text-3xl font-bold text-blue-900 mb-10">Clientes que confiam na JF Tech</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { text: "Tive meu carro recuperado em menos de 30 minutos. Atendimento nota 10!", author: "Carlos M., São Paulo" },
            { text: "O app é muito fácil de usar, recomendo demais!", author: "Juliana S., Guarulhos" }
          ].map((d, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6">
                <p className="italic mb-3">“{d.text}”</p>
                <p className="font-semibold text-blue-700">— {d.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-green-500 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">🚨 Não espere perder para se proteger!</h3>
        <p className="text-lg mb-6">Tenha rastreamento 24h e controle total do seu veículo com a JF Tech.</p>
        <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-6 py-3" asChild>
          <a href="https://wa.me/5511948249533?text=Olá!%20Quero%20proteger%20meu%20veículo%20com%20a%20JF%20Tech!">💬 Falar Agora no WhatsApp</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p>JF Tech Rastreamento Veicular © 2025 - Todos os direitos reservados</p>
        <p>📍 São Paulo e Região | 📞 (11) 94824-9533 | Atendimento 24h</p>
      </footer>
    </div>
  );
}
