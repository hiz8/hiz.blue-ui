import { style, styleVariants, vars } from "../../styles.css";
import { encodedSvgs } from "./assets/encodedSvgs";

export const icon = style({
  lineHeight: 0,

  "::before": {
    content: "''",
    display: "inline-block",
    WebkitMask: "no-repeat center",
    mask: "no-repeat center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    width: "1em",
    height: "1em",
  },
});

export const color = styleVariants({
  none: {
    "::before": {
      backgroundColor: "currentcolor",
    },
  },
  black: {
    "::before": {
      backgroundColor: vars.color.text.black,
    },
  },
  white: {
    "::before": {
      backgroundColor: vars.color.text.white,
    },
  },
});

export const type = styleVariants({
  home: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs.home})`,
      maskImage: `url(${encodedSvgs.home})`,
    },
  },
  homeBold: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs["home-bold"]})`,
      maskImage: `url(${encodedSvgs["home-bold"]})`,
    },
  },
  feed: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs.feed})`,
      maskImage: `url(${encodedSvgs.feed})`,
    },
  },
  github: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs.github})`,
      maskImage: `url(${encodedSvgs.github})`,
    },
  },
  global: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs.global})`,
      maskImage: `url(${encodedSvgs.global})`,
    },
  },
  works: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs.works})`,
      maskImage: `url(${encodedSvgs.works})`,
    },
  },
  worksBold: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs["works-bold"]})`,
      maskImage: `url(${encodedSvgs["works-bold"]})`,
    },
  },
  blog: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs.blog})`,
      maskImage: `url(${encodedSvgs.blog})`,
    },
  },
  blogBold: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs["blog-bold"]})`,
      maskImage: `url(${encodedSvgs["blog-bold"]})`,
    },
  },
  externalLink: {
    "::before": {
      WebkitMaskImage: `url(${encodedSvgs["external-link"]})`,
      maskImage: `url(${encodedSvgs["external-link"]})`,
    },
  },
});
