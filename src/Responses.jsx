import { FaLinkedin, FaDrupal, FaGithub, FaInstagram, FaWhatsapp} from "react-icons/fa6";
import { FaRegFilePdf, FaArrowCircleDown} from "react-icons/fa";

const responses = {
  'hello': (
    <div className="reply-msg">
      Hey there! <span className="wave"> 👋 </span><br/><br/>
      Welcome! How can I assist you today?<br />
      If you need any help or information, Please type "Continue"😊
    </div>
  ),
  'continue': (
    <div className="reply-msg">
      Thank you for getting in touch and for your interest!🙏🏻 <br/> <br/>
      To know more about me, you can choose one of the options below👇(Tap to copy):<br/><br/>
      <div class="list-container">
        <ol class="gradient-list">
          <li onClick={() => handleListItemClick("Skills")}>Skills👨🏻‍💻</li>
          <li onClick={() => handleListItemClick("Projects")}>Projects📂</li>
          <li onClick={() => handleListItemClick("Experience")}>Experience💼</li>
          <li onClick={() => handleListItemClick("Education")}>Education👨🏻‍🎓</li>
          <li onClick={() => handleListItemClick("Contact")}>Contact📧</li>
        </ol>
      </div>
      <span>Let's take the next step! Type "<i>download </i>" to receive my resume. </span>
    </div>
  ),
  'skills': (
    <div className="skills-reply">
      Here's the arsenal at my disposal🛠️
      <p><img src="./icons/drupal.png" /> Drupal(8,9 and 10) - For robust content management</p>
      <p><img src="./icons/php.png" /> PHP - Crafting dynamic web solutions</p>
      <p><img src="./icons/jquery.png" /> jQuery - Enhancing interactivity</p>
      <p><img src="./icons/js.jpg" /> JavaScript - Adding pfe to your web apps</p>
      <p><img src="./icons/react.png" /> React - Building modern UIs</p>
      <p><img src="./icons/sql.png" /> SQL - Managing data efficiently</p>
      <p><img src="./icons/hcss.png" /> HTML & CSS - Structuring and styling with finesse</p>
      <p><img src="./icons/rest.png" /> REST API - Seamless integration with other services</p>
      <p><img src="./icons/docker.png" /> Docker - Containerizing your applications</p>
      <p><img src="./icons/postman.png" /> Postman - Streamlining API testing</p>
      <p><img src="./icons/git.png" /> Git & GitHub - Version control and collaboration</p>
      <p><img src="./icons/jira.png" /> JIRA - Tracking tasks and projects</p>
      <p><img src="./icons/confluence.png" /> Confluence - Collaborative documentation</p>
      <p><img src="./icons/swagger.png" /> Swagger - Simplifying API documentation</p>
      <p><img src="./icons/vscode.png" /> VS Code - The ultimate coding companion</p>
    </div>
  ),
  'projects': (
    <div className="projects-reply">
      <p>🌟 Dive into the Depths of My Project Cosmos! 🌠</p>
      🏨<a href="https://www.rishabhsoft.com/" className="link-design" target="blank"> Rishabh Guesthouse Booking System </a>
      <p>Streamline Guesthouse Bookings with Our Portal! Employees Can Easily Book Rishabh Guesthouse, While Admin Teams Effortlessly Manage Bookings.</p>

      📰<a href="https://www.chicagobusiness.com/" className="link-design" target="blank"> CRAIN News Hub </a>
      <p>Stay Ahead with the Latest News! Built on Drupal's Multi-Site Architecture, CRAIN Offers Centralized Management for Over 20+ Brands.</p>

      🧬<a href="https://www.tracelink.com/" className="link-design" target="blank"> Tracelink </a>
      <p>Transform the Online Presence of Tracelink! Elevate the Only Network Creation Platform Company with an Integrated Business Ecosystem.</p>

      💄<a href="https://nalx.elcompanies.com/login" className="link-design" target="blank"> NALX (North america learning experience) </a>
      <p>Unlock Cosmetics Brand Secrets with Our Engaging Web Application. Dive into Comprehensive Courses and Learning Experiences!</p>

      🌟<a href="" target="blank" className="link-design"> Aatmanirbhar Bharat </a>
      <p>Empower Self-Reliant India! Navigate COVID-19 Challenges with Our Web Application. Discover the Five Pillars of Atma Nirbhar Bharat in Action.</p>

      📈<a href="https://www.trigyn.com/" className="link-design" target="blank"> PMS (Performance management system) </a>
      <p>Step into the Dynamic World of Performance Management! From Goal Setting to Final Appraisal, Our Cutting-Edge Portal Ensures Seamless Performance Tracking.</p>
    </div>
  ),
  'education': (
    <div className="education-reply">
      I hold a Bachelor of Engineering (B.E.) in Computer Engineering degree from Mumbai University.
      <ul>
        <li>College: Vimeet College of Engineering🏫 </li>
        <li>Graduated in 2019 with a result of 6.48CGPA</li>
      </ul>
      <span>Dive into my journey by downloading my resume for more educational triumphs! 🎓💼</span> <br/> <br />
      <span>Type "<i>download </i>" to receive my resume.</span>
    </div>
  ),
  'experience': (
    <div className="experience-reply">
      🚀 Professional Journey 🚀
      <br/>
      <br/>
      🏢 Current Role
      <ul>
        <li>Company: <a href="https://www.rishabhsoft.com/" className="link-design" target="blank"> Rishabh Software </a></li>
        <li>Role: Software Engineer</li>
        <li>Duration: 19th June 2023 – Present</li>
      </ul>
      🌟 Previous Roles:
      <ul>
        <li>Company: <a href="https://materialplus.srijan.net/" className="link-design"  target="blank"> Srijan Technologies </a></li>
        <li>Role: Senior Drupal Developer</li>
        <li>Duration: 20th July 2021 – 16th June 2023</li>
      </ul>
      <ul>
        <li>Company: <a href="https://www.trigyn.com/" className="link-design" target="blank"> Trigyn Technologies </a></li>
        <li>Role: Software Engineer</li>
        <li>Duration: 14th Aug 2019 – 19th July 2021</li>
      </ul>

      🛠️ Key Skills:
      <ul>
        <li>Expertise in Drupal development, including custom module and theme creation.</li>
        <li>Strong understanding of HTML, CSS, and JavaScript.</li>
        <li>Experience with MySQL and other relational databases.</li>
        <li>Knowledge of version control systems like Git.</li>
        <li>Familiarity with Agile software development methodologies.</li>
      </ul>
    </div>
  ),
  'contact': (
    <div className="contact-reply">
      <h4>Reach out and let's connect!✨</h4>
      I'm just a message away and excited to chat!😊<br />
      Dive in below👇 for my social media links and contact. <br />
      <p className="contact-msg">📌: Kharghar, Sector - 12 Navi Mumbai, India 410210</p>
      <p className="contact-msg">📳: +91 9967177564 / +91 7021383572</p>
      <p className="contact-msg">📧: yewaleomkar@gmail.com</p>
      <br />
      <div class="social-menu">
        <ul>
          <li><a href="https://www.linkedin.com/in/omkar-yewale-77a88ba2/" target="blank"><FaLinkedin className="fab"/> </a></li>
          <li><a href="https://www/drupal.org/u/omkar_yewale" target="blank"><FaDrupal className="fab"/> </a></li>
          <li><a href="https://github.com/omkar-yewale" target="blank"><FaGithub className="fab"/> </a></li>
          <li><a href="https://www.instagram.com/omkar_yewale/" target="blank"><FaInstagram className="fab"/> </a></li>
          <li><a href="https://wa.link/y34hl5" target="blank"><FaWhatsapp className="fab"/> </a>
          </li>
        </ul>
      </div>
      <br />
      <span>Let's take the next step! Type "<i>download </i>" to receive my resume. </span>
    </div>
  ),
  'download': (
    <div className="cv-template">
      <img src="./images/cv-preview.jpg" className="resumeThumbnail"></img>
      <div className="download-cv">
      <FaRegFilePdf className="cv-icons cv-pdf"/> <p> OmkarYewale.pdf </p><a href="./files/OmkarYewaleDrupalDeveloper.pdf" download="OmkarYewaleDrupalDeveloper.pdf"><FaArrowCircleDown className="cv-icons cv-dn"/></a>
    </div>
    </div>
  ),
};


const handleListItemClick = (text) => {
  navigator.clipboard.writeText(text);
  alert(`Copied "${text}" to clipboard`);
};

export default responses;