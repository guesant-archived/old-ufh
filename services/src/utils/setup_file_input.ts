export const setup_file_input = (
  input: HTMLInputElement,
  callback: (files: File[]) => void
) => {
  input.type = "file";
  input.multiple = true;
  input.onchange = () => void callback(Array.from(input.files || []));
};
