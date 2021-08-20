import React, { useState } from 'react';
import ReactDOM from "react-dom"

//Critical Functionality
import update from 'immutability-helper';
import { UPDATE_OPERATORS } from '@babel/types';




class TimelineList extends React.Component {
    constructor(props){
        super(props);
        this.openDescription = this.openDescription.bind(this)
        this.closeDescription = this.closeDescription.bind(this)


        this.state={
            title: this.props.title,
            jobs: this.props.jobs,
            listData: this.props.listData,
        }
        
    };


    openDescription(val) {
        let index = val
        this.setState({
            listData: update(this.state.listData,
                {
                    [index] : {
                        visible: {$set: true}
                            }
                        }
                )
        })
    };

    closeDescription(val) {
        let index = val
        this.setState({
            listData: update(this.state.listData,
                {
                    [index] : {
                        visible: {$set: false}
                            }
                        }
                )
        })
    };


    renderTimelineList() {
        var elements = this.state.listData.map((i, itm) =>{
            return (
                <div>
                    <div key={itm} class="resume-list__block"
                             
                             onMouseOver={e => this.openDescription(itm)}
                             onMouseOut={e => this.closeDescription(itm)}>
                         <p class="resume-list__block-title">{i.jobName}</p>
                         <p class="resume-list__block-date">{i.jobDuration}</p>
                         <p>
                             {i.jobRole}
                             <br/>
                             <br/>
                         </p>
                         {i.visible ? (
                                 <div>
                                 {
                                 i.details.map((sub, subindex) => {
                                     return(
                                        <li>{subindex}</li>
                                     );
                                 })
                                 }
                                 </div>
                             ): (<div></div>)}
                     </div>
                     </div>
            )
        });
        return elements;

    }


    render(){
        return(
            <div>
                 <div class="row">
                    <div class="col-md-8 section__resume resume-list">
                        <h3 class="resume-list_title">{this.state.title}</h3>
                           {
                              this.renderTimelineList()
                           }
                    </div>
                </div>
            </div>
        )
    }
}

export default TimelineList;