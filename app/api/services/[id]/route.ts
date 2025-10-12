import { NextRequest, NextResponse } from 'next/server';

// Mock data for services
const mockServices = [
  {
    id: 'facebook-like-post',
    name: 'Tăng like bài viết Facebook',
    platform: 'facebook',
    minQuantity: 100,
    maxQuantity: 10000,
    pricePerUnit: 3
  },
  {
    id: 'instagram-follow',
    name: 'Tăng theo dõi Instagram',
    platform: 'instagram',
    minQuantity: 100,
    maxQuantity: 5000,
    pricePerUnit: 10
  },
  {
    id: 'tiktok-follow',
    name: 'Tăng theo dõi TikTok',
    platform: 'tiktok',
    minQuantity: 100,
    maxQuantity: 5000,
    pricePerUnit: 15
  }
];

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Await the params
    const { id } = await params;
    
    // Find the service by ID
    const service = mockServices.find(s => s.id === id);
    
    if (!service) {
      const response = NextResponse.json(
        { 
          success: false, 
          message: 'Service not found' 
        },
        { status: 404 }
      );
      
      // Add CORS headers to the response
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      return response;
    }
    
    // Return the service data
    const response = NextResponse.json(
      { 
        success: true, 
        data: service 
      }, 
      { status: 200 }
    );
    
    // Add CORS headers to the response
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  } catch (error) {
    console.error('Error fetching service:', error);
    const response = NextResponse.json(
      { 
        success: false, 
        message: 'Có lỗi xảy ra khi lấy thông tin dịch vụ' 
      },
      { status: 500 }
    );
    
    // Add CORS headers to the response
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  }
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS(request: NextRequest) {
  const response = new NextResponse(null, { status: 204 });
  
  // Add CORS headers to the response
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}