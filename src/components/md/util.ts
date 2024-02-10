export type HorizontalAlignment = 'left' | 'right' | 'center';
export type VerticalAlignment = 'top' | 'middle' | 'bottom';
export type Width =
  | `${number}`
  | `${number}px`
  | `${number}%`
  | `${number}/${number}`;

export function textAlignmentCss(alignment: HorizontalAlignment) {
  if (alignment === 'left') {
    return 'text-left';
  }
  if (alignment === 'right') {
    return 'text-right';
  }
  return 'text-center';
}

export function horizontalAlignmentCss(alignment: HorizontalAlignment) {
  if (alignment === 'left') {
    return 'float-left';
  }
  if (alignment === 'right') {
    return 'float-right';
  }
  return 'm-auto';
}
