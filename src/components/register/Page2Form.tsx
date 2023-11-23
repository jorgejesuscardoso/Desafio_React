import { Page2FormProps } from "../../type";
import { logoIcon } from "../icons/Imports";
import { Page2, PagesContent } from "./Style";

function Page2Form ({ address, setAddress, setError, setIsRegister }: Page2FormProps) {

  return (
    <>
      <Page2>
        <img
          src={ logoIcon }
          alt=""
        />        
        <PagesContent>
          <label htmlFor="street">Rua:</label>
          <input
          value={address.rua}
          onChange={(e) => {
            setAddress({...address, rua: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Rua'
          id="street"
          required
        />
        </PagesContent>
        <PagesContent>
          <label htmlFor="district">Bairro:</label>
          <input
            value={address.bairro}
            onChange={(e) => {
              setAddress({...address, bairro: e.target.value});
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Bairro'
            id="district"
            required
          />
        </PagesContent>
        <PagesContent>
        <label htmlFor="number">Número:</label>
        <input
          value={address.numero}
          onChange={(e) => {
            setAddress({...address, numero: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='number'
          placeholder='Número'
          id="number"
          required
        />
        </PagesContent>
        <PagesContent>
        <label htmlFor="city">Cidade:</label>
        <input
          value={address.cidade}
          onChange={(e) => {
            setAddress({...address, cidade: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Cidade'
          id="city"
          required
        />
        </PagesContent>
        <PagesContent>
        <label htmlFor="state">Estado:</label>
        <input
          value={address.estado}
          onChange={(e) => {
            setAddress({...address, estado: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='Estado'
          id="state"
          required
        />
        </PagesContent>
        <PagesContent>        
        <label htmlFor="country">País:</label>
        <input
          value={address.pais}
          onChange={(e) => {
            setAddress({...address, pais: e.target.value});
            setError(false);
            setIsRegister(false);
            }}
          type='text'
          placeholder='País'
          id="country"
        />
        </PagesContent>
      </Page2>
    </>
  )
}

export default Page2Form;
