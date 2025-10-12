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

// Mock data for a service order response
const mockOrderResponse = {
  success: true,
  orderId: 'ORD-' + Date.now(),
  message: 'Đơn hàng đã được tạo thành công',
  data: {
    status: 'pending',
    createdAt: new Date().toISOString()
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract service details from the request
    const { serviceType, platform, url, quantity, speed, note } = body;
    
    // Log the request for debugging
    console.log('Service order request:', {
      serviceType,
      platform,
      url,
      quantity,
      speed,
      note
    });
    
    // Return mock response
    const response = NextResponse.json(mockOrderResponse, { status: 200 });
    
    // Add CORS headers to the response
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  } catch (error) {
    console.error('Service order error:', error);
    const response = NextResponse.json(
      { 
        success: false, 
        message: 'Có lỗi xảy ra khi xử lý đơn hàng' 
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

// GET handler for fetching all services
export async function GET(request: NextRequest) {
  try {
    // Return mock services data
    const response = NextResponse.json(
      { 
        success: true, 
        data: mockServices 
      }, 
      { status: 200 }
    );
    
    // Add CORS headers to the response
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    return response;
  } catch (error) {
    console.error('Error fetching services:', error);
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