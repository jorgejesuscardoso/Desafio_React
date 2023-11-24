

async function FetchApi(
  type: string,
  page: number,
  date: string,
  subject: string
  ) {
  const handleEndPoint = type ? `tipo=${type}&qtd=15&page=${page}` : `page=${page}&qtd=15`
  const handleDate = date ? `&${date}` : '';
  const handleSubject = subject ? `busca=${subject}` : '';
  const url = `${handleSubject}${handleEndPoint}${handleDate}`
  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?${url}`);
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('erro', error);
    return null; 
  }
}

export default FetchApi;

