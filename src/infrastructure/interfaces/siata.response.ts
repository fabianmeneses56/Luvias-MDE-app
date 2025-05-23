export interface ForecastSiata {
  date: string;
  pronostico: ForecastSiataDetails[];
}

export interface ForecastSiataDetails {
  fecha: string;
  temperatura_maxima: string;
  temperatura_minima: string;
  lluvia_madrugada: string;
  lluvia_mannana: string;
  lluvia_tarde: string;
  lluvia_noche: string;
}

export interface RadarSiata {
  north: number;
  south: number;
  east: number;
  west: number;
  url: string;
}
