# Charasort II

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps shareable links valid even if the base character data is changed.

## Source project
This was originally based off of [Charasort](https://github.com/execfera/charasort/) by [execfera](https://github.com/execfera/), which was inspired by [THSort](http://mainyan.sakura.ne.jp/thsort.html) by [Haru](https://twitter.com/harumainya). Check them out!

## Modifying the Sorter
TODO: Update this (see old_README in the meantime)

## Updating Your Own Sorter
TODO: Update this (see old_README in the meantime)

## Credits

 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.

 * https://day.js.org/
 * https://get.foundation/sites/docs/index.html

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
