var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer',
  template: _.template($('#bookTemplate').html()),

  render: function () {
    // JSONオブジェクトを受け取ってHTMLを返す
    var tmpl = _.templte(this.template);

    // this,$elはjQueryのhtml()メソッドを呼び出すために使用
    this.$el.html(tmpl(this.model.toJSON()));

    return this;
  }
});
