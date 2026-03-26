import heroImage from '../assets/hero.png'
import aboutImage from '../assets/about.png'
import approachImage from '../assets/approach.png'
import pathwaysImage from '../assets/pathways.png'
import communityImage from '../assets/community.png'
import researchImage from '../assets/research.png'
import labImage from '../assets/support.png'

function TopCard({ image, title, text, button, buttonClass='btn-gold', overlay=true, link='#/about' }) {
  return (
    <article className="card">
      <img src={image} alt={title} className={overlay ? 'image-tall' : 'image-short'} />
      {overlay ? (
        <div className="overlay-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className={`btn ${buttonClass}`}>{button}</a>
        </div>
      ) : (
        <div className="bottom-copy">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className={`btn ${buttonClass}`}>{button}</a>
        </div>
      )}
    </article>
  )
}

export default function HomePage() {
  const pathways = [
    'Comfort & Circulation Support',
    'Daily Natural Skin Wellness',
    'Special Skin Care Support',
    'Light Balance & Clean Living',
    'Calm & Rest Support',
    'Emotional Ease & Mood Balance',
    'Better Living Rituals',
    'Focus & Clarity Support',
    'Space Purification & Atmosphere',
  ]

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-shade">
          <h1>Building a Research-Informed Natural Wellness Platform at UNH BIC</h1>
          <p>Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing wellness education, thoughtful product innovation, and companion-centered community support through a research-informed approach.</p>
          <div className="hero-actions">
            <a href="#/about" className="btn btn-gold">About Liuli Society</a>
            <a href="#/approach" className="btn btn-green">Explore Our Approach</a>
            <a href="#/contact" className="btn btn-green subtle-btn">Connect With Us</a>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="trust-item">U.S. 501(c)(3) Nonprofit</div>
        <div className="trust-item">Research-Informed Approach</div>
        <div className="trust-item">Community-Centered Mission</div>
        <div className="trust-item">Innovation Environment at UNH BIC</div>
      </section>

      <main className="content">
        <section className="mission-panel">
          <h2>Our Mission</h2>
          <p>We are committed to advancing natural wellness through education, research-informed design, and community-based support. Our mission is to make healthy living more understandable, more accessible, and more humane for individuals, families, and communities.</p>
        </section>

        <section className="pillars-section">
          <h2>Three Core Pillars</h2>
          <div className="pillars-grid">
            <article className="subcard"><h3>Health Knowledge System</h3><p>We translate wellness knowledge into practical, understandable guidance for daily life.</p></article>
            <article className="subcard"><h3>Thoughtful Product Design</h3><p>Our design process begins with real-life wellness needs and a deeper understanding of health support.</p></article>
            <article className="subcard"><h3>Companion Support Service</h3><p>We believe trust grows through follow-up, listening, education, and long-term support.</p></article>
          </div>
        </section>

        <section className="grid-two">
          <TopCard image={aboutImage} title="About" text="Explain who Liuli Society is, why it exists, and why it is structured as a nonprofit." button="About Us" buttonClass="btn-gold" overlay link="#/about" />
          <TopCard image={approachImage} title="Our Approach" text="Our approach begins not with selling, but with understanding." button="Learn about our approach" buttonClass="btn-green" overlay link="#/approach" />
        </section>

        <section className="grid-two second-row">
          <TopCard image={pathwaysImage} title="Wellness Pathways" text="Our wellness framework is organized into nine pathways that reflect everyday needs, natural care experiences, and future areas of research and education." button="Explore the 9 Pathways" buttonClass="btn-green" overlay={false} link="#/pathways" />
          <TopCard image={communityImage} title="Community Impact" text="We aim to build a model that does more than offer products. By integrating education, thoughtful design, and human-centered follow-through, we hope to create a healthier and more supportive experience for the communities we serve." button="Community" buttonClass="btn-gold" overlay={false} link="#/community" />
        </section>

        <section className="pathway-list-panel">
          <h2>Wellness Pathways</h2>
          <p>Our wellness framework is divided into nine pathways, built around daily needs, natural care experiences, and future research and education directions.</p>
          <div className="pathway-list">{pathways.map(item => <span key={item} className="pathway-chip">{item}</span>)}</div>
        </section>

        <section className="science-row">
          <article className="science-banner" style={{ backgroundImage: `url(${researchImage})` }}>
            <div className="science-shade">
              <h2>Research and Innovation at UNH BIC</h2>
              <p>Within the innovation environment of UNH BIC, Liuli Society is developing a nonprofit platform for wellness education, exploratory formulation design, community-centered pilot initiatives, and long-term mission-driven growth.</p>
              <ul className="science-list">
                <li>Early-stage wellness innovation</li>
                <li>Education-centered pilot models</li>
                <li>Community-facing initiatives</li>
                <li>Responsible exploration and refinement</li>
              </ul>
              <a href="#/research" className="btn btn-gold">Research at UNH BIC</a>
            </div>
          </article>
          <article className="science-side"><img src={labImage} alt="Wellness research and formulation exploration" /></article>
        </section>

        <section className="support-cta-panel">
          <div>
            <h2>Support Our Mission</h2>
            <p>As a 501(c)(3) nonprofit organization, Liuli Society welcomes mission-aligned partnerships, educational collaborations, and future support opportunities that help expand community wellness impact.</p>
          </div>
          <div className="support-cta-actions">
            <a href="#/support" className="btn btn-gold">Partner With Us</a>
            <a href="#/support" className="btn btn-green">Support the Mission</a>
          </div>
        </section>

        <section className="contact-cta-panel">
          <h2>Let’s Build a Better Wellness Future Together</h2>
          <p>We welcome conversations with educators, researchers, community partners, and supporters who believe in a more thoughtful approach to natural wellness.</p>
          <a href="#/contact" className="btn btn-gold">Contact Us</a>
        </section>
      </main>
    </>
  )
}
