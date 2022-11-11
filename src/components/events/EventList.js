import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getAllEventsOrderByTime } from "../../APIs/event_functions";
import { useAuth } from "../auth/AuthContext";
import { useMessage } from "../auth/MessageContext";
import { EventItem } from "./EventItem";

import { appStyles, stylesEvent } from "../../styles/styles";


const EventList = () => {
  const [eventList, setEventList] = useState([]);
  const [filterTime, setFilterTime] = useState("all");
  const { showMessage, setMessage, displayMessage } = useMessage();
  const { setLoading } = useAuth();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await getAllEventsOrderByTime(); // oldest to newest
      if (res.data) {
        setEventList(res.data);
      } else {
        setMessage("Could not load events.", "error");
        showMessage(true);
      }
      setLoading(false);
    }
    fetchData();
  }, [filterTime]);

  return (
    <View>
      {eventList.length === 0 && <Text>No Events</Text>}
      {eventList.length > 0 && (
        <View>
          {eventList.map((event) => {
            return (
                <EventItem key={event.id} event={event} />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default EventList;
const styles = { ...appStyles, ...stylesEvent };
