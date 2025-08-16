import PropTypes from "prop-types";
import { useEffect, useState } from "react"


const AnimatedText = ({text}) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

useEffect(()=>{
    if(index < text.length){
        const timeout= setTimeout(()=>{
            setDisplayText((prev)=> prev+text[index]);
            setIndex(index+1);
        }, 200);
        return ()=>clearTimeout(timeout);
    }else{
        setTimeout(()=>{
            setDisplayText("");
            setIndex(0)
        }, 1000);
    }
}, [index, text]);

  return (
            <h2 className="cust_h2_heading blueColorText">{displayText}</h2>
   
  )
}

export default AnimatedText;


AnimatedText.propTypes = {
    text: PropTypes.string.isRequired,
};