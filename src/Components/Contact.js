import React from "react";
// import image from "../Assets/bg.jpg";

const Contact = () => {
  return (
    // <div
    //   style={{
    //     backgroundImage: `url(${image})`,
    //     position: "fixed",
    //     backgroundSize: "cover",
    //     height: "100vh",
    //     backgroundRepeat: "no-repeat",
    //     width: "236vh",
    //     backgroundPosition: ''
    //   }}
    // >
      <div className="container mt-5 w-50" position="center">
        <h2 className="mb-3">Get in Touch</h2>
        <form>
          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="name"
              class="col-sm-2 col-form-label col-form-label-lg"
            >
              {" "}
              Name{" "}
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="email"
              class="col-sm-2 col-form-label col-form-label-lg"
            >
              {" "}
              Email{" "}
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              htmlFor="message"
              class="col-sm-2 col-form-label col-form-label-lg"
            >
              {" "}
              Message{" "}
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-primary btn-lg" type="submit">
            SEND
          </button>
        </form>
      </div>
    // </div>
  );
};
export default Contact;
