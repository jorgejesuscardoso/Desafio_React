import { Page3FormProps } from "../../type";
import { SemFoto } from "../icons/Imports";
import { BtnRegister, ContainerFoto, Foto, Page3 } from "./Style";


function Page3Form ({ thumb, setThumb, setError, setIsRegister, disable }: Page3FormProps) {
  return (
    <>
      <Page3>
        <Foto src={ SemFoto } alt="sem-foto" />
          <p>Gostaria de adicionar uma foto ao seu perfil ?</p>
        <ContainerFoto style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="thumb">Insira a url da foto:</label>
          <input
            value={thumb}
            onChange={(e) => {
              setThumb(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Url da foto'
            id="thumb"
            data-testid='thumb'
          />
        </ContainerFoto>
        <BtnRegister
          type='submit'
          className="btn-form-register"
          disabled={ disable === true}
          data-testid='btn-register'
        >
          Registrar
        </BtnRegister>
      </Page3>
    </>
  )
}

export default Page3Form;
