export const downloadFile = (file: File) => {
  const blobURL = URL.createObjectURL(file);

  const anchor = document.createElement("a");
  anchor.href = blobURL;
  anchor.download = file.name;
  anchor.click();

  return () => URL.revokeObjectURL(blobURL);
};
