/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#08092d] backdrop-blur-md bg-opacity-80 border-b border-[#43456A]/20 flex justify-between items-center px-8 h-20">
    <div className="flex items-center">
      <img alt="DECARB SUMMITS" className="w-[180px] h-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ug4g9CUoVYU149kio7IXrTbW3Msjiw-z-9WYU-Q1nfrPr4dGXjkI2XIwUpyOIuCA-9bHQA2gO6sqVf8CZidlESUNnGoc8sN32TPsg3SWycY7E1-vAVuw-PeBWbd9fEgKYoAVyxgFJpHbzOz4_yp6VZ8bQpkQO34JqB0MR1CIzttHawB2dT1awUNvs5MIjl10iy1ilrnZT8iyYql6aTrHcNPUI9V7KVJWLSV70HPZtaw8a55PxR5lJ2ORA06E9R_4Lrp8W9RiLxc4g" />
    </div>
    <div className="hidden md:flex items-center gap-8">
      {['Speakers', 'Agenda', 'Sponsors', 'Venue'].map(item => (
        <a key={item} className="font-headline uppercase tracking-widest text-xs font-bold text-secondary hover:text-primary transition-colors" href="#">{item}</a>
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
      <p className="max-w-2xl mx-auto text-secondary text-lg md:text-xl font-light leading-relaxed mb-12">Join industry leaders, visionaries, and technical architects as we define the next generation of synthetic infrastructure and high-frequency data ecosystems.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button className="bg-primary text-on-primary px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all">SECURE YOUR SPOT</button>
        <button className="border border-outline text-white px-10 py-4 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all">VIEW AGENDA</button>
      </div>
    </div>
  </header>
);

const Highlights = () => (
  <section className="py-32 bg-surface-container-low relative border-y border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-headline text-4xl font-black text-white uppercase tracking-tight mb-12 border-l-4 border-primary pl-6">Summit Highlights</h2>
          <div className="space-y-8">
            {[
              { icon: 'network_node', title: 'Core Infrastructure', desc: 'Deep dives into next-gen hardware architectures and cooling technologies for hyperscale environments.' },
              { icon: 'bolt', title: 'Sustainable Power', desc: 'Innovative energy solutions and carbon-neutral strategies for global data operations.' },
              { icon: 'security', title: 'Quantum Security', desc: 'Preparing the infrastructure layer for the post-quantum cryptography transition.' }
            ].map(item => (
              <div key={item.title} className="flex gap-6 group">
                <div className="flex-none w-12 h-12 flex items-center justify-center bg-surface-container-high border border-outline-variant text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl text-white mb-2 uppercase font-bold">{item.title}</h3>
                  <p className="text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square border border-outline-variant/50 p-4">
            <img alt="" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB51ndJ-slrk8EkOLxcmwNWg5v1CQGvEuq990pTg5DyUXjwqYxc7lAp0vpz4USrt1Vk51bUFlIZcqFV2ai0bNoOoIOLAjB5iz1HsNtBPfGLEvulOINFrdO_IdkkSJ5zMOou5an*DVW864_tI_0NrWYPx6mLpdcWNzzeofkWcRV5Qrw6u_IDPgm7PVOPR6JA31aaZVAo4_wu8kLuIt4wRJWajf0Y9IYhPuG2m5bLT_F3Tn8daqvTplKx41O_5lUyRiYNfnCX4Vetqlo" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary p-6 flex items-center justify-center text-on-primary font-headline font-black text-4xl">2026</div>
        </div>
      </div>
    </div>
  </section>
);

const Speakers = () => {
  const speakers = [
    { name: 'Rajiv Bazaj', title: 'VP, Energy & Sustainability, Constellation' },
    { name: 'Bill Thomas', title: 'Chief Energy Officer, CleanArc Data Centers' },
    { name: 'Matt Kittell', title: 'Senior Financial Specialist, Societe Generale' },
    { name: 'Jim Costello', title: 'Head of Real Estate Economics, MSCI' },
    { name: 'Peter Hoegler', title: 'Senior Manager Data Center Solutions, EDF Power Solutions' },
    { name: 'Kelsyn Rooks', title: 'Director of Strategic Accounts, Cupix' },
    { name: 'Hal Corin', title: 'Head of Development, Viridi' },
    { name: 'Ambroise Lalloz', title: 'AI & Energy, First Block' },
    { name: 'Dr. Malio West', title: 'Senior Partner, Global Accounting' },
    { name: 'Aundre Oldacre', title: 'Managing Partner, AoRa Development' },
    { name: 'Dennis Garrett', title: 'CEO, Blue Lake Clean Energy' },
    { name: 'Brian Weed', title: 'VP, GDI Integrated Facility Services' },
    { name: 'Jay Peck', title: 'Managing Partner, Brookhaven Sustainability' },
    { name: 'Eric Bosworth', title: 'Principal, Thermal Energy Insights' },
    { name: 'Matthew Kaplan', title: 'VP, Brightcore Energy' },
    { name: 'Fulya Kocak', title: 'CEO & Founder, Fulya Kocak, LLC' },
    { name: 'David Deutsch', title: 'COO, New Power Solutions' },
    { name: 'Hassan Saleh', title: 'CEO, VTV Energy' },
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="font-headline text-5xl font-black text-white uppercase tracking-tighter mb-4">Confirmed Speakers</h2>
        <div className="h-1 w-24 bg-primary mx-auto"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map(s => (
          <div key={s.name} className="bg-surface-container p-6 border-l-2 border-transparent hover:border-primary hover:bg-surface-container-high transition-all group cursor-default">
            <h3 className="font-headline text-xl text-white uppercase group-hover:text-primary transition-colors font-bold">{s.name}</h3>
            <p className="text-secondary text-xs font-label uppercase tracking-wider mt-1">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Attendance = () => (
  <section className="py-32 bg-background">
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
          {['CTOs & VPs', 'Data Architects', 'Facility Managers', 'Green Ops Leads', 'Network Engineers', 'IT Procurement'].map(item => (
            <div key={item} className="p-4 border border-on-primary/20">{item}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Partners = () => (
  <section className="py-24 border-y border-outline-variant/30">
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
  <section className="py-32 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="font-headline text-4xl md:text-6xl font-black text-white uppercase mb-8">Register now and secure your spot!</h2>
      <p className="text-secondary text-xl mb-12">Early bird pricing ends April 15. Capacity limited to 500 delegates for high-fidelity networking.</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="p-4 bg-white border-4 border-primary shadow-2xl">
          <img alt="Registration QR Code" className="w-48 h-48" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnA-d44IGwLzdSD5hKOWoH1p2mwa6vEzvndamJ17zp1Yq3aKrFRa-Wpue2I8d-8Bes8P21HQ57fUmTntieaxlkMeW66-0L5dI_EX6lnlX9GC3lXXt3wasPCHkF4nhcMXneWVGH5-hkGYFAmg3Jyen7IbjzLD0OBI9Naahm0BuHiIzEINFrvi_JiJMPBuBHPt0jIqk0yhi1VAeuZb0doq4eiRza_lESFwoDnAvzl9erDVPHZ6mqHhALVjkE9u7IhLfTA_qySEK9i-k" referrerPolicy="no-referrer" />
        </div>
        <div className="text-left">
          <p className="font-headline font-black text-primary text-xl mb-4">SCAN TO REGISTER</p>
          <p className="text-secondary text-sm max-w-xs mb-8">Direct registration portal for enterprise accounts and individual delegates. Secure payment handled by SSL Encryption.</p>
          <button className="bg-primary text-on-primary px-12 py-5 font-headline font-black uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(212,255,91,0.4)] transition-all">REGISTER ONLINE</button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#08092d] py-12 border-t border-[#43456A]/20">
    <div className="flex flex-col md:flex-row justify-between items-center px-10 w-full max-w-7xl mx-auto">
      <img alt="DECARB SUMMITS" className="w-[150px] h-auto" src="https://lh3.googleusercontent.com/aida/ADBb0ug4g9CUoVYU149kio7IXrTbW3Msjiw-z-9WYU-Q1nfrPr4dGXjkI2XIwUpyOIuCA-9bHQA2gO6sqVf8CZidlESUNnGoc8sN32TPsg3SWycY7E1-vAVuw-PeBWbd9fEgKYoAVyxgFJpHbzOz4_yp6VZ8bQpkQO34JqB0MR1CIzttHawB2dT1awUNvs5MIjl10iy1ilrnZT8iyYql6aTrHcNPUI9V7KVJWLSV70HPZtaw8a55PxR5lJ2ORA06E9R_4Lrp8W9RiLxc4g" />
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
      <Highlights />
      <Speakers />
      <Attendance />
      <Partners />
      <FinalCTA />
      <Footer />
    </div>
  );
}
