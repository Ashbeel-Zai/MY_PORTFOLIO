import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import '../app/css/style.css';
import '../app/css/transitions.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashbeel-ZAi | Ethical Hacker</title>
        <meta name="description" content="Ethical Hacker & Web Developer Portfolio" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="cyber-text">Ashbeel</span><span className="pro-text">Zai</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="active">HOME</a></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/projects">PROJECTS</Link></li>
          <li><Link href="/contact" className="contact-btn">CONTACT</Link></li>
          <li><Link href="/achievements">ACHIEVEMENTS</Link></li>
        </ul>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="glitch" data-text="ETHICAL HACKER & WEB DEVELOPER">ETHICAL HACKER & WEB DEVELOPER</h1>
          <p className="tagline">Securing the Web | Building Modern Applications | Junior Penetration Tester</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">View My Work</a>
            <a href="#contact" className="btn secondary">Hire Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>
              <div className="terminal-title">bash</div>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">$</span> whoami</p>
              <p>ethical_hacker</p>
              <p><span className="prompt">$</span> <span className="typing"></span><span className="cursor">|</span></p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} CyberSec Pro. All rights reserved.</p>
      </footer>

      <Script src="/js/script.js" strategy="afterInteractive" />
      <Script src="/js/transitions.js" strategy="afterInteractive" />
    </>
  );
}
