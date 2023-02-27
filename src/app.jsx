import "./style.css"
import face from "./secondfaceedit.png";
export const App = () => {
  return(
    <div className="mian_container">
      <div className="input_container">
        <div className="main_logo_container">
          <img src={face} className="logo"></img>
          <h2 className="title">
          </h2>
        </div>
      <form action="" className="main_form">
        <input type="text" placeholder="enter your name :" />
        <input type="text" placeholder="eneter your phone number : " />
        <input type="text" placeholder="eneter your school education : " />
        <input type="" placeholder="eneter your burth date " />
        <input type="text" placeholder="eneter your place :" />
        <input type="button" value="send"/>
      </form>
      </div>
    </div>
  )
}
export default App;
