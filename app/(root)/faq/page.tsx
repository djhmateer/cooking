import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">How can I plan quick meals around after-school activities?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our meal planner is designed for busy families juggling swimming lessons, 
              football practice, and homework. You can filter recipes by prep time and 
              find 15-30 minute meals perfect for busy weekdays. We've got plenty of 
              make-ahead options that work brilliantly when reheated, like shepherd's 
              pie and pasta bakes. Plus, our "prep ahead" section shows what can be 
              done on Sunday evening to save time during the week.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">What are your best lunchbox recipes that kids will actually eat?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Homemade pizza pinwheels (can be frozen)</li>
              <li>British classics like cheese and cucumber sandwiches with a twist</li>
              <li>Batch-cooked sausage rolls using hidden vegetables</li>
              <li>Quick pasta salads that stay fresh until lunch</li>
              <li>Healthier flapjacks and tray bakes for treats</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              All lunch recipes come with a "packed lunch rating" from real kids and 
              tips for keeping food fresh and appealing by lunchtime.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">How do I get my children involved in cooking safely?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Each recipe has age-appropriate tasks marked with our "Little Helpers" 
              icons. For 8-10 year olds, we suggest safe tasks like measuring 
              ingredients, mixing batter, rolling dough, and assembling no-cook items. 
              Our weekend cooking projects are specially designed for family participation, 
              with clear safety guidelines and supervision tips for parents.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">What about batch cooking and freezer meals?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              Our batch cooking section is perfect for busy professionals:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Weekend batch cooking plans that create 3-4 future meals</li>
              <li>Proper freezing and defrosting guidelines for British family favourites</li>
              <li>School night specials that can go straight from freezer to oven</li>
              <li>Recipes that cleverly transform into different meals (like roast chicken dinner to coronation chicken)</li>
              <li>Monthly meal prep calendars designed around term times</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">How do you handle fussy eaters and different dietary needs?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our recipes include clever adaptations for picky eaters, with tips for 
              "deconstructing" meals so everyone can enjoy dinner their way. We provide 
              substitution guides for common allergens and dietary requirements, plus 
              strategies for gradually introducing new foods. Many recipes feature 
              hidden vegetables (like our popular "midnight pasta sauce") and have 
              been tested by real British families.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary">What about shopping and budgeting?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our meal plans include shopping lists optimised for major British 
              supermarkets, with budget-friendly swaps and seasonal ingredients. 
              You'll find cost-per-portion calculations, tips for reducing food waste, 
              and clever ways to use leftovers. We also highlight when to splash out 
              on quality ingredients and where supermarket basics work just as well.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
