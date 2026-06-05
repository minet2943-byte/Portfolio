function Contact({ contactText, emailLabel, focus, focusText, label, title }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="contact-panel">
        <div className="max-w-2xl">
          <p className="section-kicker">{label}</p>
          <h2 className="section-title">{title}</h2>
          <p className="mt-4 text-base leading-8 text-(--muted)">{contactText}</p>
        </div>

        <div className="grid gap-4 text-sm text-(--muted) sm:grid-cols-2">
          <a className="contact-link" href="mailto:sokneth.dev@example.com">
            <span className="font-medium text-(--text)">{emailLabel}</span>
            <span>sokneth.dev@example.com</span>
          </a>
          <a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer">
            <span className="font-medium text-(--text)">GitHub</span>
            <span>github.com</span>
          </a>
          <a className="contact-link" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <span className="font-medium text-(--text)">LinkedIn</span>
            <span>linkedin.com</span>
          </a>
          <a className="contact-link" href="https://facebook.com/" target="_blank" rel="noreferrer">
            <span className="font-medium text-(--text)">Facebook</span>
            <span>facebook.com</span>
          </a>
          <a className="contact-link" href="https://t.me/" target="_blank" rel="noreferrer">
            <span className="font-medium text-(--text)">Telegram</span>
            <span>t.me</span>
          </a>
          <div className="contact-link">
            <span className="font-medium text-(--text)">{focus}</span>
            <span>{focusText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
