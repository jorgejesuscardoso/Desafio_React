import { Link } from "react-router-dom";

interface Item {
  id: number;
  tipo: string;
  editorias: string;
  titulo: string;
  data_publicacao: string;
  introducao: string;
  link: string;
}

function News (item: Item) {
  return (
    <div key={item.id} className="news-container">
      <h1>{item.tipo}</h1>
      <h4>{item.editorias}</h4>
      <h3>{item.titulo}</h3>
      <p>{item.data_publicacao}</p>
      <div className="intro" >
        <Link to={item.link}>
          <span>{item.introducao}</span>
        </Link>
      </div>
   </div>
  );
}

export default News;
