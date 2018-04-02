import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.hideInitially();
        this.offsetPercentage = offset;
        this.createWaypoints();
    }
    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints() {
        let that = this; //locating the this var on this context for future usage
        this.itemsToReveal.each(function() {
            let currentItem = this; //locating the this var on this context for future usage
            new Waypoint({
                element: currentItem,
                handler: () => {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;