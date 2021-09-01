import React, { useState, useEffect } from "react";
import "./sideNav.css";

import * as AiIcons from "react-icons/ai";

const SideNavMenu = () => {

    const [inactive, setInactive] = useState(false);
    const [userName, setUserName] = useState(() => {
        const loginUser = localStorage.getItem('login');

        return loginUser;
    });

    function menuBtnChange() {
        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    }

    function closeBtnHandleClick() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
        setInactive(!inactive);
        menuBtnChange();
    }

    return (
        <>
            <div class="sidebar" >
                <div class="logo-details" >
                    <div class="logo_name" > {userName} </div>
                    <i class='bx bx-menu' id="btn" onClick={closeBtnHandleClick} >
                        <div class="line1" ></div>
                        <div class="line2" ></div>
                        <div class="line3" ></div>
                    </i>
                </div>
                <ul class="nav-list" >
                    <li >
                        <a href="/home" >
                            <i class='bx bx-grid-alt' >
                                <AiIcons.AiOutlineHome />
                            </i>
                            <span class="links_name" > Home </span>
                        </a>
                        <span class="tooltip" > Home </span>
                    </li>
                    <li >
                        <a href="/project" >
                            <i class='bx bx-user' >
                                <AiIcons.AiOutlineProject />
                            </i>
                            <span class="links_name" > Projects </span>
                        </a>
                        <span class="tooltip" > Projects </span>
                    </li>
                    <li class="profile" >
                        <a href="/profile" >
                            <i class='bx bx-log-out' id="log_out" >
                                <AiIcons.AiOutlineUser />
                            </i>
                            <span class="links_name" > Profile </span>
                        </a>
                        <span class="tooltip" > Profile </span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SideNavMenu;