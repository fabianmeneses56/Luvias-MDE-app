import {siataApi} from '../../config/api/siataApi';
import {Forecast} from '../../domain/entities/forecast';
import {ForecastSiata} from '../../infrastructure/interfaces/siata.response';
import {ForecastMapper} from '../../infrastructure/mappers/forecast.mapper';

export const getForecastByLocation = async (): Promise<Forecast> => {
  try {
    const {data} = await siataApi.get<ForecastSiata>('/wrfmedCentro.json');

    const forecastFormat = data.pronostico.map(
      ForecastMapper.forecastSiataToEntity,
    );
    const response = {
      date: data.date,
      forecast: [...forecastFormat],
    };

    return response;
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};
