import React,{useEffect , useState } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import { UnorderedList } from '../stylesJs/globales.styles'
import WorkItem from './workitem/workItem'




export const WorkList = ({workList}) => {
    
    const [animation,setAnimation]  =  useState({
        rotate:0,
        skew:0 ,
    })
    useEffect(() => {
        let animationID = null
        const scrollConfig = {
            current: 0,
            difference: 0,
            prev: 0,
            rounded: 0 ,
            ease: .1,
            maxSkew :3 ,
            minSkew :-3 ,
            maxRotate :45 ,
            minRotate :-45 ,
        }
        
        function skewOnScroll() {
            scrollConfig.current = window.scrollY;
            scrollConfig.prev += (scrollConfig.current - scrollConfig.prev) * scrollConfig.ease;
            scrollConfig.rounded = Math.round(scrollConfig.prev * 100) /100
            scrollConfig.difference = scrollConfig.current - scrollConfig.rounded;
            const acceleration = scrollConfig.difference / window.innerWidth ;
            const velocity  =  +acceleration ;
            setAnimation({
                rotate :velocity*100,
                skew :velocity *50,
    })
            //console.log(velocity *  7.5);
            animationID = requestAnimationFrame(skewOnScroll)
        }    
        animationID =  requestAnimationFrame(skewOnScroll)
        return () => {
            cancelAnimationFrame(animationID)
            setAnimation(null)
        }
    },[])
    return (
        <>
            <SectionTitle hoverWidth ="30"> Select Projects </SectionTitle>
            <UnorderedList style={{ transform: `skewY(${animation.skew}deg) rotateX(${animation.rotate}deg) `}} >
            { workList.map(item=>(
                    <WorkItem  key={item.key}  title = {item.title} img = {item.img} link = {item.link} />
                ))}
            </UnorderedList>
        </>
    )
}
//rotate(${animation.rotate}deg)
export default WorkList




/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  scrollConfig.current = window.scrollY;
            scrollConfig.prev += (scrollConfig.current - scrollConfig.prev) * scrollConfig.ease;
            scrollConfig.rounded = Math.round(scrollConfig.prev * 100) /100
            scrollConfig.difference = scrollConfig.current - scrollConfig.rounded;
            const acceleration = scrollConfig.difference / window.innerWidth ;
            const velocity  =  +acceleration ;
            const skew = velocity * 10
            const rotate = velocity * 900 
            setAnimation({
                rotate :velocity*10,
                skew :velocity *10,
    })
 */