import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [isLogin, setIsLogin] = React.useState(false)

    function login() {
        setIsLogin(!isLogin)
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl" >
                    <NavLink to="/">My Website</NavLink>
                </div>
                <div>

                    <button className='bg-slate-500' onClick={login}>
                        Auth In
                    </button>
                    {isLogin ? (
                        <>
                        <NavLink
                        to="/Blog"
                        className="navlink"
                    >
                        MyBlog
                    </NavLink>
                    <NavLink
                        to="/Register"
                        className="navlink"
                    >
                        Register
                    </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/Login"
                                className="navlink"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/Register"
                                className="navlink"
                            >
                                Register
                            </NavLink>
                        </>
                    )}
                    <NavLink
                        to="/Login"
                        className="navlink"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/Register"
                        className="navlink"
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/Blog"
                        className="navlink">

                        Blog
                    </NavLink>
                    <NavLink>

                    </NavLink>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
