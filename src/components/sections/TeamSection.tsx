import { TeamMember } from '@/types'

const members: TeamMember[] = [
  { name: 'Late Prophetess Mary Akatsa', role: 'Founder & CEO', image: '/img/team-1.jpg' },
  { name: 'Mr Kobe', role: 'Lead - Media', image: '/img/t_K.jpg' },
]

export default function TeamSection() {
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>The Team</p>
          <h2>Awesome guys behind our service activities</h2>
        </div>
        <div className="row">
          {members.map((m) => (
            <div key={m.name} className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="team-text">
                  <h2>{m.name}</h2>
                  <p>{m.role}</p>
                  <div className="team-social">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
