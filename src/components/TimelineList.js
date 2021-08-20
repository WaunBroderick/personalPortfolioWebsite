import React, { useState } from 'react';



class TimelineList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title: this.props.title,
            jobs: this.props.jobs

        };
    };


    render(){
        const data = [{"jobName": "JobTitle1", "jobDuration":"Date 1 - Date 2", "jobRole" : "Role1", "visible":"false"}, {"jobName": "jobTitl2", "jobDuration":"Date 1 - Date 2" , "jobRole" : "Role1", "visible": "true"}];
        return(
            <div>
                 <div class="row">
                    <div class="col-md-8 section__resume resume-list">
                        <h3 class="resume-list_title">{this.state.title}</h3>
                           {
                               data.map(function(i, itm){
                                   return (
                                           <div key={itm} class="resume-list__block"
                                                    id="mouseOverArea" 
                                                    onMouseEnter={()=> (console.log("hello"))}
                                                    onMouseLeave={()=> (console.log("hello"))}>
                                                <p class="resume-list__block-title">{i.jobName}</p>
                                                <p class="resume-list__block-date">{i.jobDuration}</p>
                                                <p>
                                                    {i.jobRole}
                                                </p>
                                                {i.visible && (
                                                        <div>
                                                        <p>
                                                            -TBD
                                                        </p>
                                                        </div>
                                                    )}
                                            </div>
                                   )
                               })
                           }
                    </div>
                </div>
            </div>
        )
    }
}

export default TimelineList;