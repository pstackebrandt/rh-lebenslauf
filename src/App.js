import './App.css';

function App() {
  // personal data
  const position = {
        desired: ["Web Developer", "Software Developer", "Software Engineer",
          "Fullstack Developer", "Frontend Developer"],
        preferred: ["Web Developer", "Fullstack Web Developer", "Frontend Web Developer"]
      }
  ;
  const personalData = { firstName: "Peter", lastName: "Stackebrandt",
    birthday: "1970-01-01"};
  const name = "Peter Stackebrandt";
  const address = { street: "Musterstraße 1", zip: "12345", city: "Feucht"};
  const contact = { phone: "+49 123 456789",
    email: "peter.st@dummy.email.com"};




  /* e.g. Header: Name, Position, Foto */
  function AppHeader() {
    return <header>
    <div className="tag-marker"><sub>HEADER</sub></div>
      <p>{name}</p>
    </header>;
  }

  function AppMain() {
    return <main>
      <div>
        <div className="tag-marker"><sub>MAIN</sub></div>

        <PageTitle title="Profil" />

        <AboutMe />
        {/* Fähigkeiten */}
        {/* Projekte */}
        {/* Ausbildung */}
        <Contact />
      </div>
    </main>;
  }

  function AboutMe() {
    return <about-me>
      <div>
        <div className="tag-marker"><sub>ABOUT ME</sub></div>
        <h2>Über mich</h2>
        <div>Name: {name}</div>
        <div>City: {address.city}</div>
        <div>Angestrebte Positionen: </div>
      </div>
    </about-me>;
  }

  function PageTitle(props) {
    return <page-title>
      <div>
        <div className="tag-marker"><sub>PAGE TITLE</sub></div>
        <h2>{props.title}</h2>
      </div>
    </page-title>;
  }

  function Contact() {
    return <contact>
      <div>
        <div className="tag-marker"><sub>CONTACT</sub></div>
        <h2>Kontaktinformationen</h2>
        <div>Email: {contact.email}</div>
        <div>Telefon: {contact.phone}</div>
      </div>
    </contact>;
  }

  // Footer: Links zu deinen Social-Media-Profilen, kurze Nachricht, dass du für Anfragen zur Verfügung stehst.
  function AppFooter() {
    return <footer>
      <div  className="tag-marker"><sub>FOOTER</sub></div>
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
