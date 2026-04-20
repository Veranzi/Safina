const services = [
  { icon: 'flaticon-diet', title: 'Healthy Food', verse: 'Psalm 136:25 : "He gives food to every creature. His love endures".' },
  { icon: 'flaticon-water', title: 'Pure Water', verse: 'Ezekiel 36:25-28 : "Then I will sprinkle pure water on you and make you pure".' },
  { icon: 'flaticon-healthcare', title: 'Health Care', verse: 'Jeremiah 30:17 : "For I will restore health unto thee, and I will heal thee of thy wounds, said the Lord".' },
  { icon: 'flaticon-education', title: 'Insist on Education', verse: 'Proverbs 1:5 : "The wise should hear and increase learning, and those who understand should seek guidance".' },
  { icon: 'flaticon-home', title: 'Shelter', verse: 'Psalms 46:1 : "God is our shelter and strength, always ready to help in times of trouble.".' },
  { icon: 'flaticon-social-care', title: 'Social Care', verse: 'Galatians 6:2 : "Carry each other\'s burdens and so you will fulfill the law of Christ".' },
]

export default function ServiceSection() {
  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p>What We Engage In</p>
          <h2>We believe that we can save more souls</h2>
        </div>
        <div className="row">
          {services.map((s) => (
            <div key={s.title} className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="service-icon">
                  <i className={s.icon}></i>
                </div>
                <div className="service-text">
                  <h3>{s.title}</h3>
                  <p>{s.verse}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
