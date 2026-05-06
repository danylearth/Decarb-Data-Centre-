/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin, X, Menu } from 'lucide-react';

const TicketModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative bg-surface-container border border-outline-variant p-8 md:p-12 max-w-md w-full mx-4" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-headline text-2xl font-black text-white uppercase mb-2">Get Your Ticket</h3>
        <p className="text-secondary text-sm mb-8">Choose which day you'd like to attend.</p>
        <div className="space-y-4">
          <a href="https://luma.com/l0inulj5" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm text-center hover:brightness-110 transition-all">
            Day 1 <span className="opacity-60 normal-case tracking-normal">— May 13, 2026</span>
          </a>
          <a href="https://luma.com/9ouwc89o" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest text-sm text-center hover:brightness-110 transition-all">
            Day 2 <span className="opacity-60 normal-case tracking-normal">— May 14, 2026</span>
          </a>
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

const Hero = ({ onGetTicket }: { onGetTicket: () => void }) => (
  <header className="relative min-h-svh flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img alt="" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQR_69gLJFt7FDndpgvvekGm9rQAISfMTtKb2BIzPguFhx12MUgAuPKpDJhGOd-0PK8QEnjfSOhzifQ29OVtTQ0XMSFGAatVZVN8smIsqqvMRFPaY4-amNPZ7vyPczzYlaCVZE72NvH3lv2Ai3iFqfnQo79nc5X1-rm_6ZOkkYRluz7etxtiH8D08ZYnDkNpKMbW9r65kRkf5YuDLF9QPRyzX6whZ0tRY3s98NdV-p3M1S9rWRvPUM-BFIhOZmRhXtT3hJKuR8WWA" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <div className="inline-block mb-6 px-4 py-1 border border-primary/30 bg-primary/10">
        <span className="text-primary font-headline text-sm uppercase tracking-[0.2em] font-bold">MAY 13-14, 2026 • NEW YORK CITY</span>
      </div>
      <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tight text-white uppercase leading-none mb-8">DATA CENTER <br /> SUMMIT 2026</h1>
      <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl font-light leading-relaxed mb-12">Join industry leaders, developers, hyper scalers and investors as we define the next generation of synthetic infrastructure and high-frequency data ecosystems.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button onClick={onGetTicket} className="bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all">SECURE YOUR SPOT</button>
        <a href="#schedule" className="border border-outline text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">VIEW AGENDA</a>
      </div>
    </div>
  </header>
);

const FeaturedSpeakers = () => (
  <section className="py-32 bg-surface-container-low relative border-y border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="font-headline text-4xl font-black text-white uppercase tracking-tight mb-16 border-l-4 border-primary pl-6">Featured Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { name: 'Rajiv Bazaj', title: 'VP, Energy & Sustainability Solutions, Constellation', img: '/razi.png', pos: 'center 30%', linkedin: 'https://www.linkedin.com/in/rajiv-bazaj-b03225141/' },
          { name: 'Bill Thomas', title: 'Chief Energy Officer, CleanArc Data Centers', img: '/bill-thomas.png', pos: 'center 20%', linkedin: 'https://www.linkedin.com/in/bill-thomas-335a0843/' },
        ].map(speaker => (
          <a key={speaker.name} href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden border border-outline-variant/50 block focus:outline-none">
            <div className="aspect-square overflow-hidden">
              <img alt={speaker.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-active:grayscale-0 transition-[filter] duration-700 will-change-[filter]" style={{ objectPosition: speaker.pos }} src={speaker.img} />
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
        ))}
      </div>
    </div>
  </section>
);

const Speakers = () => {
  const speakers = [
    { name: 'Rajiv Bazaj', title: 'VP, Energy & Sustainability Solutions, Constellation', linkedin: 'https://www.linkedin.com/in/rajiv-bazaj-b03225141/' },
    { name: 'Bill Thomas', title: 'Chief Energy Officer, CleanArc Data Centers', linkedin: 'https://www.linkedin.com/in/bill-thomas-335a0843/' },
    { name: 'Matt Kittell', title: 'Senior Financial Specialist, Société Générale', linkedin: 'https://www.linkedin.com/in/matt-kittell-7582632/' },
    { name: 'Jim Costello', title: 'Head of Real Estate Economics, Chief Economist, MSCI Real Assets', linkedin: 'https://www.linkedin.com/in/jim-costello-9277174/' },
    { name: 'Sheila Oviedo', title: 'Head of Climate Risk Products, S&P', linkedin: 'https://www.linkedin.com/in/sheilaoviedo/' },
    { name: 'Radhika Mehrotra', title: 'Head of Data & Channel Partnerships, Americas, CDP', linkedin: 'https://www.linkedin.com/in/radhika-mehrotra-5a06819/' },
    { name: 'Peter Hoegler', title: 'Associate Director, EDF Power Solutions North America', linkedin: 'https://www.linkedin.com/in/peter-hoegler/' },
    { name: 'Kelsyn Rooks', title: 'Dir. of Strategic Accounts - AI Solutions, Cupix', linkedin: 'https://www.linkedin.com/in/kelsynrooks/' },
    { name: 'Jon M. Williams', title: 'Chairman & CEO, Viridi', linkedin: 'https://www.linkedin.com/in/jon-m-williams-1b741123a/' },
    { name: 'Ambroise Lalloz', title: 'AI & Energy, First Block', linkedin: 'https://www.linkedin.com/in/ambroise-l/' },
    { name: 'Malio West', title: 'Senior Partner, Global Accounting', linkedin: 'https://www.linkedin.com/in/dr-malio-west-pmp-cma-999a2712/' },
    { name: 'Aundre Oldacre', title: 'Co-Founder & Managing Partner, AoRa Development', linkedin: 'https://www.linkedin.com/in/aundreoldacre/' },
    { name: 'Dennis Garrett', title: 'CEO, Blue Lake Clean Energy Group', linkedin: 'https://www.linkedin.com/in/djgarrett/' },
    { name: 'Brian Weed', title: 'VP, Critical & Controlled Environment Services, GDI Integrated Facility Services', linkedin: 'https://www.linkedin.com/in/brianweed17/' },
    { name: 'Jay Peck', title: 'Principal, Brookhaven Sustainability', linkedin: 'https://www.linkedin.com/in/jay-peck-64459725/' },
    { name: 'Eric Bosworth', title: 'Principal, Thermal Energy Insights', linkedin: 'https://www.linkedin.com/in/ericbosworth/' },
    { name: 'Matthew Kaplan', title: 'VP of Project Development, Brightcore Energy', linkedin: 'https://www.linkedin.com/in/mattkaplan/' },
    { name: 'Esther Tierney', title: 'Senior Product Manager, Trane Technologies', linkedin: 'https://www.linkedin.com/in/esther-tierney-31b25959/' },
    { name: 'Fulya Kocak', title: 'CEO & Founder, Fulya Kocak, LLC', linkedin: 'https://www.linkedin.com/in/fulyakocak/' },
    { name: 'David Deutsch', title: 'COO, New Power Solutions', linkedin: 'https://www.linkedin.com/in/dedeutsch/' },
    { name: 'Hassan Saleh', title: 'CEO, VTV Energy', linkedin: 'https://www.linkedin.com/in/hassan-saleh-457a9a170/' },
    { name: 'Kelly Bacon', title: 'Principal, AECOM', linkedin: 'https://www.linkedin.com/in/kelly-bacon-a4220713/' },
    { name: 'Matt Short', title: 'Chief Commercial Officer, Paddle Energy', linkedin: 'https://www.linkedin.com/in/matt-short-6b26605/' },
    { name: 'David Sattler', title: 'CEO, SCDesign', linkedin: 'https://www.linkedin.com/in/david-sattler-6421918/' },
    { name: 'Larry Skennion', title: 'CEO, Green Panther Advisory', linkedin: 'https://www.linkedin.com/in/larry-skennion-ms-a410921/' },
    { name: 'Loren Burnett', title: 'CEO, Prometheus Materials', linkedin: 'https://www.linkedin.com/in/loren-burnett/' },
    { name: 'Kimberly Dowdell', title: 'VP Strategic Partnerships, Amrize', linkedin: 'https://www.linkedin.com/in/kimberlydowdell/' },
    { name: 'Hadia Sheerazi', title: 'Program Consultant, Mission Possible Partnership', linkedin: 'https://www.linkedin.com/in/hadiasheerazi/' },
    { name: 'Soumya Anantharaman', title: 'Director - Climate and Decarbonization, JLL', linkedin: 'https://www.linkedin.com/in/soumya-anantharaman-8b358831/' },
    { name: 'Chas Peppers', title: 'Director, SOM IW, Skidmore, Owings & Merrill', linkedin: 'https://www.linkedin.com/in/chas-peppers-3712365/' },
    { name: 'David Chernis', title: 'Director, Flexible Compute Platforms, CPower', linkedin: 'https://www.linkedin.com/in/davidchernis/' },
    { name: 'Nidhi Chadda', title: 'Founder & CEO, Enzo Advisors LLC', linkedin: 'https://www.linkedin.com/in/nchadda/' },
    { name: 'Matthew Carmody', title: 'Director of Digital Infrastructure, Voltus', linkedin: '' },
    { name: 'Brian Tormey', title: 'President, TitleVest', linkedin: '' },
    { name: 'Graeme Kavanagh', title: 'Partner and CRO, Accelerate Infrastructure Opportunities', linkedin: '' },
    { name: 'Alexander Jahn', title: 'Innovation Advisor, NYSERDA', linkedin: '' },
    { name: 'Martin Renkis', title: 'Executive Director, Data Center Infrastructure, Johnson Controls', linkedin: 'https://www.linkedin.com/in/martinrenkis/' },
    { name: 'Ruben Petit', title: 'CCO, Ener.co', linkedin: 'https://www.linkedin.com/in/ruben-petit-589316b9/' },
    { name: 'Mick Gilbert', title: 'Board Member, Decarb Summits', linkedin: 'https://www.linkedin.com/in/michaelhgilbert/' },
    { name: 'Will Pettitt', title: 'Global Geothermal Lead, Baker Hughes', linkedin: '' },
    { name: 'Scott Donachie', title: 'CEO, Decarb Summits', linkedin: 'https://www.linkedin.com/in/scott-donachie-5683787/' },
  ];

  return (
    <section id="speakers" className="py-32 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="font-headline text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Confirmed Speakers</h2>
        <div className="h-1 w-24 bg-primary mx-auto"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map(s => {
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
};

const Schedule = () => {
  const [activeDay, setActiveDay] = React.useState(0);

  const days = [
    {
      label: 'Day 1',
      date: 'May 13, 2026',
      sessions: [
        { time: '8:00–8:50 AM', title: 'Registration & Networking', type: 'break' },
        { time: '8:50–9:00 AM', title: 'Opening Remarks', speakers: ['Chas Peppers, Director, SOM IW, Skidmore, Owings & Merrill'] },
        { time: '9:00–9:40 AM', title: 'Data Center Investing & Strategic Planning: From Permitting to Full Operations', speakers: ['Hadia Sheerazi, Program Consultant, Mission Possible Partnership', 'Kelly Bacon, Principal, AECOM', 'Bill Thomas, Chief Energy Officer, CleanArc Data Centers', 'Matt Short, Chief Commercial Officer, Paddle Energy'] },
        { time: '9:40–10:00 AM', title: 'AI Factories as Virtual Power Plants: Bridging the Grid Capacity Gap', speakers: ['David Chernis, Director, Flexible Compute Platforms at CPower'] },
        { time: '10:00–10:30 AM', title: 'Balancing Data Center Expansion: Addressing Equipment Reliability and Energy Efficiency', speakers: ['Soumya Anantharaman (Moderator), Director - Climate and Decarbonization, JLL', 'Brian Weed, VP, Critical & Controlled Environment Services, GDI Integrated Facility Services'] },
        { time: '10:30–11:00 AM', title: 'Coffee & Networking', type: 'break' },
        { time: '11:00–11:30 AM', title: 'Building the Future: AI in Data Center Construction', speakers: ['Martin Renkis (Moderator), Executive Director, Data Center Infrastructure, Johnson Controls', 'Aundre Oldacre, Co-Founder & Managing Partner, AoRa Development', 'Kelsyn Rooks, Dir. of Strategic Accounts - AI Solutions, Cupix'] },
        { time: '11:30 AM–12:00 PM', title: 'Decarbonization Opportunities for Legacy Data Centers: Optimizing Existing Cooling Infrastructure', speakers: ['David Sattler, CEO, SCDesign', 'Ruben Petit, CCO, Ener.co'] },
        { time: '12:00–12:45 PM', title: 'Lunch & Networking', type: 'break' },
        { time: '12:45–1:15 PM', title: 'The Importance of Hyperlocal Data Collection to Assess Water Risk for Data Centers', speakers: ['Nidhi Chadda (Moderator), Founder & CEO, Enzo Advisors LLC', 'Sheila Oviedo, Head of Climate Risk Products, S&P', 'Radhika Mehrotra, Head of Data & Channel Partnerships, Americas, CDP'] },
        { time: '1:15–1:35 PM', title: 'Scaling Low-Carbon Material Technology and Collaborating with Hyperscalers to Reduce Embodied Carbon in Large-Scale Infrastructure Projects', speakers: ['Loren Burnett, CEO, Prometheus Materials'] },
        { time: '1:35–1:55 PM', title: 'How Data-Driven Material Optimization Can Reduce Emissions in Construction', subtitle: 'Amrize and their collaboration with Meta, highlighting how AI was used to optimize low embodied carbon concrete design and deployment.', speakers: ['Kimberly Dowdell, VP Strategic Partnerships, Amrize'] },
        { time: '1:55–2:15 PM', title: 'Nuclear and Data Center Convergence: How Société Générale Sees Partnerships, Financing Structures, and Risk Mitigation Shaping Bankable, Large-Scale Deployments', speakers: ['Matt Kittell, Senior Financial Specialist, Société Générale'] },
        { time: '2:15–2:35 PM', title: 'Land, Leasing, and Real Estate Models', speakers: ['Jim Costello, Head of Real Estate Economics, Chief Economist, MSCI Real Assets'] },
        { time: '2:35 PM', title: 'Closing Remarks', type: 'closing' },
      ],
    },
    {
      label: 'Day 2',
      date: 'May 14, 2026',
      subtitle: 'Powering Data Centers & Grid Expansion — Onsite Power Generation',
      sessions: [
        { time: '8:00–9:00 AM', title: 'Registration & Networking with Breakfast', type: 'break' },
        { time: '9:00–9:30 AM', title: 'Opening Remarks: Balancing Affordability & Reliability', speakers: ['Rajiv Bazaj, Vice President, Energy & Sustainability Solutions, Constellation'] },
        { time: '9:30–10:00 AM', title: 'Hybrid Energy Systems: The Importance for Data Center Expansion', speakers: ['Mick Gilbert (Moderator), Board Member, Decarb Summits', 'Peter Hoegler, Associate Director, Data Center Solutions, EDF Power Solutions North America', 'Hassan Saleh, CEO, VTV Energy'] },
        { time: '10:00–10:30 AM', title: 'Coffee & Networking', type: 'break' },
        { time: '10:30–11:00 AM', title: 'Battery Energy Storage Systems (BESS) Solutions', subtitle: 'Peak shaving, resiliency, and fast-response grid support', speakers: ['Jon M. Williams, Chairman & CEO, Viridi'] },
        { time: '11:00–11:30 AM', title: 'Bring Your Own Capacity for Data Centers', speakers: ['Scott Donachie (Moderator), CEO, Decarb Summits', 'Matthew Carmody, Director of Digital Infrastructure, Voltus'] },
        { time: '11:30–11:50 AM', title: 'Fireside Chat: Onsite Power Generation Turnkey Solutions — Power Plant as a Service', speakers: ['David Deutsch, COO, New Power Solutions', 'Scott Donachie (Moderator), CEO, Decarb Summits'] },
        { time: '11:50 AM–12:20 PM', title: 'Unique Capital Strategies: Exploring Proven Methods of Preserving or Recycling Capital While Retaining Site Control', speakers: ['Larry Skennion (Moderator), CEO, Green Panther Advisory', 'Brian Tormey, President, TitleVest', 'Graeme Kavanagh, Partner and CRO, Accelerate Infrastructure Opportunities'] },
        { time: '12:20–1:00 PM', title: 'Lunch & Networking', type: 'break' },
        { time: '1:00–2:00 PM', title: 'Waste Heat Recovery & Geothermal Solutions', subtitle: 'Capturing, repurposing, and monetizing data center thermal output.', speakers: ['Eric Bosworth (Moderator), Principal, Thermal Energy Insights', 'Matthew Kaplan, VP of Project Development, Brightcore Energy', 'Ambroise Lalloz, AI & Energy, First Block', 'Alexander Jahn, Innovation Advisor, NYSERDA', 'Will Pettitt, Global Geothermal Lead, Baker Hughes', 'Esther Tierney, Senior Product Manager, Trane Technologies'] },
        { time: '2:00–2:40 PM', title: 'Behind-the-Meter Data Center Solutions & Microgrids', subtitle: 'Hyperscale data center solutions cannot get the capacity from utility companies and must embrace new grid tech', speakers: ['Fulya Kocak (Moderator), CEO & Founder, Fulya Kocak LLC', 'Malio West, Senior Partner, Global Accounting', 'Dennis Garrett, CEO, Blue Lake Clean Energy Group', 'Jay Peck, Principal, Brookhaven Sustainability'] },
        { time: '2:40 PM', title: 'Closing Remarks', speakers: ['Scott Donachie, CEO, Decarb Summits'], type: 'closing' },
      ],
    },
  ];

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
        {'subtitle' in days[activeDay] && days[activeDay].subtitle && (
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
                {'subtitle' in session && session.subtitle && (
                  <p className="text-secondary/80 text-xs font-body italic mt-1.5 leading-snug normal-case">{session.subtitle}</p>
                )}
                {'speakers' in session && session.speakers && (
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

const Attendance = () => (
  <section id="agenda" className="py-32 bg-background scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="p-12 bg-surface-container-high border border-outline-variant relative overflow-hidden group">
        <h2 className="font-headline text-3xl font-black text-white uppercase mb-8">Why Attend?</h2>
        <ul className="space-y-6">
          {[
            'Gain exclusive access to roadmap reveals for next-generation cooling and power systems.',
            'Network with the elite 1% of data center engineers and sustainability officers.',
            'Direct Q&A sessions with regulatory bodies shaping the future of industrial data usage.'
          ].map(text => (
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
          {['Investors', 'Land Developers', 'Data Center Developers', 'Hyper Scalers', 'AI Pioneers', 'Onsite Power Providers'].map(item => (
            <div key={item} className="p-4 border border-on-primary/40 flex items-center justify-center text-center min-h-[56px]">{item}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section id="sponsors" className="py-24 border-y border-outline-variant/30 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-center gap-4 mb-16 flex-wrap text-center">
        <span className="material-symbols-outlined text-primary">handshake</span>
        <p className="font-headline text-[10px] tracking-[0.4em] text-secondary/60 uppercase font-bold">Supporting Members</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {[
          { name: 'Constellation Energy', url: 'https://www.constellationenergy.com' },
          { name: 'NYSERDA', url: 'https://www.nyserda.ny.gov' },
          { name: 'Trane Technologies', url: 'https://www.tranetechnologies.com' },
          { name: 'Brightcore', url: 'https://www.brightcoreenergy.com' },
          { name: 'Voltus', url: 'https://www.voltus.co' },
          { name: 'CPower', url: 'https://cpowerenergy.com' },
          { name: 'Ainsworth GDI', url: 'https://www.gdi.com' },
          { name: 'Green Panther Advisory Services', url: 'https://www.greenpantheradvisory.com' },
        ].map(p => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="font-headline font-black text-white tracking-tighter text-sm uppercase opacity-60 hover:opacity-100 active:opacity-100 transition-all">{p.name}</a>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => {
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
          <p className="text-secondary text-xl max-w-md mx-auto">Sign up for updates on the Data Center Summit 2026 and future Decarb Summits events.</p>
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

export default function App() {
  const [ticketOpen, setTicketOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-background">
      <TicketModal open={ticketOpen} onClose={() => setTicketOpen(false)} />
      <Navbar onGetTicket={() => setTicketOpen(true)} />
      <Hero onGetTicket={() => setTicketOpen(true)} />
      <FeaturedSpeakers />
      <Speakers />
      <Schedule />
      <Attendance />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
}
