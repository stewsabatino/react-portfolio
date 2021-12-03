// const footer = {
//     width: "100%"
// }

export default function Footer() {
    return (
            <footer className="bg-dark text-center text-white" >
                <section className="container p-4">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with me on social networks:</span>
                    </div>
                    <div className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/stewsabatino">
                            <i className="fab fa-github"></i>
                            <p>github</p>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/stew-sabatino-62358a220/">
                            <i className="fab fa-linkedin"></i>
                            <p>linkedin</p>
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="https://stewsabatino.github.io/">
                            <i className="fab fa-github"></i>
                            <p>portfolio</p>
                        </a>
                    </div>
                </section>
            </footer>
    );
};