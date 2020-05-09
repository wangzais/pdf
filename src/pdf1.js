import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default function (element) {
  console.log(element);

  // setIsLoading(true);
  var w = element.offsetWidth; // 获得该容器的宽
  var h = element.offsetWidth; // 获得该容器的高
  var offsetTop = element.offsetTop; // 获得该容器到文档顶部的距离
  var offsetLeft = element.offsetLeft; // 获得该容器到文档最左的距离
  var canvas = document.createElement("canvas");
  var abs = 0;
  var win_i = document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
  var win_o = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
  if (win_o > win_i) {
    abs = (win_o - win_i) / 2; // 获得滚动条长度的一半
  }
  canvas.width = w * 2; // 将画布宽&&高放大两倍
  canvas.height = w * 2;
  var context = canvas.getContext("2d");
  context.scale(2, 2);
  context.translate(-offsetLeft - abs, -offsetTop);
  //控制页数
  let page = 8;
  html2canvas(element, {
    width: 960,
    height: 980 * 1.4142 * page,
    background: "#fff",
    scale: 2,
    tainttest: true,
    logging: false,
    letterRendering: true,
  }).then(function (canvas) {
    var contentWidth = canvas.width;
    var contentHeight = canvas.height;
    // A4纸宽高
    var A4Width = 595.28;
    var A4Height = 841.89;
    // 一页pdf显示html页面生成的canvas高度
    var pageHeight = (contentWidth / A4Width) * A4Height;
    // 未生成pdf的html页面高度
    var leftHeight = contentHeight;
    // pdf页面偏移
    var position = 0;
    // pdf页面内边距
    var pdfPadding = 0;
    // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    var imgWidth = A4Width;
    var imgHeight = (A4Width / contentWidth) * contentHeight;
    var pageData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF("", "pt", "a4");
    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, "JPEG", pdfPadding, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        pdf.addImage(
          pageData,
          "JPEG",
          pdfPadding,
          position,
          imgWidth,
          imgHeight
        );
        leftHeight -= pageHeight;
        position -= A4Height;
        leftHeight > 0 && pdf.addPage();
      }
    }
    pdf.save("aaaaa");
  });
}
