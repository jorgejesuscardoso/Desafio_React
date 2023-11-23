import { ChangeFotoProps } from "../../type";
import { SemFoto } from "../icons/Imports";


function ChangePhoto ({ userInfo, newUserInfo, setNewUserInfo }: ChangeFotoProps) {
  return (
    <>
      <img src={ userInfo[0].foto || SemFoto } alt={ userInfo[0].nome } />   
      <div>
        <label htmlFor="foto">URL da nova foto:</label>
        <input
          type="text"
          name="foto"
          id="foto"
          value={ newUserInfo.foto }
          onChange={ (e) => setNewUserInfo({ ...newUserInfo, foto: e.target.value }) }
        />
        <button
          type="submit" 
          className="loginBtn"
          style={ { width: '20%', height: '3vh', marginLeft: 10 } }
        >
            Enviar
        </button>
      </div>
    </>
  )
}

export default ChangePhoto;
