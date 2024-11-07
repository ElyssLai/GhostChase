
# Initial music tempo
music_tempo = 120

#Function: Starting sprite character and music introduction
Ghost: Sprite = None
game.show_long_text("I have to collect as many ghosts as possible and find my way out!",
    DialogLayout.TOP)
music.play(music.string_playable("C5 A B C5 B", music_tempo),
    music.PlaybackMode.UntilDone)
Count = 1
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)


# Function: Sprite Movement
scene.camera_follow_sprite(mySprite)
controller.move_sprite(mySprite, 100, 100)

# Function: Background layout
tiles.set_current_tilemap(tilemap("""
    level4
"""))
tiles.place_on_random_tile(mySprite, sprites.dungeon.dark_ground_south_west0)

# Function: Timer
info.start_countdown(40)

# Function: Ghost creation
for index in range(9):
    Ghost = sprites.create(img("""
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
        """),
        SpriteKind.food)
    tiles.place_on_random_tile(Ghost, sprites.dungeon.floor_dark2)



#Function: Sprite overlaps ghost, increases score and music tempo
def on_on_overlap(sprite5, otherSprite):
    global music_tempo  # Access the global variable
    otherSprite.start_effect(effects.disintegrate, 500)
    pause(500)
    otherSprite.destroy()
    info.change_score_by(1)
    music_tempo += 30
    music.stop_all_sounds()  # Stop the current music
    music.play(music.string_playable("C5 A B C5 B", music_tempo), music.PlaybackMode.UntilDone)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

# Function: End game when sprite overlaps tiles
def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_east,
    on_overlap_tile)

# Function: End game when sprite overlaps tiles
def on_overlap_tile2(sprite4, location4):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_north_west,
    on_overlap_tile2)

# Function: End game when sprite overlaps tiles
def on_overlap_tile3(sprite3, location3):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_west,
    on_overlap_tile3)

# Function: End game when sprite overlaps tiles
def on_overlap_tile4(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_north_east,
    on_overlap_tile4)