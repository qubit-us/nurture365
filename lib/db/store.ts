import { PlantData, CarePlan } from '../agents/types';

export interface UserPlant extends PlantData {
    id: string;
    image?: string; // URL or placeholder
    carePlan?: CarePlan;
    healthStatus?: 'healthy' | 'needs-attention' | 'critical';
}

// Initial Mock Data
const INITIAL_PLANTS: UserPlant[] = [
    {
        id: '1',
        name: 'Monstera Deliciosa',
        zipCode: '90210',
        purchaseDate: '2025-12-01',
        image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400',
        healthStatus: 'healthy',
        carePlan: {
            wateringSchedule: 'Every 7-10 days',
            sunlight: 'Bright indirect light',
            fertilizer: 'Monthly',
            nextWatering: '2026-01-08',
            seasonalTips: ['Dust leaves regularly']
        }
    },
    {
        id: '2',
        name: 'Snake Plant',
        zipCode: '90210',
        purchaseDate: '2025-11-15',
        image: 'https://images.unsplash.com/photo-1599598425947-d34937222488?auto=format&fit=crop&q=80&w=400',
        healthStatus: 'healthy',
        carePlan: {
            wateringSchedule: 'Every 2-3 weeks',
            sunlight: 'Low to bright indirect',
            fertilizer: 'Rarely',
            nextWatering: '2026-01-20',
            seasonalTips: ['Avoid overwatering in winter']
        }
    }
];

// Simple in-memory store (resets on server restart)
export const db = {
    plants: [...INITIAL_PLANTS],

    getPlants: () => db.plants,

    addPlant: (plant: UserPlant) => {
        db.plants.push(plant);
        return plant;
    },

    getPlantById: (id: string) => db.plants.find(p => p.id === id)
};
