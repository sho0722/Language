$(function () {

    //scrollした時の処理
    $(window).scroll(function() {

        //画面のスクロールされた量を取得
        let scrollTop = $(window).scrollTop();
        //セクションhtmlのトップ位置を取得
        let sectionHtmlTop = $(".html").offset().top;
        
        //セクションhtmlのトップ位置でアイコンを表示する
        if (scrollTop > sectionHtmlTop) {
            $(".bird").fadeIn();
        } else {
            //それより上の位置では非表示
            $(".bird").fadeOut();
        }

        //htmlのセクションをスライドイン
        if (scrollTop > sectionHtmlTop - 300) {
            $(".html").animate({left: 0}, 1000);
        }

        //セクションcssのトップ位置を取得
        let sectionCssTop = $(".css").offset().top;

        //cssのセクションをスライドイン
        if (scrollTop > sectionCssTop - 300) {
            $(".css").animate({right: 0}, 1000);
        }

        //セクションJavaScriptのトップ位置を取得
        let sectionJsTop = $(".js").offset().top;

        //jsの孫要素のsection-contentを取得
        let jsSectionContent = $(".js").find(".section-content");

        //jsのセクション位置にスクロールした時
        if (scrollTop > sectionJsTop - 100) {

            //アイコンを表示
            $(jsSectionContent).fadeIn(1000);

        } else {
            // それ以外の時は非表示
            $(jsSectionContent).fadeOut(1000);
        }
    })

    // それぞれのアイコンがクリックされた時の処理
    $(".section-content").click(function() {

        // クリックされたsection-contentの親要素の.sectionを取得
        let section = $(this).parents(".section");

        // クリックされたsection-contentの子要素のiタグのclassを取得
        let iClass = $(this).children().attr("class");

        // id = "over"のdivタグを追加
        $('<div id = "over">').appendTo($(section)).hide().fadeIn(500);

        // class = "lightbox"のdivタグを追加
        $('<div class = "lightbox">').appendTo($("#over")).hide().fadeIn(1000);

        //上記のdivタグの中に変数iを追加
        $("<i>").addClass(iClass).appendTo($(".lightbox")).hide().fadeIn(1500);

        //背景をクリックしてタグを消去
        $("#over").click(function(e) {

            // lightboxのdivをクリックした時は消去されない
            if ($(e.target).is(".lightbox")) {
                return;
            
            //アイコンをクリックした時は消去されない
            } else if ($(e.target).is("i")) {
                return;

            // それ以外の背景をクリックした時に消去される
            } else {
                $(this).fadeOut("slow", function() {
                    $(this).remove();
                })
            }
        })
    })
    
    // アイコンをクリックしてトップ位置へ
    $(".bird").click(function() {
        $("html").animate({scrollTop: 0}, 500);
    })

})