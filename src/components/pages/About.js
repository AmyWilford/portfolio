import React from "react";
import profilePicture from "../../assets/profile-pic.png";
// import "../styles/About.css";
import CV from "../../assets/AmyWilford-FullStackDeveloper-CV.pdf";

export default function Home() {
  return (
    <div>
      <div className="container custom-container mt-5 custom-margin">
        <div className="row h-100 align-items-center custom-alignment justify-content-between">
          <div className="col-md-8">
            <h4 className="mb-4">about amy:</h4>
            <p>
              Full Stack Developer with professional experience in corporate,
              creative, and non-profit spaces which have fostered a uniquely
              creative mindset, an open approach to collaboration, and refined
              communication skills. Holds a proven track record of successful
              project management, team leadership, and effective relationship
              building. Known as an imaginative problem solver with a keen
              attention to detail, and a passion for the intersection of design
              and function, and can quickly learn new languages, and effectively
              apply and communicate core concepts.
            </p>
            <p>
              Ready to leverage a strong professional foundation, and a deep
              commitment to continued learning. Looking to joining a team
              committed to thinking outside the box, delivering applications
              that are equal parts client-minded and industry-innovative.
            </p>
            <a href={CV} className="btn custom-btn my-3" download>
              <i className="fa fa-download download-icon"></i> Download Resume
            </a>
          </div>
          <div className="col-md-4 text-center profile">
            <img
              className="img-fluid profile-img"
              src={profilePicture}
              alt="profile"
            />
          </div>
        </div>
        <hr></hr>
        <div className="container custom-container">
          <div className="row">
            <h4 className="mb-4">technical skills:</h4>
            <div className="font-weight-bold">Languages & Frameworks: </div>
            <p>
              JavaScriptES6+ | MySQL | MongoDB | REST | Express | React | Node |
              TDD | JQuery | Handlebars | HTML | CSS3 | Bootstrap | Bulma
            </p>
            <div className="font-weight-bold">
              Applications & Industry Processess:
            </div>
            <p>
              Agile | Github | Heroku | MongoDB Atlas | Wordpress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
