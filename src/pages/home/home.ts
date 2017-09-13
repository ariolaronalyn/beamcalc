import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // items = {
  //   model: null,
  //   types: [
  //     {id: '1', name: 'Option A'},
  //     {id: '2', name: 'Option B'},
  //     {id: '3', name: 'Option C'}
  //   ]
  // };
  
  constructor(public navCtrl: NavController) {
    // this.
  }
  
  items = [
    'Simply Supported',
    'Cantilever',
    'Fixed-end',
    'Overhang'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    
    if(item == 'Simply Supported') {
      this.navCtrl.push('SimplyPage', {
        item: item
      });
    } else if(item == 'Cantilever') {
      this.navCtrl.push('CantileverPage', {
        item: item
      });
    } else if(item == 'Fixed-end') {
      this.navCtrl.push('FixedPage', {
        item: item
      });
    } else if(item == 'Overhang') {
      this.navCtrl.push('OverhangPage', {
        item: item
      });
    }
  }
  
  
  /**
   * Navigate to the detail page for this item.
   */
  // openItem(item: Item) {
    
  // }

}
