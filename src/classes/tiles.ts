export class Tile {
	public sprite: Phaser.Sprite = null;

	public constructor(sprite?: Phaser.Sprite, game?: Phaser.Game, spriteKey?: string, startPosX?: number, startPosY?: number, group?: Phaser.Group) {
		if (sprite) {
			this.sprite = sprite;
		} else {
			this.sprite = game.add.sprite(startPosX, startPosY, spriteKey, undefined, group);
		}
		this.sprite.inputEnabled = true; 
		this.sprite.input.enableDrag();
		this.sprite.input.enableSnap(this.sprite.width, this.sprite.height, false, true);
		this.sprite.events.onDragStop.add(() => {

		});
	}
}