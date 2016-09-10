/////// photo-page //////////
$(document).on('pageinit','#news-page',function(){
    //言語切り替え
    if(l_to == 'en') {
        var t_url = news_url_en;
    }else{
        var t_url = news_url_ja;
    }
                  
    $.ajax({
        type:'get',
        url:t_url,
        datatype: 'xml',
        timeout:1000,
        success:function(xml){
            $(xml).find('item').each(function() {
                console.log('xml append');
                /*
                var cont = '<a target="_blank" href="'
                    + $(this).children('link').text()
                    + '">' + $(this).children('title').text() + '</a>';
                */
                
                var cont = '<span class="news_item"><input name="news_url" type="hidden" value="'
                    + $(this).children('link').text()
                    + '" />' + $(this).children('title').text() + '</span>'
                
                var elm = $(
                '<ons-list-item modifier="tappable">'
                 + cont
                 + '</ons-list-item>'
                 );
                 
                elm.appendTo($('#news_list'));
                ons.compile(elm[0]);
                 
                $('.news_item').click(function(){
                    p_url = $(this).children(':hidden[name="news_url"]').val();
                    //alert("URL:" + $("#news_item_url").val());
                    app.slidingMenu.setMainPage('news_item.html', {closeMenu: true})
                });
                //console.log('xml get:'+cont);
            });
        },
        error:function() {
            console.log('t_url load error');
        }
    });
    
    
});

