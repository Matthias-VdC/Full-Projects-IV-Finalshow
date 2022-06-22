import '../../../styles/showroom/_sharedDetail.scss'
import cross from '../../../assets/showroom/cross_logo.png'
import finalLogo from '../../../assets/showroom/Final-Show-Logo.svg'
import ehbLogo from '../../../assets/showroom/logo-ehb-small-white.svg'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { finalWorkService } from '../../../services/finalWorkService'
import SharedDetailsWeb from './sharedDetails/SharedDetailsWeb'
import SharedDetailsMob from './sharedDetails/SharedDetailsMob'

export default function SharedDetail(){
    const [finalWork, setFinalWork] = useState()
    let params = useParams()

    useEffect(()=> {
        finalWorkService.fetchFinalWorkById(params.id)
        .then(Response => {
            setFinalWork(Response)
        })
    }, [params.id])


    return(
        <div id='backgroundRaster'>
            <img src={finalLogo} alt="" id='finalLogoSharedVersion'/>
            <img src={ehbLogo} alt="" id='ehbLogoSharedVersion'/>
            <div id='cassetteBackgroundShared'>
            <Link to={"/"}><img src={cross} alt="closing-img" id="crossShared"/></Link>
             <div id='sharedDetailWeb'>
                 <SharedDetailsWeb data={finalWork}></SharedDetailsWeb>
             </div>
             <div id='sharedDetailMob'>
                 <SharedDetailsMob data={finalWork}></SharedDetailsMob>
             </div> 
            </div>
        </div>
    )
} 