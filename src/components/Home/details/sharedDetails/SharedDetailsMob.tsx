import { useEffect, useState } from "react"
import Slider from "../Slider"
import phone from '../../../../assets/showroom/phone.png';
import mail from '../../../../assets/showroom/email.png';
import linkedin from '../../../../assets/showroom/linkedin.png';
import instagram from '../../../../assets/showroom/instagram.png';

export default function SharedDetailMob(props: any){
    var [loading, setLoading] = useState(Boolean) 
    const [cluster, setCluster] = useState(String)
    const [clusterClass, setClusterClass] = useState(String)

    useEffect(() => {
        setLoading(false)
        if(props.data !== undefined){
            setLoading(true)
          
        if(props.data.cluster === "web" || props.data.cluster === "webApp"){
            setCluster("Web en App")
            setClusterClass("clusterNameMob Web")
        } else if (props.data.cluster === "interactiveMotion" || props.data.cluster === "motion") {
            setCluster("Motion")
            setClusterClass("clusterNameMob Motion")
        } else if (props.data.cluster === "digitalMaking" || props.data.cluster === "smartTechnologies") {
            setCluster("Smart Technologies")
            setClusterClass("clusterNameMob Smart")
        }  else if (props.data.cluster === "alternativeReality" || props.data.cluster === "extendedReality") {
            setCluster("Extended Reality")
            setClusterClass("clusterNameMob Reality")
        }
        }
    }, [loading, props.data])

    return (
        <div className='detailPageContainer'>
            {loading? 
            <div>               
               <div id="stripeClusterMob">
                   <h3 className={clusterClass}>{cluster}</h3> 
              </div>
                   <h1 id="projectArtistMob">{props.data.user.map((users:any) =>{
                          return users.name
                  })}</h1>  
                  <div id="projectNameMob">
                      <h5 className='projectPlaceHolderMob'>PROJECT:</h5>
                      <p className='nameProjectMob'>{props.data.title}</p> 
                  </div>
                  
                   <Slider data={props.data}/>  
  
                  <h3 className='beschrijvingPlaceholderMob'>PROJECTBESCHRIJVING</h3>
                   <p className='beschrijvingMob'>{props.data.description}</p> 
  
                  <div id="personalInfoMob">
                  <div id="contactInfoContainerMob">
                  <div id="maiMobl" className='infoFlexMob'>
                                      <img src={mail} alt="mail icon" className='socialIcon'/>
                                          <p className='mailAdresMob invulTextMob'>{props.data.user.map((users:any) =>{
                                              return users.email
                                          })}</p>
                                      </div>
                           {props.data.socials.map((social:any) => {
                              return(
                                  <div>
                                      <div className='infoFlexMob'>
                                          <img src={phone} alt="phone icon" className='socialIcon'/>
                                          <p className='invulTextMob'>+32 {social.tel}</p>
                                      </div>
                                      <div id="linkedInMob" className='infoFlexMob'>
                                      <img src={linkedin} alt="linkedin icon" className='socialIcon'/>
                                          <p className='invulTextMob'>{social.linkedin}</p>
                                      </div>
                                      <div id="InstagramMob" className='infoFlexMob'>
                                      <img src={instagram} alt="instagram icon" className='socialIcon'/>
                                          <p className='invulTextMob'>{social.instagram}</p>
                                      </div>
                                  </div>
                              )
                          })} 
                      </div> 
                  </div>   
              </div>
           
             
            :
      
            <p>Loading...</p>
        }
         

    </div>
    )
}