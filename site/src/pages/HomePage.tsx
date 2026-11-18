export default function HomePage() {
  return (
    <>
<div className="flex flex-col w-full relative">
{/* Ambient Tactical Grid Backdrop */}
<div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_15%,rgba(245,185,33,0.18)_0%,transparent_60%)]"></div>
{/* Hero Section */}
<section className="relative px-space-md pt-space-lg pb-space-xl flex flex-col items-center text-center">
{/* Operational Badge */}
<div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container-high rounded-full shadow-[0_0_12px_rgba(245,185,33,0.15)] mb-space-lg">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary-container tracking-widest uppercase">SEGURANÇA PRIVADA &amp; OPERACIONAL 24H</span>
</div>
{/* Official Insignia Crest */}
<div className="relative w-44 h-44 mb-space-md flex items-center justify-center"><div className="absolute inset-0 rounded-full bg-primary-container/10 filter blur-xl scale-95 pointer-events-none"></div><img alt="Brasão Oficial RG Vigilante" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_14px_rgba(245,185,33,0.4)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkrmzCiSvsvGOZPhqyFF1oxKEUGWi9oDIi3uKnAO-THjjd44cJBUfNXSpfD1qy8SBpHA4bQAKJ1DWW6G2SwM5CLyAZxcHrg-XTHIEWztgunflIVkwY-oyGkJDAHlmP2xiii6-s9BViY1fnQJehVZdbbqIm5M2Vj3HeDAAGM4ykbVqbnC2He2vWZ6wxBTOokq5jw0INc85GCOAD9w8Reuzfv5SQHj52XVyFKvq5wUtol5ih6P0hm9XWmQ" /></div>
{/* Tactical HUD Marker */}
<div className="flex items-center gap-space-sm w-36 mb-space-md">
<div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary-container/40"></div>
<span className="material-symbols-outlined text-primary-container text-[14px]">shield</span>
<div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary-container/40"></div>
</div>
{/* Monumental Headline */}
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface uppercase tracking-wider leading-none mb-space-sm max-w-sm">
      Segurança Que Protege <span className="text-primary-container drop-shadow-[0_0_14px_rgba(245,185,33,0.4)]">O Que Importa</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs mb-space-lg">
      Portaria, vigilância armada e desarmada, controle de acesso e segurança tática para eventos com prontidão ininterrupta.
    </p>
{/* CTAs */}
<div className="flex flex-col w-full gap-space-sm max-w-xs">
<a className="w-full h-13 py-3 px-space-md bg-primary-container text-on-primary rounded font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-[0_4px_16px_rgba(245,185,33,0.35)] active:scale-[0.98] transition-transform" data-path="orcamento" href="/contato#orcamento">
<span className="material-symbols-outlined text-[20px]">bolt</span>
<span>Solicitar Orçamento</span>
</a>
<a className="w-full h-13 py-3 px-space-md bg-surface-container-high text-primary-container rounded font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-space-sm shadow-[0_2px_8px_rgba(0,0,0,0.6)] active:scale-[0.98] transition-transform" data-path="whatsapp-direto" href="https://wa.me/5577999939046">
<span className="material-symbols-outlined text-[#22c55e] text-[20px]">chat</span>
<span className="text-on-surface">Falar no WhatsApp</span>
</a>
</div>
</section>
{/* High-Authority Tactical Metrics Grid */}
<section className="px-space-md py-space-md"><div className="flex items-center justify-between mb-space-sm px-1"><span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">NOSSOS NÚMEROS</span><span className="font-label-sm text-label-sm text-primary-container font-semibold">PADRÃO RG</span></div><div className="grid grid-cols-2 gap-space-sm"><div className="bg-surface-container-high rounded p-space-md flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative overflow-hidden"><div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary-container/10 to-transparent"></div><span className="material-symbols-outlined text-primary-container text-[20px] mb-space-xs">groups</span><span className="font-headline-lg text-headline-lg text-primary-container font-bold leading-none tracking-tight">25+</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">Vigilantes Ativos</span></div><div className="bg-surface-container-high rounded p-space-md flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative overflow-hidden"><div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary-container/10 to-transparent"></div><span className="material-symbols-outlined text-primary-container text-[20px] mb-space-xs">domain</span><span className="font-headline-lg text-headline-lg text-primary-container font-bold leading-none tracking-tight">[5]+</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">Clientes Atendidos</span></div><div className="bg-surface-container-high rounded p-space-md flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative overflow-hidden"><div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary-container/10 to-transparent"></div><span className="material-symbols-outlined text-primary-container text-[20px] mb-space-xs">verified_user</span><span className="font-headline-lg text-headline-lg text-primary-container font-bold leading-none tracking-tight">100%</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">Equipe com ficha limpa</span></div><div className="bg-surface-container-high rounded p-space-md flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.4)] relative overflow-hidden"><div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary-container/10 to-transparent"></div><span className="material-symbols-outlined text-primary-container text-[20px] mb-space-xs">schedule</span><span className="font-headline-lg text-headline-lg text-primary-container font-bold leading-none tracking-tight">2h</span><span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mt-1">Cobertura em até 2 horas</span></div></div></section>
{/* Tactical Showcase Banner */}
<section className="px-space-md py-space-md">
<div className="relative w-full rounded overflow-hidden bg-surface-container-low shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
<div className="bg-cover bg-center w-full h-44 relative" data-alt="Modern elite security personnel in tactical black uniforms standing vigilantly in front of a sleek corporate building, golden hour perimeter lights, high contrast, cinematic atmosphere, professional security patrol." style={{backgroundImage: 'url("//lh3.googleusercontent.com/aida-public/AB6AXuC0TTLL1CIOeNtr-Fm7zKPys0cQ-Ri60WX4K2zVSUtdnpuoFXRY3Kj5v3yRp5vxN7WOEv8-HFZdoPaFzoc6fuoSbApcXn9d16Y8fcBX4nSPDLYvb6zoEShHdymCVQgkWuqniEpyTRQ4e1njjGDJ8uFlFWVWKamJiS6agtA1hFB8EfpWVoNCmCtn3oe01cFlRCPJjQYKDux06HamR-wMTwoAEex6Ej852ifdFb0m-c5F&quot")'}}>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary-container tracking-widest uppercase">DISCIPLINA OPERACIONAL</span>
<p className="font-title-md text-title-md text-on-surface uppercase leading-none mt-0.5">Vigilância Ostensiva e Discreta</p>
</div>
<span className="material-symbols-outlined text-primary-container text-[24px]">gpp_good</span>
</div>
</div>
</div>
</section>
{/* Quick Access Solutions (Bento-style Minimal Tactical Cards) */}
<section className="px-space-md py-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-1">
<div>
<span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">MODALIDADES DE SERVIÇO</span>
<h2 className="font-title-md text-title-md uppercase text-on-surface">Soluções Especializadas</h2>
</div>
<a className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider flex items-center gap-0.5" data-path="servicos" href="/servicos">
<span>Ver Todas</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
{/* Solution 1: Eventos */}
<a className="bg-surface-container-high rounded p-space-md flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.5)] active:bg-surface-container transition-colors" data-path="servicos" href="/servicos">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-11 h-11 rounded bg-surface-container-low flex items-center justify-center shrink-0 text-primary-container shadow-inner">
<span className="material-symbols-outlined text-[24px]">celebration</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md uppercase text-on-surface truncate">Segurança para Eventos</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Festivais, feiras, congressos e shows VIP</span>
</div>
</div>
<span className="material-symbols-outlined text-outline shrink-0">arrow_forward</span>
</a>
{/* Solution 2: Condomínios e Empresas */}
<a className="bg-surface-container-high rounded p-space-md flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.5)] active:bg-surface-container transition-colors" data-path="servicos" href="/servicos">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-11 h-11 rounded bg-surface-container-low flex items-center justify-center shrink-0 text-primary-container shadow-inner">
<span className="material-symbols-outlined text-[24px]">corporate_fare</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md uppercase text-on-surface truncate">Vigilância Corporativa</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Condomínios industriais e edifícios comerciais</span>
</div>
</div>
<span className="material-symbols-outlined text-outline shrink-0">arrow_forward</span>
</a>
{/* Solution 3: Portaria & Acesso */}
<a className="bg-surface-container-high rounded p-space-md flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.5)] active:bg-surface-container transition-colors" data-path="servicos" href="/servicos">
<div className="flex items-center gap-space-md min-w-0">
<div className="w-11 h-11 rounded bg-surface-container-low flex items-center justify-center shrink-0 text-primary-container shadow-inner">
<span className="material-symbols-outlined text-[24px]">sensor_door</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md uppercase text-on-surface truncate">Controle de Acesso 24h</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Triagem rigorosa de visitantes e encomendas</span>
</div>
</div>
<span className="material-symbols-outlined text-outline shrink-0">arrow_forward</span>
</a>
</section>
{/* Interactive Tactical Callout (Ready-to-Deploy) */}
<section className="px-space-md py-space-md">
<div className="bg-surface-container-highest rounded p-space-md flex flex-col items-center text-center shadow-[0_8px_24px_rgba(0,0,0,0.6)] relative overflow-hidden">
<div className="absolute -top-12 -left-12 w-28 h-28 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest mb-1">PLANO OPERACIONAL PERSONALIZADO</span>
<h3 className="font-headline-md text-headline-md uppercase text-on-surface leading-tight mb-space-xs">
        Precisa de Cobertura Imediata?
      </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md max-w-xs">
        Montamos o protocolo de vigilância sob medida com dimensionamento de efetivo em até 2 horas.
      </p>
<a className="w-full h-11 bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded flex items-center justify-center gap-space-sm shadow-[0_0_12px_rgba(245,185,33,0.3)] active:bg-tertiary-container transition-colors" data-path="orcamento" href="/contato#orcamento"><span className="material-symbols-outlined text-[18px]">bolt</span><span>Solicitar Orçamento</span></a>
</div>
</section>
{/* Verified Trust Accreditation Block */}
<section className="px-space-md py-space-md"><div className="bg-surface-container-low rounded p-space-md flex flex-col gap-space-xs shadow-[0_2px_8px_rgba(0,0,0,0.5)] border border-outline-variant/30"><div className="flex items-center gap-space-sm mb-0.5"><span className="material-symbols-outlined text-primary-container text-[20px]">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-primary-container font-bold">COMPROMISSO RG</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Equipe uniformizada, treinada e com ficha limpa. Atendimento 24 horas para empresas, condomínios e eventos.</p></div></section>
{/* Tactical Footer */}
<footer className="mt-space-lg px-space-md pt-space-xl pb-space-lg bg-surface-container-lowest flex flex-col items-center text-center">
{/* Footer Logo Brand */}
<div className="w-16 h-16 mb-space-sm flex items-center justify-center"><img alt="RG Vigilante Logo" className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(245,185,33,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkrmzCiSvsvGOZPhqyFF1oxKEUGWi9oDIi3uKnAO-THjjd44cJBUfNXSpfD1qy8SBpHA4bQAKJ1DWW6G2SwM5CLyAZxcHrg-XTHIEWztgunflIVkwY-oyGkJDAHlmP2xiii6-s9BViY1fnQJehVZdbbqIm5M2Vj3HeDAAGM4ykbVqbnC2He2vWZ6wxBTOokq5jw0INc85GCOAD9w8Reuzfv5SQHj52XVyFKvq5wUtol5ih6P0hm9XWmQ" /></div>
<span className="font-headline-md text-headline-md uppercase tracking-wider text-primary-container leading-none">
      RG VIGILANTE
    </span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-widest mt-1 mb-space-md">
      AGENTE E SEGURANÇA • EVENTOS E SERVIÇOS GERAIS
    </span>
{/* Quick Navigation Hierarchy */}
<div className="flex flex-wrap justify-center gap-x-space-md gap-y-space-xs font-label-sm text-label-sm uppercase text-on-surface-variant mb-space-lg max-w-xs">
<a className="hover:text-primary-container transition-colors" data-path="inicio" href="/">Início</a>
<span className="text-surface-container-highest">•</span>
<a className="hover:text-primary-container transition-colors" data-path="quem-somos" href="/quem-somos">Quem Somos</a>
<span className="text-surface-container-highest">•</span>
<a className="hover:text-primary-container transition-colors" data-path="servicos" href="/servicos">Serviços</a>
<span className="text-surface-container-highest">•</span>
<a className="hover:text-primary-container transition-colors" data-path="diferenciais" href="/quem-somos#diferenciais">Diferenciais</a>
<span className="text-surface-container-highest">•</span>
<a className="hover:text-primary-container transition-colors" data-path="eventos-&amp;-fotos" href="#">Galeria</a>
<span className="text-surface-container-highest">•</span>
<a className="hover:text-primary-container transition-colors" data-path="contato" href="/contato">Contato</a>
</div>
{/* Legal & Security Details */}
<div className="flex flex-col gap-1 items-center font-body-sm text-body-sm text-outline"><p className="leading-relaxed">RG VIGILANTE PRIVADA LTDA © 2026</p><p className="text-[11px] text-outline-variant">Prontidão 24 Horas | Todos os Direitos Reservados</p></div>
</footer>
</div>
    </>
  )
}
