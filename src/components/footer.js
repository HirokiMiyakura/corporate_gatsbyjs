import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="site">
        <Link to={`/`}>
          <h2 className="logoTitle">Orfool inc.</h2>
          <p>TRY ALL, ENJOY ALL</p>
        </Link>
      </div>
      <ul className="sns">
        <li>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="sr-only">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/">
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span className="sr-only">Facebook</span>
          </a>
        </li>
        <li>
          <a href="http://instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="sr-only">Instagram</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)