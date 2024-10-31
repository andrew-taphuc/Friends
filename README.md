# Friends

An elegant photo slideshow web application with background music, designed for a seamless viewing experience. Built with vanilla JavaScript and CSS, featuring a responsive design that works beautifully across all devices.

## Features

- 🖼️ Smooth image slider with snap scrolling
- 🎵 Continuous background music playback
- 📱 Responsive design optimized for both mobile and desktop
- 🎨 Elegant UI with Playfair Display typography
- 🌗 Dark theme with peach accent colors
- 🔄 Auto-resume music on page visibility changes
- 📏 Proper aspect ratio maintenance for images

## Getting Started

### Prerequisites

- A modern web browser
- Image files (named `pic1.png` through `pic12.png`)
- Background music file

### Installation

1. Clone this repository
```bash
git clone https://github.com/andrew-taphuc/Friends.git
```

2. Place your images in the root directory, named as:
   - pic1.png
   - pic2.png
   - ...
   - pic12.png

3. Add your background music file to the project

4. Open `index.html` in a web browser

## Usage

1. For the best experience, rotate your iPad to landscape mode (if using a tablet)
2. Click the play button to start the background music
3. Browse through the images by:
   - Swiping left/right on touch devices
   - Using the navigation dots below the slider
   - Scrolling horizontally on desktop devices

## Structure

```
friends/
├── index.html          # Main HTML file
├── style.css          # Styling
├── script.js          # JavaScript functionality
├── pic1.png           # Slideshow images
├── pic2.png
└── ...
```

## Technical Details

### CSS Features
- Snap scrolling for smooth image transitions
- Custom audio controls
- Responsive design with media queries
- Font optimization with Google Fonts
- Custom scrollbar hiding
- Flexible image sizing with aspect ratio preservation

### JavaScript Features
- Continuous music playback
- Prevention of music interruption
- Keyboard shortcut handling
- Visibility change handling
- Mobile-friendly touch interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Changing Colors
- Main background: Modify `background-color` in body
- Text color: Update `color` in `.elegant-text`
- Button colors: Modify `border` and `color` in `.play-button`

### Adjusting Sizes
- Slider width: Update `max-width` in `.slider-wrapper`
- Image height: Modify `max-height` in `.slider img`
- Button size: Update dimensions in `.play-button`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
