import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GitBranch,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import './App.css'

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

const experiences = [
  {
    title: 'Développeur fullstack',
    company: "Activ'ESAIP : Projet Entreprise",
    period: 'Février à juin 2025',
    summary:
      'Création SaaS interne, dashboard et intégration Firebase pour un projet équipe orienté produit.',
    tags: ['Firebase', 'Dashboard', 'SaaS'],
  },
  {
    title: 'Stagiaire développeur informatique',
    company: 'ETS, Fougères',
    period: 'Juin à mi-août 2025',
    summary:
      "Appui au développement d'une TPE et création d'un site web responsive sous WordPress.",
    tags: ['WordPress', 'Responsive', 'TPE'],
  },
  {
    title: 'Stagiaire développeur VBA',
    company: 'RS2i, Levallois-Perret',
    period: 'Février à mars 2023',
    summary:
      'Outils Excel sur mesure, automatisation de processus et macros VBA pour gagner du temps opérationnel.',
    tags: ['Excel', 'VBA', 'Automatisation'],
  },
]

const projects = [
  {
    name: 'Jeu multijoueur temps réel',
    description:
      'Architecture Qt, C++, Node.js et WebSockets avec gestion des sessions, synchronisation temps réel et workflow Git/CMake.',
    stack: ['Qt', 'C++', 'Node.js', 'WebSockets'],
  },
  {
    name: 'Dashboard SaaS interne',
    description:
      'Interface de suivi et base Firebase pour centraliser les données métier et accélérer les décisions.',
    stack: ['Firebase', 'HTML', 'CSS', 'Produit'],
  },
  {
    name: 'Automatisations Excel',
    description:
      "Macros VBA et classeurs adaptés aux besoins d'une équipe pour simplifier les tâches récurrentes.",
    stack: ['VBA', 'Excel', 'Process'],
  },
]

const skillGroups = [
  {
    title: 'Développement',
    skills: ['Python', 'Java', 'C++', 'Node.js', 'HTML', 'CSS', 'QML/Felgo'],
  },
  {
    title: 'Données & cloud',
    skills: ['SQL', 'Firebase', 'AWS', 'VMware'],
  },
  {
    title: 'Pratiques',
    skills: ['Git', 'CMake', 'WebSockets', 'Automatisation', 'Dashboarding'],
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
          <a href="#experiences">Expériences</a>
          <a href="#projets">Projets</a>
          <a href="#competences">Compétences</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">
            Stage développement IT · Juin à août 2026 · Mobile France
          </p>
          <h1>Roulem Baitiche</h1>
          <p className="hero-lede">
            Futur ingénieur ESAIP spécialisé en informatique, je construis des
            outils web, des dashboards et des automatisations utiles avec une
            approche terrain.
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
              <dt>Formation</dt>
              <dd>4e année cycle ingénieur</dd>
            </div>
            <div>
              <dt>Langues</dt>
              <dd>Français natif · Anglais B2</dd>
            </div>
            <div>
              <dt>Mobilité</dt>
              <dd>France · Permis B</dd>
            </div>
          </dl>
        </div>

        <figure className="cv-panel">
          <a href={cvPdf} target="_blank" rel="noreferrer" aria-label="Ouvrir le CV">
            <img src={cvPreview} alt="Aperçu du CV de Roulem Baitiche" />
          </a>
          <figcaption>
            <ShieldCheck size={18} aria-hidden="true" />
            Disponible pour un stage de 2 à 3 mois
          </figcaption>
        </figure>
      </section>

      <section className="focus-band" aria-label="Positionnement">
        <div>
          <Rocket size={22} aria-hidden="true" />
          <span>Développement fullstack</span>
        </div>
        <div>
          <Code2 size={22} aria-hidden="true" />
          <span>Automatisation & données</span>
        </div>
        <div>
          <BriefcaseBusiness size={22} aria-hidden="true" />
          <span>Gestion IT générale</span>
        </div>
      </section>

      <section className="section-block" id="experiences">
        <div className="section-heading">
          <p className="eyebrow">Parcours</p>
          <h2>Expériences professionnelles</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="timeline-card" key={experience.company}>
              <p className="period">{experience.period}</p>
              <h3>{experience.title}</h3>
              <p className="company">{experience.company}</p>
              <p>{experience.summary}</p>
              <div className="tag-list" aria-label={`Technologies ${experience.company}`}>
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block muted" id="projets">
        <div className="section-heading">
          <p className="eyebrow">Réalisation</p>
          <h2>Projets techniques</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <h3>{project.name}</h3>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
              <p>{project.description}</p>
              <div className="stack-row" aria-label={`Stack ${project.name}`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split" id="competences">
        <div className="section-heading">
          <p className="eyebrow">Stack</p>
          <h2>Compétences techniques</h2>
          <p>
            Un socle développement, données et infrastructure pour intervenir sur
            des besoins concrets, du prototype à l'outil interne exploitable.
          </p>
        </div>
        <div className="skills-layout">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block education-band">
        <div className="education-item">
          <GraduationCap size={24} aria-hidden="true" />
          <div>
            <p className="period">Depuis septembre 2022</p>
            <h3>ESAIP, école d'ingénieur · Angers</h3>
            <p>Cybersécurité, réseaux, architecture systèmes, programmation et bases de données.</p>
          </div>
        </div>
        <div className="education-item">
          <MapPin size={24} aria-hidden="true" />
          <div>
            <p className="period">Erasmus</p>
            <h3>Óbuda University · Budapest</h3>
            <p>Échange international, anglais technique et SAP.</p>
          </div>
        </div>
        <div className="education-item">
          <HeartHandshake size={24} aria-hidden="true" />
          <div>
            <p className="period">Engagement</p>
            <h3>ESN & Cop1</h3>
            <p>Coordination d'équipes, accueil international et distributions alimentaires étudiantes.</p>
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Disponible pour échanger sur un stage IT.</h2>
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
            Télécharger le CV
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
