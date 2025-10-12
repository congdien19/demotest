"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import { placeServiceOrder } from '@/app/lib/services';

export default function FacebookVipLike() {
  const [profileUrl, setProfileUrl] = useState('');
  const [packageType, setPackageType] = useState('vip1');
  const [duration, setDuration] = useState('30');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string, text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const orderData = {
        serviceType: 'vip-like-thang',
        platform: 'facebook',
        url: profileUrl,
        quantity: parseInt(duration),
        speed: packageType,
        note: note
      };
      
      const response = await placeServiceOrder(orderData);
      
      if (response.success) {
        setSubmitMessage({type: 'success', text: response.message || 'Đơn hàng đã được tạo thành công!'});
        // Reset form
        setProfileUrl('');
        setPackageType('vip1');
        setDuration('30');
        setNote('');
      } else {
        setSubmitMessage({type: 'error', text: response.message || 'Có lỗi xảy ra khi tạo đơn hàng'});
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitMessage({type: 'error', text: 'Có lỗi xảy ra khi tạo đơn hàng'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppLayout>
      <Breadcrumb 
        title="Vip like tháng Facebook" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "Dịch vụ Facebook", href: "/service/facebook/vip-like-thang" },
          { label: "Vip like tháng", isActive: true }
        ]} 
      />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Vip like tháng Facebook</h4>
              </div>
              <div className="card-body">
                {submitMessage && (
                  <div className={`alert alert-${submitMessage.type === 'success' ? 'success' : 'danger'}`}>
                    {submitMessage.text}
                  </div>
                )}
                
                <div className="row">
                  <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Link profile</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={profileUrl}
                          onChange={(e) => setProfileUrl(e.target.value)}
                          placeholder="https://www.facebook.com/username"
                          required
                        />
                        <div className="form-text">
                          Vui lòng nhập link profile Facebook cần tăng like VIP
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Gói VIP</strong>
                        </label>
                        <select
                          className="form-select"
                          value={packageType}
                          onChange={(e) => setPackageType(e.target.value)}
                        >
                          <option value="vip1">VIP 1 (100 like/ngày)</option>
                          <option value="vip2">VIP 2 (200 like/ngày)</option>
                          <option value="vip3">VIP 3 (500 like/ngày)</option>
                          <option value="vip4">VIP 4 (1000 like/ngày)</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Thời hạn (ngày)</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          placeholder="Nhập số ngày muốn sử dụng VIP"
                          min="30"
                          required
                        />
                        <div className="form-text">
                          Thời hạn tối thiểu: 30 ngày
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Ghi chú</strong>
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Nhập ghi chú nếu có"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        className="btn btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Đang xử lý...' : 'Đặt đơn hàng'}
                      </button>
                    </form>
                  </div>

                  <div className="col-lg-6">
                    <div className="alert alert-info">
                      <h5 className="alert-heading">Hướng dẫn sử dụng</h5>
                      <ol>
                        <li>Sao chép link profile Facebook cần tăng like VIP</li>
                        <li>Dán link vào ô "Link profile"</li>
                        <li>Chọn gói VIP phù hợp</li>
                        <li>Chọn thời hạn sử dụng</li>
                        <li>Nhấn "Đặt đơn hàng" để hoàn tất</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Profile phải ở chế độ công khai</li>
                        <li>Không áp dụng cho profile vi phạm chính sách Facebook</li>
                        <li>Hệ thống sẽ tự động kiểm tra và từ chối đơn hàng không hợp lệ</li>
                        <li>Like VIP sẽ được tăng đều đặn mỗi ngày trong thời hạn sử dụng</li>
                      </ul>
                    </div>

                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Bảng giá</h5>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Gói VIP</th>
                              <th>Like/ngày</th>
                              <th>Giá (VNĐ/tháng)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>VIP 1</td>
                              <td>100</td>
                              <td>300,000đ</td>
                            </tr>
                            <tr>
                              <td>VIP 2</td>
                              <td>200</td>
                              <td>500,000đ</td>
                            </tr>
                            <tr>
                              <td>VIP 3</td>
                              <td>500</td>
                              <td>1,000,000đ</td>
                            </tr>
                            <tr>
                              <td>VIP 4</td>
                              <td>1000</td>
                              <td>1,800,000đ</td>
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
        </div>
      </div>
    </AppLayout>
  );
}