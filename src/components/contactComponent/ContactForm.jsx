

const ContactForm = () => {

    return (
        <div className="formBorder">
            <div id="contctForm">
                <form action="" className="w-100 m-auto" >
                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <div>
                            <label htmlFor="" className="fw-semibold fs-6">Your Name:<span className="text-danger">*</span></label>
                            <input type="text" placeholder="" name="" className=" mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-bottom-1 cust_border_color rounded" />
                        </div>
                        <div>
                            <label htmlFor="" className="fw-semibold fs-6">E-mail:<span className="text-danger">*</span></label>
                            <input type="email" placeholder="" className=" p-2 custm_p bg_cust_inp_light border-1 cust_border_color w-100 rounded" />
                        </div>
                    </div>
                    <div className="mb-2 mb-lg-3 d-md-flex gap-md-3">
                        <input type="text" placeholder="Phone*" name="" className=" mb-2 mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                        <input type="text" placeholder="Company*" className=" mb-md-0 p-2 custm_p bg_cust_inp_light border-1 cust_border_color w-100 rounded" />
                    </div>
                    <div className="mb-2 mb-lg-3 ">
                        <input type="location" placeholder="Company Address*" name="" className=" mb-md-0 p-2 custm_p w-100 bg_cust_inp_light border-1 cust_border_color rounded" />
                    </div>
                    <div className="mb-2 mb-lg-3 ">
                        <label htmlFor="">Choose the product:</label>
                        <br></br>
                        <select className="w-100 p-2 border-1 cust_border_color rounded">
                            <option value="">Select the product</option>
                            <option value="product1">product1</option>
                            <option value="product2">product2</option>
                            <option value="product3">product3</option>
                            <option value="product4">product4</option>
                        </select>
                    </div>
                    <div className="mb-2 mb-lg-3">
                        <textarea placeholder="Your Query(Message)*" name="" id="" className=" p-2 custm_p w-100 border-1 cust_border_color bg_cust_inp_light rounded" style={{ height: "100px", }}></textarea>
                    </div>
                    <div className="m2b2 mb-lg-3 " >
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