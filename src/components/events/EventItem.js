import React from "react";
import { Text, View } from "react-native";
import { appStyles, stylesEvent } from "../../styles/styles";

import {
  fDate,
  fDateFull,
  fDateOnly,
  fMonthOnly,
  fTimeShort,
} from "../utils/DateTimeFormat";

export const EventItem = ({ event }) => {
  // Format date to number
  const startDate = fDateOnly(event.start);
  const endDate = fDateOnly(event.end);
  const startMonth = fMonthOnly(event.start);
  const endMonth = fMonthOnly(event.end);
  const today = new Date();

  return (
    <View style={[styles.eventCard]}>
      <Text>{event.title}</Text>
      <Text>{event.description}</Text>
      <Text>{event.activity_type}</Text>
      <Text>{event.points}</Text>
      <Text>{event.company}</Text>
      <Text>{event.attire}</Text>
      <Text>
        {/* If event duration is more than 1 day, show start - end.
                  Otherwise, show start*/}
        {endDate - startDate > 0 || endMonth - startMonth > 0
          ? `${fDate(event.start)} - ${fDate(event.end)}`
          : fDateFull(event.start)}
      </Text>
      <Text>
        {fTimeShort(event.start)} - {fTimeShort(event.end)}
      </Text>
      {/* Show TODAY flag for today's events */}
      {(fDate(event.start) === fDate(today) ||
        fDate(event.end) === fDate(today)) && (
        <Text
          id="today"
          bgcolor={"#EB6534"}
          textTransform="uppercase"
          variant="subtitle2"
        >
          Today
        </Text>
      )}
      <Text>{event.location}</Text>
    </View>
  );
};

const styles = { ...appStyles, ...stylesEvent };
