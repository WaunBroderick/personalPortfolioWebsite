import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';


import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import { Link } from 'gatsby-plugin-modal-routing'
import { StaticImage } from "gatsby-plugin-image"

// Style Imports
import Typewriter from 'typewriter-effect';
import { Button } from 'react-bootstrap';




// CSS styling
import "../assets/css/main.css"
import "../assets/css/color.css"
import "../assets/css/monochrome.css"

// JS Functions
//import "../assets/js/jquery-2.2.4.min.js"
//import "../assets/js/menu"
import * as menuJS from "../assets/js/menu.js"
//import MobileMenu from '../assets/js/mobile-menu'
import ProgressBar from 'react-animated-progress-bar';

// Projects Area
import ProjectCard from "../components/ProjectCard";
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import ReactModal from 'react-modal'



// Images
import profilePic from "../assets/img/profilePic.jpg"

import projectPic from "../assets/img/img_project_1.png"

ReactModal.setAppElement('#___gatsby')




export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  //Passing information to Project Modal
  const [isProjectTitle, setProjectTitle] = useState('')
  const [isProjectDescr, setProjectDescr] = useState('null')
  const [isProjectImg, setProjectImg] = useState('null')
  const [isProjectLink, setProjectLink] = useState('null')

  //Displaying selected projects
  const [projectTypeAll, setProjectTypeAll] = useState(true)
  const [projectTypeSoftware, setProjectTypeSoftware] = useState(false)
  const [projectTypeData, setProjectTypeData] = useState(false)
  const [projectTypePM, setProjectTypePM] = useState(false)

  function handleModalOpen ({projTitle, projDescr}) {
    setProjectTitle(projTitle)
    setProjectDescr(projDescr)
    setIsModalOpen(true)
  }

  function selectAllProjects() {
    setProjectTypeAll(true)
    setProjectTypeSoftware(true)
    setProjectTypeData(true)
    setProjectTypePM(true)
  }

  function selectSoftwareProjects() {
    setProjectTypeAll(false)
    setProjectTypeSoftware(true)
    setProjectTypeData(false)
    setProjectTypePM(false)
  }

  function selectDataProjects() {
    setProjectTypeAll(false)
    setProjectTypeSoftware(false)
    setProjectTypeData(true)
    setProjectTypePM(false)
  }

  function selectPMProjects() {
    setProjectTypeAll(false)
    setProjectTypeSoftware(false)
    setProjectTypeData(false)
    setProjectTypePM(true)
  }

  function handleModalClose() {
    //console.log('handleModalOpen: ', event);
    setIsModalOpen(false)
    console.log(isModalOpen)
  }

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '800px',
      alignItems: 'centre'
    },
  };


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

  
  </Helmet>

  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="menu__wrapper d-none d-lg-block col-md-12">
          <nav class="">
            <ul>
              <li><a href="#hello">Hello</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Whats Up?</a></li>
              <li><a href="#blog">blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div class="menu__wrapper col-md-12 d-lg-none">
          <button type="button" class="menu__mobile-button">
            <span><i class="fa fa-bars" aria-hidden="true"></i></span>
          </button>
        </div>
      </div>
    </div>
  </div>



  <div class="mobile-menu d-lg-none">
    <div class="container">
      <div class="mobile-menu__close">
        <span><i class="mdi mdi-close" aria-hidden="true"></i></span>
      </div>
      <nav class="mobile-menu__wrapper">
        <ul>
          <li><a href="#hello">Hello</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">testimonials</a></li>
          <li><a href="#blog">blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <header class="main-header">
    <div class="container">
      <div class="row personal-profile">
        <div class="col-md-4 personal-profile__avatar">
         <img src={profilePic} alt="avatar"/>
        </div>
        <div class="col-md-8">
        
        <p class="personal-profile__name">Waun Broderick_</p>
        <p class="personal-profile__work">Founder, Developer, Diver</p>
        <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Who:</dt>
              <dd>CTO{' & '}Cofounder</dd>
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
      <div style={{ display: 'inline-block' }}>

        <h2 id="hello_header" class="section__title">
          <div><Typewriter
            options={{
              strings: ['Hi', 'Hi'],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
          </div>
        </h2>
        </div>
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
    <h2 id="resume_header" class="section__title">
    <div><Typewriter
            options={{
              strings: ['Resume', 'Education', 'Experience', 'Skills'],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
          </div>
    </h2>
        
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
        
            <span class="progress-list__skill-value">
            
            </span>

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

<body>
  <section id="portfolio" class="container section">
    <div class="row">
      <div class="col-md-12">
        <h2 id="portfolio_header" class="section__title">
        <div><Typewriter
            options={{
              strings: ['My_Projects', 'Software_development', 'Product_Management', 'Data_Science'],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
          </div>
        </h2>
      </div>
    </div>
    <div class="row portfolio-menu">
      <div class="col-md-12">
        <nav>
          <ul>
            <li><a onClick={selectAllProjects} data-portfolio-target-tag="all">all</a></li>
            <li><a onClick={selectSoftwareProjects} data-portfolio-target-tag="software-development">Software Development</a></li>
            <li><a onClick={selectDataProjects} data-portfolio-target-tag="data-proj">Data Science Projects</a></li>
            <li><a onClick={selectPMProjects} data-portfolio-target-tag="product-managemtent">Product Management</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div id="portfolio">


          <ReactModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          contentLabel="Example Modal"
          style={modalStyle}
          >            
            <div style={{ alignContent: 'center', alignItems: 'center'}}>
                <button onClick={handleModalClose}>
                  X
                </button>
            <p class="portfolio-modal__title" style={{textAlign: 'center'}}>INPROD, The Intelligent Processor of Documents</p>


            <StaticImage src="../assets/img/img_project_1.png" alt=""/>


            <p style={{maxWidth: '700px', maxHeight: '50%'}}>
              {isProjectDescr}
            </p>
            <br/>
            <br/>
            <p  href={isProjectLink}>Project Repo</p>
            </div>

          </ReactModal>
        

        <div>
        { (projectTypeAll || projectTypeSoftware) ?  (

    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"INPROD", 
      projDescr:"For INPROD to truly be the flexible and robust tool that it sets out to be the first step can and must start with Optimization. By using OpenCV and a series of image processing libraires along with a multi-threaded queuing systems INPROD is able to find individual optimization parameters to helpensure the highest possible quality of data prior to its pipeline ingestion. Following thisthe text is operated on using a number of different text analysis methods depending on the need and variety of documents, everything from building complex models on samples or using RegEx to explore patterns within the document with a robust flexibility for how it does such."
      })}>
    <div>
    <ProjectCard 
    title={"INRPOD"}
    category={"software"}
    description={"INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy."}
    technologies={["Python", "NLTK", "Keras", "Tensorflow"]}
    image={"ABSOLUTE URL ADDRESS"}
    imageAlt={"image of sample project"}
    /></div>
    </Link>
        ) : ( <div></div>)}
        </div>


    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"Virutal Vow", 
      projDescr:"For INPROD to truly be the flexible and robust tool that it sets out to be the first step can and must start with Optimization. By using OpenCV and a series of image processing libraires along with a multi-threaded queuing systems INPROD is able to find individual optimization parameters to helpensure the highest possible quality of data prior to its pipeline ingestion. Following thisthe text is operated on using a number of different text analysis methods depending on the need and variety of documents, everything from building complex models on samples or using RegEx to explore patterns within the document with a robust flexibility for how it does such."
      })}>
    <ProjectCard 
    title={"Virtual Vow"}
    category={"software"}
    description={"INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy."}
    technologies={["Python", "NLTK", "Keras", "Tensorflow"]}
    image={"ABSOLUTE URL ADDRESS"}
    imageAlt={"image of sample project"}
    />
    </Link>


    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"PCS4Kids", 
      projDescr:"For INPROD to truly be the flexible and robust tool that it sets out to be the first step can and must start with Optimization. By using OpenCV and a series of image processing libraires along with a multi-threaded queuing systems INPROD is able to find individual optimization parameters to helpensure the highest possible quality of data prior to its pipeline ingestion. Following thisthe text is operated on using a number of different text analysis methods depending on the need and variety of documents, everything from building complex models on samples or using RegEx to explore patterns within the document with a robust flexibility for how it does such."
      })}>
    <ProjectCard 
    title={"PCS4Kids"}
    category={"software"}
    description={"INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy."}
    technologies={["Python", "NLTK", "Keras", "Tensorflow"]}
    image={"ABSOLUTE URL ADDRESS"}
    imageAlt={"image of sample project"}
    />
    </Link>


    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"Labnetic", 
      projDescr:"For INPROD to truly be the flexible and robust tool that it sets out to be the first step can and must start with Optimization. By using OpenCV and a series of image processing libraires along with a multi-threaded queuing systems INPROD is able to find individual optimization parameters to helpensure the highest possible quality of data prior to its pipeline ingestion. Following thisthe text is operated on using a number of different text analysis methods depending on the need and variety of documents, everything from building complex models on samples or using RegEx to explore patterns within the document with a robust flexibility for how it does such."
      })}>
    <ProjectCard 
    title={"Labnetic"}
    category={"software"}
    description={"INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy."}
    technologies={["Python", "NLTK", "Keras", "Tensorflow"]}
    image={"ABSOLUTE URL ADDRESS"}
    imageAlt={"image of sample project"}
    />
    </Link>



    </div>


<div class="modal fade portfolio-modal" id="portfolioModal_virtualvow" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        <div class="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
        <p class="portfolio-modal__title">Virtual Vow - The Intelligent Wedding Registry</p>
        <img class="portfolio-modal__img" src="assets/img/img_project_2_mono.png" alt="modal_img"/>
        <p class="portfolio-modal__description">
         soon....
        </p>
        </div>
      </div>
    </div>

    <div id="testimonials" class="section">
    <div class="background slider-carousel" >
      <div class="container">
        <div id="carouselTestimonials" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselTestimonials" data-slide-to="0" class="active"></li>
            <li data-target="#carouselTestimonials" data-slide-to="1"></li>
            <li data-target="#carouselTestimonials" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                  <p class="slider-carousel__title">How do you relax?</p>
                  <p class="slider-carousel_caption">2018 Book List</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

</div>


  </section>


  <script src="../assets/js/jquery-2.2.4.min.js"></script>
  <script src="../assets/js/popper.min.js"></script>
  <script src="../assets/js/bootstrap.min.js"></script>
  <script src="../assets/js/menu.js"></script>
  <script src={menuJS}></script>
  <script src="../assets/js/jquery.waypoints.js"></script>
  <script src="../assets/js/progress-list.js"></script>
  <script src="../assets/js/section.js"></script>
  <script src="../assets/js/portfolio-filter.js"></script>
  <script src="../assets/js/slider-carousel.js"></script>
  <script src="../assets/js/mobile-menu.js"></script>
  <script src="../assets/js/contacts.js"></script>
  <script src="../assets/js/mbclicker.min.js"></script>
  <script src="../assets/js/site-btn.js"></script>
  <script src="../assets/js/style-switcher.js"></script>
</body>

  </>) 
}
