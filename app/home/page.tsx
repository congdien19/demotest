"use client";

import React, { useEffect } from 'react';
import AppLayout from '@/app/component/AppLayout';
import Breadcrumb from '@/app/component/Breadcrumb';
import ServiceCards from '@/app/component/home/ServiceCards';
import AccountInfo from '@/app/component/home/AccountInfo';

declare global {
  interface Window {
    $: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize any JavaScript functionality after component mounts
    const initScripts = () => {
      // Show notification modal on page load
      if (typeof window !== 'undefined' && window.$) {
        // window.$('#modelNotificationSystem').modal('show');
        
        // window.$('.load_status_notification').each(function (this: any) {
        //   let data = window.$(this).attr('data-status');
        //   let status = statusNotification(data);
        //   window.$(this).find('.timeline-badge').addClass(status.type);
        // });
      }
    };

    // Mock function for status notification (to be implemented properly)
    // const statusNotification = (data: string) => {
    //   switch(data) {
    //     case 'Hot':
    //       return { type: 'danger' };
    //     case 'Update':
    //       return { type: 'primary' };
    //     default:
    //       return { type: 'info' };
    //   }
    // };

    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check if jQuery is loaded, if not, wait a bit and try again
      if (window.$) {
        initScripts();
      } else {
        setTimeout(initScripts, 1000);
      }
    }
  }, []);

  return (
    <AppLayout>
      <Breadcrumb 
        title="Trang chủ" 
        items={[
          { label: "congdien.vn", href: "/home" },
          { label: "Trang chủ", isActive: true }
        ]} 
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <ServiceCards />
              </div>
              <div className="col-md-4">
                <AccountInfo />
                {/* <Notification /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <NotificationModal /> */}
      </div>
    </AppLayout>
  );
}