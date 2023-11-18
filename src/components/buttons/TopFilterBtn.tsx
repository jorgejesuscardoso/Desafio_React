import { useDispatch } from "react-redux"
import { filterAllAction } from "../redux/action/actions"

function TopFilter () {
  const dipatch = useDispatch()

  const handeFilterAll = () => {
    dipatch(filterAllAction(''))
  }
  const handeFilterFavorites = () => {
    console.log('Favoritos')
  }
  const handeFilterMarked = () => {
    console.log('Marcados')
  }
  const handeFilterNews = () => {
    dipatch(filterAllAction('noticia'))
  }
  const handeFilterRelease = () => {
    dipatch(filterAllAction('release'))
  }
  return (
    <>
      <button className="filter-btn" onClick={handeFilterAll}>
        Todos
      </button>
      <button className="filter-btn" onClick={handeFilterFavorites}>
        Favoritos
      </button>
      <button className="filter-btn" onClick={handeFilterMarked}>
        Marcados
      </button>
      <button className="filter-btn" onClick={handeFilterNews}>
        Notícias
      </button>
      <button className="filter-btn" onClick={handeFilterRelease}>
        Releases
      </button>
    </>
  )
}

export default TopFilter
