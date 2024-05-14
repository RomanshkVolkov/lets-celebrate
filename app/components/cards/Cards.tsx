import CardDateEvent from './CardDateEvent';
import CardTimeRemaining from './CardTimeRemaining';

export default function Cards() {
   const cardDate = <CardDateEvent />;
   const cardTimeRemaining = <CardTimeRemaining />;
   return {
      cardDate,
      cardTimeRemaining,
   };
}
