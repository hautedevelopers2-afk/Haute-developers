export async function sendLeadToCrm({ name, mobile, email, project, message, plotSize }) {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, mobile, email, project, message, plotSize,
        source: typeof window !== 'undefined' ? window.location.pathname : '',
      }),
    })
    return res.ok
  } catch {
    return false
  }
}