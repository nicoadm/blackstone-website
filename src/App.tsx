import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Clock,
  Shield,
  MessageSquare,
  DollarSign,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Wrench,
  DoorOpen,
  LayoutGrid,
  PanelBottom,
  Hammer,
  RotateCcw,
  Globe,
  Menu,
  X,
  Send,
  Camera,
} from "lucide-react"
import { useI18n } from "@/i18n/context"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Services />
        <WhyUs />
        <Process />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

function Nav() {
  const { t, locale, setLocale } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleLocale = () => {
    setLocale(locale === "en" ? "es" : "en")
  }

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Blackstone Remodel - Home">
          <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center" aria-hidden="true">
            <span className="text-background font-bold text-sm">B</span>
          </div>
          <span className="font-semibold text-foreground tracking-tight">Blackstone</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">{t.nav.services}</a>
          <a href="#process" className="hover:text-foreground transition-colors">{t.nav.process}</a>
          <a href="#why-us" className="hover:text-foreground transition-colors">{t.nav.whyUs}</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-secondary"
            aria-label={`Switch language to ${t.nav.langOther}`}
          >
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="font-medium">{t.nav.langLabel}</span>
            <span className="text-border">/</span>
            <span className="text-muted-foreground/50">{t.nav.langOther}</span>
          </button>

          <Button size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#contact">{t.nav.requestQuote}</a>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            <a href="#services" onClick={() => setMobileOpen(false)} className="text-sm text-foreground py-2">{t.nav.services}</a>
            <a href="#process" onClick={() => setMobileOpen(false)} className="text-sm text-foreground py-2">{t.nav.process}</a>
            <a href="#why-us" onClick={() => setMobileOpen(false)} className="text-sm text-foreground py-2">{t.nav.whyUs}</a>
            <div className="border-t border-border pt-3 flex items-center justify-between">
              <button
                onClick={() => { toggleLocale(); setMobileOpen(false) }}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
                aria-label={`Switch language to ${t.nav.langOther}`}
              >
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="font-medium">{t.nav.langLabel}</span>
                <span className="text-border">/</span>
                <span className="text-muted-foreground/50">{t.nav.langOther}</span>
              </button>
              <Button size="sm" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>{t.nav.requestQuote}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="hero-heading" className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold)/0.06_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-8">
          <Building2 className="w-3 h-3" aria-hidden="true" />
          {t.hero.badge}
        </div>
        <h1 id="hero-heading" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          {t.hero.headline1}{" "}
          <span className="text-gold">{t.hero.headline2}</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          {t.hero.subheadline}
        </p>
        <Button size="lg" className="text-base w-full sm:w-auto" asChild>
          <a href="#contact">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </section>
  )
}

function Stats() {
  const { t } = useI18n()

  return (
    <section aria-label="Key statistics" className="pb-16 md:pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-border">
          {t.stats.items.map((stat, i) => (
            <div key={i} className="text-center px-4 py-2">
              <div className="text-2xl md:text-3xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const problemIcons = [Clock, Phone, MessageSquare, DollarSign]

function Problem() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="problem-heading" className="py-24 md:py-36 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.problem.label}</p>
          <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.problem.heading}
          </h2>
          <p className="text-background/60 text-lg">
            {t.problem.subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6" role="list">
          {t.problem.items.map((point, i) => {
            const Icon = problemIcons[i]
            return (
              <div
                key={i}
                role="listitem"
                className="border border-background/10 rounded-xl p-6 hover:border-gold/30 hover:bg-background/[0.03] transition-all duration-200"
              >
                <Icon className="w-5 h-5 text-gold mb-4" aria-hidden="true" />
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const solutionIcons = [Clock, MessageSquare, CheckCircle2, Wrench]

function Solution() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="solution-heading" className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.solution.label}</p>
            <h2 id="solution-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              {t.solution.heading1}{" "}
              <span className="text-gold">{t.solution.heading2}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t.solution.description}
            </p>
            <Button size="lg" asChild>
              <a href="#contact">
                {t.solution.cta}
                <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {t.solution.points.map((point, i) => {
              const Icon = solutionIcons[i]
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-border hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3" aria-hidden="true">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const serviceIcons = [DoorOpen, LayoutGrid, PanelBottom, Hammer, RotateCcw]

function Services() {
  const { t } = useI18n()

  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 md:py-36 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.services.label}</p>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {t.services.heading}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <Card key={i} role="listitem" className="border-border hover:border-gold/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 bg-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4" aria-hidden="true">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
          <Card role="listitem" className="border-dashed border-border bg-transparent flex items-center justify-center hover:border-gold/30 transition-all duration-200">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground text-sm mb-3">{t.services.askUs}</p>
              <Button variant="outline" size="sm" asChild>
                <a href="#contact">
                  {t.services.askUsBtn}
                  <ChevronRight className="w-3 h-3 ml-1" aria-hidden="true" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const { t } = useI18n()

  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.whyUs.label}</p>
            <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              {t.whyUs.heading}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.whyUs.description}
            </p>
          </div>
          <ul className="space-y-3" role="list">
            {t.whyUs.reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-foreground text-sm font-medium">{reason}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const processIcons = [Send, Wrench, Camera]

function Process() {
  const { t } = useI18n()

  return (
    <section id="process" aria-labelledby="process-heading" className="py-24 md:py-36 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.process.label}</p>
          <h2 id="process-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.process.heading}
          </h2>
          <p className="text-background/60 text-lg">
            {t.process.subheading}
          </p>
        </div>
        <ol className="grid md:grid-cols-3 gap-8">
          {t.process.steps.map((step, i) => {
            const Icon = processIcons[i]
            return (
              <li key={i} className="relative">
                <div className="border border-background/10 rounded-xl p-8 h-full hover:border-gold/30 transition-all duration-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                    </div>
                    <span className="text-gold/30 text-4xl font-bold" aria-hidden="true">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-background/60 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < t.process.steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10" aria-hidden="true">
                    <ArrowRight className="w-4 h-4 text-background/20" />
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function Trust() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="trust-heading" className="py-24 md:py-36 px-6 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.trust.label}</p>
        <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          {t.trust.heading}
        </h2>
        <figure className="relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold/20 text-8xl font-serif leading-none select-none" aria-hidden="true">"</div>
          <blockquote className="relative text-lg md:text-xl text-foreground italic leading-relaxed mb-6 px-4">
            <p>{t.trust.quote}</p>
          </blockquote>
          <figcaption className="text-muted-foreground text-sm font-medium">{t.trust.attribution}</figcaption>
        </figure>
      </div>
    </section>
  )
}

function FinalCTA() {
  const { t } = useI18n()

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-24 md:py-36 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-gold)/0.06_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          {t.finalCta.heading}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          {t.finalCta.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-base w-full sm:w-auto" asChild>
            <a href="mailto:info@blackstoneremodel.com" aria-label={`${t.finalCta.requestQuote} — info@blackstoneremodel.com`}>
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              {t.finalCta.requestQuote}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base w-full sm:w-auto" asChild>
            <a href="tel:+17148440957" aria-label={`${t.finalCta.callUs} — (714) 844-0957`}>
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              {t.finalCta.callUs}
            </a>
          </Button>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-1">{t.finalCta.email}</p>
            <a href="mailto:info@blackstoneremodel.com" className="hover:text-foreground transition-colors">info@blackstoneremodel.com</a>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">{t.finalCta.phone}</p>
            <a href="tel:+17148440957" className="hover:text-foreground transition-colors">(714) 844-0957</a>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">{t.finalCta.serviceArea}</p>
            <p>{t.finalCta.serviceAreaValue}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useI18n()

  return (
    <footer aria-label="Site footer" className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center" aria-hidden="true">
              <span className="text-background font-bold text-xs">B</span>
            </div>
            <span className="font-medium text-foreground">Blackstone Remodel</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" aria-hidden="true" />
            <span>{t.footer.licensedInsured}</span>
            <span className="mx-2" aria-hidden="true">&middot;</span>
            <span>{t.footer.location}</span>
          </div>
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default App
