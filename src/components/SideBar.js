import React from 'react';
import LogoDH from '../assets/images/logo-DH.png'

let options = ["Pages","Charts","Tables"];

function SideBar() {
    return (
        
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={LogoDH} alt="Digital House" />
				</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - DH movies</span></a>
			</li>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Actions</div>

			{options.map( (options, index) =>			
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i key={index} className="fas fa-fw fa-folder"></i>
					<span>{options}</span>
				</a>
			</li>)}
			

			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
        
    );
    }
    export default SideBar;