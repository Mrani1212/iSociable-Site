import { useEffect, useState } from 'react';
import { ArrowUpRight, BarChart3, Check, CircleCheck, Instagram, Linkedin, Menu, Sparkles, Target, Users, Video, X, Youtube } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import logoPath from '@assets/ChatGPT_Image_Aug_10,_2026,_02_49_58_AM_1786344648462.png';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#process' },
  { label: 'About', href: '#about' },
];

const contactEmail = 'Mehdi@iSociable.com';
const contactHref = `mailto:${contactEmail}`;

const services = [
  ['Strategy', 'Influencer strategy', 'Custom campaign strategies based on your audience, goals, and budget.', Target],
  ['Talent', 'Creator sourcing', 'We find and carefully evaluate creators who genuinely align with your brand.', Users],
  ['Launch', 'Campaign management', 'Outreach, negotiations, approvals, timelines, and publishing — handled.', Sparkles],
  ['Studio', 'Content creation', 'Authentic social content that earns attention and inspires action.', Video],
  ['Signal', 'Performance tracking', 'Clear views into engagement, reach, conversions, and campaign health.', BarChart3],
  ['Network', 'Brand partnerships', 'Meaningful, long-term relationships between brands and trusted creators.', CircleCheck],
] as const;

function scrollToId(href: string, close?: () => void) {
  close?.();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Logo({ footer = false }: { footer?: boolean }) {
  return <a href="#top" onClick={(event) => { event.preventDefault(); scrollToId('#top'); }} className={`logo-lockup ${footer ? 'mb-4' : ''}`} data-testid={`link-logo-${footer ? 'footer' : 'header'}`}><img src={logoPath} alt="iSociable" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed top-0 z-50 w-full border-b border-[hsl(var(--border)/.7)] bg-[hsl(var(--background)/.88)] backdrop-blur-xl">
    <div className="container-wide flex h-[76px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); scrollToId(item.href); }} className="nav-link" data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}
      </nav>
       <a href={contactHref} className="btn btn-primary hidden px-5 py-3 md:inline-flex" data-testid="link-header-cta">Let’s work together <ArrowUpRight size={16} /></a>
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" className="rounded-full p-2 md:hidden" data-testid="button-mobile-menu">{open ? <X size={24} /> : <Menu size={24} />}</button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-menu px-5 pb-5 pt-3 md:hidden" aria-label="Mobile navigation">
      {navItems.map((item) => <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); scrollToId(item.href, () => setOpen(false)); }} className="block border-b border-[hsl(var(--border))] py-4 font-semibold" data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}
       <a href={contactHref} onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full" data-testid="link-mobile-cta">Let’s work together <ArrowUpRight size={16} /></a>
    </nav>}
  </header>;
}

function Hero() {
  return <section id="top" className="hero-grid relative pt-32 md:pt-40">
    <div className="container-wide grid items-center gap-8 lg:grid-cols-[1.02fr_.98fr]">
      <div className="reveal max-w-[650px]">
        <div className="eyebrow mb-6 flex items-center gap-2"><span className="h-px w-8 bg-[hsl(var(--primary))]" />Influence, aligned</div>
        <h1 className="display text-[clamp(3.6rem,7.5vw,7.1rem)] leading-[.87]">Influence that<br /><span className="text-[hsl(var(--primary))]">creates</span> real impact.</h1>
        <p className="mt-7 max-w-[535px] text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">iSociable connects ambitious brands with the right creators to build authentic campaigns, reach engaged audiences, and deliver measurable results.</p>
        <div className="mt-8 flex flex-wrap gap-3">
           <a href={contactHref} className="btn btn-primary" data-testid="link-hero-campaign">Start a campaign <ArrowUpRight size={16} /></a>
          <a href="#paths" onClick={(event) => { event.preventDefault(); scrollToId('#paths'); }} className="btn btn-ghost" data-testid="link-hero-creator">Join as a creator</a>
        </div>
        <div className="mt-12 flex items-center gap-4 text-xs font-semibold text-[hsl(var(--muted-foreground))]"><span className="flex -space-x-2"><i className="h-7 w-7 rounded-full border-2 border-[hsl(var(--background))] bg-[#e7a187]" /><i className="h-7 w-7 rounded-full border-2 border-[hsl(var(--background))] bg-[#6e62cb]" /><i className="h-7 w-7 rounded-full border-2 border-[hsl(var(--background))] bg-[#e8cc8f]" /></span><span>Creators and brands, better together.</span></div>
      </div>
      <div className="hero-visual reveal delay-2" aria-label="Abstract campaign dashboard visual">
        <div className="hero-orb left-[13%] top-[5%] h-4 w-4" /><div className="hero-orb bottom-[17%] right-[16%] h-6 w-6 bg-[hsl(var(--primary))]" />
        <div className="orbit" /><div className="orbit two" />
        <div className="visual-card portrait-card"><div className="portrait-art" /><div className="absolute left-4 right-4 top-4 flex justify-between text-[10px] font-bold text-white"><span>iS / 24</span><span>Campaign live</span></div></div>
        <div className="visual-card metric-card"><span className="pill mb-5">Live signal</span><strong>+47.2%</strong><small>engaged audience</small><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#ded9f8]"><div className="h-full w-4/5 rounded-full bg-[hsl(var(--primary))]" /></div></div>
        <div className="visual-card handle-card"><div className="flex items-center gap-2"><div className="handle-avatar" /><div><strong className="block text-xs">@maya.makes</strong><span className="text-[10px] text-[hsl(var(--muted-foreground))]">Creator match · 94%</span></div></div></div>
        <div className="visual-card content-card"><div className="content-thumb" /><div className="mt-2 flex items-center justify-between text-[10px] font-bold"><span>Content approved</span><Check size={13} className="text-[hsl(var(--primary))]" /></div></div>
      </div>
    </div>
    <div className="container-wide pb-20 pt-10"><div className="hairline" /></div>
  </section>;
}

function Services() {
  return <section id="services" className="section-pad"><div className="container-wide"><div className="section-intro mb-12"><div className="eyebrow mb-5">What we do</div><h2 className="section-title">Everything you need to make influence work.</h2><p className="mt-6 max-w-[510px] text-[hsl(var(--muted-foreground))]">From the first strategic question to the final performance readout, we make every part of the partnership feel considered.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map(([label, title, copy, Icon], index) => <article className="service-card" key={title} data-testid={`card-service-${index}`}><div className="mb-9 flex items-center justify-between"><div className="service-icon"><Icon size={20} strokeWidth={1.8} /></div><span className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">0{index + 1}</span></div><span className="eyebrow text-[.65rem]">{label}</span><h3 className="display mt-2 text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{copy}</p></article>)}</div></div></section>;
}

function Process() {
  const steps = [['Tell us your goals', 'We learn about your brand, audience, campaign objectives, and budget.'], ['Meet the right creators', 'We identify creators whose audience and style align with the brand.'], ['Launch the campaign', 'We coordinate the content, communication, scheduling, and approvals.'], ['Measure the impact', 'We analyze campaign results and provide clear performance insights.']];
  return <section id="process" className="section-pad bg-[#ece8e1]"><div className="container-wide grid gap-14 lg:grid-cols-[.72fr_1fr]"><div><div className="eyebrow mb-5">A clear path forward</div><h2 className="section-title">Good work has a rhythm.</h2><p className="mt-6 max-w-[400px] leading-relaxed text-[hsl(var(--muted-foreground))]">No black boxes, no hand-offs into the void. You’ll know what’s happening, why it matters, and what comes next.</p><a href={contactHref} className="btn btn-dark mt-8" data-testid="link-process-cta">Start a conversation <ArrowUpRight size={16} /></a></div><div className="space-y-9">{steps.map(([title, copy], index) => <div className="step" key={title} data-testid={`step-process-${index}`}><span className="step-number">{index + 1}</span><h3 className="display text-2xl">{title}</h3><p className="mt-2 max-w-[450px] text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{copy}</p></div>)}</div></div></section>;
}

function Why() {
  const benefits = ['Carefully selected creators', 'Authentic audience connections', 'End-to-end campaign management', 'Clear communication', 'Data-informed decisions', 'Strategies tailored to each brand'];
  return <section className="section-pad"><div className="container-wide"><div className="why-panel grid gap-12 px-7 py-10 md:px-14 md:py-16 lg:grid-cols-[.93fr_1fr] lg:items-center"><div><div className="eyebrow mb-5 text-[#f7c5b8]">The iSociable difference</div><h2 className="display text-5xl leading-[.93] md:text-6xl">More than reach.<br /><span className="text-[#ffb1a0]">Real connections.</span></h2><p className="mt-7 max-w-[470px] leading-relaxed text-white/65">The best creator partnerships don’t feel bought. They feel inevitable — the right voice, speaking to the right people, at the right moment.</p></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map((benefit, index) => <div className="check-row" key={benefit} data-testid={`text-benefit-${index}`}><span className="check"><Check size={13} strokeWidth={3} /></span>{benefit}</div>)}</div></div></div></section>;
}

function Paths() {
  return <section id="paths" className="section-pad bg-[#e7e0d6]"><div className="container-wide"><div className="mb-12 max-w-[580px]"><div className="eyebrow mb-5">Choose your side</div><h2 className="section-title">One network.<br />Two ways in.</h2></div><div className="grid gap-5 lg:grid-cols-2"><div className="path-card path-brand"><span className="pill bg-white/55">For brands</span><h3 className="display mt-12 max-w-[370px] text-4xl">Reach the people who matter.</h3><p className="mt-5 max-w-[420px] text-sm leading-relaxed text-[hsl(var(--foreground)/.68)]">Discover creators, manage campaigns, and create meaningful results with a partner who sees the whole picture.</p><a href={contactHref} className="btn btn-dark mt-8" data-testid="link-brand-path">Start a campaign <ArrowUpRight size={16} /></a></div><div className="path-card path-creator"><span className="pill bg-white/55">For creators</span><h3 className="display mt-12 max-w-[370px] text-4xl">Turn your influence into opportunity.</h3><p className="mt-5 max-w-[420px] text-sm leading-relaxed text-[hsl(var(--foreground)/.68)]">Join a network that values your point of view and connects you with brands that match your audience and values.</p><button type="button" className="btn btn-dark mt-8" onClick={() => window.alert('Creator network applications will open here soon.')} data-testid="button-creator-path">Join our creator network <ArrowUpRight size={16} /></button></div></div></div></section>;
}

function About() {
  return <section id="about" className="section-pad bg-[#f0ece4]"><div className="container-wide grid items-center gap-12 lg:grid-cols-[.87fr_1fr]"><div className="about-art" role="img" aria-label="Abstract behind-the-scenes studio placeholder"><span className="absolute bottom-7 left-8 z-10 max-w-[230px] text-3xl text-white display">Ideas look better when they move.</span></div><div className="lg:pl-8"><div className="eyebrow mb-5">A little about us</div><h2 className="section-title">Personal, strategic, effective.</h2><p className="mt-7 text-lg leading-relaxed text-[hsl(var(--muted-foreground))]">iSociable was created to make influencer marketing more personal, strategic, and effective. We believe successful partnerships begin with genuine alignment—not just follower counts. By bringing together the right brands, creators, and ideas, we build campaigns that feel authentic and produce meaningful results.</p><div className="mt-9 flex items-center gap-8 border-t border-[hsl(var(--border))] pt-6"><div><strong className="display block text-3xl">01</strong><span className="text-xs text-[hsl(var(--muted-foreground))]">Alignment first</span></div><div><strong className="display block text-3xl">02</strong><span className="text-xs text-[hsl(var(--muted-foreground))]">Clarity always</span></div><div><strong className="display block text-3xl">03</strong><span className="text-xs text-[hsl(var(--muted-foreground))]">Impact measured</span></div></div></div></div></section>;
}

function Footer() {
  const socials = [{ Icon: Instagram, label: 'Instagram' }, { Icon: SiTiktok, label: 'TikTok' }, { Icon: Linkedin, label: 'LinkedIn' }, { Icon: Youtube, label: 'YouTube' }];
  return <footer className="footer py-12"><div className="container-wide"><div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]"><div><Logo footer /><p className="max-w-[260px] text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">The thoughtful side of influence. Connecting ambitious brands with creators who make people care.</p><div className="mt-5 flex gap-2">{socials.map(({ Icon, label }) => <a href={contactHref} aria-label={`${label} placeholder link`} className="grid h-9 w-9 place-items-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" key={label} data-testid={`link-social-${label.toLowerCase()}`}><Icon size={15} /></a>)}</div></div><div><h3 className="mb-4 text-xs font-bold uppercase tracking-widest">Explore</h3><div className="grid gap-3">{navItems.map((item) => <a href={item.href} key={item.href} onClick={(event) => { event.preventDefault(); scrollToId(item.href); }} className="footer-link" data-testid={`link-footer-${item.label.toLowerCase().replaceAll(' ', '-')}`}>{item.label}</a>)}</div></div><div><h3 className="mb-4 text-xs font-bold uppercase tracking-widest">Services</h3><div className="grid gap-3">{services.slice(0, 4).map(([, title]) => <a href="#services" key={title} onClick={(event) => { event.preventDefault(); scrollToId('#services'); }} className="footer-link" data-testid={`link-footer-service-${title.replaceAll(' ', '-')}`}>{title}</a>)}</div></div><div><h3 className="mb-4 text-xs font-bold uppercase tracking-widest">Say hello</h3><a href={contactHref} className="footer-link" data-testid="link-footer-email">{contactEmail}</a><span className="mt-2 block text-[.68rem] text-[hsl(var(--muted-foreground))]">Email</span></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-[hsl(var(--border))] pt-6 text-[.7rem] text-[hsl(var(--muted-foreground))] sm:flex-row"><span>© {new Date().getFullYear()} iSociable. All rights reserved.</span><div className="flex gap-5"><button type="button" className="footer-link" onClick={() => window.alert('Privacy policy placeholder.')} data-testid="button-privacy">Privacy Policy</button><button type="button" className="footer-link" onClick={() => window.alert('Terms of service placeholder.')} data-testid="button-terms">Terms of Service</button></div></div></div></footer>;
}

export default function Home() {
  useEffect(() => {
    document.title = 'iSociable — Influence that creates real impact';
    const description = 'iSociable connects ambitious brands with the right creators for authentic, measurable campaigns.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    [['og:title', document.title], ['og:description', description], ['og:type', 'website']].forEach(([property, content]) => { let tag = document.querySelector(`meta[property="${property}"]`); if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', property); document.head.appendChild(tag); } tag.setAttribute('content', content); });
  }, []);
  return <div className="site-shell"><Header /><main><Hero /><Services /><Process /><Why /><Paths /><About /></main><Footer /></div>;
}