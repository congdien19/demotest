import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div className="page-titles">
      <ol className="breadcrumb">
        <li>
          <h5 className="bc-title">{title}</h5>
        </li>
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${item.isActive ? 'active' : ''}`}>
            {item.href ? (
              <Link href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Breadcrumb;