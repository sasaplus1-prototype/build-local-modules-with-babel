export function a({ name = '' }) {
  console.log(name);
}

export function b({ name = '' }) {
  return new Promise(
    resolve => resolve(name)
  );
}

export function c() {
  return <span />;
}
