import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex" style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
            {/* Sidebar (Simple MVP) */}
            <aside style={{ width: '250px', backgroundColor: 'white', padding: '2rem', borderRight: '1px solid #e5e7eb', flexShrink: 0 }}>
                <div style={{ marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                    Nurture365 🌿
                </div>
                <nav className="flex flex-col gap-4">
                    <Link href="/dashboard" className="flex items-center gap-2" style={{ fontWeight: 500 }}>
                        <span>🌱</span> My Plants
                    </Link>
                    <Link href="/dashboard/add" className="flex items-center gap-2" style={{ color: '#6b7280' }}>
                        <span>➕</span> Add Plant
                    </Link>
                    <Link href="/dashboard/settings" className="flex items-center gap-2" style={{ color: '#6b7280' }}>
                        <span>⚙️</span> Preferences
                    </Link>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <div className="card" style={{ padding: '1rem', backgroundColor: '#ecfdf5', border: 'none' }}>
                        <p style={{ fontSize: '0.875rem', color: '#047857' }}>☀️ High: 75°F</p>
                        <p style={{ fontSize: '0.75rem', color: '#065f46' }}>Perfect weather!</p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '2rem' }}>
                <header className="flex justify-between items-center mb-4">
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Good Morning, Plant Parent 🌞</h1>
                    <Button size="sm">Add Plant</Button>
                </header>
                {children}
            </main>
        </div>
    );
}
