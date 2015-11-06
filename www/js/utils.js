function listaBattlegrounds() {
  var bs = jQuery(".media-wrapper");
  var output;
  for (var i = 0; i < bs.length; i++) {
    var name = jQuery.trim(jQuery(bs[i]).find('h3').text());
    var image = jQuery(bs[i]).find('img').attr('src');
    var title = jQuery.trim(jQuery(bs[i]).find('.battleground-item__description').text());
    output += "{name: \""+name+"\", description: \""+title+"\", image: \"img/battlegrounds/"+image.slice(image.lastIndexOf('/')+1)+"\"},\n";
  }
  console.log(output);
}
