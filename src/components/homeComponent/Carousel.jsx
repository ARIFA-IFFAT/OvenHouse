import Marquee from 'react-fast-marquee';


const Carousel = () => {
    return (
        <div className='container'>
            <Marquee>
                <img src="client-logo/aecs-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/KIIT-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/MGM-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/msk-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/tcrc-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/vasu-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/psf-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
                <img src="client-logo/smc-logo.png" alt="client-logo" style={{width: '150px', padding:'10px'}}/>
            </Marquee>   
        </div>
    )
}

export default Carousel