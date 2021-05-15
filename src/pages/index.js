import React from "react"

import { Helmet } from "react-helmet"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


// CSS styling
import "../assets/css/main.css"
import "../assets/css/color.css"
import "../assets/css/monochrome.css"




export default function Home() {
  return (
    <>
  <Helmet>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>
  <title>Waun Broderick</title>
  <link rel="stylesheet" href="assets/css/monochrome.css"/>
  <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono|Inconsolata" rel="stylesheet"/>
  <link href="https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css" rel="stylesheet"/>
  <script src={withPrefix('./assets/js/jquery-2.2.4.min.js')} type="text/javascript" />
  </Helmet>

  <header class="main-header">
    <div class="container">
      <div class="row personal-profile">
        <div class="col-md-4 personal-profile__avatar">
          <img class="" src="../assets/img/profilePic.jpg" alt="avatar"/>
          <StaticImage src="../../static/img/profilePic.jpg" />
        </div>
        <div class="col-md-8">
        <p class="personal-profile__name">Waun Broderick_</p>
        <p class="personal-profile__work">Founder, Developer, Diver</p>
        <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Who:</dt>
              <dd>Passionate app Developer, Data story teller</dd>
              <dt>What:</dt>
              <dd>App development and data analysis</dd>
              <dt>Where:</dt>
              <dd>Toronto On, Canada</dd>
              <dt>Why:</dt>
              <dd>A love for creation, community, & new challenges</dd>
            </dl>
          </div>
          <p class="personal-profile__social">
            <a href="https://github.com/WaunBroderick" target="_blank"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/waunbroderick/" target="_blank"><i class="fa fa-linkedin-square"></i></a>
            <a href="https://www.facebook.com/waun.broderick" target="_blank"><i class="fa fa-facebook-square"></i></a>
            <a href="https://medium.com/@broderickwaun" target="_blank"><i class="fa fa-medium"></i></a>
            <a href="https://www.instagram.com/broderickwaun/" target="_blank"><i class="fa fa-instagram"></i></a>
          </p>
        </div>
      </div>
    </div>
  </header>

  <section id="hello" class="container section">
    <div class="row">
      <div class="col-md-10">
        <h2 id="hello_header" class="section__title">Hi_</h2>
        <p class="section__description">
          HSBc Computer Science graduate '18 <a href="https://www.trentu.ca/" target="_blank">@TrentU</a>, currently pursuing 
            opportunities and expertise in Full Stack Data Application Development at TD Bank Toronto.
            Former Canadian Armed Force Infantry soldier, who still believes in the importance of community and comradery as well as the endless capability of work ethic when paired 
          with passion.
          <br/>
          <br/>
          Outside of work you can find me practicing my passion for art <a href="https://academyofrealistart.com/" target="_blank">@ARA</a>, in the gym when I can't be on the hills snowboarding, hiking, or rockclimbing, or volunteering with a 
          series of organizations and groups in my community.
        </p>
        <a href="assets/resume/Resume_-_Waun_Broderick_optimize.pdf"><StaticImage src="img_btn_icon.png"/>Download CV</a>
      </div>
    </div>
  </section>

  <section id="resume" class="container section">
  <div class="row">
    <div class="col-md-10">
    <h2 id="resume_header" class="section__title">Resume_</h2>
        <p class="section__description">

        </p>
    </div>
  </div>
  <div class="row">
      <div class="col-md-8 section__resume resume-list">
        <h3 class="resume-list_title">education</h3>
        <div class="resume-list__block">
          <p class="resume-list__block-title">Trent University</p>
          <p class="resume-list__block-date">2013 - 2018</p>
          <p>
            H.BSc Computer Science
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">Free Code Camp</p>
          <p class="resume-list__block-date">2014 - 2018</p>
          <p>
            Full Stack Development Certification
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 section__resume resume-list">
        <h3 class="resume-list_title">employment</h3>
        <div class="resume-list__block">
          <p class="resume-list__block-title">TD Bank</p>
          <p class="resume-list__block-date">JUL 2018 - present</p>
          <p>
            Full Stack Developer
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">United Nations</p>
          <p class="resume-list__block-date">FEB 2017 - AUG 2017</p>
          <p>
            Front-End Developer
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">Trent University</p>
          <p class="resume-list__block-date">SEP 2016 - MAY 2018</p>
          <p>
            Academic Assistant
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">TD Technology</p>
          <p class="resume-list__block-date">MAY 2017 - AUG 2017</p>
          <p>
            Big Data Intern & Android Developer
          </p>
        </div>
        <div class="resume-list__block">
          <p class="resume-list__block-title">Canadian Armed Forces</p>
          <p class="resume-list__block-date">FEB 2011 - AUG 2017</p>
          <p>
            Infantry Corporal
          </p>
        </div>
      </div>
    </div>
    <div class="row section__resume progress-list js-progress-list">
      <div class="col-md-12">
        <h3 class="progress-list__title">general skills</h3>
      </div>
      <div class="col-md-5 mr-auto">
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">html5/CSS3</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" >
            </div>
          </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">JavaScript</span>
            <span class="progress-list__skill-value">70%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">Python</span>
            <span class="progress-list__skill-value">90%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">C#</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 mr-auto">
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">.Net</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">AWS</span>
            <span class="progress-list__skill-value">60%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">git</span>
            <span class="progress-list__skill-value">90%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">React & Redux</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section id="portfolio" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 id="portfolio_header" class="section__title">My projects_</h2>
      </div>
    </div>
    <div class="row portfolio-menu">
      <div class="col-md-12">
        <nav>
          <ul>
            <li><a href="" data-portfolio-target-tag="all">all</a></li>
            <li><a href="" data-portfolio-target-tag="app-dev">Application Development</a></li>
            <li><a href="" data-portfolio-target-tag="data-proj">Data Projects</a></li>
            <li><a href="" data-portfolio-target-tag="software">Software</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="portfolio-cards">
    <div class="row project-card" data-toggle="modal" data-target="#portfolioModal_inprod" data-portfolio-tag="software">
    <div class="col-md-6 col-lg-5 project-card__img">
      <img class="" src="assets/img/img_project_1_mono.png" alt="project-img"/>
    </div>
    <div class="col-md-6 col-lg-7 project-card__info">
    <h3 class="project-card__title">INPROD - Intelligent Processor of Documents  </h3>
    <p class="project-card__description">
    INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need
            to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch 
            ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy.            
    </p>
    <p class="project-card__stack">Used Technology:</p>
          <ul class="tags">
            <li>python</li>
            <li>OCR</li>
            <li>NLP</li>
            <li>numpy</li>
            <li>OpenCV</li>
            <li>NLTK</li>
          </ul>
          <a href="https://github.com/WaunBroderick/INPROD" target="_blank" class="project-card__link">Project Repo</a>
    </div>
    </div>
    </div>

    <div class="portfolio-cards">
    <div class="row project-card" data-toggle="modal" data-target="#portfolioModal_inprod" data-portfolio-tag="software">
    <div class="col-md-6 col-lg-5 project-card__img">
      <img class="" src="assets/img/img_project_1_mono.png" alt="project-img"/>
    </div>
    <div class="col-md-6 col-lg-7 project-card__info">
    <h3 class="project-card__title">INPROD - Intelligent Processor of Documents  </h3>
    <p class="project-card__description">
    INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need
            to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch 
            ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy.            
    </p>
    <p class="project-card__stack">Used Technology:</p>
          <ul class="tags">
            <li>python</li>
            <li>OCR</li>
            <li>NLP</li>
            <li>numpy</li>
            <li>OpenCV</li>
            <li>NLTK</li>
          </ul>
          <a href="https://github.com/WaunBroderick/INPROD" target="_blank" class="project-card__link">Project Repo</a>
    </div>
    </div>
    </div>


    <div class="portfolio-cards">
    <div class="row project-card" data-toggle="modal" data-target="#portfolioModal_inprod" data-portfolio-tag="software">
    <div class="col-md-6 col-lg-5 project-card__img">
      <img class="" src="assets/img/img_project_1_mono.png" alt="project-img"/>
    </div>
    <div class="col-md-6 col-lg-7 project-card__info">
    <h3 class="project-card__title">INPROD - Intelligent Processor of Documents  </h3>
    <p class="project-card__description">
    INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need
            to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch 
            ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy.            
    </p>
    <p class="project-card__stack">Used Technology:</p>
          <ul class="tags">
            <li>python</li>
            <li>OCR</li>
            <li>NLP</li>
            <li>numpy</li>
            <li>OpenCV</li>
            <li>NLTK</li>
          </ul>
          <a href="https://github.com/WaunBroderick/INPROD" target="_blank" class="project-card__link">Project Repo</a>
    </div>
    </div>
    </div>


    <div class="portfolio-cards">
    <div class="row project-card" data-toggle="modal" data-target="#portfolioModal_inprod" data-portfolio-tag="software">
    <div class="col-md-6 col-lg-5 project-card__img">
      <img class="" src="assets/img/img_project_1_mono.png" alt="project-img"/>
    </div>
    <div class="col-md-6 col-lg-7 project-card__info">
    <h3 class="project-card__title">INPROD - Intelligent Processor of Documents  </h3>
    <p class="project-card__description">
    INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need
            to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch 
            ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy.            
    </p>
    <p class="project-card__stack">Used Technology:</p>
          <ul class="tags">
            <li>python</li>
            <li>OCR</li>
            <li>NLP</li>
            <li>numpy</li>
            <li>OpenCV</li>
            <li>NLTK</li>
          </ul>
          <a href="https://github.com/WaunBroderick/INPROD" target="_blank" class="project-card__link">Project Repo</a>
    </div>
    </div>
    </div>


  </section>


  <div>Hello worlzd!</div>
  </>) 
}
