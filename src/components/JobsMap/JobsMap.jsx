import dummydata from './dummydata'
import { Link } from 'react-router-dom';
import './JobsMap.styles.css'
import locationIcon from '../../../src/location.svg'
import messageIcon from '../../../src/message.svg'
import savedUnfilled from '../../../src/saved-unfilled.svg'


const JobsMap = ({newJobs}) => {
    const mappedData = newJobs.map((elem,idx)=>{
        return (
            <div key={idx} className='card-wrapper'>
                <Link className='card-wrapper-container' key={`job-${idx}`} to={`/job/${elem.id}`}>
                    <div className='image-container'>
                        <div style={{ marginLeft: "5px",width: "90px", height: "90px", backgroundColor: 'grey', borderRadius: "7px"}} />
                    </div>
                    <div className='card-wrapper-info'>
                        {/* <div className='card-wrapper-info-left'>
                            <div className='card-wrapper-info-left-top'>
                                <h2 className='position-name'>{elem.position}</h2>
                                <h3 className='company-name'>{elem.company}</h3>
                            </div>
                            <div className='card-wrapper-info-left-bottom'>
                                
                            </div>
                        </div> */}
                        <div className='card-wrapper-info-top'>
                            <div className='card-wrapper-info-top-header'>
                                <div><h2 className='position'>{elem.position}</h2></div>
                                <div className='hourly-rate'><h3 className='compensation'>{elem.compensation}</h3><span className='per-hour'>/Hour</span></div>
                            </div>
                            <div className='card-wrapper-info-top-lower'>
                                <div> <h4 className='company-jobsmap'>{elem.company}</h4> </div>
                                <div className='location-wrapper-jobsmap'><img className='img-jobsmap' src={locationIcon} /><h4 className='location-jobsmap'>{elem.city}</h4>,<h4 className='location-jobsmap'>{elem.state}</h4></div>
                            </div>
                        </div>
                        <div className='card-wrapper-info-bottom'>
                            <div className='card-wrapper-info-bottom'>
                                <div className='card-wrapper-info-bottom-left'>
                                    <div className='btn-group-jobsmap'>
                                        <button className='details-btn'>details</button>
                                        <button className='email-btn'> <img src={messageIcon}/></button>
                                    </div>
                                    <div>
                                        <span className='saved-unfilled-wrapper'> <img src={savedUnfilled} /></span>
                                    </div>
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper-info-left'>
                        {/* <img src={locationIcon} /> */}
                        </div>
                    </div>
                    {/* <div className='jobs-container'>
                        <h3>{elem.company}</h3>
                        <h3>{elem.position}</h3>
                        <h3>{elem.location}</h3>
                       </div> */}
                 </Link>
            </div>
        )
    })

    return ( 
        <>
            {mappedData}
        </>
     );
}

export default JobsMap;