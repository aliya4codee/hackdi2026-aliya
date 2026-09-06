import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/results')({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === 'string' ? search.category : '',
    zip: typeof search.zip === 'string' ? search.zip : '',
  }),
  component: Results,
})

type Professional = {
  id: number
  name: string
  profession: string
  category: string
  city: string
  state: string
  zip: string
  rating?: number
  recommendations?: number
  verified?: boolean
  description?: string
}

const professionals: Professional[] = [
  {
    id: 26,
    name: 'Dr. Aaila Chaudhry',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Hamilton',
    state: 'NJ',
    zip: '08690',
  },
  {
    id: 27,
    name: 'Dr. Layla Kamoun',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Trenton',
    state: 'NJ',
    zip: '08619',
  },
  {
    id: 28,
    name: 'Dr. Asma Saud',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Somerset',
    state: 'NJ',
    zip: '08873',
  },
  {
    id: 29,
    name: 'Dr. Sana Qureshi',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Dover',
    state: 'NJ',
    zip: '07801',
  },
  {
    id: 30,
    name: 'Dr. Noreen Shaikh',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Wayne',
    state: 'NJ',
    zip: '07470',
  },
  {
    id: 31,
    name: 'Dr. Adnan Mallick',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Teaneck',
    state: 'NJ',
    zip: '07666',
  },
  {
    id: 32,
    name: 'Dr. Ahsan Hussain',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Toms River',
    state: 'NJ',
    zip: '08755',
  },
  {
    id: 33,
    name: 'Dr. Tasneem Shamim',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Somerset',
    state: 'NJ',
    zip: '08873',
  },
  {
    id: 34,
    name: 'Dr. Misheal Artani',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Monmouth Junction',
    state: 'NJ',
    zip: '08852',
  },
  {
    id: 35,
    name: 'Dr. Naved Hussain',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Kendall Park',
    state: 'NJ',
    zip: '08824',
  },
  {
    id: 36,
    name: 'Dr. Salma Khan',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Kendall Park',
    state: 'NJ',
    zip: '08824',
  },
  {
    id: 37,
    name: 'Dr. Amira Riad',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Hillsborough',
    state: 'NJ',
    zip: '08844',
  },
  {
    id: 38,
    name: 'Dr. Maryam Hasan Gilani',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Hillsborough',
    state: 'NJ',
    zip: '08844',
  },
  {
    id: 39,
    name: 'Dr. Ayesha Muzaffar',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Piscataway',
    state: 'NJ',
    zip: '08854',
  },
  {
    id: 40,
    name: 'Dr. Nesrin Dagli',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'North Brunswick',
    state: 'NJ',
    zip: '08902',
  },
  {
    id: 41,
    name: 'Dr. Hussain',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Somerset',
    state: 'NJ',
    zip: '08873',
  },
  {
    id: 42,
    name: 'Dr. Andleeb Naquvi',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Robbinsville',
    state: 'NJ',
    zip: '08691',
  },
  {
    id: 43,
    name: 'Dr. Umar Mirza',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'East Windsor',
    state: 'NJ',
    zip: '08520',
  },
  {
    id: 44,
    name: 'Dr. Zain Yusuf',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'East Windsor',
    state: 'NJ',
    zip: '08520',
  },
  {
    id: 45,
    name: 'Dr. Naila Usmani',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'East Windsor',
    state: 'NJ',
    zip: '08520',
  },
  {
    id: 46,
    name: 'Dr. Dinah Jammal',
    profession: 'Pediatric Dentist',
    category: 'Pediatric Dentistry',
    city: 'Marlboro',
    state: 'NJ',
    zip: '07746',
  },
  {
    id: 47,
    name: 'Dr. Imran Uddin',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Florham Park',
    state: 'NJ',
    zip: '07932',
  },
  {
    id: 48,
    name: 'Dr. Taliah Khan',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Florham Park',
    state: 'NJ',
    zip: '07932',
  },
  {
    id: 49,
    name: 'Dr. Wesam Shafee',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Paramus',
    state: 'NJ',
    zip: '07652',
  },
  {
    id: 50,
    name: 'Dr. Muhammad Abey',
    profession: 'Orthodontist',
    category: 'Orthodontics',
    city: 'Wayne',
    state: 'NJ',
    zip: '07470',
  },
  {
    id: 51,
    name: 'Dr. Irfan Farhat',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Wayne',
    state: 'NJ',
    zip: '07470',
  },
  {
    id: 52,
    name: 'Dr. Nomahn Humayun',
    profession: 'Periodontist',
    category: 'Periodontics',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
  },
  {
    id: 53,
    name: 'Dr. Nida Mahmood',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
  },
  {
    id: 54,
    name: 'Dr. Altay Khanmamedov',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Teaneck',
    state: 'NJ',
    zip: '07666',
  },
  {
    id: 55,
    name: 'Dr. Asad Chaudhry',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Somerville',
    state: 'NJ',
    zip: '08876',
  },
  {
    id: 56,
    name: 'Dr. Samin Nawaz',
    profession: 'Endodontist',
    category: 'Endodontics',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
  },
  {
    id: 57,
    name: 'Dr. Loay Shadid',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'South Plainfield',
    state: 'NJ',
    zip: '07080',
  },
  {
    id: 58,
    name: 'Dr. Radwa Saad',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
  },
  {
    id: 59,
    name: 'Dr. Issa',
    profession: 'Orthodontist',
    category: 'Orthodontics',
    city: 'Emmaus',
    state: 'PA',
    zip: '18049',
  },
  {
    id: 60,
    name: 'Maryam Abbasi',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'North Brunswick',
    state: 'NJ',
    zip: '08902',
  },
  {
    id: 61,
    name: 'Dr. Azita Ebrahimzadeh',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Warren',
    state: 'NJ',
    zip: '07059',
  },
  {
    id: 62,
    name: 'Dr. Arash Baseri',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Warren',
    state: 'NJ',
    zip: '07059',
  },
  {
    id: 63,
    name: 'Dr. Aamna Ali',
    profession: 'Pediatric Dentist',
    category: 'Pediatric Dentistry',
    city: 'Lawrence Township',
    state: 'NJ',
    zip: '08648',
  },
  {
    id: 64,
    name: 'Dr. Saima Mian',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Dunellen',
    state: 'NJ',
    zip: '08812',
  },
  {
    id: 65,
    name: 'Dr. Sarah Mourad',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'Fair Lawn',
    state: 'NJ',
    zip: '07410',
  },
  {
    id: 66,
    name: 'Dr. Qudsia Husain',
    profession: 'Pediatric Dentist',
    category: 'Pediatric Dentistry',
    city: 'Harrison',
    state: 'NJ',
    zip: '07029',
  },
  {
    id: 67,
    name: 'Dr. Jaafar Ali',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'East Hanover',
    state: 'NJ',
    zip: '07936',
  },
  {
    id: 68,
    name: 'Dr. Muhammadali Dinani',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'East Hanover',
    state: 'NJ',
    zip: '07936',
  },
  {
    id: 69,
    name: 'Dr. Ali Salehi',
    profession: 'Dentist',
    category: 'Dentistry',
    city: 'East Hanover',
    state: 'NJ',
    zip: '07936',
  },
  {
    id: 7,
    name: 'Dr. Huma Ansari',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
  },
  {
    id: 8,
    name: 'Dr. Dina Abdelhady',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'East Brunswick',
    state: 'NJ',
    zip: '08816',
  },
  {
    id: 9,
    name: 'Dr. Erol Dogan',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Edison',
    state: 'NJ',
    zip: '08817',
  },
  {
    id: 10,
    name: 'Dr. Faryal Azam',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Lawrence Township',
    state: 'NJ',
    zip: '08648',
  },
  {
    id: 11,
    name: 'Dr. Ramy Seyam',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Wayne',
    state: 'NJ',
    zip: '07470',
  },
  {
    id: 12,
    name: 'Dr. Quratulain Khalid',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Lawrence Township',
    state: 'NJ',
    zip: '08648',
  },
  {
    id: 13,
    name: 'Dr. Muhammad Shahbakht',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'West Orange',
    state: 'NJ',
    zip: '07052',
  },
  {
    id: 14,
    name: 'Dr. Sabrina Syed',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Cherry Hill',
    state: 'NJ',
    zip: '08002',
  },
  {
    id: 15,
    name: 'Dr. Ayesha Malik',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Princeton',
    state: 'NJ',
    zip: '08540',
  },
  {
    id: 16,
    name: 'Dr. Mohammad Karim',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Watchung',
    state: 'NJ',
    zip: '07069',
  },
  {
    id: 17,
    name: 'Dr. Omar Munshi',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'South Edison',
    state: 'NJ',
    zip: '08817',
  },
  {
    id: 18,
    name: 'Dr. Abyaz Uppal',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Watchung',
    state: 'NJ',
    zip: '07069',
  },
  {
    id: 19,
    name: 'Dr. Salman Farooqui',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Eatontown',
    state: 'NJ',
    zip: '07724',
  },
  {
    id: 20,
    name: 'Dr. Fayaz Vizam',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Bridgewater',
    state: 'NJ',
    zip: '08807',
  },
  {
    id: 21,
    name: 'Dr. Zunair Rizvi',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Brick',
    state: 'NJ',
    zip: '08723',
  },
  {
    id: 22,
    name: 'Dr. Fazaluddin Hashmi',
    profession: 'Optometrist',
    category: 'Optometry',
    city: 'Linden',
    state: 'NJ',
    zip: '07036',
  },
  {
    id: 23,
    name: 'Dr. Omar Mobin-Uddin',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'New Brunswick',
    state: 'NJ',
    zip: '08901',
  },
  {
    id: 24,
    name: 'Dr. Iftikhar Chaudhry',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Hamilton',
    state: 'NJ',
    zip: '08690',
  },
  {
    id: 25,
    name: 'Dr. Imtiaz Chaudhry',
    profession: 'Ophthalmologist',
    category: 'Optometry',
    city: 'Hamilton',
    state: 'NJ',
    zip: '08690',
  },
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
    const searchTerm = category.toLowerCase()
    const matchesCategory =
      !searchTerm ||
      professional.category.toLowerCase().includes(searchTerm) ||
      professional.profession.toLowerCase().includes(searchTerm)

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

                    {professional.verified !== false && (
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

                  <p className="professional-zip">
                    ZIP code: {professional.zip}
                  </p>

                  {professional.description && (
                    <p className="professional-description">
                      {professional.description}
                    </p>
                  )}

                  <div className="professional-trust">

                    <div>
                      <strong>⭐ {professional.rating ?? 5.0}</strong>
                      <span>Rating</span>
                    </div>

                    <div>
                      <strong>
                        🤝 {professional.recommendations ?? 0}
                      </strong>
                      <span>Recommendations</span>
                    </div>

                  </div>

                  <a
                    href={`/profile/${professional.id}`}
                    className="profile-button"
                  >
                    View Profile →
                  </a>

                </article>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  )
}