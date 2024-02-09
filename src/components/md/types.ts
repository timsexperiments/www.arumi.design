export type TextAlignment = 'left' | 'right' | 'center';
export type VerticalAlignment = 'top' | 'middle' | 'bottom';
export type Width =
  | `${number}`
  | `${number}px`
  | `${number}%`
  | `${number}/${number}`;

export function textAlignmentCss(alignment: TextAlignment) {
  if (alignment === 'left') {
    return 'text-left';
  }
  if (alignment === 'right') {
    return 'text-right';
  }
  return 'text-center';
}
