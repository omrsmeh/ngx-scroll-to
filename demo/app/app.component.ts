import { Component } from '@angular/core';
import { ScrollToService } from '../../src/scroll-to.service';
import { ScrollToTarget } from '../../src/models/scroll-to-target.model';
import { ScrollToConfigOptions } from '../../src/models/scroll-to-options.model';

@Component({
    selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public DUR = 300;

	constructor(private _scrollToService: ScrollToService) { }

	public triggerScrollTo(target: ScrollToTarget) {

		const config: ScrollToConfigOptions = {
			target: target
		}

		this._scrollToService.scrollTo(config);
	}
}
