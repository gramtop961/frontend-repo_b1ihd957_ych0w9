import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Lock, Workflow, Server, Terminal, Share2, Database, Key, Link2, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Section = ({ id, children }) => (
  <section id={id} className="w-full py-20 md:py-28">
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
    {children}
  </span>
);

function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow">
              <Code2 size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Voxel</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#how" className="text-sm text-white/80 hover:text-white">Fonctionnement</a>
            <a href="#integrations" className="text-sm text-white/80 hover:text-white">Intégrations</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-white/80 ring-1 ring-white/20 hover:text-white md:block">Try Voxel</a>
            <a href="#cta" className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="relative isolate min-h-[95vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950"></div>

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-[95vh] max-w-7xl items-center px-6 pb-24 pt-36 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <Zap size={14} /> Expérience instantanée
              </Badge>
              <Badge>
                <Shield size={14} /> Sécurité de niveau entreprise
              </Badge>
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              L'orchestrateur intelligent de vos projets SaaS
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Voxel initialise, synchronise et maintient vos projets – frontend, backend, base de données et CI/CD – avec une CLI intelligente, un locker sécurisé et une collaboration temps réel.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
                <Rocket size={16} /> Try Voxel
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15">
                Voir les features
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Terminal size={16} /> CLI intelligente
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} /> Locker sécurisé
              </div>
              <div className="flex items-center gap-2">
                <Share2 size={16} /> Collaboration temps réel
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: <Rocket className="h-5 w-5" />, 
    title: "Initialisation instantanée",
    desc: "Générez un projet complet prêt à déployer: frontend, backend, base de données et CI/CD, en quelques secondes.",
  },
  {
    icon: <Link2 className="h-5 w-5" />, 
    title: "Synchronisation totale",
    desc: "Dépendances et clés d'API alignées entre vos services et plateformes (Vercel, Neon, Stripe, etc.).",
  },
  {
    icon: <Terminal className="h-5 w-5" />, 
    title: "CLI autonome",
    desc: "Crée, configure et maintient vos environnements avec des commandes simples et intelligentes.",
  },
  {
    icon: <Lock className="h-5 w-5" />, 
    title: "Locker sécurisé",
    desc: "Stockez et partagez vos variables d'environnement via un coffre chiffré, contrôlé par rôles.",
  },
  {
    icon: <Workflow className="h-5 w-5" />, 
    title: "Multi-appel + cache réactif",
    desc: "Architecture orientée flux pour des intégrations connectées et sans rechargement.",
  },
  {
    icon: <Zap className="h-5 w-5" />, 
    title: "Performance perçue",
    desc: "UI optimisée pour des interactions instantanées et une navigation fluide.",
  },
];

function Features() {
  return (
    <Section id="features">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Tout pour aller vite, sans compromis</h2>
        <p className="mt-4 text-slate-600">Pensé pour les développeurs, équipes produit et studios tech qui veulent livrer plus vite en automatisant l'essentiel.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    {
      title: "1. Init",
      desc: "Générez la structure complète d'un projet avec les bonnes conventions et pipelines.",
      icon: <Server className="h-5 w-5" />,
    },
    {
      title: "2. Sync",
      desc: "Connectez vos comptes (Vercel, Neon, Stripe…) et laissez Voxel aligner dépendances et secrets.",
      icon: <Link2 className="h-5 w-5" />,
    },
    {
      title: "3. Ship",
      desc: "Déployez en un clic via la CLI, avec environnements gérés et monitoring prêt à l'emploi.",
      icon: <Rocket className="h-5 w-5" />,
    },
  ];
  return (
    <Section id="how">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Comment ça marche</h2>
        <p className="mt-4 text-slate-600">Un flux simple qui automatise 90% du travail répétitif. Vous gardez le contrôle sur l'essentiel: le produit.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white">
              {s.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Integrations() {
  const items = [
    { name: 'Vercel' },
    { name: 'Neon' },
    { name: 'Stripe' },
    { name: 'GitHub' },
    { name: 'Supabase' },
    { name: 'AWS' },
  ];
  return (
    <Section id="integrations">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">S'intègre à votre stack</h2>
        <p className="mt-4 text-slate-600">Connectez vos outils favoris et laissez Voxel assurer la cohérence des environnements.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm font-medium text-slate-700 shadow-sm"
          >
            {it.name}
          </div>
        ))}
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section id="cta">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.35),transparent_35%)]"></div>
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Essayez Voxel dès maintenant</h3>
            <p className="mt-2 max-w-xl text-white/80">Gagnez des heures chaque semaine en automatisant l'init, la sync et la maintenance de vos projets. Sécurité incluse.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
                <Rocket size={16} /> Get Started
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15">
                Voir les features
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            <div className="mb-3 flex items-center gap-2 text-white">
              <Shield size={16} /> Sécurité
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Key size={14} /> Locker chiffré avec contrôle d'accès</li>
              <li className="flex items-center gap-2"><Database size={14} /> Secrets synchronisés par environnement</li>
              <li className="flex items-center gap-2"><Share2 size={14} /> Partage sécurisé entre équipes et outils</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <FinalCTA />
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Voxel. Tous droits réservés.
      </footer>
    </div>
  );
}
