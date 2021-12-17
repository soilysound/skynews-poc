export default async (root) => {
  if(!root) {
    return;
  }
  root.textContent = "This is module a";

  const moduleB = await import('./module-b');
  moduleB.default(root);
}