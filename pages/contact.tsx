import React, { FC, useState } from "react";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/toast';
import { AiOutlineCheck } from 'react-icons/ai';
import { Form, FormikProps, withFormik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/dist/client/router";
import CountDown from '../src/components/CountDown';

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

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const toast = useToast();
  const router = useRouter();

  const FormFields = (props: (FormProps & FormikProps<FormValues>)) => {
    const { touched, errors, isSubmitting, handleChange } = props;
    return (
      <Form>
        <Box display="flex" flexDirection="column">
          <FormControl isInvalid={errors.name && touched.name} isRequired pt="4" isDisabled={isSubmitted}>
            <FormLabel>Name</FormLabel>
            <Input id="name" placeholder="Name" type="text" onChange={handleChange} />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email && touched.email} isRequired pt="4" isDisabled={isSubmitted}>
            <FormLabel>Email</FormLabel>
            <Input id="email" placeholder="Email" type="text" onChange={handleChange} />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message && touched.message} isRequired pt="4" isDisabled={isSubmitted}>
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
            leftIcon={isSubmitted ? <AiOutlineCheck /> : <></>}
            isDisabled={isSubmitted}
          >
            { isSubmitted ? 'Submitted' : 'Submit' }
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
    handleSubmit: async (values, { setSubmitting }) => {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(() => {
        setIsSubmitted(true);
        toast({
          title: "Contact Form Submitted",
          description: <Box display="flex">Thank you for your interest! Redirecting in&nbsp;<CountDown timer={3} />...</Box>,
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "top-accent"
        })
      }).catch(error => {
        console.log(error);
      })
      setSubmitting(false);
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  })(FormFields);

  return (
    <Box minHeight="100vh" display="flex" justifyContent="center" bg="#365f85">
      <Box display="flex" justifyContent='space-evenly' flexDirection="column" alignItems="center" w="container.lg" mt="10">
        <Box textAlign="center" display="flex" flexDirection="column" color="whiteAlpha.900">
          <Text fontSize="2xl" display={{ base: 'none', md: 'initial' }}>Hey!</Text>
          <Text fontSize={{ base: "md", md: "lg" }} pt="10" maxW="75vw">
            Thanks for showing interest. Whether it&apos;s a suggestion of how to make the site better or otherwise I would be more than happy to hear from you!
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          m="4"
          border="1px solid gray"
          minW="25vw"
          maxW="75vw"
          px={{ base: "10", md: "16" }}
          py={{ base: "6", md: "10" }}
          borderRadius="3xl"
          bg="gray.100"
          boxShadow="dark-lg"
        >
          <Text fontSize={{ base: "lg", md: "2xl"}} fontWeight="semibold">Drop me a message!</Text>
          <FormikForm />
        </Box>
      </Box>
    </Box>
  )
}

export default Contact;