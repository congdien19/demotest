import React from 'react';
import Preloader from '@/app/component/home/Preloader';
import NavHeader from '@/app/component/home/NavHeader';
import Header from '@/app/component/home/Header';
import Sidebar from '@/app/component/home/Sidebar';
import Footer from '@/app/component/home/Footer';
import BackToTop from '@/app/component/home/BackToTop';

interface AppLayoutProps {
  children: React.ReactNode;
  showPreloader?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  showPreloader = true 
}) => {
  return (
    <div id="main-wrapper">
      {showPreloader && <Preloader />}
      <NavHeader />
      <Header />
      <Sidebar />
      
      {/* Content body */}
      <div className="content-body">
        {children}
      </div>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default AppLayout;