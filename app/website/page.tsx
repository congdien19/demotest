"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WebsiteAndAPI() {
  const [apiKey, setApiKey] = useState('sk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  const [domain, setDomain] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleGenerateApiKey = () => {
    // In a real app, this would call an API to generate a new key
    setApiKey('sk_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
  };

  const handleCreateWebsite = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle website creation logic here
    console.log('Create website with domain:', domain);
  };

  return (
    <div id="main-wrapper">
      {/* Page Title */}
      <div className="page-titles">
        <ol className="breadcrumb">
          <li>
            <h5 className="bc-title">Website riêng & API</h5>
          </li>
          <li className="breadcrumb-item">
            <Link href="/home">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.125 6.375L8.5 1.41667L14.875 6.375V14.1667C14.875 14.5424 14.7257 14.9027 14.4601 15.1684C14.1944 15.4341 13.8341 15.5833 13.4583 15.5833H3.54167C3.16594 15.5833 2.80561 15.4341 2.53993 15.1684C2.27426 14.9027 2.125 14.5424 2.125 14.1667V6.375Z"
                  stroke="#2C2C2C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.375 15.5833V8.5H10.625V15.5833"
                  stroke="#2C2C2C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              congdien.vn
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <Link href="/website">Website riêng & API</Link>
          </li>
        </ol>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tạo website riêng</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form onSubmit={handleCreateWebsite}>
                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Tên miền website</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          placeholder="yourdomain.com"
                        />
                        <div className="form-text">
                          Nhập tên miền bạn muốn sử dụng cho website riêng
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Gói website</strong>
                        </label>
                        <select className="form-select">
                          <option value="basic">Cơ bản (Miễn phí)</option>
                          <option value="premium">Cao cấp (50,000đ/tháng)</option>
                          <option value="business">Doanh nghiệp (100,000đ/tháng)</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Tạo website
                      </button>
                    </form>
                  </div>

                  <div className="col-lg-6">
                    <div className="alert alert-info">
                      <h5 className="alert-heading">Hướng dẫn tạo website</h5>
                      <ol>
                        <li>Nhập tên miền bạn muốn sử dụng</li>
                        <li>Chọn gói website phù hợp</li>
                        <li>Nhấn &quot;Tạo website&quot; để hoàn tất</li>
                        <li>Cấu hình DNS theo hướng dẫn</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Bạn cần sở hữu tên miền để sử dụng</li>
                        <li>Website sẽ được tạo miễn phí trong 7 ngày đầu</li>
                        <li>Sau 7 ngày cần nâng cấp để tiếp tục sử dụng</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">API Key</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">
                        <strong>API Key của bạn</strong>
                      </label>
                      <div className="input-group">
                        <input
                          type={showApiKey ? "text" : "password"}
                          className="form-control"
                          value={apiKey}
                          readOnly
                        />
                        <button 
                          className="btn btn-outline-secondary" 
                          type="button" 
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? 'Ẩn' : 'Hiện'}
                        </button>
                      </div>
                      <div className="form-text">
                        Sử dụng API Key này để tích hợp với ứng dụng của bạn
                      </div>
                    </div>

                    <button 
                      type="button" 
                      className="btn btn-danger me-2"
                      onClick={handleGenerateApiKey}
                    >
                      Tạo API Key mới
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Sao chép
                    </button>
                  </div>

                  <div className="col-lg-6">
                    <div className="alert alert-info">
                      <h5 className="alert-heading">Hướng dẫn sử dụng API</h5>
                      <p>
                        API của congdien.vn cho phép bạn tích hợp các dịch vụ của chúng tôi 
                        vào ứng dụng, website hoặc hệ thống của bạn một cách tự động.
                      </p>
                      <p>
                        Tài liệu chi tiết về API có thể được tìm thấy tại: 
                        <a href="#" className="ms-1">https://congdien.vn/api-docs</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tài liệu API</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Endpoint</th>
                        <th>Phương thức</th>
                        <th>Mô tả</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>/api/v1/order</td>
                        <td>POST</td>
                        <td>Tạo đơn hàng mới</td>
                      </tr>
                      <tr>
                        <td>/api/v1/order/status</td>
                        <td>GET</td>
                        <td>Kiểm tra trạng thái đơn hàng</td>
                      </tr>
                      <tr>
                        <td>/api/v1/balance</td>
                        <td>GET</td>
                        <td>Kiểm tra số dư tài khoản</td>
                      </tr>
                      <tr>
                        <td>/api/v1/services</td>
                        <td>GET</td>
                        <td>Lấy danh sách dịch vụ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}