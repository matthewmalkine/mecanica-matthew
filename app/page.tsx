import Image from "next/image";

const services = [
  { number: "01", title: "Freios e suspensão", text: "Inspeção completa, troca de componentes e ajustes para uma direção segura, estável e silenciosa." },
  { number: "02", title: "Diagnóstico e motor", text: "Leitura eletrônica e análise técnica para encontrar a causa do problema antes de iniciar o reparo." },
  { number: "03", title: "Óleo e manutenção", text: "Cuidados preventivos para proteger o motor, reduzir o desgaste e manter o desempenho do seu carro." },
];

const steps = [
  ["01", "Agende", "Conte o que está acontecendo e escolha o melhor horário."],
  ["02", "Diagnóstico", "Inspecionamos o veículo com equipamentos profissionais."],
  ["03", "Aprovação", "Você recebe a explicação e o orçamento antes do serviço."],
  ["04", "Entrega", "Finalizamos com uma checagem completa antes da retirada."],
];

const faqs = [
  ["Preciso agendar antes?", "Recomendamos o agendamento para garantir o melhor horário. Encaixes são atendidos conforme a disponibilidade da oficina."],
  ["Quanto tempo leva o reparo?", "O prazo depende do diagnóstico e da disponibilidade de peças. Você recebe uma estimativa clara antes de aprovar o serviço."],
  ["Vocês enviam orçamento antes de começar?", "Sim. Explicamos o problema, o serviço indicado e o investimento antes de qualquer reparo adicional."],
  ["Quais veículos vocês atendem?", "Atendemos a maioria das marcas e modelos, de veículos de uso diário a carros premium e de alta performance."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Auto Garage — início"><span className="brand-mark" aria-hidden="true">AG</span><span>AUTO GARAGE</span></a>
        <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#processo">Processo</a><a href="#oficina">A oficina</a><a href="#faq">Dúvidas</a></nav>
        <a className="header-cta" href="#contato">Agendar serviço <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> MECÂNICA DE CONFIANÇA</p>
          <h1>Seu carro.<br /><em>Nossa precisão.</em></h1>
          <p className="hero-description">Manutenção e reparos feitos por especialistas que colocam a segurança, o desempenho e a vida útil do seu veículo em primeiro lugar.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contato">Agendar agora <Arrow /></a><a className="text-link" href="#servicos">Conheça os serviços <span aria-hidden="true">↓</span></a></div>
          <div className="hero-proof"><div className="proof-icon" aria-hidden="true">✓</div><p><strong>Diagnóstico transparente</strong><br />Você aprova antes de qualquer reparo.</p></div>
        </div>
        <div className="hero-visual">
          <Image src="/images/oficina-hero.jpg" alt="Mecânico trabalhando em um automóvel dentro da oficina" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="hero-shade" />
          <div className="open-card"><span className="status-dot" /><div><small>OFICINA ABERTA</small><strong>Seg–Sex · 8h às 18h</strong></div></div>
          <div className="vertical-label">PRECISÃO EM CADA DETALHE</div>
        </div>
      </section>

      <div className="service-ticker" aria-label="Diferenciais da oficina"><span>DIAGNÓSTICO PRECISO</span><b>✦</b><span>SERVIÇO TRANSPARENTE</span><b>✦</b><span>PEÇAS DE QUALIDADE</span><b>✦</b><span>CUIDADO DE VERDADE</span></div>

      <section className="section services" id="servicos">
        <div className="section-heading"><div><p className="eyebrow"><span /> SERVIÇOS</p><h2>Seu carro em<br /><em>boas mãos.</em></h2></div><p>Da revisão preventiva ao diagnóstico de falhas, cuidamos do que importa para você dirigir com segurança e tranquilidade.</p></div>
        <div className="services-grid">
          {services.map((service, index) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div className={`service-icon icon-${index + 1}`} aria-hidden="true"><span /></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contato" aria-label={`Agendar ${service.title}`}>Agendar serviço <Arrow /></a></article>)}
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="process-photo"><Image src="/images/oficina-vista-superior.png" alt="Oficina organizada vista de cima, com carro e ferramentas" fill sizes="(max-width: 900px) 100vw, 50vw" /><div className="photo-tag"><span>+</span><strong>Processo claro.<br />Resultado preciso.</strong></div></div>
        <div className="process-copy"><p className="eyebrow"><span /> COMO FUNCIONA</p><h2>Mecânica sem<br /><em>complicação.</em></h2><p className="process-intro">Do primeiro contato à entrega, você sabe o que está acontecendo em cada etapa.</p><div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div>
      </section>

      <section className="section studio" id="oficina">
        <div className="studio-copy"><p className="eyebrow"><span /> POR QUE ESCOLHER A GENTE</p><h2>Técnica, cuidado<br />e <em>transparência.</em></h2><p>Uma oficina preparada para ouvir, diagnosticar e resolver. Sem pressão, sem termos confusos e sem surpresas no final.</p><ul><li><span>01</span> Profissionais experientes</li><li><span>02</span> Equipamentos modernos</li><li><span>03</span> Comunicação direta</li><li><span>04</span> Capricho na entrega</li></ul></div>
        <div className="studio-gallery"><div className="gallery-main"><Image src="/images/carro-premium.jpg" alt="Automóvel premium em destaque" fill sizes="(max-width: 700px) 100vw, 42vw" /></div><div className="gallery-detail"><Image src="/images/suspensao.jpg" alt="Componente de suspensão automotiva" fill sizes="220px" /></div><div className="gallery-caption"><span>+</span> Cuidado do motor ao acabamento</div></div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-title"><p className="eyebrow"><span /> PERGUNTAS FREQUENTES</p><h2>Antes de trazer<br />seu <em>carro.</em></h2><p>Respostas rápidas sobre agendamento, orçamento e o que esperar do atendimento.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}<b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="cta" id="contato">
        <div className="cta-bg"><Image src="/images/oficina-hero.jpg" alt="" fill sizes="100vw" /></div><div className="cta-overlay" />
        <div className="contact-grid">
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps?q=S%C3%A3o+Paulo%2C%20SP&z=13&output=embed"
              title="Localização da Auto Garage no Google Maps"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-label"><span className="status-dot" /><div><small>NOSSA LOCALIZAÇÃO</small><strong>São Paulo · SP</strong></div></div>
          </div>
          <div className="cta-copy"><p className="eyebrow"><span /> PRONTO PARA VOLTAR À ESTRADA?</p><h2>Vamos colocar<br />seu carro em <em>movimento.</em></h2><p>Fale com a equipe, conte o que seu veículo precisa e solicite seu atendimento.</p><div className="cta-actions"><a className="button button-primary" href="mailto:contato@autogarage.com.br">Solicitar agendamento <Arrow /></a><a className="phone-link" href="tel:+5500000000000"><small>LIGUE PARA NÓS</small><strong>(00) 00000-0000</strong></a></div></div>
        </div>
      </section>

      <footer><div className="footer-main"><div className="footer-brand"><a className="brand" href="#inicio"><span className="brand-mark">AG</span><span>AUTO GARAGE</span></a><p>Manutenção responsável para você seguir em frente com segurança.</p></div><div><small>NAVEGAÇÃO</small><a href="#servicos">Serviços</a><a href="#processo">Processo</a><a href="#oficina">A oficina</a><a href="#faq">Dúvidas</a></div><div><small>CONTATO</small><a href="tel:+5500000000000">(00) 00000-0000</a><a href="mailto:contato@autogarage.com.br">contato@autogarage.com.br</a><p>Segunda a sexta<br />8h às 18h</p></div><div><small>ENDEREÇO</small><p>Rua da Oficina, 100<br />Centro · Sua cidade</p><a href="#contato">Como chegar <Arrow /></a></div></div><div className="footer-bottom"><span>© 2026 Auto Garage. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div></footer>
    </main>
  );
}
