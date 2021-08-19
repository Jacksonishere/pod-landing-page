# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview
Responsive landing page using grid/flexbox with sass. Basic javascript to check whether email entered is valid.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![image](https://user-images.githubusercontent.com/44249712/129830649-43a0c968-7fe9-4ae6-9e69-193d340e534a.png)
![image](https://user-images.githubusercontent.com/44249712/129830707-e029b834-e66d-42b7-9515-e70ad6674dad.png)
![image](https://user-images.githubusercontent.com/44249712/129830762-02785013-bcef-4224-8480-3cfafb61975f.png)
![image](https://user-images.githubusercontent.com/44249712/129830792-36aa7820-df39-40d7-995a-ad3a54fd38f5.png)

### Links

- Solution URL: https://www.frontendmentor.io/profile/Jacksonishere
- Live Site URL: https://blissful-knuth-7f5533.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow



### What I learned

1. When centering element using margin 0 auto, its going to make the width 100%. When I set flex direction: flex-start, it seemed that the div wasn't aligning at the front, when it really was. The width was just 100%.
2. Inside my sponsors, the images I set to 20% width, if the section itself is not sized, its only going to use the space it needs, even if I set max-width, unless i explicitly give it a width. Imgs take up the space it needs when not given any sizing.
3. An absolutely positioned item with no top/right/bot/left set will be positioned as it would be normally.
4. Margins apply to positioend elements.
5. For the icons inside the sponsors, in mobile size, I had to set the width of image so they would all fit nicely and then did grid-cols 1fr.
For tablet, I set the widths to auto, as well as the grid cols auto to it take up the sizes the img needs.

## Author


- Frontend Mentor - https://www.frontendmentor.io/profile/Jacksonishere


## Acknowledgments

Thank you to frontendmentor for these challenges.

