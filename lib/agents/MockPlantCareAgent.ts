import { IPlantCareAgent, PlantData, WeatherData, CarePlan } from './types';

export class MockPlantCareAgent implements IPlantCareAgent {
    async generateCarePlan(plant: PlantData, weather: WeatherData): Promise<CarePlan> {
        // Mock logic based on plant name detection (simple includes check)
        const name = plant.name.toLowerCase();

        let plan: CarePlan = {
            wateringSchedule: 'Every 7 days',
            sunlight: 'Indirect bright light',
            fertilizer: 'Once a month in growing season',
            nextWatering: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            seasonalTips: ['Keep away from drafty windows']
        };

        if (name.includes('succulent') || name.includes('cactus')) {
            plan.wateringSchedule = 'Every 14-21 days';
            plan.sunlight = 'Direct sunlight';
        } else if (name.includes('fern')) {
            plan.wateringSchedule = 'Every 3-4 days (keep moist)';
            plan.sunlight = 'Shade / Low light';
        }

        return plan;
    }
}
