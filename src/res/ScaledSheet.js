import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "./scaling-utils";

// Function Usage
// scale: width, marginLeft, marginRight, marginHorizontal, paddingLeft, paddingRight, paddingHorizontal, etc.
// verticalScale: height, marginTop, marginBottom, marginVertical, line-height, paddingTop, paddingBottom, paddingVertical, etc.
// moderateScale: gap, font-size, borderRadius, etc.

export const spacing = {
  none: 0,
  s1: 2,
  s2: 4,
  s3: 6,
  base: 8,
  m1: 12,
  m2: 14,
  m3: 16,
  m4: 20,
  m5: 24,
  l1: 32,
  l2: 36,
  l3: 40,
  l4: 48,
  l5: 64,
  xl1: 80,
  xl2: 96,
};

export const spacingScale = {
  none: scale(0),
  s1: scale(2),
  s2: scale(4),
  s3: scale(6),
  base: scale(8),
  m1: scale(12),
  m2: scale(14),
  m3: scale(16),
  space_18:scale(18),
  m4: scale(20),
  m5: scale(24),
  l1: scale(32),
  l2: scale(36),
  l3: scale(40),
  l4: scale(48),
  l5: scale(64),
  xl1: scale(80),
  xl2: scale(96),
  space_194: scale(194),
  
};

export const spacingVerticalScale = {
  none: verticalScale(0),
  s1: verticalScale(2),
  s2: verticalScale(4),
  base: verticalScale(8),
  m1: verticalScale(12),
  m2: verticalScale(16),
  space_16dot8:verticalScale(16.8),
  m3: verticalScale(20),
  m4: verticalScale(24),
  l1: verticalScale(32),
  l2: verticalScale(40),
  l3: verticalScale(48),
  l4: verticalScale(64),
  xl1: verticalScale(80),
  xl2: verticalScale(96),
  space_18:verticalScale(18)
};

export const spacingModerateScale = {
  none: moderateScale(0),
  s1: moderateScale(2),
  s2: moderateScale(4),
  s3: moderateScale(6),
  base: moderateScale(8),
  m1: moderateScale(12),
  m2: moderateScale(14),
  m3: moderateScale(16),
  m4: moderateScale(20),
  m5: moderateScale(24),
  l1: moderateScale(32),
  l2: moderateScale(40),
  l3: moderateScale(48),
  l4: moderateScale(64),
  xl1: moderateScale(80),
  xl2: moderateScale(96),
};

export const spacingModerateVerticalScale = {
  none: moderateVerticalScale(0),
  s1: moderateVerticalScale(2),
  s2: moderateVerticalScale(4),
  s3: moderateVerticalScale(6),
  base: moderateVerticalScale(8),
  m1: moderateVerticalScale(12),
  m2: moderateVerticalScale(14),
  m3: moderateVerticalScale(16),
  m4: moderateVerticalScale(20),
  m5: moderateVerticalScale(24),
  l1: moderateVerticalScale(32),
  l2: moderateVerticalScale(36),
  l3: moderateVerticalScale(40),
  l4: moderateVerticalScale(48),
  l5: moderateVerticalScale(64),
  xl1: moderateVerticalScale(80),
  xl2: moderateVerticalScale(96),
};
