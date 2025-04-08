import { Button } from "@/components/ui/button";
import sampleData from "@/db/sample-data";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  console.log(sampleData);
  return <>Homepage</>;
  // return <Button>Click me</Button>;
}
 
export default Homepage;