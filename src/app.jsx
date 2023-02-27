import "./style.css"
import face from "./secondfaceedit.png";
import emailjs from '@emailjs/browser';
import {useRef}from "react"


export const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3f3805s', 'template_ipeue3o', form.current, 'ofUifwRblAs7N5Pyi')
      .then((result) => {
          console.log(result.text);
          console.log("send ")
      }, (error) => {
          console.log(error.text);
          console.log("not send")
      });
  };

  return(
    <div className="mian_container">
      <div className="input_container">
        <div className="main_logo_container">
          <img src={face} className="logo"></img>
          <h2 className="title">
          </h2>
        </div>
      <form ref={form} className="main_form" onSubmit={sendEmail}>
        <input name="first_name" type="text" placeholder="enter your name :" />
        <input name="phone_number" type="number"placeholder="eneter your phone number : " />
        <input name="school" type="text" placeholder="eneter your school education : " />
        <input name="date" type="" placeholder="eneter your burth date " />
        <input name="living" type="text" placeholder="eneter your place :" />
        <input type="button" value="send"/>
      </form>
      </div>
    </div>
  )
}
export default App;
