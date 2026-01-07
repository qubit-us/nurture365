import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="container">
      <header className="flex justify-between items-center" style={{ padding: '2rem 0' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Nurture365 🌿</h1>
        <nav className="flex gap-4">
          <a href="#how-it-works">How It Works</a>
          <a href="/nurseries">For Nurseries</a>
          <Link href="/dashboard"><Button>Try it free</Button></Link>
        </nav>
      </header>

      <main>
        <section className="flex flex-col items-center justify-center text-center" style={{ minHeight: '60vh', gap: '2rem' }}>
          <h2 style={{ fontSize: '3.5rem', fontFamily: 'Poppins, sans-serif', maxWidth: '800px', lineHeight: 1.2 }}>
            Your plants don’t fail. <br />
            <span style={{ color: 'var(--color-primary)' }}>Care does.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}>
            Nurture365 helps every plant thrive after purchase — with climate-aware, personalized care.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard"><Button size="lg" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>Try it free</Button></Link>
            <Link href="/nurseries"><Button variant="secondary">For Nurseries</Button></Link>
          </div>
        </section>

        <section id="how-it-works" style={{ padding: '4rem 0' }}>
          <h3 className="text-center" style={{ fontSize: '2rem', marginBottom: '3rem', fontFamily: 'Poppins, sans-serif' }}>How It Works</h3>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            {/* Steps will go here */}
            <Card style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧾</div>
              <h4>1. Upload Receipt</h4>
              <p>Snap a photo of your nursery receipt.</p>
            </Card>
            <Card style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌦️</div>
              <h4>2. Smart Care Plans</h4>
              <p>Get a plan based on your local weather.</p>
            </Card>
            <Card style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
              <h4>3. Watch Them Thrive</h4>
              <p>Receive timely watering & care alerts.</p>
            </Card>
          </div>
        </section>
      </main>

      <footer className="text-center" style={{ padding: '2rem', color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)' }}>
        <p>© 2026 Nurture365. Built for nurseries & plant lovers.</p>
      </footer>
    </div>
  );
}
