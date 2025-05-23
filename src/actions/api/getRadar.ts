import {siataApi} from '../../config/api/siataApi';
import {RadarSiata} from '../../infrastructure/interfaces/siata.response';

export const getRadar = async () => {
  try {
    const {data} = await siataApi.get<RadarSiata>('/radar.json');

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};
