var Layout = function () {
    //BEGIN PAGE LOADER AND RESIZE WINDOW
    var handleLoad = function() {
        $(window).on("load resize",function(e){
            $("#page-loader").fadeOut();
            $('header .intro .arco-right').css('border-width', $('.main-menu').offset().left - 100);

            if($(window).width() > 767) {
                $('.intro').css('height', $(window).height() - 100);
            } else {
                $('.intro').css('height', $(window).height() );
            }

            $('.bg-overlay img').css('height', $(window).height());
            
        });
        //END PAGE LOADER

        //COLLAPSE MENU WHEN SCROLL
        $(window).bind('scroll load', function() {
            if($(window).width() > 700) {
                if ($(this).scrollTop() > 100) {
                    $(".navbar-static-top").addClass("navbar-fixed-top");
                    $('body').css('pading-top', '100px');
                } else {
                    $(".navbar-static-top").removeClass("navbar-fixed-top");
                    $('body').css('pading-top', '0px');
                }
            }
        });

        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            console.log($anchor.attr('href'));
            console.log($($anchor.attr('href')).attr('id'));
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'swing');
            event.preventDefault();
        });
    }
    
    //BEGIN THEME SETTING
    var handleThemeSetting = function() {
        $('#theme-setting > a.btn-theme-setting').click(function(){
            if($('#theme-setting').css('right') < '0'){
                $('#theme-setting').css('right', '0');
            } else {
                $('#theme-setting').css('right', '-220px');
            }
        });

        var list_color = $('#theme-setting > .theme-setting-content > ul.color-skins > li');

        var setTheme = function (color) {
            $('#color-skins').attr('href', 'assets/css/themes/'+ color + '.css');
        }
        list_color.on('click', function() {
            list_color.removeClass("active");
            $(this).addClass("active");
            setTheme($(this).attr('data-color'));
        });
    }
    //END THEME SETTING

    //BEGIN BACK TO TOP
    $(window).scroll(function(){
        if ($(this).scrollTop() < 200) {
            $('#totop') .fadeOut();
        } else {
            $('#totop') .fadeIn();
        }
    });
    $('#totop').on('click', function(){
        $('html, body').animate({scrollTop:0}, 'fast');
        return false;
    });
    //END BACK TO TOP
    
    //BEGIN COUTNER NUMBER
    var handleCountNumber = function() {
        $('.counter-01').counterUp({
            delay: 10,
            time: 2500
        });
        $('.counter-02').counterUp({
            delay: 10,
            time: 2500
        });
        $('.counter-03').counterUp({
            delay: 10,
            time: 2500
        });
        $('.counter-04').counterUp({
            delay: 10,
            time: 2500
        });
    }
    
    //BEGIN OWL CAROUSEL
    var handleOwnCarousel = function() {
        //ABOUT
        var about_own = $("#about-carousel");
        about_own.owlCarousel({
            autoPlay: false,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [600,1],
            itemsMobile: [479,1],
            pagination: false
        });
        $('.about-carousel-nav .next').click(function(){
            about_own.trigger('owl.next');
        });
        $('.about-carousel-nav .prev').click(function(){
            about_own.trigger('owl.prev');
        });

        //CLIENT
        $("#owl-our-clients").owlCarousel({
            autoPlay: 4000,
            items : 6,
            itemsDesktop : [1199,6],
            itemsDesktopSmall : [979,4],
            itemsTablet: [600,3],
            itemsMobile: [479,2],
            pagination: false
        });

        //PROJECT
        var project_own = $("#project-carousel");
        var project_detailed_own = $("#project-detailed-carousel");
        project_own.owlCarousel({
            autoPlay: false,
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,1],
            itemsTablet: [600,1],
            pagination: false,
            mouseDrag: false,
            touchDrag: false
        });
        project_detailed_own.owlCarousel({
            autoPlay: false,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [600,1],
            pagination: false,
            mouseDrag: false,
            touchDrag: false
        });
        $('.project-carousel-nav .next').click(function(){
            project_own.trigger('owl.next');
            project_detailed_own.trigger('owl.next');
        });
        $('.project-carousel-nav .prev').click(function(){
            project_own.trigger('owl.prev');
            project_detailed_own.trigger('owl.prev');
        });

        //TESTIMONIAL
        $("#testimonial-carousel").owlCarousel({
            autoPlay: 10000,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [600,1],
            autoplay: false
        });

        //TEAM
        var team_owl = $("#team-carousel");
        team_owl.owlCarousel({
            autoPlay: 10000,
            items : 3,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,1],
            pagination: false
        });
        $('.team-carousel-nav .next').click(function(){
            team_owl.trigger('owl.next');
        });
        $('.team-carousel-nav .prev').click(function(){
            team_owl.trigger('owl.prev');
        });
    }
    //END OWL CAROUSEL OUR CLIENT

    //BEGIN VALIDATE FORM CONTACT
    var handleContactValidate = function() {
        $("#form-contact").validate({ 
            rules: {
                email: {email:true, required: true},
                name: {required: true},
                comment:{required: true}
            },
            messages: {
                
            },
            tooltip_options: {
                email: {trigger:'focus'},
                name: {trigger:'focus'},
                comment: {trigger:'focus'}
            },
        }); 
    }
    //END VALIDATE FORM CONTACT

    return{
        init: function () {
            handleLoad();
            handleThemeSetting();
            handleCountNumber();
            handleOwnCarousel();
            handleContactValidate();
        }
    }

}(jQuery);

