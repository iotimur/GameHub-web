import React from "react";

import {
  apple_touch_icon,
  favicon_32x32,
  favicon_16x16,
} from "../../../../assets/Images_main/favicon_io";

const LinkMain = () => {
  return (
    <div>
      <link rel="apple-touch-icon" sizes="180x180" href={apple_touch_icon} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon_32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon_16x16} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
    </div>
  );
};

export default LinkMain;
