export default function ContatoPage() {
  return (
    <>
<div className="flex flex-col w-full text-on-surface">
{/* Operational Status Banner */}
<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-[#22c55e]">CENTRAL TÁTICA ATIVA</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[15px] text-primary-container">timer</span>
<span>RESPOSTA &lt; 15 MIN</span>
</div>
</div>
{/* Header Section */}
<section className="px-space-md pt-space-lg pb-space-md flex flex-col gap-space-xs">
<div className="inline-flex items-center self-start gap-space-xs px-2.5 py-1 rounded bg-primary-container/10">
<span className="material-symbols-outlined text-primary-container text-[16px]" style={{fontVariationSettings: "&quot"}}>bolt</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">ATENDIMENTO IMEDIATO</span>
</div>
<h2 className="font-headline-xl-mobile text-headline-xl-mobile uppercase text-on-surface tracking-wider leading-tight">
      SOLICITE UMA <span className="text-primary-container">ANÁLISE DE RISCO</span> OU ORÇAMENTO
    </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      Dimensionamento operacional sob medida para condomínios, centros logísticos e eventos corporativos de alto padrão.
    </p>
</section>
{/* Form Card */}
<section className="px-space-md pb-space-lg">
<div className="bg-surface-container rounded-xl p-space-md relative overflow-hidden shadow-2xl">
{/* Glow Accent */}
<div className="absolute -top-16 -right-16 w-36 h-36 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[20px]">assignment</span>
<span className="font-title-md text-title-md uppercase tracking-wider text-on-surface">FORMULÁRIO DE ENGAJAMENTO</span>
</div>
<span className="font-label-sm text-label-sm text-primary-container uppercase px-2 py-0.5 rounded bg-surface-container-lowest">PROTOCOLO R-24</span>
</div>
<form className="flex flex-col gap-space-md" id="orcamento-form" onSubmit={(e)=>e.preventDefault()}>
{/* Field: Nome */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="nome">
<span>Nome Completo / Responsável</span>
<span className="text-primary-container">*</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-[18px] text-outline pointer-events-none">person</span>
<input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-3 py-2.5 rounded font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors" id="nome" name="nome" placeholder="Ex: Carlos Mendonça Ramos" required type="text" />
</div>
</div>
{/* Field: Telefone WhatsApp */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="telefone">
<span>Telefone / WhatsApp</span>
<span className="text-primary-container">*</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-[18px] text-[#22c55e] pointer-events-none">call</span>
<input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-3 py-2.5 rounded font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors" id="telefone" maxLength={15} name="telefone"  placeholder="(**)****-****" required type="tel" />
</div>
</div>
{/* Field: E-mail */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="email">
<span>E-mail Corporativo ou Pessoal</span>
<span className="text-primary-container">*</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-[18px] text-outline pointer-events-none">mail</span>
<input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-3 py-2.5 rounded font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors" id="email" name="email" placeholder="carlos@empresa.com.br" required type="email" />
</div>
</div>
{/* Field: Tipo de Serviço */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="servico">
<span>Tipo de Demanda Operacional</span>
<span className="text-primary-container">*</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-[18px] text-primary-container pointer-events-none">shield</span>
<select className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-8 py-2.5 rounded font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-high transition-colors cursor-pointer" id="servico" name="servico" required defaultValue="">
<option className="bg-surface-container text-outline" disabled value="">Selecione o serviço...</option>
<option className="bg-surface-container-lowest text-on-surface" value="portaria">Portaria e Recepção Armada / Desarmada</option>
<option className="bg-surface-container-lowest text-on-surface" value="vigilancia">Vigia &amp; Vigilância Patrimonial Tática</option>
<option className="bg-surface-container-lowest text-on-surface" value="acesso">Controle de Acesso Biométrico &amp; Perimetral</option>
<option className="bg-surface-container-lowest text-on-surface" value="eventos">Segurança para Eventos de Alto Padrão</option>
<option className="bg-surface-container-lowest text-on-surface" value="gerais">Serviços Gerais &amp; Facilities Táticas</option>
<option className="bg-surface-container-lowest text-on-surface" value="outro">Consultoria / Outra Operação</option>
</select>
<span className="material-symbols-outlined absolute right-3 text-[20px] text-outline pointer-events-none">expand_more</span>
</div>
</div>
{/* Field: Mensagem */}
<div className="flex flex-col gap-1">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center justify-between" htmlFor="detalhes">
<span>Detalhes da Demanda / Posto</span>
<span className="font-label-sm text-label-sm text-outline">OPCIONAL</span>
</label>
<textarea className="w-full bg-surface-container-lowest text-on-surface p-3 rounded font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors resize-none" id="detalhes" name="detalhes" placeholder="Informações sobre endereço do posto, turnos necessários, escala ou data do evento..." rows={3}></textarea>
</div>
{/* Submit Button */}
<button className="w-full h-13 py-3 px-space-md bg-primary-container text-on-primary font-title-md text-title-md uppercase tracking-wider rounded font-bold hover:bg-tertiary-container transition-all active:scale-[0.99] flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,185,33,0.35)]" id="btn-submit" type="submit"><span className="material-symbols-outlined text-[20px]">send</span><span>Enviar mensagem</span></button>
{/* Feedback Success State (Hidden by default) */}
<div className="hidden p-space-sm bg-surface-container-lowest rounded flex items-center gap-space-sm" id="form-success"><span className="material-symbols-outlined text-[#22c55e] text-[24px]">check_circle</span><div className="flex flex-col"><span className="font-label-md text-label-md uppercase text-[#22c55e]">Mensagem Enviada</span><span className="font-body-sm text-body-sm text-on-surface-variant">Recebemos sua mensagem! Em breve entraremos em contato.</span></div></div>
</form>
</div>
</section>
{/* Direct Tactical Contacts Section */}
<section className="px-space-md pb-space-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">LINHAS OPERACIONAIS DIRETAS</span>
<span className="font-label-sm text-label-sm text-outline">DISPONÍVEL 24/7</span>
</div>
{/* Contact Cards Grid */}
<div className="grid grid-cols-1 gap-space-xs"><a className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between active:bg-surface-container-high transition-colors" href="tel:+5577999939046"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-primary-container"><span className="material-symbols-outlined text-[22px]">phone_in_talk</span></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">PLANTÃO SUPERVISÃO 24H</span><span className="font-headline-md text-headline-md text-on-surface leading-tight">(77) 99993-9046</span></div></div><span className="material-symbols-outlined text-outline text-[20px]">chevron_right</span></a><a className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between active:bg-surface-container-high transition-colors" href="https://wa.me/5577999939046" target="_blank" rel="noreferrer"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded bg-[#22c55e]/15 flex items-center justify-center text-[#22c55e]"><span className="material-symbols-outlined text-[22px]">chat</span></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-[#22c55e] uppercase tracking-wider">WHATSAPP COMERCIAL RÁPIDO</span><span className="font-body-md text-body-md text-on-surface font-semibold">(77) 99993-9046</span></div></div><div className="px-2 py-1 rounded bg-[#22c55e] text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">ONLINE</div></a><a className="p-space-sm bg-surface-container rounded-lg flex items-center justify-between active:bg-surface-container-high transition-colors" href="mailto:justgomes292@gmail.com"><div className="flex items-center gap-space-sm"><div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center text-primary-container"><span className="material-symbols-outlined text-[22px]">alternate_email</span></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">E-MAIL INSTITUCIONAL</span><span className="font-body-md text-body-md text-on-surface font-medium">justgomes292@gmail.com</span></div></div><span className="material-symbols-outlined text-outline text-[20px]">arrow_outward</span></a><div className="p-space-sm bg-surface-container-lowest rounded-lg flex items-center gap-space-sm"><div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-outline"><span className="material-symbols-outlined text-[22px]">schedule</span></div><div className="flex flex-col"><span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">HORÁRIO OPERACIONAL</span><span className="font-body-sm text-body-sm text-on-surface">[Horário de atendimento 24 horas]</span></div></div></div>
</section>

{/* FAQ Section (Tactical Accordion) */}
<section className="px-space-md pb-space-xl flex flex-col gap-space-sm">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[16px]">help_center</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">ESCLARECIMENTOS OPERACIONAIS</span>
</div>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface tracking-wide">PERGUNTAS FREQUENTES</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tire dúvidas sobre protocolos de implantação, conformidade legal e agilidade.</p>
</div>
<div className="flex flex-col gap-2 pt-space-xs" id="tactical-faq">
{/* Item 1 */}
<div className="bg-surface-container rounded-lg overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none" type="button">
<span className="font-title-md text-title-md uppercase tracking-wider text-on-surface pr-2">1. Como funciona o processo de contratação da RG Vigilante?</span>
<span className="material-symbols-outlined text-primary-container text-[20px] transition-transform duration-200 transform faq-icon">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed bg-surface-container-lowest/60">
          Iniciamos com um diagnóstico presencial de vulnerabilidades perimetrais e análise de fluxo. Em seguida, estruturamos uma Proposta de Diretriz Operacional personalizada, formalizamos o contrato corporativo e mobilizamos a equipe devidamente uniformizada e equipada no prazo acordado.
        </div>
</div>
{/* Item 2 */}
<div className="bg-surface-container rounded-lg overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none" type="button">
<span className="font-title-md text-title-md uppercase tracking-wider text-on-surface pr-2">2. Os profissionais possuem certificação e treinamento específico?</span>
<span className="material-symbols-outlined text-primary-container text-[20px] transition-transform duration-200 transform faq-icon">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed bg-surface-container-lowest/60">
          Sim. Todos os agentes cumprem rigorosos cursos de formação, reciclagem periódica homologada pela Polícia Federal e capacitação interna em gerenciamento de crises, inteligência comportamental, defesa pessoal tática e primeiros socorros.
        </div>
</div>
{/* Item 3 */}
<div className="bg-surface-container rounded-lg overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none" type="button">
<span className="font-title-md text-title-md uppercase tracking-wider text-on-surface pr-2">3. Atendem eventos de pequeno, médio e grande porte?</span>
<span className="material-symbols-outlined text-primary-container text-[20px] transition-transform duration-200 transform faq-icon">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed bg-surface-container-lowest/60">
          Perfeitamente. Dispomos de squads modulares para feiras de negócios, convenções fechadas, eventos VIP com escolta discreta e produções culturais de grande escala, estruturando plano de contingência e barreiras perimetrais.
        </div>
</div>
{/* Item 4 */}
<div className="bg-surface-container rounded-lg overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none" type="button">
<span className="font-title-md text-title-md uppercase tracking-wider text-on-surface pr-2">4. Vocês cobrem postos emergenciais com rapidez?</span>
<span className="material-symbols-outlined text-primary-container text-[20px] transition-transform duration-200 transform faq-icon">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed bg-surface-container-lowest/60">
          Mantemos um contingente de prontidão 24 horas (Grupo Tático Móvel) capaz de assumir postos emergenciais ou reforçar a guarda em caso de sinistro com tempo de resposta recorde na capital e região metropolitana.
        </div>
</div>
{/* Item 5 */}
<div className="bg-surface-container rounded-lg overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none" type="button">
<span className="font-title-md text-title-md uppercase tracking-wider text-on-surface pr-2">5. Como é feita a supervisão e fiscalização dos postos de trabalho?</span>
<span className="material-symbols-outlined text-primary-container text-[20px] transition-transform duration-200 transform faq-icon">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed bg-surface-container-lowest/60">
          A fiscalização é tripla: rondas motorizadas diurnas e noturnas inopinadas, controle eletrônico de bastão de ronda (bastão vigia com GPS) e canal direto com o gestor do contrato via relatório operacional periódico.
        </div>
</div>
</div>
</section>
{/* Client Testimonials Section */}
<section className="px-space-md pb-space-xl flex flex-col gap-space-md">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[16px]">stars</span>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container">REPUTAÇÃO COMPROVADA</span>
</div>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile uppercase text-on-surface tracking-wide">DEPOIMENTOS DE PARCEIROS</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Confiança construída com disciplina e treinamento e integridade inabalável.</p>
</div>
{/* Testimonial Cards Carousel / Stack */}
<div className="flex flex-col gap-space-sm">
{/* Card 1: Condomínio */}
<div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<div className="flex text-primary-container gap-0.5">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
</div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider">CONDOMÍNIO RESIDENCIAL</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
          "A transição de portaria para a RG Vigilante zerou ocorrências de entrada indevida. O alinhamento dos operadores e a postura discreta trouxeram tranquilidade absoluta para os 320 condôminos."
        </p>
<div className="flex items-center gap-3 pt-2">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Close-up professional portrait of a Brazilian condominium manager in his late 40s wearing a dark charcoal blazer in a modern architectural lobby, sharp focus, natural warm lighting, dignified demeanor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB3apfJjTD9yMIyYACC7euRwEvnofNiVDx-XrdSj7VOrKuWqHJ6XxItaPp_XJ-8MpV5nIPpy0b_9NBlV-FuArCVQsv4h2iFlwPNiYtx9XAKOoSgOy-Y-GEaWYWMOgwQ7HChSo9ZCvO_87KBGHKFhXL3YwV64Phu6U3SZuOxGAeNbtq4F735SfvO-_jBlS1x5HFpTFyp6KtUknktj-a7vTE91xXL6PeioB2ENPQnGfG" />
<div className="flex flex-col">
<span className="font-title-md text-title-md uppercase text-on-surface leading-tight">Marcos Vinicius Tavares</span>
<span className="font-body-sm text-body-sm text-outline">Síndico Geral •</span>
</div>
</div>
</div>
{/* Card 2: Produtora de Eventos */}
<div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<div className="flex text-primary-container gap-0.5">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
</div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider">PRODUTORA DE EVENTOS</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">"Coordenamos festivais com mais de 8 mil pessoas e a coordenação de camarins VIP da RG Vigilante é impecável. Comunicação tática ágil, contenção silenciosa e pontualidade e rigor técnico."</p>
<div className="flex items-center gap-3 pt-2">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Editorial portrait of a female executive event producer in black crew turtleneck with headset around neck, confident smile, dimly lit tactical production backstage background, cinematic gold rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl7-qxL-mDbT_RqgupaZmAUzJXvVWgOPa0Rb-RPI2fPtQYYT2pXoy4WvkRjXNK0Y_BFnSQDOik_VcixtM4Zrxtzpf5mMIdj8y_auImpwwyUgdOl5U6QGv2YFHi_wConwqe7c2xhNahT_udqmcnXOUxdnHsI-Dt0XRLwrRO37B_rJwb0ks6x2JdzWNPU6mdcMvhKDLJZ7phAKQbdNVbes9DImVcWmKvfvCV0JPfT1td" />
<div className="flex flex-col">
<span className="font-title-md text-title-md uppercase text-on-surface leading-tight">Camila Esteves</span>
<span className="font-body-sm text-body-sm text-outline">Head de Produção •&nbsp; &nbsp;</span>
</div>
</div>
</div>
{/* Card 3: Centro Logístico */}
<div className="bg-surface-container rounded-xl p-space-md flex flex-col gap-space-sm shadow-md">
<div className="flex items-center justify-between">
<div className="flex text-primary-container gap-0.5">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "&quot"}}>star</span>
</div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider">COMPLEXO LOGÍSTICO</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
          "Controle de carga pesada e checagem de lacres operados com rigor absoluto. Em 18 meses de contrato, reduzimos incidentes de perda perimetral para índice zero. Parceria estratégica."
        </p>
<div className="flex items-center gap-3 pt-2">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Headshot of a supply chain security director in his early 50s wearing safety helmet and modern hi-vis tactical vest against a modern distribution center backdrop at twilight with warm gold architectural lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY7jjp8tmKMOC-Ckpec670k4VrSe0zlX6A8MJWJ7ayydX8XfeFaRuqrbXBePCF3ZT7tGhgwbpJLJkeSgHjPNIxTERiZzgSpQr1ICZTN-64Ni1sIFXnQDUkUYZKm25cuBiLoP-Ap8bPhZUb-CMtypaVEEq5qvTIH9FRL67t8--Kw9RZF_bs27GltJNyEw-7GDP45FuP_JXefaM2hyvcKw5l_S2SD4Ybtdo4rlmrXIvp" />
<div className="flex flex-col">
<span className="font-title-md text-title-md uppercase text-on-surface leading-tight">Roberto Guimarães</span>
<span className="font-body-sm text-body-sm text-outline">Diretor de Prevenção de Perdas •&nbsp;&nbsp;</span>
</div>
</div>
</div>
</div>
</section>
{/* Official Tactical Footer */}
<footer className="px-space-md pt-space-xl pb-space-lg bg-surface-container-lowest flex flex-col items-center text-center gap-space-md">
{/* Shield Logo Badge using Image 1 context */}
<div className="flex flex-col items-center gap-2">
<div className="w-20 h-24 relative flex items-center justify-center p-1">
<img alt="Brasão Oficial RG Vigilante" className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(245,185,33,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkrmzCiSvsvGOZPhqyFF1oxKEUGWi9oDIi3uKnAO-THjjd44cJBUfNXSpfD1qy8SBpHA4bQAKJ1DWW6G2SwM5CLyAZxcHrg-XTHIEWztgunflIVkwY-oyGkJDAHlmP2xiii6-s9BViY1fnQJehVZdbbqIm5M2Vj3HeDAAGM4ykbVqbnC2He2vWZ6wxBTOokq5jw0INc85GCOAD9w8Reuzfv5SQHj52XVyFKvq5wUtol5ih6P0hm9XWmQ" />
</div>
<div className="flex flex-col">
<span className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container tracking-wider uppercase">RG VIGILANTE</span>
<span className="font-label-sm text-label-sm tracking-widest text-outline uppercase">AGENTE • SEGURANÇA • SERVIÇOS GERAIS</span>
</div>
</div>
{/* Divider */}
<div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary-container/40 to-transparent"></div>
{/* Official Corporate Info */}
<div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm max-w-xs"><span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">RG VIGILÂNCIA E SEGURANÇA PATRIMONIAL LTDA</span></div>
{/* Quick Legal Links */}
<div className="flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-wider text-outline pt-space-xs">
<a className="hover:text-primary-container transition-colors" href="#">Termos de Uso</a>
<span>•</span>
<a className="hover:text-primary-container transition-colors" href="#">Privacidade &amp; LGPD</a>
<span>•</span>
<a className="hover:text-primary-container transition-colors" href="#">Compliance</a>
</div>
<div className="pt-2 text-outline/60 font-body-sm text-[10px] tracking-wider uppercase">
      © 2026 RG VIGILANTE. TODOS OS DIREITOS RESERVADOS. DEFESA &amp; DISCIPLINA.
    </div>
</footer>
</div>
{/* Client-side Micro-interactions */}

    </>
  )
}
