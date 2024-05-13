import React, { useState, useEffect, useContext } from "react";
import logo from "../../assets/logo.png";
import { Outlet, Link } from "react-router-dom";
import DropDown from "../Util/DropDown";
import axios from "../Api"
import AuthContext from "../context/AuthContext";

const Navbar = (props) => {
    const s1 =
        "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ";
    const [theme, setTheme] = useState(0);
    const { getLoggedIn } = useContext(AuthContext);
    const doc = document.documentElement.classList;
    useEffect((e) => {
        let t = localStorage.getItem("theme");
        if (!t) {
            localStorage.setItem("theme", 0);
        }
        t = localStorage.getItem("theme");
        setTheme(t);
        if (t == 1) {
            doc.add("dark");
        }
    }, []);
    return (
        <>
            <nav className="p-3 bg-white-900 sticky top-0 z-10 dark:bg-gray-bg">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <div className="flex items-center justify-between">
                            <img
                                className="h-14 w-auto ml-6"
                                src={logo}
                                draggable={false}
                                alt="BloodBridges"
                            />
                        
                        </div>
                    </Link>
                    <div className="flex items-center justify-between">
                        <>
                            <DropDown title="About Us" children={["Home", "About BloodBridge"]} links={["/", "/about"]}></DropDown>
                            {props.logIn ? (
                                <>
                                    <Link
                                        to={`/${props.user}/profile`}
                                        className={s1}
                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </Link>
                                    <Link
                                        to="/"
                                        onClick={async () => {
                                            await axios.get("/auth/logout", { withCredentials: true }).then((r) => { });
                                            await getLoggedIn();
                                        }}
                                        className={s1}
                                    >
                                        Log Out
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <DropDown title="Blood Seeker" children={["Patient Login/Register", "Blood Bank Directory"]} links={["/register/patient", "/bloodDirect"]}></DropDown>
                                    <DropDown title="Be a Donor" children={["Donor Login/Register", "Blood Donation Camps", "About Blood Donation"]} links={["/register/donor", "/bloodCamps", "/aboutBloodDonation"]}></DropDown>
                                    <DropDown title="Blood Bank Login" children={["Login", "Add Your Bloodbank"]} links={["/login/bank", "/register/bank"]}></DropDown>
                                </>
                            )}
                            <button
                                className="mx-2 px-3 py-2 rounded-full hover:shadow-lg"
                                onClick={() => {
                                    localStorage.setItem(
                                        "theme",
                                        localStorage.getItem("theme") == 1 ? 0 : 1
                                    );
                                    setTheme(localStorage.getItem("theme"));
                                    if (theme == 0) {
                                        doc.add("dark");
                                    } else {
                                        doc.remove("dark");
                                    }
                                }}
                            >
                                <i
                                    className={`dark:text-white-900 fa-solid fa-lg fa-${theme == 0 ? "sun" : "moon"
                                        }`}
                                ></i>
                            </button>
                        </>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
