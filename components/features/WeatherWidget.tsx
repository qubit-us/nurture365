import { Card } from '../ui/Card';

export const WeatherWidget = ({ zipCode }: { zipCode: string }) => {
    // Mock data, in real app would use the Agent/API
    return (
        <Card className="bg-gradient-to-br from-blue-50 to-white">
            <div className="flex justify-between items-center mb-2">
                <h4 style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Local Weather ({zipCode})</h4>
                <span style={{ fontSize: '1.5rem' }}>☀️</span>
            </div>
            <div className="flex items-end gap-2">
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>72°F</span>
                <span style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Sunny</span>
            </div>
            <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: '8px', fontSize: '0.875rem' }}>
                <p><strong>Manager Tip:</strong> Perfect day to water outdoor plants! 💧</p>
            </div>
        </Card>
    );
};
