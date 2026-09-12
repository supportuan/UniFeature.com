function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <span key={i} className="logo-dot" />
      ))}
    </span>
  )
}

type DownloadButtonProps = {
  className?: string
}

function DownloadButton({ className = '' }: DownloadButtonProps) {
  return (
    <button
      type="button"
      className={`download-btn ${className}`.trim()}
      aria-label="Download Metricra"
    >
      <AppleIcon />
      <span className="download-btn-text">Download</span>
    </button>
  )
}

function App() {
  return (
    <div id="top" className="page">
      <main>
        <header className="site-header">
          <a href="#top" className="logo-link" aria-label="Metricra home">
            <LogoMark />
            <span className="logo-wordmark">Metricra</span>
          </a>
          <DownloadButton className="download-btn--header" />
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-eyebrow">AI agents to work for you</p>
            <h1 id="hero-title" className="hero-title">
              Let professional AI agents do the work for you.
            </h1>
            <DownloadButton />
          </div>
          <p className="hero-description">
            Choose from a growing team of AI agents, each built to solve a
            specific problem professionally.
          </p>
        </section>

        <video
          className="media-placeholder"
          aria-label="Metricra product preview"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_022931_e13cbef4-690a-42d2-b5ee-5b3b1f483c83.mp4"
            type="video/mp4"
          />
        </video>
      </main>
    </div>
  )
}

export default App
