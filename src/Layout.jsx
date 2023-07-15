import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from "./Footer";



const Layout = ({selectedTeam, teamMemberCount}) => {
    return (
        <>
        <Header  selectedTeam={selectedTeam} teamMemberCount={teamMemberCount} />
        <Outlet />
        <Footer />
        </>
    );
}

export default Layout;