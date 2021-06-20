$(document).ready(function()
                {
    /* CONDICIONES PARA VERIFICAR UNA ALTURA ENTRE EL MARGEN DE LA PAGINA Y LA BARRA DE MENU*/
                    var altura = $('.menu').offset().top; /*GUARDA LA ALTURA ENTRE PAGINA Y MENÚ*/
                    /*/alert(altura);*/
                    $(window).on('scroll',function()
                        {
                            if ($(window).scrollTop() > altura){
                                $('.menu').addClass('menu-fixed');
                            }else{
                                $('.menu').removeClass('menu-fixed');
                            }
                        });
                })