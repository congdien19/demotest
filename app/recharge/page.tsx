"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Recharge() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const handleRecharge = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle recharge logic here
    console.log('Recharge attempt with:', { amount, paymentMethod });
  };

  return (
    <div id="main-wrapper">
      {/* Page Title */}
      <div className="page-titles">
        <ol className="breadcrumb">
          <li>
            <h5 className="bc-title">Nạp tiền tài khoản</h5>
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
            <Link href="/recharge">Nạp tiền tài khoản</Link>
          </li>
        </ol>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Nạp tiền vào tài khoản</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <form onSubmit={handleRecharge}>
                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Số tiền nạp (VNĐ)</strong>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Nhập số tiền muốn nạp"
                          min="10000"
                        />
                        <div className="form-text">
                          Số tiền tối thiểu: 10,000 VNĐ
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <strong>Phương thức thanh toán</strong>
                        </label>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="bankTransfer"
                            value="bank"
                            checked={paymentMethod === 'bank'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="bankTransfer">
                            Chuyển khoản ngân hàng
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="momo"
                            value="momo"
                            checked={paymentMethod === 'momo'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="momo">
                            Ví điện tử Momo
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="zalopay"
                            value="zalopay"
                            checked={paymentMethod === 'zalopay'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="zalopay">
                            Ví điện tử ZaloPay
                          </label>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Tiếp tục
                      </button>
                    </form>
                  </div>

                  <div className="col-lg-6">
                    <div className="alert alert-info">
                      <h5 className="alert-heading">Hướng dẫn nạp tiền</h5>
                      <ol>
                        <li>Nhập số tiền bạn muốn nạp vào tài khoản</li>
                        <li>Chọn phương thức thanh toán phù hợp</li>
                        <li>Nhấn "Tiếp tục" để chuyển đến trang thanh toán</li>
                        <li>Thực hiện thanh toán theo hướng dẫn</li>
                        <li>Sau khi thanh toán thành công, tiền sẽ được cộng vào tài khoản của bạn</li>
                      </ol>
                    </div>

                    <div className="alert alert-warning">
                      <h5 className="alert-heading">Lưu ý</h5>
                      <ul>
                        <li>Chuyển khoản sai nội dung sẽ bị trừ 10% phí xử lý</li>
                        <li>Thời gian xử lý nạp tiền: 5-30 phút</li>
                        <li>Nếu sau 30 phút chưa thấy tiền vào tài khoản, vui lòng liên hệ CSKH</li>
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
                <h4 className="card-title">Thông tin ngân hàng</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Ngân hàng</th>
                        <th>Số tài khoản</th>
                        <th>Chủ tài khoản</th>
                        <th>Chi nhánh</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ngân hàng Vietcombank</td>
                        <td>0123456789</td>
                        <td>HOANG VAN LINH</td>
                        <td>Chi nhánh Hà Nội</td>
                      </tr>
                      <tr>
                        <td>Ngân hàng Techcombank</td>
                        <td>9876543210</td>
                        <td>HOANG VAN LINH</td>
                        <td>Chi nhánh TP.HCM</td>
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