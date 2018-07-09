import React from 'react';
import { Link, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Border from './Border'
import './Menu.css';
import TitleAlt from '../svg/title_white.svg';
/*
ReactDOM.findDOMNode("menuButton").addEventListener('click', function() {
  
  if (ReactDOM.findDOMNode("menuButton").classList.contains("saved")) {
    //button.classList.remove("saved");
    //animationToPage.beginElement();
    //buttonText.innerHTML = "Save";
  } else {
    //button.classList.add("saved");
    //animationToCheck.beginElement();
    //animationToGreen.beginElement();
    ReactDOM.findDOMNode("menuButton").innerHTML = "Saved!";
  }
  
}, false);*/

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        this.handleIconClick = this.handleIconClick.bind(this);
    }
    
    
    handleIconClick(){
        
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        if (this.state.isToggleOn){
        document.getElementById('animation-to-page-1').beginElement();
        document.getElementById('animation-to-page-2').beginElement();
        document.getElementById('animation-to-page-3').beginElement();
            document.getElementById('menuMask').style.width = "100%";
            document.getElementById('svg').style.fill='white';
        } else {
        document.getElementById('animation-to-button-1').beginElement();
        document.getElementById('animation-to-button-2').beginElement();
        document.getElementById('animation-to-button-3').beginElement();
            
            document.getElementById('menuMask').style.width = "0.01%";
            
            document.getElementById('svg').style.fill='deeppink';
        }
    }
    
    render(){
        return (
     <div>
        <Border/>
        <div className="menuContainer" align="right">
            
            <div className="menuMask" id="menuMask" align="left">
            <div className="menuContent">
                <div className="titleAlt">
                    <img src={TitleAlt} alt="TitleAlt" />
                </div>
                <div className="menuOptions">
                    <p className="menuOptionsItem">sample</p>
                    <p className="menuOptionsItem">sample</p>
                    <p className="menuOptionsItem">sample</p>
                    <p className="menuOptionsItem">search</p>
                </div>
            </div>
            </div>
        </div>
        <div className="menuButton">
            <svg  onClick={this.handleIconClick} id="svg" fill="deeppink" width="100" height="100">
                <polygon position="relative" width="100%" 
                    display="block"
                    height="100%" id="menu-button"
                    points="26,52 60,23 67,32 43,52">
                    
                    <animate fill="freeze" width="100%" height="100%" id="animation-to-page-1" begin="indefinite" attributeName="points" dur="150ms" to="62,52 38,32 45,23 79,52" />
                    <animate fill="freeze" id="animation-to-button-1" begin="indefinite" attributeName="points" dur="150ms" to="26,52 60,23 67,32 43,52" />
                    
                </polygon>      
                <polygon position="relative" width="100%" 
                    display="block"
                    height="100%" id="menu-button"
                    points="40,46 80,46 80,58 35,58">
                    
                    <animate fill="freeze" width="100%" height="100%" id="animation-to-page-2" begin="indefinite" attributeName="points" dur="150ms" to="65,46 25,46 25,58 70,58" />
                    <animate fill="freeze" id="animation-to-button-2" begin="indefinite" attributeName="points" dur="150ms" to="40,46 80,46 80,58 35,58" />
                </polygon>      
                <polygon position="relative" width="100%" 
                    display="block"
                    height="100%" id="menu-button"
                    points="26,52 60,81 67,72 43,52">
                    
                    <animate fill="freeze" width="100%" height="100%" id="animation-to-page-3" begin="indefinite" attributeName="points" dur="150ms" to="62,52 38,72 45,81 79,52" />
                    <animate fill="freeze" id="animation-to-button-3" begin="indefinite" attributeName="points" dur="150ms" to="26,52 60,81 67,72 43,52" />
                </polygon>    
                  
            </svg>
            
        </div>
                
  </div>   
        );
    }
}
export default Menu;