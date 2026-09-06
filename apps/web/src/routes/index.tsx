import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

const categories = [
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Legal', icon: '⚖️' },
  { name: 'Technology', icon: '💻' },
  { name: 'Home Services', icon: '🏠' },
  { name: 'Creative', icon: '🎨' },
  { name: 'Education', icon: '📚' },
  { name: 'Beauty', icon: '💄' },
  { name: 'Professional', icon: '💼' },
  { name: 'Optometry', icon: '👁️' },
  { name: 'Dentistry', icon: '🦷' },
  { name: 'Pediatric Dentistry', icon: '🧸' },
  { name: 'Orthodontics', icon: '😁' },
  { name: 'Periodontics', icon: '🩺' },
  { name: 'Endodontics', icon: '✨' },
]

function Home() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  function handleCategoryClick(category: string) {
    setSelectedCategory(category)
    navigate({
      to: '/results',
      search: {
        category,
        zip: zipCode.trim(),
      },
    })
  }

  function handleSearch() {
    const category = search.trim() || selectedCategory

    if (!category) {
      return
    }

    setSelectedCategory(category)
    navigate({
      to: '/results',
      search: {
        category,
        zip: zipCode.trim(),
      },
    })
  }

  return (
    <main className="home-page">

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-mark">✦</span>
            <span>Connected Ummah</span>
          </a>

          <div className="nav-links">
            <a href="#categories">Explore</a>
            <a href="#about">About</a>
            <button className="nav-business-button">
              Add a Business
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-badge">
            <span>✦</span>
            Built for community
          </div>

          <h1>
            Find your people.
            <br />
            <span>Support your community.</span>
          </h1>

          <p className="hero-description">
            Discover Muslim-owned businesses and professionals
            recommended by people in your community.
          </p>

          {/* Search */}
          <div className="search-container">

            <div className="search-input-wrapper">
              <span className="search-icon">⌕</span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch()
                  }
                }}
                placeholder="What are you looking for?"
                aria-label="Search for a business or professional"
              />
            </div>

            <input
              className="search-zip-input"
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              placeholder="ZIP code (optional)"
              maxLength={5}
              inputMode="numeric"
              aria-label="ZIP code (optional)"
            />

            <button
              type="button"
              className="search-button"
              onClick={handleSearch}
            >
              Search
            </button>

          </div>

          <p className="search-hint">
            Try "dentist", "photographer", "restaurant", or "accountant"
          </p>

        </div>
      </section>

      {/* Location Search */}
      {selectedCategory && (
        <section className="location-section">
          <div className="location-card">

            <div className="location-icon">
              📍
            </div>

            <div className="location-content">
              <p className="location-label">
                FINDING
              </p>

              <h2>
                {selectedCategory}
              </h2>

              <p>
                Where are you looking?
              </p>

              <div className="location-form">

                <input
                  type="text"
                  value={zipCode}
                  onChange={(event) => setZipCode(event.target.value)}
                  placeholder="Enter ZIP code"
                  maxLength={5}
                  aria-label="ZIP code"
                />

                <button type="button" onClick={handleSearch}>
                  Find nearby
                </button>

              </div>
            </div>

            <button
              type="button"
              className="close-location"
              onClick={() => setSelectedCategory(null)}
              aria-label="Close location search"
            >
              ×
            </button>

          </div>
        </section>
      )}

      {/* Categories */}
      <section className="categories-section" id="categories">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <p className="section-eyebrow">
                EXPLORE THE UMMAH
              </p>

              <h2>
                What are you looking for?
              </h2>
            </div>

            <p>
              Find trusted businesses and professionals
              recommended by your community.
            </p>
          </div>

          <div className="categories-grid">

            {categories.map((category) => (
              <button
                type="button"
                key={category.name}
                className={`category-card ${
                  selectedCategory === category.name
                    ? 'category-card-selected'
                    : ''
                }`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="category-icon">
                  {category.icon}
                </span>

                <span className="category-name">
                  {category.name}
                </span>

                <span className="category-arrow">
                  →
                </span>
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* Community Trust */}
      <section className="trust-section" id="about">
        <div className="section-container">

          <div className="trust-content">

            <div>
              <p className="section-eyebrow">
                COMMUNITY POWERED
              </p>

              <h2>
                Discover people you can trust.
              </h2>

              <p>
                Connected Ummah makes it easier to discover
                Muslim-owned businesses and professionals while
                keeping community recommendations at the center.
              </p>
            </div>

            <div className="trust-stats">

              <div className="trust-stat">
                <span>✦</span>
                <strong>Community</strong>
                <p>Recommendations</p>
              </div>

              <div className="trust-stat">
                <span>✓</span>
                <strong>Trusted</strong>
                <p>Local connections</p>
              </div>

              <div className="trust-stat">
                <span>♡</span>
                <strong>Support</strong>
                <p>Muslim-owned</p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Business CTA */}
      <section className="business-section">
        <div className="business-card">

          <div>
            <p className="section-eyebrow">
              ARE YOU A BUSINESS OWNER?
            </p>

            <h2>
              Make your business part of the community.
            </h2>

            <p>
              Help people discover your business and connect
              with customers who want to support the Ummah.
            </p>
          </div>

          <button type="button" className="business-cta">
            Add your business →
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="logo">
            <span className="logo-mark">✦</span>
            <span>Connected Ummah</span>
          </div>

          <p>
            Connecting people, businesses, and community.
          </p>
        </div>
      </footer>

    </main>
  )
}