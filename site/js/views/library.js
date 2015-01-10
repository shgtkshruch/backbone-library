var app = app || {};

app.LibraryView = Backbone.View.extend({
  el: '#books',

  initialize: function (initialBooks) {
    this.collection = new app.Library(initialBooks);
    this.render();
  },

  // コレクション内のそれぞれの本について描画処理を呼び出し、
  // リスト全体を表示
  render: function () {
    this.collection.each(function (item) {
      this.renderBook(item);
    }, this);
  },

  // BookViewを使い個々の本を描画。生成された要素はリストの
  // DOMに追加
  renderBook: function (item) {
    var bookView = new app.BookView({
      model: item
    });
    this.$el.append(bookView.render().el);
  }
});
