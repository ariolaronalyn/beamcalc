import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Items } from '../../providers/providers';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-beam-computation',
  templateUrl: 'beam-computation.html'
})
export class BeamComputationPage {
  // item: any;
  public selectedItem;
  
  form: {   
    reaction: number,
    load:number,
    pl:number,
    distributed:number,
    varying:number,
    moment:number,
    ml:number,
    beamlength:number,
    module:number,
    inertia:number, 
  } =  {
    reaction: 0,
    load:0,
    pl:0,
    distributed:0,
    varying:0,
    moment:0,
    ml:0,
    beamlength:0,
    module:0,
    inertia:0,
     
  };
  
  // form = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.item = navParams.get('item') || items.defaultItem;
    this.selectedItem = navParams.get("item");
    
  }
  
  solve() {
    // console.log(this.form); 
    var beamlengthValue = Number(this.form.beamlength);
    var plValue = Number(this.form.pl);
    var mlValue = Number(this.form.ml); 
    var reactionValue = Number(this.form.reaction);
    var loadValue = Number(this.form.load);
    var distributedValue = Number(this.form.distributed);
    var varyingValue = Number(this.form.varying);
    var momentValue = Number(this.form.moment);
    var moduleValue = Number(this.form.module);
    var inertiaValue = Number(this.form.inertia);
     
     //also, validate required fields
    if(beamlengthValue < plValue){
      alert('lenght of beam should be greater than pl'); 
    }else if(beamlengthValue < mlValue ){
      alert('(l) lenght of beam should be greater than ml');
    }else{
      // var reactionFormula = (p/L)(L-PL) + 0.167(V)(L) + w(L/2) + (m/L);
      var reactionFormula = (loadValue / beamlengthValue) * (beamlengthValue - plValue) + (0.167 * (varyingValue * beamlengthValue)) + (distributedValue*(beamlengthValue/2)) + (momentValue/beamlengthValue);
      // alert(reactionFormula);
      
      if(reactionValue != reactionFormula){
        alert('invalid value of reaction'+reactionFormula);
      }else{
        //proceed to computations
      }
    }
  }

 
    
}
