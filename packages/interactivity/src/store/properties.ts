/**
 * External dependencies
 */
import {
	computed,
	signal,
	batch,
	type Signal,
	type ReadonlySignal,
} from '@preact/signals-core';

/**
 * Internal dependencies
 */
import { getScope } from '../hooks';

const DEFAULT_SCOPE = Symbol();

export class Property {
	private owner: object;
	private computedsByScope: WeakMap< WeakKey, ReadonlySignal >;
	private valueSignal?: Signal;
	private getterSignal?: Signal< ( () => any ) | undefined >;

	constructor( owner: object ) {
		this.owner = owner;
		this.computedsByScope = new WeakMap();
	}

	public update( {
		get,
		value,
	}: {
		get?: () => any;
		value?: unknown;
	} ): void {
		if ( ! this.valueSignal ) {
			this.valueSignal = signal( value );
			this.getterSignal = signal( get );
		} else if (
			value !== this.valueSignal.peek() ||
			get !== this.getterSignal?.peek()
		) {
			batch( () => {
				this.valueSignal!.value = value;
				this.getterSignal!.value = get;
			} );
		}
	}

	public getComputed(
		wrapper?: < G extends () => any >( getter: G ) => G
	): ReadonlySignal {
		const scope = getScope() || DEFAULT_SCOPE;

		if ( ! this.valueSignal && ! this.getterSignal ) {
			this.update( {} );
		}

		if ( ! this.computedsByScope.has( scope ) ) {
			const callback = () => {
				const getter = this.getterSignal?.value;
				return getter
					? getter.call( this.owner )
					: this.valueSignal?.value;
			};

			this.computedsByScope.set(
				scope,
				computed( wrapper ? wrapper( callback ) : callback )
			);
		}

		return this.computedsByScope.get( scope )!;
	}
}
