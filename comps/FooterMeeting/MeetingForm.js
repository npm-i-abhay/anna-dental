import React, { useState } from "react";
import styled from "styled-components";

// component imports
import { Container } from "../common/Container";

export const MeetingForm = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "05:00 PM"];

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
    <Container>
      <RequestContainer>
        <Request
          onChange={(e) => handleMeeting(e)}
          type={"checkbox"}
          name="request"
        />
        <Label>Request a Meeting</Label>
      </RequestContainer>

      <FlexRow display={meetingDisplay}>
        {days.map((day, i) => (
          <DayTimeCont onClick={() => handleDays(day)} key={i}>
            <Request
              onChange={() => {}}
              checked={selectedDays.includes(day) ? true : false}
              value={day}
              type={"checkbox"}
              name={day}
            />
            <Label>{day}</Label>
          </DayTimeCont>
        ))}
      </FlexRow>

      <FlexRow display={meetingDisplay}>
        {times.map((time, i) => (
          <DayTimeCont onClick={() => handleTimes(time)} key={i}>
            <Request
              onChange={() => {}}
              checked={selectedTimes.includes(time) ? true : false}
              value={time}
              type={"checkbox"}
              name={time}
            />
            <Label>{time}</Label>
          </DayTimeCont>
        ))}
      </FlexRow>
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
  @media only screen and (max-width: 450px) {
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

const RequestedTimes = styled.input`
  // height: 20px;
`;
