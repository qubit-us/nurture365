import { Card } from '../../components/ui/Card';

export default function AdminPage() {
    return (
        <div className="container" style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Nursery Dashboard 🏪</h1>

            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                <Card>
                    <h3>Active Plants</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>1,248</p>
                </Card>
                <Card>
                    <h3>Return Risk</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'orange' }}>3.2%</p>
                </Card>
                <Card>
                    <h3>Emails Sent</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>5,402</p>
                </Card>
                <Card>
                    <h3>Survival Rate</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'green' }}>96%</p>
                </Card>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent Customer Activity</h2>
            <div style={{ background: 'white', borderRadius: '1rem', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                            <th style={{ padding: '1rem' }}>Customer</th>
                            <th style={{ padding: '1rem' }}>Plant</th>
                            <th style={{ padding: '1rem' }}>Status</th>
                            <th style={{ padding: '1rem' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '1rem' }}>Alice Bowman</td>
                            <td style={{ padding: '1rem' }}>Monstera Deliciosa</td>
                            <td style={{ padding: '1rem' }}><span style={{ background: '#dcfce7', color: '#166534', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.875rem' }}>Thriving</span></td>
                            <td style={{ padding: '1rem' }}>Jan 5</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '1rem' }}>John Smith</td>
                            <td style={{ padding: '1rem' }}>Ficus Lyrata</td>
                            <td style={{ padding: '1rem' }}><span style={{ background: '#fef9c3', color: '#854d0e', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.875rem' }}>Needs Check</span></td>
                            <td style={{ padding: '1rem' }}>Jan 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
