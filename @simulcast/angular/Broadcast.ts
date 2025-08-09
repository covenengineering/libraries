import { Injectable, type OnDestroy, type OnInit } from "@angular/core";
import type {
	BroadcastObject,
	EventRegistry,
	EventTypeDictionary,
} from "@simulcast/core";
import { broadcast } from "../core/broadcast.ts";

@Injectable({ providedIn: "root" })
export class Broadcast<Events extends EventTypeDictionary>
	implements OnDestroy, OnInit
{
	private events = [];
	private broadcastObject?: BroadcastObject<Events>;

	constructor() {
		return new Proxy(this, {
			// Proxy logic
		});
	}

	public init(registry: EventRegistry<Events>): void {
		this.broadcastObject = broadcast<Events>(registry);
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {}
}
