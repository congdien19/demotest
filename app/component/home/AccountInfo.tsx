import React from 'react';

const AccountInfo = () => {
  return (
    <div className="row">
      <div className="col-md-12 mb-5">
        <h4 className="heading mb-3 text-primary">Tài khoản</h4>
        <div className="card overflow-hidden">
          <div
            className="text-center p-5 overlay-box"
            style={{ backgroundImage: "url(/images/big/img5.jpg)" }}
          >
            <img
              src="/images/profile/profile.png"
              width="100"
              className="img-fluid rounded-circle"
              alt=""
            />
            <h3 className="mt-3 mb-0 text-white">Chưa đăng nhập</h3>
          </div>
          <div className="card-body">
            <div className="row text-center">
              <div className="col-6">
                <div className="bgl-primary rounded p-3">
                  <h4 className="mb-0 text-bold">Số dư</h4>
                  <h5>
                    <b className="text-success">0</b>
                    <small>VNĐ</small>
                  </h5>
                </div>
              </div>
              <div className="col-6">
                <div className="bgl-primary rounded p-3">
                  <h4 className="mb-0 text-bold">Đã nạp</h4>
                  <h5>
                    <b className="text-primary">0</b>
                    <small>VNĐ</small>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer mt-0">
            <a
              className="btn btn-primary btn-lg btn-block"
              href="/auth/login"
            >
              Đăng nhập tài khoản
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;