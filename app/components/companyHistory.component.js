// Company history component for DKWSite
components.component('companyHistory', {
   bindings: {},
   controller: function(dkwDataMonitor) {
      var ctrl = this;
      ctrl.page = dkwDataMonitor.pages.ourCompany("Company History");

      ctrl.drawTimeline = function() {
         $("#svg").height($('.about-container').height());
         var paper = Snap("#svg");
         paper.clear();
         var x = window.innerWidth < 960? (window.innerWidth/10):(window.innerWidth/2);
         var circ1 = paper.circle(x - 3, 400, 5);
         var els = document.getElementsByClassName("event");
         $.each(els, function(i, e) {
            var t = $(e);
            var coordinates = t.offset();
            var y = coordinates.top;
            var offsetHeight = i < 2 ? 50 : -100;
            var c = paper.circle(x - 3, y + offsetHeight, 10);
            if (i === els.length - 1) {
               c = paper.circle(x - 3, y + offsetHeight + 100, 5);
               var line = paper.line(x - 3, 400, x - 3, y + offsetHeight + 100)
                  .attr({
                     strokeWidth: 3,
                     stroke: "black",
                     strokeLinecap: "round"
                  });
            }
         });
      }

      angular.element(document).ready(function() {
        // The component is done rendering
         $("#svg").height($('.about-container').height());
         ctrl.drawTimeline();
      });

      $(window).resize(function() {
         ctrl.drawTimeline();
      });
   },
   templateUrl: 'views/pageTemplates/about/companyHistory.html'
});