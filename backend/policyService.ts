import {supabase} from "./config";

export const createPolicy = async (insuranceTypeId) => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
  
      if (userError) throw userError;
      if (!user) throw new Error('User is not logged in.');
      const userId = user.id;
      const { data, error } = await supabase
        .from('policies')
        .insert([
          {
            user_id: userId,
            insurance_type_id: insuranceTypeId,
          },
        ]);
      if (error) throw error;
  
      console.log('Policy created:', data);
      return data;
    } catch (err) {
      console.error('Error creating policy:', err);
      throw err;
    }
  };

