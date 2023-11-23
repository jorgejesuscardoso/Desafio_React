import { useDispatch, useSelector } from "react-redux"
import { filterAllAction, filterFavoriteAction, filterMarkedAction } from "../redux/action/actions"
import { FilterTypeNewsRelease, MiscellanousFilterType } from "../../type"
import { scrolTop } from "../utils/Utils"
import { FilterBtnTop } from "./Style"

function TopFilter () {
  const dispatch = useDispatch()
  const { filterFavorite, filterMarked } = useSelector((state: MiscellanousFilterType) => state.filterAll)
  const { filterNewsAndRelease } = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease)
  
  return (
    <>
      <FilterBtnTop
        className={ !filterNewsAndRelease ? "filtred-btn-top" : "" }
        onClick={() => {
          dispatch(filterAllAction('')),
          window.location.reload(),
          scrolTop()
        }}
      >
        Todos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterFavorite ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => {
          dispatch(filterFavoriteAction()),
          scrolTop()
        } }
      >
        Favoritos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterMarked ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={ () => {
          dispatch(filterMarkedAction()),
          scrolTop()
        } }
      >
        Marcados
      </FilterBtnTop>

      <FilterBtnTop 
        className={ filterNewsAndRelease === 'noticia' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => {
          dispatch(filterAllAction('noticia')),
          scrolTop()
        }}
      >
        Notícias
      </FilterBtnTop>

      <FilterBtnTop
        className={ filterNewsAndRelease === 'release' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={ () => {
          dispatch(filterAllAction('release')),
          scrolTop()
        }}
      >
        Releases
      </FilterBtnTop>
    </>
  )
}

export default TopFilter
