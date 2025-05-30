function Footer() {
    return (
        <footer className="pc-footer">
            <div className="footer-wrapper container-fluid mx-10">
                <div className="grid grid-cols-12 gap-1.5">
                    <div className="col-span-12 sm:col-span-6 my-1">
                        <p className="m-0"></p>
                        <a href="https://codedthemes.com/"
                            className="text-theme-bodycolor dark:text-themedark-bodycolor hover:text-primary-500 dark:hover:text-primary-500"
                            target="_blank">Fullstack Programmer</a>
                        , Built with ♥ for a smoother web presence.
                    </div>
                    <div className="col-span-12 sm:col-span-6 my-1 justify-self-end">
                        <p className="inline-block max-sm:mr-3 sm:ml-2">Profile by <a href="https://themewagon.com"
                            target="_blank">Ricky Agung Sumiranto</a></p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
