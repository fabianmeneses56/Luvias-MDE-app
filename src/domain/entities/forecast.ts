export interface Forecast {
  date: string;
  forecast: ForecastApi[];
}

export interface ForecastApi {
  date: string;
  maxTemperature: string;
  minTemperature: string;
  earlyMorningRain: string;
  morningRain: string;
  afternoonRain: string;
  nightRain: string;
}
