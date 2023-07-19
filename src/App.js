import './App.css';

function App() {
  // personal data
  const name = "Peter Stackebrandt";
  const position = "Web Developer";
  
  const birthday = "1970-01-01";
  const address = { street: "Musterstraße 1", zip: "12345", city: "Feucht"}
  const phone = "+49 123 456789";
  const email = "peter.st@dummy.email.com";
  const pageTitle = "Profil";


  /* e.g. Header: Name, Position, Foto */
  function AppHeader() {
    return <header>
    <div class="tag-marker"><sub>HEADER</sub></div>
      <p>{name}</p>
    </header>;
  }

  function AppMain() {
    return <main>
      <div>
        <div class="tag-marker"><sub>MAIN</sub></div>
        <PageTitle />
        <AboutMe />
        {/* Fähigkeiten */}
        {/* Projekte */}
        {/* Ausbildung */}
        {/* Kontakt */}
      </div>
    </main>;
  }

  function AboutMe() {
    return <about-me>
      <div>
        <div class="tag-marker"><sub>ABOUT ME</sub></div>
        <h2>Über mich</h2>
        <div>Name: {name}</div>
        <div>City: {address.city}</div>
      </div>
    </about-me>;
  }

  function PageTitle() {
    return <page-title>
      <div>
        <div class="tag-marker"><sub>PAGE TITLE</sub></div>
        <h2>Title</h2>
      </div>
    </page-title>;
  }

  // Footer: Links zu deinen Social-Media-Profilen, kurze Nachricht, dass du für Anfragen zur Verfügung stehst.
  function AppFooter() {
    return <footer>
      <div  class="tag-marker"><sub>FOOTER</sub></div>
      <div>
        Ich bin offen für neue Herausforderungen und freue mich auf Ihre Anfragen.
      </div>
      <div>
        <a href="mailto:example@example.com">example@example.com</a>
      </div>
    </footer>;
  }

  return (
    <div className="App">
      {/* Main parts of the app: */}
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );

}

/* Ideas form structure:

  Header: Name, Position, Foto.
  Über mich: Kurze persönliche Einführung.
  Fähigkeiten: Auflistung von Kenntnissen und Technologien.
  Projekte: Vorstellung ausgewählter Projekte.
  Ausbildung: Bildungsabschlüsse und Zertifizierungen.
  Kontakt: Kontaktinformationen und LinkedIn-Link.
  Footer: Social-Media-Links und Verfügbarkeitsnachricht.
  */


export default App;
