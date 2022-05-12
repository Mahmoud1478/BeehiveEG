import React from 'react'


const services = ({services}) =>{

    return (
        <>
        <div className="service_container">
        { 
            services.map(service=>(
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
        </>
    )
}
export default services
