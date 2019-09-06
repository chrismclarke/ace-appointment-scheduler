(window["webpackJsonpace-appointment-scheduler"]=window["webpackJsonpace-appointment-scheduler"]||[]).push([[0],{297:function(e,t,a){e.exports=a(577)},577:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),r=a.n(l),i=a(43),s=a(30),m=a(49),c=a(50),u=a(53),d=a(26),h=a(3),p=a(274),g=a.n(p),y=a(168),f=a.n(y),E=a(97),b=a.n(E),v=a(16),C=a.n(v),S=(a(374),a(165)),T=a.n(S),k=a(613),B=a(612),w=a(619),A=a(610),R=a(615),x=a(611),P=a(614),D=(a(406),a(421),a(23)),O=a.n(D),L=a(275),I=a.n(L),N=a(276),F=a.n(N),M=a(277),Y=a.n(M),H=a(607),W=a(280),$=a(616),j=a(278),G=(a(436),a(461),a(279)),V=a(25),q=a(17),K=(a(528),function(e){function t(e,a){var n;return Object(i.a)(this,t),(n=Object(m.a)(this,Object(c.a)(t).call(this,e,a))).handleNext=function(){var e=n.state.stepIndex;n.setState({stepIndex:e+1,finished:e>=5})},n.handlePrev=function(){var e=n.state.stepIndex;e>0&&(n.setState({stepIndex:e-1}),4===e&&n.setState({purpose:"",purposeValid:n.validatePurpose("")}))},n.state={firstName:"",lastName:"",organisation:"",email:"",startDate:null,endDate:null,agreementModalOpen:!1,confirmationModalOpen:!1,appointmentDateSelected:!1,validEmail:!0,validPhone:!0,finished:!1,smallScreen:window.innerWidth<768,stepIndex:0,startTime:new Date(2019,12,16,8,0),endTime:new Date(2019,12,16,17,0),loading:!1,purpose:"",skillset:"",analysis:"",number:"",description:"",recommendation:"",vrPurpose:"",vrOther:"",other:"",charge:"",agreement:"",chargeAmount:"",purposeValid:!1},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSetPurpose",value:function(e){this.setState({purpose:e,purposeValid:this.validatePurpose(e)})}},{key:"handleAgreement",value:function(e){this.setState({agreement:e})}},{key:"handleChargeAmount",value:function(e){this.setState({chargeAmount:e})}},{key:"handleCharge",value:function(e){this.setState({charge:e}),"no"===e&&this.setState({chargeAmount:""})}},{key:"handleSetvrPurpose",value:function(e){this.setState({vrPurpose:e})}},{key:"handleStartTime",value:function(e){this.setState({startTime:e})}},{key:"handleEndTime",value:function(e){this.setState({endTime:e})}},{key:"handleSubmit",value:function(){var e=this;this.setState({confirmationModalOpen:!1,loading:!0});var t=C()(this.state.startTime).format("HH:mm:ss a"),a=C()(this.state.endTime).format("HH:mm:ss a"),n=C()(t,"HH:mm:ss a"),o=C()(a,"HH:mm:ss a"),l=C.a.duration(o.diff(n));parseInt(l.asHours()),this.state.firstName,this.state.lastName,this.state.email,this.state.phone,this.state.organisation,"Other"===this.state.purpose?this.state.other:this.state.purpose,this.state.skillset,this.state.analysis,this.state.number,this.state.description,this.state.description,"vrOther"===this.state.vrPurpose?this.state.vrOther:this.state.vrPurpose,C()(this.state.startDate).format("YYYY-DD-MM"),C()(this.state.endDate).format("YYYY-DD-MM"),this.state.endDate.diff(this.state.startDate,"days");setTimeout(function(){e.setState({confirmationSnackbarMessage:"Appointment succesfully added!",confirmationSnackbarOpen:!0,processed:!0,loading:!1})},3500)}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e)?this.setState({email:e,validEmail:!0}):this.setState({validEmail:!1})}},{key:"validatePhone",value:function(e){return/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e)?this.setState({phone:e,validPhone:!0}):this.setState({validPhone:!1})}},{key:"validatePurpose",value:function(e){var t=!1;return""!==e&&(t=!0),t}},{key:"renderAgreement",value:function(){return o.a.createElement("section",null,o.a.createElement("p",null,"Request to use equipment, computers or facilities shall be made at least 3 working days prior through IDI ACE Bioinformatics authorities.")," ",o.a.createElement("p",null,"No person shall without authority access or attempt to gain access to any computer and or facility."),o.a.createElement("p",null,"The granted access will only be for a limited time only as requested for by the user, but can be extended or reduced depending on the availability of the facility all at the discretion of the Facilities manager."),o.a.createElement("p",null,"Access shall only be to very specific information and will not include access to information that the user does not require access to."),o.a.createElement("p",null,"The ACE designee must be present and onsite when the facility or equipment are being used."),o.a.createElement("p",null,"IDI/designee will assume the responsibility of supervising the user to ensure compliance and protecting the facilities."),o.a.createElement("p",null,"Facility use and or use of computers shall be on first come first serve basis, but manager/in-charge may give priority"),o.a.createElement("p",null,"While using the facility, cell phones and other gadgets should be set silent or turned off to avoid disruptions and any applications with audio output should be used with headphones."),o.a.createElement("p",null,"Conversations and discussions should also be kept silent to avoid disrupting other users"),o.a.createElement("p",null,"Users of the computer clusters should avoid saving their work on the computers as these would be deleted. Files must be saved on personal hard drives on USB/Flash drive after a day\u2019s work to avoid loss."),o.a.createElement("p",null,"Personal, sensitive and confidential data types shall not be stored on external hosted service such as Dropbox or Google docs."),o.a.createElement("p",null,"Request and approval must be sought from the ACE bioinformatics head/manager and head of department to use the data."),o.a.createElement("p",null,"Only the ACE bioinformatics IT systems manager will be permitted to store, make manipulations and backup data. Outside users are discouraged from attempting to make any changes to data and any such changes whether intentional or accidental must be reported."),o.a.createElement("p",null,"Accessing pornography or profane content and using the facility to disseminate offensive, threatening or abusive messages is strictly prohibited in this facility. Individuals who violate this prohibition will be subject to disciplinary action that may result into loss of access or ban."),o.a.createElement("p",null,"Non facility staff and students are prohibited from changing any computer hardware or software. This violation may lead to loss of facility privileges."),o.a.createElement("p",null,"No external user shall remove, interfere or tamper with any components of the facility or computer or use any computer system in ways that interfere with its use"),o.a.createElement("p",null,"Damage to computers or facilities will lead to fines and may in some cases result into loss or denial of facility access privileges"),o.a.createElement("p",null,"A record shall be maintained to indicate arrival and departure of visitors or persons utilising the facility"),o.a.createElement("p",null,"No food or drinks shall be consumed in the computer rooms. Any accidental spills on equipment and computers must be reported after which an assessment shall be done to determine damage."))}},{key:"renderAppointmentConfirmation",value:function(){var e={color:"#00C853"};return o.a.createElement("section",null,o.a.createElement("p",null,"Name:"," ",o.a.createElement("span",{style:e},this.state.firstName," ",this.state.lastName)),o.a.createElement("p",null,"Number: ",o.a.createElement("span",{style:e},this.state.phone)),o.a.createElement("p",null,"Email: ",o.a.createElement("span",{style:e},this.state.email)),o.a.createElement("p",null,"Appointment Date: From"," ",o.a.createElement("span",{style:e},C()(this.state.startDate).format("dddd[,] MMMM Do[,] YYYY"))," ","to"," ",o.a.createElement("span",{style:e},C()(this.state.endDate).format("dddd[,] MMMM Do[,] YYYY"))," "),o.a.createElement("p",null,"Appointment Time: From"," ",o.a.createElement("span",{style:e},C()(this.state.startTime).format("HH:mm"))," ","to"," ",o.a.createElement("span",{style:e},C()(this.state.endTime).format("HH:mm"))))}},{key:"renderAdditionalInformation",value:function(){var e=this;switch(this.state.purpose){case"Individual Research/Compute Core":return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," ","How many people will be attending the meeting?"),o.a.createElement(O.a,{style:{display:"block",marginBottom:15,marginTop:15},name:"number",hintText:"Number",onChange:function(t,a){return e.setState({number:a})}}),o.a.createElement(H.a,{component:"legend"}," ","What type of Analysis do you expect to do?"),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"analysis",hintText:"Analysis",onChange:function(t,a){return e.setState({analysis:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Could you provide us with a brief description of the software tools, nature of data and an estimate of the amount of computing resources you expect to use."),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"description",hintText:"Description",onChange:function(t,a){return e.setState({description:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Please share with us any additional information/Suggestions that may be helpful to us scheduling and prepairing for your visit."),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"recommendation",hintText:"Recommendation",onChange:function(t,a){return e.setState({recommendation:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Admission Type: Charge or no Charge",o.a.createElement("small",null,o.a.createElement("br",null),"Please indicate whether or not you should be charged for the service. Please note that priority may be given to chargeable users.")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"charge",onChange:function(t,a){return e.handleCharge(a)}},o.a.createElement(q.RadioButton,{label:"Yes, I would like to be charged",value:"yes",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Free Admission",value:"no",style:{marginBottom:15}})),"no"===this.state.charge?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Free Admission",o.a.createElement("small",null,o.a.createElement("br",null),"Condition: Kindly note that Free admissions may only apply to a few users and for a limited time only as priority may be given to chargeable users.",o.a.createElement("br",null)," I agree")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"agreement",onChange:function(t,a){return e.handleAgreement(a)}},o.a.createElement(q.RadioButton,{label:"Yes, I agree",value:"yes",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"No",value:"no",style:{marginBottom:15}}))):"yes"===this.state.charge?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Cost",o.a.createElement("small",null,o.a.createElement("br",null),"Note: The charges contained here are negotiable, but will gerally depend on how long you need the facility")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"chargeAmount",onChange:function(t,a){return e.handleChargeAmount(a)}},o.a.createElement(q.RadioButton,{label:"Per Day = $1",value:"Per Day = $1",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Per Week = 2$",value:"Per Week = 2$",style:{marginBottom:15}}))):null)," ",this.renderStepActions(4));case"ACE Tour":return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," ","How many people will be attending the meeting?"),o.a.createElement(O.a,{style:{display:"block",marginBottom:15,marginTop:15},name:"number",hintText:"Number",onChange:function(t,a){return e.setState({number:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Please share with us any additional information/Suggestions that may be helpful to us scheduling and prepairing for your visit."),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"recommendation",hintText:"Recommendation",onChange:function(t,a){return e.setState({recommendation:a})}})),this.renderStepActions(4));case"TeleLearning Facility/ Training/ Workshop":return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," ","How many people will be attending the meeting?"),o.a.createElement(O.a,{style:{display:"block",marginBottom:15,marginTop:15},name:"number",hintText:"Number",onChange:function(t,a){return e.setState({number:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Please share with us any additional information/Suggestions that may be helpful to us scheduling and prepairing for your visit."),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"recommendation",hintText:"Recommendation",onChange:function(t,a){return e.setState({recommendation:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Admission Type: Charge or no Charge",o.a.createElement("small",null,o.a.createElement("br",null),"Please indicate whether or not you should be charged for the service. Please note that priority may be given to chargeable users.")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"charge",onChange:function(t,a){return e.handleCharge(a)}},o.a.createElement(q.RadioButton,{label:"Yes, I would like to be charged",value:"yes",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Free Admission",value:"no",style:{marginBottom:15}})),"no"===this.state.charge?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Free Admission",o.a.createElement("small",null,o.a.createElement("br",null),"Condition: Kindly note that Free admissions may only apply to a few users and for a limited time only as priority may be given to chargeable users.",o.a.createElement("br",null)," I agree")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"agreement",onChange:function(t,a){return e.handleAgreement(a)}},o.a.createElement(q.RadioButton,{label:"Yes, I agree",value:"yes",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"No",value:"no",style:{marginBottom:15}}))):"yes"===this.state.charge?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Cost",o.a.createElement("small",null,o.a.createElement("br",null),"Note: The charges contained here are negotiable, but will gerally depend on how long you need the facility")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"chargeAmount",onChange:function(t,a){return e.handleChargeAmount(a)}},o.a.createElement(q.RadioButton,{label:"Per Day = $1",value:"Per Day = $1",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Per Week = 2$",value:"Per Week = 2$",style:{marginBottom:15}}))):null),this.renderStepActions(4));case"Other":return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," ","How many people will be attending the meeting?"),o.a.createElement(O.a,{style:{display:"block",marginBottom:15,marginTop:15},name:"number",hintText:"Number",onChange:function(t,a){return e.setState({number:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Could you provide us with a brief description of the nature of data and an estimate of the amount of computing resources you expect to use."),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"description",hintText:"Description",onChange:function(t,a){return e.setState({description:a})}})),this.renderStepActions(4));case"Virtual Reality Facility":return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," ","How many people will be attending the meeting?"),o.a.createElement(O.a,{style:{display:"block",marginBottom:15,marginTop:15},name:"number",hintText:"Number",onChange:function(t,a){return e.setState({number:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Purpose for Visiting the VR lab"),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"vrPurpose",onChange:function(t,a){return e.handleSetvrPurpose(a)}},o.a.createElement(q.RadioButton,{label:"VR Demonstrations",value:"VR Demonstrations",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Content Creation",value:"Content Creation",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Training/Workshop",value:"Training/Workshop",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Other",value:"vrOther",stvryle:{marginBottom:15}})),"vrOther"===this.state.vrPurpose?o.a.createElement(O.a,{style:{display:"block"},name:"other",hintText:"Other",floatingLabelText:"Other",onChange:function(t,a){return e.setState({vrOther:a})}}):null,"Training/Workshop"===this.state.vrPurpose?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Could you provide us with a brief description of the software tools, nature of data and an estimate of the amount of computing resources you expect to use."),o.a.createElement(O.a,{multiLine:!0,style:{display:"block",marginBottom:15,marginTop:15},name:"description",hintText:"Description",onChange:function(t,a){return e.setState({description:a})}}),o.a.createElement(H.a,{component:"legend"}," ","Admission Type: Charge or no Charge",o.a.createElement("small",null,o.a.createElement("br",null),"Please indicate whether or not you should be charged for the service. Please note that priority may be given to chargeable users.")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"charge",onChange:function(t,a){return e.handleCharge(a)}},o.a.createElement(q.RadioButton,{label:"Yes, I would like to be charged",value:"yes",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Free Admission",value:"no",style:{marginBottom:15}})),"no"===this.state.charge?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Free Admission",o.a.createElement("small",null,o.a.createElement("br",null),"Condition: Kindly note that Free admissions may only apply to a few users and for a limited time only as priority may be given to chargeable users.",o.a.createElement("br",null)," I agree")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"agreement",onChange:function(t,a){return e.handleAgreement(a)}},o.a.createElement(q.RadioButton,{label:"Yes, I agree",value:"yes",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"No",value:"no",style:{marginBottom:15}}))):"yes"===this.state.charge?o.a.createElement(o.a.Fragment,null,o.a.createElement(H.a,{component:"legend"}," ","Cost",o.a.createElement("small",null,o.a.createElement("br",null),"Note: The charges contained here are negotiable, but will gerally depend on how long you need the facility")),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:15},name:"chargeAmount",onChange:function(t,a){return e.handleChargeAmount(a)}},o.a.createElement(q.RadioButton,{label:"Per Day = $1",value:"Per Day = $1",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Per Week = 2$",value:"Per Week = 2$",style:{marginBottom:15}}))):null):null),this.renderStepActions(4));default:return o.a.createElement("div",null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," ","Please Choose an option from the previous section for us to know your needs")),this.renderStepActions(4))}}},{key:"renderStepActions",value:function(e){var t=this,a=this.state.stepIndex;return o.a.createElement("div",{style:{margin:"12px 0"}},o.a.createElement(f.a,{label:5===a?"Finish":!1===this.state.purposeValid&&3===a?"Choose an Option":1===a&&null===this.state.startDate&&null===this.state.endDate?"Choose a date":"Next",disableTouchRipple:!0,disableFocusRipple:!0,primary:!0,disabled:3===a?!this.state.purposeValid:1===a&&null===this.state.startDate&&null===this.state.endDate||null,onClick:this.handleNext,backgroundColor:"#00C853 !important",style:{marginRight:12,backgroundColor:"#00C853"}}),e>0&&o.a.createElement(b.a,{label:"Back",disabled:0===a,disableTouchRipple:!0,disableFocusRipple:!0,onClick:function(){t.handlePrev(),""!==t.state.vrPurpose&&t.setState({vrPurpose:""})}}))}},{key:"render",value:function(){var e=this,t=this.state,a=(t.finished,t.isLoading),n=t.smallScreen,l=t.stepIndex,r=t.confirmationModalOpen,i=t.agreementModalOpen,s=t.confirmationSnackbarOpen,m=Object(h.a)(t,["finished","isLoading","smallScreen","stepIndex","confirmationModalOpen","agreementModalOpen","confirmationSnackbarOpen"]),c=m.firstName&&m.lastName&&m.phone&&m.email&&m.validPhone&&m.skillset&&m.validEmail,u=[o.a.createElement(b.a,{label:"Cancel",primary:!1,onClick:function(){return e.setState({confirmationModalOpen:!1})}}),o.a.createElement(b.a,{label:"Confirm",style:{backgroundColor:"#00C853 !important"},primary:!0,onClick:function(){return e.handleSubmit()}})];return o.a.createElement("div",null,o.a.createElement(g.a,{title:"African Center of Excellence in Bioinformatics",iconClassNameRight:"muidocs-icon-navigation-expand-more"}),o.a.createElement("section",{style:{maxWidth:n?"100%":"80%",margin:"auto",marginTop:n?0:20}},o.a.createElement(F.a,{style:{padding:"12px 12px 25px 12px",minHeight:n?"100vh":null}},this.state.loading?o.a.createElement(Y.a,null):null,o.a.createElement(V.Stepper,{activeStep:l,orientation:"vertical",linear:!1},o.a.createElement(V.Step,null,o.a.createElement(V.StepLabel,null,"Share your contact information with us and we'll send you a reminder"),o.a.createElement(V.StepContent,null,o.a.createElement("p",null,o.a.createElement("section",null,o.a.createElement(O.a,{style:{display:"block"},name:"first_name",hintText:"First Name",floatingLabelText:"First Name",onChange:function(t,a){return e.setState({firstName:a})},value:this.state.firstName}),o.a.createElement(O.a,{style:{display:"block"},name:"last_name",hintText:"Last Name",floatingLabelText:"Last Name",onChange:function(t,a){return e.setState({lastName:a})},value:this.state.lastName}),o.a.createElement(O.a,{style:{display:"block"},name:"organisation",hintText:"Organization",floatingLabelText:"Organization",onChange:function(t,a){return e.setState({organisation:a})},value:this.state.organisation}),o.a.createElement(O.a,{style:{display:"block"},name:"email",hintText:"youraddress@mail.com",floatingLabelText:"Email",errorText:m.validEmail?null:"Enter a valid email address",onChange:function(t,a){return e.validateEmail(a)}}),o.a.createElement(O.a,{style:{display:"block"},name:"phone",hintText:"+2567995989",floatingLabelText:"Phone",errorText:m.validPhone?null:"Enter a valid phone number",onChange:function(t,a){return e.validatePhone(a)}}),o.a.createElement(O.a,{style:{display:"block"},floatingLabelText:"Your Speciality",name:"skillset",hintText:"Your Specilaity",onChange:function(t,a){return e.setState({skillset:a})},value:this.state.skillset}))),this.renderStepActions(0))),o.a.createElement(V.Step,null,o.a.createElement(V.StepLabel,null,"Choose an available day for your appointment"),o.a.createElement(V.StepContent,null,o.a.createElement("div",null,o.a.createElement(G.DateRangePicker,{startDate:e.state.startDate,startDateId:"start1",endDate:e.state.endDate,endDateId:"end1",onDatesChange:function(t){var a=t.startDate,n=t.endDate;return e.setState({startDate:a,endDate:n})},focusedInput:e.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},showDefaultInputIcon:!0,appendToBody:!0,showClearDates:!0,numberOfMonths:n?1:2,minimumNights:0,small:!0})),this.renderStepActions(1))),o.a.createElement(V.Step,null,o.a.createElement(V.StepLabel,null,"Choose an available time for your appointment"),o.a.createElement(V.StepContent,null,o.a.createElement(W.b,{utils:j.a},o.a.createElement($.a,{label:"Start Time",value:this.state.startTime,onChange:function(t){return e.handleStartTime(t)}}),o.a.createElement($.a,{label:"End Time",value:this.state.endTime,onChange:function(t){return e.handleEndTime(t)}})),this.renderStepActions(2))),o.a.createElement(V.Step,null,o.a.createElement(V.StepLabel,null,"Fill out your areas of interest"),o.a.createElement(V.StepContent,null,o.a.createElement("section",null,o.a.createElement(H.a,{component:"legend"}," Booking Purpose"),o.a.createElement(q.RadioButtonGroup,{style:{marginTop:15,marginLeft:10},name:"purpose",onChange:function(t,a){return e.handleSetPurpose(a)}},o.a.createElement(q.RadioButton,{label:"TeleLearning Facility/ Training/ Workshop",value:"TeleLearning Facility/ Training/ Workshop",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Virtual Reality Facility",value:"Virtual Reality Facility",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Individual Research/Compute Core",value:"Individual Research/Compute Core",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"ACE Tour",value:"ACE Tour",style:{marginBottom:15}}),o.a.createElement(q.RadioButton,{label:"Other",value:"Other",style:{marginBottom:15}})),"Other"===this.state.purpose?o.a.createElement(O.a,{style:{display:"block"},name:"other",hintText:"Please Specify",floatingLabelText:"Please Specify",onChange:function(t,a){return e.setState({other:a})}}):null)," ",this.renderStepActions(3))),o.a.createElement(V.Step,null,o.a.createElement(V.StepLabel,null,"Additional Information"),o.a.createElement(V.StepContent,null,this.renderAdditionalInformation())),o.a.createElement(V.Step,null,o.a.createElement(V.StepLabel,null,"Make your Schedule"),o.a.createElement(V.StepContent,null,o.a.createElement("section",null,"By clicking submit you are agreeing to the"," ",o.a.createElement(k.a,{style:{cursor:"pointer"},onClick:function(){return e.setState({agreementModalOpen:!e.state.agreementModalOpen})},color:"secondary",variant:"inherit"},"Terms and Conditions"),o.a.createElement(f.a,Object(d.a)({style:{display:"block",backgroundColor:"#00C853"},label:c?"Schedule":"Fill out your contact information in section 1 to schedule",labelPosition:"before",primary:!0,fullWidth:!0,onClick:function(){return e.setState({confirmationModalOpen:!e.state.confirmationModalOpen})},disabled:!c||m.processed},"style",{marginTop:20,maxWidth:100})))," ",this.renderStepActions(5))))),o.a.createElement(T.a,{modal:!0,open:r,actions:u,title:"Confirm your appointment"},this.renderAppointmentConfirmation()),o.a.createElement(w.a,{open:i,onClose:function(){return e.setState({agreementModalOpen:!1})}},o.a.createElement(P.a,null,"Terms and Agreement"),o.a.createElement(A.a,{dividers:!0},o.a.createElement(R.a,null,this.renderAgreement())),o.a.createElement(x.a,null,o.a.createElement(B.a,{onClick:function(){return e.setState({agreementModalOpen:!1})},color:"secondary",variant:"contained"},"Disagree"),o.a.createElement(B.a,{onClick:function(){return e.setState({agreementModalOpen:!1})},color:"primary",variant:"contained",autoFocus:!0},"Agree"))),o.a.createElement(I.a,{open:s||a,message:a?"Loading... ":m.confirmationSnackbarMessage||"",autoHideDuration:1e4,onRequestClose:function(){return e.setState({confirmationSnackbarOpen:!1})}})))}}]),t}(n.Component)),z=a(167),J=a.n(z),U=a(283),_=Object(U.getMuiTheme)({palette:{primary1Color:"#d32f2f",primary2Color:"#f44336"}}),Q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(J.a,{muiTheme:_},o.a.createElement(K,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(576);r.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[297,1,2]]]);
//# sourceMappingURL=main.f5128424.chunk.js.map