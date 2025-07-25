

const ContactForm = () => {

    return (
        <div className="formBorder">
            <div id="contctForm">
                <form action="" className="w-100 m-auto" >
                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div className="w-100 w-md-50">
                            <label htmlFor="" className="fw-semibold fs-6">Your Name:<span className="text-danger">*</span></label>
                            <input type="text" required placeholder="" name="" className=" mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-bottom-1 cust_border_color rounded" />
                        </div>
                        <div className="w-100 w-md-50">
                            <label htmlFor="" className="fw-semibold fs-6">Phone:<span className="text-danger">*</span></label>
                            <input type="text" required placeholder="" name="" className=" mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3 ">
                        <div>
                            <label htmlFor="" className="fw-semibold fs-6">E-mail:<span className="text-danger">*</span></label>
                            <input type="email" required placeholder="" className=" p-2 custm_p bg_cust_inp_light border-1 cust_border_color w-100 rounded" />
                        </div>
                    </div>

                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div className="w-100 w-md-50">
                            <label htmlFor="" className="fw-semibold fs-6">Your Company:<span className="text-danger">*</span></label>
                            <input type="text" required placeholder="" className="mb-2 mb-md-0 p-2 custm_p bg_cust_inp_light border-1 cust_border_color w-100 rounded" />
                        </div>
                        <div className="w-100 w-md-50">
                            <label htmlFor="" className="fw-semibold fs-6">Company Address:<span className="text-danger">*</span></label>
                            <input type="location" required placeholder="" name="" className="mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div className="w-100 w-md-50">
                            <label htmlFor="" className="fw-semibold fs-6">Choose the product:<span className="text-danger">*</span></label>
                            <br></br>
                            <select className="mb-2 mb-md-0 p-2 custm_p w-100 border-1 cust_border_color rounded">
                                <option value="">Select the product</option>
                                <option value="product1">product1</option>
                                <option value="product2">product2</option>
                                <option value="product3">product3</option>
                                <option value="product4">product4</option>
                            </select>
                        </div>
                        <div className="w-100 w-md-50">
                            <label htmlFor="" className="fw-semibold fs-6">Service:<span className="text-danger">*</span></label>
                            <input type="text" required placeholder="" name="" className=" mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3">
                        <div>
                            <label htmlFor="" className="fw-semibold fs-6">Your Query(Message):<span className="text-danger">*</span></label>
                            <textarea placeholder="" name="" id="" className=" p-2 custm_p w-100 border-1 cust_border_color bg_cust_inp_light rounded" style={{ height: "50px", }}></textarea>
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3" >
                        <button className="btn btn-md btn-primary w-100">Submit</button>
                    </div>
                </form>
                <p>
                    <span className="text-danger">*</span> indicates required fields.
                </p>
            </div>
        </div>
    )
}
export default ContactForm;