import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="fixed top-0 w-full z-50 border-b-2 bg-indigo-950 bg-opacity-90">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
          NASA {`{APIs}`}
        </span>
      </Link>

      <form>
        {/* <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        /> */}
      </form>

      <div className="flex gap-2 sm:order-2">
        <span className="block text-sm mr-5 mt-2 text-white font-semibold">
          {currentUser && currentUser.userName}
        </span>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="user" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.userName}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
      </div>

      {currentUser && (
        <>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={"div"}>
              <Link className="text-white hover:text-sky-700" to="/">
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/apdo"} as={"div"}>
              <Link className="text-white hover:text-sky-700" to="/apdo">
                APOD
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/mrp"} as={"div"}>
              <Link className="text-white hover:text-sky-700" to="/mrp">
                MRP
              </Link>
            </Navbar.Link>
            {/* <Navbar.Link active={path === "/dashboard"} as={"div"}>
              <Link className="text-white hover:text-sky-700" to="/dashboard">
                Dashboard
              </Link>
            </Navbar.Link> */}
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
}
