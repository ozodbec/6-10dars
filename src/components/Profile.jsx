//react icons
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

// react hot toast
import toast from "react-hot-toast";

//firebase
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

//redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/userSlice";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("See you soon");
      dispatch(logout());
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      {" "}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img src={user.photoURL} alt="logo-navbar" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow"
        >
          <li>
            <div>
              Name:<span className="font-bold">{user.displayName}</span>
            </div>
          </li>
          <li>
            <div>
              Email:<div className="font-bold">{user.email}</div>
            </div>
          </li>
          <li>
            <button onClick={handleLogout}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
