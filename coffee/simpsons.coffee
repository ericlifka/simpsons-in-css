$ = window.jQuery
if not $ then return

$.fn.simpsons = (character = "bart") ->
    if templates[character]
        @.attr 'id', character
        @.addClass 'simpsons'
        @.append $(templates[character])
    @

$.fn.simpsons.characters = [
    'apu'
    'bart'
    'comicbookguy'
    'homer'
    'itchy'
    'krusty'
    'lisa'
    'maggie'
    'marge'
    'mr-burns'
    'ned-flanders'
    'ralph-wiggum'
    'smithers'
]
