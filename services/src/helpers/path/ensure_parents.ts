export const ensure_parents = (initialPaths: string[]) => {
  const paths = new Set<string>();

  for (const path of initialPaths) {
    const { length: slashesCount } = path.match(/\//g) || [];
    if (slashesCount > 0) {
      let startSearchIndex = 0;
      for (let i = 0; i < slashesCount; i++) {
        startSearchIndex += path.slice(startSearchIndex).indexOf("/") + 1;
        paths.add(path.slice(0, startSearchIndex));
      }
    }
    paths.add(path);
  }

  return Array.from(paths);
};
