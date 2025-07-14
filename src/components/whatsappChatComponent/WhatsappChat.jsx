import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const WhatsappChat = () =>{
    const phoneNumber = 9439856860;
    const defaultMessage = "Hello! I'm reaching out from your website."; // Replace with your desired message

    const url = `https://wa.me/${phoneNumber}?text= ${defaultMessage}`

const clickHandle = () =>{
    window.open(url,"_blank")
}


    return(
        <div className="">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp_chat" onClick={clickHandle} />
        </div>
    );
}

export default WhatsappChat;