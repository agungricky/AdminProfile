import Sidebar from "@/Layouts/main/Sidebar";
import Navbar from "@/Layouts/main/Navbar";
import Footer from "@/Layouts/main/Footer";

function Main({ children }) {
    return (
        <>
            <Sidebar />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Main
