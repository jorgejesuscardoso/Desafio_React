import { PopUpProps } from "../../type";
import { PopUpAlert } from "./Style";


function PopUp ({ popUp, setPopUp }: PopUpProps) {
  return (
    <>
      <PopUpAlert>
        <p>{ popUp }</p>
        <button 
          onClick={() => setPopUp('')}
        >
          X
        </button>
      </PopUpAlert>
    </>
  )
}

export default PopUp;
