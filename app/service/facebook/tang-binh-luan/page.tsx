"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import { placeServiceOrder } from '@/app/lib/services';

export default function FacebookComment() {
  const [postId, setPostId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [commentType, setCommentType] = useState('normal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string, text: string} | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const orderData = {
        serviceType: 'tang-binh-luan',
        platform: 'facebook',
        url: postId,
        quantity: parseInt(quantity),
        speed: commentType, // Using speed field to store comment type
        note: '' // We could add a note field to the form if needed
      };
      
      const response = await placeServiceOrder(orderData);
      
      if (response.success) {
        setSubmitMessage({type: 'success', text: response.message || 'Đơn hàng đã được tạo thành công!'});
        // Reset form
        setPostId('');
        setQuantity('');
        setCommentType('normal');
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
        title="Tăng bình luận Facebook" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "Dịch vụ Facebook", href: "/service/facebook/tang-binh-luan" },
          { label: "Tăng bình luận", isActive: true }
        ]} 
      />
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Tăng bình luận Facebook</h4>
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
                          <strong>Link bài viết</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={postId}
                          onChange={(e) => setPostId(e.target.value)}
                          placeholder="https://www.facebook.com/username/posts/postid"
                          required
                        />
                        <div className="form-text">
                          Vui lòng nhập link bài viết Facebook cần tăng bình luận
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Số lượng bình luận</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Nhập số lượng bình luận muốn tăng"
                          min="10"
                          required
                        />
                        <div className="form-text">
                          Số lượng tối thiểu: 10 bình luận
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Loại bình luận</strong>
                        </label>
                        <select
                          className="form-select"
                          value={commentType}
                          onChange={(e) => setCommentType(e.target.value)}
                        >
                          <option value="normal">Bình luận thường</option>
                          <option value="emoji">Bình luận có emoji</option>
                          <option value="photo">Bình luận có ảnh</option>
                          <option value="link">Bình luận có link</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Ghi chú</strong>
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Nhập ghi chú nếu có (ví dụ: nội dung bình luận mong muốn)"
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
                        <li>Sao chép link bài viết Facebook cần tăng bình luận</li>
                        <li>Dán link vào ô "Link bài viết"</li>
                        <li>Chọn số lượng bình luận muốn tăng</li>
                        <li>Chọn loại bình luận</li>
                        <li>Nhấn "Đặt đơn hàng" để hoàn tất</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Bài viết phải ở chế độ công khai</li>
                        <li>Không tăng bình luận cho bài viết vi phạm chính sách Facebook</li>
                        <li>Hệ thống sẽ tự động kiểm tra và từ chối đơn hàng không hợp lệ</li>
                        <li>Bình luận sẽ được tăng dần trong thời gian đã chọn</li>
                      </ul>
                    </div>

                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Bảng giá</h5>
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Loại bình luận</th>
                              <th>Giá (VNĐ)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Bình luận thường</td>
                              <td>50đ/comment</td>
                            </tr>
                            <tr>
                              <td>Bình luận có emoji</td>
                              <td>80đ/comment</td>
                            </tr>
                            <tr>
                              <td>Bình luận có ảnh</td>
                              <td>150đ/comment</td>
                            </tr>
                            <tr>
                              <td>Bình luận có link</td>
                              <td>100đ/comment</td>
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