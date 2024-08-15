if (model && model.component && model.component.resolve) {
  const resolve = model.component.resolve;
} else {
  console.error('Resolve function is not available.');
}
