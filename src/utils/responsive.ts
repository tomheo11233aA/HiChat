import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('screen');


//iPhone 12
const DESIGN_WIDTH: number = 390;
const DESIGN_HEIGHT: number = 844;

const WIDTH: number = width > height ? height : width;
const HEIGHT: number = width > height ? width : height;

const scale = (size: number): number => {
    return (WIDTH / DESIGN_WIDTH) * size;
};

const verticalScale = (size: number): number => {
    return (HEIGHT / DESIGN_HEIGHT) * size;
};

const moderateScale = (size: number, factor: number = 0.5): number => {
    return size + (scale(size) - size) * factor;
};

/**
 * getSize.m(10) Responsive for padding - margin - fontSize.
 *
 * getSize.s(10) Responsive by width screen. (Image Size)
 *
 * getSize.v(10) Responsive by height screen.
 **/

export const getSize = {
    m: moderateScale,
    s: scale,
    v: verticalScale,
};

export const getFontSize = (size: number): number => {
    return scale(size);
};

export const fontSize = {
    h1: getFontSize(32),
    h2: getFontSize(24),
    h3: getFontSize(20),
    h4: getFontSize(18),
    h5: getFontSize(16),
    h6: getFontSize(14),
    h7: getFontSize(12),
    h8: getFontSize(10),
};

export const margin = {
    m1: getSize.m(8),
    m2: getSize.m(16),
    m3: getSize.m(24),
    m4: getSize.m(32),
    m5: getSize.m(40),
    m6: getSize.m(48),
    m7: getSize.m(56),
    m8: getSize.m(64),
};

export const padding = {
    xsmp: getSize.m(2),
    smp: getSize.m(4),
    p: getSize.m(6),
    p1: getSize.m(8),
    p2: getSize.m(16),
    p3: getSize.m(24),
    p4: getSize.m(32),
    p5: getSize.m(40),
    p6: getSize.m(48),
    p7: getSize.m(56),
    p8: getSize.m(64),
};

export const BOTTOM_TAB_HEIGHT = scale(80);

export const iconSize = {
    xs: getSize.s(12),
    xs1: getSize.s(16),
    s: getSize.s(20),
    s2: getSize.s(24),
    s3: getSize.s(28),
    m: getSize.s(30),
    l: getSize.s(40),
    xl: getSize.s(50),
};

export const lineHeight = {
    l1: getSize.v(20),
    l2: getSize.v(24),
    l3: getSize.v(28),
    l4: getSize.v(32),
    l5: getSize.v(36),
    l6: getSize.v(40),
    l7: getSize.v(44),
    l8: getSize.v(48),
};

export const borderRadius = {
    r1: getSize.s(4),
    r2: getSize.s(8),
    r3: getSize.s(12),
    r4: getSize.s(16),
    r5: getSize.s(20),
    r6: getSize.s(24),
    r7: getSize.s(28),
    r8: getSize.s(32),
};