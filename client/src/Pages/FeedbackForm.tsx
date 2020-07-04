import React from "react";
import { useForm } from "../resources/useForm";
import { Layout } from "../CommonComponents/Layout";
import { submitFeedback } from "../services/submitFeedback";
import { CopyRight } from "../FeatureComponents/CopyRight";
import {
  FormContent,
  FormHeader,
  FormContainer,
  FormLink,
  FormButton,
  FormReroute,
  FormSelect,
  FormTextArea,
} from "../CommonComponents/Forms/Form";
import { BgImageContainer } from "../FeatureComponents/BgImageContainer";
import bgimage from "../images/Feedback.jpg";
import "../styling/FeedbackStyle.scss";

export const FeedbackForm = () => {
  const submitForm = () => {
    submitFeedback(values);
  };
  const { values, handleSubmit, handleTextArea, handleSelect } = useForm(
    submitForm
  );
  return (
    <BgImageContainer image={bgimage}>
      <Layout flex={true} flexDirection="row" height="full" width="full">
        <FormContainer logo={true}>
          <Layout x="p2" y="p1">
            <FormContent>
              <Layout margin="b1">
                <FormHeader header="What can we do?" />
              </Layout>
              <FormSelect change={handleSelect} label="Feedback type">
                <option value="issue">Issue</option>
                <option value="suggestion">Suggestion</option>
                <option value="comment">Comment</option>
              </FormSelect>
              <Layout margin="y1">
                <FormTextArea
                  change={handleTextArea}
                  name="content"
                  placeholder="Tell us more"
                  rows={5}
                />
              </Layout>
              <Layout margin={"y1"}>
                <FormButton submit={handleSubmit} button="Submit" />
              </Layout>
              <hr />
              <Layout padding="y1" margin="t1">
                <FormReroute text="No Feedback?">
                  <FormLink link="Home" to="/home" />
                </FormReroute>
              </Layout>
            </FormContent>
          </Layout>
        </FormContainer>
      </Layout>
      <CopyRight />
    </BgImageContainer>
  );
};
