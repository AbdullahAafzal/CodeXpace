import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_API_URL || 'https://careers.codexpace.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${BACKEND_URL}/api/applications/inquiry/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

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
