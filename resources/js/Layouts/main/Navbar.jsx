import { useEffect, useRef, useState } from 'react';
import feather from 'feather-icons';
function Navbar() {
    // Icon
    useEffect(() => {
        feather.replace();
    }, []);

    //Menu toggler dekstop 
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.pc-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('pc-sidebar-hide');
        }
    };

    //Menu toggler mobile
    const rm_menu = () => {
        const sidebar = document.querySelector('.pc-sidebar');
        const overlay = document.querySelector('.pc-menu-overlay');
        if (sidebar) {
            sidebar.classList.remove('mob-sidebar-active');
        }
        if (overlay) {
            overlay.remove();
        }
    };

    // Menu collapse click start (when click it's open and close sidebar for mobile screen)
    const handleMobileToggle = () => {
        const sidebar = document.querySelector('.pc-sidebar');
        if (!sidebar) return;

        if (sidebar.classList.contains('mob-sidebar-active')) {
            rm_menu();
        } else {
            sidebar.classList.add('mob-sidebar-active');
            sidebar.insertAdjacentHTML('beforeend', '<div class="pc-menu-overlay"></div>');

            // Pasang event listener untuk overlay
            const overlay = sidebar.querySelector('.pc-menu-overlay');
            if (overlay) {
                overlay.addEventListener('click', rm_menu);
            }
        }
    };

    // Thema Halaman Web
    const iconMap = {
        light: 'sun',
        dark: 'moon',
        default: 'settings',
    };

    const labelMap = {
        light: 'Light',
        dark: 'Dark',
        default: 'Default',
    };

    const [theme, setTheme] = useState('default');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'default';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (selectedTheme) => {
        const html = document.documentElement;
        if (selectedTheme === 'default') {
            html.removeAttribute('data-pc-theme');
            localStorage.removeItem('theme');
        } else {
            html.setAttribute('data-pc-theme', selectedTheme);
            localStorage.setItem('theme', selectedTheme);
        }
    };

    const handleSelect = (selectedTheme) => {
        setTheme(selectedTheme);
        applyTheme(selectedTheme);
        setOpen(false);
    };

    // feather icons update saat ikon berubah
    useEffect(() => {
        feather.replace();
    }, [theme, open]);

    // Tutup dropdown jika klik di luar
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Notifikasi
    const [isOpen, setIsOpen] = useState(false);
    const notif_dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notif_dropdownRef && !notif_dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="pc-header">
            <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow">
                <div className="me-auto pc-mob-drp">
                    <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
                        <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
                            <button
                                onClick={toggleSidebar}
                                className="pc-head-link ltr:!ml-0 rtl:!mr-0"
                                id="sidebar-hide"
                            >
                                <i data-feather="menu"></i>
                            </button>
                        </li>
                        <li className="pc-h-item pc-sidebar-popup lg:hidden">
                            <button
                                onClick={handleMobileToggle}
                                className="pc-head-link ltr:!ml-0 rtl:!mr-0"
                                id="mobile-collapse"
                            >
                                <i data-feather="menu"></i>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="ms-auto">
                    <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">

                        <li className="relative" ref={dropdownRef}>
                            <a
                                href="#"
                                className="pc-head-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(!open);
                                }}
                            >
                                <i data-feather={iconMap[theme]}></i>
                            </a>

                            {open && (
                                <ul className="absolute right-0 top-14 mt-2 w-40 bg-white border shadow-md rounded-md z-50">
                                    {Object.keys(iconMap).map((key) => (
                                        <li
                                            key={key}
                                            className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleSelect(key)}
                                        >
                                            <i data-feather={iconMap[key]} className="me-2"></i>
                                            {labelMap[key]}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li className="relative" ref={notif_dropdownRef}>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="pc-head-link me-0 relative"
                            >
                                <i data-feather="bell"></i>
                                <span className="badge bg-green-500 text-white rounded-full absolute right-0 top-0 text-xs px-1">
                                    1
                                </span>
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 top-14 mt-2 w-96 bg-white border shadow-xl rounded-md z-50">
                                    <div className="flex justify-between items-center p-4 border-b">
                                        <h5 className="font-semibold">Notifications</h5>
                                        <a href="#" className="text-blue-500 text-sm">Mark all read</a>
                                    </div>
                                    <div className="p-4 max-h-80 overflow-y-auto">
                                        <p className="text-sm text-gray-500 mb-3">Today</p>
                                        <div className="flex gap-4 mb-4">
                                            <img
                                                src="../assets/images/user/avatar-1.jpg"
                                                className="w-12 h-12 rounded"
                                                alt="avatar"
                                            />
                                            <div>
                                                <span className="text-xs text-gray-400 float-right">2 min ago</span>
                                                <h6 className="text-sm font-medium">UI/UX Design</h6>
                                                <p className="text-sm text-gray-600">
                                                    Lorem Ipsum has been the industry's standard dummy text...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center py-2 border-t">
                                        <a href="#" className="text-red-500 text-sm hover:underline">Clear all Notifications</a>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="dropdown pc-h-item header-user-profile">
                            <a
                                className="pc-head-link dropdown-toggle arrow-none me-0"
                                data-pc-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-haspopup="false"
                                data-pc-auto-close="outside"
                                aria-expanded="false"
                            >
                                <i data-feather="user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown p-2 overflow-hidden">
                                <div className="dropdown-header flex items-center justify-between py-4 px-5 bg-primary-500">
                                    <div className="flex mb-1 items-center">
                                        <div className="shrink-0">
                                            <img
                                                src="../assets/images/user/avatar-2.jpg"
                                                alt="user-image"
                                                className="w-10 rounded-full"
                                            />
                                        </div>
                                        <div className="grow ms-3">
                                            <h6 className="mb-1 text-white">Carson Darrin 🖖</h6>
                                            <span className="text-white">carson.darrin@company.io</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-body py-4 px-5">
                                    <div
                                        className="profile-notification-scroll position-relative"
                                        style={{ maxHeight: 'calc(100vh - 225px)' }}
                                    >
                                        <a href="#" className="dropdown-item">
                                            <span>
                                                <svg className="pc-icon text-muted me-2 inline-block">
                                                    <use xlinkHref="#custom-setting-outline"></use>
                                                </svg>
                                                <span>Settings</span>
                                            </span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span>
                                                <svg className="pc-icon text-muted me-2 inline-block">
                                                    <use xlinkHref="#custom-share-bold"></use>
                                                </svg>
                                                <span>Share</span>
                                            </span>
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            <span>
                                                <svg className="pc-icon text-muted me-2 inline-block">
                                                    <use xlinkHref="#custom-lock-outline"></use>
                                                </svg>
                                                <span>Change Password</span>
                                            </span>
                                        </a>
                                        <div className="grid my-3">
                                            <button className="btn btn-primary flex items-center justify-center">
                                                <svg className="pc-icon me-2 w-[22px] h-[22px]">
                                                    <use xlinkHref="#custom-logout-1-outline"></use>
                                                </svg>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
