"use client";

import React from 'react';
import Link from 'next/link';

export default function TransactionHistory() {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2025-09-15 14:30:25",
      type: "Nạp tiền",
      amount: "+500,000đ",
      status: "Thành công",
      description: "Nạp tiền qua ngân hàng"
    },
    {
      id: 2,
      date: "2025-09-10 09:15:42",
      type: "Mua dịch vụ",
      amount: "-150,000đ",
      status: "Thành công",
      description: "Tăng like Facebook bài viết"
    },
    {
      id: 3,
      date: "2025-09-05 16:45:18",
      type: "Nạp tiền",
      amount: "+1,000,000đ",
      status: "Thành công",
      description: "Nạp tiền qua ví điện tử"
    },
    {
      id: 4,
      date: "2025-09-01 11:20:33",
      type: "Mua dịch vụ",
      amount: "-300,000đ",
      status: "Thành công",
      description: "Tăng follow Instagram"
    },
    {
      id: 5,
      date: "2025-08-28 13:55:07",
      type: "Nạp tiền",
      amount: "+200,000đ",
      status: "Thành công",
      description: "Nạp tiền qua ngân hàng"
    }
  ];

  return (
    <div id="main-wrapper">
      {/* Page Title */}
      <div className="page-titles">
        <ol className="breadcrumb">
          <li>
            <h5 className="bc-title">Lịch sử giao dịch</h5>
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
            <Link href="/user/transaction">Lịch sử giao dịch</Link>
          </li>
        </ol>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Lịch sử giao dịch</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Thời gian</th>
                        <th>Loại giao dịch</th>
                        <th>Số tiền</th>
                        <th>Trạng thái</th>
                        <th>Mô tả</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>{transaction.date}</td>
                          <td>{transaction.type}</td>
                          <td>
                            <span className={transaction.amount.startsWith('+') ? 'text-success' : 'text-danger'}>
                              {transaction.amount}
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-success">Thành công</span>
                          </td>
                          <td>{transaction.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    Hiển thị 1 đến 5 của 5 kết quả
                  </div>
                  <nav>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>Trước</a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">1</a>
                      </li>
                      <li className="page-item disabled">
                        <a className="page-link" href="#">Sau</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}