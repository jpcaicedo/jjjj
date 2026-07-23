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
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import story from "@/assets/story.jpg";
import colDecor from "@/assets/col-decor.jpg";
import colMesa from "@/assets/col-mesa.jpg";
import colMacetas from "@/assets/col-macetas.jpg";
import colAlcancias from "@/assets/col-alcancias.jpg";
import colEspecial from "@/assets/col-especial.jpg";
import p1 from "@/assets/p1-diseno.jpg";
import p2 from "@/assets/p2-modelado.jpg";
import p3 from "@/assets/p3-secado.jpg";
import p4 from "@/assets/p4-horneado.jpg";
import p5 from "@/assets/p5-esmaltado.jpg";
import p6 from "@/assets/p6-acabado.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
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
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
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
}: {
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "light";
  href?: string;
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 px-6 py-3.5 text-[0.78rem] uppercase tracking-[0.2em] font-medium transition-all duration-500";
  const styles = {
    solid: "bg-charcoal text-bone hover:bg-terracota",
    ghost:
      "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-bone",
    light: "border border-bone/40 text-bone hover:bg-bone hover:text-charcoal",
  }[variant];
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
    </a>
  );
}

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Proceso", href: "#proceso" },
  { label: "Galería", href: "#galeria" },
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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-bone/70 border-b border-charcoal/8" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-clay font-display text-lg italic text-bone">
              M
            </span>
            <span className="font-display text-lg tracking-tight text-charcoal">
              Martin <span className="italic text-clay">i</span> Ross
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[0.78rem] uppercase tracking-[0.18em] text-charcoal/75 transition-colors hover:text-charcoal"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracota transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden items-center gap-2 bg-terracota px-5 py-3 text-[0.75rem] uppercase tracking-[0.2em] text-bone transition-all duration-500 hover:bg-charcoal md:inline-flex"
            >
              Cotizar
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              aria-label="Abrir menú"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center border border-charcoal/20 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bone"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg">
                Martin <span className="italic text-clay">i</span> Ross
              </span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col items-start gap-5 px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="font-display text-4xl text-charcoal"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
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
    <section id="inicio" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Piezas de cerámica artesanal de Martin i Ross"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/30" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-28 pt-32 md:px-10 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-8"
        >
          <span className="eyebrow text-bone/70">
            <span className="mr-3 inline-block h-px w-8 bg-bone/50 align-middle" />
            Cali · Colombia · Desde el corazón del Valle
          </span>
        </motion.div>

        <div className="max-w-4xl">
          <h1 className="font-display text-[3rem] leading-[0.95] text-bone md:text-[5.5rem] lg:text-[7rem]">
            {"La belleza de la".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mr-4 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block italic text-clay"
            >
              cerámica
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              hecha a mano.
            </motion.span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-10 max-w-xl text-[1.05rem] leading-relaxed text-bone/85"
        >
          Desde Cali creamos piezas artesanales que combinan tradición colombiana y diseño
          contemporáneo para transformar cada espacio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button
            href="#colecciones"
            variant="solid"
            className="!bg-bone !text-charcoal hover:!bg-terracota hover:!text-bone"
          >
            Ver colecciones
          </Button>
          <Button href="#contacto" variant="light">
            Solicitar cotización
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-bone/15 bg-charcoal/40 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-bone/15 md:grid-cols-4">
          {["Fabricación propia", "Cerámica artesanal", "Envíos nacionales", "Diseño colombiano"].map(
            (t) => (
              <div
                key={t}
                className="flex items-center gap-2 bg-charcoal/70 px-4 py-4 text-[0.72rem] uppercase tracking-[0.15em] text-bone/85 md:px-6"
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
    <section className="overflow-hidden border-y border-charcoal/10 bg-bone py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 font-display text-3xl italic text-charcoal/80 md:text-5xl"
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
    <section id="nosotros" className="relative bg-bone py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12 lg:gap-24">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.img
                src={story}
                alt="Artesano modelando cerámica en el taller"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden bg-bone p-6 md:block">
              <p className="font-display text-4xl italic text-terracota">45+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-charcoal/70">Años de oficio</p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <Eyebrow>Nuestra historia</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-charcoal md:text-6xl lg:text-7xl">
              Tradición <br />
              convertida <br />
              en <span className="italic text-terracota">diseño.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-[1.02rem] leading-relaxed text-charcoal/75">
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
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-charcoal/10 pt-10">
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
    <section className="bg-sand/60 py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Lo que nos define</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-tight text-charcoal md:text-6xl">
              Un oficio hecho con <span className="italic text-terracota">intención.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className="group bg-sand/60">
              <div className="flex h-full flex-col justify-between bg-bone p-8 transition-all duration-500 group-hover:bg-charcoal group-hover:text-bone md:p-10">
                <div>
                  <it.icon
                    className="h-8 w-8 text-terracota transition-colors group-hover:text-clay"
                    strokeWidth={1.2}
                  />
                  <h3 className="mt-8 font-display text-3xl">{it.title}</h3>
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
    <section id="colecciones" className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>Colecciones</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] text-charcoal md:text-7xl">
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
                  className={`px-4 py-2 text-[0.72rem] uppercase tracking-[0.18em] transition-all ${
                    filter === f
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

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
                  <span className="absolute left-4 top-4 bg-bone/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-charcoal">
                    {c.tag}
                  </span>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-3xl text-charcoal">{c.name}</h3>
                    <p className="mt-2 max-w-xs text-sm text-charcoal/65">{c.desc}</p>
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] uppercase tracking-[0.2em] text-charcoal/70 transition-colors group-hover:text-terracota">
                    Descubrir
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
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

const STEPS = [
  {
    n: "01",
    title: "Diseño",
    text: "Bocetos, referencias y una idea que nace de la conversación con el cliente.",
    img: p1,
  },
  {
    n: "02",
    title: "Modelado",
    text: "El torno da forma a la arcilla. Cada pieza guarda la huella de quien la modela.",
    img: p2,
  },
  {
    n: "03",
    title: "Secado",
    text: "La pieza descansa al aire durante días hasta encontrar su punto exacto.",
    img: p3,
  },
  {
    n: "04",
    title: "Horneado",
    text: "Más de 1000°C que transforman la arcilla en cerámica resistente para siempre.",
    img: p4,
  },
  {
    n: "05",
    title: "Esmaltado",
    text: "Aplicamos esmaltes propios que aportan color, textura y profundidad.",
    img: p5,
  },
  { n: "06", title: "Acabado", text: "Última revisión, firma y embalaje cuidadoso para su viaje.", img: p6 },
];

function Proceso() {
  return (
    <section id="proceso" className="relative bg-charcoal py-28 text-bone md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <Eyebrow>
            <span className="text-bone/60">Proceso artesanal</span>
          </Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-5xl leading-tight md:text-7xl">
            De la arcilla al objeto, <span className="italic text-clay">seis pasos</span> hechos con
            paciencia.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-24">
          {STEPS.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.n}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="lg:col-span-6">
                  <div className="overflow-hidden">
                    <motion.img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      initial={{ scale: 1.15 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.15} className="lg:col-span-6 lg:pl-8">
                  <span className="font-display text-6xl italic text-clay">{s.n}</span>
                  <h3 className="mt-4 font-display text-5xl md:text-6xl">{s.title}</h3>
                  <div className="hairline my-8 max-w-xs bg-bone/25" />
                  <p className="max-w-md text-lg leading-relaxed text-bone/75">{s.text}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const [open, setOpen] = useState<string | null>(null);
  const imgs = [g1, g2, g3, g4, g5, g6];
  return (
    <section id="galeria" className="bg-bone py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow>Galería</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-tight text-charcoal md:text-7xl">
              Pequeños fragmentos <br />
              del <span className="italic text-terracota">taller.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-charcoal/65">
              Un archivo visual de piezas, texturas y espacios que hemos ayudado a vestir.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <button onClick={() => setOpen(imgs[0])} className="group col-span-2 row-span-2 overflow-hidden">
            <img
              src={imgs[0]}
              loading="lazy"
              alt="Colección de jarrones cerámicos"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </button>
          <button onClick={() => setOpen(imgs[1])} className="group overflow-hidden">
            <img
              src={imgs[1]}
              loading="lazy"
              alt="Vajilla artesanal"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </button>
          <button onClick={() => setOpen(imgs[2])} className="group row-span-2 overflow-hidden">
            <img
              src={imgs[2]}
              loading="lazy"
              alt="Pieza escultórica"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </button>
          <button onClick={() => setOpen(imgs[3])} className="group overflow-hidden">
            <img
              src={imgs[3]}
              loading="lazy"
              alt="Detalle de textura de cerámica"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </button>
          <button onClick={() => setOpen(imgs[4])} className="group col-span-2 overflow-hidden">
            <img
              src={imgs[4]}
              loading="lazy"
              alt="Interior con piezas cerámicas"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </button>
          <button
            onClick={() => setOpen(imgs[5])}
            className="group col-span-2 overflow-hidden md:col-span-1"
          >
            <img
              src={imgs[5]}
              loading="lazy"
              alt="Interior del taller"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-charcoal/95 p-6"
          >
            <button
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center border border-bone/30 text-bone"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={open}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Mayoristas() {
  return (
    <section id="mayoristas" className="relative overflow-hidden bg-charcoal text-bone">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden">
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
        <div className="px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <Eyebrow>
              <span className="text-bone/60">Mayoristas & proyectos</span>
            </Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              Diseñamos <span className="italic text-clay">a escala</span> con quienes crean
              espacios.
            </h2>
            <p className="mt-8 max-w-md text-bone/75">
              Trabajamos junto a estudios y marcas que buscan piezas únicas para dotar sus
              proyectos con alma artesanal.
            </p>
            <ul className="mt-10 grid max-w-md grid-cols-2 gap-4 text-sm">
              {["Arquitectos", "Interioristas", "Tiendas", "Hoteles", "Restaurantes", "Boutiques"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-bone/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-12">
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
    { n: 45, l: "Años creando" },
    { n: 120000, l: "Piezas fabricadas" },
    { n: 3500, l: "Clientes" },
    { n: 28, l: "Ciudades atendidas" },
  ];
  return (
    <section className="border-y border-charcoal/10 bg-sand/50 py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-14 px-6 md:grid-cols-4 md:px-10">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="text-center">
            <p className="font-display text-6xl leading-none text-terracota md:text-7xl">
              <Counter to={s.n} />
            </p>
            <p className="eyebrow mt-4 text-charcoal/60">{s.l}</p>
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
    <section className="bg-bone py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <Eyebrow>Lo que dicen</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-tight text-charcoal md:text-6xl">
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

        <div className="relative mt-14 overflow-hidden">
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
                <blockquote className="mt-8 font-display text-3xl leading-[1.2] text-charcoal md:text-5xl">
                  “{TESTIMONIALS[i].quote}”
                </blockquote>
                <div className="mt-10 border-t border-charcoal/10 pt-6">
                  <p className="font-display text-2xl text-charcoal">{TESTIMONIALS[i].name}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{TESTIMONIALS[i].role}</p>
                </div>
              </div>
              <div className="hidden md:col-span-4 md:flex md:items-end md:justify-end">
                <span className="font-display text-[10rem] leading-none italic text-sand">”</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex gap-2">
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
    a: "Los pedidos en stock salen del taller en 3 a 5 días hábiles. Los pedidos bajo pedido pueden tomar entre 3 y 6 semanas.",
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
    <section className="bg-sand/40 py-28 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:px-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <Eyebrow>Preguntas</Eyebrow>
          <h2 className="mt-6 font-display text-5xl leading-tight text-charcoal md:text-6xl">
            Todo lo que <br />
            <span className="italic text-terracota">deberías saber.</span>
          </h2>
          <p className="mt-8 max-w-sm text-charcoal/70">
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
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-2xl text-charcoal md:text-3xl">{f.q}</span>
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
    <section id="contacto" className="relative overflow-hidden bg-terracota py-32 text-bone md:py-48">
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
          <h2 className="mx-auto mt-8 max-w-5xl font-display text-6xl leading-[0.98] md:text-8xl lg:text-9xl">
            Creamos piezas <br />
            que <span className="italic">cuentan historias.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-bone/80">
            Cuéntanos sobre tu proyecto o el objeto que sueñas. Nuestro equipo te acompañará en
            cada etapa del proceso.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
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
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-clay font-display text-lg italic text-charcoal">
                M
              </span>
              <span className="font-display text-2xl">
                Martin <span className="italic text-clay">i</span> Ross
              </span>
            </a>
            <p className="mt-8 max-w-sm text-bone/70">
              Cerámica artesanal hecha a mano en Cali, Colombia. Fabricación propia y diseño
              contemporáneo desde hace más de cuatro décadas.
            </p>
            <div className="mt-10 flex items-center gap-3">
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

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-bone/15 pt-8 text-xs uppercase tracking-[0.18em] text-bone/50 md:flex-row">
          <p>© {new Date().getFullYear()} Cerámicas Martin i Ross. Todos los derechos reservados.</p>
          <p>Hecho con arcilla en Cali · Colombia</p>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <main className="bg-bone text-charcoal">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Valores />
      <Colecciones />
      <Proceso />
      <Galeria />
      <Mayoristas />
      <Stats />
      <Testimonios />
      <Faq />
      <CtaFinal />
      <Footer />
    </main>
  );
}
