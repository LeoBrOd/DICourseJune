// let usersMovies = [];

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    //usersMovies.push(this);
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
  }
}

// let firstVideo = new Video(
//   "Lord of the rings",
//   "John",
//   9288
// );

// console.log(firstVideo.watch());

// let secondVideo = new Video(
//   "Harry Potter and the Philosopher's Stone",
//   "Fred",
//   8352
// );

// console.log(secondVideo.watch());

// console.log(usersMovies);

let videoList = [
  ["Lord of the rings", "John", 9288],
  ["Harry Potter and the Philosopher's Stone",
    "Fred",
    8352],
  ["John Wick", "Igor",5076],
  ["Everything Everywhere All at Once","Peter",7884],
  ["Top Gun: Maverick", "Alice",7560],
];

// let videoList = [
//     {title:"Lord of the rings",uploader: "John",time: 9288},
//     {title:"Harry Potter and the Philosopher's Stone",uploader:
//       "Fred",time:
//       8352},
//     {title:"John Wick",uploader: "Igor",time:5076},
//     {title:"Everything Everywhere All at Once",uploader:"Peter",time:7884},
//     {title:"Top Gun: Maverick",uploader: "Alice",time:7560},
//   ];

// videoList.forEach(e => {
//     let newVideo = new Video(e)
//     console.log(newVideo);
// });

for (let i = 0; i < videoList.length; i++) {
    let newVideo = new Video (videoList[i]);
    console.log(newVideo);
}
