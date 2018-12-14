import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  public menuListData = [
    {
      title: 'Программа лояльности',
      link: 'loyalty-program'
    },
    {
      title: 'Корпоративные заказы',
      link: 'korp'
    },
    {
      title: 'Доставка и оплата',
      link: 'delivery'
    },
    {
      title: 'Контакты',
      link: 'contacts'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
