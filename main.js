$(document).ready(function() {
  var tpl = _.template(
      "<h1>§ 1005.1 <span contenteditable='true'><%= title %></span></h1>");
  SirTrevor.Blocks.SectionHeading = SirTrevor.Block.extend({
    type: 'section-heading',
    title: 'Section Heading',
    icon_name: 'heading',
    editorHTML: function() {
      return tpl({"title": "Your Title"});
    },
    loadData: function(data) {
      var $newElt = $(tpl(data));
      this.$editor.replaceWith($newElt);
      this.$editor = $newElt;
    },
    _serializeData: function() { return {
      "title": this.$editor.find('span').text()
    };}
  });


  new SirTrevor.Editor({
    el: $('[name=heading]'),
    blockTypes: ["SectionHeading"],
    defaultType: "SectionHeading",
    blockLimit: 1,
    required: ["SectionHeading"]
  });
  new SirTrevor.Editor({
    el: $('[name=paragraphs]'),
    blockTypes: ["Text"]
  });
});
