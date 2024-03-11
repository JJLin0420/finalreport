$(document).ready(function() {
    $("a").click(function(e) {
      var target = $(this).attr("href");
      if (target.startsWith("#")) { // 檢查href屬性值是否是一個錨點
        e.preventDefault(); // 阻止默認的錨點跳轉行為
        $("html, body").animate({
          scrollTop: $(target).offset().top // 使用jQuery的offset函數來獲取目標元素的頂部位置
        }, 500); // 1000毫秒內滾動到目標位置
      }
    });
  });
  