import { useState, useEffect } from "react";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Link } from "react-router-dom";
// import { createClient } from "@supabase/supabase-js";

export default function AuthPage() {
  const [supabase, setSupabase] = useState(null);

  useEffect(() => {
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

    console.log("supabaseUrl:", supabaseUrl);
    console.log("supabaseKey:", supabaseKey);

    if (supabaseUrl && supabaseKey) {
      const client = createClient(supabaseUrl, supabaseKey);
      setSupabase(client);
    } else {
      console.error("Missing Supabase URL or key");
    }
  }, []);

  return (
    <div id="AuthPage" className="w-full min-h-screen bg-white">
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        <Link to='/'>
          <img src="/images/logo.png" alt="Logo" className="min-w-[170px]" />
        </Link>
      </div>
      <div className="w-full flex items-center justify-center p-5 border-b border-gray-300">
        Login / Register
      </div>
      <div className="max-w-[400px] mx-auto px-2">

      </div>
    </div>
  );
}
