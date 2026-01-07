export interface PlantData {
    name: string;
    scientificName?: string;
    purchaseDate: string; // ISO Date
    nurseryId?: string;
    zipCode: string;
}

export interface CarePlan {
    wateringSchedule: string; // e.g., "Every 7 days"
    sunlight: string;
    fertilizer: string;
    nextWatering: string; // ISO Date
    seasonalTips: string[];
}

export interface WeatherData {
    temp: number;
    condition: string; // 'Sunny', 'Rainy', etc.
    frostWarning: boolean;
    heatWarning: boolean;
}

export interface Notification {
    type: 'sms' | 'email';
    content: string;
    tone: 'friendly' | 'professional' | 'gen-z';
}

// Agent Interfaces

export interface IPlantCareAgent {
    generateCarePlan(plant: PlantData, weather: WeatherData): Promise<CarePlan>;
}

export interface IWeatherAgent {
    getWeather(zipCode: string): Promise<WeatherData>;
}

export interface IMessagingAgent {
    craftMessage(template: string, context: any, tone: 'friendly' | 'professional' | 'gen-z'): string;
}
