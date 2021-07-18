export const basename = (fullpath: string) =>
  (fullpath.match(/\/([^/]+)\/?$/) || [, fullpath])[1] as string;
