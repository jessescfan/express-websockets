import React from "react";
import {useForm} from "react-hook-form";
import TextInput from "#root/components/Shared/TextInput";
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";
import {useHistory} from "react-router-dom";
import styled from "styled-components";


const LabelText = styled.strong`
  display: block;
  font-size: .9rem;TextInput.js
  margin-bottom: .25rem;
`;
const Label = styled.label`
  display: block;
  
  :not(:first-child) {
    margin-top: .75rem;
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  margin-top: .5rem;
`;

const mutation = gql`
  mutation($name: String!, $createdBy: String!) {
    createChannel(name: $name, createdBy: $createdBy) {
      id
      createdBy
      name
    }
  }
`;
const Channel = () => {
  let history = useHistory();
  const {
    formState: {isSubmitting},
    handleSubmit,
    register
  } = useForm();

  const [createChannel] = useMutation(mutation);

  const onSubmit = handleSubmit(async ({name, createdBy}) => {
    const {data: {createUserSession: createdSession}} =
      await createChannel({variables: {name, createdBy}});

    //redirect back to home
    history.push('/');
  });

  return <form onSubmit={onSubmit}>
    <Label>
      <LabelText>Name</LabelText>
      <TextInput disabled={isSubmitting}
                 name="name"
                 type="text"
                 ref={register}/>
    </Label>
    <Label>
      <LabelText>CreatedBy</LabelText>
      <TextInput disabled={isSubmitting}
                 name="createdBy"
                 type="text"
                 ref={register}/>
      <SubmitButton disabled={isSubmitting} type="submit">
        Submit
      </SubmitButton>
    </Label>
  </form>;
};

export default Channel;