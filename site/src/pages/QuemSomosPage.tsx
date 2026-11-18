export default function QuemSomosPage() {
  return (
    <>
<div className="flex flex-col w-full text-on-surface">
{/* Header Banner & Tactical Intro */}
<section className="relative px-space-md pt-space-lg pb-space-md flex flex-col items-center text-center overflow-hidden">
{/* Tactical Grid Ambient Background Accent */}
<div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f5b921_1px,transparent_1px)] [background-size:16px_16px]"></div>
{/* Top Emblem Badge */}
<div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-surface-container-highest rounded-full shadow-sm mb-space-sm">
<span className="material-symbols-outlined text-[16px] text-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>military_tech</span>
<span className="font-label-sm text-label-sm text-primary-container uppercase tracking-widest">Tradição &amp; Disciplina</span>
</div>
<h2 className="font-headline-xl-mobile text-headline-xl-mobile uppercase tracking-wider text-on-surface font-semibold max-w-xs leading-tight mb-space-xs">
      A Força que Assegura <span className="text-primary-container">Seu Patrimônio</span>
</h2>
<div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-primary-container to-transparent my-space-xs"></div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-space-xs">Forjada sob rígido padrão de disciplina e treinamento operacional contínuo, a <strong className="text-on-surface font-semibold">RG Vigilante</strong> estabelece o ápice em segurança privada preventiva, postura tática e preservação contínua de bens corporativos e residenciais.</p>
{/* Operational Stat Strip */}
<div className="grid grid-cols-3 w-full gap-space-xs mt-space-md bg-surface-container-lowest p-space-xs rounded-xl shadow-inner">
<div className="flex flex-col items-center justify-center p-space-xs bg-surface-container-low rounded">
<span className="font-headline-md text-headline-md text-primary-container font-bold leading-none">100%</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1 text-center">Fardamento Doutrinado</span>
</div>
<div className="flex flex-col items-center justify-center p-space-xs bg-surface-container-low rounded">
<span className="font-headline-md text-headline-md text-primary-container font-bold leading-none">24/7</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1 text-center">Ronda Ostensiva</span>
</div>
<div className="flex flex-col items-center justify-center p-space-xs bg-surface-container-low rounded">
<span className="font-headline-md text-headline-md text-primary-container font-bold leading-none">ZERO</span>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1 text-center">Tolerância Falhas</span>
</div>
</div>
</section>
{/* Section: Missão, Visão & Valores */}
<section className="px-space-md py-space-sm flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs mb-1">
<span className="material-symbols-outlined text-primary-container text-[20px]">shield</span>
<span className="font-label-md text-label-md text-primary-container uppercase tracking-wider">Disciplina &amp; Treinamento</span>
</div>
{/* Card 1: Missão */}
<div className="relative bg-surface-container p-space-md rounded-xl shadow-md overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-container/5 rounded-full pointer-events-none blur-xl"></div>
<div className="flex items-center gap-space-sm mb-space-xs">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[20px]">flag</span>
</div>
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Nossa Missão</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Prover tranquilidade inabalável e proteção ostensiva de alto padrão a empresas, condomínios fechados e megaeventos, garantindo integridade absoluta de perímetros e vidas.
      </p>
</div>
{/* Card 2: Visão */}
<div className="relative bg-surface-container p-space-md rounded-xl shadow-md overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-container/5 rounded-full pointer-events-none blur-xl"></div>
<div className="flex items-center gap-space-sm mb-space-xs">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</div>
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Nossa Visão</h3>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Ser a autoridade e referência máxima em segurança preventiva especializada e serviços integrados de proteção, reconhecida pela excelência em disciplina e treinamento constante de nossos operacionais.</p>
</div>
{/* Card 3: Valores */}
<div className="relative bg-surface-container p-space-md rounded-xl shadow-md">
<div className="flex items-center gap-space-sm mb-space-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
</div>
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Valores Inegociáveis</h3>
</div>
<div className="flex flex-wrap gap-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest text-primary-container rounded-full shadow-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Disciplina</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest text-primary-container rounded-full shadow-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Ética</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest text-primary-container rounded-full shadow-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Lealdade</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest text-primary-container rounded-full shadow-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Responsabilidade</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-highest text-primary-container rounded-full shadow-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Prontidão Tática</span>
</div>
</div>
</div>
</section>
{/* Interactive Tactical Readiness Indicator */}
<section className="px-space-md py-space-sm">
<div className="bg-surface-container-low p-space-md rounded-xl flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="relative flex items-center justify-center">
<span className="w-3.5 h-3.5 rounded-full bg-primary-container animate-ping absolute opacity-75"></span>
<span className="w-3 h-3 rounded-full bg-primary-container relative"></span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Central de Operações RG</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Monitoramento ativo em tempo real</span>
</div>
</div>
<span className="font-label-sm text-label-sm uppercase px-2 py-0.5 bg-surface-container-highest text-primary-container rounded">ATIVO</span>
</div>
</section>
{/* Section: Diferenciais Táticos */}
<section className="px-space-md pt-space-md pb-space-sm flex flex-col gap-space-sm">
<div className="flex flex-col mb-1">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">hotel_class</span>
<span className="font-label-md text-label-md text-primary-container uppercase tracking-wider">Padrão Operacional Superior</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase tracking-wider text-on-surface font-semibold mt-1">
        Diferenciais Táticos
      </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
        Por que as maiores empresas e contratantes confiam sua proteção à RG Vigilante.
      </p>
</div>
{/* Diferencial 1 */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[24px]">sports_martial_arts</span>
</div>
<div className="flex flex-col min-w-0">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface leading-tight">Profissionais Capacitados e Uniformizados</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Treinamento tático e psicológico contínuo em defesa pessoal avançada, contenção não letal, primeiros socorros de emergência e rigorosa conduta legal.
        </p>
</div>
</div>
{/* Diferencial 2 */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[24px]">local_police</span>
</div>
<div className="flex flex-col min-w-0">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface leading-tight">Supervisão Constante 24 Horas</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Viaturas dedicadas de patrulha tática realizando auditorias móveis e rondas diurnas e noturnas ininterruptas nos postos de serviço.
        </p>
</div>
</div>
{/* Diferencial 3 */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[24px]">emergency</span>
</div>
<div className="flex flex-col min-w-0">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface leading-tight">Resposta Rápida &amp; Apoio Tático</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Unidades táticas motorizadas em estado permanente de alerta para intervenção imediata diante de qualquer ameaça ou transposição de barreira.
        </p>
</div>
</div>
{/* Diferencial 4 */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[24px]">receipt_long</span>
</div>
<div className="flex flex-col min-w-0">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface leading-tight">Relatórios &amp; Controle Digital</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Livro de ocorrências digitalizado com registro fotográfico, relatórios periódicos de patrulha e total transparência analítica para a gestão contratante.
        </p>
</div>
</div>
{/* Diferencial 5 */}
<div className="bg-surface-container p-space-md rounded-xl shadow-md flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary-container shadow-sm">
<span className="material-symbols-outlined text-[24px]">handshake</span>
</div>
<div className="flex flex-col min-w-0">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface leading-tight">Contratos Flexíveis Sob Medida</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Soluções customizadas: desde reforços táticos em diárias para eventos corporativos e shows até contratos permanentes para sedes empresariais e galpões.
        </p>
</div>
</div>
</section>
{/* Interactive Protocol Tabs Section */}
<section className="px-space-md py-space-sm">
<div className="bg-surface-container-low p-space-md rounded-xl shadow-md">
<div className="flex items-center justify-between mb-space-sm">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Procedimento Operacional Padrão (POP)</h3>
<span className="font-label-sm text-label-sm text-primary-container uppercase bg-surface-container-highest px-2 py-0.5 rounded">Rigor RG</span>
</div>
{/* Interactive Selector Pills */}
<div className="flex gap-2 mb-space-sm overflow-x-auto pb-1" id="pop-tabs">
<button className="pop-btn px-3 py-1.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider shadow-sm transition-all" type="button">
          1. Triagem &amp; Posto
        </button>
<button className="pop-btn px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider shadow-sm transition-all" type="button">
          2. Ronda Ativa
        </button>
<button className="pop-btn px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider shadow-sm transition-all" type="button">
          3. Gerenciamento
        </button>
</div>
{/* Tab Content Panels */}
<div className="pop-panel bg-surface-container p-space-sm rounded-lg" id="pop-content-pre">
<span className="font-label-md text-label-md text-primary-container uppercase">Inspeção e Controle de Acesso</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Identificação biométrica/documental rigorosa de visitantes, vistoria de veículos e registro imediato de placas e horários sem atritos desnecessários.
        </p>
</div>
<div className="pop-panel hidden bg-surface-container p-space-sm rounded-lg" id="pop-content-ronda">
<span className="font-label-md text-label-md text-primary-container uppercase">Varredura Perimétrica e Bastão Eletrônico</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Pontos de controle RFID com horários não lineares para evitar mapeamento hostil de rotinas por terceiros.
        </p>
</div>
<div className="pop-panel hidden bg-surface-container p-space-sm rounded-lg" id="pop-content-crise">
<span className="font-label-md text-label-md text-primary-container uppercase">Contenção Imediata e Acionamento Tático</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Isolamento do perímetro de perigo, proteção imediata dos VIPs presentes e acionamento integrado das forças públicas e viaturas de apoio RG.
        </p>
</div>
</div>
</section>
{/* Section: Galeria de Destaque "Operações & Eventos" */}
<section className="px-space-md pt-space-md pb-space-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">photo_camera</span>
<span className="font-label-md text-label-md text-primary-container uppercase tracking-wider">Histórico de Campo</span>
</div>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile uppercase tracking-wider text-on-surface font-semibold mt-1">
          Operações &amp; Eventos
        </h2>
</div>
<span className="font-label-sm text-label-sm text-outline uppercase bg-surface-container-highest px-2.5 py-1 rounded">Missões Reais</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
      Registros em campo demonstrando a presença austera, formação estratégica e disciplina da nossa tropa de segurança privada.
    </p>
{/* Visual Card 1: Vigilantes em Formação Tática de Evento */}
<div className="relative bg-surface-container rounded-xl overflow-hidden shadow-md group">
<div className="relative w-full h-48 bg-surface-container-lowest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Equipe tática de vigilantes de segurança privada com fardamento preto impecável e boinas pretas, perfilados em formação disciplinada na entrada de um evento corporativo noturno de grande porte com iluminação âmbar sutil e postura profissional imponente." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQOpfEcbZycj8pc1ekDQZo_BOlVaMFpq8ojkHKKdMSZADuzo21wIsn3wMMikSAhrpYPbnUljGv85HJI2vdYl9ud4mJnsBhQX2406uyBS76Qg4-NeD1e3pcmBvoDN6Kj-d7Nn2Q6zYelX_v3_uQwcU4cPaXGIzXyaapneW35BqjE0QvfZ3u41mdBxCgQ1n6fj2Go8dsp_A2e-Gy9e2aXWh4-xzHIvp3NPfEBEvu0Eg7" />
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30"></div>
<div className="absolute top-3 left-3 bg-surface-container-highest/90 backdrop-blur-md px-2.5 py-1 rounded flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-primary-container text-[14px]">shield</span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Controle de Multidões &amp; Acesso</span>
</div>
</div>
<div className="p-space-md">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Megaeventos &amp; Cerimoniais Executivos</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Linhas de contenção pacífica, varredura antibomba, segurança de palco e custódia velada de celebridades e palestrantes internacionais.
        </p>
</div>
</div>
{/* Visual Card 2: Patrulha Perimétrica & Viatura */}
<div className="relative bg-surface-container rounded-xl overflow-hidden shadow-md group">
<div className="relative w-full h-48 bg-surface-container-lowest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Viatura preta tática de segurança privada com detalhes dourados discretos e giroflex aceso estacionada em frente a um condomínio logístico moderno à noite, com vigilante uniformizado executando ronda perimétrica com lanterna tática de alta intensidade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLdrJQxh5Z4-mkaJAXb_A2Aa4q4yoZ6z3TXMxS48ImzpfPBmBV2Q53yIvAEiaiSwlaGXq80NNxeSM-ORxp05SnmrFH9xHSt2o10oYLNaFXdtMmKSfTZLDIdgDEfVN1tcbLS6VyWbLKRtx4yGG--0sGvrG6-JFnEB4Cdk0WfCC1s_HbQDnFDpSW4w1Gu5prBqreHFdsxD_ekAU0QYYDrD2Vj9_fF2L6bsX1SVhqu29Y" />
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30"></div>
<div className="absolute top-3 left-3 bg-surface-container-highest/90 backdrop-blur-md px-2.5 py-1 rounded flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-primary-container text-[14px]">local_shipping</span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Patrulha Noturna Móvel</span>
</div>
</div>
<div className="p-space-md">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Vigilância Condominial &amp; Industrial</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Inspeção contínua de docas, perímetros industriais desérticos e centros logísticos com monitoramento por rádio criptografado.
        </p>
</div>
</div>
{/* Visual Card 3: Posto de Vigilância em Edifício Corporativo */}
<div className="relative bg-surface-container rounded-xl overflow-hidden shadow-md group">
<div className="relative w-full h-48 bg-surface-container-lowest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Vigilante profissional com terno executivo sob medida e fone de ouvido de comunicação discreto em recepção corporativa de mármore escuro de alto padrão, demonstrando cordialidade firme e vigilância atenta." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3cx8uww2kZ9_4KUpUOOYJ8YnV0zwB1hek541WZ7OPhsaCem83_8lreOZ9J3CQnHtv2Y_bD-RSPYhSZNvUAlreB93mqmHRNafxL0m3I1DpjGhkDAi57D8ue0syWRiZRPzaOuE9ZUFKsuLJyTcciB2JvoMVK0WPranmb12jaGCb1jDSC6llubcvZQfu6b4ubjqxLVdgwSgJ4_rovV65BzlzCjkahQ0l-DbiDAS2Oak_" />
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/30"></div>
<div className="absolute top-3 left-3 bg-surface-container-highest/90 backdrop-blur-md px-2.5 py-1 rounded flex items-center gap-1.5 shadow-sm">
<span className="material-symbols-outlined text-primary-container text-[14px]">corporate_fare</span>
<span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">Proteção Corporativa VIP</span>
</div>
</div>
<div className="p-space-md">
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Portaria Blindada &amp; Recepção Tática</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Aliança harmônica entre polidez e disciplina marcial, preservando a imagem de sofisticação do seu edifício comercial.
        </p>
</div>
</div>
</section>
{/* Interactive Tactical Checklist / Assessment Mini-Tool */}
<section className="px-space-md py-space-sm">
<div className="bg-surface-container p-space-md rounded-xl shadow-md">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">fact_check</span>
<h3 className="font-title-md text-title-md uppercase tracking-wider text-on-surface">Diagnóstico Rápido de Risco</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
        Selecione as vulnerabilidades do seu empreendimento para recomendação do destacamento ideal:
      </p>
<div className="flex flex-col gap-2.5" id="tactical-checklist">
<label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="w-4 h-4 accent-primary-container rounded bg-surface-container-lowest border-none" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Perímetro externo com pouca iluminação</span>
</label>
<label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="w-4 h-4 accent-primary-container rounded bg-surface-container-lowest border-none" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Fluxo diário superior a 150 pessoas/veículos</span>
</label>
<label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="w-4 h-4 accent-primary-container rounded bg-surface-container-lowest border-none" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Necessidade de relatórios analíticos para diretoria</span>
</label>
<label className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
<input className="w-4 h-4 accent-primary-container rounded bg-surface-container-lowest border-none" type="checkbox" />
<span className="font-body-sm text-body-sm text-on-surface">Armazenamento de cargas de alto valor agregado</span>
</label>
</div>
<div className="mt-space-md p-space-sm bg-surface-container-lowest rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Protocolo Sugerido</span>
<span className="font-label-md text-label-md text-primary-container uppercase font-semibold" id="risk-result">Posto Fixo Padrão</span>
</div>
<a className="px-space-sm py-1.5 bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-wider rounded font-bold hover:bg-tertiary-container transition-colors shadow-sm" data-path="orcamento" href="/contato#orcamento">
          Cotar Plano
        </a>
</div>
</div>
</section>
{/* Institutional Call to Action Block */}
<section className="px-space-md pt-space-md pb-space-lg">
<div className="relative bg-surface-container-low p-space-lg rounded-xl shadow-lg flex flex-col items-center text-center overflow-hidden">
<div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-space-sm shadow-sm">
<span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>security</span>
</div>
<h3 className="font-headline-md text-headline-md uppercase tracking-wider text-on-surface font-semibold max-w-xs">
        Pronto Para Blindar Sua Operação?
      </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-space-xs mb-space-md">
        Nossa equipe de especialistas formula uma matriz de segurança customizada sem custo de consultoria prévia.
      </p>
<div className="flex flex-col w-full gap-space-xs">
<a className="w-full h-12 bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-lg flex items-center justify-center font-bold shadow-md hover:bg-tertiary-container transition-all" data-path="servicos" href="/servicos">
<span className="material-symbols-outlined mr-2 text-[20px]">format_list_bulleted</span>
          Conhecer Nossos Planos
        </a>
<a className="w-full h-12 bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider rounded-lg flex items-center justify-center font-semibold shadow-sm hover:bg-surface-bright transition-all" data-path="contato" href="/contato">
<span className="material-symbols-outlined mr-2 text-primary-container text-[20px]">phone_in_talk</span>
          Solicitar Contato Imediato
        </a>
</div>
{/* Trust Seal Footer */}

</div>
</section>
</div>

    </>
  )
}
