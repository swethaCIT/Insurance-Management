import { supabase } from "./config"

export const login = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    if (data?.user) {
      // Fetch the role from the profiles table
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', data.user.id)
        .single();
      if (profileError) throw profileError;

      // Store session and user data
      sessionStorage.setItem('user', JSON.stringify(data.user));
      sessionStorage.setItem('role', profile.role);
      sessionStorage.setItem('access_token', data.session?.access_token || '');

      return { user: data.user, role: profile.role };
    }

    throw new Error('Login failed: user session not found.');
  } catch (err) {
    console.error('Error in user login:', err);
    throw err;
  }
};


export const fetchUserRole = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (!user?.id) throw new Error('User is not logged in.');
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();
    if (error) throw error;

    return profile.role;
  } catch (err) {
    console.error('Error fetching user role:', err);
    throw err;
  }
};



export const signUp = async (
  email: string,
  password: string,
  username: string,
  fullName:string,
  role: string = 'user'
) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      if (error.message.includes("email")) {
        throw new Error("This email is already registered. Please use a different one.");
      }
      throw new Error(error.message);
    }
    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          user_id: data.user.id,
          username: username,
          role: role,
          name:fullName
        },
      ]);

      if (profileError) {
        if (profileError.message.includes("duplicate key value")) {
          throw new Error("This username is already taken. Please choose another.");
        }
        throw new Error(profileError.message);
      }
    }

    return { success: true, message: "Account created successfully!" };
  } catch (error: any) {
    console.error("SignUp Error:", error.message); 
    return { success: false, message: error.message || "An unexpected error occurred." };
  }
};


export const logout = () => {
  sessionStorage.clear();
  supabase.auth.signOut();
};
  