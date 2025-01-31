"use client";

import { ArrowRight, Users, Heart, Shield, Gift, HandshakeIcon, Target, BadgePercent, ChevronRight, Phone, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


import emailjs from 'emailjs-com';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_pjr1ols', 'template_524tjbo', e.target as HTMLFormElement, 'vd1F3fnBN3iSnypux')
    .then(
      (result) => {
        toast.success('Número de telefone enviado com sucesso!'); // Toast de sucesso
        console.log('Número de telefone enviado:', result.text);
      },
      (error) => {
        toast.error('Erro ao enviar o Número de telefone. Tente novamente.'); // Toast de erro
        console.error('Erro ao enviar Número de telefone:', error.text);
      }
    );
};


export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const getCardColor = (index: number): string => {
    const colors = [
      "bg-blue-600",
      "bg-green-600",
      "bg-primary",
      "bg-accent",
    ];
    return colors[index % colors.length]; // Alterna entre as cores
  };

  const features = [
    {
      title: "Defesa dos direitos familiares",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores e desafios.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      title: "Descontos exclusivos",
      description: "Acesse descontos especiais e vantagens únicas com nossa rede de parceiros em todo o Brasil.",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80",
    },
    {
      title: "Rede de compartilhamento",
      description: "Juntos, fortalecemos os direitos da sua família em todas as etapas da vida.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80",
    },
    {
      title: "Sustentabilidade",
      description: "Trocar e doar, uma forma simples de cuidar do meio ambiente e apoiar famílias.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    },
  ];

  const membershipTypes = [

    {
      title: "Efetivos",
      description: "Famílias com minimo de 6 filhos e se comprometem com o pagamento de uma joia e da quota anual",
      benefits: ["Apenas por indicação", "Descontos exclusivos", "Rede de apoio", "Participação em eventos"],
      highlighted: true,
      icon: Users,
    },
    {
      title: "Aspirantes",
      description: "Famílias com minimo de 4 filhos e se comprometem com o pagamento de uma joia e da quota anual",
      benefits: ["Apenas por indicação", "Acesso à rede de apoio", "Participação em eventos", "Descontos selecionados"],
      icon: Heart,
    },
    {
      title: "Afiliados",
      description: "São as famílias numerosas que atingiram o número mínimo de seis membros, que de forma espontânea solicitam sua associação.",
      benefits: ["Acesso à rede de apoio", "não possuem direito de votar ou ser votados", "Descontos selecionados"],
      icon: Target,
    },
    {
      title: "Beneméritos",
      description: "Assoam-se reconhecidos como associados beneméritos aquelas pessoas ou instituições que prestarem serviços ou realizarem contribuições significativas para a ABFN, como doações ou ações de relevância social. O reconhecimento será feito pelo Conselho de Administração da ABFN.",
      benefits: ["Reconhecimento especial", "Participação em eventos", "Networking"],
      icon: HandshakeIcon,
    },
  ];


  const benefits = [
    {
      icon: Users,
      title: "Comunidade",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores",
    },
    {
      icon: Heart,
      title: "Suporte",
      description: "Acesso a recursos e orientação para fortalecer sua família",
    },
    {
      icon: Shield,
      title: "Proteção",
      description: "Defesa dos direitos e interesses das famílias numerosas",
    },
    {
      icon: Gift,
      title: "Benefícios",
      description: "Descontos exclusivos e vantagens com nossos parceiros",
    },
  ];


  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.length <= 15) {
      setPhoneNumber(formatted);
    }
  };



  return (
    <main className="bg-white ">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-12 md:py-24 relative">
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Bem-vindo à Associação Brasileira de Famílias Numerosas
            </h1>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-orange-100">
              Juntos construímos um futuro melhor e fortalecemos as famílias numerosas no Brasil
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/associe-se"
                className="bg-white text-orange-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Comece Agora</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/sobre"
                className="bg-transparent border-2 border-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 text-center">
                Saber Mais
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* Features benefits Grid */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por que escolher a ABFN?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 hidden md:hidden lg:block sm:block xs:block">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 hidden md:hidden lg:block sm:block xs:block">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade</h3>
              <p className="text-muted-foreground text-xl">
                Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-muted-foreground text-xl">
                Acesso a recursos e orientação para fortalecer sua família
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proteção</h3>
              <p className="text-muted-foreground text-xl">
                Defesa dos direitos e interesses das famílias numerosas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Benefícios</h3>
              <p className="text-muted-foreground text-xl">
                Descontos exclusivos e vantagens com nossos parceiros
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Membership Categories */}
      <section className="py-20 bg-white">
             <div className="container mx-auto px-4">
               <h2 className="text-4xl font-bold text-center mb-4  tracking-wide">
                 Seja um Associado
               </h2>
               <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
                 Escolha a categoria que melhor se adapta à sua família e comece a desfrutar dos benefícios da ABFN.
               </p>
     
             <Link href="/associe-se">
             <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
                 {membershipTypes.map((type, index) => (
                   <div
                     key={type.title}
                     className={`relative overflow-hidden transition-transform duration-300 transform hover:scale-105 shadow-lg p-8 ${getCardColor(index)}`}
                   >
                     <div className="absolute top-0 right-0 w-24 h-24 bg-black opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
     
                     {/* Ícone */}
                     <type.icon className="w-14 h-14 text-white mb-6" />
     
                     {/* Título do Plano */}
                     <h3 className="text-2xl font-extrabold text-white mb-3 uppercase">{type.title}</h3>
     
                     {/* Descrição */}
                     <p className="text-white font-medium mb-6">{type.description}</p>
     
                     {/* Benefícios */}
                     <ul className="space-y-3 text-white">
                       {type.benefits.map((benefit) => (
                         <li key={benefit} className="flex items-center gap-2">
                           <Check className="w-6 h-6 text-white" />
                           <span className="text-lg font-semibold">{benefit}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             </Link>
             </div>
           </section>

  


      

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white mb-[-80px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para fortalecer sua família?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se a nós e faça parte de uma comunidade que entende e valoriza as famílias numerosas.
          </p>
          <Link href="/associe-se">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full text-lg font-semibold">
              Começar Agora <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>



    </main>

  );
}