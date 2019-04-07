import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Leader } from '../shared/leader';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedDish()
    .subscribe((dish) => this.dish = dish);
    this.promotionService.getFeaturedPromotion()
    .subscribe((promotion) => this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
    .subscribe(((leader) => this.leader = leader));
  }

}
