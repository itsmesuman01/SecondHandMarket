import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
