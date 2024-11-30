CREATE TABLE insurance_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL, 
  description TEXT
);

CREATE TABLE profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users (id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL CHECK (role IN ('agent', 'user','admin')), 
  username TEXT NOT NULL UNIQUE, 
  name TEXT                      
);

CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  insurance_type_id INT REFERENCES insurance_types(id) 
);

CREATE TABLE policies (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  insurance_type_id INT REFERENCES insurance_types(id), 
  agent_id INT REFERENCES agents(id), 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  approved BOOLEAN DEFAULT FALSE
);
