// Service utility functions for interacting with the API

// Base API URL - using Next.js API routes as a proxy
const API_BASE_URL = '/api/services';

// Type definitions
interface ServiceOrder {
  serviceType: string;
  platform: string;
  url: string;
  quantity: number;
  speed?: string;
  note?: string;
}

interface ServiceResponse {
  success: boolean;
  orderId?: string;
  message: string;
  data?: any;
  error?: string;
}

/**
 * Place a service order
 * @param order Service order details
 * @returns Promise<ServiceResponse>
 */
export async function placeServiceOrder(order: ServiceOrder): Promise<ServiceResponse> {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ServiceResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error placing service order:', error);
    return {
      success: false,
      message: 'Có lỗi xảy ra khi đặt đơn hàng',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get service information
 * @returns Promise<ServiceResponse>
 */
export async function getServices(): Promise<ServiceResponse> {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ServiceResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return {
      success: false,
      message: 'Có lỗi xảy ra khi lấy thông tin dịch vụ',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get service by ID
 * @param serviceId Service ID
 * @returns Promise<ServiceResponse>
 */
export async function getServiceById(serviceId: string): Promise<ServiceResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/${serviceId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ServiceResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching service:', error);
    return {
      success: false,
      message: 'Có lỗi xảy ra khi lấy thông tin dịch vụ',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}