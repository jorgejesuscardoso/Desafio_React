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
      >
        Todos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterFavorite ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => handleButtonClick(filterFavoriteAction())}
      >
        Favoritos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterMarked ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => handleButtonClick(filterMarkedAction())}
      >
        Marcados
      </FilterBtnTop>

      <FilterBtnTop 
        className={ filterNewsAndRelease === 'noticia' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => handleButtonClick(filterAllAction('noticia'))}
      >
        Notícias
      </FilterBtnTop>

      <FilterBtnTop
        className={ filterNewsAndRelease === 'release' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => handleButtonClick(filterAllAction('release'))}
      >
        Releases
      </FilterBtnTop>
    </>
  )
}

export default TopFilter
