const { createClient } = require('@supabase/supabase-js');
const generator = require('generate-password');

require('dotenv').config();

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ADMIN_KEY as string,
);

const email = process.argv[2];
const uname = process.argv[3];

const password = generator.generate({ length: 20, numbers: true });
console.log(`password generated`);
console.log(password);

supabase.auth.admin
  .createUser({
    email,
    password,
    user_metadata: { name: uname },
    email_confirm: true,
  }) // @ts-ignore
  .then(({ data, error }) => {
    if (error) {
      console.error(error);
      console.log('Failed');
      process.exit(1);
    }

    console.log('User Generated!');
    console.log(`email: ${email}`);
    console.log(`pass: ${password}`);
    console.log(data);
    process.exit(0);
  });
