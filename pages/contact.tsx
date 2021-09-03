import React, { FC, useState } from "react";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { ErrorMessage, useFormik, Formik, Field, Form, FormikProps, withFormik } from "formik";
import * as Yup from 'yup';

interface FormValues {
  email: string,
  message: string,
  name: string,
}

interface FormProps {
  email?: string,
  message?: string,
  name?: string,
}

const Contact: FC = () => {

  const FormFields = (props: (FormProps & FormikProps<FormValues>)) => {
    const { touched, errors, isSubmitting, handleChange } = props;
    return (
      <Form>
        <Box display="flex" flexDirection="column">
          <FormControl isInvalid={errors.name && touched.name} isRequired pt="4">
            <FormLabel>Name</FormLabel>
            <Input id="name" placeholder="Name" type="text" onChange={handleChange} />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email && touched.email} isRequired pt="4">
            <FormLabel>Email</FormLabel>
            <Input id="email" placeholder="Email" type="text" onChange={handleChange}/>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message && touched.message} isRequired pt="4">
            <FormLabel>Message</FormLabel>
            <Textarea
              id="message"
              onChange={handleChange}
              placeholder="Please drop me a message!"
            />
            <FormErrorMessage>{errors.message}</FormErrorMessage>
          </FormControl>
          <Button
            variant="primary"
            isLoading={isSubmitting}
            type="submit"
            mt="4"
          >
            Submit
          </Button>
        </Box>
      </Form>
    )
  }

  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    message: Yup.string()
      .required('Required'),
    name: Yup.string().required('Required'),
  });

  const FormikForm = withFormik<FormProps, FormValues>({
    validationSchema: signUpSchema,
    mapPropsToValues: () => {
      return {
        email: '',
        message: '',
        name: ''
      }
    },
    handleSubmit: (values, { setSubmitting }) => {
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then((res) => {
        console.log(res);
      })
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);      
    }
  })(FormFields);

  return (
    <Box display="flex" justifyContent='center' h="max-content">
      <Box display="flex" justifyContent='center' flexDirection="column" m="4" border="1px solid gray" minW="25vw" maxW="60vw" px='16' py="10" borderRadius="3xl">
        <Text fontSize="2xl" fontWeight="semibold">Drop me a message!</Text>
        <FormikForm />
      </Box>
    </Box>
  )
}

export default Contact;