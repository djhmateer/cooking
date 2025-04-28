// force-dynamic as never want this page to be cached. it is doing something!
export const dynamic = "force-dynamic";

import "dotenv/config";
import postgres from "postgres";

const client = postgres(process.env.POSTGRES_URL_NON_POOLING!);

async function noTransactionInsert() {
  console.time();
  const customer = {
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  };

  try {
    for (let i = 0; i < 1000; i++) {
      console.log("inserting ", i);
      await client`INSERT INTO customers (name, email, image_url)
        VALUES (${customer.name + i}, ${customer.email}, ${
        customer.image_url
      })`;
    }
  } catch (error) {
    console.error("error", error);
    throw error;
  }

  console.timeEnd();
}

// async function transactionInsert() {
//   console.time();
//   const customer = {
//     name: "Evil Rabbit",
//     email: "evil@rabbit.com",
//     image_url: "/customers/evil-rabbit.png",
//   };

//   console.log("starting");
//   try {
//     await client.begin(async (client) => {
//       for (let i = 0; i < 1000; i++) {
//         console.log("inserting ", i);
//         await client`
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

//   console.log("done");
//   console.timeEnd();
// }

const FooPage = async () => {
// const FooPage = () => {
  const start = Date.now();
  // await transactionInsert();
  await noTransactionInsert();
  const end = Date.now();
  const duration = end - start;
  return <>seeded successfully in {duration} milliseconds</>;
};

export default FooPage;
