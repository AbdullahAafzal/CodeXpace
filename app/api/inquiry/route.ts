import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = (process.env.BACKEND_API_URL || 'https://careers.codexpace.com').replace(/\/$/, '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${BACKEND_URL}/api/applications/inquiry/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Vercel Proxy)',
      },
      body: JSON.stringify(body),
    });

    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error(`Backend returned non-JSON response (${response.status}):`, text.substring(0, 200));
      return NextResponse.json(
        { 
          status: 'error', 
          message: `Backend returned ${response.status}`, 
          debug: 'Response was not JSON. Check backend logs.' 
        },
        { status: response.status }
      );
    }

    if (!response.ok) {
      console.error(`Backend error (${response.status}):`, data);
      return NextResponse.json(
        { status: 'error', message: data.message || 'Failed to submit inquiry', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error (Inquiry):', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'An error occurred while proxying the inquiry',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
