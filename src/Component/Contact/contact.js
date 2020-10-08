import React, { Component } from "react";
import FormFields from "./../Widgets/InputFields/inputFields";
import emailjs from "emailjs-com";
import Footer from "./../Footer/footer";

class Contact extends Component {
  state = {
    formData: {
      name: {
        element: "input",
        value: "",
        label: false,
        labelText: "Name",
        config: {
          className: "text__input",
          placeholder: "Full name",
          type: "text",
        },
      },
      email: {
        element: "input",
        value: "",
        label: false,
        labelText: "Email",
        config: {
          className: "text__input",
          placeholder: "Johndoe@mail.com",
          type: "text",
        },
      },
      message: {
        element: "textarea",
        value: "",
        label: false,
        labelText: "Message",
        config: {
          className: "textarea__input",
          placeholder: "Message",
        },
      },
    },
    message: {
      class: "",
      message: "",
    },
  };

  submitForm = (event) => {
    event.preventDefault();
    const submitValues = {};
    for (let key in this.state.formData) {
      submitValues[key] = this.state.formData[key].value;
    }
    emailjs
      .send(
        "service_gmail",
        "template_4g27ekh",
        submitValues,
        "user_vn2WL5F2zchQ6jRa7PBQX"
      )
      .then(() => {
        this.setState({
          message: { class: "status-success", message: "Message sent" },
        });
      })
      .catch(() => {
        this.setState({
          message: {
            class: "status-error",
            message: "Error sending the message",
          },
        });
      });
    this.clearFields();
  };

  clearFields = () => {
    const newData = this.state.formData;
    for (let key in newData) {
      newData[key].value = "";
    }
    this.setState({ newData });
  };

  updateForm = (newState) => {
    this.setState(newState);
  };

  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact__left">
          <h2 className="contact__heading">Contact Me</h2>
          <p className="contact__text">
            If you have a question or you want help with a project don't
            hesitate to contact me
          </p>
          <form className="contact__form" onSubmit={this.submitForm}>
            <FormFields
              formData={this.state.formData}
              change={(newState) => this.updateForm(newState)}
            />
            <button type="submit" className="contact__btn">
              Send
            </button>
            <div className={this.state.message.class}>
              {this.state.message.message}
            </div>
          </form>
        </div>
        <div className="contact__right">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
