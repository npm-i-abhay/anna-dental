import React, { useState } from "react";
import styled from "styled-components";

// component imports
import { Container } from "../common/Container";

export const MeetingForm = () => {
  const days = [
    { day: "Monday", name: "day1" },
    { day: "Tuesday", name: "day2" },
    { day: "Wednesday", name: "day3" },
    { day: "Thursday", name: "day4" },
    { day: "Friday", name: "day5" },
  ];
  const times = [
    { time: "10:00 AM", name: "time1" },
    { time: "12:00 PM", name: "time2" },
    { time: "02:00 PM", name: "time3" },
    { time: "04:00 PM", name: "time4" },
    { time: "05:00 PM", name: "time5" },
  ];

  const [selected, setSelected] = useState({
    daysArray: [],
    timesArray: [],
  });
  const [meetingDisplay, setMeetingDisplay] = useState("none");

  const selectedDays = selected.daysArray;
  const selectedTimes = selected.timesArray;

  const handleDays = (day) => {
    const addDay = selectedDays.length < 3 && !selectedDays.includes(day);
    const removeDay = selectedDays.includes(day);

    if (addDay) {
      setSelected({ ...selected, daysArray: [...selectedDays, day] });
    }
    if (removeDay) {
      // if the daysArray already includes the day that the user has clicked on
      // set the daysArray to everything but what the user clicked on
      setSelected({
        ...selected,
        daysArray: selectedDays.filter((days) => day != days),
      });
    }
  };

  const handleTimes = (time) => {
    const addTime = selectedTimes.length < 3 && !selectedTimes.includes(time);
    const removeTime = selectedTimes.includes(time);
    if (addTime) {
      setSelected({ ...selected, timesArray: [...selectedTimes, time] });
    }
    // if the timesArray already includes the time that the user has clicked on
    // set the timesArray to everything but what the user clicked on
    if (removeTime) {
      setSelected({
        ...selected,
        timesArray: selectedTimes.filter((times) => time != times),
      });
    }
  };

  const handleMeeting = (e) => {
    if (e.target.checked) setMeetingDisplay("flex");
    else setMeetingDisplay("none");
  };

  return (
    <Container width="80%" mobWidth={"100%"}>
      <RequestContainer>
        <Request
          onChange={(e) => handleMeeting(e)}
          type={"checkbox"}
          name="request"
        />
        <Label>Request a Meeting</Label>
      </RequestContainer>
      {/* <StyledForm ref={form} onSubmit={sendEmail}> */}
      <FlexRow display={meetingDisplay}>
        {days.map((day, i) => (
          <DayTimeCont onClick={() => handleDays(day.day)} key={i}>
            <Request
              onChange={() => {}}
              checked={selectedDays.includes(day.day) ? true : false}
              value={day.day}
              type={"checkbox"}
              name={day.name}
            />
            <Label>{day.day}</Label>
          </DayTimeCont>
        ))}
      </FlexRow>

      <FlexRow display={meetingDisplay}>
        {times.map((time, i) => (
          <DayTimeCont onClick={() => handleTimes(time.time)} key={i}>
            <Request
              onChange={() => {}}
              checked={selectedTimes.includes(time.time) ? true : false}
              value={time.time}
              type={"checkbox"}
              name={time.name}
            />
            <Label>{time.time}</Label>
          </DayTimeCont>
        ))}
      </FlexRow>
      {/* <input type="submit" value="Send" /> */}
      {/* </StyledForm> */}
    </Container>
  );
};

const Request = styled.input`
  // height: 20px;
  accent-color: ${({ theme }) => theme.accent};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const Label = styled.label`
  font-size: 13px;
`;

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const DayTimeCont = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 600px) {
    width: 20%;
  }
`;
const FlexRow = styled.div`
  width: 100%;
  display: ${({ display }) => display};
  justify-content: space-between;
  padding: 1em 0 1em 0;
`;
const RequestedDay = styled.input`
  // height: 20px;
`;
const StyledForm = styled.form`
  width: 80%;
`;
const RequestedTimes = styled.input`
  // height: 20px;
`;
