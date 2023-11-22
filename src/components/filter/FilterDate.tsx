import { useDispatch } from "react-redux";
import { filterAllAction, filterDateAction, filterSearchDateAction } from "../redux/action/actions";
import { FormEvent, useState } from "react";
import { CloseBtn, DivDate, ErrMsgDiv, Form, SearchBtn } from "./Style";
import { scrolTop } from "../utils/Utils";


function FilterDate () {
  const dispatch = useDispatch();
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [erroDate, setErroDate] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const initial = new Date(initialDate);
    const final = new Date(finalDate);
    if (initial > final) {
      setErroDate(true);
      return;
    }
    if (!initialDate && !finalDate) {
      dispatch(filterAllAction('noticia'));
      const date = '';
      dispatch(filterSearchDateAction(date));
      scrolTop();
    } 
    if (initialDate && finalDate) {
      const fullDate = `de=${initialDate}&ate=${finalDate}`;
      dispatch(filterSearchDateAction(fullDate));
      scrolTop();
    } else if (initialDate) {
      dispatch(filterSearchDateAction(`de=${initialDate}`));
      scrolTop();
    } else if (finalDate) {
      dispatch(filterSearchDateAction(`ate=${finalDate}`));
      scrolTop();
    }
    dispatch(filterDateAction());
    scrolTop();
  }
  return (
    <div>
      <Form
       onSubmit={ handleSearch }
      >
        <CloseBtn
          type="button"
          className="close"
          onClick={ () => 
            dispatch(filterDateAction()) }
        >                
          <p>✖️</p>
        </CloseBtn>
        <DivDate className="inputs-search-date">
          <label htmlFor="searchInitialDate">Data inicial:</label>
          <input
            type="date"
            id="searchInitialDate"
            placeholder="MM-DD-AA"
            value={ initialDate }
            onChange={ (e) => setInitialDate(e.target.value) }
          />
        </DivDate>
        <DivDate>
          <label htmlFor="searchFinalDate">Data final:</label>
          <input
            type="date"
            id="searchFinalDate"
            placeholder="MM-DD-AA"
            value={ finalDate }
            onChange={ (e) => setFinalDate(e.target.value) }
          />
        </DivDate>
        <SearchBtn
          type="submit"
        >
          Buscar
        </SearchBtn>
        <ErrMsgDiv>
         { erroDate &&
          <p>
            Data inicial não pode ser maior que a data final!
          </p> }
        </ErrMsgDiv>
      </Form>
    </div>
  );
}

export default FilterDate;
