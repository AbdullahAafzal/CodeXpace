import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_API_URL || 'https://careers.codexpace.com';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/applications/postings/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Vercel Proxy)',
      },
      cache: 'no-store',
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
        { status: 'error', message: `Backend returned ${response.status}`, details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error details:', {
      url: `${BACKEND_URL}/api/applications/postings/`,
      error: error instanceof Error ? error.message : error
    });
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'An error occurred while proxying the request',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${BACKEND_URL}/api/applications/postings/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { status: 'error', message: data.message || 'Failed to create job posting' },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error proxying job creation:', error);
    return NextResponse.json(
      { status: 'error', message: 'An error occurred while creating job posting' },
      { status: 500 }
    );
  }
}
