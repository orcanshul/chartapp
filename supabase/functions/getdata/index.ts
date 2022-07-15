import { createClient } from 'https://esm.sh/@supabase/supabase-js@1.35.3'
import { serve } from "https://deno.land/std@0.131.0/http/server.ts"


//@ts-ignore
const supabase = createClient(Deno.env.get('SUPABASE_URL'),Deno.env.get('SUPABASE_ANON_KEY'));
console.log("Hello from Functions!")

serve(async () => {
  
  var x = await supabase.from("Data").select("ChartData,id")
    
    


  return new Response(

    JSON.stringify(x.data),
    { headers: { 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey',"Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
