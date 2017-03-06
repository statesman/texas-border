var Slick = (function($, _) {

  var Slick = function(el) {

    // cache 'this' ref
    var self = this;

    // Save the $ version of the slider element
    self.$el = $(el);

    // ... and content
    self.$content = self.$el.find(".slider-content");

    // ... and controls
    self.$controls = self.$el.find(".slider-controls");

    // ... and the span tag with current slide number
    self.$pos = self.$controls.find('.slider-pos');

    // ... and forward/back arrows
    self.$prevArrow = self.$controls.find(".previous");
    self.$nextArrow = self.$controls.find(".next");

    // init the slider
    /* slick config: http://kenwheeler.github.io/slick/ */
    self.$content.slick({
        adaptiveHeight: true,
        prevArrow: self.$prevArrow,
        nextArrow: self.$nextArrow
    })
    .on('afterChange', function(event, slick, currentSlide){
      self.$pos.html(currentSlide+1);
    });

  };

  return Slick;

}(jQuery, _));
