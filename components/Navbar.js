import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
      <nav>
          <div className='logo'>
              <Link href='/' >
                <Image 
                    src="/Fine_grocery.png"
                    alt="MyStore logo"
                    height={50}
                    width={50}
                    priority
                />
              </Link>
          </div>
          <Link href='/' ><a>Home</a></Link>
          <Link href='/about'><a>About</a></Link>
          <Link href='/products' ><a>Products</a></Link>
      </nav>
  )
};

export default Navbar;
