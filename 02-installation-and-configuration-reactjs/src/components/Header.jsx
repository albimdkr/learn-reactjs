/* eslint-disable react/prop-types */
export default function Header({ author }) {
  return <h1>Hello {author ? author : 'Albi'} ⚡</h1>;
}
