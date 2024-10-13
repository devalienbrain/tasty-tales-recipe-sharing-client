import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-base-100 border-b w-[90%] mx-auto flex justify-between items-center">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          NextAuth
        </Link>
      </div>
      <div className="flex-1">
        <ul className="flex justify-center items-center gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <button className="btn btn-error btn-outline text-white rounded-full px-5">
          Logout
        </button>

        <Link
          href="/login"
          className="btn btn-accent btn-outline text-white rounded-full px-5"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
