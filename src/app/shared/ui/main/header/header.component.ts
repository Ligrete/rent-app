import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  name: string = '';

  urlObserver$ = new BehaviorSubject<string>(this.route.snapshot.firstChild?.url[0]?.path ? this.route.snapshot.firstChild?.url[0].path : '');

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((rt) => {  
      const url = route.snapshot.firstChild?.url[0]?.path ? route.snapshot.firstChild?.url[0].path : '';
      console.log('url', url);
      this.urlObserver$.next(url);
    })
  }
}
