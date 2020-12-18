import React, { Component } from "react";
import CPUS from "./Assets/Cpu";
import GPUS from "./Assets/gpu"
import MB from "./Assets/mb"
import PSU from "./Assets/psu"
import "./style.css";

class build extends Component {
  constructor(props){
    super(props);
    this.state ={
      wattage : 0,
      cpuImg : '',
      gpuImg : '',
      mbImg: '',
      psuImg: '',
      ramImg: '',
      price : 0,
      gpu_cpu_Price: 0,
      mbPrice : 0,
      ramPrice : 0,
      stoPrice : 0,
      psuPrice : 0
    }
  }
  
  //calculate total wattage
  calWatt = () => {
    var cpu = document.getElementById("cpuSel");
    var gpu = document.getElementById("gpuSel");
    var cpuImg,gpuImg;
    var price=0;
    var wattage=0;
    for(var i=0; i<GPUS.length; i++){
      if(gpu.options[gpu.selectedIndex].text === GPUS[i].name){
        wattage = parseInt(GPUS[i].watt);
        gpuImg = GPUS[i].img;
        price = parseInt(GPUS[i].price);
      }
    }
    for(var index =0 ; index <CPUS.length ; index++){
      if(cpu.options[cpu.selectedIndex].text === CPUS[index].name){
         wattage += parseInt(CPUS[index].tdp);
         cpuImg = CPUS[index].img;
         price += parseInt(CPUS[index].price);
      }
    }
    console.log(price)
    console.log(wattage)
    wattage += 300;
    wattage = wattage - (wattage%50);
    this.setState({
      wattage : wattage,
      cpuImg : cpuImg,
      gpuImg : gpuImg,
      gpu_cpu_Price: price
    })
    this.dispMb();
    this.totalPrice();
  }

  //display Motherboard
  dispMb = () => {
    var mb = document.getElementById("mbSel");
    for(var i=0; i<MB.length; i++){
      if(mb.options[mb.selectedIndex].text === MB[i].name){
        this.setState({
          mbImg : MB[i].img,
          mbPrice : parseInt(MB[i].price)
        })
        break;
      }
    }
  }

  //display power supply
  dispPsu = () => {
    var psu = document.getElementById("psuSel");
    for(var i=0; i<PSU.length; i++){
      if(psu.options[psu.selectedIndex].text === PSU[i].name){
        this.setState({
          psuImg : PSU[i].img,
          psuPrice : parseInt(PSU[i].price)
        })
        break;
      }
    }
  }

  //ram calc
  calRam = (ram) =>{
    var ramsticks = document.getElementById("ramSel");
    var price = (3000 * ramsticks.value * ram)/8;
    this.setState({
      ramPrice : price,
      ramImg : "https://i.imgur.com/xruEaR4.png"
    })
    this.totalPrice()
  }
  
  //storage calc
  calStorage = (storage) => {
    var stoAmount = document.getElementById("stoSel")
    var price,img;
    if(storage === "ssd"){
       price = stoAmount.value * 5000;
       img = "https://i.imgur.com/IKzkznf.png";
    }
    else if(storage === "hdd"){
      price = stoAmount.value * 2500;
      img = "https://i.imgur.com/o0igXIi.png";
    }
    else {
      price = stoAmount.value * 10000;
      img = "https://i.imgur.com/2Q14Aiy.png"
    }
    this.setState({
      stoPrice : price,
      stoImg : img
    })
  }

  //Calculate Price of build
  totalPrice = () => {
    this.setState({
      price : parseInt(this.state.psuPrice + this.state.gpu_cpu_Price + this.state.mbPrice + this.state.ramPrice + this.state.stoPrice)
    })
    console.log(this.state)
  }


  //to check compatible chipset
  mbVerify = () => {
    var cpu  = document.getElementById("cpuSel");
    var mb = document.getElementById("mbSel");
    while (mb.options.length > 0) {                
      mb.remove(0);
    }
    if(cpu.value === "amd"){
      mb.options[mb.options.length] = new Option('X570', 'amd');
      mb.options[mb.options.length] = new Option('B550', 'amd');
      mb.options[mb.options.length] = new Option('A520', 'amd');
    }
    else{
      mb.options[mb.options.length] = new Option('Z490', 'intel');
      mb.options[mb.options.length] = new Option('H470', 'intel');
      mb.options[mb.options.length] = new Option('B460', 'intel');
    }
    this.calWatt();
  }
  
  render() {
    return (
      <div className="container full-height" >
        <div>
          <h1 className="head">Build your pc</h1>
          <div className="horizontal-rule"></div>
          <div className="col-4 offset-8"><p className="buildFont" style={{fontSize: "2vmin"}}>Recommended Wattage : <strong>{this.state.wattage} W </strong></p></div>
          <div>
            <form>
              
              {/* CPU */}
              <div className="align-items-center row">
                <div className="col-sm-3">
                  <label className="buildFont">CPU</label>
                  <select className="custom-select" name="cpuSel" id="cpuSel" onChange={this.mbVerify} onClick={this.totalPrice} defaultValue="">
                    <option hidden value="">Select CPU</option>
                    <option value="amd">AMD Ryzen 9 3950x</option>
                    <option value="amd">AMD Ryzen 9 3900x</option>
                    <option value="amd">AMD Ryzen 7 3800x</option>
                    <option value="amd">AMD Ryzen 7 3700x</option>
                    <option value="amd">AMD Ryzen 5 3600</option>
                    <option value="intel">Intel i9-10900k</option>
                    <option value="intel">Intel i7-10700k</option>
                    <option value="intel">Intel i5-10600k</option>
                    <option value="intel">Intel i3-10320</option>
                  </select> 
                </div> 
                <div className="col-md-9" style={{height: "10vmax", overflow: "hidden"}}>
                  <img src={this.state.cpuImg} alt="" style={{maxWidth:  "20vmax"}}/>
                </div>
              </div>
              <div className="horizontal-rule"></div>
              
              {/* Motherboard */}
              <div className="align-items-center row" >
                <div className="col-sm-3">
                  <label className="buildFont">Motherboard</label>
                  <select className="custom-select" name="mbSel" id="mbSel" onClick={()=> {this.dispMb(); this.totalPrice()}}>
                    <option hidden value="">Select Motherboard</option>
                    <option value="amd">X570</option>
                    <option value="amd">B550</option>
                    <option value="amd">A520</option>
                    <option value="intel">Z490</option>
                    <option value="intel">H470</option>
                    <option value="intel">B460</option>
                  </select> 
                </div>
                <div className="col-md-9" style={{size: "10vmax", overflow: "hidden"}}>
                  <img src={this.state.mbImg} alt="" style={{maxWidth:  "20vmax"}}/>
                </div>
              </div>
             <div className="horizontal-rule"></div>

             {/* GPU */}
             <div className="row  align-items-center" style={{height: "20vmin"}}>
                <div className="col-md-3">
                  <label className="buildFont">GPU</label>
                  <select className="custom-select" name="gpuSel" id="gpuSel" onClick={this.totalPrice} onChange={this.calWatt}>
                    <option hidden value="">Select GPU</option>
                    <option value="nvidia">NVIDIA RTX 3090</option>
                    <option value="nvidia">NVIDIA RTX 3080</option>
                    <option value="nvidia">NVIDIA RTX 3070</option>
                    <option value="nvidia">NVIDIA RTX 3060 Ti</option>
                    <option value="amd">AMD Radeon RX 6900XT</option>
                    <option value="amd">AMD Radeon RX 6800XT</option>
                    <option value="amd">AMD Radeon RX 6800</option>
                    <option value="amd">AMD Radeon RX 5700XT</option>
                  </select> 
                </div>
                <div className="col-md-9" style={{height: "10vmax"}} >
                  <img src={this.state.gpuImg} alt="" style={{maxWidth:  "20vmax"}}/>
                </div>
             </div>
             <div className="horizontal-rule"></div>

             {/* Ram */}
              <div className="row align-items-center" style={{height: "20vmin"}}>
                <div className="col-md-3 ">
                  <label className="buildFont">RAM</label>
                  <select className="custom-select" name="ramSel" id="ramSel">
                    <option hidden value="">Select RAM</option>
                    <option value="64">64 gb</option>
                    <option value="32">32 gb</option>
                    <option value="16">16 gb</option>
                    <option value="8">8 gb</option>
                  </select> 
                </div> 
                <div className="offset-1 col-md-3">
                  <label className="buildFont">Number of Sticks</label>
                  <div className="row">
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="1s" value="1" onClick = {() => {this.calRam(1);}}/>
                      <label class="form-check-label buildFont" for="1s">
                          1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="2s" value="2"  onClick = {() => {this.calRam(2);}}/>
                      <label class="form-check-label buildFont" for="2s">
                          2
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="3s" value="3"  onClick = {() => {this.calRam(3); }}/>
                      <label class="form-check-label buildFont" for="3s">
                          3
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="4s" value="4"  onClick = {() => {this.calRam(4); }}/>
                      <label class="form-check-label buildFont" for="4s">
                          4
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={this.state.ramImg} alt="" style={{maxWidth: "30vmin"}}/>
                </div>
              </div>
              <div className="horizontal-rule"></div>
              
              {/* Storage */}
              <div className="row align-items-center" style={{height: "20vmin"}}>
                <div className="col-md-3 ">
                  <label className="buildFont">Storage</label>
                  <select className="custom-select" name="stoSel" id="stoSel">
                    <option hidden value="">Select Amount of Storage</option>
                    <option value="4">4 TB</option>
                    <option value="2">2 TB</option>
                    <option value="1">1 TB</option>
                  </select> 
                </div> 
                <div className="offset-1 col-md-3">
                  <label className="buildFont">Type of Storage</label>
                  <div className="row">
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios1" id="hdd" value="hdd" onClick={() => {this.calStorage("hdd"); this.totalPrice()}} />
                      <label class="form-check-label buildFont" for="hdd">
                          HDD
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios1" id="hdd" value="sata"  onClick={() => {this.calStorage("ssd"); this.totalPrice()}}/>
                      <label class="form-check-label buildFont" for="sata">
                          SATA SSD
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios1" id="hdd" value="nvme"  onClick={() => {this.calStorage("nvme"); this.totalPrice()}}/>
                      <label class="form-check-label buildFont" for="nvme">
                          NVME SSD
                      </label>
                    </div>
                  </div>
                </div>
                <div className="offset-1">
                  <img src={this.state.stoImg} alt="" style={{maxWidth: "20vmin"}}/>
                </div>
              </div> 
              <div className="horizontal-rule"></div>
              
              {/* Power Supply */}
              <div className="row align-items-center" style={{height: "20vmin"}}>
                <div className="col-md-3">
                  <label className="buildFont">Power Supply</label>
                  <select className="custom-select" name="psuSel" id="psuSel" onChange= {this.dispPsu} onClick={this.totalPrice}>
                    <option hidden value="">Select Power Supply</option>
                    <option value="1000">1200 W</option>
                    <option value="750">750 W</option>
                    <option value="600">600 W</option>
                    <option value="450">450 W</option>
                  </select> 
                </div>
                <div className="col-md-9" style={{height: "10vmax"}} >
                  <img src={this.state.psuImg} alt="" style={{maxWidth:  "23vmin"}}/>
                </div> 
              </div> 
              <div style={{padding: "20px"}} ></div>

              {/* final price     */}
              <div className= "buildFont " style={{padding: "40px", border: "1px solid white", borderRadius: "10px"}}>
                <h1 >Final Price : {this.state.price}</h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default build;
