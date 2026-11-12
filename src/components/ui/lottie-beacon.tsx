"use client";

import * as React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const TELEMETRY_PULSE_LOTTIE = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 90,
  w: 120,
  h: 120,
  nm: "TelemetryRadarPulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "OuterRing",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [70] },
            { t: 45, s: [12] },
            { t: 90, s: [70] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [55, 55, 100] },
            { t: 45, s: [108, 108, 100] },
            { t: 90, s: [55, 55, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [86, 86] },
          nm: "Ellipse",
        },
        {
          ty: "st",
          c: { a: 0, k: [0.22, 0.74, 0.97, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          nm: "Stroke",
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "InnerCore",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [95] },
            { t: 45, s: [60] },
            { t: 90, s: [95] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [92, 92, 100] },
            { t: 45, s: [112, 112, 100] },
            { t: 90, s: [92, 92, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [22, 22] },
          nm: "CoreEllipse",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.22, 0.74, 0.97, 1] },
          o: { a: 0, k: 100 },
          nm: "Fill",
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
};

export function LottieBeacon() {
  return (
    <div
      id="lottie-beacon-container"
      className="lottie-beacon-container inline-flex h-10 w-10 items-center justify-center"
      aria-hidden="true"
    >
      <DotLottieReact
        data={JSON.stringify(TELEMETRY_PULSE_LOTTIE)}
        loop
        autoplay
        className="h-10 w-10"
      />
    </div>
  );
}
