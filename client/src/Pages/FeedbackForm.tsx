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
import "../styling/FeedbackStyle.scss";

export const FeedbackForm = () => {
  const submitForm = () => {
    submitFeedback(values);
  };
  const { values, handleSubmit, handleTextArea, handleSelect } = useForm(
    submitForm
  );
  return (
    <section className="feedback">
      <div className="feedback__forms">
        <div className="feedback__left">
          <div className="feedback__left__text">
            <Layout padding={"x1"}>
              <h1>What can we do better?</h1>
            </Layout>
            <ul>
              <li className="feedback__left__text-items">
                <span className="feedback__left__text-types">Issue: </span>If
                you recieved any sort of error or have run across any site
                breaking issues please let us know. Steps you can take the help
                us troubleshoot the issue are:
                <ol>
                  <li>Recreate the issue</li>
                  <li>Right click and go to inspect</li>
                  <li>Navigate to console</li>
                  <li>Look for any red error</li>
                  <li>
                    When you send the report just describe or copy and paste the
                    error
                  </li>
                </ol>
                <hr />
              </li>
              <li className="feedback__left__text-items">
                <span className="feedback__left__text-types">Suggestion:</span>{" "}
                What ideas do you have? If there are any features you would like
                to see be implemented into the platform, let us know. We might
                think its a great idea too and add it!
                <hr />
              </li>
              <li className="feedback__left__text-items">
                <span className="feedback__left__text-types">Comment:</span> How
                are we doing? What can we improve on? You can also add any
                suggestions you might have to improve.
              </li>
            </ul>
            <div className="feedback__support">Thank you for your support</div>
          </div>
        </div>

        <FormContainer logo={true}>
          <FormContent>
            <FormHeader header="What can we do?" />
            <FormSelect change={handleSelect} label="Feedback type">
              <option value="issue">Issue</option>
              <option value="suggestion">Suggestion</option>
              <option value="comment">Comment</option>
            </FormSelect>
            <FormTextArea
              change={handleTextArea}
              name="content"
              placeholder="Tell us more"
              rows={5}
            />
            <FormButton submit={handleSubmit} button="Submit" />
            <hr />
            <FormReroute text="No Feedback?">
              <FormLink link="Home" to="/home" />
            </FormReroute>
          </FormContent>
        </FormContainer>
      </div>
      <CopyRight />
    </section>
  );
};
