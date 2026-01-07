import { Card } from '../ui/Card';

export const CareTimeline = ({ carePlan }: { carePlan: any }) => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Care Timeline</h3>

            <div className="timeline" style={{ borderLeft: '2px solid #e5e7eb', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                <div style={{ position: 'relative', marginBottom: '2rem' }}>
                    <div style={{ position: 'absolute', left: '-1.95rem', top: '0.25rem', width: '1rem', height: '1rem', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                    <h4 style={{ fontWeight: 'bold' }}>Today</h4>
                    <Card style={{ marginTop: '0.5rem' }}>
                        <div className="flex items-center gap-3">
                            <span>💧</span>
                            <div>
                                <p style={{ fontWeight: '600' }}>Water Needs Check</p>
                                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Check soil moisture. Water if top inch is dry.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div style={{ position: 'relative', opacity: 0.7 }}>
                    <div style={{ position: 'absolute', left: '-1.95rem', top: '0.25rem', width: '1rem', height: '1rem', background: '#d1d5db', borderRadius: '50%' }}></div>
                    <h4 style={{ fontWeight: 'bold', color: '#6b7280' }}>{new Date(carePlan.nextWatering).toLocaleDateString()}</h4>
                    <div style={{ marginTop: '0.5rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', background: 'white' }}>
                        <p>Next Watering Cycle</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
