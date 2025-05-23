import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import "./Header.css";

const widthLimit = 1200;
const bookingUrl =
    "https://www.naturalretreats.com/property-detail-page?name=hidden-gable-estate-7351";

const Header = () => {
    const [rentalMenuDropdown, setRentalMenuDropdown] = useState(false);
    const [galleriesMenuDropdown, setGalleriesMenuDropdown] = useState(false);
    const [mobileMenuDropdown, setMobileMenuDropdown] = useState(false);
    const [mobileRentalOpen, setMobileRentalOpen] = useState(false);
    const [mobileGalleriesOpen, setMobileGalleriesOpen] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        mobileMenuDropdown
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [mobileMenuDropdown]);

    const location = useLocation();
    const isMainPage = location.pathname == "/";
    // const isRentalPage = location.pathname.startsWith('/rental/');

    const getHeaderClass = () => {
        if (mobileMenuDropdown) return "header solid fixed";
        if (isMainPage) return "header transparent";
        // if (isRentalPage) return 'header semitransparent';
        return "header solid";
    };

    function handleDropdownToggle(dropdownSetter, isOpen) {
        return () => dropdownSetter(isOpen);
    }

    function handleClick() {
        setMobileMenuDropdown(prev => !prev);
    }

    function toggleMobileSubmenu(setter) {
        return () => setter(prev => !prev);
    }

    return (
        <header className={getHeaderClass()}>
            <div className={!mobileMenuDropdown ? "logo-container" : "hidden"}>
                <Link to="/">
                    <img src={`/img/Blancov2.png`} />
                </Link>
            </div>
            <div className={!mobileMenuDropdown ? "estate-name" : "hidden"}>
                <div className="estate-word">Hidden</div>
                <div className="estate-word">Estate</div>
            </div>
            <div className="links-container">
                <a
                    href={bookingUrl}
                    className="book-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book it!
                </a>
                <div
                    className={
                        dimensions.width > widthLimit
                            ? "tabs-container"
                            : "hidden"
                    }
                >
                    <Link to="/" className="tab">
                        Home
                    </Link>
                    <Link to="/history" className="tab">
                        History
                    </Link>
                    <Link to="/gardens" className="tab">
                        Gardens
                    </Link>
                    <div
                        onMouseEnter={handleDropdownToggle(
                            setRentalMenuDropdown,
                            true
                        )}
                        onMouseLeave={handleDropdownToggle(
                            setRentalMenuDropdown,
                            false
                        )}
                        className="dropdown-container"
                    >
                        <div className="tab">
                            <p>Rental</p>
                        </div>
                        <div
                            className={`menu-dropdown ${rentalMenuDropdown ? "rental-dropdown show" : ""}`}
                        >
                            <ul className="dropdown-list">
                                <li>
                                    <Link
                                        to="/rental/corporateevents"
                                        className="tab"
                                    >
                                        Corporate Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/rental/privateevents"
                                        className="tab"
                                    >
                                        Private Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/rental/weddings" className="tab">
                                        Weddings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/rental/luxuryvacationrental"
                                        className="tab"
                                    >
                                        Luxury Vacation Rental
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/rental/privatetours"
                                        className="tab"
                                    >
                                        Private Tours
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/rental/dinnerparties"
                                        className="tab"
                                    >
                                        Dinner Parties
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/rental/filmlocation"
                                        className="tab"
                                    >
                                        Film Location
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        onMouseEnter={handleDropdownToggle(
                            setGalleriesMenuDropdown,
                            true
                        )}
                        onMouseLeave={handleDropdownToggle(
                            setGalleriesMenuDropdown,
                            false
                        )}
                        className="dropdown-container"
                    >
                        <div className="tab">
                            <p>Galleries</p>
                        </div>
                        <div
                            className={`menu-dropdown ${galleriesMenuDropdown ? "galleries-dropdown show" : ""}`}
                        >
                            <ul className="dropdown-list">
                                <li>
                                    <Link
                                        to="/galleries/estate"
                                        className="tab"
                                    >
                                        Estate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/galleries/events"
                                        className="tab"
                                    >
                                        Events
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to="/media" className="tab">
                        Media
                    </Link>
                    <Link to="/mission" className="tab">
                        Our Mission
                    </Link>
                    <Link to="/contact" className="tab">
                        Contact Us
                    </Link>
                </div>
                <div
                    className={
                        dimensions.width <= widthLimit
                            ? "tabs-container"
                            : "hidden"
                    }
                >
                    <div className="dropdown-container">
                        <div
                            onClick={handleClick}
                            className={
                                mobileMenuDropdown
                                    ? "hidden"
                                    : "hamburger-icon tab"
                            }
                        >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div
                            onClick={handleClick}
                            className={
                                mobileMenuDropdown ? "close-icon tab" : "hidden"
                            }
                        >
                            <X
                                size={40}
                                strokeWidth={1.3}
                                strokeLinecap="round"
                            />
                        </div>
                        <div
                            className={`menu-dropdown ${mobileMenuDropdown ? "mobile show" : ""}`}
                        >
                            <div
                                onClick={handleClick}
                                className="close-icon tab"
                            >
                                <X
                                    size={40}
                                    strokeWidth={1.3}
                                    strokeLinecap="round"
                                />
                            </div>
                            <ul className="header-links">
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/"
                                        className="tab"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/history"
                                        className="tab"
                                    >
                                        History
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/gardens"
                                        className="tab"
                                    >
                                        Gardens
                                    </Link>
                                </li>
                                <li className="mobile-submenu-container">
                                    <div
                                        onClick={toggleMobileSubmenu(
                                            setMobileRentalOpen
                                        )}
                                        className="tab mobile-submenu-toggle"
                                    >
                                        <span>Rental</span>
                                        {mobileRentalOpen ? (
                                            <ChevronUp size={18} />
                                        ) : (
                                            <ChevronDown size={18} />
                                        )}
                                    </div>
                                    <ul
                                        className={`mobile-submenu ${mobileRentalOpen ? "open" : ""}`}
                                    >
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/corporateevents"
                                                className="tab"
                                            >
                                                Corporate Events
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/privateevents"
                                                className="tab"
                                            >
                                                Private Events
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/weddings"
                                                className="tab"
                                            >
                                                Weddings
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/luxuryvacationrental"
                                                className="tab"
                                            >
                                                Luxury Vacation Rental
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/privatetours"
                                                className="tab"
                                            >
                                                Private Tours
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/dinnerparties"
                                                className="tab"
                                            >
                                                Dinner Parties
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/rental/filmlocation"
                                                className="tab"
                                            >
                                                Film Location
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mobile-submenu-container">
                                    <div
                                        onClick={toggleMobileSubmenu(
                                            setMobileGalleriesOpen
                                        )}
                                        className="tab mobile-submenu-toggle"
                                    >
                                        <span>Galleries</span>
                                        {mobileGalleriesOpen ? (
                                            <ChevronUp size={18} />
                                        ) : (
                                            <ChevronDown size={18} />
                                        )}
                                    </div>
                                    <ul
                                        className={`mobile-submenu ${mobileGalleriesOpen ? "open" : ""}`}
                                    >
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/galleries/estate"
                                                className="tab"
                                            >
                                                Estate
                                            </Link>
                                        </li>
                                        <div className="divider-line"></div>
                                        <li>
                                            <Link
                                                onClick={handleClick}
                                                to="/galleries/events"
                                                className="tab"
                                            >
                                                Events
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/media"
                                        className="tab"
                                    >
                                        Media
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/mission"
                                        className="tab"
                                    >
                                        Our Mission
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={handleClick}
                                        to="/contact"
                                        className="tab"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
