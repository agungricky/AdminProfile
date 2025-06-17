import React, { useEffect, useState } from 'react'
import feather from 'feather-icons';
import { Link } from '@inertiajs/react';

function Sidebar() {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (key) => {
        setOpenMenus(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    useEffect(() => {
        feather.replace();
    }, [openMenus]);

    const isOpen = (key) => openMenus[key];

    return (
        <nav className="pc-sidebar">
            <div className="navbar-wrapper">
                <div className="m-header flex items-center py-4 px-6 h-header-height">
                    <a href="../dashboard/index.html" className="b-brand flex items-center gap-3">
                        <img src="../assets/images/logo-white.svg" className="img-fluid logo logo-lg" alt="logo" />
                        <img src="../assets/images/favicon.svg" className="img-fluid logo logo-sm" alt="logo" />
                    </a>
                </div>
                <div className="navbar-content h-[calc(100vh_-_74px)] py-2.5">
                    <ul className="pc-navbar">
                        <li className="pc-item pc-caption">
                            <label>Navigation</label>
                        </li>

                        <li className="pc-item">
                            <ul>
                                <li className="pc-item">
                                    <Link href={route('dashboard')} className="pc-link">
                                        <span className="pc-micon">
                                            <i data-feather="home"></i>
                                        </span>
                                        <span className="pc-mtext">Dashboard</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="pc-item pc-caption">
                            <label>Pages</label>
                            <i data-feather="sidebar"></i>
                        </li>


                        <li className={`pc-item pc-hasmenu ${isOpen('home-levels') ? 'open' : ''}`}>
                            <button
                                className="pc-link w-full text-left"
                                onClick={() => toggleMenu('home-levels')}
                            >
                                <span className="pc-micon">
                                    <i data-feather="home"></i>
                                </span>
                                <span className="pc-mtext">Home</span>
                                <span className="pc-arrow">
                                    <i className="ti ti-chevron-right"></i>
                                </span>
                            </button>


                            {isOpen('home-levels') && (
                                <ul className="pc-submenu">
                                    <li className="pc-item">
                                        <Link className="pc-link" href={route('project.index')}>Aplikasi Pernah dibuat</Link>
                                    </li>

                                    <li className="pc-item">
                                        <Link className="pc-link" href={route('techlearning.index')}>Teknologi sedang dipelajari</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className={`pc-item pc-hasmenu ${isOpen('about-levels') ? 'open' : ''}`}>
                            <button
                                className="pc-link w-full text-left"
                                onClick={() => toggleMenu('about-levels')}
                            >
                                <span className="pc-micon">
                                    <i data-feather="user"></i>
                                </span>
                                <span className="pc-mtext">About</span>
                                <span className="pc-arrow">
                                    <i className="ti ti-chevron-right"></i>
                                </span>
                            </button>


                            {isOpen('about-levels') && (
                                <ul className="pc-submenu">
                                    <li className="pc-item">
                                        <Link className="pc-link" href={route('karier.index')}>Riwayat Karier</Link>
                                    </li>

                                    <li className="pc-item">
                                        <Link className="pc-link" href={route('About.index')}>Tentang Saya</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="pc-item">
                            <a href="../other/sample-page.html" className="pc-link">
                                <span className="pc-micon">
                                    <i data-feather="award"></i>
                                </span>
                                <span className="pc-mtext">Prestasi</span>
                            </a>
                        </li>

                        <li className="pc-item">
                            <a href="../other/sample-page.html" className="pc-link">
                                <span className="pc-micon">
                                    <i data-feather="airplay"></i>
                                </span>
                                <span className="pc-mtext">Project Live</span>
                            </a>
                        </li>

                        <li className="pc-item">
                            <a href="../other/sample-page.html" className="pc-link">
                                <span className="pc-micon">
                                    <i data-feather="message-square"></i>
                                </span>
                                <span className="pc-mtext">Message</span>
                            </a>
                        </li>

                        {/* Menu Item */}
                        {/* <li className={`pc-item pc-hasmenu ${isOpen('about-levels') ? 'open' : ''}`}>
                            <button
                                className="pc-link w-full text-left"
                                onClick={() => toggleMenu('about-levels')}
                            >
                                <span className="pc-micon">
                                    <i data-feather="home"></i>
                                </span>
                                <span className="pc-mtext">Home</span>
                                <span className="pc-arrow">
                                    <i className="ti ti-chevron-right"></i>
                                </span>
                            </button>


                            {isOpen('about-levels') && (
                                <ul className="pc-submenu">
                                    <li className="pc-item">
                                        <a className="pc-link" href="#!">Riwayat Karier</a>
                                    </li>

                                    <li className="pc-item">
                                        <a className="pc-link" href="#!">Tentang Saya</a>
                                    </li>

                                    <li className={`pc-item pc-hasmenu ${isOpen('level-2-2') ? 'open' : ''}`}>
                                        <a href="#!" className="pc-link" onClick={() => toggleMenu('level-2-2')}>
                                            Level 2.2
                                            <span className="pc-arrow">
                                                <i className="ti ti-chevron-right"></i>
                                            </span>
                                        </a>

                                        {isOpen('level-2-2') && (
                                            <ul className="pc-submenu">
                                                <li className="pc-item">
                                                    <a className="pc-link" href="#!">Level 3.1</a>
                                                </li>
                                                <li className="pc-item">
                                                    <a className="pc-link" href="#!">Level 3.2</a>
                                                </li>

                                                <li className={`pc-item pc-hasmenu ${isOpen('level-3-3') ? 'open' : ''}`}>
                                                    <a href="#!" className="pc-link" onClick={() => toggleMenu('level-3-3')}>
                                                        Level 3.3
                                                        <span className="pc-arrow">
                                                            <i className="ti ti-chevron-right"></i>
                                                        </span>
                                                    </a>

                                                    {isOpen('level-3-3') && (
                                                        <ul className="pc-submenu">
                                                            <li className="pc-item">
                                                                <a className="pc-link" href="#!">Level 4.1</a>
                                                            </li>
                                                            <li className="pc-item">
                                                                <a className="pc-link" href="#!">Level 4.2</a>
                                                            </li>
                                                        </ul>
                                                    )}
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Sidebar
