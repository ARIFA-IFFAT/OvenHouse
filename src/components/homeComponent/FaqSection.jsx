
import Faq from "react-faq-component";



const FaqSection = () => {

    const data = {
        rows: [
            {
                title: "What types of products do you manufacture?",
                content: `We specialize in manufacturing laboratory instruments, commercial kitchen equipment, hot air ovens, BOD incubators, curing tanks, hot plates, and more. Our products are designed for precision, durability, and efficiency.`,
            },
            {
                title: "Do you offer product customization?",
                content:
                    "Yes, we provide customized solutions to meet specific requirements. Whether it's size, capacity, or functionality, we can tailor products according to your needs.",
            },
            {
                title: "Is there a warranty on your equipment?",
                content: `Absolutely. All our products come with a standard 1-year warranty covering manufacturing defects. Extended warranties are also available on request.`,
            },
            {
                title: "Do you provide installation and training?",
                content: "Yes, we offer installation support and operational training to ensure you get started smoothly and safely with your equipment.",
            },
            {
                title: "Can I order in bulk or for institutional use?",
                content: "Yes, we handle bulk orders for laboratories, commercial kitchens, hospitals, educational institutions, and research centers. Contact our sales team for special pricing.",
            },
            {
                title: "What is the average delivery time? ",
                content: `Most orders are delivered within 7–10 working days, depending on product availability and customization. We’ll provide estimated delivery timelines at the time of order.`,
            },
            {
                title: `Do you ship across India? `,
                content: `Yes, we deliver pan-India. We also support logistics and packaging for remote or high-priority locations.`,
            },
            {
                title: `How do I maintain the equipment? `,
                content: `Each product includes a maintenance guide. However, we also offer annual maintenance contracts (AMCs) and phone/email support to guide you.`,
            },
            {
                title: `How can I request a quote or place an order?`,
                content: `You can contact us directly via our website’s contact form, call us, or send an inquiry email. We typically respond within 24 hours.`,
            },
            {
                title: `What payment methods do you accept? `,
                content: `We accept bank transfers (NEFT/RTGS), UPI, and cheque payments. For bulk or institutional orders, partial advance and milestone-based payments are available.`,
            },
        ],
    };

    const styles = {
        bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "#003f7d",
        rowContentColor: 'black',
        arrowColor: "#003f7d",
        transitionDuration: ".6s",
        timingFunc: "ease"
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "-",
    };


    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h1 className="cust_h1_heading mb-3"><span className="blueColorText">Frequently </span><span className="coloredText">Asked Questions</span></h1>
                    <p className="text-muted custm_p">
                        Quick answers to the most common questions about our products and services.
                    </p>
                </div>
                <div className="col-12 col-md-6">
<div className="faqScroll" style={{height: '300px', overflowY: 'scroll', scrollbarWidth: 'none'}}>
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
</div>
                </div>
            </div>
        </div>
    )
}

export default FaqSection