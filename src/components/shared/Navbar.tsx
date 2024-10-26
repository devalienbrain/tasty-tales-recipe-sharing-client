"use client";

import Link from "next/link";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/TastyTale.png";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const currentUser =
    useAppSelector((state: RootState) => state.auth?.currentUser) || null; // Get the currentUser from Redux
  const dispatch = useDispatch();
  const router = useRouter();
  console.log({ currentUser });

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    localStorage.removeItem("accessToken"); // Clear token on logout
    router.push("/"); // Redirect to homepage
  };

  return (
    <nav className="w-full py-3">
      <div className="flex justify-between items-center lg:hidden">
        {/* Mobile view - Logo and name centered at top */}
        <div className="pl-3 flex items-center justify-center">
          <Image
            src={logo}
            alt="TastyTaleLogo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <Link href="/" className="text-2xl font-extrabold">
            Tasty<span className="text-cyan-400">Tales</span>
          </Link>
        </div>
      </div>

      {/* Mobile view - Routes and actions below logo, evenly spaced */}
      <div className="lg:hidden flex justify-around items-center mt-4">
        <ul className="flex justify-around items-center w-full text-xs font-semibold">
          {/* Navbar menu content */}
          <li>
            <Link href="/about" className="hover:text-cyan-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="hover:text-cyan-400">
              Recipes
            </Link>
          </li>

          {currentUser ? (
            <>
              <li>
                <Link href="/profile" className="hover:text-cyan-400">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-ghost text-red-500"
                  aria-label="Logout"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <MdLogout className="text-2xl font-black" />
                </button>
              </li>
              <li>
                {currentUser?.photoUrl ? (
                  <Link href="/dashboard" className="hover:text-cyan-400">
                    <Image
                      src={currentUser.photoUrl} // User profile picture
                      alt={currentUser.name}
                      width={40}
                      height={40}
                      className="p-1 object-cover rounded-full border border-cyan-300 flex items-center justify-center"
                      title="Dashboard"
                    />
                  </Link>
                ) : (
                  <div className="text-gray-400">User</div>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-cyan-400">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-cyan-400 border border-cyan-300 px-5 py-2 rounded-3xl"
                >
                  Join
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Large screen view */}

      <div className="hidden lg:flex justify-between items-center">
        <Link href="/" title="Home">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="TastyTaleLogo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="ml-2 text-2xl font-extrabold">
              Tasty<span className="text-cyan-400">Tales</span>
            </div>
          </div>
        </Link>
        <ul className="menu menu-horizontal space-x-1 flex justify-end items-center font-semibold">
          {/* Navbar menu content */}
          <li>
            <Link href="/about" className="hover:text-cyan-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-cyan-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="hover:text-cyan-400">
              Recipes
            </Link>
          </li>

          {currentUser ? (
            <>
              <li>
                <Link href="/profile" className="hover:text-cyan-400">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-ghost text-red-500"
                  aria-label="Logout"
                  onClick={handleLogout}
                  title="Logout"
                >
                  <MdLogout className="text-2xl font-black" />
                </button>
              </li>
              <li>
                {currentUser?.photoUrl ? (
                  <Link href="/dashboard" className="hover:text-cyan-400">
                    <Image
                      src={currentUser.photoUrl} // User profile picture
                      alt={currentUser.name}
                      width={40}
                      height={40}
                      className="p-1 object-cover rounded-full border border-cyan-300 flex items-center justify-center"
                      title="Dashboard"
                    />
                  </Link>
                ) : (
                  <div className="text-gray-400">User</div>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-cyan-400">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="hover:text-cyan-400 border border-cyan-300 px-5 py-2 rounded-3xl"
                >
                  Join
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
