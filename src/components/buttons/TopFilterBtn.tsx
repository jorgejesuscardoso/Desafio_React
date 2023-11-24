import { useDispatch, useSelector } from "react-redux"
import { filterAllAction, filterFavoriteAction, filterMarkedAction } from "../redux/action/actions"
import { FilterTypeNewsRelease, MiscellanousFilterType } from "../../type"
import { scrolTop } from "../utils/Utils"
import { FilterBtnTop } from "./Style"
import { AnyAction } from "redux"

function TopFilter () {
  const dispatch = useDispatch()
  const { filterFavorite, filterMarked } = useSelector((state: MiscellanousFilterType) => state.filterAll)
  const { filterNewsAndRelease } = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease)

  const handleButtonClick = (action: AnyAction) => {
    scrolTop()
    dispatch(action)
  }
  
  return (
    <>
      <FilterBtnTop
        className={ !filterNewsAndRelease ? "filtred-btn-top" : "" }
        onClick={ () => handleButtonClick(filterAllAction('')) }
        data-testid='filter-todos'
      >
        Todos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterFavorite ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => handleButtonClick(filterFavoriteAction())}
        data-testid='filter-favoritos'
      >
        Favoritos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterMarked ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => handleButtonClick(filterMarkedAction())}
        data-testid='filter-marcados'
      >
        Marcados
      </FilterBtnTop>

      <FilterBtnTop 
        className={ filterNewsAndRelease === 'noticia' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => handleButtonClick(filterAllAction('noticia'))}
        data-testid='filter-noticias'
      >
        Notícias
      </FilterBtnTop>

      <FilterBtnTop
        className={ filterNewsAndRelease === 'release' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => handleButtonClick(filterAllAction('release'))}
        data-testid='filter-releases'
      >
        Releases
      </FilterBtnTop>
    </>
  )
}

export default TopFilter
