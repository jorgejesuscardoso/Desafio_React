async function FetchApi(page: number) {
  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?page=${page}&qtd=15`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null; 
  }
}

export default FetchApi;

/* export async function ApiPages (page: number) {
  try {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?page=${page}&qtd=10`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null; 
  }
} */
