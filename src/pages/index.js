import React, { useState } from "react"
import ReactDOM from "react-dom";


import { Helmet } from "react-helmet"
import { Link } from 'gatsby-plugin-modal-routing'
import { StaticImage } from "gatsby-plugin-image"

// Style Imports
import Typewriter from 'typewriter-effect';
import { Scrollbar } from "react-scrollbars-custom";
import { Navbar } from 'react-bootstrap'

//Menu
import ScrollMenu from '../components/ScrollMenu'

//Timeline List
import TimelineList from '../components/TimelineList'

//Progressbars
import ProgressLine from "../components/Progressline";

//Scroll Render Functionality
import { Scroll, withScroll } from 'react-fns'
import handleViewport from 'react-in-viewport';



// CSS styling
import "../assets/css/main.css"
import "../assets/css/color.css"
import "../assets/css/monochrome.css"


// Projects Area
import ProjectCard from "../components/ProjectCard";
import ReactModal from 'react-modal'

//Downloads
import resumeDownload from '../assets/resume/Resume_-_Waun_Broderick_optimize.pdf'

// Images
import profilePic from "../assets/img/profilePic.jpg"

// Instagram Feed
import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'


ReactModal.setAppElement('#___gatsby')


export default function Home() {


  const ClientSideOnlyLazy = React.lazy(() => import("../components/Progressline"))
  const isSSR = typeof window === "undefined"

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  


  //Passing information to Project Modal
  const [isProjectTitle, setProjectTitle] = useState('')
  const [isProjectDescr, setProjectDescr] = useState('null')
  const [isProjectLink, setProjectLink] = useState('null')
  const [isProjectImage, setProjectImage ] = useState('null')

  //Displaying selected projects
  const [projectTypeAll, setProjectTypeAll] = useState(true)
  const [projectTypeSoftware, setProjectTypeSoftware] = useState(false)
  const [projectTypeData, setProjectTypeData] = useState(false)
  const [projectTypePM, setProjectTypePM] = useState(false)

  function handleModalOpen ({projTitle, projDescr, projLink, projImg}) {
    setProjectTitle(projTitle)
    setProjectDescr(projDescr)
    setProjectLink(projLink)
    setProjectImage(projImg)
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

  const [isShownJob1, setIsShownJob1] = useState(false);

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxHeight: '800px',
      alignItems: 'center',
      alignContent: 'center'
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.13.0/devicon.min.css"/>
  <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossOrigin="anonymous"
  />
  </Helmet>

  <ScrollMenu />
  
  

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
        <div class="personal-profile__contacts" >
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
            <a href="https://github.com/WaunBroderick" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/waunbroderick/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a>
            <a href="https://www.facebook.com/waun.broderick" target="_blank" rel="noreferrer"><i class="fa fa-facebook-square"></i></a>
            <a href="https://medium.com/@broderickwaun" target="_blank" rel="noreferrer"><i class="fa fa-medium"></i></a>
            <a href="https://www.instagram.com/broderickwaun/" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a>
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
            A passionate Full-Stack developer and Artificial Intelligence enthusiast, currently pursuing expertise in technology
            and product development as the CTO, and CoFounder of Gyroscopic Inc. 
            Currently serving Canadian Armed Force RCN Diver, who believes in the importance of community and comradery as well as the endless capability of work ethic when paired 
          with passion.
          <br/>
          <br/>
          Outside of work you can find me practicing my passion for art <a href="https://www.instagram.com/waun.ink/" target="_blank" rel="noreferrer">@Waun.Ink</a>, Diving with the Canadian Armed Forces: Royal Canadian Navy, in the gym when I can't be on the hills snowboarding, hiking, or rockclimbing, or volunteering with a 
          series of organizations and groups in my community.
        </p>
        <a href={resumeDownload} class="section_btn site-btn" target="_blank" rel="noreferrer"><StaticImage src="../assets/img/img_btn_icon.png"/><span style={{marginBottom: 5}}>Download CV</span></a>
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

<TimelineList 
title={"Education"}
listData = {[
  {jobName: "Trent University", jobDuration:"2013 - 2018", jobRole : "H.BSc Computer Science", visible: false, details: ["Co-Founder of Trent's Annual Hackathon", "President of the Computer Science Society", "ComSci Student Board Member", "College Orientation Week Leader"]},
  {jobName: "Free Code Camp", jobDuration:"2014 - 2018", jobRole : "Full Stack Development Certification", visible: false, details: []},
]}
/>

<TimelineList 
title={"Employment"}
listData = {[
  {jobName: "Gyroscopic Inc", jobDuration:"JUL 2019 - PRESENT", jobRole : "Co-Founder, CTO", visible: false, details: []},
  {jobName: "Canadian Armed Forces", jobDuration:"FEB 2011 - PRESENT", jobRole : "Infantry, RCN Diver", visible: false, details: ["Infantry Rifle/Machine Gun Training - BMQ/DP1/DP2A", "Winter Warefare Training", "Conflict Resolution Training", "Trained Sentinel Member - Mental healther supporter"]},
  {jobName: "Department of National Defence", jobDuration:"MAY 2019 - MAY 2020", jobRole : "Data Science/AI Team, Lead Solutions Developer", visible: false, details: ["CONFIDENTIAL"]},
  {jobName: "TD BANK HQ", jobDuration:"JUL 2018 - MAY 2019", jobRole : "H.BSc Computer Science", visible: false, details: ["Responsible for creating, implementing, educating, and selling AI/DS Solutions to several bank branches", "Product Mgr and Lead Developer on the INPROD AI Tool integration/creation", "Developer & Data Visualizer on The Customer Journey Dashboard"]},
  {jobName: "United Nations", jobDuration:"FEB 2017 - AUG 2017", jobRole : "Front-End Developer", visible: false, details: []},
  {jobName: "Trent University", jobDuration:"SEP 2016 - MAY 2018", jobRole : "Academic Assistant", visible: false, details: []},
  {jobName: "TD Technology Waterloo", jobDuration:"MAY 2017 - AUG 2017", jobRole : "Big Data Intern & Android Developer", visible: false, details: []},
]}
/>


    
    <div class="row section__resume progress-list js-progress-list">
      <div class="col-md-12">
        <h3 class="progress-list__title">general skills</h3>
      </div>
      <div class="col-md-5 mr-auto">
        <div class="progress-list__skill">


          <p>
            <span class="progress-list__skill-title">Javacript (ES6+)</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "80%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
            
              </div>

        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">ReactJS</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "80%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
              <div>

        

              </div>
    


            
              </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">Python</span>
            <span class="progress-list__skill-value">70%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "70%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
           
              </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">AWS Infrastructure</span>
            <span class="progress-list__skill-value">60%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "60%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
            
              </div>
        </div>
      </div>
      <div class="col-md-5 mr-auto">
      <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">Product Management</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "80%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
            
              </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">Stakeholder Management</span>
            <span class="progress-list__skill-value">90%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "90%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
            
              </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">Data Science & AI Pipelines</span>
            <span class="progress-list__skill-value">70%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "70%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
            
              </div>
        </div>
        <div class="progress-list__skill">
          <p>
            <span class="progress-list__skill-title">Leadership & People Managament</span>
            <span class="progress-list__skill-value">80%</span>
          </p>
          {!isSSR &&(
          <React.Suspense fallback={<div />}>
            <ClientSideOnlyLazy 
            label="One visual percentage - changed background"
            visualParts={[
              {
                percentage: "80%",
                color: "#C0B283"
              }
            ]}
            />
          </React.Suspense>
        )}
          <div style={{paddingBottom: '20px'}}>
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

            <div style={{ alignContent: 'center', alignItems: 'center', maxWidth: '700px'}}>
             
                  <button style={{color:"grey", backgroundColor: 'white', border: '0px'}} onClick={handleModalClose}>
                    X
                  </button>
                <p class="portfolio-modal__title" style={{textAlign: 'center'}}>{isProjectTitle}</p>
                

                <p style={{ maxHeight: '50%', alignContent: 'center',textAlign: 'center' ,padding: 50}}>
                  {isProjectDescr}
                </p>

                <a style={{ marginTop: '50px'}} href={isProjectLink} target="_blank" rel="noreferrer">Project Repo</a>
            </div>

          </ReactModal>
        
          <Scrollbar style={{ height:"600px"}}>    
         

        <div>
        { (projectTypeAll || projectTypeSoftware) ?  (

    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"INPROD - Intelligent Processor of Documents", 
      projDescr:"For INPROD to truly be the flexible and robust tool that it sets out to be the first step can and must start with Optimization. By using OpenCV and a series of image processing libraires along with a multi-threaded queuing systems INPROD is able to find individual optimization parameters to helpensure the highest possible quality of data prior to its pipeline ingestion. Following thisthe text is operated on using a number of different text analysis methods depending on the need and variety of documents, everything from building complex models on samples or using RegEx to explore patterns within the document with a robust flexibility for how it does such.",
      projLink:"https://github.com/WaunBroderick/Batch-OCR-Engine",
      projImg:"INPROD"
      })}>
    <div>
    <ProjectCard 
    title={"INRPOD"}
    category={"software"}
    description={"INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy."}
    technologies={["Python", "NLTK", "Keras", "Tensorflow"]}
    image={"INPROD"}
    imageAlt={"image of sample project"}
    /></div>
    </Link>
        ) : ( <div></div>)}
        </div>


        <div>
        { (projectTypeAll || projectTypeSoftware) ?  (

    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"Virtual Vow", 
      projDescr:"Virtual Vow begins with creating a user account that links up with your corresponding bank data. Using your bank data Virtual Vow is able to auto generate reccomendations for gift suggestions that you are interested in, and are within your price range. These recomendations are paired with several APIs to gather data for accurate pricing and understanding of these reccomendations so there is no further need to seek information to create these gift categories.You can then easily select the reccomendations that you like and have them linked with your account and now visible on your wedding registry dashboard. These gifts can then be accessed by other people you invite so they make make their own contributions, and you can track progress and know who to thank for what! Along with this the Bank is able to offer personalized deals and partnerships with companies to ensure that you get the very best rates, coverage, and rewards out of the gifts that you are collecting.Aside from all this Virtual vow also allows you to customize several outward faces pages with details about your wedding quickly and easily; RSVP status, wedding stories, venue addresses, photo albums, etc.",
      projLink:"https://github.com/WaunBroderick/TheVirtualVow",
      projImg:"VIRTUAL VOW"
      })}>
    <div>
    <ProjectCard 
    title={"Virtual Vow"}
    category={"software"}
    description={"Virtual Vow is a fully integrated wedding registry app that consolidates your guest outreach and confirmation, front facing information, alerts and updates, and most of all intelligent gift recommendations and tracking. Utilizing customer transaction data providing accurate suggestions, prices, and details as well as tracking contributions & money transfer."}
    technologies={["Javascript", "Python", "Apache", "MySQL", "HTML/CSS"]}
    image={"TD VOW"}
    imageAlt={"image of sample project"}
    /></div>
    </Link>
        ) : ( <div></div>)}
        </div>


        <div>
        { (projectTypeAll || projectTypeData) ?  (

    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"Historica Canada", 
      projDescr:"Worked closely with Historica Canada alongside a team of analysts,developers, and data scientists to help Historica Canada take their next leap of technological innovation and ensure that they are constantly able to use the tools and systems around them to interpret the stimulus of their campaigns and better mobilize their educational Canadian Content.This included data cleaning, data analysis, data visualization, business insights, project management, tool set-up, tool integration, and teaching.",
      projLink:"https://www.historicacanada.ca/",
      projImg:"HISTORICA CANADA"
      })}>
    <div>
    <ProjectCard 
    title={"Historica Canada"}
    category={"data"}
    description={"istorica Canada is Canada's largest organization dedicated to enhancing awareness of Canadian history and citizenship. All of its programs are offered bilingually and reach more than eight million Canadians annually."}
    technologies={["Python", "Data Anlysis", "Business Insights", "Marketing Analysis", "Financial Analysis"]}
    image={"HISTORICA CANADA"}
    imageAlt={`../assets/img/img_project_2.png`}
    /></div>
    </Link>
        ) : ( <div></div>)}
        </div>

        <div>
        { (projectTypeAll || projectTypeSoftware) ?  (

    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"United Nations - PCS4Kids", 
      projDescr:"PCS4Kids is a large initiative backed by the United Nations, residing under their Quality Education goals. PCS4Kids is a non-profit organization offering a unique mix of free educational software content through a children-friendly software interface developed by the PCS4Kids volunteers. This software container is then deployed on computers that are recycled from business terminals that are no longer needed, and shipped to community centres around the world where their presence could be a great benefit.",
      projLink:"https://github.com/WaunBroderick/Batch-OCR-Engine",
      projImg:"PCS4KIDS"
      })}>
    <div>
    <ProjectCard 
    title={"United Nations - PCS4Kids"}
    category={"software"}
    description={"PCS4Kids is a large initiative backed by the United Nations, residing under their Quality Education goals. PCS4Kids is a non-profit organization offering a unique mix of free educational software content through a children-friendly software interface developed by the PCS4Kids volunteers. This software container is then deployed on computers that are recycled from business terminals that are no longer needed, and shipped to community centres around the world where their presence could be a great benefit."}
    technologies={["Javascript", "PHP", "AdobePhotoshop", "HTML/CSS"]}
    image={"PCS4KIDS"}
    imageAlt={"image of sample project"}
    /></div>
    </Link>
        ) : ( <div></div>)}
        </div>


        <div>
        { (projectTypeAll || projectTypePM) ?  (

    <Link to="#projects" onClick={()=> handleModalOpen( {
      projTitle:"Labnetik", 
      projDescr:"",
      projLink:"https://labnetik.ca",
      projImg:"INPROD"
      })}>
    <div>
    <ProjectCard 
    title={"Labnetik"}
    category={"software"}
    description={"INPROD is a flexible, extensible and intelligent tool that can and is used in various fields where there is a need to manually ingest large amounts of physical documents, and give data structure to be better digested. It can batch ingest, optimize, analyze, and extract large amounts of differing information to A great accuracy."}
    technologies={["Javascript", "NLTK", "Keras", "Tensorflow"]}
    image={"INPROD"}
    imageAlt={"image of sample project"}
    /></div>
    </Link>
        ) : ( <div></div>)}
        </div>

</Scrollbar>
</div>

<div id="testimonials" class="section">
    <div class="background slider-carousel" >
      <div class="container">
        <div id="carouselTestimonials" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
          <li data-target="#carouselTestimonials" data-slide-to="0" class="active"></li>
            <li data-target="#carouselTestimonials" data-slide-to="1" class=""></li>
            <li data-target="#carouselTestimonials" data-slide-to="2" class=""></li>
          </ol>
          </div>
        </div>
      </div>
      </div>
      




       <section id="blog" class="container section">
    <div class="row">
      <div class="col-md-12">
      <h2 id="resume_header" class="section__title">
    <div><Typewriter
            options={{
              strings: ['Blog_Posts', 'Panels', 'Open_Discussions'],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
          </div>
    </h2>
      </div>
    </div>

    <div class="row post-cards">
      <div class="col-md-4">
        <a href="https://medium.com/@broderickwaun/create-your-own-computer-vision-sandbox-b7c6b8662151" target="_blank" rel="noreferrer">
          <div class="post-cards__card">
            <div >
            <StaticImage src="../assets/img/mediumArticle1.jpg" alt="" />
            </div>
            <div class="post-cards__info">
              <p class="post-cards__date">FEB 2019</p>
              <h3 class="post-cards_title">Create Your Own Computer Vision Sandbox</h3>
              <p class="post-cards_description">From automated data collection to CNN model building, a beginner friendly CV skeleton guide.</p>
            </div>
          </div>
        </a>
      </div>

      <div class="col-md-4">
        <a href="https://blog.usejournal.com/three-things-ive-learned-in-the-military-that-improve-my-startup-8a21f95139d0" target="_blank" rel="noreferrer">
          <div class="post-cards__card">
            <div >
            <StaticImage src="../assets/img/mediumArticle2.jpeg" alt="" />
            </div>
            <div class="post-cards__info">
              <p class="post-cards__date">MAY 2020</p>
              <h3 class="post-cards_title">Three Things I've Learned in the military that improve my startup</h3>
              <p class="post-cards_description">building cohesion, belonging, and purpose for every employee in my startup. My experience in the CAF.</p>
            </div>
          </div>
        </a>
      </div>
    </div>

      </section>

      <section id="instagram" class="container section">
    <div class="row">
      <div class="col-md-12">
      <h2 id="resume_header" class="section__title">
    <div><Typewriter
            options={{
              strings: ['Instagram', 'Pictures'],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
          </div>
    </h2>
      </div>
  
    </div>

      </section>



  </section>

  <div class="background" style={{backgroundImage: "../assets/img/img_bg_main.jpg"}}>
    <div id="contact" class="container section">
      <div class="row">
        <div class="col-md-12">
        <h2 id="hello_header" class="section__title">
          <div><Typewriter
            options={{
              strings: ['Built_With', 'Tech_Used'],
              autoStart: true,
              loop: true,
              cursor: '_',
            }}
          />
          </div>
        </h2>
        </div>
      </div>
      <div class="row" style={{alignItems: "center", alignSelf: 'center', textAlign: "center", alignContent: "center", display: "inline-block"}}>
      <div class="row" style={{alignItems: "center", alignSelf: 'center', textAlign: "center", alignContent: "center"}}>
        <div  title="Gatsby.JS" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-gatsby-plain colored"></div>
        <div  title="Ract.JS" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-react-original colored"></div>
        <div  title="Graphql" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-graphql-plain colored"></div>
        <div  title="VSCode" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-vscode-plain colored"></div>
        <div  title="GitHub" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-github-original colored"></div>
        <div  title="Amazon Web Services" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-amazonwebservices-original colored"></div>
        <div  title="Docker" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-docker-plain colored"></div>
        <div  title="Git" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-git-plain colored"></div>
        <div  title="npm" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-npm-original-wordmark colored"></div>
        <div  title="Sass" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-sass-original colored"></div>
        <div  title="Ubuntu" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-ubuntu-plain colored"></div>
        <div  title="Figma" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-figma-plain colored"></div>
        <div  title="Codepen" style={{fontSize: "5rem", fontColor: '#fffff', opacity: "0.7", margin: "5px"}} class="devicon-codepen-plain"></div>
      </div>


        </div>
    </div>

    </div>




</body>

  </>) 
}
