
import PropTypes from 'prop-types';


import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    const circleBar = [
        { id: 1, percent: 90, circleTitle: "Quality" },
        { id: 2, percent: 60, circleTitle: "Technology" },
        { id: 3, percent: 75, circleTitle: "Sustainability" },
    ];

    return (
        <div className='bar_row mt-5 mb-3 d-flex gap-3'>
            {circleBar.map((item) => (
                <ProgressItem key={item.id} percent={item.percent} circleTitle={item.circleTitle} />
            ))}
        </div>
    );
};

// Component to animate the progress bar
const ProgressItem = ({ percent, circleTitle }) => {
    const [progress, setProgress] = useState(1);

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= percent) {
                    clearInterval(interval);
                    return percent;
                }
                return oldProgress + 1;
            });
        }, 20); // Speed of the animation

        return () => clearInterval(interval);
    }, [percent]);

    return (
        <div 
            style={{ width: '95px', height: '95px' }} 
            data-aos="fade-up" 
            data-aos-delay={percent * 2} // Dynamic delay
        >
            <CircularProgressbar 
                value={progress} 
                text={`${progress}%`} 
                styles={buildStyles({
                    textColor: '#fff',
                    trailColor: '#fff',
                    backgroundColor: '#fff',
                })}  
            />
            <p className='custm_p text-white mb-0'>{circleTitle}</p>
        </div>
    );
};
// ✅ Add PropTypes for validation
ProgressItem.propTypes = {
    percent: PropTypes.number.isRequired,
    circleTitle: PropTypes.string.isRequired,
};

export default CircularProgressBar;


