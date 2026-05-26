/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, X, Menu } from 'lucide-react';
import { getEventBySlug, getAllEvents } from './events';
import type { EventConfig, FeaturedSpeaker, ScheduleDay, Theme } from './events/types';

const TicketModal = ({ open, onClose, event }: { open: boolean; onClose: () => void; event: EventConfig }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative bg-surface-container border border-outline-variant p-8 md:p-12 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-headline text-2xl font-black text-white uppercase mb-2">Get Your Ticket</h3>
        <p className="text-secondary text-sm mb-8">{event.ticketModalText}</p>
        <div className="space-y-4">
          {event.ticketLinks.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm text-center hover:brightness-110 transition-all">
              {link.label} <span className="opacity-60 normal-case tracking-normal">{link.sublabel}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ onGetTicket }: { onGetTicket: () => void }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navItems = [
    { label: 'Speakers', href: '#speakers' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Supporting Members', href: '#sponsors' },
    { label: 'Venue', href: '#venue' },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#08092d] backdrop-blur-md bg-opacity-80 border-b border-[#43456A]/20">
      <div className="flex justify-between items-center px-6 md:px-8 h-20">
        <img alt="DECARB SUMMITS" className="w-[140px] md:w-[180px] h-auto" src="/decarb-summits.png" />
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.label} className="font-headline uppercase tracking-widest text-xs font-bold text-secondary hover:text-primary transition-colors" href={item.href}>{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onGetTicket} className="bg-primary text-on-primary font-headline uppercase tracking-widest text-[10px] md:text-xs font-bold px-4 md:px-6 py-3 hover:bg-primary/90 active:scale-95 duration-75 transition-all">GET TICKET</button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-secondary hover:text-white transition-colors">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-[#08092d] px-6 py-4 space-y-4">
          {navItems.map(item => (
            <a key={item.label} onClick={() => setMenuOpen(false)} className="block font-headline uppercase tracking-widest text-xs font-bold text-secondary hover:text-primary active:text-primary transition-colors" href={item.href}>{item.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = ({ onGetTicket, event }: { onGetTicket: () => void; event: EventConfig }) => (
  <header className="relative min-h-svh flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img alt="" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQR_69gLJFt7FDndpgvvekGm9rQAISfMTtKb2BIzPguFhx12MUgAuPKpDJhGOd-0PK8QEnjfSOhzifQ29OVtTQ0XMSFGAatVZVN8smIsqqvMRFPaY4-amNPZ7vyPczzYlaCVZE72NvH3lv2Ai3iFqfnQo79nc5X1-rm_6ZOkkYRluz7etxtiH8D08ZYnDkNpKMbW9r65kRkf5YuDLF9QPRyzX6whZ0tRY3s98NdV-p3M1S9rWRvPUM-BFIhOZmRhXtT3hJKuR8WWA" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <div className="inline-block mb-6 px-4 py-1 border border-primary/30 bg-primary/10">
        <span className="text-primary font-headline text-sm uppercase tracking-[0.2em] font-bold">{event.dateBadge}</span>
      </div>
      <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight text-white uppercase leading-none mb-8" dangerouslySetInnerHTML={{ __html: event.titleHtml }} />
      <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl font-light leading-relaxed mb-12">{event.tagline}</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button onClick={onGetTicket} className="bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all">SECURE YOUR SPOT</button>
        <a href="#schedule" className="border border-outline text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">VIEW AGENDA</a>
      </div>
    </div>
  </header>
);

const FeaturedSpeakerCard: React.FC<{ speaker: FeaturedSpeaker }> = ({ speaker }) => (
  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden border border-outline-variant/50 block focus:outline-none">
    <div className="aspect-square overflow-hidden">
      {speaker.img ? (
        <img alt={speaker.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-active:grayscale-0 transition-[filter] duration-700 will-change-[filter]" style={{ objectPosition: speaker.pos }} src={speaker.img} />
      ) : (
        <div className="w-full h-full bg-surface-container-high flex items-center justify-center">
          <span className="font-headline text-8xl font-black text-outline/40 group-hover:text-primary/30 transition-colors duration-700">{speaker.initials}</span>
        </div>
      )}
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6 pt-16">
      <div className="flex items-end justify-between">
        <div>
          <h3 className="font-headline text-2xl text-white uppercase font-black">{speaker.name}</h3>
          <p className="text-secondary text-sm uppercase tracking-wider mt-1">{speaker.title}</p>
        </div>
        <Linkedin className="w-5 h-5 text-secondary group-hover:text-primary group-focus:text-primary transition-colors flex-none mb-1" />
      </div>
    </div>
  </a>
);

const FeaturedSpeakers = ({ event }: { event: EventConfig }) => (
  <section className="py-32 bg-surface-container-low relative border-y border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-headline text-4xl font-black text-white uppercase tracking-tight mb-16 border-l-4 border-primary pl-6">Featured Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {event.featuredSpeakers.map(speaker => (
          <FeaturedSpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>
    </div>
  </section>
);

const Speakers = ({ event }: { event: EventConfig }) => (
  <section id="speakers" className="py-32 bg-surface scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6 text-center mb-20">
      <h2 className="font-headline text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Confirmed Speakers</h2>
      <div className="h-1 w-24 bg-primary mx-auto"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {event.speakers.map(s => {
        const Wrapper = s.linkedin ? 'a' : 'div';
        const linkProps = s.linkedin ? { href: s.linkedin, target: '_blank', rel: 'noopener noreferrer' } : {};
        return (
          <Wrapper key={s.name} {...linkProps} className="bg-surface-container p-6 border-l-2 border-transparent hover:border-primary hover:bg-surface-container-high transition-all group cursor-pointer block">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-headline text-xl text-white uppercase group-hover:text-primary transition-colors font-bold">{s.name}</h3>
                <p className="text-secondary text-xs font-body uppercase tracking-wider mt-1">{s.title}</p>
              </div>
              {s.linkedin && <Linkedin className="w-5 h-5 text-secondary group-hover:text-primary transition-colors flex-none mt-1" />}
            </div>
          </Wrapper>
        );
      })}
    </div>
  </section>
);

const ScheduleSection = ({ days }: { days: ScheduleDay[] }) => {
  const [activeDay, setActiveDay] = React.useState(0);
  return (
    <section id="schedule" className="py-32 bg-surface-container-low scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-headline text-5xl font-black text-white uppercase tracking-tighter mb-4">Schedule</h2>
          <div className="h-1 w-24 bg-primary"></div>
        </div>
        <div className="flex flex-wrap gap-4 mb-12">
          {days.map((day, i) => (
            <button
              key={i}
              onClick={() => setActiveDay(i)}
              className={`font-headline uppercase tracking-widest text-xs font-bold px-8 py-4 border transition-all ${activeDay === i ? 'bg-primary text-on-primary border-primary' : 'border-outline text-secondary hover:border-primary hover:text-primary'}`}
            >
              {day.label} <span className={`ml-2 normal-case tracking-normal ${activeDay === i ? 'opacity-80' : 'opacity-60'}`}>— {day.date}</span>
            </button>
          ))}
        </div>
        {days[activeDay].subtitle && (
          <p className="text-primary font-headline text-xs uppercase tracking-[0.2em] font-bold mb-6">{days[activeDay].subtitle}</p>
        )}
        <div className="space-y-px">
          {days[activeDay].sessions.map((session, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-3 md:gap-8 p-6 border-l-2 transition-all ${
                session.type === 'break'
                  ? 'border-outline-variant bg-background/40 opacity-60'
                  : session.type === 'tba'
                  ? 'border-outline-variant bg-background/20 opacity-40'
                  : session.type === 'closing'
                  ? 'border-primary/40 bg-surface'
                  : 'border-transparent bg-surface hover:border-primary hover:bg-surface-container'
              }`}
            >
              <div className="w-full md:w-44 flex-none pt-0.5">
                <span className="font-headline text-primary text-xs uppercase tracking-widest font-bold">{session.time}</span>
              </div>
              <div className="flex-1">
                <h3 className={`font-headline font-bold uppercase text-sm leading-snug ${session.type === 'break' || session.type === 'tba' ? 'text-secondary' : 'text-white'}`}>
                  {session.title}
                </h3>
                {session.subtitle && (
                  <p className="text-secondary/80 text-xs font-body italic mt-1.5 leading-snug normal-case">{session.subtitle}</p>
                )}
                {session.speakers && (
                  <ul className="mt-2 space-y-0.5">
                    {session.speakers.map((sp, j) => (
                      <li key={j} className="text-secondary text-xs uppercase tracking-wider">{sp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ThemesSection = ({ themes }: { themes: Theme[] }) => (
  <section id="schedule" className="py-32 bg-surface-container-low scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-headline text-5xl font-black text-white uppercase tracking-tighter mb-4">Core Themes</h2>
        <div className="h-1 w-24 bg-primary"></div>
      </div>
      <div className="space-y-px">
        {themes.map((theme, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-3 md:gap-8 p-6 border-l-2 border-transparent bg-surface hover:border-primary hover:bg-surface-container transition-all"
          >
            <div className="w-full md:w-10 flex-none pt-0.5">
              <span className="font-headline text-primary text-xs uppercase tracking-widest font-bold">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-headline font-bold uppercase text-sm leading-snug text-white">{theme.title}</h3>
              <p className="text-secondary/80 text-sm font-body mt-1.5 leading-snug normal-case">{theme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AgendaSection = ({ event }: { event: EventConfig }) => {
  if (event.schedule) return <ScheduleSection days={event.schedule} />;
  if (event.themes) return <ThemesSection themes={event.themes} />;
  return null;
};

const Attendance = ({ event }: { event: EventConfig }) => (
  <section id="agenda" className="py-32 bg-background scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="p-12 bg-surface-container-high border border-outline-variant relative overflow-hidden group">
        <h2 className="font-headline text-3xl font-black text-white uppercase mb-8">Why Attend?</h2>
        <ul className="space-y-6">
          {event.whyAttend.map(text => (
            <li key={text} className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
              <p className="text-secondary">{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-12 bg-primary text-on-primary relative overflow-hidden">
        <h2 className="font-headline text-2xl md:text-3xl font-black uppercase mb-8">Who Should Attend?</h2>
        <div className="grid grid-cols-2 gap-6 font-headline font-bold uppercase text-sm tracking-widest">
          {event.whoShouldAttend.map(item => (
            <div key={item} className="p-4 border border-on-primary/40 flex items-center justify-center text-center min-h-[56px]">{item}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Partners = ({ event }: { event: EventConfig }) => (
  <section id="sponsors" className="py-24 border-y border-outline-variant/30 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-center gap-4 mb-16 flex-wrap text-center">
        <span className="material-symbols-outlined text-primary">handshake</span>
        <p className="font-headline text-[10px] tracking-[0.4em] text-secondary/60 uppercase font-bold">Supporting Members</p>
      </div>
      {event.partners.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {event.partners.map(p => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="font-headline font-black text-white tracking-tighter text-sm uppercase opacity-60 hover:opacity-100 active:opacity-100 transition-all">{p.name}</a>
          ))}
        </div>
      ) : (
        <p className="text-center text-secondary/60 font-headline text-sm uppercase tracking-widest">Coming Soon</p>
      )}
    </div>
  </section>
);

const FinalCTA = ({ event }: { event: EventConfig }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      position: (form.elements.namedItem('position') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      eventSlug: event.slug,
    };
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="venue" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase mb-8">Stay in the loop</h2>
          <p className="text-secondary text-xl max-w-md mx-auto">{event.signupDescription}</p>
        </div>
        {submitted ? (
          <div className="text-center p-12 border border-primary/30 bg-primary/10">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">check_circle</span>
            <h3 className="font-headline text-2xl text-white uppercase font-black mt-4">You're on the list!</h3>
            <p className="text-secondary mt-2">We'll keep you updated on the summit and any future events.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-headline text-xs uppercase tracking-widest text-secondary mb-2">First Name *</label>
                <input required type="text" name="firstName" className="w-full bg-surface-container border border-outline-variant text-white px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-headline text-xs uppercase tracking-widest text-secondary mb-2">Last Name *</label>
                <input required type="text" name="lastName" className="w-full bg-surface-container border border-outline-variant text-white px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block font-headline text-xs uppercase tracking-widest text-secondary mb-2">Company *</label>
              <input required type="text" name="company" className="w-full bg-surface-container border border-outline-variant text-white px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block font-headline text-xs uppercase tracking-widest text-secondary mb-2">Position *</label>
              <input required type="text" name="position" className="w-full bg-surface-container border border-outline-variant text-white px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block font-headline text-xs uppercase tracking-widest text-secondary mb-2">Email *</label>
              <input required type="email" name="email" className="w-full bg-surface-container border border-outline-variant text-white px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block font-headline text-xs uppercase tracking-widest text-secondary mb-2">Phone Number <span className="text-secondary/50">(optional)</span></label>
              <input type="tel" name="phone" className="w-full bg-surface-container border border-outline-variant text-white px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors" />
            </div>
            {error && <p className="text-error text-sm font-body">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-on-primary px-12 py-5 font-headline font-black uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(212,255,91,0.4)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'SENDING...' : 'KEEP ME UPDATED'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#08092d] py-12 border-t border-[#43456A]/20">
    <div className="flex flex-col items-center gap-6 px-6 w-full max-w-7xl mx-auto md:flex-row md:justify-between md:gap-0">
      <img alt="DECARB SUMMITS" className="w-[150px] h-auto" src="/decarb-summits.png" />
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Contact'].map(link => (
          <a key={link} className="font-headline uppercase text-[10px] tracking-widest text-secondary hover:text-primary transition-all whitespace-nowrap" href="#">{link}</a>
        ))}
      </div>
      <div className="font-headline uppercase text-[10px] tracking-widest text-secondary whitespace-nowrap text-center">© 2026 DECARB SUMMITS. ALL RIGHTS RESERVED.</div>
    </div>
  </footer>
);

const EventPage = ({ event }: { event: EventConfig }) => {
  const [ticketOpen, setTicketOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = event.pageTitle;
  }, [event.pageTitle]);

  return (
    <div className="min-h-screen bg-background">
      <TicketModal open={ticketOpen} onClose={() => setTicketOpen(false)} event={event} />
      <Navbar onGetTicket={() => setTicketOpen(true)} />
      <Hero onGetTicket={() => setTicketOpen(true)} event={event} />
      <FeaturedSpeakers event={event} />
      <Speakers event={event} />
      <AgendaSection event={event} />
      <Attendance event={event} />
      <Partners event={event} />
      <FinalCTA event={event} />
      <Footer />
    </div>
  );
};

const EventIndex = () => {
  const events = getAllEvents();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <img alt="DECARB SUMMITS" className="w-[200px] h-auto mx-auto mb-12" src="/decarb-summits.png" />
        <h1 className="font-headline text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Upcoming Events</h1>
        <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>
        <div className="space-y-4">
          {events.map(evt => (
            <a
              key={evt.slug}
              href={`/${evt.slug}`}
              className="block bg-surface-container border border-outline-variant p-8 hover:border-primary hover:bg-surface-container-high transition-all group"
            >
              <h2 className="font-headline text-2xl text-white uppercase font-black group-hover:text-primary transition-colors">{evt.title}</h2>
              <p className="text-primary font-headline text-xs uppercase tracking-[0.2em] font-bold mt-2">{evt.dateBadge}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slug = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const event = getEventBySlug(slug);

  if (!event) {
    return <EventIndex />;
  }

  return <EventPage event={event} />;
}
