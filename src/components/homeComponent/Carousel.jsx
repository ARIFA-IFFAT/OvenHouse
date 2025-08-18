import Marquee from 'react-fast-marquee';


const Carousel = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-3">
<h3 className="custm_h3 blueColorText">Our Clients</h3>
<p className="text-muted custm_p">We are proud to partner with leading organizations, delivering innovative solutions that drive growth, efficiency, and long-term success.</p>
                </div>
                <div className="col-12 col-md-9">
                    <Marquee>
                        <img src="client-logo/aecs-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/KIIT-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/MGM-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/msk-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/tcrc-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/vasu-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/psf-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                        <img src="client-logo/smc-logo.png" alt="client-logo" style={{ width: '150px', padding: '10px' }} />
                    </Marquee>
                </div>
            </div>

        </div>
    )
}

export default Carousel