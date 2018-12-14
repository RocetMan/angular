import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

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
