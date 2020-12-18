import React, { Component } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Nav } from "react-bootstrap";

class Storage extends Component {
  

  render() {
    

    return (
      <div className="Cpu container mt-2">
        <div >
          <h1 className="head">
            <b>Storage</b>
          </h1>
          <h2>Physical Storage Disks</h2>
          <p>
          Physical Disk storage (also sometimes called drive storage) is a general category of storage mechanisms where data is recorded by various electronic, magnetic, optical, or mechanical changes to a surface layer of one or more rotating disks. A disk drive is a device implementing such a storage mechanism. Notable types are the hard disk drive (HDD) containing a non-removable disk, the floppy disk drive (FDD) and its removable floppy disk, and various optical disc drives (ODD) and associated optical disc media.
          </p>
        </div>

        <div className="col-12 ce" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="col-12 col-sm-10 offset-sm-1 ce p-2">
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.amd.com/system/files/2020-06/ryzen-chip-copper-circuit-board-1260x709.jpg",
                  "_blank"
                )
              }
            >
              <img
                className="ce"
                style={{ maxWidth: "100%" }}
                src="https://www.extremetech.com/wp-content/uploads/2020/09/Hard-Drive-PCMag.jpg"
                alt="cpu-ryzen"
              />
            </div>
          </div>
        </div>
        <div className="horizontal-rule"></div>
        <h1 className="head">
          <b>Different Types of Storage</b>
        </h1>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills">
            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="first">Physical Drives</Nav.Link>
            </Nav.Item>

            <Nav.Item className="col-sm-6 m-0 p-0">
              <Nav.Link eventKey="second">Solid State Drives</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
                <div style={{padding : "20px"}}></div>
                <div class="row align-items-center" style = {{padding:"10px"}}>
                    <img src="https://i.imgur.com/o0igXIi.png" alt="pog" className="col-12 col-md-4"/>
                    <p className="col-12 col-md-8">A hard disk drive (HDD), hard disk, hard drive, or fixed disk[b] is an electro-mechanical data storage device that stores and retrieves digital data using magnetic storage and one or more rigid rapidly rotating platters coated with magnetic material. The platters are paired with magnetic heads, usually arranged on a moving actuator arm, which read and write data to the platter surfaces. Data is accessed in a random-access manner, meaning that individual blocks of data can be stored and retrieved in any order. HDDs are a type of non-volatile storage, retaining stored data even when powered off.</p>
                </div>
                <div style={{padding : "20px"}}></div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <div style={{padding : "20px"}}></div>
                <div class="row align-items-center" style = {{padding:"10px"}}>
                    <p className="col-12 col-md-8">A solid-state drive (SSD) is a solid-state storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory, and functioning as secondary storage in the hierarchy of computer storage. It is also sometimes called a solid-state device or a solid-state disk, even though SSDs lack the physical spinning disks and movable read–write heads used in hard disk drives (HDDs) and floppy disks.</p>
                    <img src="https://i.imgur.com/IKzkznf.png" alt="pog" className="col-12 col-md-4"/>
                </div>
                <div style={{padding : "20px"}}></div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default Storage;
