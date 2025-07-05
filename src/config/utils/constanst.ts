import {ImageSourcePropType} from 'react-native';
import {ProbabilityWeather} from '../../infrastructure/interfaces/components';

export const arrayLocations = [
  {
    path: 'wrfmedCentro.json',
    name: 'Medellin centro',
  },
  {
    path: 'wrfmedOriente.json',
    name: 'Medellin oriente',
  },
  {
    name: 'Medellin occidente',
    path: 'wrfmedOccidente.json',
  },
  {
    path: 'wrfgirardota.json',
    name: 'Girardota',
  },
  {
    path: 'wrfpalmitas.json',
    name: 'Palmitas',
  },
  {
    path: 'wrfbarbosa.json',
    name: 'Barbosa',
  },
  {
    path: 'wrfcaldas.json',
    name: 'Caldas',
  },
  {
    path: 'wrfcopacabana.json',
    name: 'Copacabana',
  },
  {
    path: 'wrflaestrella.json',
    name: 'La estrella',
  },
  {
    path: 'wrfitagui.json',
    name: 'Itagui',
  },
  {
    path: 'wrfbello.json',
    name: 'Bello',
  },
  {
    path: 'wrfenvigado.json',
    name: 'Envigado',
  },
  {
    path: 'wrfsabaneta.json',
    name: 'Sabaneta',
  },
];

export const appColor = '#228997';

export const iconMapDay: Record<ProbabilityWeather, ImageSourcePropType> = {
  BAJA: require('../../assets/icons/daySun.png'),
  MEDIA: require('../../assets/icons/dayRain.png'),
  ALTA: require('../../assets/icons/dayStorm.png'),
};
export const iconMapNight: Record<ProbabilityWeather, ImageSourcePropType> = {
  BAJA: require('../../assets/icons/nightMoon.png'),
  MEDIA: require('../../assets/icons/nightRain.png'),
  ALTA: require('../../assets/icons/nightStorm.png'),
};

export const dayMoment = {
  afternoonRain: 'Tarde',
  earlyMorningRain: 'Madrugada',
  morningRain: 'Mañana',
  nightRain: 'Noche',
};
