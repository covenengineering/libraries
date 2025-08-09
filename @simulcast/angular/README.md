<img alt="Simulcast Angular logo" src="https://raw.githubusercontent.com/covenengineering/libraries/main/@simulcast/angular/logo.svg" height="108" />

[![JSR](https://jsr.io/badges/@simulcast/angular)](https://simulcast.coven.to/angular)
[![JSR Score](https://jsr.io/badges/@simulcast/angular/score)](https://simulcast.coven.to/angular/score)

📡 [Angular](https://angular.dev/) service for
[`@simulcast/core`](https://simulcast.coven.to/core).

## Example

```typescript
import { broadcast } from "@simulcast/core";

const { registry } = broadcast<{ click: MouseEvent }>();

@Component({
	standalone: true,
	selector: "angular-component",
	template: `
		<button
			(click)="broadcast.emitClick($event)"
			type="button"
		>
			Click me!
		</button>
	`,
})
export class AngularComponent implements OnInit {
	constructor(public broadcast: Broadcast) {}

	ngOnInit(): void {
		broadcast.init(registry);
		broadcast.onClick(console.log);
	}
}
```

## Other links

- [Coverage](https://coveralls.io/github/covenengineering/libraries).
