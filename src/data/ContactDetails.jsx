import { faChartLine, faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

  const ContactDetails = [
        { id: 1, icon: faPhone, title: 'Phone/Mobile', content: '094398 56860', gifUrl: '/icons/24-hours-support.gif', urls: 'tel:09439856860', },
        { id: 2, icon: faEnvelope, title: 'Mailing address', content: 'info@arhcs-ovenhouse.com', gifUrl: '/icons/email.gif', urls: 'mailto:info@arhcs-ovenhouse.com', },
        { id: 3, icon: faLocation, title: 'Factory/Office', content: 'Mangaraj Point, Puri bypass road, chawk, Kesora Rd, NH316, Bhubaneswar, Odisha 751006', gifUrl:'/icons/map.gif', urls: `https://maps.app.goo.gl/FKUgXXT526Jwx9wy6`, },
        { id: 4, icon: faChartLine, title: 'Open/Close Timings', content: '10 AM - 7 PM', gifUrl: '/icons/timing.gif', urls: '#', },
    ]
    export default ContactDetails;