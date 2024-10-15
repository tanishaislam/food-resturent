import { NavLink } from "react-router-dom";


const Navber = () => {
    return (
        <div>
            <div className="">
            <nav className="flex lg:flex-row md:flex-row flex-col items-center justify-between container mx-auto">

                <div className="flex items-end">
                    <img src="./src/assets/pizza-logo.png" alt="" width={80} height={80}/>
                    <div className="uppercase font-bold text-xl text-zinc-800">Pizza</div>
                </div>
                <ul className="flex gap-10 text-lg font-semibold">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Home
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/aboutUs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        About Us
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/offer"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Offer
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/menu"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Menu
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/gallery"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Gallery
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/team"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Team
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/contactUs"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-500 font-semibold underline" : ""
                        }
                        >
                        Contact Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default Navber;