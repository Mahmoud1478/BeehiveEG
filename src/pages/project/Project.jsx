import React,{useEffect,useState} from "react";
import './style.scss'
import { Container,Raw , Column ,Image } from "react-bootstrap";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axios } from "../../axios";


export const Project = () => {
    const {id} = useParams()
    const [project,setProject] = useState({})
    const getProject = async ()=>{
        const response = await axios(`/portfolio/${id}`).catch((err)=> console.log(err))
        if(response && response.data) setProject(response.data.data) ; 
    }
    const categories = (categories) =>{
        // if (categories.includes(',')){
        //     return(
        //         categories.map((categry , index) => (
        //                 <li key={index}> {categry}</li>
        //         ))
        //     )
        // }
        // return (<li> {categories}</li>)
        console.log(categories);
    }
    useEffect(() => {
        getProject()
    },[])
    return (
        <section className="project-details-page">
            <div className="detales">
                <Container>
                    <div className="project_meta">
                    <h1>{project.title}</h1>
                    <ul className="meta">
                        <li>
                            <ul className="categories">
                                {project.categories?.split(',').map(( word,inx) =>( <li key={inx}> {word}</li>))}
                            </ul>
                        </li>
                        <li>
                            {new Date(project.created_at).toDateString()}
                        </li>
                    </ul>
                    </div>
                    <div className="image-holder">
                    <Image fluid src={project.photo} />
                    </div>
                    
                    <div className="description">
                        <p>
                            {project.description}
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    );
};
