import { IWeatherAgent, WeatherData } from './types';

export class MockWeatherAgent implements IWeatherAgent {
    async getWeather(zipCode: string): Promise<WeatherData> {
        // Deterministic mock based on zip code parity for demo purposes
        const zipNum = parseInt(zipCode) || 0;
        const isWarm = zipNum % 2 === 0;

        return {
            temp: isWarm ? 75 : 45,
            condition: isWarm ? 'Sunny' : 'Cloudy',
            frostWarning: !isWarm && zipNum < 10000, // simple mock logic
            heatWarning: isWarm && zipNum > 90000
        };
    }
}
