//  Initial music tempo
let music_tempo = 120
// Function: Starting sprite character and music introduction
let Ghost : Sprite = null
game.showLongText("I have to collect as many ghosts as possible and find my way out!", DialogLayout.Top)
music.play(music.stringPlayable("C5 A B C5 B", music_tempo), music.PlaybackMode.UntilDone)
let Count = 1
let mySprite = sprites.create(img`
        ........................
            ........................
            ........fffff...........
            .....fffffffff..........
            .....fffffffff..........
            .....ffffb1111ff........
            ....fffb1111111bf.......
            ...ffff111111111f.......
            ...ffffff1111111df......
            .f.ffb111c1dd111df......
            fff.ffb1b1fdcf11bf......
            fff1fffbfbfb11111f......
            ff.111ffffcfdb1b1f......
            f...f11fcccfcfbfbf......
            f.....111fffffffff......
            f.......111ffff.........
            ........ff11fff.........
            .....f..fff111f.........
            .....fffffffff..........
            ......fffffff...........
            ........................
            ........................
            ........................
            ........................
    `, SpriteKind.Player)
//  Function: Sprite Movement
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
//  Function: Background layout
tiles.setCurrentTilemap(tilemap`
    level4
`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundSouthWest0)
//  Function: Timer
info.startCountdown(40)
//  Function: Ghost creation
for (let index = 0; index < 9; index++) {
    Ghost = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . 1 1 1 1 1 . . . 
                    . . . . . . . 1 1 1 1 1 1 1 . . 
                    . . . . . . 1 1 1 1 1 1 1 1 . . 
                    . . . . . 1 1 1 1 1 1 f f 1 1 . 
                    . . . . . 1 1 1 1 1 1 1 1 1 1 . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 1 . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
                    . . . . . 1 1 1 1 1 1 1 1 . . . 
                    . . . 1 . 1 1 1 1 1 1 1 . . . . 
                    . . . . 1 1 1 1 1 1 1 . . . . . 
                    . . . . 1 1 1 1 1 . . . . . . . 
                    . . . . 1 1 1 1 1 . . . . . . . 
                    . . . 1 1 1 1 1 . . . . . . . . 
                    . . 1 1 1 . . . . . . . . . . .
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(Ghost, sprites.dungeon.floorDark2)
}
// Function: Sprite overlaps ghost, increases score and music tempo
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite5: Sprite, otherSprite: Sprite) {
    
    //  Access the global variable
    otherSprite.startEffect(effects.disintegrate, 500)
    pause(500)
    otherSprite.destroy()
    info.changeScoreBy(1)
    music_tempo += 30
    music.stopAllSounds()
    //  Stop the current music
    music.play(music.stringPlayable("C5 A B C5 B", music_tempo), music.PlaybackMode.UntilDone)
})
//  Function: End game when sprite overlaps tiles
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthEast, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.gameOver(true)
})
//  Function: End game when sprite overlaps tiles
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthWest, function on_overlap_tile2(sprite4: Sprite, location4: tiles.Location) {
    game.gameOver(true)
})
//  Function: End game when sprite overlaps tiles
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    game.gameOver(true)
})
//  Function: End game when sprite overlaps tiles
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthEast, function on_overlap_tile4(sprite2: Sprite, location2: tiles.Location) {
    game.gameOver(true)
})
