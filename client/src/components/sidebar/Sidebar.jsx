import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src="https://i.insider.com/632a05504f9291001883e559?width=1000&format=jpeg&auto=webp"
                    alt=""
                />
                <p>HEA Blog believes that becoming a parent is one of the most challenging and rewarding things you'll ever do.
                    We are here to help you make it through your pregnancy and making mom's life easier for you.
                    Also our vision is to create a world of healthy pregnancies, thriving children, and confident moms.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Mother</li>
                    <li className="sidebarListItem">Child</li>
                    <li className="sidebarListItem">Advices</li>

                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>

            </div>

        </div>
    );
}
