import * as Assets from '../assets';
import { Tile } from '../classes/tiles';

export default class Demo extends Phaser.State {
	private tile1: Tile = null;
	private tiles: Phaser.Group = null;

	public create(): void {
		this.tiles = this.game.add.group();
		this.tile1 = new Tile(undefined, this.game, Assets.Images.ImagesTile1.getName(), 0, 0, this.tiles);
		// this.tile1.input.enableDrag(); 
	}

}