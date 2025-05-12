import {ForecastApi} from '../../domain/entities/forecast';
import {ForecastSiataDetails} from '../interfaces/siata.response';

export class ForecastMapper {
  static forecastSiataToEntity(
    forecastSiata: ForecastSiataDetails,
  ): ForecastApi {
    return {
      date: forecastSiata.fecha,
      maxTemperature: forecastSiata.temperatura_maxima,
      minTemperature: forecastSiata.temperatura_minima,
      earlyMorningRain: forecastSiata.lluvia_madrugada,
      morningRain: forecastSiata.lluvia_mannana,
      afternoonRain: forecastSiata.lluvia_tarde,
      nightRain: forecastSiata.lluvia_noche,
    };
  }
}
