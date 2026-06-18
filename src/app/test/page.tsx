import { supabase } from "@/lib/supabase";

export default function TestPage() {
  console.log("Supabase Client:", supabase);

  return (
    <div className="p-10">
      Supabase Connected ✅
    </div>
  );
}