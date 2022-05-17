import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile container mx-auto px-4">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className="text-3xl  font-bold text-purple-500">Welcome to Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><NavLink to='/dashboard/review'>My Reviews</NavLink></li>
                    <li><NavLink to='/dashboard/history'>My History</NavLink></li>
                    {admin && <>
                        <li><NavLink to='/dashboard/users'>All users</NavLink></li>
                        <li><NavLink to='/dashboard/addDoctor'>Add a doctor</NavLink></li>
                        <li><NavLink to='/dashboard/manageDoctor'>Manage doctors</NavLink></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;