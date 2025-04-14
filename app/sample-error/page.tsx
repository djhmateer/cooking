// dont want this to be run on deployment and cached
export const dynamic = "force-dynamic";

import "dotenv/config";
// import postgres from "postgres";

// const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!);

// async function transactionInsert() {
//   console.time();
//   const customer = {
//     name: "Evil Rabbit",
//     email: "evil@rabbit.com",
//     image_url: "/customers/evil-rabbit.png",
//   };

//   try {
//     await sql.begin(async (sql) => {
//       for (let i = 0; i < 1000; i++) {
//         // console.log("inserting ", i);
//         await sql`
//           INSERT INTO customers (name, email, image_url)
//           VALUES (${customer.name + i}, ${customer.email}, ${
//           customer.image_url
//         })
//         `;
//       }
//     });
//   } catch (error) {
//     console.log("error", error);
//   }

//   console.timeEnd();
// }

const SampleErrorPage = async () => {
  throw new Error("Sample Error");

  return <>Sample Error Page text</>;
};

export default SampleErrorPage;
