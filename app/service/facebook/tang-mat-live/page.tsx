"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import { placeServiceOrder } from '@/app/lib/services';

export default function FacebookLiveEye() {
  const [liveUrl, setLiveUrl] = useState('');
  const [duration, setDuration] = useState('60');
  const [eyeCount, setEyeCount] = useState('100');
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
        serviceType: 'tang-mat-live',
        platform: 'facebook',
        url: liveUrl,
        quantity: parseInt(eyeCount),
        speed: speed,
        note: note
      };
      
      const response = await placeServiceOrder(orderData);
      
      if (response.success) {
        setSubmitMessage({type: 'success', text: response.message || 'Đơn hàng đã được tạo thành công!'});
        // Reset form
        setLiveUrl('');
        setDuration('60');
        setEyeCount('100');
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
        title="Tăng mắt live Facebook" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "Dịch vụ Facebook", href: "/service/facebook/tang-mat-live" },
          { label: "Tăng mắt live", isActive: true }
        ]} 
      />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tăng mắt live Facebook</h4>
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
                          <strong>Link live stream</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={liveUrl}
                          onChange={(e) => setLiveUrl(e.target.value)}
                          placeholder="https://www.facebook.com/username/videos/liveid"
                          required
                        />
                        <div className="form-text">
                          Vui lòng nhập link live stream Facebook cần tăng mắt
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Thời lượng (phút)</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          placeholder="Nhập thời lượng live (tối thiểu 30 phút)"
                          min="30"
                          required
                        />
                        <div className="form-text">
                          Thời lượng tối thiểu: 30 phút
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Số lượng mắt</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={eyeCount}
                          onChange={(e) => setEyeCount(e.target.value)}
                          placeholder="Nhập số lượng mắt muốn tăng"
                          min="50"
                          required
                        />
                        <div className="form-text">
                          Số lượng tối thiểu: 50 mắt
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
                        <li>Sao chép link live stream Facebook cần tăng mắt</li>
                        <li>Dán link vào ô &quot;Link live stream&quot;</li>
                        <li>Chọn thời lượng live (tối thiểu 30 phút)</li>
                        <li>Chọn số lượng mắt muốn tăng</li>
                        <li>Nhấn "Đặt đơn hàng" để hoàn tất</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Live stream phải đang hoạt động</li>
                        <li>Không tăng mắt cho live vi phạm chính sách Facebook</li>
                        <li>Hệ thống sẽ tự động kiểm tra và từ chối đơn hàng không hợp lệ</li>
                        <li>Mắt sẽ được tăng dần trong thời gian live</li>
                      </ul>
                    </div>

                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Bảng giá</h5>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Loại mắt</th>
                              <th>Giá (VNĐ)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Mắt thường</td>
                              <td>50đ/phút</td>
                            </tr>
                            <tr>
                              <td>Mắt chất lượng cao</td>
                              <td>100đ/phút</td>
                            </tr>
                            <tr>
                              <td>Mắt từ group</td>
                              <td>150đ/phút</td>
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