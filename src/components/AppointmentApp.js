/* eslint-disable */

import React, { Component, useState } from "react";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import moment from "moment";
import DatePicker from "material-ui/DatePicker";
import Dialog2 from "material-ui/Dialog";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import SnackBar from "material-ui/Snackbar";
import Card from "material-ui/Card";
import LinearProgress from "material-ui/LinearProgress";
import FormLabel from "@material-ui/core/FormLabel";

import {
  TimePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import axios from "axios";

const API_BASE = "https://aceuganda.herokuapp.com/";

class AppointmentApp extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstName: "",
      lastName: "",
      organisation: "",
      email: "",
      startDate: null,
      endDate: null,
      agreementModalOpen: false,
      confirmationModalOpen: false,
      appointmentDateSelected: false,
      validEmail: true,
      validPhone: true,
      finished: false,
      smallScreen: window.innerWidth < 768,
      stepIndex: 0,
      startTime: new Date(2019, 12, 16, 8, 0),
      endTime: new Date(2019, 12, 16, 17, 0),
      loading: false,
      purpose: "",
      skillset: "",
      analysis: "",
      number: "",
      description: "",
      recommendation: "",
      vrPurpose: "",
      vrOther: "",
      other: "",
      charge: "",
      agreement: "",
      chargeAmount: "",
      purposeValid: false
    };
  }

  handleSetPurpose(p) {
    this.setState({ purpose: p, purposeValid: this.validatePurpose(p) });
  }

  handleAgreement(a) {
    this.setState({ agreement: a });
  }
  handleChargeAmount(a) {
    this.setState({ chargeAmount: a });
  }

  handleCharge(c) {
    this.setState({ charge: c });
    if (c === "no") {
      this.setState({ chargeAmount: "" }); //reset chargeAmount state incase somone selects no
    }
  }
  handleSetvrPurpose(p) {
    this.setState({ vrPurpose: p });
  }
  handleStartTime(date) {
    this.setState({ startTime: date });
  }
  handleEndTime(date) {
    this.setState({ endTime: date });
  }
  handleSubmit() {
    this.setState({ confirmationModalOpen: false, loading: true });
    let st = moment(this.state.startTime).format("HH:mm:ss a");
    let ed = moment(this.state.endTime).format("HH:mm:ss a");

    let start = moment(st, "HH:mm:ss a");
    let end = moment(ed, "HH:mm:ss a");
    let d = moment.duration(end.diff(start));
    let duration = parseInt(d.asHours());
    const newAppointment = {
      name: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      organisation: this.state.organisation,
      purpose:
        this.state.purpose === "Other" ? this.state.other : this.state.purpose,
      skillset: this.state.skillset,
      analysis: this.state.analysis,
      number: this.state.number,
      description: this.state.description,
      recommendation: this.state.description,
      vrPurpose:
        this.state.vrPurpose === "vrOther"
          ? this.state.vrOther
          : this.state.vrPurpose,
      charge: this.state.charge,
      agreement: this.state.agreement,
      chargeAmount: this.state.chargeAmount,
      slot_startDate: moment(this.state.startDate).format("YYYY-DD-MM"),
      slot_endDate: moment(this.state.endDate).format("YYYY-DD-MM"),
      slot_startTime: st,
      slot_endTime: ed,
      slot_days: this.state.endDate.diff(this.state.startDate, "days") + 1,
      slot_hours: duration
    };
    // console.log("form", newAppointment);

    axios
      .post(API_BASE + "api/appointmentCreate", newAppointment)
      .then(response =>
        this.setState({
          confirmationSnackbarMessage: "Appointment succesfully added!",
          confirmationSnackbarOpen: true,
          processed: true,
          loading: false
        })
      )
      .catch(err => {
        console.log(err);
        return this.setState({
          confirmationSnackbarMessage: "Appointment failed to save.",
          confirmationSnackbarOpen: true,
          loading: false
        });
      });
  }

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 5
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
      if (stepIndex === 4) {
        this.setState({ purpose: "", purposeValid: this.validatePurpose("") });
        // console.log("handle previous step 3");
        // this.state.purpose !== ""
        //   ? this.setState({
        //       purpose: "",
        //       purposeValid: this.validatePurpose("")
        //     })
        //   : null;
      }
    }
  };
  validateEmail(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email)
      ? this.setState({ email: email, validEmail: true })
      : this.setState({ validEmail: false });
  }
  validatePhone(phoneNumber) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regex.test(phoneNumber)
      ? this.setState({ phone: phoneNumber, validPhone: true })
      : this.setState({ validPhone: false });
  }
  validatePurpose(value) {
    let isValid = false;
    if (value !== "") {
      isValid = true;
    }

    return isValid;
  }

  //end of ...
  renderAgreement() {
    return (
      <section>
        <p>
          Request to use equipment, computers or facilities shall be made at
          least 3 working days prior through IDI ACE Bioinformatics authorities.
        </p>{" "}
        <p>
          No person shall without authority access or attempt to gain access to
          any computer and or facility.
        </p>
        <p>
          The granted access will only be for a limited time only as requested
          for by the user, but can be extended or reduced depending on the
          availability of the facility all at the discretion of the Facilities
          manager.
        </p>
        <p>
          Access shall only be to very specific information and will not include
          access to information that the user does not require access to.
        </p>
        <p>
          The ACE designee must be present and onsite when the facility or
          equipment are being used.
        </p>
        <p>
          IDI/designee will assume the responsibility of supervising the user to
          ensure compliance and protecting the facilities.
        </p>
        <p>
          Facility use and or use of computers shall be on first come first
          serve basis, but manager/in-charge may give priority
        </p>
        <p>
          While using the facility, cell phones and other gadgets should be set
          silent or turned off to avoid disruptions and any applications with
          audio output should be used with headphones.
        </p>
        <p>
          Conversations and discussions should also be kept silent to avoid
          disrupting other users
        </p>
        <p>
          Users of the computer clusters should avoid saving their work on the
          computers as these would be deleted. Files must be saved on personal
          hard drives on USB/Flash drive after a day’s work to avoid loss.
        </p>
        <p>
          Personal, sensitive and confidential data types shall not be stored on
          external hosted service such as Dropbox or Google docs.
        </p>
        <p>
          Request and approval must be sought from the ACE bioinformatics
          head/manager and head of department to use the data.
        </p>
        <p>
          Only the ACE bioinformatics IT systems manager will be permitted to
          store, make manipulations and backup data. Outside users are
          discouraged from attempting to make any changes to data and any such
          changes whether intentional or accidental must be reported.
        </p>
        <p>
          Accessing pornography or profane content and using the facility to
          disseminate offensive, threatening or abusive messages is strictly
          prohibited in this facility. Individuals who violate this prohibition
          will be subject to disciplinary action that may result into loss of
          access or ban.
        </p>
        <p>
          Non facility staff and students are prohibited from changing any
          computer hardware or software. This violation may lead to loss of
          facility privileges.
        </p>
        <p>
          No external user shall remove, interfere or tamper with any components
          of the facility or computer or use any computer system in ways that
          interfere with its use
        </p>
        <p>
          Damage to computers or facilities will lead to fines and may in some
          cases result into loss or denial of facility access privileges
        </p>
        <p>
          A record shall be maintained to indicate arrival and departure of
          visitors or persons utilising the facility
        </p>
        <p>
          No food or drinks shall be consumed in the computer rooms. Any
          accidental spills on equipment and computers must be reported after
          which an assessment shall be done to determine damage.
        </p>
      </section>
    );
  }
  renderAppointmentConfirmation() {
    const spanStyle = { color: "#00C853" };
    return (
      <section>
        <p>
          Name:{" "}
          <span style={spanStyle}>
            {this.state.firstName} {this.state.lastName}
          </span>
        </p>
        <p>
          Number: <span style={spanStyle}>{this.state.phone}</span>
        </p>
        <p>
          Email: <span style={spanStyle}>{this.state.email}</span>
        </p>
        <p>
          Purpose: <span style={spanStyle}>{this.state.purpose}</span>
        </p>
        <p>
          Appointment Date: From{" "}
          <span style={spanStyle}>
            {moment(this.state.startDate).format("dddd[,] MMMM Do[,] YYYY")}
          </span>{" "}
          to{" "}
          <span style={spanStyle}>
            {moment(this.state.endDate).format("dddd[,] MMMM Do[,] YYYY")}
          </span>{" "}
        </p>
        <p>
          Appointment Time: From{" "}
          <span style={spanStyle}>
            {moment(this.state.startTime).format("HH:mm")}
          </span>{" "}
          to{" "}
          <span style={spanStyle}>
            {moment(this.state.endTime).format("HH:mm")}
          </span>
        </p>
      </section>
    );
  }

  renderAdditionalInformation() {
    switch (this.state.purpose) {
      case "Individual Research/Compute Core":
        return (
          <div>
            <section>
              <FormLabel component="legend">
                {" "}
                What type of Analysis do you expect to do?
              </FormLabel>
              <TextField
                multiLine={true}
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="analysis"
                hintText="Analysis"
                onChange={(evt, newValue) =>
                  this.setState({ analysis: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Could you provide us with a brief description of the software
                tools, nature of data and an estimate of the amount of computing
                resources you expect to use.
              </FormLabel>
              <TextField
                multiLine={true}
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="description"
                hintText="Description"
                onChange={(evt, newValue) =>
                  this.setState({ description: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Please share with us any additional information/Suggestions that
                may be helpful to us scheduling and prepairing for your visit.
              </FormLabel>
              <TextField
                multiLine={true}
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="recommendation"
                hintText="Recommendation"
                onChange={(evt, newValue) =>
                  this.setState({ recommendation: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Admission Type: Charge or no Charge
                <small>
                  <br />
                  Please indicate whether or not you should be charged for the
                  service. Please note that priority may be given to chargeable
                  users.
                </small>
              </FormLabel>
              <RadioButtonGroup
                style={{
                  marginTop: 15,
                  marginLeft: 15
                }}
                name="charge"
                onChange={(evt, val) => this.handleCharge(val)}
              >
                <RadioButton
                  label="Yes, I would like to be charged"
                  value="yes"
                  style={{
                    marginBottom: 15
                  }}
                />
                <RadioButton
                  label="Free Admission"
                  value="no"
                  style={{
                    marginBottom: 15
                  }}
                />
              </RadioButtonGroup>

              {this.state.charge === "no" ? (
                <React.Fragment>
                  <FormLabel component="legend">
                    {" "}
                    Free Admission
                    <small>
                      <br />
                      Condition: Kindly note that Free admissions may only apply
                      to a few users and for a limited time only as priority may
                      be given to chargeable users.
                      <br /> I agree
                    </small>
                  </FormLabel>
                  <RadioButtonGroup
                    style={{
                      marginTop: 15,
                      marginLeft: 15
                    }}
                    name="agreement"
                    onChange={(evt, val) => this.handleAgreement(val)}
                  >
                    <RadioButton
                      label="Yes, I agree"
                      value="yes"
                      style={{
                        marginBottom: 15
                      }}
                    />
                    <RadioButton
                      label="No"
                      value="no"
                      style={{
                        marginBottom: 15
                      }}
                    />
                  </RadioButtonGroup>
                </React.Fragment>
              ) : this.state.charge === "yes" ? (
                <React.Fragment>
                  <FormLabel component="legend">
                    {" "}
                    Cost
                    <small>
                      <br />
                      Note: The charges contained here are negotiable, but will
                      gerally depend on how long you need the facility
                    </small>
                  </FormLabel>
                  <RadioButtonGroup
                    style={{
                      marginTop: 15,
                      marginLeft: 15
                    }}
                    name="chargeAmount"
                    onChange={(evt, val) => this.handleChargeAmount(val)}
                  >
                    <RadioButton
                      label="Per Day = $1"
                      value="Per Day = $1"
                      style={{
                        marginBottom: 15
                      }}
                    />
                    <RadioButton
                      label="Per Week = 2$"
                      value="Per Week = 2$"
                      style={{
                        marginBottom: 15
                      }}
                    />
                  </RadioButtonGroup>
                </React.Fragment>
              ) : null}
            </section>{" "}
            {this.renderStepActions(4)}
          </div>
        );

      case "ACE Tour":
        return (
          <div>
            <section>
              <FormLabel component="legend">
                {" "}
                How many people will be attending the meeting?
              </FormLabel>
              <TextField
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="number"
                hintText="Number"
                onChange={(evt, newValue) =>
                  this.setState({ number: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Please share with us any additional information/Suggestions that
                may be helpful to us scheduling and prepairing for your visit.
              </FormLabel>
              <TextField
                multiLine={true}
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="recommendation"
                hintText="Recommendation"
                onChange={(evt, newValue) =>
                  this.setState({ recommendation: newValue })
                }
              />
            </section>
            {this.renderStepActions(4)}
          </div>
        );

      case "TeleLearning Facility/ Training/ Workshop":
        return (
          <div>
            <section>
              <FormLabel component="legend">
                {" "}
                How many people will be attending the meeting?
              </FormLabel>
              <TextField
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="number"
                hintText="Number"
                onChange={(evt, newValue) =>
                  this.setState({ number: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Please share with us any additional information/Suggestions that
                may be helpful to us scheduling and prepairing for your visit.
              </FormLabel>
              <TextField
                multiLine={true}
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="recommendation"
                hintText="Recommendation"
                onChange={(evt, newValue) =>
                  this.setState({ recommendation: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Admission Type: Charge or no Charge
                <small>
                  <br />
                  Please indicate whether or not you should be charged for the
                  service. Please note that priority may be given to chargeable
                  users.
                </small>
              </FormLabel>
              <RadioButtonGroup
                style={{
                  marginTop: 15,
                  marginLeft: 15
                }}
                name="charge"
                onChange={(evt, val) => this.handleCharge(val)}
              >
                <RadioButton
                  label="Yes, I would like to be charged"
                  value="yes"
                  style={{
                    marginBottom: 15
                  }}
                />
                <RadioButton
                  label="Free Admission"
                  value="no"
                  style={{
                    marginBottom: 15
                  }}
                />
              </RadioButtonGroup>

              {this.state.charge === "no" ? (
                <React.Fragment>
                  <FormLabel component="legend">
                    {" "}
                    Free Admission
                    <small>
                      <br />
                      Condition: Kindly note that Free admissions may only apply
                      to a few users and for a limited time only as priority may
                      be given to chargeable users.
                      <br /> I agree
                    </small>
                  </FormLabel>
                  <RadioButtonGroup
                    style={{
                      marginTop: 15,
                      marginLeft: 15
                    }}
                    name="agreement"
                    onChange={(evt, val) => this.handleAgreement(val)}
                  >
                    <RadioButton
                      label="Yes, I agree"
                      value="yes"
                      style={{
                        marginBottom: 15
                      }}
                    />
                    <RadioButton
                      label="No"
                      value="no"
                      style={{
                        marginBottom: 15
                      }}
                    />
                  </RadioButtonGroup>
                </React.Fragment>
              ) : this.state.charge === "yes" ? (
                <React.Fragment>
                  <FormLabel component="legend">
                    {" "}
                    Cost
                    <small>
                      <br />
                      Note: The charges contained here are negotiable, but will
                      gerally depend on how long you need the facility
                    </small>
                  </FormLabel>
                  <RadioButtonGroup
                    style={{
                      marginTop: 15,
                      marginLeft: 15
                    }}
                    name="chargeAmount"
                    onChange={(evt, val) => this.handleChargeAmount(val)}
                  >
                    <RadioButton
                      label="Per Day = $1"
                      value="Per Day = $1"
                      style={{
                        marginBottom: 15
                      }}
                    />
                    <RadioButton
                      label="Per Week = 2$"
                      value="Per Week = 2$"
                      style={{
                        marginBottom: 15
                      }}
                    />
                  </RadioButtonGroup>
                </React.Fragment>
              ) : null}
            </section>
            {this.renderStepActions(4)}
          </div>
        );
      case "Other":
        return (
          <div>
            <section>
              <FormLabel component="legend">
                {" "}
                How many people will be attending the meeting?
              </FormLabel>
              <TextField
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="number"
                hintText="Number"
                onChange={(evt, newValue) =>
                  this.setState({ number: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Could you provide us with a brief description of the nature of
                data and an estimate of the amount of computing resources you
                expect to use.
              </FormLabel>
              <TextField
                multiLine={true}
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="description"
                hintText="Description"
                onChange={(evt, newValue) =>
                  this.setState({ description: newValue })
                }
              />
            </section>
            {this.renderStepActions(4)}
          </div>
        );
      case "Virtual Reality Facility":
        return (
          <div>
            <section>
              <FormLabel component="legend">
                {" "}
                How many people will be attending the meeting?
              </FormLabel>
              <TextField
                style={{ display: "block", marginBottom: 15, marginTop: 15 }}
                name="number"
                hintText="Number"
                onChange={(evt, newValue) =>
                  this.setState({ number: newValue })
                }
              />
              <FormLabel component="legend">
                {" "}
                Purpose for Visiting the VR lab
              </FormLabel>
              <RadioButtonGroup
                style={{
                  marginTop: 15,
                  marginLeft: 15
                }}
                name="vrPurpose"
                onChange={(evt, val) => this.handleSetvrPurpose(val)}
              >
                <RadioButton
                  label="VR Demonstrations"
                  value="VR Demonstrations"
                  style={{
                    marginBottom: 15
                  }}
                />
                <RadioButton
                  label="Content Creation"
                  value="Content Creation"
                  style={{
                    marginBottom: 15
                  }}
                />

                <RadioButton
                  label="Training/Workshop"
                  value="Training/Workshop"
                  style={{
                    marginBottom: 15
                  }}
                />
                <RadioButton
                  label="Other"
                  value="vrOther"
                  stvryle={{
                    marginBottom: 15
                  }}
                />
              </RadioButtonGroup>
              {this.state.vrPurpose === "vrOther" ? (
                <TextField
                  style={{ display: "block" }}
                  name="other"
                  hintText="Other"
                  floatingLabelText="Other"
                  onChange={(evt, newValue) =>
                    this.setState({ vrOther: newValue })
                  }
                />
              ) : null}

              {this.state.vrPurpose === "Training/Workshop" ? (
                <React.Fragment>
                  <FormLabel component="legend">
                    {" "}
                    Could you provide us with a brief description of the
                    software tools, nature of data and an estimate of the amount
                    of computing resources you expect to use.
                  </FormLabel>
                  <TextField
                    multiLine={true}
                    style={{
                      display: "block",
                      marginBottom: 15,
                      marginTop: 15
                    }}
                    name="description"
                    hintText="Description"
                    onChange={(evt, newValue) =>
                      this.setState({ description: newValue })
                    }
                  />
                  <FormLabel component="legend">
                    {" "}
                    Admission Type: Charge or no Charge
                    <small>
                      <br />
                      Please indicate whether or not you should be charged for
                      the service. Please note that priority may be given to
                      chargeable users.
                    </small>
                  </FormLabel>
                  <RadioButtonGroup
                    style={{
                      marginTop: 15,
                      marginLeft: 15
                    }}
                    name="charge"
                    onChange={(evt, val) => this.handleCharge(val)}
                  >
                    <RadioButton
                      label="Yes, I would like to be charged"
                      value="yes"
                      style={{
                        marginBottom: 15
                      }}
                    />
                    <RadioButton
                      label="Free Admission"
                      value="no"
                      style={{
                        marginBottom: 15
                      }}
                    />
                  </RadioButtonGroup>

                  {this.state.charge === "no" ? (
                    <React.Fragment>
                      <FormLabel component="legend">
                        {" "}
                        Free Admission
                        <small>
                          <br />
                          Condition: Kindly note that Free admissions may only
                          apply to a few users and for a limited time only as
                          priority may be given to chargeable users.
                          <br /> I agree
                        </small>
                      </FormLabel>
                      <RadioButtonGroup
                        style={{
                          marginTop: 15,
                          marginLeft: 15
                        }}
                        name="agreement"
                        onChange={(evt, val) => this.handleAgreement(val)}
                      >
                        <RadioButton
                          label="Yes, I agree"
                          value="yes"
                          style={{
                            marginBottom: 15
                          }}
                        />
                        <RadioButton
                          label="No"
                          value="no"
                          style={{
                            marginBottom: 15
                          }}
                        />
                      </RadioButtonGroup>
                    </React.Fragment>
                  ) : this.state.charge === "yes" ? (
                    <React.Fragment>
                      <FormLabel component="legend">
                        {" "}
                        Cost
                        <small>
                          <br />
                          Note: The charges contained here are negotiable, but
                          will gerally depend on how long you need the facility
                        </small>
                      </FormLabel>
                      <RadioButtonGroup
                        style={{
                          marginTop: 15,
                          marginLeft: 15
                        }}
                        name="chargeAmount"
                        onChange={(evt, val) => this.handleChargeAmount(val)}
                      >
                        <RadioButton
                          label="Per Day = $1"
                          value="Per Day = $1"
                          style={{
                            marginBottom: 15
                          }}
                        />
                        <RadioButton
                          label="Per Week = 2$"
                          value="Per Week = 2$"
                          style={{
                            marginBottom: 15
                          }}
                        />
                      </RadioButtonGroup>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              ) : null}
            </section>
            {this.renderStepActions(4)}
          </div>
        );
      default:
        return (
          <div>
            <section>
              <FormLabel component="legend">
                {" "}
                Please Choose an option from the previous section for us to know
                your needs
              </FormLabel>
            </section>
            {this.renderStepActions(4)}
          </div>
        );
        break;
    }
  }
  renderStepActions(step) {
    const { stepIndex, ...data } = this.state;

    const contactFormFilled =
      data.firstName &&
      data.lastName &&
      data.phone &&
      data.email &&
      data.validPhone &&
      data.skillset &&
      data.validEmail;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          // label={stepIndex === 5 ? "Finish" : "Next"}

          label={
            stepIndex === 5
              ? "Finish"
              : this.state.purposeValid === false && stepIndex === 3
              ? "Choose an Option"
              : stepIndex === 1 &&
                this.state.startDate === null &&
                this.state.endDate === null
              ? "Choose a date"
              : stepIndex === 0 && !contactFormFilled
              ? "Fill in Your Information"
              : "Next"
          }
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          disabled={
            stepIndex === 3
              ? !this.state.purposeValid
              : stepIndex === 1 &&
                this.state.startDate === null &&
                this.state.endDate === null
              ? true
              : stepIndex === 0 && !contactFormFilled
              ? true
              : null
          }
          onClick={this.handleNext}
          backgroundColor="#00C853 !important"
          style={{ marginRight: 12, backgroundColor: "#00C853" }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            // onClick={this.handlePrev}
            onClick={() => {
              this.handlePrev();
              this.state.vrPurpose !== ""
                ? this.setState({ vrPurpose: "" }) //Reset vrPurpose state field
                : null;
            }}
          />
        )}
      </div>
    );
  }

  render() {
    const {
      finished,
      isLoading,
      smallScreen,
      stepIndex,
      confirmationModalOpen,
      agreementModalOpen,
      confirmationSnackbarOpen,
      ...data
    } = this.state;

    const DatePickerRange = () => (
      <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="start1" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="end1" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          showDefaultInputIcon={true}
          appendToBody={true}
          showClearDates={true}
          numberOfMonths={smallScreen ? 1 : 2}
          minimumNights={0}
          small={true}
        />
      </div>
    );
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={() => this.setState({ confirmationModalOpen: false })}
      />,
      <FlatButton
        label="Confirm"
        style={{ backgroundColor: "#00C853 !important" }}
        primary={true}
        onClick={() => this.handleSubmit()}
      />
    ];

    return (
      <div>
        <AppBar
          title={
            smallScreen ? (
              <div>ACE Bioinformatics</div>
            ) : (
              <div>African Center of Excellence in Bioinformatics</div>
            )
          }
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={
            <a href="/ace-appointment-scheduler">
              <img
                alt="ACE Logo"
                src={process.env.PUBLIC_URL + "/acewhite.png"}
              />
            </a>
          }
        />
        <section
          style={{
            maxWidth: !smallScreen ? "80%" : "100%",
            margin: "auto",
            marginTop: !smallScreen ? 20 : 0
          }}
        >
          <Paper
            style={{
              margin: "auto",
              marginBottom: 20,
              padding: "25px 50px 40px 35px"
            }}
          >
            <Typography variant="h5" component="h3">
              Booking Form for ACE Bioinformatics Facilities
            </Typography>
          </Paper>
          <Card
            style={{
              padding: "12px 12px 25px 12px",
              minHeight: smallScreen ? "100vh" : null
            }}
          >
            {this.state.loading ? <LinearProgress /> : null}
            <Stepper
              activeStep={stepIndex}
              orientation="vertical"
              linear={false}
            >
              <Step>
                <StepLabel>
                  Share your contact information with us and we'll send you a
                  reminder
                </StepLabel>
                <StepContent>
                  <p>
                    <section>
                      <TextField
                        style={{ display: "block" }}
                        name="first_name"
                        hintText="First Name"
                        floatingLabelText="First Name"
                        onChange={(evt, newValue) =>
                          this.setState({ firstName: newValue })
                        }
                        value={this.state.firstName}
                      />
                      <TextField
                        style={{ display: "block" }}
                        name="last_name"
                        hintText="Last Name"
                        floatingLabelText="Last Name"
                        onChange={(evt, newValue) =>
                          this.setState({ lastName: newValue })
                        }
                        value={this.state.lastName}
                      />
                      <TextField
                        style={{ display: "block" }}
                        name="organisation"
                        hintText="Organization"
                        floatingLabelText="Organization"
                        onChange={(evt, newValue) =>
                          this.setState({ organisation: newValue })
                        }
                        value={this.state.organisation}
                      />
                      <TextField
                        style={{ display: "block" }}
                        name="email"
                        hintText="youraddress@mail.com"
                        floatingLabelText="Email"
                        errorText={
                          data.validEmail ? null : "Enter a valid email address"
                        }
                        onChange={(evt, newValue) =>
                          this.validateEmail(newValue)
                        }
                        // value={data.validEmail ? this.state.email : null}
                      />
                      <TextField
                        style={{ display: "block" }}
                        name="phone"
                        hintText="+2567995989"
                        floatingLabelText="Phone"
                        errorText={
                          data.validPhone ? null : "Enter a valid phone number"
                        }
                        onChange={(evt, newValue) =>
                          this.validatePhone(newValue)
                        }
                        // value={this.state.phone}
                      />

                      <TextField
                        style={{ display: "block" }}
                        floatingLabelText="Your Speciality"
                        name="skillset"
                        hintText="Your Specilaity"
                        onChange={(evt, newValue) =>
                          this.setState({ skillset: newValue })
                        }
                        value={this.state.skillset}
                      />
                    </section>
                  </p>
                  {this.renderStepActions(0)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>
                  Choose an available day for your appointment
                </StepLabel>

                <StepContent>
                  {DatePickerRange()}
                  {this.renderStepActions(1)}
                </StepContent>
              </Step>

              <Step>
                <StepLabel>
                  Choose an available time for your appointment
                </StepLabel>
                <StepContent>
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <TimePicker
                      label="Start Time"
                      value={this.state.startTime}
                      onChange={date => this.handleStartTime(date)}
                    />

                    <TimePicker
                      label="End Time"
                      value={this.state.endTime}
                      onChange={date => this.handleEndTime(date)}
                    />
                  </MuiPickersUtilsProvider>

                  {this.renderStepActions(2)}
                </StepContent>
              </Step>

              <Step>
                <StepLabel>Fill out your areas of interest</StepLabel>

                <StepContent>
                  <section>
                    <FormLabel component="legend"> Booking Purpose</FormLabel>

                    <RadioButtonGroup
                      style={{
                        marginTop: 15,
                        marginLeft: 10
                      }}
                      name="purpose"
                      onChange={(evt, val) => this.handleSetPurpose(val)}
                    >
                      <RadioButton
                        label="TeleLearning Facility/ Training/ Workshop"
                        value="TeleLearning Facility/ Training/ Workshop"
                        style={{
                          marginBottom: 15
                        }}
                      />
                      <RadioButton
                        label="Virtual Reality Facility"
                        value="Virtual Reality Facility"
                        style={{
                          marginBottom: 15
                        }}
                      />
                      <RadioButton
                        label="Individual Research/Compute Core"
                        value="Individual Research/Compute Core"
                        style={{
                          marginBottom: 15
                        }}
                      />
                      <RadioButton
                        label="ACE Tour"
                        value="ACE Tour"
                        style={{
                          marginBottom: 15
                        }}
                      />

                      <RadioButton
                        label="Other"
                        value="Other"
                        style={{
                          marginBottom: 15
                        }}
                      />
                    </RadioButtonGroup>
                    {this.state.purpose === "Other" ? (
                      <TextField
                        style={{ display: "block" }}
                        name="other"
                        hintText="Please Specify"
                        floatingLabelText="Please Specify"
                        onChange={(evt, newValue) =>
                          this.setState({ other: newValue })
                        }
                      />
                    ) : null}
                  </section>{" "}
                  {this.renderStepActions(3)}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Additional Information</StepLabel>

                <StepContent>
                  {this.renderAdditionalInformation()}
                  {/*                   
                  {this.state.purpose === "Virtual Reality Facility"
                    ? this.renderStepActions(5)
                    : this.renderInformation()} */}
                </StepContent>
              </Step>
              <Step>
                <StepLabel>Make your Schedule</StepLabel>

                <StepContent>
                  <section>
                    By clicking submit you are agreeing to the{" "}
                    <Link
                      style={{
                        cursor: "pointer"
                      }}
                      onClick={() =>
                        this.setState({
                          agreementModalOpen: !this.state.agreementModalOpen
                        })
                      }
                      color="secondary"
                      variant="inherit"
                    >
                      Terms and Conditions
                    </Link>
                    <RaisedButton
                      style={{ display: "block", backgroundColor: "#00C853" }}
                      label={"Schedule"}
                      labelPosition="before"
                      primary={true}
                      fullWidth={true}
                      onClick={() =>
                        this.setState({
                          confirmationModalOpen: !this.state
                            .confirmationModalOpen
                        })
                      }
                      disabled={data.processed}
                      style={{ marginTop: 20, maxWidth: 100 }}
                    />
                  </section>{" "}
                  {this.renderStepActions(5)}
                </StepContent>
              </Step>
            </Stepper>
          </Card>
          <Dialog2
            modal={true}
            open={confirmationModalOpen}
            actions={modalActions}
            title="Confirm your appointment"
          >
            {this.renderAppointmentConfirmation()}
          </Dialog2>

          <Dialog
            open={agreementModalOpen}
            onClose={() => this.setState({ agreementModalOpen: false })}
          >
            <DialogTitle>Terms and Agreement</DialogTitle>
            <DialogContent dividers={true}>
              <DialogContentText>{this.renderAgreement()}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => this.setState({ agreementModalOpen: false })}
                color="secondary"
                variant="contained"
              >
                Disagree
              </Button>
              <Button
                onClick={() => this.setState({ agreementModalOpen: false })}
                color="primary"
                variant="contained"
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
          <SnackBar
            open={confirmationSnackbarOpen || isLoading}
            message={
              isLoading ? "Loading... " : data.confirmationSnackbarMessage || ""
            }
            autoHideDuration={10000}
            onRequestClose={() =>
              this.setState({ confirmationSnackbarOpen: false })
            }
          />
        </section>
      </div>
    );
  }
}
export default AppointmentApp;
