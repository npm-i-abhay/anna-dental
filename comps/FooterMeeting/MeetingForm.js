import React, { useState } from "react";
import styled from "styled-components";

// component imports
import { Container } from "../common/Container";

export const MeetingForm = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = [
    "10:00 - 10:30 AM",
    "12:00 - 12:30 PM",
    "02:00 - 02:30 PM",
    "04:00 - 04:30 PM",
    "05:00 - 05:30 PM",
  ];

  const [selected, setSelected] = useState({
    daysArray: [],
    timesArray: [],
  });

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
    console.log(selected);
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
  return (
    <Container>
      <RequestContainer>
        <Request type={"checkbox"} name="request" />
        <Label>Request a Meeting</Label>
      </RequestContainer>

      <FlexRow>
        {days.map((day, i) => (
          <DayTimeCont onClick={() => handleDays(day)} key={i}>
            <Request
              checked={selectedDays.includes(day) ? true : false}
              value={day}
              type={"checkbox"}
              name={day}
            />
            <Label>{day}</Label>
          </DayTimeCont>
        ))}
      </FlexRow>

      <FlexRow>
        {times.map((time, i) => (
          <DayTimeCont onClick={() => handleTimes(time)} key={i}>
            <Request
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
`;
const Label = styled.label`
  font-size: 16px;
`;

const RequestContainer = styled.div`
  display: flex;
  align-items: center;
`;
const DayTimeCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: red;
`;
const RequestedDay = styled.input`
  // height: 20px;
`;

const RequestedTimes = styled.input`
  // height: 20px;
`;
