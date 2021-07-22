export const getGlobForPath = (path: string) => `**/*${path.match(/\.[^.]+$/)}`;
