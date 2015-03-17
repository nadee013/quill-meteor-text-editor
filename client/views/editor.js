Template.editor.rendered = function() {
  var self = this;
  setTimeout(function() {
    var editorContainer = self.find('#editor');
    var toolbarContainer = self.find('#toolbar');

    var editor = new Quill(editorContainer, {
      modules: {
        'toolbar': { container: toolbarContainer },
        'link-tooltip': true,
        'image-tooltip': true,
      },
      theme: 'snow',
      formats: ['bold', 'italic', 'strike', 'underline', 'link', 'bullet', 'list', 'image']
    });
  }, 100);
}