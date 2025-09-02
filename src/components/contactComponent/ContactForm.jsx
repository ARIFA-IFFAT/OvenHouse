import { useState } from "react";


const ContactForm = () => {

    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        coaddress: "",
        product: "",
        service: "",
        message: "",
    });

    //handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");// clear error while typing
        setSuccessMsg("");
    };



    // handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        // Empty field validation
        if (
            !formData.name ||
            !formData.phone ||
            !formData.email ||
            !formData.company ||
            !formData.coaddress ||
            !formData.product ||
            !formData.service ||
            !formData.message
        ) {
            setError("⚠️ Please fill all required fields.");
            setSuccessMsg("");
        }
        // Email validation
        else if (!emailRegex.test(formData.email)) {
            setError("❌ Please enter a valid email address.");
            setSuccessMsg("");
        }
        // Phone validation
        else if (!phoneRegex.test(formData.phone)) {
            setError("❌ Please enter a valid 10-digit phone number.");
            setSuccessMsg("");
        }
        // Success
        else {
            setError("");
            setSuccessMsg("✅ Form submitted successfully!");
            console.log("Form submitted:", formData);

            // Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                company: "",
                coaddress: "",
                product: "",
                service: "",
                message: "",
            });
        }
    }



    return (
        <div className="formBorder">
            <div id="contctForm">
                <form className="w-100 m-auto" onSubmit={handleSubmit}>
                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div className="w-100 w-md-50">
                            <label htmlFor="name" className="fw-semibold fs-6">Your Name:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="" id="name" name="name"
                                value={formData.name} onChange={handleChange}
                                className=" mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-bottom-1 cust_border_color rounded" />
                        </div>
                        <div className="w-100 w-md-50">
                            <label htmlFor="phone" className="fw-semibold fs-6">Phone:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="" id="phone" name="phone"
                                value={formData.phone} onChange={handleChange}
                                className=" mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3 ">
                        <div>
                            <label htmlFor="email" className="fw-semibold fs-6">E-mail:<span className="text-danger">*</span></label>
                            <input type="email" placeholder="" id="email" name="email"
                                value={formData.email} onChange={handleChange}
                                className=" p-2 custm_p bg_cust_inp_light border-1 cust_border_color w-100 rounded" />
                        </div>
                    </div>

                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div className="w-100 w-md-50">
                            <label htmlFor="company" className="fw-semibold fs-6">Your Company:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="" id="company" name="company"
                                value={formData.company} onChange={handleChange}
                                className="mb-2 mb-md-0 p-2 custm_p bg_cust_inp_light border-1 cust_border_color w-100 rounded" />
                        </div>
                        <div className="w-100 w-md-50">
                            <label htmlFor="coaddress" className="fw-semibold fs-6">Company Address:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="" id="coaddress" name="coaddress"
                                value={formData.coaddress} onChange={handleChange}
                                className="mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div className="w-100 w-md-50">
                            <label className="fw-semibold fs-6">Choose the product:<span className="text-danger">*</span></label>
                            <br></br>
                            <select name="product"
                                value={formData.product} onChange={handleChange}
                                className="mb-2 mb-md-0 p-2 custm_p w-100 border-1 cust_border_color rounded">
                                <option value="">Select the product</option>
                                <option value="product1">product1</option>
                                <option value="product2">product2</option>
                                <option value="product3">product3</option>
                                <option value="product4">product4</option>
                            </select>
                        </div>
                        <div className="w-100 w-md-50">
                            <label htmlFor="service" className="fw-semibold fs-6">Service:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="" id="service" name="service"
                                value={formData.service} onChange={handleChange}
                                className=" mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3">
                        <div>
                            <label htmlFor="message" className="fw-semibold fs-6">Your Query(Message):<span className="text-danger">*</span></label>
                            <textarea placeholder="" name="message" id="message"
                                value={formData.message} onChange={handleChange}
                                className=" p-2 custm_p w-100 border-1 cust_border_color bg_cust_inp_light rounded" style={{ height: "50px", }}></textarea>
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3" >
                        <button className="btn btn-md btn-primary w-100">Submit</button>
                    </div>
                </form>

                {/* used Ternary operator to show error/success message  */}
                {error ? (<p style={{ color: "red", fontSize: "14px" }}>{error}</p>) : successMsg ? (<p style={{ color: "green", fontSize: "14px" }}>{successMsg}</p>) : null}


                <p>
                    <span className="text-danger">*</span> indicates required fields.
                </p>
            </div>
        </div>
    )
}
export default ContactForm;