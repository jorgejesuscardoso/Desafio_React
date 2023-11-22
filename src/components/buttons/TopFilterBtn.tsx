import { useDispatch, useSelector } from "react-redux"
import { filterAllAction, filterFavoriteAction, filterMarkedAction } from "../redux/action/actions"
import { FilterTypeNewsRelease, MiscellanousFilterType } from "../../type"
import { scrolTop } from "../utils/Utils"
import { FilterBtnTop } from "./Style"

function TopFilter () {
  const dispatch = useDispatch()
  const { filterFavorite, filterMarked } = useSelector((state: MiscellanousFilterType) => state.filterAll)
  const { filterNewsAndRelease } = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease)
  
  const handeFilterAll = () => {
    dispatch(filterAllAction(''))
    window.location.reload()
    scrolTop()
  }
  const handeFilterFavorites = () => {
    dispatch(filterFavoriteAction())
    scrolTop()
  }
  const handeFilterMarked = () => {
    dispatch(filterMarkedAction())
    scrolTop()
  }
  const handeFilterNews = () => {
    dispatch(filterAllAction('noticia'))
    scrolTop()
  }
  const handeFilterRelease = () => {
    dispatch(filterAllAction('release'))
    scrolTop()
  }
  return (
    <>
      <FilterBtnTop
        className={ !filterNewsAndRelease ? "filtred-btn-top" : "" }
        onClick={handeFilterAll}
      >
        Todos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterFavorite ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={handeFilterFavorites}
      >
        Favoritos
      </FilterBtnTop>

      <FilterBtnTop
        className={ !filterMarked ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={handeFilterMarked}
      >
        Marcados
      </FilterBtnTop>

      <FilterBtnTop 
        className={ filterNewsAndRelease === 'noticia' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={handeFilterNews}
      >
        Notícias
      </FilterBtnTop>

      <FilterBtnTop
        className={ filterNewsAndRelease === 'release' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={handeFilterRelease}
      >
        Releases
      </FilterBtnTop>
    </>
  )
}

export default TopFilter
