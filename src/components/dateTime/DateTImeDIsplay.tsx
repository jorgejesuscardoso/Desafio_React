import moment from 'moment';
import { DataHour } from '../../type';

const DateTimeDisplay = ({ dateTime }: DataHour) => {
  const dataPublicacaoMoment = moment(dateTime, 'DD/MM/YYYY HH:mm:ss'); // Converte a data para o formato do moment

  const diferencaHoras = moment().diff(dataPublicacaoMoment, 'hours'); // Calcula a diferença entre a data atual e a data da publicação
  
  let descricao = ''; // Armazena a descrição da data

  if (diferencaHoras < 1) {
    descricao = 'publicado agora'; // Se a diferença for menor que 1 hora, a notícia foi publicada agora
  } else if (diferencaHoras < 24) {
    descricao = `Publicado há: ${diferencaHoras} horas atrás`; // Se a diferença for menor que 24 horas, a notícia foi publicada há x horas
  } else {
    const diferencaDias = moment().diff(dataPublicacaoMoment, 'days'); // Calcula a diferença entre a data atual e a data da publicação

    if (diferencaDias < 7) { // Se a diferença for menor que 7 dias, a notícia foi publicada há x dias
      descricao = `Publicado há: ${diferencaDias} dias atrás`;
    } else {
      const diferencaSemanas = moment().diff(dataPublicacaoMoment, 'weeks'); 
      if (diferencaSemanas < 4) {
        descricao = `Publicado há: ${diferencaSemanas} semana(s) atrás`; // Se a diferença for menor que 4 semanas, a notícia foi publicada há x semanas
      } else {
        const diferencaMeses = moment().diff(dataPublicacaoMoment, 'months');
        if (diferencaMeses < 12) {
          descricao = `Publicado há: ${diferencaMeses} mês(es) atrás`; // Se a diferença for menor que 12 meses, a notícia foi publicada há x meses
        } else {
          const diferencaAnos = moment().diff(dataPublicacaoMoment, 'years');
          const diferencaMesesRestantes = moment().diff(dataPublicacaoMoment, 'months') - (diferencaAnos * 12); 
          descricao = `Publicado há: ${diferencaAnos} ano(s) e ${diferencaMesesRestantes} mês(es) atrás`; // Se a diferença for maior que 12 meses, a notícia foi publicada há x anos e y meses
        }
      }
    }
  }

  return (
    <div className='date-time'>
      <span>
       {descricao}
      </span>
    </div>
  );
};

export default DateTimeDisplay;
