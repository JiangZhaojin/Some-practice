<?php if (!defined('THINK_PATH')) exit(); $config = D("Basic")->select(); $navs = D("Menu")->getBarMenus(); ?>
<!doctype html>
<html lang="en">
<head>
  <title><?php echo ($config["title"]); ?></title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0, maximum-scale=1.0,user-scalable=no;"/>
  <meta name="keywords" content="<?php echo ($config["keywords"]); ?>" />
  <meta name="description" content="<?php echo ($config["description"]); ?>" />
  <link rel="stylesheet" href="/Public/css/bootstrap.min.css" type="text/css" />
  <link rel="stylesheet" href="/Public/css/home/main.css" type="text/css" />
</head>
<body>
<header id="header">
  <div class="navbar navbar-inverse">
    <div class="container">

      <div class="navbar-header navbar-header-img">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a href="/" class="navbar-brand" style="padding:0;"><img class="img-resposive" src="/Public/images/logo.png" alt="home"></a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-left">
              <li><a href="/" <?php if($result['catId'] == 0): ?>class="curr"<?php endif; ?>>首页</a></li>
              <?php if(is_array($navs)): foreach($navs as $key=>$vo): ?><li><a href="/index.php?c=cat&id=<?php echo ($vo["menu_id"]); ?>" <?php if($vo['menu_id'] == $result['catId']): ?>class="curr"<?php endif; ?>><?php echo ($vo["name"]); ?></a></li><?php endforeach; endif; ?>
          </ul>
    </div>
  </div>
  </div>
</header>
<section id="main">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-8">
        <div class="row">
            <div class="col-sm-12 col-md-9 col-lg-9">
                <div id="adCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <?php if(is_array($result['topPicNews'])): foreach($result['topPicNews'] as $key=>$vo): ?><li data-target="#adCarousel" data-slide-to="<?php echo ($key); ?>" class="<?php if($key == 0): ?>active<?php endif; ?>"></li><?php endforeach; endif; ?>
                    </ol>
                    <div class="carousel-inner">
                        <?php if(is_array($result['topPicNews'])): foreach($result['topPicNews'] as $key=>$vo): ?><div class="item <?php if($key == 0): ?>active<?php endif; ?>">
                             <a target="_blank" href="/index.php?c=detail&id=<?php echo ($vo["news_id"]); ?>"><img style="width:100%;height:320px;" src="<?php echo ($vo["thumb"]); ?>" alt="1 slide"></a>
                                <div class="banner-info">
                                    <span>阅读数</span><i class="news_count node-<?php echo ($vo['news_id']); ?>" news-id="<?php echo ($vo['news_id']); ?>" id="node-<?php echo ($vo['news_id']); ?>"></i>
                                </div>
                            <div class="container">
                                <div class="carousel-caption"> 
                                    <h4><?php echo ($vo["title"]); ?></h4>
                                </div>
                            </div>
                        </div><?php endforeach; endif; ?>
                        <a class="left carousel-control" href="#adCarousel" data-slide="prev"><span
                                class="glyphicon glyphicon-chevron-left"></span></a>
                        <a class="right carousel-control" href="#adCarousel" data-slide="next"><span
                                class="glyphicon glyphicon-chevron-right"></span></a>
                    </div>
                </div>
            </div>
            <div class="hidden-xs hidden-sm col-md-3 col-lg-3">
                <ul id="smallNews">
                  <?php if(is_array($result['topSmailNews'])): $i = 0; $__LIST__ = $result['topSmailNews'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li>
                    <a target="_blank" href="/index.php?c=detail&id=<?php echo ($vo["news_id"]); ?>"><img width="140rem" height="100rem" src="<?php echo ($vo["thumb"]); ?>" alt="<?php echo ($vo["title"]); ?>"></a>
                  </li><?php endforeach; endif; else: echo "" ;endif; ?>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="container">
                <div class="news-list">
                  <?php if(is_array($result['listNews'])): $i = 0; $__LIST__ = $result['listNews'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><dl>
                    <dt><a target="_blank" href="/index.php?c=detail&id=<?php echo ($vo["news_id"]); ?>"><?php echo ($vo["title"]); ?></a></dt>
                    <dd class="news-img">
                      <a target="_blank" href="/index.php?c=detail&id=<?php echo ($vo["news_id"]); ?>"><img width="200rem" height="120rem" src="<?php echo ($vo["thumb"]); ?>" alt="<?php echo ($vo["title"]); ?>"></a>
                    </dd>
                    <dd class="news-intro">
                      <?php echo ($vo["description"]); ?>
                    </dd>
                    <dd class="news-info">
                      <?php echo ($vo["keywords"]); ?> <span><?php echo (date("Y-m-d H:i:s",$vo["create_time"])); ?></span> 阅读数(<i news-id="<?php echo ($vo["news_id"]); ?>" class="news_count node-<?php echo ($vo["news_id"]); ?>"><?php echo ($vo["count"]); ?></i>)
                    </dd>
                  </dl><?php endforeach; endif; else: echo "" ;endif; ?>

                </div>
            </div>
        </div>
      </div>
         
      <div class="hidden-xs hidden-sm col-md-4 col-lg-4">
            <div class="right-title">
    <h3>文章排行</h3>
    <span>TOP ARTICLES</span>
  </div>

  <div class="right-content">
    <ul>
      <?php if(is_array($result['rankNews'])): $k = 0; $__LIST__ = $result['rankNews'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?><li class="num<?php echo ($k); ?> curr">
        <a target="_blank" href="/index.php?c=detail&id=<?php echo ($vo["news_id"]); ?>"><?php echo ($vo["small_title"]); ?></a>
        <?php if($k == 1): ?><div class="intro">
          <?php echo ($vo["description"]); ?>
        </div><?php endif; ?>
      </li><?php endforeach; endif; else: echo "" ;endif; ?>
    </ul>
  </div>
  <?php if(is_array($result['advNews'])): $k = 0; $__LIST__ = $result['advNews'];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($k % 2 );++$k;?><div class="right-hot">
    <a target="_blank" href="<?php echo ($vo["url"]); ?>"><img src="<?php echo ($vo["thumb"]); ?>" alt="<?php echo ($vo["name"]); ?>"></a>
  </div><?php endforeach; endif; else: echo "" ;endif; ?></include>
      </div>
  </div>
  </div>
</section>
<footer>
    <nav class="navbar navbar-default navbar-fixed-bottom" role="navigation">
      <div class="container">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand" >关于本站</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul class="nav navbar-nav navbar-left">
                 <li><a href="#">新闻投稿</a></li>
                 <li><a href="#">加入我们</a></li>
                 <li><a href="#">广告投放</a></li>
                 <li><a href="#">免责声明</a></li>
                 <li><a href="#">Copyright © NBANews 2016</a></li>
                 <li><a href="#"> </a></li>
            </ul>
      </div>
    </div>
    </div>
</footer></include>
</body>
<script src="/Public/js/jquery.js"></script>
<script src="/Public/js/bootstrap.min.js"></script>
<script src="/Public/js/count.js"></script>
<script>
    $(function(){
        $('.carousel').carousel();
    })
</html>