
import React, { Component ,createRef} from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { Body, SmallBody ,PragraphHolder,} from './pragraph-component.style'
import './pragraph-component.style.scss'
class Pragraph extends Component{
    constructor(props){
        super(props)
        this.list = createRef()
        
    }
    componentDidMount(){

    }
    componentWillUnmount(){
        
    }
    render(){
        return(
            <PragraphHolder className='pargraph' id={this.props.ID }>   
                {this.props.title&& 
                    <SectionTitle hoverWidth='8' titleColor = {this.props.titleColor} >
                        {this.props.title}
                    </SectionTitle>
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