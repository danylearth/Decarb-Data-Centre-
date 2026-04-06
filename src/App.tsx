/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Linkedin } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#08092d] backdrop-blur-md bg-opacity-80 border-b border-[#43456A]/20 flex justify-between items-center px-8 h-20">
    <div className="flex items-center">
      <img alt="DECARB SUMMITS" className="w-[180px] h-auto" src="/decarb-summits.png" />
    </div>
    <div className="hidden md:flex items-center gap-8">
      {['Speakers', 'Agenda', 'Sponsors', 'Venue'].map(item => (
        <a key={item} className="font-headline uppercase tracking-widest text-xs font-bold text-secondary hover:text-primary transition-colors" href={`#${item.toLowerCase()}`}>{item}</a>
      ))}
    </div>
    <button className="bg-primary text-on-primary font-headline uppercase tracking-widest text-xs font-bold px-6 py-3 hover:bg-primary/90 active:scale-95 duration-75 transition-all">REGISTER NOW</button>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        <button className="bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all">SECURE YOUR SPOT</button>
        <button className="border border-outline text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">VIEW AGENDA</button>
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
          { name: 'Rajiv Bazaj', title: 'VP, Energy & Sustainability Solutions, Constellation', img: '/rajiv-bazaj.webp' },
          { name: 'Bill Thomas', title: 'Chief Energy Officer, CleanArc Data Centers', img: '/bill-thomas.png' },
        ].map(speaker => (
          <div key={speaker.name} className="group relative overflow-hidden border border-outline-variant/50">
            <div className="aspect-square overflow-hidden">
              <img alt={speaker.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" src={speaker.img} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6 pt-16">
              <h3 className="font-headline text-2xl text-white uppercase font-black">{speaker.name}</h3>
              <p className="text-secondary text-sm uppercase tracking-wider mt-1">{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Speakers = () => {
  const speakers = [
    { name: 'Rajiv Bazaj', title: 'VP, Energy & Sustainability Solutions, Constellation', linkedin: 'https://www.linkedin.com/in/rajiv-bazaj-b03225141/' },
    { name: 'Bill Thomas', title: 'Chief Energy Officer, CleanArc Data Centers', linkedin: '' },
    { name: 'Matt Kittell', title: 'Senior Financial Specialist, Societe Generale', linkedin: 'https://www.linkedin.com/in/matt-kittell-7582632/' },
    { name: 'Jim Costello', title: 'Head of Real Estate Economics, Chief Economist, MSCI', linkedin: 'https://www.linkedin.com/in/jim-costello-9277174/' },
    { name: 'Sheila Oviedo', title: 'Head of Climate Risk Products, S&P', linkedin: 'https://www.linkedin.com/in/sheilaoviedo/' },
    { name: 'Radhika Mehrotra', title: 'Head of Data & Channel Partnerships, Americas, CDP', linkedin: 'https://www.linkedin.com/in/radhika-mehrotra-5a06819/' },
    { name: 'Peter Hoegler', title: 'Senior Manager Data Center Solutions, EDF Power Solutions North America', linkedin: 'https://www.linkedin.com/in/peter-hoegler/' },
    { name: 'Kelsyn Rooks', title: 'Director of Strategic Accounts - AI Solutions, Cupix', linkedin: 'https://www.linkedin.com/in/kelsynrooks/' },
    { name: 'Jon Williams', title: 'Chairman & CEO, Viridi', linkedin: 'https://www.linkedin.com/in/jon-m-williams-1b741123a/' },
    { name: 'Ambroise Lalloz', title: 'Director of Strategic Development, First Block', linkedin: 'https://www.linkedin.com/in/ambroise-l/' },
    { name: 'Dr. Malio West', title: 'Senior Partner, Global Accounting', linkedin: 'https://www.linkedin.com/in/dr-malio-west-pmp-cma-999a2712/' },
    { name: 'Aundre Oldacre', title: 'Co-Founder & Managing Partner, AoRa Development', linkedin: 'https://www.linkedin.com/in/aundreoldacre/' },
    { name: 'Dennis Garrett', title: 'CEO, Blue Lake Clean Energy', linkedin: 'https://www.linkedin.com/in/djgarrett/' },
    { name: 'Brian Weed', title: 'VP Critical & Controlled Environment Services, GDI Integrated Facility Services', linkedin: 'https://www.linkedin.com/in/brianweed17/' },
    { name: 'Jay Peck', title: 'Managing Partner, Brookhaven Sustainability', linkedin: 'https://www.linkedin.com/in/jay-peck-64459725/' },
    { name: 'Eric Bosworth', title: 'Principal, Thermal Energy Insights', linkedin: 'https://www.linkedin.com/in/ericbosworth/' },
    { name: 'Matthew Kaplan', title: 'VP of Geothermal, Brightcore Energy', linkedin: 'https://www.linkedin.com/in/mattkaplan/' },
    { name: 'Fulya Kocak', title: 'CEO & Founder, Fulya Kocak, LLC', linkedin: 'https://www.linkedin.com/in/fulyakocak/' },
    { name: 'David Deutsch', title: 'COO, New Power Solutions', linkedin: 'https://www.linkedin.com/in/dedeutsch/' },
    { name: 'Hassan Saleh', title: 'CEO, VTV Energy', linkedin: 'https://www.linkedin.com/in/hassan-saleh-457a9a170/' },
    { name: 'Kelly Bacon', title: 'Principal, Vice President, Buildings + Places, AECOM', linkedin: 'https://www.linkedin.com/in/kelly-bacon-a4220713/' },
    { name: 'Matt Short', title: 'Chief Commercial Officer, Paddle Energy', linkedin: 'https://www.linkedin.com/in/matt-short-6b26605/' },
    { name: 'David Sattler', title: 'CEO, Marstecs, SCDesign', linkedin: 'https://www.linkedin.com/in/david-sattler-6421918/' },
    { name: 'Larry Skennion', title: 'CEO, Green Panther Advisory', linkedin: 'https://www.linkedin.com/in/larry-skennion-ms-a410921/' },
    { name: 'Alexander Schneider', title: 'Regional Sales Manager, Voltus', linkedin: 'https://www.linkedin.com/in/alex-schneider-9131ba79/' },
    { name: 'Scott Donachie', title: 'CEO, Decarb Summits', linkedin: 'https://www.linkedin.com/in/scott-donachie-5683787/' },
  ];

  return (
    <section id="speakers" className="py-32 bg-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="font-headline text-5xl font-black text-white uppercase tracking-tighter mb-4">Confirmed Speakers</h2>
        <div className="h-1 w-24 bg-primary mx-auto"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map(s => {
          const Wrapper = s.linkedin ? 'a' : 'div';
          const linkProps = s.linkedin ? { href: s.linkedin, target: '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <Wrapper key={s.name} {...linkProps} className="bg-surface-container p-6 border-l-2 border-transparent hover:border-primary hover:bg-surface-container-high transition-all group cursor-pointer block">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-headline text-xl text-white uppercase group-hover:text-primary transition-colors font-bold">{s.name}</h3>
                  <p className="text-secondary text-xs font-label uppercase tracking-wider mt-1">{s.title}</p>
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
        <h2 className="font-headline text-3xl font-black uppercase mb-8">Who Should Attend?</h2>
        <div className="grid grid-cols-2 gap-6 font-headline font-bold uppercase text-sm tracking-widest">
          {['Industry Leaders', 'Developers', 'Hyper Scalers', 'Investors'].map(item => (
            <div key={item} className="p-4 border border-on-primary/20">{item}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section id="sponsors" className="py-24 border-y border-outline-variant/30 scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-center gap-4 mb-16">
        <span className="material-symbols-outlined text-primary">handshake</span>
        <p className="font-headline text-[10px] tracking-[0.4em] text-secondary/60 uppercase font-bold">Supporting Members & Global Partners</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-80 hover:opacity-100 transition-all">
        {[
          { name: 'CONSTELLATION', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3p6g9_Ym6W8sC8R-U-8yV-X9_Z-R0x-P-O-L-Y-B-O-R-I-G-I-N-A-L-1' },
          { name: 'TRANE', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3p6g9_Ym6W8sC8R-U-8yV-X9_Z-R0x-P-O-L-Y-B-O-R-I-G-I-N-A-L-2', italic: true },
          { name: 'BRIGHTCORE', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3p6g9_Ym6W8sC8R-U-8yV-X9_Z-R0x-P-O-L-Y-B-O-R-I-G-I-N-A-L-3' },
          { name: 'AINSWORTH', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3p6g9_Ym6W8sC8R-U-8yV-X9_Z-R0x-P-O-L-Y-B-O-R-I-G-I-N-A-L-4' },
          { name: 'GDI AINSWORTH', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3p6g9_Ym6W8sC8R-U-8yV-X9_Z-R0x-P-O-L-Y-B-O-R-I-G-I-N-A-L-5', border: true },
        ].map(p => (
          <div key={p.name} className="flex flex-col items-center">
            <img alt={p.name} className="h-20 mb-4" src={p.src} referrerPolicy="no-referrer" />
            <span className={`font-black text-white tracking-tighter text-sm ${p.italic ? 'italic uppercase' : ''} ${p.border ? 'border-2 border-white px-2' : ''}`}>{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="venue" className="py-32 relative overflow-hidden scroll-mt-20">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase mb-8">Register now and secure your spot!</h2>
      <p className="text-secondary text-xl mb-12">Early bird pricing ends April 15. Capacity limited to 500 delegates for high-fidelity networking.</p>
      <button className="bg-primary text-on-primary px-12 py-5 font-headline font-black uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(212,255,91,0.4)] transition-all">REGISTER ONLINE</button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#08092d] py-12 border-t border-[#43456A]/20">
    <div className="flex flex-col md:flex-row justify-between items-center px-10 w-full max-w-7xl mx-auto">
      <img alt="DECARB SUMMITS" className="w-[150px] h-auto" src="/decarb-summits.png" />
      <div className="flex gap-8 my-6 md:my-0">
        {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Contact'].map(link => (
          <a key={link} className="font-headline uppercase text-[10px] tracking-widest text-secondary hover:text-primary transition-all" href="#">{link}</a>
        ))}
      </div>
      <div className="font-headline uppercase text-[10px] tracking-widest text-secondary">© 2024 DECARB SUMMITS. ALL RIGHTS RESERVED.</div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedSpeakers />
      <Speakers />
      <Attendance />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
}
