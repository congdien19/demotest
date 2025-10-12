import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <form>
                <div className="input-group search-area">
                  <span className="input-group-text">
                    <button className="bg-transparent border-0">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.78605"
                          cy="8.78605"
                          r="8.23951"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.5168 14.9447L17.7471 18.1667"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <ul className="navbar-nav header-right">
              <li className="nav-item dropdown notification_dropdown">
                <a
                  className="nav-link bell dz-fullscreen"
                  href="javascript:void(0);"
                >
                  <svg
                    id="icon-full"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path
                      d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                      style={{ strokeDasharray: "37, 57", strokeDashoffset: 0 }}
                    ></path>
                  </svg>
                  <svg
                    id="icon-minimize"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="A098AE"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-minimize"
                  >
                    <path
                      d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                      style={{ strokeDasharray: "37, 57", strokeDashoffset: 0 }}
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="nav-item ps-3">
                <div className="dropdown header-profile2">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="header-info2 d-flex align-items-center">
                      <div className="header-media">
                        <img src="/images/tab/1.jpg" alt="" />
                      </div>
                      <div className="header-info">
                        <h6>Khách hàng truy cập</h6>
                        <p>Chưa đăng nhập</p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="card border-0 mb-0">
                      <div className="card-header py-2">
                        <div className="products">
                          <img
                            src="/images/tab/1.jpg"
                            className="avatar avatar-md"
                            alt=""
                          />
                          <div>
                            <h6>Khách hàng truy cập</h6>
                            <span>Chưa đăng nhập</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body px-0 py-2">
                        <a
                          href="/auth/login"
                          className="dropdown-item ai-icon"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.8125 12.0218H3.77148"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.8848 9.10577L15.8128 12.0218L12.8848 14.9378"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.50439 7.38897V6.45597C8.50439 4.42097 10.1534 2.77197 12.1894 2.77197H17.0734C19.1034 2.77197 20.7484 4.41697 20.7484 6.44697V17.587C20.7484 19.622 19.0984 21.272 17.0634 21.272H12.1784C10.1494 21.272 8.50439 19.626 8.50439 17.597V16.655"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span className="ms-2">Đăng nhập </span>
                        </a>
                        <a
                          href="/auth/register"
                          className="dropdown-item ai-icon"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.59151 15.2068C13.2805 15.2068 16.4335 15.7658 16.4335 17.9988C16.4335 20.2318 13.3015 20.8068 9.59151 20.8068C5.90151 20.8068 2.74951 20.2528 2.74951 18.0188C2.74951 15.7848 5.88051 15.2068 9.59151 15.2068Z"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.59157 12.0198C7.16957 12.0198 5.20557 10.0568 5.20557 7.63482C5.20557 5.21282 7.16957 3.24982 9.59157 3.24982C12.0126 3.24982 13.9766 5.21282 13.9766 7.63482C13.9856 10.0478 12.0356 12.0108 9.62257 12.0198H9.59157Z"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16.4829 10.8816C18.0839 10.6566 19.3169 9.28265 19.3199 7.61965C19.3199 5.98065 18.1249 4.62065 16.5579 4.36365"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.5952 14.7322C20.1462 14.9632 21.2292 15.5072 21.2292 16.6272C21.2292 17.3982 20.7192 17.8982 19.8952 18.2112"
                              stroke="#130F26"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span className="ms-2">Đăng kí </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;