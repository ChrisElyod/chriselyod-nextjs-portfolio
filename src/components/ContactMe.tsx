import React, { FC, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useFormik } from "formik";

const ContactMe: FC = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <Box>
      <Box>

      </Box>
      <Box>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Email Address</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
        <label htmlFor="message">Email Address</label>
        <input
          id="message"
          name="message"
          type="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <button type="submit">Submit</button>
        </form>
      </Box>
    </Box>
  )
}

export default ContactMe;