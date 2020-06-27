import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, TextArea } from "semantic-ui-react";
import { useForm } from "./useForm";
import MogLogo from "../images/mog.svg";
import { submitFeedback } from "../services/submitFeedback";
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
      <div className="feedback__left">
        <div className="feedback__left__text">
          <h1>What can we do better?</h1>
          <ul>
            <li className="feedback__left__text-items">
              <span className="feedback__left__text-types">Issue: </span>If you
              recieved any sort of error or have run across any site breaking
              issues please let us know. Steps you can take the help us
              troubleshoot the issue are:
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
      <div className="feedback__right">
        <div className="feedback__right__text">
          <div className="feedback-logo-container">
            <Link to="home">
              <img alt="Mog-logo" className="feedback-logo" src={MogLogo} />
            </Link>
          </div>
          <Form>
            <h1>Welcome Back</h1>
            <Form.Field>
              <label>Feedback type:</label>
              <select name="type" onChange={handleSelect} defaultValue="none">
                <option value="none" disabled hidden>
                  Select an Option
                </option>
                <option value="issue">Issue</option>
                <option value="suggestion">Suggestion</option>
                <option value="comment">Comment</option>
              </select>
            </Form.Field>
            <Form.Field>
              <TextArea
                onChange={handleTextArea}
                name="content"
                placeholder="Tell us more"
                rows="5"
              />
            </Form.Field>
            <Button className="submit-button" primary onClick={handleSubmit}>
              Submit
            </Button>
            <hr />
            <div>
              <div className="feedback__nav">
                <p className="feedback__nav__text">No feedback?</p>
                <Link className="feedback__nav__link" to="home">
                  Home
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="copyright">
        ©2004 Blizzard Entertainment, Inc. All rights reserved. World of
        Warcraft, Warcraft and Blizzard Entertainment are trademarks or
        registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or
        other countries.
      </div>
    </section>
  );
};
