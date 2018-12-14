import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  public categoryListData = [
    {
      title: 'Новинки',
      link: 'new'
    },
    {
      title: 'Мужское',
      link: 'mans'
    },
    {
      title: 'Женское',
      link: 'woman'
    },
    {
      title: 'Обувь',
      link: 'shoes'
    },
    {
      title: 'Куртки',
      link: 'jackets'
    },
    {
      title: 'Футболки',
      link: 't-shirts'
    },
    {
      title: 'Брюки',
      link: 'pants'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
