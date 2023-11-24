import { useNavigate } from "react-router-dom";
import { HomeNavigateBtnDiv, NavigateBtn, PageNavigateBtn } from "./Style";
import { NavigateBtnsProps } from "../../type";


function NavigateBtns ({ page, setPage, disable, setError, setErrorMsg }: NavigateBtnsProps) {
  const navigate = useNavigate();
  return (
    <>
      <NavigateBtn>
        <PageNavigateBtn
          type='button'
          onClick={() => {
            setPage(page - 1),
            setError(false),
            setErrorMsg('')
          }}
          disabled={page === 0}
        >
            Anterior
        </PageNavigateBtn>
        <PageNavigateBtn
          type='button'
          onClick={() => setPage(page + 1)}
          disabled={page === 3 || disable === true}
          className={ disable ? 'inativeBtn' : ''}
        >
          Próximo
        </PageNavigateBtn>
        <HomeNavigateBtnDiv>
          <button
            type='button'
            onClick={ () => navigate('/') }
            data-testid='home-btn'
          >
            Home
          </button>
        </HomeNavigateBtnDiv>
      </NavigateBtn>
    </>
  )
}

export default NavigateBtns;
