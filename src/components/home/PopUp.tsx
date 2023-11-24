import { PopUpProps } from "../../type";
import { PopUpAlert } from "./Style";


function PopUp ({ popUp, setPopUp }: PopUpProps) {
  return (
    <>
      <PopUpAlert data-testId='popup'>
        <p>{ popUp }</p>
        <button 
          onClick={() => setPopUp('')}
          data-testid='close-popup'
        >
          X
        </button>
      </PopUpAlert>
    </>
  )
}

export default PopUp;
