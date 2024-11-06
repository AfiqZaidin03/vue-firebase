const app = Vue.createApp({
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "name of the fire",
          author: "spongebob",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "name of the earth",
          author: "squidword",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 26,
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },

    // handleEvent(e, data) {
    //   console.log(e, e.type);
    //   if (data) {
    //     console.log(data);
    //   }
    // },
    // handleMousemove(e) {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
