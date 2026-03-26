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
  Sun,
  Moon,
  Monitor,
  Globe,
} from "lucide-react"
import { useI18n } from "@/i18n/context"
import { useTheme } from "@/theme/context"
import type { Locale } from "@/i18n/translations"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
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
  const { t } = useI18n()

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Blackstone Remodeling Services - Home">
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
        <Button size="sm" asChild>
          <a href="#contact">{t.nav.requestQuote}</a>
        </Button>
      </div>
    </nav>
  )
}

function Hero() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="hero-heading" className="pt-32 pb-20 md:pt-44 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-8">
          <Building2 className="w-3 h-3" aria-hidden="true" />
          {t.hero.badge}
        </div>
        <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          {t.hero.headline1}{" "}
          <span className="text-gold">{t.hero.headline2}</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base" asChild>
            <a href="#contact">
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base" asChild>
            <a href="#services">
              {t.hero.viewServices}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

const problemIcons = [Clock, Phone, MessageSquare, DollarSign]

function Problem() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="problem-heading" className="py-20 md:py-28 px-6 bg-foreground text-background">
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
                className="border border-background/10 rounded-xl p-6 hover:border-gold/30 transition-colors"
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
    <section aria-labelledby="solution-heading" className="py-20 md:py-28 px-6">
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
          <ul className="space-y-4" role="list">
            {t.solution.points.map((point, i) => {
              const Icon = solutionIcons[i]
              return (
                <li
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0" aria-hidden="true">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed pt-2">{point}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

const serviceIcons = [DoorOpen, LayoutGrid, PanelBottom, Hammer, RotateCcw]

function Services() {
  const { t } = useI18n()

  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 md:py-28 px-6 bg-secondary">
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
              <Card key={i} role="listitem" className="border-border hover:border-gold/30 transition-colors bg-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4" aria-hidden="true">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
          <Card role="listitem" className="border-dashed border-border bg-transparent flex items-center justify-center">
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
    <section id="why-us" aria-labelledby="why-us-heading" className="py-20 md:py-28 px-6">
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
          <ul className="space-y-4" role="list">
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

function Process() {
  const { t } = useI18n()
  const stepNumbers = ["01", "02", "03", "04", "05"]

  return (
    <section id="process" aria-labelledby="process-heading" className="py-20 md:py-28 px-6 bg-foreground text-background">
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
        <ol className="grid md:grid-cols-5 gap-6">
          {t.process.steps.map((step, i) => (
            <li key={i} className="text-center md:text-left">
              <div className="text-gold text-3xl font-bold mb-3" aria-hidden="true">{stepNumbers[i]}</div>
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-background/60 text-sm leading-relaxed">{step.description}</p>
              {i < t.process.steps.length - 1 && (
                <div className="hidden md:block mt-4" aria-hidden="true">
                  <ArrowRight className="w-4 h-4 text-background/20 mx-auto md:mx-0" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Trust() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="trust-heading" className="py-20 md:py-28 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold text-sm font-medium tracking-wide uppercase mb-4">{t.trust.label}</p>
        <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-12">
          {t.trust.heading}
        </h2>
        <figure className="max-w-2xl mx-auto mb-16">
          <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-4">
            <p>"{t.trust.quote}"</p>
          </blockquote>
          <figcaption className="text-muted-foreground text-sm">{t.trust.attribution}</figcaption>
        </figure>
        <div className="flex flex-wrap justify-center gap-8 items-center opacity-30" aria-hidden="true">
          {["Property Group A", "Management Co B", "Realty Partners C", "Apartment Group D"].map((name) => (
            <div key={name} className="px-6 py-3 border border-border rounded-lg text-sm text-muted-foreground">
              {name}
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">{t.trust.logosPlaceholder}</p>
      </div>
    </section>
  )
}

function FinalCTA() {
  const { t } = useI18n()

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          {t.finalCta.heading}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          {t.finalCta.subheading}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-base" asChild>
            <a href="mailto:info@blackstoneremodeling.com" aria-label={`${t.finalCta.requestQuote} - info@blackstoneremodeling.com`}>
              <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
              {t.finalCta.requestQuote}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base" asChild>
            <a href="tel:+1234567890" aria-label={`${t.finalCta.callUs} - (714) 555-0123`}>
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              {t.finalCta.callUs}
            </a>
          </Button>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground mb-1">{t.finalCta.email}</p>
            <p>info@blackstoneremodeling.com</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">{t.finalCta.phone}</p>
            <p>(714) 555-0123</p>
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
  const { t, locale, setLocale } = useI18n()
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: "system" as const, label: t.footer.themeSystem, icon: Monitor },
    { value: "light" as const, label: t.footer.themeLight, icon: Sun },
    { value: "dark" as const, label: t.footer.themeDark, icon: Moon },
  ]

  const languages: { value: Locale; label: string }[] = [
    { value: "en", label: "English" },
    { value: "es", label: "Espa\u00f1ol" },
  ]

  return (
    <footer aria-label="Site footer" className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded-sm flex items-center justify-center" aria-hidden="true">
              <span className="text-background font-bold text-xs">B</span>
            </div>
            <span className="font-medium text-foreground">Blackstone Remodeling Services</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" aria-hidden="true" />
            <span>{t.footer.licensedInsured}</span>
            <span className="mx-2" aria-hidden="true">&middot;</span>
            <span>{t.footer.location}</span>
          </div>
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4 border-t border-border">
          <fieldset className="flex items-center gap-2 border-0 p-0 m-0">
            <legend className="sr-only">{t.footer.language}</legend>
            <Globe className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
            <span className="text-xs text-muted-foreground mr-1" aria-hidden="true">{t.footer.language}:</span>
            <div className="flex rounded-md border border-border overflow-hidden" role="radiogroup" aria-label={t.footer.language}>
              {languages.map((lang) => (
                <button
                  key={lang.value}
                  onClick={() => setLocale(lang.value)}
                  role="radio"
                  aria-checked={locale === lang.value}
                  className={`px-3 py-1.5 text-xs transition-colors ${
                    locale === lang.value
                      ? "bg-foreground text-background"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="flex items-center gap-2 border-0 p-0 m-0">
            <legend className="sr-only">{t.footer.theme}</legend>
            <Sun className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />
            <span className="text-xs text-muted-foreground mr-1" aria-hidden="true">{t.footer.theme}:</span>
            <div className="flex rounded-md border border-border overflow-hidden" role="radiogroup" aria-label={t.footer.theme}>
              {themes.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  role="radio"
                  aria-checked={theme === opt.value}
                  className={`px-3 py-1.5 text-xs transition-colors flex items-center gap-1.5 ${
                    theme === opt.value
                      ? "bg-foreground text-background"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <opt.icon className="w-3 h-3" aria-hidden="true" />
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </footer>
  )
}

export default App
