import React from 'react';

const Sidebar = () => {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <a href="/home" className="" aria-expanded="false">
              <div className="menu-icon">
                <img src="/images/svg/application.svg" alt="" />
              </div>
              <span className="nav-text">Trang chủ</span>
            </a>
          </li>
          <li>
            <a href="/user" className="" aria-expanded="false">
              <div className="menu-icon">
                <img src="/images/svg/users.svg" alt="" />
              </div>
              <span className="nav-text">Tài khoản của tôi</span>
            </a>
          </li>
          <li>
            <a
              href="/recharge"
              className=""
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/wallet.svg" alt="" />
              </div>
              <span className="nav-text">Nạp tiền tài khoản</span>
            </a>
          </li>
          <li>
            <a
              href="/website"
              className=""
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/web.svg" alt="" />
              </div>
              <span className="nav-text">Website riêng & API</span>
            </a>
          </li>
          <li>
            <a
              href="/prices"
              className=""
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/price-list.svg" alt="" />
              </div>
              <span className="nav-text">Bảng giá & cấp bậc</span>
            </a>
          </li>
          <li>
            <a
              href="/user/transaction"
              className=""
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/transaction-history.svg" alt="" />
              </div>
              <span className="nav-text">Lịch sử giao dịch</span>
            </a>
          </li>
          <li className="menu-title">Sản phẩm & Dịch vụ</li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/facebook.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Facebook</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a
                  href="/service/facebook/tang-like-bai-viet"
                >
                  Tăng like bài viết
                </a>
              </li>
              <li>
                <a href="/service/facebook/tang-binh-luan">
                  Tăng bình luận
                </a>
              </li>
              <li>
                <a href="/service/facebook/tang-theo-doi">
                  Tăng theo dõi
                </a>
              </li>
              <li>
                <a href="/service/facebook/tang-like-page">
                  Tăng like page
                </a>
              </li>
              <li>
                <a
                  href="/service/facebook/tang-member-group"
                >
                  Tăng member group
                </a>
              </li>
              <li>
                <a href="/service/facebook/tang-mat-live">
                  Tăng mắt live
                </a>
              </li>
              <li>
                <a href="/service/facebook/tang-view-story">
                  Tăng view story
                </a>
              </li>
              <li>
                <a href="/service/facebook/tang-view-video">
                  Tăng view video
                </a>
              </li>
              <li>
                <a href="/service/facebook/vip-like-thang">
                  Vip like tháng
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/instagram.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Instagram</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a
                  href="/service/instagram/tang-like-bai-viet"
                >
                  Tăng like bài viết
                </a>
              </li>
              <li>
                <a href="/service/instagram/tang-theo-doi">
                  Tăng theo dõi
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/tiktok.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Tiktok</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="/service/tiktok/tang-like">
                  Tăng like
                </a>
              </li>
              <li>
                <a href="/service/tiktok/tang-theo-doi">
                  Tăng theo dõi
                </a>
              </li>
              <li>
                <a href="/service/tiktok/tang-view-video">
                  Tăng view video
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/youtube.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Youtube</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="/service/youtube/tang-like">
                  Tăng like
                </a>
              </li>
              <li>
                <a href="/service/youtube/tang-subscribe">
                  Tăng subscribe
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/threads.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Threads</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="/service/threads/tang-like">
                  Tăng like
                </a>
              </li>
              <li>
                <a href="/service/threads/tang-theo-doi">
                  Tăng theo dõi
                </a>
              </li>
              <li>
                <a href="/service/threads/tang-binh-luan">
                  Tăng bình luận
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/shopee.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Shopee</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="/service/shopee/tang-love">
                  Tăng love
                </a>
              </li>
              <li>
                <a href="/service/shopee/tang-theo-doi">
                  Tăng theo dõi
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="has-arrow"
              href="javascript:void(0);"
              aria-expanded="false"
            >
              <div className="menu-icon">
                <img src="/images/svg/lazada.svg?v=1760094802" alt="" />
              </div>
              <span className="nav-text">Dịch vụ Lazada</span>
            </a>
            <ul aria-expanded="false">
              <li>
                <a href="/service/lazada/tang-theo-doi">
                  Tăng theo dõi
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;