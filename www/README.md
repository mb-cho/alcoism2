# Trans からコピー
# 2016-08-26 13:56:00
#**************************************************************

#google news api
#地域版の指定

#日本版のニュースを取得するには「ned=jp」とすれば良いと推測されますが、日本版がRSSに対応しないためか、そのように指定するとRSSではないページへリダイレクトされてしまいます。よって「hl=ja」として、言語で日本語を指定します。

#http://news.google.com/news?ned=jp&hl=ja&output=rss (日本版/日本語)

#http://news.google.com/news?ned=us&hl=ja&output=rss (アメリカ版/日本語)
#http://news.google.com/news?ned=it&hl=ja&output=rss (イタリア版/日本語)

参考
#http://d.hatena.ne.jp/tessy3/20110115/1295063878

#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&topic=p
#とすると政治のニュースだけになる。オプションとニュースの種類の対応はこんな感じ。


#オプション    ニュースの種類
#（リンク先はRSSのフィードのアドレス）
#ir	ピックアップ
#y	社会
#w	国際
#b	ビジネス
#p	政治
#e	エンタメ
#s	スポーツ
#t	テクノロジー
#po	話題のニュース

#これ以外に、特定のキーワードを含むニュースも&q=に続いてキーワードを書くことでRSS配信できる。

#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&q=キーワード

#たとえば、阪神という単語の入ったニュースを配信したければ、

#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&q=阪神


#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&q=野球and(阪神orオリックス)


#ターゲット
#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&q=(酒orアルコール)and(事故or事件)


#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&q=(酒orアルコール)and(事故or事件)

#http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&q=アルコールand(事故or事件)









# Getting Started to Onsen UI Sliding Menu


This template is using Onsen UI, a HTML5 framework that is focusing on the speed and ease of use.
For details, please check out [Onsen UI Website](http://onsenui.io) and [its documents](http://onsenui.io/guide/overview.html).

## For non-AngularJS Users

Here are the resources that might help you:

- [List of Components](http://onsenui.io/guide/components.html)
- [Onsen UI Guide](http://onsenui.io/guide/overview.html)

## For AngularJS Users

You need to edit `index.html` to have more tighter integration with AngularJS. More precisely, you need to add `ng-app` definition and call `angular.module()` to add `onsen` module to your app.

Here is the code snippet that you can copy & paste for quicker setup.

```
<!DOCTYPE HTML>
<html ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <script src="components/loader.js"></script>
    <link rel="stylesheet" href="components/loader.css">
    <link rel="stylesheet" href="css/style.css">
    <script>
        angular.module('myApp', ['onsen']);
    </script>
</head>
<body>
    <ons-sliding-menu var="app.slidingMenu" menu-page="menu.html" main-page="page1.html" side="left" type="overlay" max-slide-distance="200px">
    </ons-sliding-menu>
</body>
</html>
```
