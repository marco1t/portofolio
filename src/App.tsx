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
  { label: 'Profil · parcours · formation', points: '3 pts', href: '#profil' },
  { label: 'Compétences', points: '5 pts', href: '#competences' },
  { label: 'LEP sur 2 ans', points: '6 pts', href: '#lep' },
  { label: 'Valeurs · anti-valeurs', points: '3 pts', href: '#valeurs' },
  { label: 'Projet professionnel', points: '2 pts', href: '#projet' },
]

const profileCards = [
  {
    title: 'Qui je suis',
    text: "Je suis étudiant en 4e année du cycle ingénieur à l'ESAIP, spécialisé en cybersécurité. Mon parcours associe développement, réseaux, bases de données, projets techniques et expériences professionnelles en environnement IT.",
  },
  {
    title: 'Pourquoi cette orientation',
    text: "J'ai choisi l'informatique parce que j'aime comprendre le fonctionnement des systèmes, résoudre des problèmes techniques et travailler sur des sujets concrets. La cybersécurité m'attire car elle relie la technique, l'analyse, la rigueur et la protection des usages numériques.",
  },
  {
    title: "Mon choix de l'école d'ingénieur",
    text: "J'ai choisi une école d'ingénieur pour construire un profil complet : compétences techniques, gestion de projet, communication, travail d'équipe et compréhension du monde de l'entreprise.",
  },
]

const formationCards = [
  {
    title: 'Ce que ma formation apporte à mon projet',
    text: "La spécialisation cybersécurité, les enseignements en réseaux, architecture systèmes, programmation et bases de données construisent le socle attendu pour viser un poste d'ingénieur cybersécurité.",
  },
  {
    title: "Ce que j'ai apprécié",
    text: "J'ai apprécié la diversité des matières, les projets en équipe, l'ouverture internationale avec Erasmus à Óbuda University et le lien progressif entre technique, organisation et réalité professionnelle.",
  },
  {
    title: "Ce qui m'a manqué",
    text: "J'aurais aimé davantage de mises en situation longues autour de la cybersécurité opérationnelle : analyse d'incident, défense de systèmes, audit, durcissement et retours d'expérience de professionnels du secteur.",
  },
]

const experienceCards = [
  {
    title: 'Activ’ESAIP · Projet Entreprise',
    period: 'Février à juin 2025',
    text: 'Développement fullstack, création d’un SaaS interne, dashboard et intégration Firebase.',
  },
  {
    title: 'ETS · Fougères',
    period: 'Juin à mi-août 2025',
    text: "Stage en appui au développement d'une TPE et création d'un site web responsive avec WordPress.",
  },
  {
    title: 'RS2i · Levallois-Perret',
    period: 'Février à mars 2023',
    text: 'Développement VBA, automatisation Excel, macros et outils sur mesure.',
  },
]

const competenceGroups = [
  {
    title: 'Compétences techniques',
    intro:
      "Elles constituent mon socle pour comprendre, développer et sécuriser des systèmes d'information.",
    skills: ['Cybersécurité', 'Réseaux', 'Python', 'Java', 'C++', 'SQL', 'Node.js', 'Firebase', 'AWS', 'VMware'],
    link:
      "Pour un futur ingénieur cybersécurité, ces compétences permettent d'analyser une architecture, comprendre les vulnérabilités, automatiser des tâches et dialoguer efficacement avec les équipes techniques.",
  },
  {
    title: 'Compétences comportementales',
    intro:
      "Elles décrivent ma manière de travailler avec les autres et de progresser dans un cadre collectif.",
    skills: ['Proactivité', 'Écoute active', 'Esprit d’équipe', 'Rigueur', 'Autonomie', 'Adaptabilité'],
    link:
      "En cybersécurité, la dimension humaine est essentielle : il faut savoir alerter, expliquer, coopérer et rester fiable dans des situations où les enjeux peuvent être sensibles.",
  },
  {
    title: 'Compétences transversales',
    intro:
      'Elles me permettent de passer de la technique à une réponse utile, structurée et compréhensible.',
    skills: ['Gestion de projet', 'Communication', 'Analyse', 'Documentation', 'Vision entreprise', 'Apprentissage continu'],
    link:
      "Ces compétences sont nécessaires pour transformer un problème de sécurité en plan d'action clair, priorisé et acceptable par une organisation.",
  },
]

const lepCards = [
  {
    title: 'ING3 · Distribution alimentaire',
    text: "Avec l'association Copain, j'ai participé à la distribution alimentaire auprès d'étudiants. J'ai découvert un engagement concret, au contact de besoins réels, dans un environnement où l'organisation, la discrétion et le respect sont importants.",
  },
  {
    title: 'ING4 · Continuité et soutien scolaire',
    text: "En ING4, je poursuis mon engagement avec Copain et j'ajoute du soutien scolaire. Cet engagement demande de l'écoute, de la patience et une capacité à s'adapter au niveau et aux difficultés de chaque personne.",
  },
  {
    title: "Ce que j'ai vécu",
    text: "J'ai été confronté à des situations qui rappellent que les difficultés étudiantes ne sont pas abstraites. Le bénévolat m'a permis de sortir d'un cadre uniquement scolaire et de participer à une action utile, simple et directe.",
  },
  {
    title: "Ce que j'ai acquis",
    text: "J'ai renforcé mon sens de l'organisation, ma capacité d'écoute, ma fiabilité et mon esprit d'équipe. Le soutien scolaire m'aide aussi à mieux expliquer, reformuler et transmettre une méthode.",
  },
  {
    title: "Ce que j'ai appris sur moi",
    text: "J'ai compris que je suis motivé par les projets qui ont un impact concret. J'ai aussi appris que je peux être plus à l'aise lorsque les missions sont structurées, avec un objectif clair et une utilité visible.",
  },
]

const values = [
  {
    title: 'Respect',
    text: "Reconnaître la place de chacun, écouter avant de juger et travailler dans un cadre sain.",
  },
  {
    title: 'Fiabilité',
    text: 'Être une personne sur qui une équipe peut compter, tenir ses engagements et assumer ses responsabilités.',
  },
  {
    title: 'Entraide',
    text: 'Avancer avec les autres, partager ses connaissances et accepter de demander ou proposer de l’aide.',
  },
  {
    title: 'Responsabilité',
    text: 'Comprendre les conséquences de ses décisions, surtout dans des domaines sensibles comme la cybersécurité.',
  },
  {
    title: 'Progression continue',
    text: 'Rester curieux, apprendre régulièrement et transformer les erreurs en axes de progrès.',
  },
]

const antiValues = [
  {
    title: 'Injustice',
    text: 'Les décisions arbitraires ou inéquitables fragilisent la confiance et empêchent un collectif de fonctionner correctement.',
  },
  {
    title: 'Mépris',
    text: 'Le manque de considération bloque la communication, décourage les personnes et réduit la qualité du travail.',
  },
  {
    title: 'Manque de fiabilité',
    text: 'Ne pas tenir ses engagements crée de l’incertitude, surtout dans un projet technique ou une mission sensible.',
  },
  {
    title: 'Individualisme excessif',
    text: 'Chercher uniquement son intérêt personnel limite l’entraide, la transmission et la réussite collective.',
  },
  {
    title: 'Immobilisme',
    text: 'Refuser d’apprendre ou de remettre en question ses méthodes est incompatible avec un domaine qui évolue vite.',
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

      <section className="hero-section" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">Carnet de compétences · PPP ING4 · Étape 2</p>
          <h1>Roulem Baitiche</h1>
          <p className="hero-lede">
            Étudiant ingénieur à l’ESAIP, spécialisé en cybersécurité, je construis
            mon projet professionnel autour de la protection des systèmes, de la
            résolution de problèmes techniques et du travail en équipe.
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
              <dt>Engagement</dt>
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
            Portfolio aligné sur le cahier des charges PPP ING4
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
          <h2>Mon profil, mon parcours et ma formation</h2>
          <p>
            Cette partie présente mon identité professionnelle en construction :
            mes choix d’orientation, ma formation et les expériences qui donnent
            du sens à mon projet d’ingénieur cybersécurité.
          </p>
        </div>

        <div className="content-grid three">
          {profileCards.map((card) => (
            <article className="narrative-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
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
          <div className="content-grid three">
            {formationCards.map((card) => (
              <article className="compact-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-row" aria-label="Expériences professionnelles">
          {experienceCards.map((experience) => (
            <article className="timeline-card" key={experience.title}>
              <p className="period">{experience.period}</p>
              <h3>{experience.title}</h3>
              <p>{experience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block muted" id="competences">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">2 · Compétences · 5 points</p>
            <h2>Mes compétences et leur lien avec le métier d’ingénieur</h2>
            <p>
              Mon objectif est de relier mes compétences techniques, humaines et
              transversales à un futur poste en cybersécurité, où la technique ne
              suffit pas sans analyse, communication et responsabilité.
            </p>
          </div>

          <div className="content-grid three">
            {competenceGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
                <div className="skill-list" aria-label={group.title}>
                  {group.skills.map((skill) => (
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
          <h2>Mon engagement bénévole en ING3 et ING4</h2>
          <p>
            Mon LEP s’inscrit dans un engagement étudiant concret avec Copain :
            distribution alimentaire en ING3, puis continuité de l’engagement et
            soutien scolaire en ING4.
          </p>
        </div>

        <div className="lep-layout">
          {lepCards.map((card, index) => (
            <article className="lep-card" key={card.title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block muted" id="valeurs">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">4 · Valeurs et anti-valeurs · 3 points</p>
            <h2>Mes valeurs et ce que je refuse dans le travail</h2>
            <p>
              Mes valeurs orientent ma manière de travailler. Mes anti-valeurs ne
              sont pas de simples opposés : ce sont des attitudes ou situations
              qui empêchent la confiance, l’apprentissage et la qualité collective.
            </p>
          </div>

          <div className="values-layout">
            <div>
              <h3>Valeurs principales</h3>
              <div className="value-list">
                {values.map((value) => (
                  <article className="value-card" key={value.title}>
                    <strong>{value.title}</strong>
                    <p>{value.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3>Anti-valeurs</h3>
              <div className="value-list">
                {antiValues.map((value) => (
                  <article className="value-card anti" key={value.title}>
                    <strong>{value.title}</strong>
                    <p>{value.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block project-section" id="projet">
        <div className="section-heading">
          <p className="eyebrow">5 · Projet professionnel et projection · 2 points</p>
          <h2>Mon projet professionnel</h2>
          <p>
            Je vise le métier d’ingénieur cybersécurité. Mon objectif est de
            participer à la protection des systèmes d’information, en combinant
            compréhension technique, analyse des risques, automatisation et
            communication avec les équipes.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <Rocket size={24} aria-hidden="true" />
            <h3>Objectif professionnel</h3>
            <p>
              Rejoindre un environnement où je pourrai progresser sur des sujets
              de cybersécurité : sécurisation d’architectures, analyse de
              vulnérabilités, supervision, réponse à incident ou sécurité cloud.
            </p>
          </article>
          <article className="project-card">
            <Code2 size={24} aria-hidden="true" />
            <h3>Lien avec mes compétences</h3>
            <p>
              Mes compétences en développement, réseaux, systèmes, bases de
              données et automatisation me donnent une base solide pour comprendre
              les environnements à protéger et proposer des solutions adaptées.
            </p>
          </article>
          <article className="project-card highlight">
            <BriefcaseBusiness size={24} aria-hidden="true" />
            <h3>Dans 5 ans</h3>
            <p>
              Je me vois en poste dans la cybersécurité, avec une vraie expérience
              professionnelle, des compétences renforcées et davantage de
              responsabilités sur des projets techniques et organisationnels.
            </p>
          </article>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Présentation · 1 point</p>
          <h2>Un portfolio clair, structuré et centré sur le carnet PPP ING4.</h2>
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
          <span className="location-pill">
            <MapPin size={16} aria-hidden="true" />
            Mobile dans toute la France
          </span>
        </div>
      </footer>
    </main>
  )
}

export default App
