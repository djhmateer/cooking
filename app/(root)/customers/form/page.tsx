// app/(root)/customer/form/page.tsx
import { getCustomer } from "@/lib/queries/getCustomer";
import CustomerForm from "@/app/(root)/customers/form/CustomerForm";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h2>
          </>
        );
      }
      console.log(customer);
      // update customer 
      return <CustomerForm customer={customer} />;
    } else {
      // create customer 
      return <CustomerForm />;
    }
  } catch (e) {
    // will get ouptutted to the console ie vercel logs
    throw e;
  }
}
