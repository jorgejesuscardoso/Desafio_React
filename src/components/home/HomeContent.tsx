import { ContentProps } from "../../type";
import NewsCard from "../card/Card";
import { Card, ErrMsg } from "./Style";

function Content({ items, error, page }: ContentProps) {
  
  return (
    <>
      {error || items.length === 0 ? (
        <ErrMsg>
          <p>
            Procurando por notícias... Isso pode levar um tempo. Procurando na página: {page}.  
          </p>
          <p>Se preferir, recarregue a página.</p>
          <button onClick={() => window.location.reload()} data-testid="reload-home">
            Recarregar
          </button>
        </ErrMsg>
      ) : items.length > 0 
        ? ( items.map((item) => (
          <Card key={item.id}>
            <NewsCard {...item} /> 
          </Card>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}

export default Content;
