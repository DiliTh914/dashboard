/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import Dashboard from "../components/dashboard/dashboard";

function Home() {

    const items = () => {
        return {
            categories: {
                name: 'Categories'
            },
            expenses: {
                name: 'Expenses'
            },
            spam: {
                name: 'Spam'
            }
        };
    }

  return (
    <>
      <div className="wrapper">
        {/*<Sidebar color={color} image={hasImage ? image : ""} routes={routes} />*/}
        <Dashboard items={items()} active={'categories'}/>
        {/*<div className="main-panel" ref={mainPanel}>*/}
        {/*  /!*<AdminNavbar />*!/*/}
        {/*  <div className="content">*/}
        {/*    <Routes>{getRoutes(routes)}</Routes>*/}
        {/*  </div>*/}
        {/*  /!*<Footer />*!/*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default Home;
