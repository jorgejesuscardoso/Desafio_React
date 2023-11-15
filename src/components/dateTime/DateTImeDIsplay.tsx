import moment from 'moment';
import { dataHour } from '../../type';

// Converte para um formato de data mais legível 

const DateTimeDisplay = ({ dateTime }: dataHour) => {
  const dataPublicacaoMoment = moment(dateTime, 'DD/MM/YYYY HH:mm:ss');
  const diferencaHoras = moment().diff(dataPublicacaoMoment, 'hours');
  const descricao = diferencaHoras > 0 ? `${diferencaHoras} horas atrás` : 'publicado agora';

  return (
    <div className='date-time'>
      <span>{descricao}</span>
    </div>
  );
};

export default DateTimeDisplay;
