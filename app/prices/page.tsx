"use client";

import React from 'react';
import Link from 'next/link';

export default function Prices() {
  // Sample pricing data
  const pricingData = [
    {
      id: 1,
      name: "Thành viên mới",
      price: "Miễn phí",
      benefits: [
        "Sử dụng dịch vụ cơ bản",
        "Hỗ trợ 24/7",
        "Tối đa 10 đơn hàng/ngày"
      ],
      color: "primary"
    },
    {
      id: 2,
      name: "Thành viên Bạc",
      price: "500,000đ/tháng",
      benefits: [
        "Tất cả dịch vụ cơ bản",
        "Hỗ trợ 24/7",
        "Tối đa 50 đơn hàng/ngày",
        "Giảm 5% phí dịch vụ"
      ],
      color: "secondary"
    },
    {
      id: 3,
      name: "Thành viên Vàng",
      price: "1,000,000đ/tháng",
      benefits: [
        "Tất cả dịch vụ",
        "Hỗ trợ 24/7",
        "Không giới hạn đơn hàng",
        "Giảm 10% phí dịch vụ",
        "Ưu tiên xử lý đơn hàng"
      ],
      color: "warning"
    },
    {
      id: 4,
      name: "Thành viên Kim Cương",
      price: "2,000,000đ/tháng",
      benefits: [
        "Tất cả dịch vụ",
        "Hỗ trợ 24/7",
        "Không giới hạn đơn hàng",
        "Giảm 15% phí dịch vụ",
        "Ưu tiên xử lý đơn hàng",
        "Hỗ trợ riêng từ CSKH"
      ],
      color: "info"
    }
  ];

  return (
    <div id="main-wrapper">
      {/* Page Title */}
      <div className="page-titles">
        <ol className="breadcrumb">
          <li>
            <h5 className="bc-title">Bảng giá & cấp bậc</h5>
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
              SubGiaRe.Vn
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <Link href="/prices">Bảng giá & cấp bậc</Link>
          </li>
        </ol>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Bảng giá dịch vụ</h4>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <h5 className="alert-heading">Thông tin quan trọng</h5>
                  <p>
                    Bảng giá dưới đây áp dụng cho tất cả các dịch vụ của SubGiaRe.Vn. 
                    Giá có thể thay đổi tùy theo từng thời điểm và chương trình khuyến mãi.
                  </p>
                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Dịch vụ</th>
                        <th>Giá cơ bản (VNĐ)</th>
                        <th>Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Tăng like Facebook bài viết</td>
                        <td>3đ - 10đ/like</td>
                        <td>Tùy chất lượng like</td>
                      </tr>
                      <tr>
                        <td>Tăng bình luận Facebook</td>
                        <td>50đ - 200đ/comment</td>
                        <td>Tùy chất lượng comment</td>
                      </tr>
                      <tr>
                        <td>Tăng follow Facebook</td>
                        <td>5đ - 20đ/follow</td>
                        <td>Tùy chất lượng follow</td>
                      </tr>
                      <tr>
                        <td>Tăng like page Facebook</td>
                        <td>10đ - 50đ/like</td>
                        <td>Tùy chất lượng like</td>
                      </tr>
                      <tr>
                        <td>Tăng member group Facebook</td>
                        <td>20đ - 100đ/member</td>
                        <td>Tùy chất lượng member</td>
                      </tr>
                      <tr>
                        <td>Tăng follow Instagram</td>
                        <td>10đ - 50đ/follow</td>
                        <td>Tùy chất lượng follow</td>
                      </tr>
                      <tr>
                        <td>Tăng like Instagram bài viết</td>
                        <td>5đ - 20đ/like</td>
                        <td>Tùy chất lượng like</td>
                      </tr>
                      <tr>
                        <td>Tăng follow TikTok</td>
                        <td>15đ - 80đ/follow</td>
                        <td>Tùy chất lượng follow</td>
                      </tr>
                      <tr>
                        <td>Tăng like TikTok</td>
                        <td>2đ - 10đ/like</td>
                        <td>Tùy chất lượng like</td>
                      </tr>
                      <tr>
                        <td>Tăng view video TikTok</td>
                        <td>1đ - 5đ/view</td>
                        <td>Tùy chất lượng view</td>
                      </tr>
                      <tr>
                        <td>Tăng subscribe YouTube</td>
                        <td>50đ - 500đ/subscribe</td>
                        <td>Tùy chất lượng subscribe</td>
                      </tr>
                      <tr>
                        <td>Tăng like YouTube</td>
                        <td>20đ - 200đ/like</td>
                        <td>Tùy chất lượng like</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Cấp bậc thành viên</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  {pricingData.map((plan) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={plan.id}>
                      <div className={`card border-${plan.color}`}>
                        <div className={`card-header bg-${plan.color} text-white`}>
                          <h5 className="mb-0">{plan.name}</h5>
                        </div>
                        <div className="card-body">
                          <div className="price mb-3">
                            <h3 className="text-primary">{plan.price}</h3>
                          </div>
                          <ul className="list-unstyled">
                            {plan.benefits.map((benefit, index) => (
                              <li key={index} className="mb-2">
                                <i className="fa fa-check text-success me-2"></i>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                          <div className="text-center mt-4">
                            <Link href="/auth/register" className={`btn btn-${plan.color}`}>
                              Đăng ký ngay
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}