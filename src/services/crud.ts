import { v4 as uuid } from "uuid";

export const loginService = async (email: string, password: string) => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  if (user && user.email === email && user.password === password) {
    return {
      success: true,
      user,
      message: "logged in "
    };
  } else {
    return {
      success: false,
      message: "Invalid Credential"
    };
  }
};

export const createEvent = async (eventPayload: {
  name: string;
  location: string;
}) => {
  const events = JSON.parse(localStorage.getItem("events") as string);
  if (events) {
    const modifiedEventArr = [...events, { ...eventPayload, id: uuid() }];
    localStorage.setItem("events", JSON.stringify(modifiedEventArr));
    return {
      success: true,
      message: "Event Created"
    };
  } else {
    return {
      success: false,
      message: "Event Not Created"
    };
  }
};

export const deleteEvent = async (id: string) => {
  const events = JSON.parse(localStorage.getItem("events") as string);
  if (events && events.length) {
    const filteredEvents = (events as Array<any>).filter(
      (event: any) => event.id !== id
    );
    localStorage.setItem("events", JSON.stringify(filteredEvents));
    return {
      success: true,
      message: "Event Deleted Successfully"
    };
  } else {
    return {
      success: false,
      message: "Event Deleted Unsuccess"
    };
  }
};
export const updateEvent = async (eventPayload: {
  name: string;
  location: string;
  id: string;
}) => {
  const events = JSON.parse(localStorage.getItem("events") as string);
  if (events && events.length) {
    const filteredEvents = (events as Array<any>).filter(
      (event: any) => event.id !== eventPayload.id
    );
    filteredEvents.push({
      ...eventPayload
    });
    localStorage.setItem("events", JSON.stringify(filteredEvents));
    return {
      success: true,

      message: "Event Updated Successfully"
    };
  } else {
    return {
      success: false,
      message: "Event Updated UnSuccessfully"
    };
  }
};

export const getEvent = async () => {
  const events = JSON.parse(localStorage.getItem("events") as string);
  return {
    success: true,
    message: "Event Fetched UnSuccessfully",
    events
  };
};
