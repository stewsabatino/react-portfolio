export default function NavTabs({ currentPage, handlePageChange }) {
    return(
        <div className="d-flex bg-dark bg-gradient text-white">
            <h2 className="nav flex-grow-1 p-4">Stew Sabatino</h2>
            <ul className="nav nav-tabs pt-5 pe-3">
                <li className="nav-item">
                    <a 
                    href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={currentPage === 'Home' ? 'nav-link active text-dark' : 'nav-link text-white'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    href="#Portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active text-dark' : 'nav-link text-white'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    href="#Contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active text-dark' : 'nav-link text-white'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active text-dark' : 'nav-link text-white'}
                    >
                        Skills
                    </a>
                </li>
                <li className="nav-item">
                    <a className="text-white nav-link"
                    href="/Stew-Sabatino-Resume.pdf"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        
        </div>
    );
};