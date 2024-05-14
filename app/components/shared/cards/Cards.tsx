import { FaArrowDown } from 'react-icons/fa';
import CenterCard from './CenterCard';
import { dateFormater } from '@/utils/date-formats';
import React from 'react';
import CardDateEvent from './CardDateEvent';

export default function Cards() {
   const CardDate = <CardDateEvent />;

   return {
      CardDate,
   };
}
