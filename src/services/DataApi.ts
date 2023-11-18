
async function FetchApi(type: string, page: number, date: string) {
  const handleEndPoint = type ? `tipo=${type}&qtd=15&page=${page}` : `page=${page}&qtd=15`
  const handleDate = date ? `de=${date}` : '';
  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?${handleEndPoint}&${handleDate}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('erro', error);
    return null; 
  }
}

export default FetchApi;

