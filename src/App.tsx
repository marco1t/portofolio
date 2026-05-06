import {
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import './App.css'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

const rubricItems = [
  { label: 'Profil · formation', points: '3 pts', href: '#profil' },
  { label: 'Compétences', points: '5 pts', href: '#competences' },
  { label: 'LEP', points: '6 pts', href: '#lep' },
  { label: 'Valeurs', points: '3 pts', href: '#valeurs' },
  { label: 'Projet pro', points: '2 pts', href: '#projet' },
]

const profileCards = [
  {
    title: 'Profil',
    points: ['Étudiant ING4 à l’ESAIP', 'Spécialisation cybersécurité', 'Développement, réseaux et données'],
  },
  {
    title: 'Orientation',
    points: ['Comprendre les systèmes', 'Résoudre des problèmes techniques', 'Travailler sur du concret'],
  },
  {
    title: 'Formation',
    points: ['Technique', 'Projet', 'Communication', 'Travail d’équipe', 'Vision entreprise'],
  },
]

const formationHighlights = [
  ['Apprécié', 'Projets en équipe, diversité des matières, Erasmus à Óbuda University.'],
  ['Lien avec mon projet', 'Cybersécurité, réseaux, systèmes, programmation et bases de données.'],
  ['Ce qui m’a manqué', 'Plus de cas longs en cybersécurité opérationnelle : incident, audit, durcissement.'],
]

const experiences = [
  ['Activ’ESAIP', 'SaaS interne, dashboard, Firebase.'],
  ['ETS · Fougères', 'Stage développement web responsive avec WordPress.'],
  ['RS2i', 'Automatisation Excel, macros VBA, outils sur mesure.'],
]

const competenceGroups = [
  {
    title: 'Techniques',
    tags: ['Cybersécurité', 'Réseaux', 'Python', 'Java', 'C++', 'SQL', 'Node.js', 'Firebase', 'AWS'],
    link: 'Comprendre et sécuriser des systèmes réels.',
  },
  {
    title: 'Savoir-être',
    tags: ['Proactivité', 'Écoute', 'Esprit d’équipe', 'Rigueur', 'Autonomie', 'Adaptabilité'],
    link: 'Alerter, coopérer et rester fiable dans des contextes sensibles.',
  },
  {
    title: 'Transversales',
    tags: ['Analyse', 'Gestion de projet', 'Communication', 'Documentation', 'Vision entreprise'],
    link: 'Transformer un risque technique en plan d’action clair.',
  },
]

const lepMilestones = [
  {
    title: 'ING3 · Copain',
    points: ['Distribution alimentaire', 'Contact avec les besoins étudiants', 'Organisation et respect'],
  },
  {
    title: 'ING4 · Copain',
    points: ['Poursuite de la distribution', 'Soutien scolaire', 'Écoute et pédagogie'],
  },
]

const lepTakeaways = [
  ['Vécu', 'Un engagement concret, utile et proche du terrain.'],
  ['Acquis', 'Organisation, écoute, fiabilité, transmission.'],
  ['Sur moi', 'Je suis motivé par les projets structurés avec un impact visible.'],
]

const values = ['Respect', 'Fiabilité', 'Entraide', 'Responsabilité', 'Progression continue']
const antiValues = ['Injustice', 'Mépris', 'Manque de fiabilité', 'Individualisme excessif', 'Immobilisme']

const projectCards = [
  {
    icon: Rocket,
    title: 'Objectif',
    text: 'Devenir ingénieur cybersécurité.',
  },
  {
    icon: Code2,
    title: 'Lien compétences',
    text: 'Développement, réseaux, systèmes et analyse pour comprendre les environnements à protéger.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Dans 5 ans',
    text: 'Un poste en cybersécurité, plus d’expérience, des compétences renforcées et davantage de responsabilités.',
  },
]

function App() {
  const cvPdf = assetUrl('CV_BAITICHE_Roulem.pdf')
  const cvPreview = assetUrl('cv-preview.png')

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Accueil">
          <span className="brand-mark">RB</span>
          <span>Roulem Baitiche</span>
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#profil">Profil</a>
          <a href="#competences">Compétences</a>
          <a href="#lep">LEP</a>
          <a href="#valeurs">Valeurs</a>
          <a href="#projet">Projet</a>
        </nav>
      </header>

      <section className="hero-section compact-hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">Carnet de compétences · PPP ING4 · Étape 2</p>
          <h1>Roulem Baitiche</h1>
          <p className="hero-lede">
            Étudiant ingénieur ESAIP spécialisé en cybersécurité. Objectif :
            devenir ingénieur cybersécurité et protéger des systèmes concrets.
          </p>

          <div className="hero-actions" aria-label="Actions principales">
            <a className="button primary" href="mailto:baitiche.roulem@outlook.fr">
              <Mail size={18} aria-hidden="true" />
              Me contacter
            </a>
            <a className="button secondary" href={cvPdf} target="_blank" rel="noreferrer">
              <Download size={18} aria-hidden="true" />
              CV
            </a>
            <a
              className="icon-button"
              href="https://github.com/marco1t"
              target="_blank"
              rel="noreferrer"
              aria-label="Profil GitHub"
            >
              <GitBranch size={20} aria-hidden="true" />
            </a>
          </div>

          <dl className="hero-facts" aria-label="Informations clés">
            <div>
              <dt>Objectif</dt>
              <dd>Ingénieur cybersécurité</dd>
            </div>
            <div>
              <dt>Formation</dt>
              <dd>ESAIP · ING4</dd>
            </div>
            <div>
              <dt>LEP</dt>
              <dd>Copain · bénévolat</dd>
            </div>
          </dl>
        </div>

        <figure className="cv-panel">
          <a href={cvPdf} target="_blank" rel="noreferrer" aria-label="Ouvrir le CV">
            <img src={cvPreview} alt="Aperçu du CV de Roulem Baitiche" />
          </a>
          <figcaption>
            <ShieldCheck size={18} aria-hidden="true" />
            Carnet PPP ING4
          </figcaption>
        </figure>
      </section>

      <section className="rubric-strip" aria-label="Repères du barème PPP">
        {rubricItems.map((item) => (
          <a href={item.href} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.points}</strong>
          </a>
        ))}
      </section>

      <section className="section-block" id="profil">
        <div className="section-heading">
          <p className="eyebrow">1 · Profil, parcours, formation · 3 points</p>
          <h2>Profil et formation</h2>
        </div>

        <div className="content-grid three">
          {profileCards.map((card) => (
            <article className="narrative-card" key={card.title}>
              <h3>{card.title}</h3>
              <ul className="clean-list">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="formation-panel">
          <div className="panel-heading">
            <GraduationCap size={24} aria-hidden="true" />
            <div>
              <p className="period">Depuis septembre 2022</p>
              <h3>ESAIP, école d’ingénieur · Angers</h3>
            </div>
          </div>
          <div className="mini-grid">
            {formationHighlights.map(([title, text]) => (
              <article className="mini-card" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-row" aria-label="Expériences professionnelles">
          {experiences.map(([title, text]) => (
            <article className="timeline-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block muted" id="competences">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">2 · Compétences · 5 points</p>
            <h2>Compétences liées au métier d’ingénieur</h2>
          </div>

          <div className="content-grid three">
            {competenceGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list" aria-label={group.title}>
                  {group.tags.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <p className="engineer-link">{group.link}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block" id="lep">
        <div className="section-heading">
          <p className="eyebrow">3 · LEP sur 2 ans · 6 points</p>
          <h2>Mon LEP : Copain</h2>
        </div>

        <div className="lep-layout lean">
          {lepMilestones.map((item) => (
            <article className="lep-card" key={item.title}>
              <h3>{item.title}</h3>
              <ul className="clean-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="lep-takeaways">
          {lepTakeaways.map(([title, text]) => (
            <article className="mini-card" key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block muted" id="valeurs">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">4 · Valeurs et anti-valeurs · 3 points</p>
            <h2>Valeurs et anti-valeurs</h2>
          </div>

          <div className="values-layout lean">
            <article className="value-column">
              <h3>Valeurs</h3>
              <div className="pill-list">
                {values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </article>
            <article className="value-column">
              <h3>Anti-valeurs</h3>
              <div className="pill-list anti">
                {antiValues.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block project-section" id="projet">
        <div className="section-heading">
          <p className="eyebrow">5 · Projet professionnel · 2 points</p>
          <h2>Projet professionnel</h2>
        </div>

        <div className="project-grid">
          {projectCards.map(({ icon: Icon, title, text }) => (
            <article className="project-card" key={title}>
              <Icon size={24} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Présentation · 1 point</p>
          <h2>Portfolio clair, structuré et allégé.</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href="mailto:baitiche.roulem@outlook.fr">
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a className="button secondary" href="tel:+33757447542">
            <Phone size={18} aria-hidden="true" />
            Appel
          </a>
          <a className="button secondary" href={cvPdf} target="_blank" rel="noreferrer">
            <Download size={18} aria-hidden="true" />
            CV
          </a>
          <span className="location-pill">
            <MapPin size={16} aria-hidden="true" />
            Mobile France
          </span>
        </div>
      </footer>
    </main>
  )
}

export default App
