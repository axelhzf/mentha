// tslint:disable
// from https://gist.github.com/jed/982883
// prettier-ignore
export function uuid(placeholder?: string) {
  return placeholder
    // @ts-ignore
    ? (placeholder ^ ((Math.random() * 16) >> (placeholder / 4))).toString(16)
    // @ts-ignore
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}
