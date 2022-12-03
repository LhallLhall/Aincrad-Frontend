import React from "react";
export default function LandingHero() {
  return (
    //         <div classNameName="px-4 py-5 my-5 text-center">
    //     {/* <img classNameName="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
    //     <h1 classNameName="display-5 fw-bold">Centered hero</h1>
    //     <div classNameName="col-lg-6 mx-auto">
    //       <p classNameName="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    //       <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center">
    //         <button type="button" classNameName="btn btn-primary btn-lg px-4 gap-3">Learn More!</button>
    //         <button type="button" classNameName="btn btn-outline-secondary btn-lg px-4">Sign Up Now!</button>
    //       </div>
    //     </div>
    //   </div>

    <body className="d-flex h-100 text-center text-bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="#">
                Features
              </a>
              <a className="nav-link fw-bold py-1 px-0" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Learn more
            </a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrap
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" className="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </div>
    </body>

    // <div classNameName='d-flex h-100 text-center text-bg-dark'>
    //   <div classNameName="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    //     <main classNameName="px-3">
    //       <h1>Cover your page.</h1>
    //       <p classNameName="lead">
    //         Cover is a one-page template for building simple and beautiful home
    //         pages. Download, edit the text, and add your own fullscreen
    //         background photo to make it your own.
    //       </p>
    //       <p classNameName="lead">
    //         <a

    //           classNameName="btn btn-lg btn-secondary fw-bold border-white bg-white"
    //         >
    //           Learn more
    //         </a>
    //       </p>
    //     </main>

    //   </div>
    // </div>
  );
}
