import {dayMoment} from '../../config/utils/constanst';
import {Forecast} from '../../domain/entities/forecast';

export type ProbabilityWeather = 'BAJA' | 'MEDIA' | 'ALTA';

export interface PropsCustomCards {
  dayMoment?: string;
  data?: ProbabilityWeather;
}

export interface PropsForecastView {
  data: Forecast;
}

type TimeOfDayKey = keyof typeof dayMoment;
export const dayMomentOptionsArray: TimeOfDayKey[] = Object.keys(
  dayMoment,
) as TimeOfDayKey[];
