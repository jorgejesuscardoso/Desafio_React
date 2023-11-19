import { useDispatch, useSelector } from "react-redux"
import { filterAllAction, filterFavoriteAction, filterMarkedAction } from "../redux/action/actions"
import { FilterTypeNewsRelease, MiscellanousFilterType } from "../../type"
import { scrolTop } from "../utils/Utils"

function TopFilter () {
  const dispatch = useDispatch()
  const { filterFavorite, filterMarked } = useSelector((state: MiscellanousFilterType) => state.filterAll)
  const { filterNewsAndRelease } = useSelector((state: FilterTypeNewsRelease) => state.filterNewsAndRelease)
  
  const handeFilterAll = () => {
    dispatch(filterAllAction(''))
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
      <button
        className={ !filterNewsAndRelease ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={handeFilterAll}
      >
        Todos
      </button>

      <button
        className={ !filterFavorite ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={handeFilterFavorites}
      >
        Favoritos
      </button>

      <button
        className={ !filterMarked ? "filter-btn" : "filter-btn filtred-btn-top"}
        onClick={handeFilterMarked}
      >
        Marcados
      </button>

      <button 
        className={ filterNewsAndRelease === 'noticia' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={handeFilterNews}
      >
        Notícias
      </button>

      <button
        className={ filterNewsAndRelease === 'release' ? "filter-btn filtred-btn-top" : "filter-btn" }
        onClick={handeFilterRelease}
      >
        Releases
      </button>
    </>
  )
}

export default TopFilter
