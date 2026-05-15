export default function Contact() {
  const contacts = [
    {
      id: 'email',
      title: 'Email',
      value: 'zeeshanmehar305@gmail.com',
      href: 'mailto:zeeshanmehar305@gmail.com',
    },
    {
      id: 'github',
      title: 'GitHub',
      value: 'github.com/zeeshan0007',
      href: 'https://github.com/zeeshan0007',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/muhammadzeshan',
      href: 'https://www.linkedin.com/in/web-application-developer-react-js-expert/',
    },
    {
      id: 'location',
      title: 'Location',
      value: 'Remote / Pakistan',
      href: null,
    },
  ];

  return (
    <section id="contact" className="section">
      <h2>Get in touch</h2>
      <p className="muted mb-6">
        I&apos;m open to full-time roles, contract work, and consulting. Email
        is the fastest way to reach me — always happy to talk through what
        you&apos;re building.
      </p>

      <div className="space-y-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex gap-3">
            <span className="muted w-24 shrink-0">{contact.title}</span>
            {contact.href ? (
              <a
                href={contact.href}
                className="no-underline break-all"
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  contact.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
              >
                [{contact.value}]
              </a>
            ) : (
              <span className="break-all">{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
