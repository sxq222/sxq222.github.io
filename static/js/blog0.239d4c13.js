webpackJsonp([4],{22:function(A,i){A.exports={time:1522311693349}},53:function(A,i){A.exports='# inline-block\r\n\r\n通过display:inline-block可以将一个元素变成行内元素，同时保持块级元素的某些特性，比如：可以设置他的宽高、可以设置他的margin。\r\n\r\n但是在实际的使用中，在一行出现多个inline-block时，它们的对齐总是产生意想不到的结果，看下面的例子：\r\n\r\n```html\r\n<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title></title>\r\n    <style>\r\n        .iblock {\r\n            width: 100px;\r\n            height: 100px;\r\n            border: 10px solid green;\r\n            padding: 10px;\r\n            background: red;\r\n            margin: 30px;\r\n            display: inline-block;\r\n        }\r\n        .hid {\r\n            overflow: hidden;\r\n        }\r\n        .inside{\r\n            width: 70px;\r\n            height: 30px;\r\n            margin: 10px;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <div>\r\n        <div class="iblock">asdasasdd</div>\r\n        <div class="iblock hid"> 2222asdasdasdasd22222</div>\r\n        <div class="iblock"></div>\r\n        <div class="iblock">\r\n            <div class="iblock inside">333asdasdasd333333</div>\r\n        </div>\r\n    </div>\r\n</body>\r\n</html>\r\n```\r\n\r\n效果图如下：\r\n\r\n![1](E:\\sxq_projs\\bolgReact_mobx\\src\\articles\\CSS学习\\关于ifc和inline-block\\imgs\\1.png)\r\n\r\n\r\n\r\n可以看到，多个inline-block并没有对齐，它们的对齐应该受其他因素影响。\r\n\r\n在研究影响inline-block对齐的因素前，有必要了解一下ifc。\r\n\r\n# IFC\r\n\r\nifc叫做行内格式化上下文，在ifc 中，行内元素一个接着一个的排列。每一行的行内元素处于一个line-box中，line-box的高度由其包含的line-height最高的元素来确定。\r\n\r\nvertical-align控制着行盒(line-box)中元素的垂直对齐，默认为baseline对齐。一个line-box的baseline以它的子元素最下面的baseline为基准。\r\n\r\n下面我们看一下这几个inline-block为什么会这样对齐。\r\n\r\n![2](E:\\sxq_projs\\bolgReact_mobx\\src\\articles\\CSS学习\\关于ifc和inline-block\\imgs\\2.png)\r\n\r\n可以看到，整个line-box的baseline被第二个元素和第三个元素挤到下面去了。第一个和第四个元素的文字正好和第二个元素和第三个元素的margin-box的底边对齐。\r\n\r\n由此可见，如果一个inline-block，它的内部没有内容，那么它的baseline为它的marginBox的底边。如果inline-block的overflow不为visible，那么它的baseline也为它的marginBox的底边。\r\n\r\n我们看最后一个元素，它没有直接的文本元素，但是它的子元素拥有文本。我们简单修改一下代码（将第四个元素的子元素文本去掉）：\r\n\r\n```html\r\n        <div class="iblock">\r\n            <div class="iblock inside"></div>\r\n        </div>\r\n```\r\n\r\n![3](E:\\sxq_projs\\bolgReact_mobx\\src\\articles\\CSS学习\\关于ifc和inline-block\\imgs\\3.png)\r\n\r\n我们可以看到，第四个元素的子元素变成了一个没有内容的inline-block，此时，它的baseline变成了子元素的margin-box的底边。\r\n\r\n如果一个inline-block拥有子元素，那么它的baseline为子元素的baseline。\r\n\r\n引入CSS2规范中的一段话：\r\n\r\n> The baseline of an ‘inline-block’ is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its ‘overflow’ property has a computed value other than ‘visible’, in which case the baseline is the bottom margin edge.\r\n\r\n翻译：一个inline-block的beseline是它的标准文档流子元素中，最后一个line-box的baseline。如果它的overflow不为visible或者它没有标准文档流的子元素，这种情况下它的baseline为它的margin-box底边。\r\n\r\n对于上文的例子，如何让它们对齐呢？给他们加上同样的对齐方式，破坏掉默认的baseline就可以了。'},54:function(A,i){A.exports="data:image/png;base64,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"},6:function(A,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.getBasicInfo=i.getOverviewPic=i.getArticle=void 0;var e=l(n(53)),r=l(n(54)),g=l(n(22));function l(A){return A&&A.__esModule?A:{default:A}}i.getArticle=function(){return e.default},i.getOverviewPic=function(){return r.default},i.getBasicInfo=function(){return g.default}}},[6]);