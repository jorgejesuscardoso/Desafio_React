import { Page1FomProps } from "../../type";
import { logoIcon } from "../icons/Imports";
import { Page0and1, PagesContent } from "./Style";


function Page1Fom ({ name, setName, lastname, setLastname, age, setAge, setError, setIsRegister }: Page1FomProps) {
  return (
    <>
      <Page0and1>
        <img src={ logoIcon } alt="" style={{width: 150, margin: 'auto'}} />
        <PagesContent>
          <label htmlFor="name">Nome:</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Nome'
            id="name"
            required
          />
        </PagesContent>
        <PagesContent>
          <label htmlFor="lastname">Sobrenome:</label>
          <input
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='text'
            placeholder='Sobrenome'
            id="lastname"
            required
          />
        </PagesContent>
        <PagesContent>
          <label htmlFor="age">Idade:</label>
          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setError(false);
              setIsRegister(false);
              }}
            type='number'
            placeholder='Idade'
            id="age"
            required
          />
        </PagesContent>
      </Page0and1>
    </>
  )
}

export default Page1Fom;
