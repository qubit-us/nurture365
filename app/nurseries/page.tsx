import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function NurseriesPage() {
    return (
        <div className="container">
            <header className="flex justify-between items-center" style={{ padding: '2rem 0' }}>
                <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Nurture365 🌿</a>
                <nav className="flex gap-4">
                    <a href="/#how-it-works">How It Works</a>
                    <Link href="/"><button className="btn btn-outline" style={{ border: '1px solid var(--color-primary)', color: 'var(--color-primary)' }}>Consumer App</button></Link>
                </nav>
            </header>

            <main style={{ padding: '4rem 0' }}>
                <section className="text-center mb-4">
                    <h1 style={{ fontSize: '3rem', fontFamily: 'Poppins, sans-serif', marginBottom: '1rem' }}>
                        Turn plant buyers into <br /><span style={{ color: 'var(--color-primary)' }}>confident plant parents.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Reduce returns, save staff time, and build customer loyalty with our post-purchase care platform.
                    </p>
                    <Link href="/admin"><Button size="lg">Request Early Access</Button></Link>
                </section>

                <section className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                    <Card>
                        <h3>📉 Reduce Returns</h3>
                        <p>Empower customers with the right care info so plants survive and don't come back.</p>
                    </Card>
                    <Card>
                        <h3>⏱️ Save Staff Time</h3>
                        <p>Stop answering "how often do I water this?" 50 times a day.</p>
                    </Card>
                    <Card>
                        <h3>💚 Build Loyalty</h3>
                        <p>Stay top-of-mind with branded weekly care nudges.</p>
                    </Card>
                </section>
            </main>
        </div>
    );
}
