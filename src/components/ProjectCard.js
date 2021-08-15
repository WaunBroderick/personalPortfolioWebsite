import ReactDOM from "react-dom";

import React from 'react';

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"



//Project Images
import projectPic0 from "../assets/img/img_project_1.png"
import projectPic1 from "../assets/img/img_project_2.png"
import projectPic2 from "../assets/img/img_project_3.png"
import projectPic3 from "../assets/img/img_project_pcs4kids.png"

class ProjectCard extends React.Component {

    

    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            description: this.props.description,
            technologies: this.props.technologies,
            image: this.props.image,
            imageAlt: this.props.imageAlt
        };

        
    }

    render(){

    return(
        <div>
                <div class="portfolio-cards">
                    <div class="row project-card" data-toggle="modal" data-target="#portfolioModal_inprod" data-portfolio-tag={this.state.technologies}>
                        <div class="col-md-6 col-lg-5 project-card__img">
                            <StaticImage src={this.state.image} alt="" />
                            <StaticImage src="http://localhost:8000/static/35f3a28f95aa64b4933301cae51d78cf/55788/img_project_2.webp" alt="" />

                        </div>

                        <div class="col-md-6 col-lg-7 project-card__info">
                            <h3 class="project-card__title">{this.state.title}</h3>
                            <p class="project-card__description">
                                {this.state.description}
                            </p>
                            <p class="project-card__stack">Used Technology:</p>
                            <ul class="tags">
                            {this.state.technologies.map(tech=>(
                                <li>{tech}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    );
}
}

export default ProjectCard;