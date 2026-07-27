import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Hand,
  Sparkles,
  Gem,
  Truck,
  Check,
  Plus,
  Minus,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Star,
  MessageCircle,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import colDecor from "@/assets/col-decor.jpg";
import colMesa from "@/assets/col-mesa.jpg";
import colMacetas from "@/assets/col-macetas.jpg";
import colAlcancias from "@/assets/col-alcancias.jpg";
import colEspecial from "@/assets/col-especial.jpg";
import mayoristas from "@/assets/mayoristas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cerámicas Martin i Ross · Fábrica de cerámica artesanal en Cali" },
      {
        name: "description",
        content:
          "Fábrica colombiana en Cali de cerámica artesanal. Macetas, mesa, decoración y ediciones especiales hechas a mano. Envíos nacionales.",
      },
      { property: "og:title", content: "Cerámicas Martin i Ross · Cerámica artesanal colombiana" },
      {
        property: "og:description",
        content:
          "Piezas de cerámica hechas a mano en Cali. Fabricación propia, diseño contemporáneo, tradición artesanal.",
      },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span className="inline-block h-px w-6 bg-olive/60" />
      {children}
    </span>
  );
}

function Button({
  children,
  variant = "solid",
  href = "#",
  className = "",
  compact = false,
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "light";
  href?: string;
  className?: string;
  compact?: boolean;
}) {
  const base = compact
    ? "group inline-flex items-center gap-1.5 px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.15em] font-medium transition-all duration-500 md:px-6 md:py-3.5 md:text-[0.78rem] md:tracking-[0.2em] md:gap-2"
    : "group inline-flex items-center gap-2 px-6 py-3.5 text-[0.78rem] uppercase tracking-[0.2em] font-medium transition-all duration-500";
  const styles = {
    solid: "bg-charcoal text-bone hover:bg-terracota",
    ghost:
      "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-bone",
    light: "border border-bone/40 text-bone hover:bg-bone hover:text-charcoal",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-45 md:h-4 md:w-4" />
    </a>
  );
}

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Mayoristas", href: "#mayoristas" },
  { label: "Contacto", href: "#contacto" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${scrolled ? "bg-bone shadow-sm" : "bg-bone/95 backdrop-blur-sm"
          }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-2.5 md:px-10 md:py-4">
          <a href="#inicio" className="flex items-center gap-2">
            <img src="/favicon.ico" alt="Martin i Ross" className="h-8 w-8 rounded-full md:h-11 md:w-11" />
            <span className="font-display text-[1.1rem] tracking-tight text-charcoal md:text-xl">
              Martin <span className="italic text-clay">i</span> Ross
            </span>
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[0.75rem] uppercase tracking-[0.16em] text-charcoal/75 transition-colors hover:text-charcoal"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracota transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="#contacto"
              className="hidden items-center gap-2 bg-terracota px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-bone transition-all duration-500 hover:bg-charcoal md:inline-flex"
            >
              Cotizar
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            {/* Mobile: compact CTA pill */}
            <a
              href="#contacto"
              className="flex items-center gap-1.5 bg-terracota px-3.5 py-2 text-[0.62rem] uppercase tracking-[0.14em] text-bone transition-all duration-300 hover:bg-charcoal lg:hidden"
            >
              Cotizar
            </a>
            <button
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
              className="grid h-8 w-8 place-items-center border border-charcoal/20 lg:hidden"
            >
              <Menu className="h-3.5 w-3.5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[2000] flex flex-col bg-bone"
          >
            <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <img src="/favicon.ico" alt="Martin i Ross" className="h-8 w-8 rounded-full" />
                <span className="font-display text-[1.05rem]">
                  Martin <span className="italic text-clay">i</span> Ross
                </span>
              </div>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border border-charcoal/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col justify-center gap-1 px-6">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="flex items-center justify-between border-b border-charcoal/8 py-4 font-display text-[2rem] text-charcoal transition-colors hover:text-terracota"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-charcoal/30" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="border-t border-charcoal/10 px-6 py-6">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-terracota py-3.5 text-[0.72rem] uppercase tracking-[0.18em] text-bone transition-all hover:bg-charcoal"
              >
                Solicitar cotización
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative w-full overflow-hidden bg-charcoal h-[85svh] md:h-[100svh]"
      style={{ minHeight: '520px' }}
    >
      {/* Background image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Piezas de cerámica artesanal de Martin i Ross"
          className="h-full w-full object-cover object-center"
          width={1920}
          height={1280}
        />
        {/* Mobile: stronger overlay. Desktop: original subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/20 md:from-charcoal/70 md:via-charcoal/20 md:to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent md:hidden" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-6 md:mx-auto md:max-w-[1400px] md:px-10 md:pb-32">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-3 hidden sm:block md:mb-8"
        >
          {/* Mobile/tablet version */}
          <span className="eyebrow text-bone/70 md:hidden">
            <span className="mr-2 inline-block h-px w-6 bg-bone/50 align-middle" />
            Cali · Colombia
          </span>
          {/* Desktop version — original full text */}
          <span className="eyebrow hidden text-bone/70 md:inline">
            <span className="mr-3 inline-block h-px w-8 bg-bone/50 align-middle" />
            Cali · Colombia · Desde el corazón del Valle
          </span>
        </motion.div>

        {/* ── MOBILE headline (simple, compact) ── */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[2.1rem] leading-[1.0] text-bone sm:text-[2.8rem] md:hidden"
        >
          La belleza de la<br />
          <span className="italic text-clay">cerámica</span>{" "}
          hecha a mano.
        </motion.h1>

        {/* ── DESKTOP headline (original word-by-word animation) ── */}
        <h1 className="hidden font-display text-[5.5rem] leading-[0.95] text-bone lg:text-[7rem] md:block">
          {"La belleza de la".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="mr-4 inline-block"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="inline-block italic text-clay"
          >
            cerámica
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="inline-block"
          >
            hecha a mano.
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-3 max-w-sm text-[0.85rem] leading-relaxed text-bone/80 sm:max-w-md sm:text-[0.95rem] md:mt-10 md:max-w-xl md:text-[1.05rem] md:text-bone/85"
        >
          <span className="sm:hidden">Cerámica artesanal desde Cali, hecha a mano.</span>
          <span className="hidden sm:inline md:hidden">Desde Cali creamos piezas artesanales que combinan tradición colombiana y diseño contemporáneo.</span>
          <span className="hidden md:inline">Desde Cali creamos piezas artesanales que combinan tradición colombiana y diseño contemporáneo para transformar cada espacio.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-4 flex items-center gap-2.5 md:mt-10 md:gap-3"
        >
          <Button
            href="#colecciones"
            variant="solid"
            compact
            className="!bg-bone !text-charcoal hover:!bg-terracota hover:!text-bone"
          >
            Ver colecciones
          </Button>
          <Button href="#contacto" variant="light" compact>
            <span className="md:hidden">Cotizar</span>
            <span className="hidden md:inline">Solicitar cotización</span>
          </Button>
        </motion.div>

        {/* Trust badges inline — mobile/tablet only (md uses the absolute bar below) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-5 grid grid-cols-2 gap-px border-t border-bone/15 md:hidden"
        >
          {["Fabricación propia", "Cerámica artesanal", "Envíos nacionales", "Diseño colombiano"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center gap-2 bg-charcoal/50 px-3 py-2.5 text-[0.62rem] uppercase tracking-[0.1em] text-bone/80 backdrop-blur-sm"
              >
                <Check className="h-3 w-3 shrink-0 text-clay" strokeWidth={2.5} />
                {t}
              </div>
            ),
          )}
        </motion.div>
      </div>

      {/* ── DESKTOP: original absolute bottom tags bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 hidden border-t border-bone/15 bg-charcoal/40 backdrop-blur-sm md:block"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-px bg-bone/15">
          {["Fabricación propia", "Cerámica artesanal", "Envíos nacionales", "Diseño colombiano"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center gap-2 bg-charcoal/70 px-6 py-4 text-[0.72rem] uppercase tracking-[0.15em] text-bone/85"
              >
                <Check className="h-3.5 w-3.5 text-clay" strokeWidth={2.5} />
                {t}
              </div>
            ),
          )}
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Hecho a mano",
    "Diseño contemporáneo",
    "Tradición colombiana",
    "Fabricación propia",
    "Piezas únicas",
    "Envíos a toda Colombia",
  ];
  return (
    <section className="overflow-hidden border-y border-charcoal/10 bg-bone py-4 md:py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-5 flex items-center gap-5 font-display text-xl italic text-charcoal/80 md:mx-8 md:gap-8 md:text-5xl"
          >
            {t}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-terracota" />
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function Story() {
  return (
    <section id="nosotros" className="relative bg-bone py-14 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 md:px-10 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.img
                src={story}
                alt="Artesano modelando cerámica en el taller"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover md:aspect-[4/5]"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden bg-bone p-6 md:block">
              <p className="font-display text-4xl italic text-terracota">10+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-charcoal/70">Años de oficio</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <Eyebrow>Nuestra historia</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-charcoal md:mt-6 md:text-6xl lg:text-7xl">
              Tradición <br />
              convertida <br />
              en <span className="italic text-terracota">diseño.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-charcoal/75 md:mt-10 md:space-y-6 md:text-[1.02rem]">
              <p>
                Nacimos en Cali como una fábrica familiar y hoy seguimos moldeando cada pieza con
                nuestras manos. Trabajamos arcillas locales, esmaltes propios y hornos que conocemos
                de memoria.
              </p>
              <p>
                Combinamos la sabiduría del oficio con una mirada contemporánea del diseño, para
                crear objetos que duran generaciones y elevan cualquier espacio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-charcoal/10 pt-6 md:mt-12 md:gap-8 md:pt-10">
              {[
                ["Fabricación propia", "Taller en Cali"],
                ["Materiales", "Arcilla y esmalte"],
                ["Identidad", "Colombiana"],
                ["Enfoque", "Diseño de autor"],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="eyebrow text-charcoal/50">{k}</p>
                  <p className="mt-2 font-display text-xl text-charcoal">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Valores() {
  const items = [
    {
      icon: Hand,
      title: "Hecho a mano",
      text: "Cada pieza pasa por las manos de nuestros artesanos, sin moldes industriales.",
    },
    {
      icon: Sparkles,
      title: "Diseño exclusivo",
      text: "Colecciones limitadas pensadas para acompañar espacios contemporáneos.",
    },
    {
      icon: Gem,
      title: "Materiales de calidad",
      text: "Arcillas seleccionadas y esmaltes propios que garantizan resistencia y color estable.",
    },
    {
      icon: Truck,
      title: "Envíos seguros",
      text: "Embalaje protector y despachos a toda Colombia con seguimiento.",
    },
  ];
  return (
    <section className="bg-sand/60 py-14 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Lo que nos define</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:mt-6 md:text-6xl">
              Un oficio hecho con <span className="italic text-terracota">intención.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-px bg-charcoal/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="group bg-sand/60">
              <div className="flex h-full flex-col justify-between bg-bone p-6 transition-all duration-500 group-hover:bg-charcoal group-hover:text-bone md:p-10">
                <div>
                  <it.icon
                    className="h-8 w-8 text-terracota transition-colors group-hover:text-clay"
                    strokeWidth={1.2}
                  />
                  <h3 className="mt-5 font-display text-2xl md:mt-8 md:text-3xl">{it.title}</h3>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-charcoal/70 transition-colors group-hover:text-bone/70">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const COLLECTIONS = [
  { name: "Decoración", desc: "Piezas escultóricas para vivir con arte.", img: colDecor, tag: "Decoración" },
  { name: "Mesa", desc: "Vajilla artesanal que celebra los rituales diarios.", img: colMesa, tag: "Mesa" },
  { name: "Macetas", desc: "Terracotas que enmarcan y honran cada planta.", img: colMacetas, tag: "Macetas" },
  {
    name: "Alcancías",
    desc: "Íconos colombianos reinterpretados con oficio.",
    img: colAlcancias,
    tag: "Alcancías",
  },
  {
    name: "Ediciones especiales",
    desc: "Series limitadas firmadas por nuestros maestros.",
    img: colEspecial,
    tag: "Ediciones especiales",
  },
];

function Colecciones() {
  const [filter, setFilter] = useState<string>("Todas");
  const filters = ["Todas", ...COLLECTIONS.map((c) => c.tag)];
  const visible = filter === "Todas" ? COLLECTIONS : COLLECTIONS.filter((c) => c.tag === filter);
  return (
    <section id="colecciones" className="bg-bone py-14 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>Colecciones</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] text-charcoal md:mt-6 md:text-7xl">
              Cinco maneras de <br />
              <span className="italic text-terracota">habitar</span> la arcilla.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] transition-all ${filter === f
                    ? "bg-charcoal text-bone"
                    : "border border-charcoal/20 text-charcoal/70 hover:border-charcoal"
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((c, i) => (
              <motion.a
                key={c.name}
                href="#contacto"
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group block"
              >
                <div className="relative overflow-hidden bg-sand/40">
                  <img
                    src={c.img}
                    alt={`Colección ${c.name}`}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
                  <span className="absolute left-4 top-4 bg-bone/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-charcoal">
                    {c.tag}
                  </span>
                </div>
                <div className="mt-3 flex flex-col gap-2 md:mt-5 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div>
                    <h3 className="font-display text-[1.1rem] leading-tight text-charcoal md:text-3xl">{c.name}</h3>
                    <p className="mt-1 hidden text-sm text-charcoal/65 sm:block md:mt-2">{c.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 border-t border-charcoal/10 pt-2 text-[0.58rem] uppercase tracking-[0.18em] text-charcoal/50 transition-colors group-hover:text-terracota md:mt-1 md:shrink-0 md:border-0 md:pt-0 md:text-[0.7rem] md:tracking-[0.2em] md:text-charcoal/70">
                    Descubrir
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:rotate-45 md:h-4 md:w-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Mayoristas() {
  return (
    <section id="mayoristas" className="relative overflow-hidden bg-charcoal text-bone">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[220px] overflow-hidden md:min-h-[380px]">
          <motion.img
            src={mayoristas}
            alt="Interior con cerámica artesanal a gran escala"
            loading="lazy"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="px-6 py-10 md:px-16 md:py-32">
          <Reveal>
            <Eyebrow>
              <span className="text-bone/60">Mayoristas & proyectos</span>
            </Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight md:mt-6 md:text-6xl">
              Diseñamos <span className="italic text-clay">a escala</span> con quienes crean
              espacios.
            </h2>
            <p className="mt-5 max-w-md text-[0.9rem] text-bone/75 md:mt-8 md:text-base">
              Trabajamos junto a estudios y marcas que buscan piezas únicas para dotar sus
              proyectos con alma artesanal.
            </p>
            <ul className="mt-5 grid max-w-md grid-cols-2 gap-3 text-sm md:mt-10 md:gap-4">
              {["Arquitectos", "Interioristas", "Tiendas", "Hoteles", "Restaurantes", "Boutiques"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-bone/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 md:mt-12">
              <Button href="#contacto" variant="light">
                Solicitar catálogo
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>+{n.toLocaleString()}</span>;
}

function Stats() {
  const stats = [
    { n: 10, l: "Años creando" },
    { n: 120000, l: "Piezas fabricadas" },
    { n: 3500, l: "Clientes" },
    { n: 28, l: "Ciudades atendidas" },
  ];
  return (
    <section className="border-y border-charcoal/10 bg-sand/50 py-12 md:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 px-6 md:grid-cols-4 md:px-10 md:gap-y-14">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="text-center">
            <p className="font-display text-5xl leading-none text-terracota md:text-7xl">
              <Counter to={s.n} />
            </p>
            <p className="eyebrow mt-3 text-charcoal/60 md:mt-4">{s.l}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Trabajar con Martin i Ross fue redescubrir que el lujo también puede sentirse tierra. Sus piezas visten cada uno de nuestros hoteles.",
    name: "Laura Restrepo",
    role: "Directora creativa · Estudio Silvestre",
  },
  {
    quote:
      "La calidad y el detalle son impecables. Cada envío llega perfecto y con la sensibilidad que solo un taller artesanal puede ofrecer.",
    name: "Andrés Ocampo",
    role: "Comprador · Boutique Amaro",
  },
  {
    quote:
      "Hemos hecho tres proyectos juntos y siempre superan la expectativa. Un socio confiable y con muchísimo criterio.",
    name: "María Camila Vélez",
    role: "Arquitecta · MCV Estudio",
  },
];

function Testimonios() {
  const [i, setI] = useState(0);
  return (
    <section className="bg-bone py-14 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Lo que dicen</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:mt-6 md:text-6xl">
              Historias que <span className="italic text-terracota">vuelven.</span>
            </h2>
          </Reveal>
          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Anterior"
              onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="grid h-12 w-12 place-items-center border border-charcoal/20 transition hover:bg-charcoal hover:text-bone"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <button
              aria-label="Siguiente"
              onClick={() => setI((i + 1) % TESTIMONIALS.length)}
              className="grid h-12 w-12 place-items-center border border-charcoal/20 transition hover:bg-charcoal hover:text-bone"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-10 md:grid-cols-12"
            >
              <div className="md:col-span-8">
                <div className="flex gap-1 text-terracota">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-terracota" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-[1.2] text-charcoal md:mt-8 md:text-5xl">
                  “{TESTIMONIALS[i].quote}”
                </blockquote>
                <div className="mt-6 border-t border-charcoal/10 pt-4 md:mt-10 md:pt-6">
                  <p className="font-display text-xl text-charcoal md:text-2xl">{TESTIMONIALS[i].name}</p>
                  <p className="mt-1 text-xs text-charcoal/60 md:text-sm">{TESTIMONIALS[i].role}</p>
                </div>
              </div>
              <div className="hidden md:col-span-4 md:flex md:items-end md:justify-end">
                <span className="font-display text-[10rem] leading-none italic text-sand">”</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex gap-2 md:mt-10">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonio ${k + 1}`}
              className={`h-px transition-all ${k === i ? "w-16 bg-charcoal" : "w-8 bg-charcoal/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "¿Cómo realizan los envíos?",
    a: "Despachamos a toda Colombia con transportadoras de confianza y embalaje protector diseñado para cerámica frágil.",
  },
  {
    q: "¿Cuánto tarda un pedido?",
    a: "Los pedidos en stock salen del taller en 3 a 5 días hábiles. Los pedidos pueden tomar entre 3 y 6 semanas.",
  },
  {
    q: "¿Fabrican bajo pedido?",
    a: "Sí. Desarrollamos piezas personalizadas para proyectos residenciales, comerciales y de hospitalidad.",
  },
  {
    q: "¿Tienen ventas al por mayor?",
    a: "Contamos con un programa mayorista para tiendas, boutiques, hoteles y estudios de interiorismo.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos transferencia bancaria, PSE, tarjeta débito/crédito y Nequi/Daviplata para pedidos personales.",
  },
  {
    q: "¿Realizan proyectos personalizados?",
    a: "Trabajamos con arquitectos e interioristas en el desarrollo de colecciones exclusivas para sus proyectos.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-sand/40 py-14 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <Eyebrow>Preguntas</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:mt-6 md:text-6xl">
            Todo lo que <br />
            <span className="italic text-terracota">deberías saber.</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm text-charcoal/70 md:mt-8 md:text-base">
            ¿No encuentras tu respuesta? Escríbenos y con gusto te ayudamos.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <ul>
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b border-charcoal/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left md:gap-6 md:py-7"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl text-charcoal md:text-3xl">{f.q}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center border border-charcoal/30">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 pr-12 text-charcoal/70">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-terracota py-16 text-bone md:py-48">
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light">
        <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-clay blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-charcoal/60 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-6 text-center md:px-10">
        <Reveal>
          <Eyebrow>
            <span className="text-bone/70">Hablemos</span>
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.98] md:mt-8 md:text-8xl lg:text-9xl">
            Creamos piezas <br />
            que <span className="italic">cuentan historias.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-[0.9rem] text-bone/80 md:mt-10 md:text-base">
            Cuéntanos sobre tu proyecto o el objeto que sueñas. Nuestro equipo te acompañará en
            cada etapa del proceso.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-12">
            <Button
              href="mailto:hola@martiniross.co"
              variant="solid"
              className="!bg-bone !text-charcoal hover:!bg-charcoal hover:!text-bone"
            >
              Hablar con un asesor
            </Button>
            <Button href="#colecciones" variant="light">
              Ver colecciones
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-bone">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-clay font-display text-lg italic text-charcoal">
                M
              </span>
              <span className="font-display text-2xl">
                Martin <span className="italic text-clay">i</span> Ross
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-bone/70 md:mt-8 md:text-base">
              Cerámica artesanal hecha a mano en Cali, Colombia. Fabricación propia y diseño
              contemporáneo desde hace más de una década.
            </p>
            <div className="mt-6 flex items-center gap-3 md:mt-10">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center border border-bone/25 transition hover:bg-bone hover:text-charcoal"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <span className="text-xs uppercase tracking-[0.2em] text-bone/50">@martiniross</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-bone/60">Explora</p>
            <ul className="mt-6 space-y-3 text-bone/85">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-clay">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow text-bone/60">Contacto</p>
            <ul className="mt-6 space-y-4 text-bone/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-clay" />
                <span>Cra 5 · Cali, Valle del Cauca, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-clay" />
                <span>+57 (602) 555 12 34</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-clay" />
                <a href="mailto:hola@martiniross.co" className="hover:text-clay">
                  hola@martiniross.co
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <p className="eyebrow text-bone/60">Horario</p>
              <p className="mt-3 text-bone/85">Lunes a viernes · 8:00 — 17:30</p>
              <p className="text-bone/85">Sábados · 9:00 — 13:00</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-bone/15 pt-6 text-xs uppercase tracking-[0.15em] text-bone/50 md:mt-20 md:flex-row md:pt-8">
          <p>© {new Date().getFullYear()} Cerámicas Martin i Ross. Todos los derechos reservados.</p>
          <p>Hecho con arcilla en Cali · Colombia</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573162484811"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[100] flex items-center gap-3 md:bottom-8 md:right-8"
      aria-label="Contactar por WhatsApp"
    >
      {/* Texto flotante integrado en todas las resoluciones */}
      <div className="rounded-full bg-bone px-3 py-1.5 font-display text-[0.8rem] text-charcoal shadow-lg ring-1 ring-charcoal/5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl md:px-5 md:py-2.5 md:text-[1rem]">
        Asesoría personalizada
      </div>

      {/* Botón circular con Logo de WhatsApp */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl md:h-16 md:w-16">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7 md:h-8 md:w-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </div>
    </a>
  );
}

function Landing() {
  return (
    <main className="bg-bone text-charcoal pt-[52px] md:pt-20">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Valores />
      <Colecciones />
      <Mayoristas />
      <Stats />
      <Testimonios />
      <Faq />
      <CtaFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
