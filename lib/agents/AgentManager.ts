import { IPlantCareAgent, IWeatherAgent, IMessagingAgent, PlantData, CarePlan, WeatherData } from './types';
import { MockPlantCareAgent } from './MockPlantCareAgent';
import { MockWeatherAgent } from './MockWeatherAgent';
import { MockMessagingAgent } from './MockMessagingAgent';

export class AgentManager {
    private careAgent: IPlantCareAgent;
    private weatherAgent: IWeatherAgent;
    private messagingAgent: IMessagingAgent;

    constructor() {
        // In a real app, we might inject these or load them based on config
        this.careAgent = new MockPlantCareAgent();
        this.weatherAgent = new MockWeatherAgent();
        this.messagingAgent = new MockMessagingAgent();
    }

    async onboardPlant(plant: PlantData): Promise<{ carePlan: CarePlan; weather: WeatherData }> {
        // 1. Get Weather Context
        const weather = await this.weatherAgent.getWeather(plant.zipCode);

        // 2. Generate Initial Care Plan based on Plant + Weather
        const carePlan = await this.careAgent.generateCarePlan(plant, weather);

        return { carePlan, weather };
    }

    async getCheckinUpdate(plant: PlantData): Promise<string> {
        const weather = await this.weatherAgent.getWeather(plant.zipCode);

        // Example logic: if frost warning, trigger messaging agent
        if (weather.frostWarning) {
            return this.messagingAgent.craftMessage('frost_warning', { plantName: plant.name }, 'friendly');
        }

        return this.messagingAgent.craftMessage('routine_checkin', { plantName: plant.name }, 'friendly');
    }
}
