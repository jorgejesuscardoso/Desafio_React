import { PopUpProps } from "../../type";
import { PopUpAlert } from "./Style";


function PopUp ({ popUp, setPopUp }: PopUpProps) {
  return (
    <>
      <PopUpAlert data-testId='popup'>
        <p>{ popUp }</p>
        <button 
          onClick={() => setPopUp('')}
          data-testId='close-popup'
        >
          ❌
        </button>
      </PopUpAlert>
    </>
  )
}

export default PopUp;
