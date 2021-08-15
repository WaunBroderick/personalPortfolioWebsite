import ReactDOM from "react-dom";

import React from 'react';

import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"


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

    };

    render(){

    return(
        <div>
                <div class="portfolio-cards">
                    <div class="row project-card" data-toggle="modal" data-target="#portfolioModal_inprod" data-portfolio-tag={this.state.technologies}>
                        <div class="col-md-6 col-lg-5 project-card__img">
                            
                        { (this.state.image == "INPROD") ?  (
                            <div>
                                <StaticImage src="../assets/img/IMPROD_PROJ.png"/>
                            </div>
                        ):( 
                            <div>     
                            </div>
                        )
                        }

                        { (this.state.image == "TD VOW") ?  (
                            <div>
                                <StaticImage src="../assets/img/TDVOW_PROJ.png"/>
                            </div>
                        ):( 
                            <div>     
                            </div>
                        )
                        }

                        { (this.state.image == "HISTORICA CANADA") ?  (
                            <div>
                                <StaticImage src="../assets/img/HISTORICACANADA_PROJ.png"/>
                            </div>
                        ):( 
                            <div>     
                            </div>
                        )
                        }

                        { (this.state.image == "PCS4KIDS") ?  (
                            <div>
                                <StaticImage src="../assets/img/PCS4KIDS_PROJ.png"/>
                            </div>
                        ):( 
                            <div>     
                            </div>
                        )
                        }

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