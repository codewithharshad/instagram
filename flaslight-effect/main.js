 
class SpotlightEffect {
    constructor() {
        this.spotlight = document.querySelector('.spotlight-overlay');
        this.mousePosition = { x: 0, y: 0 };
        this.bindEvents();
    }

    bindEvents() {
        const updateSpotlight = this.handleMouseMove.bind(this);
        
       
        if (this.isTouchDevice()) {
            document.addEventListener('touchmove', (e) => {
                e.preventDefault();
                this.mousePosition = {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                };
                updateSpotlight();
            }, { passive: false });
        } else {
            document.addEventListener('mousemove', (e) => {
                this.mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                updateSpotlight();
            });
        }
    }

    handleMouseMove() {
        if (this.spotlight) {
            this.spotlight.style.setProperty('--mouseX', `${this.mousePosition.x}px`);
            this.spotlight.style.setProperty('--mouseY', `${this.mousePosition.y}px`);
        }
    }

    isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SpotlightEffect();
});