import { IMessagingAgent } from './types';

export class MockMessagingAgent implements IMessagingAgent {
    craftMessage(template: string, context: any, tone: 'friendly' | 'professional' | 'gen-z'): string {
        const { plantName } = context;

        if (template === 'frost_warning') {
            if (tone === 'gen-z') return `Brrr! 🥶 Bestie, bring ${plantName} inside inside ASAP. It's giving frostbite.`;
            if (tone === 'professional') return `Alert: Frost conditions detected. Please move ${plantName} indoors to prevent damage.`;
            return `Uh oh! It's getting chilly ❄️. Better bring ${plantName} inside tonight!`;
        }

        if (template === 'routine_checkin') {
            if (tone === 'gen-z') return `Vibe check: How's ${plantName} doing? Thriving or bare minimum? 💅`;
            if (tone === 'professional') return `Weekly Check-in: Please verify the health status of ${plantName}.`;
            return `Hi there! 👋 Just checking in on ${plantName}. How are they doing today?`;
        }

        return `Notification regarding ${plantName}.`;
    }
}
