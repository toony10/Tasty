import React from "react";

function CustomImage({ imgSrc, pt }) {
  return (
    <div className='custom-image' style={{ PaddingTop: pt }}>
      <img src={imgSrc} alt='Food' />
    </div>
  );
}
export default CustomImage;
