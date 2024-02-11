export type HorizontalAlignment = 'left' | 'right' | 'center';
export type VerticalAlignment = 'top' | 'middle' | 'bottom';
export type Width =
  | `${number}`
  | `${number}px`
  | `${number}%`
  | `${number}/${number}`;
export type MediaPrefix = 'sm' | 'md' | 'lg' | 'xl';

export function textAlignmentCss(
  alignment: HorizontalAlignment,
  prefix: MediaPrefix | undefined = 'md',
) {
  const mediaPrefix = prefix ? prefix + ':' : '';
  if (alignment === 'left') {
    return `${mediaPrefix}text-left`;
  }
  if (alignment === 'right') {
    return `${mediaPrefix}text-right`;
  }
  return `${mediaPrefix}text-center`;
}

export function horizontalAlignmentCss(
  alignment: HorizontalAlignment,
  prefix: MediaPrefix | undefined = 'md',
) {
  const mediaPrefix = prefix ? prefix + ':' : '';
  if (alignment === 'left') {
    return `${mediaPrefix}:float-left`;
  }
  if (alignment === 'right') {
    return `${mediaPrefix}:float-right`;
  }
  return `${mediaPrefix}m-auto`;
}
