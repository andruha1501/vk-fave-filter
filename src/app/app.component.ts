import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';   
import { ConnectService } from './connect.service';
import { User } from './user';
import { Item } from './item';
import { Group } from './group';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  errorMessage: string;
  faves: User;
  items: Item[];
  groups: Group[];
  profiles: any;
  arr: any[]=[];
  selectedValue: string;
  newArr: any[]=[];
  arrProf: any = [];
  constructor (private connectService: ConnectService) {}
  
  ngOnInit() { this.getHeroes(); }
  getHeroes() {
    this.connectService.getHeroes().then(heroes => this.faves = heroes);
    
  }
  getUsers(): void {
    this.items = this.faves.items;
    this.groups = this.faves.groups;
    this.profiles = this.faves.profiles;
    console.log(this.faves) 
    this.sortPosts();
  }

  
  sortPosts(): void {
    for (let i = 0; i < this.groups.length; i++) {
      this.arr[i]=[];
      for (let j = 0; j < this.items.length; j++) {
        if (this.groups[i].id == Math.abs(this.items[j].owner_id)) {
          this.arr[i].push(this.items[j]);
        }
      }
    }
    console.log(this.arr);
  }

  selectGroup(selValue): void {
    this.newArr=[];
    for (let i = 0; i < this.items.length; i++) {
      if (selValue ==  Math.abs(this.items[i].owner_id)){
        this.newArr.push(this.items[i]);
      }
    }
  }
  
  selectProfile(selProf): void {
    this.arrProf = [];
    for (let i = 0; i < this.items.length; i++) {
      if (selProf == this.items[i].owner_id)
        this.arrProf.push(this.items[i]);
    }
  }

  getPhoto(item: any):string {
    
    if ("attachments" in item) {
      switch(item.attachments[0].type ) {
        case 'photo':  
          return item.attachments[0].photo.photo_604 || item.attachments[0].photo.photo_130;
        case 'doc': {
          let lastItem = item.attachments[0].doc.preview.photo.sizes.length-1;
          return item.attachments[0].doc.preview.photo.sizes[lastItem].src;
        }
        case 'link':
          return item.attachments[0].link.photo.photo_604 || item.attachments[0].link.photo.photo_130
        case 'video': 
          return item.attachments[0].video.photo_800 ||item.attachments[0].video.photo_640; 
        default:
        return  'http://vableasing.com.ua/bitrix/components/custom/leasing.calculator/templates/.default/img/noimage.gif';
      } 
    }
    else 

      return 'http://vableasing.com.ua/bitrix/components/custom/leasing.calculator/templates/.default/img/noimage.gif';
  }

  getText(item): string {
    if ("text" in item)
      return item.text;
  }

  onNavigate(item){
    window.open(`https://vk.com/fave?w=wall${item.owner_id}_${item.id}`, "_blank");
}
 
}


