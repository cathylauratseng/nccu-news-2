var inView = false;
var inView2 = false;
function isScrolledIntoView(elem) {
    
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
};

$(window).scroll(function() {

    if (isScrolledIntoView('#myChart-1')) {
        if (inView) { return; }
        inView = true;
        setTimeout(function(){
        	new Chart(document.getElementById("myChart-1").getContext("2d"), {
        	   // The type of chart we want to create
        	   type: 'pie',

        	   // The data for our dataset
        	   data: {
        	       labels: ["就寢", "第一次餵食", "第一次擠乳", "等待收乳車", "第二次餵食", "第二次擠乳", "清理牛床"],
        	       datasets: [{
        	           label: ["就寢", "第一次餵食", "第一次擠乳", "等待收乳車", "第二次餵食", "第二次擠乳", "清理牛床"],
        	           backgroundColor: ["#5ccbed","#61ed81","#e2de81","#e09e84","#0b8e2c","#dbdb0a","#a96ac4"],
        	           // borderColor: 'rgb(255, 99, 132)',
        	           data: [25, 10, 23, 4.5, 10, 23, 4.5],
        	       }]
        	   },

        	   // Configuration options go here
        	   options: {
        	       animation: {
        	           easy: 'linear'
        	       }
        	   }
        	} );
        }, 500)
    }
});

// --------------

$(window).scroll(function() {

    if (isScrolledIntoView('#myChart-2')) {
        if (inView2) { return; }
            inView2 = true;
            setTimeout(function(){
                new Chart(document.getElementById("myChart-2").getContext("2d"), {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    "labels":["民國81","民國86","民國91","民國96","民國101","民國102","民國103","民國104"],

                    "datasets":[{
                        "label":"平均每戶飼養牛隻(頭)",
                        "data":[82.5,123.75,151.25,78,83.5,83,83,84],
                        "fill":false,
                        "borderColor":"#0576bc",
                        "lineTension":0.1
                        },{
                        "label":"酪農戶數",
                        "data":[1000,840,780,600,570,560,550,545],
                        "fill":false,
                        "borderColor":"#f77e7e",
                        "lineTension":0.1
                         }]
                    },

                // Configuration options go here
                options: {
                    animation: {
                        easy: 'linear'
                    }
                }
                } );
            }, 500)
        } 
    });

// ------------------------------
$.fn.isInViewport = function() {
            var elementTop = $(this)
                .offset()
                .top;
            var elementBottom = elementTop + $(this)
                .outerHeight();

            var viewportTop = $(window)
                .scrollTop();
            var viewportBottom = $(window).scrollTop() + window.innerHeight/2;
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        $(window)
            .on('resize scroll', function() {
                $('.animation-block')
                    .each(function() {
                        var activeArea = $(this)
                            .attr('id');
                        if ($(this)
                            .isInViewport()) {
                            $('#' + activeArea)
                                .addClass('to-animate');
                        }
                    });
            });