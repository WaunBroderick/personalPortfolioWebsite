'use strict';
import $ from 'jquery'
import React from 'react';

export default class MobileMenu extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            toggled: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleClass(){
        let isToggled = this.state.toggled;
        this.setState({ toggled: !isToggled });
    }

    render() {
        let buttonClass = (this.state.toggled) ? 'toggled' : '';
        return(
        <div className={buttonClass} class="menu__wrapper col-md-12 d-lg-none">
        <button id="menu-toggle" onClick={this.toggleMenu} type="button" class="menu__mobile-button">
          <span><i class="fa fa-bars" aria-hidden="true"></i></span>
        </button>
      </div>
        );
    }
};

//Open mobile menu
$('.menu__mobile-button, .mobile-menu__close').on('click', function () {
    $('.mobile-menu').toggleClass('active');
});

//Close mobile menu after click
$('.mobile-menu__wrapper ul li a').on('click', function () {
    $('.mobile-menu').removeClass('active');
});