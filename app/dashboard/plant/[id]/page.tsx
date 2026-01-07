import Link from 'next/link';
import { db } from '@/lib/db/store';
import { Button } from '@/components/ui/Button';
import { CareTimeline } from '@/components/features/CareTimeline';
import { WeatherWidget } from '@/components/features/WeatherWidget';

export default async function PlantDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const plant = db.getPlantById(id);

    if (!plant) {
        return <div className="container" style={{ padding: '2rem' }}>Plant not found</div>;
    }

    return (
        <div>
            <div style={{ marginBottom: '1rem' }}>
                <Link href="/dashboard" style={{ color: '#6b7280' }}>← Back to My Plants</Link>
            </div>

            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '2rem', alignItems: 'start' }}>

                {/* Left Column: Details & Timeline */}
                <div>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={plant.image}
                            alt={plant.name}
                            style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '1rem' }}
                        />
                        <div>
                            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{plant.name}</h1>
                            <p style={{ color: '#6b7280' }}>Added on {new Date(plant.purchaseDate).toLocaleDateString()}</p>
                            <div className="flex gap-2" style={{ marginTop: '1rem' }}>
                                <Button size="sm">Log Care</Button>
                                <button className="btn btn-secondary">Edit</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                        <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Sunlight</p>
                            <p style={{ fontWeight: '600' }}>☀️ {plant.carePlan?.sunlight}</p>
                        </div>
                        <div style={{ padding: '1rem', background: 'white', borderRadius: '0.5rem' }}>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Water</p>
                            <p style={{ fontWeight: '600' }}>💧 {plant.carePlan?.wateringSchedule}</p>
                        </div>
                    </div>

                    <CareTimeline carePlan={plant.carePlan} />
                </div>

                {/* Right Column: Context & Weather */}
                <div>
                    <WeatherWidget zipCode={plant.zipCode} />

                    <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '1rem', border: '1px solid #ffd700' }}>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>🌟 Plant Wisdom</h4>
                        <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>
                            {plant.carePlan?.seasonalTips[0] || 'Keep an eye on humidity levels this week!'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
