function copyText()
{
    text='aa';
    var input=document.getElementById("text");
    input.select();
    document.execCommand("copy");
    alert("复制成功");
}
//E-mail部分复制