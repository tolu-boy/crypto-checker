import Footer from "./Footer";
import Nav from "./Nav";

type LayoutsProps = {
  children: React.ReactNode; // 👈️ type children
};

const Layout = ({ children }: LayoutsProps) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
