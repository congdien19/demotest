"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import { placeServiceOrder } from '@/app/lib/services';

export default function FacebookGroupMember() {
  const [groupUrl, setGroupUrl] = useState('');
  const [quantity, setQuantity] = useState('');
  const [speed, setSpeed] = useState('normal');
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string, text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const orderData = {
        serviceType: 'tang-member-group',
        platform: 'facebook',
        url: groupUrl,
        quantity: parseInt(quantity),
        speed: speed,
        note: note
      };
      
      const response = await placeServiceOrder(orderData);
      
      if (response.success) {
        setSubmitMessage({type: 'success', text: response.message || 'Đơn hàng đã được tạo thành công!'});
        // Reset form
        setGroupUrl('');
        setQuantity('');
        setSpeed('normal');
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
        title="Tăng member group Facebook" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "Dịch vụ Facebook", href: "/service/facebook/tang-member-group" },
          { label: "Tăng member group", isActive: true }
        ]} 
      />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tăng member group Facebook</h4>
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
                          <strong>Link group</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={groupUrl}
                          onChange={(e) => setGroupUrl(e.target.value)}
                          placeholder="https://www.facebook.com/groups/groupname"
                          required
                        />
                        <div className="form-text">
                          Vui lòng nhập link group Facebook cần tăng member
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Số lượng member</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Nhập số lượng member muốn tăng"
                          min="10"
                          required
                        />
                        <div className="form-text">
                          Số lượng tối thiểu: 10 member
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Tốc độ thực hiện</strong>
                        </label>
                        <select
                          className="form-select"
                          value={speed}
                          onChange={(e) => setSpeed(e.target.value)}
                        >
                          <option value="slow">Chậm (1-2 ngày)</option>
                          <option value="normal">Bình thường (6-12 giờ)</option>
                          <option value="fast">Nhanh (1-3 giờ)</option>
                        </select>
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
                        <li>Sao chép link group Facebook cần tăng member</li>
                        <li>Dán link vào ô &quot;Link group&quot;</li>
                        <li>Chọn số lượng member muốn tăng</li>
                        <li>Chọn tốc độ thực hiện</li>
                        <li>Nhấn "Đặt đơn hàng" để hoàn tất</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Group phải ở chế độ công khai hoặc cho phép người lạ tham gia</li>
                        <li>Không tăng member cho group vi phạm chính sách Facebook</li>
                        <li>Hệ thống sẽ tự động kiểm tra và từ chối đơn hàng không hợp lệ</li>
                        <li>Member sẽ được tăng dần trong thời gian đã chọn</li>
                      </ul>
                    </div>

                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Bảng giá</h5>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Loại member</th>
                              <th>Giá (VNĐ)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Member thường</td>
                              <td>20đ/member</td>
                            </tr>
                            <tr>
                              <td>Member chất lượng cao</td>
                              <td>50đ/member</td>
                            </tr>
                            <tr>
                              <td>Member từ group khác</td>
                              <td>100đ/member</td>
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