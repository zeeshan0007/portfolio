import PersonalPhoto from './PersonalPhoto';

export default function Hero() {
  return (
    <header>
      <div className="flex items-center gap-4">
        <PersonalPhoto />
        <div>
          <h1>Muhammad Zeshan</h1>
          <p className="muted">[full-stack engineer]</p>
        </div>
      </div>

      <p className="mt-6">
        I&apos;m a full-stack engineer. For the past four years I&apos;ve built
        web apps for healthcare clinics, SaaS startups, real-estate investors,
        online stores, and AI model evaluation.
        I usually handle the whole thing myself: the database, the API, and the
        interface people actually use.
      </p>

      <div className="mt-4 flex flex-wrap gap-4">
        <a href="#projects" className="no-underline">
          [view my work]
        </a>
        <a href="#contact" className="no-underline">
          [get in touch]
        </a>
      </div>
    </header>
  );
}
