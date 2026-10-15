import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body.name || '').trim();
    const mobile = String(body.mobile || '').replace(/\D/g, '').slice(-10);

    if (!name || !/^\d{10}$/.test(mobile)) {
      return NextResponse.json({ error: 'Invalid name or mobile' }, { status: 400 });
    }

    const payload = {
      name,
      mobile: Number(mobile),
      ...(body.email && { email: String(body.email).trim() }),
      ...(body.project && { detail1: String(body.project) }),
      ...(body.message && { detail2: String(body.message) }),
      ...(body.plotSize && { detail3: String(body.plotSize) }),
      ...(body.source && { detail4: String(body.source) }),
    };

    const res = await fetch(process.env.NEODOVE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error('Neodove error:', res.status, text);
      return NextResponse.json({ error: 'CRM rejected the lead' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Lead API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}