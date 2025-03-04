export default function Nav() {
  return (
    <nav className='flex justify-around items-center shadow-md text-center h-16 text-xl'>
      <a href='/'>Home</a>
      <a href='/hello'>Hello</a>
      <a href='/hi'>Hi</a>
      <a href='/shop/slug'>Slug</a>
      <a href='/parallel'>Parallel</a>
      <a href='/intercept'>Intercept</a>
      <a href='/about'>About</a>
      <a href='/todos'>Todos</a>
      <a href='/photos'>Photos</a>
      <a href='/books'>Books</a>
      <a href='/about/me'>Me</a>
    </nav>
  );
}
