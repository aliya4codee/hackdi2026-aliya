import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/results')({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === 'string' ? search.category : '',
    zip: typeof search.zip === 'string' ? search.zip : '',
  }),
  component: Results,
})

const professionals = [
  {
    id: 1,
    name: 'Dr. Sarah Khan',
    profession: 'Family Medicine',
    category: 'Healthcare',
    city: 'Jersey City',
    state: 'NJ',
    zip: '07030',
    rating: 4.9,
    recommendations: 24,
    verified: true,
    description:
      'Family physician focused on compassionate, community-centered care.',
  },
  {
    id: 2,
    name: 'Dr. Ahmed Patel',
    profession: 'Dentist',
    category: 'Healthcare',
    city: 'Hoboken',
    state: 'NJ',
    zip: '07030',
    rating: 4.8,
    recommendations: 18,
    verified: true,
    description:
      'General and cosmetic dentist serving families throughout the local community.',
  },
  {
    id: 3,
    name: 'Aisha Rahman',
    profession: 'Immigration Attorney',
    category: 'Legal',
    city: 'Jersey City',
    state: 'NJ',
    zip: '07030',
    rating: 4.9,
    recommendations: 31,
    verified: true,
    description:
      'Immigration attorney helping individuals and families navigate the legal process.',
  },
  {
    id: 4,
    name: 'Omar Hassan',
    profession: 'Software Engineer',
    category: 'Technology',
    city: 'Hoboken',
    state: 'NJ',
    zip: '07030',
    rating: 4.7,
    recommendations: 15,
    verified: true,
    description:
      'Software engineer and technology consultant helping businesses build digital products.',
  },
  {
    id: 5,
    name: 'Fatima Ali',
    profession: 'Wedding Photographer',
    category: 'Creative',
    city: 'Jersey City',
    state: 'NJ',
    zip: '07030',
    rating: 5.0,
    recommendations: 42,
    verified: true,
    description:
      'Wedding and event photographer specializing in culturally meaningful celebrations.',
  },
  {
    id: 6,
    name: 'Yusuf Ahmed',
    profession: 'Accountant',
    category: 'Professional',
    city: 'Hoboken',
    state: 'NJ',
    zip: '07030',
    rating: 4.8,
    recommendations: 21,
    verified: true,
    description:
      'Certified accountant helping individuals and small businesses with financial planning.',
  },
]

function Results() {
  const { category, zip } = Route.useSearch()

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesCategory =
      !category ||
      professional.category.toLowerCase() === category.toLowerCase()

    const matchesZip =
      !zip || professional.zip === zip

    return matchesCategory && matchesZip
  })

  return (
    <main className="results-page">

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">

          <Link to="/" className="logo">
            <span className="logo-mark">✦</span>
            <span>Connected Ummah</span>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="/#categories">Explore</a>
            <button className="nav-business-button">
              Add a Business
            </button>
          </div>

        </div>
      </nav>

      {/* Results Header */}
      <section className="results-header">
        <div className="section-container">

          <Link to="/" className="back-link">
            ← Back to search
          </Link>

          <p className="section-eyebrow">
            COMMUNITY DIRECTORY
          </p>

          <h1>
            {category || 'Professionals'} near {zip || 'you'}
          </h1>

          <p>
            Discover trusted Muslim professionals recommended
            by your community.
          </p>

        </div>
      </section>

      {/* Results */}
      <section className="results-section">
        <div className="section-container">

          <div className="results-top">
            <strong>
              {filteredProfessionals.length} results found
            </strong>

            <span>
              📍 {zip || 'Your location'}
            </span>
          </div>

          {filteredProfessionals.length === 0 ? (
            <div className="no-results">
              <span>🔎</span>
              <h2>No results found</h2>
              <p>
                We couldn't find professionals matching your search.
              </p>

              <Link to="/" className="return-button">
                Try another search
              </Link>
            </div>
          ) : (
            <div className="results-grid">

              {filteredProfessionals.map((professional) => (
                <article
                  className="professional-card"
                  key={professional.id}
                >

                  <div className="professional-top">

                    <div className="professional-avatar">
                      {professional.name.charAt(0)}
                    </div>

                    {professional.verified && (
                      <span className="verified-badge">
                        ✓ Verified
                      </span>
                    )}

                  </div>

                  <h2>
                    {professional.name}
                  </h2>

                  <p className="professional-title">
                    {professional.profession}
                  </p>

                  <p className="professional-location">
                    📍 {professional.city}, {professional.state}
                  </p>

                  <p className="professional-description">
                    {professional.description}
                  </p>

                  <div className="professional-trust">

                    <div>
                      <strong>⭐ {professional.rating}</strong>
                      <span>Rating</span>
                    </div>

                    <div>
                      <strong>
                        🤝 {professional.recommendations}
                      </strong>
                      <span>Recommendations</span>
                    </div>

                  </div>

                  <Link
                    to="/profile/$id"
                    params={{ id: String(professional.id) }}
                    className="profile-button"
                  >
                    View Profile →
                  </Link>

                </article>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  )
}