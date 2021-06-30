import React from 'react';

function CpuTextInfo () {
    return <div>
    <h1 className="head">
      <b>CPU</b>
    </h1>
    <h2>Central Processing Unit</h2>
    <p style={{ fontSize: "1.2rem", lineHeight: "1.3" }}>
      A Central Processing Unit (CPU) is the brain of the computer. This
      is what runs all your programs, calculations, and operations.
    </p>
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
            src="https://www.amd.com/system/files/2020-06/ryzen-chip-copper-circuit-board-1260x709.jpg"
            alt="cpu-ryzen"
          />
        </div>
      </div>
    </div>
    <div className="horizontal-rule"></div>
    <div className="mt-4 guide" style={{ textAlign: "left" }}>
      <h3>How Powerful does the CPU need to be?</h3>

      <p>
        Modern CPUs are quite powerful, and the cheapest ones would be
        enough for someone simply browsing the web, using Office, and
        watching YouTube or Netflix. Games and serious work applications
        will see significant benefit from more powerful CPUs, and may not
        run at all on a weak CPU.
      </p>

      <h3>AMD or Intel?</h3>

      <p>
        The two major CPU manufacturers are AMD and Intel. Deciding
        between these two brands generally depends on what price bracket
        you are looking at. It is better to evaluate the available
        products to see what fits your needs, instead of comparing
        companies as a whole.
      </p>

      <p>
        <strong>The AMD lineup</strong>&nbsp;(grouped by family):
      </p>

      <ul>
        <li>
          <b>Ryzen 3</b>: 4 core CPUs meant for budget builds. Good for
          everyday usage.
        </li>
        <li>
          <strong>Ryzen 5</strong>: 4 -&nbsp;6 cores, aimed at mid-tier
          builds. Balanced, and a typical choice for AMD gaming systems.
        </li>
        <li>
          <strong>Ryzen 7</strong>: 8 core CPUs, for mid-to-high builds,
          where more power is needed. As more modern games begin
          to&nbsp;take advantage of 8 core systems, those with bigger
          budgets typically pick CPUs from this range for high-end gaming
          rigs.
        </li>
        <li>
          <strong>Ryzen 9</strong>: 12 - 16 cores. For those who need
          serious computing power. Great for those who play games and get
          serious work done on the same machine. Pricey!
        </li>
      </ul>

      <p>
        <strong>The Intel lineup</strong>&nbsp;(grouped by family):
      </p>

      <ul>
        <li>
          Core&nbsp;<b>i3</b>: 2 - 4 cores,&nbsp;good for low-tier and
          mid-tier gaming.
        </li>
        <li>
          Core&nbsp;<b>i5</b>: 4 - 6 cores. A&nbsp;balanced
          choice&nbsp;for Intel gaming builds, but with a price increase.
        </li>
        <li>
          Core&nbsp;<b>i7</b>: 4 - 8 cores. As game developers have begun
          to take advantage of higher core counts, i7 CPUs have become
          common choices for high-end gaming builds. But the performance
          increase comes with a price premium.
        </li>
        <li>
          Core&nbsp;<b>i9</b>: 8-10 core CPUs, typically Intel's best
          performers.
        </li>
      </ul>

      <p>
        <strong>So what is the best CPU?</strong>
      </p>

      <p>Going by price brackets:</p>

      <ul>
        <li>
          A person buying the cheapest possible PC should look into the
          cheapest CPU with an integrated GPU, with a matching mobo.
          Athlons, Celerons, and Pentiums suit this range.
        </li>
        <li>
          If you are on a tight budget (less than Rs. 40000 total PC
          cost), a Ryzen 3 or Core i3 should be good.
        </li>
        <li>
          If you are on a moderate budget (40000 - 80000 total PC cost), a
          Core i5 or Ryzen 5 CPU should be good.
        </li>
        <li>
          With a higher budget (80000 - 150,000 total PC cost), Ryzen 7 or
          Core i7 CPUs are currently the best options.
        </li>
        <li>
          Builders with budgets above Rs. 150,000 for their whole PC
          should consider Core i9 or Ryzen 9 CPUs.
        </li>
      </ul>
    </div>
  </div>
}


export default CpuTextInfo;