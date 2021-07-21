import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
