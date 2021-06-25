/* eslint-disable import/no-anonymous-default-export */

import palette from "./palette";

export default {
  fontStyle: "normal",
  fontWeight: "normal",
  color: palette.primary.label,

  fontFamily: ["monospace", "sans-serif"].join(","),

  h1: {
    // Display Small Bold (32px, Bold)
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "38px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "bold",
  },
  h2: {
    // LinkLargeMedium: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "38px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Demi",
  },
  h3: {
    // LinkSemiMedium
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Bold",
  },
  h4: {
    // LinkMedium
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Bold",
  },
  h5: {
    // LinkSmall
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "28px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
  },
  caption: {
    // LinkXS
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
  },

  h6: {
    // TextL
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "38px",
    letterSpacing: "0.75px",
    color: palette.white,
    fontStyle: "Regular",
  },
  body1: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Regular",
  },
  body2: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "28px",
    letterSpacing: "0.75px",
    color: palette.white,
    fontStyle: "normal",
  },
  subtitle1: {
    // text small
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Book",
  },
  subtitle2: {
    // text extra small
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Book",
    display: "inline",
  },
  variantMapping: {
    subtitle1: "p",
    subtitle2: "p",
  },
};
