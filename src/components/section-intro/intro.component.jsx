import React, { Component } from 'react'
import {Title,ScrollBtn, Hero, HeroContent, Image} from './intro-component.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import "./../css/animations.css"

class Introduction extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgX:null,
            imgY:null,
        }
        this.scrollDown.bind(this)
    }
    componentDidMount(){
    }
    
    scrollDown = ()=>{
        if (this.props.scrollTo!==null) {
            window.scrollTo({
                top:this.props.scrollTo.current.offsetTop-105,
                behavior:"smooth"
            })
        }
    }
    moveImg = (e)=>{
        this.setState({
            imgX:e.clientX  * .02,
            imgY:e.clientY * .02,
        })
    }   
    render(){
        return(
            <Hero  onMouseMove={this.moveImg} >
                <div className="container">
                    <HeroContent>
                        <Title 
                            headingColor={this.props.headingColor}
                        >
                            {this.props.heading}
                        </Title>
                        <Image
                            src={this.props.imgUrl} 
                            alt={this.props.alt} 
                            style={{ 
                                transform:`translate(-${this.state.imgX}px,-${this.state.imgY}px)`
                            }}
                        />
                    </HeroContent>
                    <ScrollBtn 
                        onClick={this.scrollDown} 
                        btnColor={this.props.btnColor}
                    >
                        <FontAwesomeIcon icon = {faAngleDoubleDown} size = "1x" className="up-down"/>
                    </ScrollBtn>
                </div>
            </Hero>
        )
    }
}
export default Introduction