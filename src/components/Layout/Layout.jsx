import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
