import moment from 'moment';
import { DataHour } from '../../type';

const DateTimeDisplay = ({ dateTime }: DataHour) => {
  const dataPublicacaoMoment = moment(dateTime, 'DD/MM/YYYY HH:mm:ss'); // Converte a data para o formato do moment

  const diferencaHoras = moment().diff(dataPublicacaoMoment, 'hours'); 
  
  let descricao = ''; 

  if (diferencaHoras < 1) {
    descricao = 'publicado agora'; 
  } else if (diferencaHoras < 24) {
    descricao = `Publicado há: ${diferencaHoras} horas atrás`; 
  } else {
    const diferencaDias = moment().diff(dataPublicacaoMoment, 'days'); 

    if (diferencaDias < 7) { 
      descricao = `Publicado há: ${diferencaDias} dias atrás`;
    } else {
      const diferencaSemanas = moment().diff(dataPublicacaoMoment, 'weeks'); 

      if (diferencaSemanas < 4) {
        descricao = `Publicado há: ${diferencaSemanas} semana(s) atrás`; 
      } else {
        const diferencaMeses = moment().diff(dataPublicacaoMoment, 'months');
        
        if (diferencaMeses < 12) {
          descricao = `Publicado há: ${diferencaMeses} mês(es) atrás`; 
        } else {
          const diferencaAnos = moment().diff(dataPublicacaoMoment, 'years');
          const diferencaMesesRestantes = moment().diff(dataPublicacaoMoment, 'months') - (diferencaAnos * 12); 
          descricao = `Publicado há: ${diferencaAnos} ano(s) e ${diferencaMesesRestantes} mês(es) atrás`; 
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
