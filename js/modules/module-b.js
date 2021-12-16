export default (root) => {
  if(!root) {
    return;
  }
  root.textContent = "This is module b";
}