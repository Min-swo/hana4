// type Reading = { page: number };
// type Writing = { title: string };
// type ReadWrite = Reading | Writing;
// type ReadWritePrice = (Reading | Writing) & { price: number };
// type Novel = Writing & { price: number };

// class W implements Novel {
//   title = "TTTT";
//   price = 9_000;
// }

// const x1: ReadWrite = { title: "aaa" }; // Writing (title)
// const x2: ReadWrite = { title: "aaa", page: 1 };
// const x3: ReadWrite = { page: 1 }; // Reading (page)

// x1.title;
// // x2.title; // Error: Property 'title' does not exist on type 'ReadWrite'.
// // Error: Property 'title' does not exist on type 'Reading'.(2339)
// // x2.page; // Error: Property 'page' does not exist on type 'ReadWrite'.
// x3.page; // Error: Property 'page' does not exist on type 'Writing'.(2339)

// interface IReading {
//   page: number;
// }
// interface IWriting {
//   title: string;
// }

// // interface IReadWrite Reading | Writing;  // 불가!
// interface IReadWrite extends Reading, Writing {}

// const x: IReadWrite = { title: "aaa" }; // Error: Property 'page' is missing in type '{ title: string; }'
// // but required in type 'IReadWrite'.(2741)

// type Book = {
//   autor?: string;
//   pages: number;
// };

// const ok: Book = {
//   autor: "Hong",
//   pages: 1,
// };

// ok.autor.toLocaleLowerCase(); // Could be undefined!!
// ok.autor?.toLocaleLowerCase();
