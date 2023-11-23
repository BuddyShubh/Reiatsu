// const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "bd840a8202mshed253ae4e2307ebp1b8bb2jsn4819afd7d3f9",
//     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//   },
// };

let result = ""

let videoURL: any[] = [
  "7dYTw-jAYkY","mwKJfNYwvm8","QjvpjXdgugA","FM7Z-Xq8Drc","tVWWp1PqDus","RvYkeTmM1gc"
]

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   // console.log(result);
// } catch (error) {
//   console.error(error);
// }

// // Create a reference under which you want to list
// const listRef = ref(storage, '/');

// // Find all the prefixes and items.
// listAll(listRef)
//   .then((res) => {
//     res.prefixes.forEach((folderRef) => {
//       // All the prefixes under listRef.
//       // You may call listAll() recursively on them.
//     });
//     res.items.forEach((itemRef) => {
//       getDownloadURL(ref(storage,itemRef.name)).then(
//         (url)=>{
//           videoURL.push(url)
//         }
//       )
//     });
//   }).catch((error) => {
//     // Uh-oh, an error occurred!
//   });


export { result, videoURL };


