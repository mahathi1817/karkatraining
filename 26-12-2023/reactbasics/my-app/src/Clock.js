import React from "react";
import { useState } from "react";
export default function Clock({ color, time }) {
    return (
      <h1 style={{ color: color }}>
        {time}
      </h1>
    );
  }
  