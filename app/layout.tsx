import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "congdien.vn - Dịch vụ tăng tương tác mạng xã hội",
  description: "Dịch vụ tăng like, follow, view cho Facebook, Instagram, TikTok, YouTube, Threads, Shopee, Lazada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Vendor CSS files */}
        <link href="/vendor/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet" />
        <link href="/vendor/swiper/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/vendor/datatables/css/jquery.dataTables.min.css" rel="stylesheet" />
        <link href="/vendor/toastr/css/toastr.min.css" rel="stylesheet" />
        <link href="/vendor/select2/css/select2.min.css" rel="stylesheet" />
        <link href="/vendor/tagify/dist/tagify.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/custom-styles.css" rel="stylesheet" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`}
        data-typography="poppins"
        data-theme-version="light"
        data-layout="vertical"
        data-nav-headerbg="black"
        data-headerbg="color_1"
      >
        {children}
        
        {/* Scripts */}
        <script src="/vendor/global/global.min.js"></script>
        <script src="/vendor/chart.js/Chart.bundle.min.js"></script>
        <script src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
        <script src="/vendor/toastr/js/toastr.min.js"></script>
        <script src="/vendor/tagify/dist/tagify.js"></script>
        <script src="/vendor/datatables/js/jquery.dataTables.min.js"></script>
        <script src="/js/plugins-init/datatables.init.js"></script>
        <script src="/vendor/select2/js/select2.full.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.js"></script>
        <script src="/js/custom.js"></script>
        <script src="/js/deznav-init.js"></script>
        <script src="/js/script.js"></script>
        <script src="/js/user.js"></script>
      </body>
    </html>
  );
}