const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', opacity: 0.6 }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Himanshu Gupta. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
