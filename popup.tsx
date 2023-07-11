import { Login } from '@microsoft/mgt-react';
import { useState } from "react";

function IndexPopup() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
        <Login />
    </div>
  )
}

export default IndexPopup
