import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { UserPlant } from '@/lib/db/store';
import Link from 'next/link';

export const PlantCard = ({ plant }: { plant: UserPlant }) => {
    return (
        <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: '200px', backgroundColor: '#e5e7eb', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={plant.image}
                    alt={plant.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {plant.healthStatus === 'needs-attention' && (
                    <span style={{ position: 'absolute', top: 10, right: 10, background: 'var(--color-warning)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem' }}>
                        Needs Water
                    </span>
                )}
            </div>
            <div style={{ padding: '1rem' }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{plant.name}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Next water: {new Date(plant.carePlan?.nextWatering || '').toLocaleDateString()}</p>

                <div className="flex gap-2">
                    <Link href={`/dashboard/plant/${plant.id}`} style={{ width: '100%' }}>
                        <Button size="sm" style={{ width: '100%' }}>View Care</Button>
                    </Link>
                    <button className="btn btn-secondary" style={{ padding: '0.5rem' }}>💧</button>
                </div>
            </div>
        </Card>
    );
}
