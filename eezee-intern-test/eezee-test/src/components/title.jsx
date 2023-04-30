import React from 'react';
import Link from 'next/link';

const Title = ({ mainTitle, subTitle, action, viewMoreLink }) => {
  return (
    <div className="header container mx-auto flex items-center justify-between">
      <div className="row">
        <div className="col">
          <div className="title-ctn">
            <span className="title grey-base">{mainTitle}</span>
          </div>
          <div>
            <span className="product-title grey-primary">{subTitle}</span>
          </div>
        </div>
        <div className="col">
          <span className="body white">{action}</span>
        </div>
      </div>
      {viewMoreLink && (
        <Link href={viewMoreLink}>
          
            <div className="-mx-0.5 flex items-center">
              <div className="px-0.5 relative">
                <span className="eezee-blue text-blue-600">View More </span>
              </div>
              <div className="px-0.5 relative h-3 w-3">
                <span>
                  <img alt="Image" height="12.25" width="12.25" src="https://storage.googleapis.com/imgez/icons/caret-icon-right-blue.svg" className='absolute' />
                </span>
              </div>
            </div>
          
        </Link>
      )}
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .row {
          display: flex;
        }
        .col {
          display: flex;
          flex-direction: column;
        }
        .title-ctn {
          margin-bottom: 4px;
        }
        .title {
          font-size: 24px;
        }
        .product-title {
          font-size: 16px;
        }
        .body {
          font-size: 14px;
        }
        // Add more styles as needed
      `}</style>
    </div>
  );
};

export default Title;
