"use client";

import { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';

export default function AddPlantPage() {
    const [isUploading, setIsUploading] = useState(false);
    const [ocrResult, setOcrResult] = useState<any>(null);

    const handleUpload = () => {
        setIsUploading(true);
        // Simulate OCR delay
        setTimeout(() => {
            setIsUploading(false);
            setOcrResult({
                date: '2026-01-05',
                nursery: 'Green Thumb Nursery',
                items: [
                    { name: 'Fiddle Leaf Fig', sku: '12345' },
                    { name: 'Potting Mix', sku: '999' }
                ]
            });
        }, 2000);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Add New Plant</h2>

            <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Receipt Upload Option */}
                <Card style={{ textAlign: 'center', padding: '3rem 2rem', border: '2px dashed #ccc' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧾</div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Scan Receipt</h3>
                    <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                        Upload a photo of your receipt. We'll automatically find your plant details.
                    </p>

                    {!ocrResult ? (
                        <Button onClick={handleUpload} disabled={isUploading}>
                            {isUploading ? 'Scanning...' : 'Upload Photo'}
                        </Button>
                    ) : (
                        <div style={{ textAlign: 'left', backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px' }}>
                            <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '0.5rem' }}>✓ Scanned Successfully!</p>
                            <div style={{ marginBottom: '1rem' }}>
                                <strong>Found:</strong>
                                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                                    {ocrResult.items.map((item: any, i: number) => (
                                        <li key={i}>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <Button style={{ width: '100%' }}>Import Plants</Button>
                        </div>
                    )}
                </Card>

                {/* Manual Add Option */}
                <Card style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Search Manually</h3>
                    <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
                        Find your plant in our database by name.
                    </p>
                    <Button variant="secondary">Search Plants</Button>
                </Card>
            </div>
        </div>
    );
}
