import SunIcon from '../icons/SunIcon'
import MoonIcon from '../icons/MoonIcon'

export default function MachHeader({ dark, onToggleTheme, machPills }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-eyebrow">Reference Guide</div>
        <button className="theme-toggle" onClick={onToggleTheme}>
          {dark ? <SunIcon /> : <MoonIcon />}
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
      <h1 className="header-title">MACH Architecture</h1>
      <p className="header-subtitle">
        Services for building a "best-of-breed" stack for e-commerce and
        content-driven businesses. One specialized, API-first service per
        business function.
      </p>
      <div className="mach-pills">
        {machPills.map(({ letter, word }) => (
          <div key={letter} className="mach-pill">
            <span className="mach-pill-letter">{letter}</span>
            <span>{word}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
