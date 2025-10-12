"use client";

import React from 'react';
import Link from 'next/link';

export default function UserProfile() {
  return (
    <div id="main-wrapper">
      {/* Page Title */}
      <div className="page-titles">
        <ol className="breadcrumb">
          <li>
            <h5 className="bc-title">Tài khoản của tôi</h5>
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
            <Link href="/user">Tài khoản của tôi</Link>
          </li>
        </ol>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Thông tin tài khoản</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="text-center">
                      <img
                        src="/images/profile/profile.png"
                        className="rounded-circle mb-3"
                        alt="Profile"
                        width="150"
                      />
                      <h4>Khách hàng</h4>
                      <p className="text-muted">Chưa đăng nhập</p>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          <strong>Họ và tên</strong>
                        </label>
                        <p>Chưa cập nhật</p>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          <strong>Email</strong>
                        </label>
                        <p>Chưa cập nhật</p>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          <strong>Số điện thoại</strong>
                        </label>
                        <p>Chưa cập nhật</p>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          <strong>Ngày đăng ký</strong>
                        </label>
                        <p>Chưa cập nhật</p>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          <strong>Cấp bậc</strong>
                        </label>
                        <p>Thành viên mới</p>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label className="form-label">
                          <strong>Trạng thái</strong>
                        </label>
                        <p>
                          <span className="badge badge-danger">Chưa xác minh</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link href="/auth/login" className="btn btn-primary">
                        Đăng nhập để cập nhật thông tin
                      </Link>
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
                <h4 className="card-title">Thông tin tài chính</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 mb-3">
                    <div className="card bg-primary text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">Số dư tài khoản</h5>
                        <h2>0 VNĐ</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="card bg-success text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">Tổng nạp</h5>
                        <h2>0 VNĐ</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="card bg-info text-white">
                      <div className="card-body text-center">
                        <h5 className="card-title">Tổng tiêu</h5>
                        <h2>0 VNĐ</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link href="/recharge" className="btn btn-primary">
                    Nạp tiền ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}