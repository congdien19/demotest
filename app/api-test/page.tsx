"use client";

import React, { useState, useEffect } from 'react';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import { placeServiceOrder, getServices } from '@/app/lib/services';

export default function ApiTest() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<any>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        if (response.success) {
          setServices(response.data || []);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleTestOrder = async () => {
    const testOrder = {
      serviceType: 'tang-like-bai-viet',
      platform: 'facebook',
      url: 'https://www.facebook.com/test/posts/123456789',
      quantity: 100,
      speed: 'normal',
      note: 'Test order'
    };

    try {
      const response = await placeServiceOrder(testOrder);
      setTestResult(response);
    } catch (err) {
      setTestResult({ success: false, message: 'Failed to place test order' });
    }
  };

  return (
    <AppLayout>
      <Breadcrumb 
        title="API Test" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "API Test", isActive: true }
        ]} 
      />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">API Test</h4>
              </div>
              <div className="card-body">
                <h5>Services List</h5>
                {loading ? (
                  <p>Loading services...</p>
                ) : error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <ul>
                    {services.map((service: any) => (
                      <li key={service.id}>
                        {service.name} ({service.platform})
                      </li>
                    ))}
                  </ul>
                )}

                <hr />

                <h5>Test Order Placement</h5>
                <button className="btn btn-primary" onClick={handleTestOrder}>
                  Place Test Order
                </button>

                {testResult && (
                  <div className={`alert alert-${testResult.success ? 'success' : 'danger'} mt-3`}>
                    <h6>Test Result:</h6>
                    <pre>{JSON.stringify(testResult, null, 2)}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}