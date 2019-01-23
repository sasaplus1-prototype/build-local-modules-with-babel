export function a({ name = '' }) {
  const out = name ? `Hi ${name}!` : 'Hello!';

  console.log(out);
}

export function b({ name = '' }) {
  return new Promise(
    resolve => resolve(name ? `Hi ${name}!` : 'Hello!')
  );
}

export function c() {
  return <div />;
}
