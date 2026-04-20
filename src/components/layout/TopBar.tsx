'use client'

export default function TopBar() {
  return (
    <div className="top-bar d-none d-md-block">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="top-bar-left">
              <div className="text">
                <i className="fa fa-phone-alt"></i>
                <p>+254 112 747 946</p>
              </div>
              <div className="text">
                <i className="fa fa-envelope"></i>
                <p>info@jerusalemchurchofchrist.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="top-bar-right">
              <div className="social">
                <a href="https://www.x.com/@jerusalemc56" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://fb.com/jerusalemc56" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@JERUSALEMCHURCHKAWANGWARE56" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/jerusalemc56" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@jerusalemc56" target="_blank" rel="noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
