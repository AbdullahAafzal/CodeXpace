import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_API_URL || 'https://careers.codexpace.com';

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    
    // Forward the form data to the backend
    const response = await fetch(`${BACKEND_URL}/api/applications/apply/`, {
      method: 'POST',
      body: formData, // FormData can be sent directly
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`Backend error (${response.status}):`, data);
      return NextResponse.json(
        { status: 'error', message: data.message || 'Failed to submit application', details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Proxy error (Apply):', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'An error occurred while proxying the application',
        debug: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
