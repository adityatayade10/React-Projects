import Navigation from "./components/Navigation"
import "./App.css"   
import ContactHeader from "./components/ContactHeader/ContactHeader"
import ContactForm from "./components/ContactForm/ContactForm"
import Button from "./components/Button/Button"
import { MdMessage } from "react-icons/md";
function App() {
  

  return (
    <div className='montserrat-custom'>
      <Navigation />
      <main className="main-container">
        <ContactHeader />
        <ContactForm />
      </main>
      
    </div>
   
  )
}

export default App
