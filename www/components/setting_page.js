
////////////////////////  setting-page ///////////////////////////////////////////
$(document).on('pageinit','#setting-page',function(){
    //  セレクタのバックグランドカラー
    $('.target_lang').css( 'background-color', '#CADAE9');
    $('.target_lang[val=' + l_to + ']').css( 'background-color', '#FEC10E');
    
    $('.target_lang').click(function(){
        l_to = $(this).attr('val');
        set_to_from();
        class_text();
        //  セレクタのバックグランドカラー
        $('.target_lang').css( 'background-color', '#CADAE9');
        $('.target_lang[val=' + l_to + ']').css( 'background-color', '#FEC10E');
    });
});
