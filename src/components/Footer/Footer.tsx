import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import mediumIcon from '../../assets/medium.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://anilks.com/" className="logo">
        <span>www.anilks.com</span>
        
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/acharyaks90/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/acharyaks90"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/+918930068008"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://acharyaks90.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mediumIcon} alt="medium" />
        </a>
      </div>
    </Container>
  )
}
