"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import { placeServiceOrder } from '@/app/lib/services';

export default function TikTokVideoView() {
  const [videoUrl, setVideoUrl] = useState('');
  const [quantity, setQuantity] = useState('');
  const [speed, setSpeed] = useState('normal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string, text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const orderData = {
        serviceType: 'tang-view-video',
        platform: 'tiktok',
        url: videoUrl,
        quantity: parseInt(quantity),
        speed: speed,
        note: '' // We could add a note field to the form if needed
      };
      
      const response = await placeServiceOrder(orderData);
      
      if (response.success) {
        setSubmitMessage({type: 'success', text: response.message || 'Đơn hàng đã được tạo thành công!'});
        // Reset form
        setVideoUrl('');
        setQuantity('');
        setSpeed('normal');
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
        title="Tăng view video TikTok" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "Dịch vụ TikTok", href: "/service/tiktok/tang-view-video" },
          { label: "Tăng view video", isActive: true }
        ]} 
      />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tăng view video TikTok</h4>
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
                          <strong>Link video</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                          placeholder="https://www.tiktok.com/@username/video/videoid"
                          required
                        />
                        <div className="form-text">
                          Vui lòng nhập link video TikTok cần tăng view
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Số lượng view</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Nhập số lượng view muốn tăng"
                          min="1000"
                          required
                        />
                        <div className="form-text">
                          Số lượng tối thiểu: 1000 view
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
                        <li>Sao chép link video TikTok cần tăng view</li>
                        <li>Dán link vào ô "Link video"</li>
                        <li>Chọn số lượng view muốn tăng</li>
                        <li>Chọn tốc độ thực hiện</li>
                        <li>Nhấn "Đặt đơn hàng" để hoàn tất</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Video phải ở chế độ công khai</li>
                        <li>Không tăng view cho video vi phạm chính sách TikTok</li>
                        <li>Hệ thống sẽ tự động kiểm tra và từ chối đơn hàng không hợp lệ</li>
                        <li>View sẽ được tăng dần trong thời gian đã chọn</li>
                      </ul>
                    </div>

                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Bảng giá</h5>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Loại view</th>
                              <th>Giá (VNĐ)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>View thường</td>
                              <td>1đ/view</td>
                            </tr>
                            <tr>
                              <td>View chất lượng cao</td>
                              <td>3đ/view</td>
                            </tr>
                            <tr>
                              <td>View từ tài khoản thật</td>
                              <td>5đ/view</td>
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