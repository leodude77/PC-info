import React, { Component } from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Nav } from "react-bootstrap";

class Storage extends Component {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div className="Cpu container mt-2">
        <div>
          <h1 className="head">
            <b>Storage</b>
          </h1>
          <h2>Physical Storage Disks</h2>
          <p className="para">
            Physical Disk storage (also sometimes called drive storage) is a
            general category of storage mechanisms where data is recorded by
            various electronic, magnetic, optical, or mechanical changes to a
            surface layer of one or more rotating disks. A disk drive is a
            device implementing such a storage mechanism. Notable types are the
            hard disk drive (HDD) containing a non-removable disk, the floppy
            disk drive (FDD) and its removable floppy disk, and various optical
            disc drives (ODD) and associated optical disc media.
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
              <div style={{ padding: "20px" }}></div>
              <div class="row align-items-center" style={{ padding: "10px" }}>
                <img
                  src="https://i.imgur.com/o0igXIi.png"
                  alt="pog"
                  className="col-12 col-md-4"
                />
                <div className="guide col-md-8">
                  <p>
                    A hard disk drive (HDD) is one of two options for storing
                    your data, along with solid state drives (SSD). Both options
                    can be used to install your operating system and
                    applications, as well as any files—such as videos, audio,
                    and documents. HDDs are slower than SSDs, but you get larger
                    amounts of storage for your money.
                  </p>
                  <h3>Which HDD</h3>
                  <p>
                    If you plan to use an HDD for your operating system and
                    important applications, you definitely want a 7200RPM drive.
                    A Western Digital Black or new Blue, or new Seagate
                    Barracuda have very similar performance, so get whichever is
                    cheapest. For a bit of extra reliability, go with a 7200 RPM
                    HGST drive.
                  </p>
                  <p>
                    For general data storage, any reputable drive is fine. You
                    don't need the speed of a 7200 RPM drive. If using an SSD
                    for your Operating System and not editing large amounts of
                    video or audio, get whatever is cheapest. Again, if you want
                    extra reliability, go with an HGST drive. Or, for real
                    reliability, look into getting additional drives and using
                    RAID for redundancy (See RAID below).
                  </p>
                  <h3>RAID</h3>
                  <ul>
                    <li>
                      A RAID (redundant array of inexpensive disks) is a cheap
                      way to improve HDD read/writes or set up a backup. You
                      will need more than one HDD, and RAID comes with
                      tradeoffs.
                    </li>
                    <li>
                      <b>Raid-0</b>&nbsp;combines two hard drives as a single
                      drive (2 x 1TB drives seen as a single 2TB drive) and
                      increases sequential read and write speeds. However, it
                      doubles your risk of failure, since either drive failing
                      results in you losing all your data. Since the performance
                      increase is rarely felt outside of specific data intensive
                      tasks (games, browsing, and bootup speeds are hardly
                      affected), we do not recommend RAID-0 for most people.
                    </li>
                    <li>
                      <b>Raid-1</b>&nbsp;duplicates your data across two drives.
                      Read speeds are faster, but write speed is unaffected. You
                      lose half your space, but if one of the drives fails, you
                      still have all your data and can use the computer like
                      normal. It's still not quite as reliable as backing up
                      your data externally, but once it's set up, your data is
                      duplicated instantly and without you having to do
                      anything. This is a good option for someone with important
                      data, although not a replacement for external backups.
                    </li>
                  </ul>
                </div>
              </div>
              <div style={{ padding: "20px" }}></div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div style={{ padding: "20px" }}></div>
              <div class="row align-items-center" style={{ padding: "10px" }}>
                <div class="guide col-md-8">
                  <p>
                    Solid State Drives (SSDs) store your computer’s data, just
                    like hard drives (HDDs). Compared to hard drives, SSDs have
                    no moving parts, are silent, are less susceptible to
                    mechanical failure, use less power, and are much faster.
                    However, they’re also more expensive for the amount of
                    storage you get.
                  </p>
                  <p>
                    SSDs are not a necessary component in a PC, but they are
                    considered one of the best upgrades for those who are
                    willing to pay the extra cost.
                  </p>
                  <h3>Brands</h3>
                  <p>
                    Today, nearly any SSD you buy from a good brand will be
                    reliable and long-lasting. Below are some recommendations
                    for our preferred brands, but please keep in mind that new
                    SSDs are introduced regularly, and we may not have the most
                    up-to-date recommendations.
                  </p>
                  <p>
                    <strong>Performance SSDs</strong>
                  </p>
                  <p>Topping the charts; high prices.</p>
                  <ul>
                    <li>
                      <b>Samsung 970 Pro M.2:</b>&nbsp;Available
                      in&nbsp;512GB&nbsp;and&nbsp;1TB
                    </li>
                  </ul>
                  <p>
                    <strong>SATA SSDs</strong>
                  </p>
                  <p>
                    Good performance, great prices. These are the drives to get
                    if you do not know what you are looking for.
                  </p>
                  <ul>
                    <li>
                      <b>Crucial MX500</b>: Available
                      in&nbsp;250GB,&nbsp;500GB,&nbsp;1TB, and&nbsp;2TB.
                    </li>
                    <li>
                      <b>Sandisk Ultra 3D</b>: Available
                      in&nbsp;250GB,&nbsp;500GB,&nbsp;1TB, and&nbsp;2TB.
                    </li>
                    <li>
                      <b>Samsung 860 Evo</b>: Available
                      in&nbsp;250GB,&nbsp;500GB,&nbsp;1TB,&nbsp;2TB,
                      and&nbsp;4TB.
                    </li>
                    <li>
                      <b>Seagate BarraCuda</b>: Available
                      in&nbsp;250GB,&nbsp;500GB&nbsp;1TB, and&nbsp;2TB.
                    </li>
                  </ul>
                  <h3>Using an SSD and HDD</h3>
                  <p>
                    Since SSDs are still relatively expensive for their
                    capacity, the best way to use them is to install your
                    Operating System and most-used programs on the SSD, and have
                    a regular old hard drive to store all your movies, music,
                    games, and other big data files.
                  </p>
                  <h3>SSD Caching</h3>
                  <p>
                    An alternative way of using an SSD is to use it as a cache
                    for your regular hard drive. This simplifies use, because in
                    Windows you just see a single drive, so you don't have to
                    worry about where to install programs or store data. The
                    best way to do SSD caching is to use Intel's Rapid Response
                    Technology, available on high-end chipsets since Z490. To
                    use, install Windows like normal on your regular HDD, then
                    connect your SSD, change a few settings in the BIOS, then
                    install and configure Intel's drivers.&nbsp;
                    <a
                      href="http://www.intel.com/support/chipsets/sb/CS-032826.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Complete instructions are here on the Intel site
                    </a>
                    .
                  </p>
                </div>
                <img
                  src="https://i.imgur.com/IKzkznf.png"
                  alt="pog"
                  className="col-12 col-md-4"
                />
              </div>
              <div style={{ padding: "20px" }}></div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  }
}

export default Storage;
