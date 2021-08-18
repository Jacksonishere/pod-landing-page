1. When centering element using margin ... auto, its going to make the width 100%. Hence, when I did flex direction: flex-start and the div wasn't aligning at the front, when it really was, its jut the width was 100%.
2. inside my sponsors, the images i set to 20% width, if the section itself is not sized, its only going to use the space it needs, even if i set max-width, unless i explicitly give it a width.
3. an absolutely positioned item with no top/right/bot/left set will be positioned as it would be normally.
4. just because an element is absolutely positioned, doesn't mean its margins wont apply to it. 
5. the icons inside the sponsors. in mobile size, i had to set the width of image and then did grid-cols 1fr.
For tablet, i set the widths to auto, as well as the grid cols auto to let it define its own size.
6.