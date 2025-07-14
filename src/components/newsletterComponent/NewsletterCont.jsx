import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const NewsletterCont = () => {
    return (
        <>
            <div id="ctaFormDiv">
                <form action="">
                    <div className="ctaForm">
                        <input type="email" name="" id="" className="ctaFormEmail" placeholder="E-mail Address" />
                        <span className="ctabtnIcon" ><input type="button" value="Send" className="ctaFormSubmitBtn" /><FontAwesomeIcon></FontAwesomeIcon></span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewsletterCont