const gpu = [
  {
    name: "NVIDIA RTX 3090",
    img:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-630-d.png",
    cores: "10496",
    clock: "1.70 Ghz",
    bclock: "1.4 Ghz",
    msize: "24 GB",
    mtype: "GDDR6X",
    price: "133500",
    link:
      "https://www.nvidia.com/en-in/geforce/graphics-cards/30-series/rtx-3090/",
    brand: "nvidia",
    watt: "350 W",
    aibs: [
      {
        name: "NVIDIA RTX 3090 Founders Edition",
        price: "1500",
        imgLink:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3090/geforce-rtx-3090-shop-630-d.png",
      },
      {
        name: "MSI RTX 3090 VENTUS 3X OC",
        price: "1550",
        imgLink:
          "https://asset.msi.com/resize/image/global/product/product_7_20200902105359_5f4f094799162.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      },
      {
        name: "Asus RTX 3090 TUF GAMING OC",
        price: "1600",
        imgLink:
          "https://dlcdnwebimgs.asus.com/gain/3504f9d0-adf9-4ffe-8e66-b225fc1f35e1/",
      },
      {
        name: "Gigabyte RTX 3090 AORUS XTREME",
        price: "1800",
        imgLink:
          "https://www.gigabyte.com/FileUpload/Global/WebPage/664/img/4.png",
      },
      {
        name: "EVGA RTX 3090 FTW3 ULTRA",
        price: "1800",
        imgLink:
          "https://images.evga.com/products/gallery/png/24G-P5-3987-KR_XL_3.png",
      },
    ],
  },
  {
    name: "NVIDIA RTX 3080",
    img:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/geforce-rtx-3080-shop-462-l.png",
    cores: "8704",
    clock: "1.71 Ghz",
    bclock: "1.44 Ghz",
    msize: "10 GB",
    mtype: "GDDR6X",
    price: "62000",
    link:
      "https://www.nvidia.com/en-in/geforce/graphics-cards/30-series/rtx-3080/",
    brand: "nvidia",
    watt: "320 W",
    aibs: [
      {
        name: "NVIDIA RTX 3080 Founders Edition",
        price: "700",
        imgLink:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3080/geforce-rtx-3080-shop-462-l.png",
      },
      {
        name: "EVGA RTX 3080 FTW3",
        price: "810",
        imgLink:
          "https://images.evga.com/products/gallery/png/10G-P5-3897-KR_XL_3.png",
      },
      {
        name: "Gigabyte RTX 3080 AORUS MASTER",
        price: "850",
        imgLink:
          "https://www.gigabyte.com/FileUpload/Global/WebPage/651/img/4.png",
      },
      {
        name: "Asus RTX 3080 STRIX GAMING OC",
        price: "850",
        imgLink:
          "https://dlcdnwebimgs.asus.com/gain/CB372C9B-0845-4E72-A13C-41CB0D979242/w1000/h732",
      },
      {
        name: "MSI RTX 3080 SUPRIM X",
        price: "900",
        imgLink:
          "https://asset.msi.com/resize/image/global/product/product_1605863418f46c80a477cb3e81bf5a6f92bcc3c04f.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      },
    ],
  },
  {
    name: "NVIDIA RTX 3070",
    img:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-462-l.png",
    cores: "5888",
    clock: "1.73 Ghz",
    bclock: "1.5 Ghz",
    msize: "8 GB",
    mtype: "GDDR6",
    price: "44500",
    link:
      "https://www.nvidia.com/en-in/geforce/graphics-cards/30-series/rtx-3070/",
    brand: "nvidia",
    watt: "220 W",
    aibs: [
      {
        name: "NVIDIA RTX 3070 Founders Edition",
        price: "500",
        imgLink:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-462-l.png",
      },
      {
        name: "EVGA RTX 3070 XC3 GAMING",
        price: "530",
        imgLink:
          "https://images.evga.com/products/gallery/png/08G-P5-3755-KR_XL_2.png",
      },
      {
        name: "PNY GeForce RTX 3070",
        price: "540",
        imgLink:
          "https://www.pny.com/productimages/146F05E7-12C2-4FAD-B11A-AC2901200F4B/images/XLR8-RTX-3070-EPIC-X-Triple-Fan-P-top-4.png",
      },
      {
        name: "Asus RTX 3070 TUF GAMING OC",
        price: "560",
        imgLink:
          "https://dlcdnwebimgs.asus.com/gain/0b57825d-b7b7-48df-8ab9-940965fc6cbc/",
      },
      {
        name: "MSI RTX 3070 GAMING X TRIO",
        price: "580",
        imgLink:
          "https://asset.msi.com/resize/image/global/product/product_16036988629d55e2a540b254c63fdb2ad1d77eaf1e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      },
    ],
  },
  {
    name: "NVIDIA RTX 3060 Ti",
    img:
      "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-462-l.png",
    cores: "4864",
    clock: "1.67 Ghz",
    bclock: "1.41 Ghz",
    msize: "8 GB",
    mtype: "GDDR6",
    price: "35900",
    link:
      "https://www.nvidia.com/en-in/geforce/graphics-cards/30-series/rtx-3060-ti/",
    brand: "nvidia",
    watt: "200 W",
    aibs: [
      {
        name: "NVIDIA RTX 3060 Ti Founders Edition",
        price: "400",
        imgLink:
          "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/rtx-3070/geforce-rtx-3070-shop-462-l.png",
      },
      {
        name: "EVGA RTX 3060 Ti XC GAMING",
        price: "410",
        imgLink:
          "https://images.evga.com/products/gallery/png/08G-P5-3663-KR_XL_2.png",
      },
      {
        name: "Gigabyte RTX 3060 Ti GAMING OC ",
        price: "440",
        imgLink:
          "https://www.gigabyte.com/FileUpload/Global/WebPage/716/img/2.png",
      },
      {
        name: "PNY RTX 3060 Ti XLR8",
        price: "460",
        imgLink:
          "https://www.pny.com/productimages/56354AC6-E81B-466D-AEA2-AC84008F923D/images/12_PNY-GeForce-RTX-3060Ti-LED-Blue-top-2.png",
      },
      {
        name: "MSI RTX 3060 Ti GAMING X TRIO",
        price: "480",
        imgLink:
          "https://asset.msi.com/resize/image/global/product/product_1606821349bf1f65a9d2c2e875737813ce2e4ebdaf.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
      },
    ],
  },
  {
    name: "AMD Radeon RX 6900XT",
    cores: "5120",
    clock: "2250 Mhz",
    bclock: "2015 Mhz",
    msize: "16 GB",
    mtype: "GDDR6",
    img:
      "https://www.amd.com/system/files/styles/496px/private/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png?itok=dL44HgYl",
    link: "https://www.amd.com/en/products/graphics/amd-radeon-rx-6900-xt",
    brand: "amd",
    watt: "300 W",
    price: "92000",
    aibs: [
      {
        name: "AMD RX 6900XT Founders",
        price: "1000",
        imgLink:
          "https://www.amd.com/system/files/styles/496px/private/2020-10/579976-radeon-rx-6000xt-left-angle-1260x709_0.png?itok=dL44HgYl",
      },
    ],
  },
  {
    name: "AMD Radeon RX 6800XT",
    cores: "4608",
    clock: "2250 Mhz",
    bclock: "2015 Mhz",
    msize: "16 GB",
    mtype: "GDDR6",
    img:
      "https://www.amd.com/system/files/styles/992px/private/2020-09/579976-radeon-6900xt-6800xt-1260x709.png?itok=g9_xEOWT",
    link: "https://www.amd.com/en/products/graphics/amd-radeon-rx-6800-xt",
    brand: "amd",
    watt: "300 W",
    price: "75000",
    aibs: [
      {
        name: "AMD RX 6800XT Founders",
        price: "650",
        imgLink:
          "https://www.amd.com/system/files/styles/992px/private/2020-09/579976-radeon-6900xt-6800xt-1260x709.png?itok=g9_xEOWT",
      },
    ],
  },
  {
    name: "AMD Radeon RX 6800",
    cores: "3840",
    clock: "2105 Mhz",
    bclock: "1815 Mhz",
    msize: "16 GB",
    mtype: "GDDR6",
    img:
      "https://www.amd.com/system/files/styles/496px/private/2020-10/579976-amd-radeon-6800-1260x709.png?itok=jmdBqtwi",
    link: "https://www.amd.com/en/products/graphics/amd-radeon-rx-6800",
    brand: "amd",
    watt: "250 W",
    price: "60000",
    aibs: [
      {
        name: "AMD RX 6800 Founders",
        price: "580",
        imgLink:
          "https://www.amd.com/system/files/styles/496px/private/2020-10/579976-amd-radeon-6800-1260x709.png?itok=jmdBqtwi",
      },
    ],
  },
  {
    name: "AMD Radeon RX 5700XT",
    cores: "2560",
    clock: "1980 Mhz",
    bclock: "1680 Mhz",
    msize: "8 GB",
    mtype: "GDDR6",
    img:
      "https://www.amd.com/system/files/2019-06/237107-rx5700xt-gold-gpu-gallery1-1260x709.png",
    link:
      "https://www.amd.com/en/products/graphics/amd-radeon-rx-5700-xt-50th-anniversary",
    brand: "amd",
    watt: "225 W",
    price: "38000",
    aibs: [
      {
        name: "AMD RX 5700XT Founders",
        price: "500",
        imgLink:
          "https://www.amd.com/system/files/2019-06/237107-rx5700xt-gold-gpu-gallery1-1260x709.png",
      },
    ],
  },
];

export default gpu;
