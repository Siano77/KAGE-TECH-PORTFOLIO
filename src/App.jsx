import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Check,
  Cloud,
  Code2,
  Database,
  Globe2,
  Menu,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import './styles.css'

const portrait = '/portrait.png'
const telegramUser = 'https://t.me/heiskagex'
const telegramChannel = 'https://t.me/kagextech'

const services = [
  { number: '01', icon: Globe2, title: 'Web development', text: 'Editorial interfaces and high-performing web products that make complex ideas feel clear.' },
  { number: '02', icon: Cloud, title: 'Cloud solutions', text: 'Practical cloud architecture built for speed, resilience, and the next stage of growth.' },
  { number: '03', icon: ShieldCheck, title: 'Cyber security', text: 'Security-minded systems, threat awareness, and thoughtful hardening from day one.' },
  { number: '04', icon: Database, title: 'Data management', text: 'Reliable data foundations that turn scattered information into useful decisions.' },
  { number: '05', icon: Network, title: 'Networking', text: 'Connected environments designed to move information securely and without friction.' },
  { number: '06', icon: Code2, title: 'Software development', text: 'Purpose-built tools with clean logic, useful feedback loops, and a human point of view.' },
  { number: '07', icon: Sparkles, title: 'AI development', text: 'Focused AI systems that pair automation with context, control, and real value.' },
  { number: '08', icon: Bot, title: 'Bot assistants', text: 'Helpful digital agents that handle the repetitive while keeping the experience personal.' },
]

const capabilities = ['React / Next.js', 'Node.js / APIs', 'Cloud architecture', 'Security principles', 'Data systems', 'AI workflows', 'Automation', 'Network design']

const projects = [
  { index: 'A / 01', title: 'Signal House', type: 'Digital platform', description: 'A calm, precise interface system for turning technical services into a clear client journey.', tags: ['Strategy', 'UI system', 'React'], tone: 'light' },
  { index: 'B / 02', title: 'Atlas Ops', type: 'Cloud & data', description: 'A modular operations layer that makes infrastructure, data, and decisions easier to see.', tags: ['Architecture', 'Data', 'Cloud'], tone: 'dark' },
  { index: 'C / 03', title: 'Sentinel Desk', type: 'Security & automation', description: 'An assistant concept for monitoring signals, surfacing risk, and moving teams forward.', tags: ['AI', 'Security', 'Automation'], tone: 'outline' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="KAGE TECH home">
          <img className="wordmark-mark" src="/kage-logo.png" alt="" />
          <span className="wordmark-name">KAGE<span>TECH</span></span>
        </a>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-contact" href={telegramUser} target="_blank" rel="noreferrer">Telegram me <Send size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy reveal is-visible">
              <p className="eyebrow"><span className="eyebrow-dot" />Independent technology practice <span className="eyebrow-slash">/</span> 2026</p>
              <h1>Building what<br /><em>moves</em> you forward.</h1>
              <p className="hero-lede">KAGE TECH designs the digital systems behind ambitious ideas — from the first line of code to the infrastructure that keeps it moving.</p>
              <div className="hero-actions">
                <a className="button button-solid" href="#work">Explore the work <ArrowDownRight size={17} /></a>
                <a className="text-link" href="#about">The short version <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero-note"><span className="hero-note-line" />Based in the cloud<br />working everywhere</div>
            </div>
            <div className="hero-visual reveal is-visible" style={{ '--delay': '140ms' }}>
              <div className="visual-grid" aria-hidden="true" />
              <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
              <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
              <div className="portrait-frame">
                <img src={portrait} alt="Monochrome portrait representing KAGE TECH" />
                <div className="portrait-label portrait-label-top">K / 001</div>
                <div className="portrait-label portrait-label-bottom">SYSTEMS<br />ARCHITECT</div>
              </div>
              <div className="visual-corner corner-tl" aria-hidden="true" />
              <div className="visual-corner corner-br" aria-hidden="true" />
              <div className="scroll-cue"><span>Scroll to explore</span><ArrowDownRight size={18} /></div>
            </div>
          </div>
          <div className="hero-marquee" aria-hidden="true"><span>WEB</span><span>·</span><span>CLOUD</span><span>·</span><span>SECURITY</span><span>·</span><span>DATA</span><span>·</span><span>AI</span><span>·</span><span>SYSTEMS</span><span>·</span><span>WEB</span></div>
        </section>

        <section id="about" className="about section-pad section-dark">
          <div className="section-intro reveal"><p className="section-kicker">/ 01 — About the practice</p><p className="section-number">01<span>/</span>05</p></div>
          <div className="about-grid">
            <h2 className="reveal">Technical depth.<br /><span>Human clarity.</span></h2>
            <div className="about-body reveal" style={{ '--delay': '100ms' }}><p className="about-lead">KAGE TECH is a multi-disciplinary technology practice for people building something that matters.</p><p>Whether the challenge is a sharper website, a more resilient cloud, safer data, or an assistant that actually helps, the approach is the same: understand the signal, simplify the system, and make it work beautifully.</p><a className="text-link text-link-inverse" href="#services">See the capabilities <ArrowDownRight size={16} /></a></div>
          </div>
          <div className="about-stats reveal" style={{ '--delay': '180ms' }}><div><strong>08</strong><span>Core disciplines</span></div><div><strong>01</strong><span>Clear point of view</span></div><div><strong>∞</strong><span>Ways to make it useful</span></div></div>
        </section>

        <section id="services" className="services section-pad">
          <div className="section-intro reveal"><p className="section-kicker">/ 02 — What I do</p><p className="section-number">02<span>/</span>05</p></div>
          <div className="services-heading reveal"><h2>One practice.<br /><span>Many ways in.</span></h2><p>Technology works best when every layer speaks the same language. These are the disciplines I bring together to make that happen.</p></div>
          <div className="service-list">{services.map(({ number, icon: Icon, title, text }) => <article className="service-row reveal" key={title}><span className="service-number">{number}</span><Icon className="service-icon" size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="service-arrow" size={18} /></article>)}</div>
        </section>

        <section className="capabilities section-pad section-grey">
          <div className="section-intro reveal"><p className="section-kicker">/ 03 — Working toolkit</p><p className="section-number">03<span>/</span>05</p></div>
          <div className="capabilities-grid"><div className="reveal"><h2>A stack that<br /><span>stays curious.</span></h2><p className="capability-note">The tools are always evolving. The principle stays constant: choose what makes the system more useful, more resilient, and easier to live with.</p></div><div className="capability-cloud reveal" style={{ '--delay': '120ms' }}>{capabilities.map((capability, index) => <span key={capability} className={`capability-chip chip-${index + 1}`}>{capability}</span>)}</div></div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-intro reveal"><p className="section-kicker">/ 04 — Selected directions</p><p className="section-number">04<span>/</span>05</p></div>
          <div className="work-heading reveal"><h2>Work with<br /><span>intent.</span></h2><a className="text-link" href="mailto:hello@kagex.tech?subject=Tell%20me%20about%20your%20work">Request the full reel <ArrowUpRight size={16} /></a></div>
          <div className="project-grid">{projects.map(({ index, title, type, description, tags, tone }, projectIndex) => <article className={`project-card project-${tone} reveal`} style={{ '--delay': `${projectIndex * 100}ms` }} key={title}><div className="project-top"><span>{index}</span><span>{type}</span></div><div className="project-art" aria-hidden="true"><span className="art-cross" /><span className="art-ring" /><span className="art-line" /><span className="art-square" /></div><div className="project-info"><h3>{title}</h3><p>{description}</p><div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href="mailto:hello@kagex.tech?subject=Project%20enquiry" aria-label={`Ask about ${title}`}><ArrowUpRight size={19} /></a></article>)}</div>
        </section>

        <section id="contact" className="contact section-pad section-dark">
          <div className="section-intro reveal"><p className="section-kicker">/ 05 — Make something move</p><p className="section-number">05<span>/</span>05</p></div>
          <div className="contact-grid"><div className="reveal"><p className="contact-overline">Have a system in mind?</p><h2>Let's make<br /><em>it real.</em></h2></div><div className="contact-side reveal" style={{ '--delay': '120ms' }}><p>Bring the big idea, the tangled problem, or the first rough sketch. I’ll bring the technical clarity to shape what comes next.</p><a className="button button-light" href={telegramUser} target="_blank" rel="noreferrer">Message on Telegram <Send size={16} /></a><div className="contact-links"><a href={telegramUser} target="_blank" rel="noreferrer"><Send size={15} /> @heiskagex</a><a href={telegramChannel} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> Telegram channel</a><span className="contact-separator">/</span><a href="mailto:hello@kagex.tech">hello@kagex.tech</a></div></div></div>
          <div className="contact-signoff"><span>KAGE TECH / DIGITAL SYSTEMS ARCHITECT</span><span>Available for select collaborations <Check size={14} /></span></div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 KAGE TECH</span><span>Built for the next layer.</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
    </div>
  )
}

export default App
