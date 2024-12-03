// Footer Component
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div id="row1" className="row ">
          <a
            href="https://www.linkedin.com/in/md-hosain-ahmed-825b6b1ba/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/cshosain"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/hosainandh/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div id="row1" className="row">
          © Developed By Md. Hosain
        </div>
      </div>
    </footer>
  );
};

export default Footer;
