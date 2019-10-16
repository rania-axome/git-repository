$(document).ready(function(){

    let breakpoint = 768;

    if($(document).width() < breakpoint) {

        //Lien du footer en accordeon
        if ($('#shopify-section-footer ').length) {
            $('#shopify-section-footer .accordion-title').on('click', function (e) {
                $(this).toggleClass('active').next().stop().slideToggle('medium');
                e.preventDefault();
            })
        }
    }
});
