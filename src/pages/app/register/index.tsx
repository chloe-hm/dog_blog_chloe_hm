import Head from 'next/head';
import React from 'react';
import Register from 'src/components/Register';

function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Register />
    </>
  );
}

export default RegisterPage;
