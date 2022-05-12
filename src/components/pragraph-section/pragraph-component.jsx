
import React, { Component ,createRef} from 'react'
import { Body, SmallBody, Title ,PragraphHolder,} from './pragraph-component.style'
import './pragraph-component.style.scss'
class Pragraph extends Component{
    constructor(props){
        super(props)
        this.state = {
            affterWidth:"5%",
            skewValue : null
        }
        this.onScrolling.bind(this)
        this.listOnScrolling.bind(this)
        this.list = createRef()
        
    }
    componentDidMount(){
        // //console.log(this.props.list);
        // if(this.props.title !== undefined){
        //     window.addEventListener("scroll",this.onScrolling)
        // }
        // if(this.props.list !== undefined){
        //     this.currentScrollValue = 0
        //     this.stopScroll = null
        //     window.addEventListener("scroll",this.listOnScrolling)
            
        // }
    }
    componentWillUnmount(){
        if(this.props.title !== undefined){
            window.removeEventListener("scroll",this.onScrolling)
        }
        if(this.props.title !== undefined){
            window.removeEventListener("scroll",this.listOnScrolling)
        }
    }
    onScrolling = ()=>{
        const responsive = setTimeout(()=>{
            if (window.pageYOffset >= this.props.pointer.current.offsetTop -this.props.pointer.current.offsetTop*this.props.focusOn){
                this.setState({
                    affterWidth:"20%"
                })
            }else{
                this.setState({
                    affterWidth:"5%"
                })
            }
        },500)
        return()=>{
            clearTimeout(responsive)
        }
    }
    listOnScrolling = ()=>{
        const timeOut = setTimeout(()=>{
            if(this.currentScrollValue < window.pageYOffset ){
                this.setState({skewValue:10})
            }else if (this.currentScrollValue > window.pageYOffset){
                this.setState({skewValue:-10})
            }
            
            this.currentScrollValue = window.pageYOffset
            this.list.current.addEventListener("transitionend",()=>{
                const stopScroll = setTimeout(()=>{
                    this.setState({skewValue:0})
                },100)
                return()=>{clearTimeout(stopScroll)}
                
            })
        },100)
        return()=>{clearTimeout(timeOut)}
        
    }
    render(){
        return(
            <PragraphHolder className='pargraph'>   
                {this.props.title&& 
                    <Title affterWidth ={this.state.affterWidth} titleColor = {this.props.titleColor} >
                        {this.props.title}
                    </Title>
                }
                {this.props.smallBody&&
                    <SmallBody smallBodyColor ={this.props.smallBodyColor} mobileFontSizeSB = {this.props.mobileFontSizeSB}>
                        {this.props.smallBody}
                    </SmallBody>
                }
                {this.props.body&&
                    <Body bodyColor ={this.props.bodyColor}>
                        {this.props.body}
                    </Body>
                }
                {this.props.list&&
                    <ul ref={this.list} style={{}} id = {this.props.id} >
                    { this.props.list.map(item=>(
                            <li key = {item.key}>
                                <h2>{item.title}</h2>
                                <div>
                                    <img src={item.img} alt="img" />
                                </div>
                            </li>
                        ))}
                    </ul>
                
                }
                {this.props.servces&&
                    <div className="service_container">
                    { 
                    this.props.servces.map(service=>(
                        <div key ={service.id} className="sevices">
                            <h4>{service.title}</h4>
                            {<ul className="sevice">
                                {service.items.map((item)=>(
                                    <li key = {item.id}>{item.name}</li>
                                ))}
                            </ul>}
                        </div>
                    ))
                    }
                    </div>
                }
                {this.props.partners&&
                    <div className="printer_container">
                        <ul className="logos">
                            {this.props.partners.map(partner => (
                                <li key={partner.id}>
                                    <img src={partner.logo} alt="logo" className="logos_item" />
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                }
                
            </PragraphHolder>
        )
        
    }
}
export default Pragraph