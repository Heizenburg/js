// JavaScript Document

colorLinks("#eb1111");

function colorLinks(hex)
{
  var links = document.getElementsByTagName("a");
  for(var i=0;i<links.length;i++)
  {
    if(links[i].href)
    {
      links[i].style.color = hex;
    }
  }
}
