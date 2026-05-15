export default function Footer() {
  return (
    <footer className="pt-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4 text-meta muted">
        <div>
          <p>© 2026 Muhammad Zeshan</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/zeeshan0007"
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            [GitHub]
          </a>
          <a
            href="https://www.linkedin.com/in/web-application-developer-react-js-expert/"
            className="no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            [LinkedIn]
          </a>
          <a href="mailto:subscriptions@piecyfer.com" className="no-underline">
            [Email]
          </a>
        </div>
      </div>
    </footer>
  );
}
