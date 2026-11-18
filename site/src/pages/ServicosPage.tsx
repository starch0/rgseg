export default function ServicosPage() {
  return (
    <>
<div className="flex flex-col w-full px-space-md space-y-space-lg">
{/* Section Tactical Header */}
<div className="flex flex-col items-center text-center pt-space-sm">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-container/15 text-primary-container mb-space-xs">
<span className="material-symbols-outlined text-[14px]">military_tech</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">SOLUÇÕES INTEGRADAS</span>
</div>
<h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface uppercase tracking-wide">
      Nossos Serviços Especializados
    </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-1">Prontidão inabalável, rigor operacional e excelência em disciplina e treinamento para proteger seus bens e pessoas.</p>
{/* Tactical HUD Center Rule */}
<div className="w-full max-w-[200px] h-[2px] mt-space-md bg-gradient-to-r from-transparent via-primary-container/60 to-transparent flex items-center justify-center">
<div className="w-1.5 h-1.5 rotate-45 bg-primary-container"></div>
</div>
</div>
{/* Operational Filter / Quick Navigation Bar */}
<div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
<button className="svc-tab px-3 py-1.5 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider whitespace-nowrap shadow-sm" type="button">
      Todos (7)
    </button>
<button className="svc-tab px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-wider whitespace-nowrap" type="button">
      Patrimonial
    </button>
<button className="svc-tab px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-wider whitespace-nowrap" type="button">
      Eventos
    </button>
<button className="svc-tab px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-wider whitespace-nowrap" type="button">
      Facilities
    </button>
</div>
{/* Tactical Image Showcase Strip */}
<div className="w-full rounded-xl overflow-hidden bg-surface-container-low relative shadow-md">
<div className="relative h-44 w-full">
<img className="w-full h-full object-cover" data-alt="Tactical security officer in professional black tactical gear with golden badge standing at an executive building entrance during twilight, cinematic lighting, ultra-sharp focus, cinematic ambiance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcbVDXIJ4luo9KjepKLQ5b7lSdkWT3XmTW2oZtw_oMFqNyF-02aEMXRdo2o2U4n80OlsJvtYo0Cjw9tdbE3M-iQV5iaM6YvWE8N6_hn6TFwFDnRDqKv8NqhKeqqKiBe30j4c4mi3F4GYmpz_EoBVv33KDqrIs2xi7kb6M3IUOdg0nkplh9xblzbyHDljo6VWqNPVjlfql9wt-5Dzz8jX0yOHRZCkQQh9Ujn9iTXV9s" />
<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest block">PADRÃO RG DE FORÇA</span>
<span className="font-title-md text-title-md text-on-surface uppercase">Prontidão Técnica Imediata</span>
</div>
<div className="h-8 w-8 rounded bg-surface/90 text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
</div>
</div>
</div>
{/* Services Grid Matrix */}
<div className="flex flex-col space-y-space-md" id="services-container">
{/* 1. Portaria e Recepção */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="patrimonial">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">door_front</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 01</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Portaria e Recepção</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Controle rigoroso de fluxo de pedestres e veículos, cordialidade de recepção e prontidão operacional com registro digital de acessos.
      </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">PROTOCOLO PREVENTIVO</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
{/* 2. Vigia e Rondas Noturnas */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="patrimonial">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">nightlight</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 02</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Vigia e Rondas Noturnas</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Patrulhamento ostensivo preventivo, rondas com bastão eletrônico geolocalizado e monitoramento ostensivo de perímetros vulneráveis.
      </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">BASTÃO ELETRÔNICO</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
{/* 3. Vigilância Patrimonial */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="patrimonial">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">shield</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 03</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Vigilância Patrimonial</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Proteção dedicada a galpões logísticos, indústrias, condomínios comerciais e residenciais com agentes de perfil tático imponente.
      </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">GESTÃO DE RISCOS</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
{/* 4. Controle de Acesso */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="patrimonial">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">badge</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 04</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Controle de Acesso</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Triagem biométrica, identificação por reconhecimento facial, conferência de crachás, vistorias em veículos e rastreabilidade total.
      </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">TRIAGEM AVANÇADA</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
{/* 5. Agente de Segurança Privada */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="patrimonial">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">security</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 05</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Agente de Segurança Privada</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">Profissionais de alta prontidão com treinamento técnico especializado, conduta exemplar e capacitação em gerenciamento de contingências.</p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">ALTA PRONTIDÃO</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
{/* 6. Segurança para Eventos */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="eventos">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">festival</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 06</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Segurança para Eventos</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Gestão de multidões e controle de acesso para shows, congressos corporativos, camarotes e festas VIP com discrição e autoridade.
      </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">PLANILHA TÁTICA</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
{/* 7. Serviços Gerais & Facilities */}
<article className="service-item bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between shadow-md relative overflow-hidden group" data-category="facilities">
<div className="flex items-start justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">cleaning_services</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest block">MÓDULO 07</span>
<h2 className="font-title-md text-title-md text-on-surface uppercase leading-tight">Serviços Gerais &amp; Facilities</h2>
</div>
</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-primary-container">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">24h Ativo</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        Apoio operacional, zeladoria tática e conservação predial integrada para manter ambientes empresariais impecáveis e organizados.
      </p>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">ZELADORIA INTEGRADA</span>
<button className="px-space-md py-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all flex items-center gap-1.5" type="button">
<span>Contratar</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</article>
</div>
{/* Operational Differentiation Bento Box */}
<div className="bg-surface-container-low rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">PADRÃO RG VIGILANTE</span>
<span className="material-symbols-outlined text-primary-container text-[20px]">verified</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-sm bg-surface-container rounded flex flex-col justify-center">
<span className="font-headline-lg text-headline-lg text-primary-container font-headline-md leading-none">100%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">Ficha Limpa &amp; Antecedentes</span>
</div>
<div className="p-space-sm bg-surface-container rounded flex flex-col justify-center">
<span className="font-headline-lg text-headline-lg text-primary-container font-headline-md leading-none">PADRÃO</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase mt-1">UniforMIZADO E BEM TREINADO.</span>
</div>
</div>
</div>
{/* Custom Plan CTA Banner */}
<div className="rounded-xl p-space-md bg-gradient-to-br from-primary-container/20 via-surface-container-high to-surface-container-low relative shadow-xl overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary-container/10 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col space-y-space-sm">
<div className="flex items-center gap-2 text-primary-container">
<span className="material-symbols-outlined text-[24px]">contact_support</span>
<span className="font-label-md text-label-md uppercase tracking-wider">OPERAÇÃO SOB MEDIDA</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface uppercase">
        Precisa de uma operação personalizada?
      </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
        Montamos seu plano tático exclusivo avaliando vulnerabilidades físicas, perímetro e demanda de contingência.
      </p>
<div className="pt-space-xs flex flex-col sm:flex-row gap-space-sm"><a className="h-12 w-full flex items-center justify-center gap-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow hover:bg-tertiary-container transition-all" href="https://wa.me/5577999939046" target="_blank"><span className="material-symbols-outlined text-[20px]">chat</span><span>Falar com Consultor</span></a><a className="h-12 w-full flex items-center justify-center gap-2 rounded bg-surface-container text-primary-container font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-highest transition-all" data-path="orcamento" href="/contato#orcamento"><span className="material-symbols-outlined text-[20px]">assignment</span><span>Solicitar Orçamento</span></a></div>
</div>
</div>
{/* Interactive Modal for Details & Direct Hiring */}
<div className="hidden fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md p-space-md" id="service-modal">
<div className="bg-surface-container rounded-xl w-full max-w-lg p-space-md shadow-2xl relative flex flex-col space-y-space-md max-h-[85vh] overflow-y-auto">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-primary-container">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest">ESPECIFICAÇÃO OPERACIONAL</span>
</div>
<button className="w-8 h-8 rounded bg-surface-container-highest text-on-surface-variant hover:text-on-surface flex items-center justify-center" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-1" id="modal-title">Título do Serviço</h2>
<p className="font-body-md text-body-md text-on-surface-variant" id="modal-desc">Descrição estendida do protocolo tático e escopo de atuação.</p>
</div>
<div className="p-space-sm rounded bg-surface-container-lowest space-y-2">
<span className="font-label-sm text-label-sm text-primary-container uppercase block tracking-wider">GARANTIAS RG VIGILANTE:</span>
<ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
            Substituição emergencial em até 2 horas
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
            Supervisão móvel com viatura 24 horas por dia
          </li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[16px]">check_circle</span>
            Uniformização impecável e EPIs táticos completos
          </li>
</ul>
</div>
<div className="pt-space-xs flex flex-col gap-2">
<a className="h-12 w-full flex items-center justify-center gap-2 rounded bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow" data-path="orcamento" href="/contato#orcamento" id="modal-action-btn">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Solicitar Este Serviço</span>
</a>
<button className="h-10 w-full flex items-center justify-center rounded text-on-surface-variant font-label-sm text-label-sm uppercase hover:text-on-surface" type="button">
          Voltar para a Lista
        </button>
</div>
</div>
</div>
<footer className="pt-space-sm pb-space-md text-center flex flex-col items-center space-y-1 text-on-surface-variant/70 border-t border-surface-container-high"><div className="flex items-center gap-2"><span className="font-label-sm text-label-sm text-primary-container uppercase tracking-wider">RG VIGILANTE &amp; SEGURANÇA</span></div><p className="font-body-sm text-[11px] text-outline/60">Todos os direitos reservados • Excelência, disciplina e treinamento.</p></footer></div>

    </>
  )
}
