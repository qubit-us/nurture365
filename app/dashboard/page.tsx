import { db } from '../../lib/db/store';
import { PlantCard } from '../../components/features/PlantCard';

export default function DashboardPage() {
    const plants = db.getPlants();

    // Simple client-side data fetching simulation (Server Component in Next.js serves this directly)

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {plants.map(plant => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}

                {/* "Empty State" or "Add New" Card if needed, but we have data */}
            </div>

            {plants.length === 0 && (
                <div className="text-center" style={{ padding: '4rem' }}>
                    <p>You don't have any plants yet!</p>
                </div>
            )}
        </div>
    );
}
