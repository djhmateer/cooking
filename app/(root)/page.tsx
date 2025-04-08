import { Button } from "@/components/ui/button";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  await delay(100);
  return <>Homepage</>;
  // return <Button>Click me</Button>;
}
 
export default Homepage;